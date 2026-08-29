const perfumeAsset = (file) =>
  `${location.protocol === 'file:' ? 'public/' : '/'}assets/perfumes/${file}`;

const products = [
  { id:0, brand:'Lattafa', name:'Khamrah', short:'KHAMRAH', word:'KHAMRAH', category:'unisex noche', gender:'Unisex', concentration:'EDP', size:'100 ml', price:699, image:perfumeAsset('khamrah.webp'), heroImage:perfumeAsset('khamrah-bottle.webp'), description:'Dulce, especiada y envolvente. Canela, dátiles y praliné se funden con vainilla y tonka para una estela intensa que luce mejor de noche o en clima fresco.', notes:['Canela · Bergamota','Dátiles · Praliné','Vainilla · Tonka'], tags:['CANELA','DÁTILES','VAINILLA'], halo:'radial-gradient(circle,#e5ae55 0%,#a94f1a 45%,#35130d 76%)', slide:'radial-gradient(circle at 64% 43%,rgba(223,160,58,.24) 0%,rgba(124,45,18,.13) 29%,transparent 52%),linear-gradient(120deg,#4a1722 0%,#1b0d10 58%,#080708 100%)', color:'#b36a22' },
  { id:1, brand:'Lattafa', name:'Yara', short:'YARA', word:'YARA', category:'mujer', gender:'Mujer', concentration:'EDP', size:'100 ml', price:499, image:perfumeAsset('yara.webp'), heroImage:perfumeAsset('yara-bottle.webp'), description:'Cremosa, femenina y fácil de usar. Orquídea y mandarina abren paso a frutas tropicales, vainilla, almizcle y sándalo con un acabado suave y coqueto.', notes:['Orquídea · Mandarina','Frutas tropicales','Vainilla · Almizcle'], tags:['ORQUÍDEA','TROPICAL','VAINILLA'], halo:'radial-gradient(circle,#f4c8d7 0%,#c87d9a 46%,#642b47 76%)', slide:'radial-gradient(circle at 64% 42%,rgba(248,197,212,.26) 0%,rgba(181,89,126,.14) 30%,transparent 52%),linear-gradient(120deg,#71344f 0%,#351528 58%,#120a11 100%)', color:'#c47f99' },
  { id:2, brand:'Lattafa', name:'Asad', short:'ASAD', word:'ASAD', category:'hombre noche', gender:'Hombre', concentration:'EDP', size:'100 ml', price:599, image:perfumeAsset('asad.webp'), heroImage:perfumeAsset('asad-bottle.webp'), description:'Oscura, especiada y masculina. Pimienta negra, piña y tabaco evolucionan hacia café, iris, ámbar y vainilla para noches con mucha presencia.', notes:['Pimienta · Piña','Café · Iris','Ámbar · Vainilla'], tags:['PIMIENTA','CAFÉ','ÁMBAR'], halo:'radial-gradient(circle,#d4a052 0%,#7b4d1f 45%,#24180e 76%)', slide:'radial-gradient(circle at 64% 43%,rgba(211,161,74,.22) 0%,rgba(114,73,28,.14) 30%,transparent 52%),linear-gradient(120deg,#44240f 0%,#18100c 58%,#070708 100%)', color:'#9d6a2e' },
  { id:3, brand:'Afnan', name:'9PM', short:'9PM', word:'9PM', category:'hombre noche', gender:'Hombre', concentration:'EDP', size:'100 ml', price:699, image:perfumeAsset('afnan-9pm.webp'), heroImage:perfumeAsset('afnan-9pm-bottle.webp'), description:'Dulce, juvenil y nocturna. Manzana, canela y lavanda se apoyan en flor de azahar, vainilla, tonka y ámbar para fiesta, cita o clima fresco.', notes:['Manzana · Canela','Flor de azahar','Vainilla · Tonka'], tags:['MANZANA','CANELA','TONKA'], halo:'radial-gradient(circle,#c5becd 0%,#73677e 45%,#27202e 76%)', slide:'radial-gradient(circle at 64% 43%,rgba(220,219,231,.18) 0%,rgba(100,74,113,.15) 31%,transparent 52%),linear-gradient(120deg,#3b263e 0%,#18121d 58%,#08080a 100%)', color:'#685c70' },
  { id:4, brand:'Armaf', name:'Club de Nuit Intense Man', short:'INTENSE', word:'INTENSE', category:'hombre fresco', gender:'Hombre', concentration:'EDT', size:'105 ml', price:849, image:perfumeAsset('club-de-nuit.webp'), heroImage:perfumeAsset('club-de-nuit-bottle.webp'), description:'Cítrica, ahumada y poderosa. Limón, piña y bergamota dan paso a abedul, jazmín, almizcle y pachulí en un perfil elegante y muy reconocible.', notes:['Limón · Piña','Abedul · Jazmín','Almizcle · Pachulí'], tags:['PIÑA','ABEDUL','ALMIZCLE'], halo:'radial-gradient(circle,#aaa7ae 0%,#55525c 45%,#17171b 76%)', slide:'radial-gradient(circle at 64% 43%,rgba(180,182,193,.19) 0%,rgba(76,74,85,.14) 31%,transparent 53%),linear-gradient(120deg,#302a30 0%,#141216 58%,#070709 100%)', color:'#46434b' },
  { id:5, brand:'Rasasi', name:'Hawas for Him', short:'HAWAS', word:'HAWAS', category:'hombre fresco', gender:'Hombre', concentration:'EDP', size:'100 ml', price:1099, image:perfumeAsset('hawas.webp'), heroImage:perfumeAsset('hawas-bottle.webp'), description:'Acuática, frutal y energética. Manzana, bergamota y canela se mezclan con notas marinas, ciruela, almizcle y ámbar gris para calor y uso diario.', notes:['Manzana · Bergamota','Acuáticas · Ciruela','Almizcle · Ámbar gris'], tags:['MANZANA','ACUÁTICAS','ALMIZCLE'], halo:'radial-gradient(circle,#c7c2ed 0%,#7776ad 45%,#29324d 76%)', slide:'radial-gradient(circle at 64% 43%,rgba(194,189,255,.23) 0%,rgba(69,90,126,.16) 31%,transparent 53%),linear-gradient(120deg,#223c4e 0%,#21172f 58%,#090910 100%)', color:'#676da1' },
  { id:6, brand:'Lattafa', name:'Qaed Al Fursan', short:'FURSAN', word:'FURSAN', category:'unisex fresco', gender:'Unisex', concentration:'EDP', size:'90 ml', price:499, image:perfumeAsset('qaed-al-fursan.webp'), heroImage:perfumeAsset('qaed-al-fursan-bottle.webp'), description:'Frutal, amaderada y versátil. Piña brillante y azafrán abren una mezcla de jazmín, abeto, ámbar, cedro y oud con un carácter tropical oriental.', notes:['Piña · Azafrán','Jazmín · Abeto','Ámbar · Cedro'], tags:['PIÑA','AZAFRÁN','CEDRO'], halo:'radial-gradient(circle,#e1b454 0%,#8a681e 45%,#27230d 76%)', slide:'radial-gradient(circle at 64% 43%,rgba(231,181,68,.23) 0%,rgba(108,91,27,.14) 31%,transparent 53%),linear-gradient(120deg,#41330c 0%,#17170d 58%,#070807 100%)', color:'#9d7a24' },
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
function heroHTML(p,index){
  const number=String(index+1).padStart(2,'0');
  return `<article class="perfume-slide${index===0?' active':''}" data-product="${p.id}" style="--slide-bg:${p.slide};--accent:${p.color}">
    <div class="ambient ambient-1"></div><div class="ambient ambient-2"></div>
    <div class="floating-note note-a">${p.tags[0]}</div><div class="floating-note note-b">${p.tags[1]}</div><div class="floating-note note-c">${p.tags[2]}</div>
    <div class="wordmark-bg">${p.word}</div>
    <div class="product-visual"><div class="product-glow"></div><img src="${p.heroImage}" alt="Frasco de ${p.name} de ${p.brand}" width="1500" height="1500"></div>
    <div class="hero-copy"><p class="eyebrow">${p.brand.toUpperCase()} · SELECCIÓN ${number}</p><h1>${p.name}</h1><p class="hero-description">${p.description}</p><div class="price-line"><span>Precio</span><strong>${formatPrice(p.price)}</strong></div><div class="hero-cta-row"><button class="primary-btn add-hero" data-product="${p.id}">Agregar al carrito <span>↗</span></button><button class="text-btn open-details" data-product="${p.id}">Ver notas</button></div></div>
  </article>`;
}
document.getElementById('heroStage').innerHTML=products.map(heroHTML).join('');
document.getElementById('totalSlides').textContent=String(products.length).padStart(2,'0');
const slides = [...document.querySelectorAll('.perfume-slide')];
let slideIndex = 0;
let slideAnimating = false;

function showSlide(next){
  if(slideAnimating) return;

  const newIndex = (next + slides.length) % slides.length;
  if(newIndex === slideIndex) return;

  slideAnimating = true;

  const currentSlide = slides[slideIndex];
  const incomingSlide = slides[newIndex];
  const direction = next > slideIndex ? 'next' : 'prev';

  currentSlide.classList.remove('active');
  currentSlide.classList.add('leaving',direction);
  incomingSlide.classList.add('active','entering',direction);

  slideIndex = newIndex;
  document.getElementById('currentSlide').textContent = String(slideIndex+1).padStart(2,'0');

  setTimeout(()=>{
    currentSlide.classList.remove('leaving','next','prev');
    incomingSlide.classList.remove('entering','next','prev');
    slideAnimating = false;
  },950);
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
  return `<article class="product-card" style="--halo:${p.halo};--accent:${p.color}">
    <div class="product-art"><img class="product-card-image" src="${p.image}" alt="${p.name} de ${p.brand}" loading="lazy" width="1500" height="1500"></div>
    <div class="product-info"><h3>${p.name}</h3><p>${p.brand} · ${p.concentration} ${p.size}</p><span class="product-price">${formatPrice(p.price)}</span></div>
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
cart=Object.fromEntries(Object.entries(cart).filter(([id,qty])=>products[Number(id)]&&Number(qty)>0));
function addToCart(id,qty=1){cart[id]=(cart[id]||0)+qty;saveCart();showToast(`${products[id].name} agregado`)}
function changeQty(id,delta){cart[id]=(cart[id]||0)+delta;if(cart[id]<=0) delete cart[id];saveCart()}
function saveCart(){localStorage.setItem('velora-cart',JSON.stringify(cart));renderCart()}
function renderCart(){
  const entries=Object.entries(cart); const count=entries.reduce((s,[,q])=>s+q,0);
  document.getElementById('cartCount').textContent=count;
  const items=document.getElementById('cartItems'); document.getElementById('cartEmpty').style.display=entries.length?'none':'flex'; items.style.display=entries.length?'block':'none';
  items.innerHTML=entries.map(([id,q])=>{const p=products[id];return `<div class="cart-item"><div class="cart-thumb" style="--thumb:${p.halo}"><img src="${p.heroImage}" alt="" width="1500" height="1500"></div><div class="cart-meta"><strong>${p.name}</strong><span>${p.brand} · ${p.size} · ${p.gender}</span><div class="qty"><button data-qty="${id}" data-delta="-1">−</button><b>${q}</b><button data-qty="${id}" data-delta="1">＋</button></div></div><div class="cart-price">${formatPrice(p.price*q)}</div></div>`}).join('');
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
  document.getElementById('modalCategory').textContent=`${p.brand.toUpperCase()} · ${p.gender.toUpperCase()} · ${p.concentration} ${p.size}`;
  document.getElementById('modalName').textContent=p.name; document.getElementById('modalDescription').textContent=p.description; document.getElementById('modalPrice').textContent=formatPrice(p.price);
  const bottle=document.getElementById('modalBottle'); bottle.innerHTML=`<img src="${p.image}" alt="${p.name} de ${p.brand}" width="1500" height="1500">`; bottle.style.background=p.halo;
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
