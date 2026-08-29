const products = [
  { id:0, name:'Noir Intense', short:'NOIR', category:'unisex noche', gender:'Unisex', price:1390, description:'Oscura, elegante y adictiva. Una fragancia nocturna con salida cítrica, corazón ambarado y fondo amaderado.', notes:['Bergamota','Ámbar','Cedro'], halo:'radial-gradient(circle,#b76378 0%,#71283d 44%,#32121d 72%)', bottle:'linear-gradient(110deg,#592031,#170b11)', color:'#6c243a' },
  { id:1, name:'Aura Bloom', short:'AURA', category:'mujer fresco', gender:'Mujer', price:1290, description:'Luminosa, floral y limpia. Diseñada para diario, oficina o cualquier momento donde quieras oler fresca sin pasar desapercibida.', notes:['Pera','Peonía','Almizcle'], halo:'radial-gradient(circle,#e6c2ec 0%,#af78bd 45%,#6c397a 72%)', bottle:'linear-gradient(110deg,#aa63b4,#481a58)', color:'#7f3e90' },
  { id:2, name:'Ember Reserve', short:'EMBER', category:'unisex noche', gender:'Unisex', price:1490, description:'Gourmand sofisticada y envolvente. Vainilla tostada, tonka y café con una base cálida perfecta para noche o clima fresco.', notes:['Vainilla','Tonka','Café'], halo:'radial-gradient(circle,#d7a06a 0%,#9b562a 45%,#4d2410 72%)', bottle:'linear-gradient(110deg,#a45b26,#3b1709)', color:'#985022' },
  { id:3, name:'Ocean Veil', short:'OCEAN', category:'hombre fresco', gender:'Hombre', price:1350, description:'Fresca, mineral y pulida. Una fragancia versátil para calor, trabajo y uso diario con fondo limpio y elegante.', notes:['Neroli','Sal marina','Vetiver'], halo:'radial-gradient(circle,#9bdae8 0%,#4f9bb2 45%,#145064 72%)', bottle:'linear-gradient(110deg,#3a9aae,#0e4154)', color:'#23778e' },
  { id:4, name:'Velvet Cherry', short:'CHERRY', category:'mujer noche', gender:'Mujer', price:1590, description:'Cereza negra, rosa oscura y vainilla. Dulce sin ser infantil, intensa sin sentirse pesada.', notes:['Cereza negra','Rosa','Vainilla'], halo:'radial-gradient(circle,#d56a82 0%,#8f2642 48%,#40111f 74%)', bottle:'linear-gradient(110deg,#9e2549,#3a0c1c)', color:'#9b2b4b' },
  { id:5, name:'Santal 07', short:'SANTAL', category:'unisex', gender:'Unisex', price:1690, description:'Sándalo cremoso, iris y cardamomo. Minimalista, seco y elegante para quienes prefieren aromas de nicho.', notes:['Sándalo','Iris','Cardamomo'], halo:'radial-gradient(circle,#d6c4a9 0%,#a17d5e 48%,#59402b 74%)', bottle:'linear-gradient(110deg,#8f745b,#473222)', color:'#806247' },
  { id:6, name:'Citrus Atelier', short:'CITRUS', category:'hombre fresco', gender:'Hombre', price:1190, description:'Mandarina, té verde y vetiver. Ligera, energética y muy fácil de usar todos los días.', notes:['Mandarina','Té verde','Vetiver'], halo:'radial-gradient(circle,#e5d36f 0%,#9ea34f 48%,#485226 74%)', bottle:'linear-gradient(110deg,#8f9b42,#3a4722)', color:'#7d8b3d' },
  { id:7, name:'Rose Musk', short:'ROSE', category:'mujer', gender:'Mujer', price:1320, description:'Rosa suave, lichi y almizcle. Delicada, moderna y limpia; perfecta para regalo o primera fragancia premium.', notes:['Lichi','Rosa','Musk'], halo:'radial-gradient(circle,#f2c8cf 0%,#cc8999 48%,#85485a 74%)', bottle:'linear-gradient(110deg,#d18899,#783849)', color:'#a45a6d' },
];

const formatPrice = value => new Intl.NumberFormat('es-MX',{style:'currency',currency:'MXN',maximumFractionDigits:0}).format(value);

/* ---------- NAVEGACIÓN: UNA SOLA PANTALLA ---------- */
const views = [...document.querySelectorAll('.app-view')];
const navLinks = [...document.querySelectorAll('[data-view-link]')];
let currentView = 'inicio';

function showView(name, updateHash = true){
  if(!views.some(view => view.dataset.view === name)) name = 'inicio';
  currentView = name;
  views.forEach(view => view.classList.toggle('active', view.dataset.view === name));
  navLinks.forEach(link => link.classList.toggle('active', link.dataset.viewLink === name));
  if(updateHash) history.replaceState(null,'',`#${name}`);
}
navLinks.forEach(link => link.addEventListener('click', e => {
  e.preventDefault();
  showView(link.dataset.viewLink);
}));
const initialView = location.hash.replace('#','');
if(initialView) showView(initialView,false);

