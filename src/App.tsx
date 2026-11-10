import { useMemo, useState } from 'react';
import { ArrowRight, ArrowUpRight, BookOpen, ChevronDown, Menu, Search, ShoppingBag, Sparkles, X } from 'lucide-react';

type Product = { id:number; title:string; category:string; price:number; image:string; note:string };
const products:Product[]=[
 {id:1,title:'The Wisdom of Our Ancestors',category:'Books & Stories',price:42000,image:'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=900&q=85',note:'A journey through memory, identity and belonging'},
 {id:2,title:'African Patterns Journal',category:'Art & Objects',price:28000,image:'https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=900&q=85',note:'A beautiful place for your thoughts'},
 {id:3,title:'Stories of the Baobab',category:'Books & Stories',price:35000,image:'https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fit=crop&w=900&q=85',note:'Folktales, lessons and living traditions'},
 {id:4,title:'Heritage Art Print',category:'Art & Objects',price:55000,image:'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=900&q=85',note:'Bring a piece of African artistry home'}
];
const money=(n:number)=>new Intl.NumberFormat('en-TZ',{style:'currency',currency:'TZS',maximumFractionDigits:0}).format(n);
export default function App(){
 const [menu,setMenu]=useState(false),[category,setCategory]=useState('All'),[cart,setCart]=useState<number[]>([]),[search,setSearch]=useState(''),[notice,setNotice]=useState('');
 const shown=useMemo(()=>products.filter(p=>(category==='All'||p.category===category)&&p.title.toLowerCase().includes(search.toLowerCase())),[category,search]);
 const add=(id:number)=>{setCart(c=>[...c,id]);setNotice('Added to your bag');window.setTimeout(()=>setNotice(''),2200)};
 return <div className="site-shell">
  <div className="announcement">A living collection of African stories, culture and creativity <span>✳</span> Discover something meaningful</div>
  <header className="header">
   <a className="brand" href="#"><span className="brand-mark">A</span><span>ANCESTORS <i>AURA</i><small>ROOTED IN STORY. MADE TO INSPIRE.</small></span></a>
   <nav className={menu?'nav open':'nav'}><a href="#shop" onClick={()=>setMenu(false)}>Shop</a><a href="#stories" onClick={()=>setMenu(false)}>Our stories</a><a href="#heritage" onClick={()=>setMenu(false)}>Heritage</a><a href="#about" onClick={()=>setMenu(false)}>About</a></nav>
   <div className="header-actions"><button className="icon-btn search-toggle" aria-label="Search" onClick={()=>document.getElementById('search')?.focus()}><Search size={19}/></button><a className="bag" href="#shop"><ShoppingBag size={19}/><span>Bag ({cart.length})</span></a><button className="icon-btn menu-toggle" aria-label="Toggle menu" onClick={()=>setMenu(!menu)}>{menu?<X/>:<Menu/>}</button></div>
  </header>
  <main>
   <section className="hero">
    <div className="hero-image" role="img" aria-label="African savannah at golden hour"></div><div className="hero-shade"></div>
    <div className="hero-content"><div className="eyebrow light"><span></span> THE PAST LIVES WITHIN US</div><h1>Stories that<br/><em>carry us.</em></h1><p>Discover the beauty, wisdom and creativity of Africa. A home for stories that connect generations and keep heritage alive.</p><div className="hero-ctas"><a className="btn btn-gold" href="#shop">Explore the collection <ArrowUpRight size={17}/></a><a className="text-link light-link" href="#stories">Our story <ArrowRight size={16}/></a></div></div>
    <div className="hero-side-note">CULTURE · MEMORY · IDENTITY</div><div className="hero-bottom"><span>01 / 04</span><span className="hero-line"></span><span>ROOTS THAT REACH FORWARD</span></div>
   </section>
   <section className="intro section-wrap" id="about"><div className="intro-symbol">✳</div><div><div className="eyebrow">MORE THAN A STORE</div><h2>Honouring where<br/>our stories begin.</h2></div><p>Ancestors Aura celebrates the people, places and traditions that shape who we are. Explore thoughtful pieces inspired by African heritage, made to be shared, remembered and passed on.</p></section>
   <section className="shop-section" id="shop"><div className="section-wrap"><div className="section-heading"><div><div className="eyebrow">THE CURATED COLLECTION</div><h2>Find something <em>meaningful.</em></h2></div><a className="text-link" href="#shop">View all collection <ArrowRight size={16}/></a></div>
    <div className="shop-tools"><div className="filters">{['All','Books & Stories','Art & Objects'].map(c=><button key={c} className={category===c?'filter active':'filter'} onClick={()=>setCategory(c)}>{c}</button>)}</div><label className="search-box"><Search size={16}/><input id="search" value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search the collection"/></label></div>
    <div className="product-grid">{shown.map((p,i)=><article className="product-card" key={p.id}><div className="product-image-wrap"><img src={p.image} alt={p.title}/><span className="product-index">0{i+1}</span><button className="quick-add" onClick={()=>add(p.id)} aria-label={'Add '+p.title+' to bag'}><ShoppingBag size={17}/></button></div><div className="product-meta"><span>{p.category}</span><span>{money(p.price)}</span></div><h3>{p.title}</h3><p>{p.note}</p></article>)}</div>
    {shown.length===0&&<p className="empty">No pieces match your search. Try another word.</p>}
   </div></section>
   <section className="story-feature" id="stories"><div className="story-photo"></div><div className="story-copy"><div className="eyebrow light">THE STORIES WE KEEP</div><h2>Every generation<br/>has a story to tell.</h2><p>From the wisdom of elders to the creativity of a new generation, African heritage is always growing. We bring these stories closer through books, art and objects with meaning.</p><a className="btn btn-outline" href="#heritage">Explore our stories <ArrowUpRight size={17}/></a></div></section>
   <section className="heritage section-wrap" id="heritage"><div className="heritage-top"><div><div className="eyebrow">ROOTED IN CULTURE</div><h2>Many cultures.<br/><em>One shared future.</em></h2></div><p>We believe heritage is not something we leave behind. It is knowledge we carry forward, celebrate and share.</p></div><div className="heritage-cards"><div className="heritage-card hc-one"><span>01 / ORAL TRADITIONS</span><h3>Wisdom passed<br/>from voice to voice.</h3></div><div className="heritage-card hc-two"><span>02 / ART & CRAFT</span><h3>Made by hand.<br/>Rich in meaning.</h3></div><div className="heritage-card hc-three"><span>03 / LIVING HISTORY</span><h3>Our past is part<br/>of what comes next.</h3></div></div></section>
   <section className="newsletter"><div className="newsletter-icon"><Sparkles/></div><div><div className="eyebrow light">LET THE STORIES FIND YOU</div><h2>A little heritage<br/>in your inbox.</h2><p>New collections, stories and thoughtful discoveries.</p></div><form onSubmit={e=>{e.preventDefault();setNotice('Thank you. Newsletter signup is a preview until connected to Shopify.')}}><input type="email" required placeholder="Your email address"/><button aria-label="Subscribe"><ArrowRight/></button></form></section>
  </main>
  <footer className="footer"><a className="brand footer-brand" href="#"><span className="brand-mark">A</span><span>ANCESTORS <i>AURA</i><small>ROOTED IN STORY. MADE TO INSPIRE.</small></span></a><p>Celebrating African heritage, one story at a time.</p><div className="footer-links"><a href="#shop">Shop</a><a href="#stories">Stories</a><a href="#about">Our story</a><a href="mailto:hello@ancestorsaura.com">Contact</a></div><small>© {new Date().getFullYear()} Ancestors Aura. All rights reserved.</small></footer>
  {notice&&<div className="toast"><Sparkles size={16}/>{notice}</div>}
 </div>
}