/* Bloquea el scroll vertical del documento. En Inicio la rueda SOLO cambia la fragancia. */
let wheelLock = false;
window.addEventListener('wheel', e => {
  if(document.querySelector('.cart-drawer.open,.modal.open')) return;
  e.preventDefault();
  if(currentView !== 'inicio' || Math.abs(e.deltaY) < 18 || wheelLock) return;
  wheelLock = true;
  showSlide(slideIndex + (e.deltaY > 0 ? 1 : -1));
  setTimeout(() => wheelLock = false, 620);
},{passive:false});

/* ---------- HERO ---------- */
const slides = [...document.querySelectorAll('.perfume-slide')];
let slideIndex = 0;
function showSlide(next){
  slideIndex = (next + slides.length) % slides.length;
  slides.forEach((slide,i)=>slide.classList.toggle('active',i===slideIndex));
  document.getElementById('currentSlide').textContent = String(slideIndex+1).padStart(2,'0');
}
document.getElementById('nextSlide').addEventListener('click',()=>showSlide(slideIndex+1));
document.getElementById('prevSlide').addEventListener('click',()=>showSlide(slideIndex-1));
let touchStartX = 0;
document.querySelector('.hero-view').addEventListener('touchstart',e=>touchStartX=e.touches[0].clientX,{passive:true});
document.querySelector('.hero-view').addEventListener('touchend',e=>{
  const diff = touchStartX - e.changedTouches[0].clientX;
  if(Math.abs(diff)>45) showSlide(slideIndex+(diff>0?1:-1));
},{passive:true});

/* ---------- CATÁLOGO PAGINADO ---------- */
let activeFilter = 'all';
let catalogPage = 0;
function filteredProducts(){return activeFilter === 'all' ? products : products.filter(p => p.category.includes(activeFilter));}
function pageSize(){return window.innerWidth <= 1100 ? 4 : 4;}
function cardHTML(p){
  return `<article class="product-card" style="--halo:${p.halo};--bottle:${p.bottle}">
    <div class="product-art"><div class="mini-bottle"><div class="cap"></div><div class="neck"></div><div class="glass"><div class="label">${p.short}</div></div></div></div>
    <div class="product-info"><h3>${p.name}</h3><p>${p.gender} · EDP 100 ml</p><span class="product-price">${formatPrice(p.price)}</span></div>
    <div class="product-actions"><button class="card-add" data-add="${p.id}">Agregar</button><button class="card-details" data-details="${p.id}" aria-label="Ver detalles de ${p.name}">＋</button></div>
  </article>`;
}
function renderProducts(){
  const list = filteredProducts();
  const size = pageSize();
  const maxPage = Math.max(0,Math.ceil(list.length/size)-1);
  catalogPage = Math.min(catalogPage,maxPage);
  const start = catalogPage*size;
  const page = list.slice(start,start+size);
  document.getElementById('productGrid').innerHTML = page.map(cardHTML).join('');
  const first = list.length ? start+1 : 0;
  const last = Math.min(start+page.length,list.length);
  document.getElementById('catalogCount').textContent = `${String(first).padStart(2,'0')}—${String(last).padStart(2,'0')} / ${String(list.length).padStart(2,'0')}`;
  document.getElementById('prevProducts').disabled = catalogPage === 0;
  document.getElementById('nextProducts').disabled = catalogPage === maxPage;
}
renderProducts();
document.querySelectorAll('.filter').forEach(btn=>btn.addEventListener('click',()=>{
  document.querySelectorAll('.filter').forEach(x=>x.classList.remove('active'));
  btn.classList.add('active'); activeFilter=btn.dataset.filter; catalogPage=0; renderProducts();
}));
document.getElementById('prevProducts').addEventListener('click',()=>{if(catalogPage>0){catalogPage--;renderProducts();}});
document.getElementById('nextProducts').addEventListener('click',()=>{const max=Math.ceil(filteredProducts().length/pageSize())-1;if(catalogPage<max){catalogPage++;renderProducts();}});
window.addEventListener('resize',renderProducts);

/* ---------- CARRITO ---------- */
let cart;
try{cart = JSON.parse(localStorage.getItem('velora-cart') || '{}');}catch{cart = {}}
function addToCart(id,qty=1){cart[id]=(cart[id]||0)+qty;saveCart();showToast(`${products[id].name} agregado`)}
function changeQty(id,delta){cart[id]=(cart[id]||0)+delta;if(cart[id]<=0) delete cart[id];saveCart()}
function saveCart(){localStorage.setItem('velora-cart',JSON.stringify(cart));renderCart()}
function renderCart(){
  const entries=Object.entries(cart); const count=entries.reduce((s,[,q])=>s+q,0);
  document.getElementById('cartCount').textContent=count;
  const items=document.getElementById('cartItems'); document.getElementById('cartEmpty').style.display=entries.length?'none':'flex'; items.style.display=entries.length?'block':'none';
  items.innerHTML=entries.map(([id,q])=>{const p=products[id];return `<div class="cart-item"><div class="cart-thumb" style="background:${p.color}">${p.short}</div><div class="cart-meta"><strong>${p.name}</strong><span>100 ml · ${p.gender}</span><div class="qty"><button data-qty="${id}" data-delta="-1">−</button><b>${q}</b><button data-qty="${id}" data-delta="1">＋</button></div></div><div class="cart-price">${formatPrice(p.price*q)}</div></div>`}).join('');
  document.getElementById('subtotal').textContent=formatPrice(entries.reduce((s,[id,q])=>s+products[id].price*q,0));
}
renderCart();
document.addEventListener('click',e=>{
  const add=e.target.closest('[data-add],.add-hero'); if(add) addToCart(Number(add.dataset.add ?? add.dataset.product));
  const details=e.target.closest('[data-details],.open-details'); if(details) openProduct(Number(details.dataset.details ?? details.dataset.product));
  const qty=e.target.closest('[data-qty]'); if(qty) changeQty(qty.dataset.qty,Number(qty.dataset.delta));
});
const drawer=document.getElementById('cartDrawer');
function toggleCart(open){drawer.classList.toggle('open',open);drawer.setAttribute('aria-hidden',String(!open))}
document.getElementById('cartBtn').addEventListener('click',()=>toggleCart(true));document.getElementById('closeCart').addEventListener('click',()=>toggleCart(false));document.getElementById('drawerBackdrop').addEventListener('click',()=>toggleCart(false));

/* ---------- PRODUCTO ---------- */
const modal=document.getElementById('productModal'); let modalProduct=0;
function openProduct(id){
  modalProduct=id; const p=products[id];
  document.getElementById('modalCategory').textContent=`${p.gender.toUpperCase()} · EAU DE PARFUM`;
  document.getElementById('modalName').textContent=p.name; document.getElementById('modalDescription').textContent=p.description; document.getElementById('modalPrice').textContent=formatPrice(p.price);
  const bottle=document.getElementById('modalBottle'); bottle.textContent=p.short; bottle.style.background=`radial-gradient(circle at 35% 30%, rgba(255,255,255,.18), transparent 22%), ${p.bottle}`;
  document.getElementById('modalNotes').innerHTML=p.notes.map((n,i)=>`<div class="note-box"><span>${['SALIDA','CORAZÓN','FONDO'][i]}</span><strong>${n}</strong></div>`).join('');
  modal.classList.add('open');modal.setAttribute('aria-hidden','false');
}
function closeModal(){modal.classList.remove('open');modal.setAttribute('aria-hidden','true')}
document.querySelectorAll('[data-close-modal]').forEach(x=>x.addEventListener('click',closeModal));
document.getElementById('modalAdd').addEventListener('click',()=>{addToCart(modalProduct);closeModal();toggleCart(true)});

/* ---------- UTILIDADES ---------- */
let toastTimer;function showToast(text){const t=document.getElementById('toast');t.textContent=text;t.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>t.classList.remove('show'),1800)}
document.getElementById('searchBtn').addEventListener('click',()=>{showView('catalogo');showToast('Explora y filtra el catálogo')});
document.getElementById('finderBtn').addEventListener('click',()=>{openProduct(1);showToast('Demo: aquí conectamos el quiz olfativo')});
document.getElementById('contactCatalogBtn').addEventListener('click',()=>showView('catalogo'));
function buildWhatsAppOrder(){
  const entries=Object.entries(cart); if(!entries.length){showToast('Tu carrito está vacío');return}
  const lines=entries.map(([id,q])=>`• ${q}x ${products[id].name} — ${formatPrice(products[id].price*q)}`);
  const total=entries.reduce((s,[id,q])=>s+products[id].price*q,0);
  const message=`Hola, quiero hacer este pedido en Velora:\n\n${lines.join('\n')}\n\nTotal: ${formatPrice(total)}\n\n¿Me confirmas disponibilidad y envío?`;
  window.open(`https://wa.me/5218711649703?text=${encodeURIComponent(message)}`,'_blank');
}
document.getElementById('checkoutBtn').addEventListener('click',buildWhatsAppOrder);
window.addEventListener('keydown',e=>{
  if(e.key==='Escape'){toggleCart(false);closeModal();return}
  if(currentView==='inicio' && e.key==='ArrowRight') showSlide(slideIndex+1);
  if(currentView==='inicio' && e.key==='ArrowLeft') showSlide(slideIndex-1);
});
