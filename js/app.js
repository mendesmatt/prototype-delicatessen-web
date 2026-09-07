const CATEGORIES = [
  {id:'queijos',   name:'Queijos Artesanais',              sub:'Canastra, Serro, Salitre, Tulha',        emoji:'🧀'},
  {id:'doces',     name:'Doces, Goiabadas & Geleias',      sub:'Da roça mineira para a sua mesa',        emoji:'🍯'},
  {id:'cafes',     name:'Cafés Especiais & Acompanhamentos',sub:'Torra da fazenda e broas',              emoji:'☕'},
  {id:'cachacas',  name:'Cachaças, Licores & Cervejas',    sub:'Envelhecidas em madeira nobre',          emoji:'🥃'},
  {id:'defumados', name:'Linguiças, Lombo & Defumados',    sub:'Curados no fumeiro a lenha',             emoji:'🥓'},
  {id:'pao',       name:'Pão de Queijo & Broas',           sub:'Quentinho a qualquer hora',              emoji:'🫓'},
  {id:'kits',      name:'Kits Presenteáveis & Cestas',     sub:'O melhor de Minas embrulhado',           emoji:'🎁'}
];

const IMG = {
  cheese:'https://images.unsplash.com/photo-1452195100486-9cc805987862?auto=format&fit=crop&w=500&q=70',
  cheese2:'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?auto=format&fit=crop&w=500&q=70',
  doce:'https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=500&q=70',
  jam:'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=500&q=70',
  coffee:'https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=500&q=70',
  coffeecup:'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=500&q=70',
  cachaca:'https://images.unsplash.com/photo-1569529465841-dfecdab7503b?auto=format&fit=crop&w=500&q=70',
  sausage:'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=500&q=70',
  bread:'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=500&q=70',
  gift:'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?auto=format&fit=crop&w=500&q=70'
};

const PRODUCTS = [
  {id:'canastra', name:'Queijo Canastra Meia Cura', price:89.90, cat:'queijos', emoji:'🧀', img:IMG.cheese,
   selo:'Selo Canastra', seloColor:'#15803D', unit:'peça 1kg', variants:['Peça inteira (1kg)','Metade (500g)'],
   harmon:'Combina perfeitamente com doce de leite, goiabada cascão ou um bom vinho tinto encorpado.',
   producer:'Feito pela Família Reis, na Serra da Canastra, seguindo a receita passada por quatro gerações.'},
  {id:'serro', name:'Queijo do Serro Curado', price:74.90, cat:'queijos', emoji:'🧀', img:IMG.cheese2,
   selo:'Premiado', seloColor:'#D97706', unit:'peça 700g', variants:['Peça inteira'],
   harmon:'Fica delicioso com goiabada quente e um café coado bem forte no fim da tarde.',
   producer:'Produzido no Alto do Serro, primeiro queijo artesanal do Brasil com reconhecimento de origem.'},
  {id:'salitre', name:'Queijo Salitre Envelhecido', price:98.00, cat:'queijos', emoji:'🧀', img:IMG.cheese,
   selo:'Artesanal', seloColor:'#9A3412', unit:'peça 800g', variants:['Peça inteira'],
   harmon:'Intenso e picante, harmoniza com mel, nozes e uma cachaça envelhecida.',
   producer:'Curado por mais de 90 dias em câmara de pedra na região do Salitre.'},

  {id:'doceleite', name:'Doce de Leite Cremoso de Viçosa', price:32.90, cat:'doces', emoji:'🍮', img:IMG.doce,
   selo:'Premiado em Viçosa', seloColor:'#D97706', unit:'pote 410g', variants:['Cremoso','Com cacau'],
   harmon:'Espalhe na broa quentinha ou sirva com queijo canastra para a clássica dupla mineira.',
   producer:'Dona Cida cozinha o doce em tacho de cobre no fogão a lenha, ponto no capricho.'},
  {id:'goiabada', name:'Goiabada Cascão da Roça', price:28.50, cat:'doces', emoji:'🍯', img:IMG.jam,
   selo:'Artesanal', seloColor:'#9A3412', unit:'barra 600g', variants:['Cascão','Cremosa'],
   harmon:'A famosa Romeu e Julieta: fatie com queijo minas e sirva sem moderação.',
   producer:'Feita com goiabas colhidas no pomar da propriedade, sem conservantes.'},
  {id:'geleia', name:'Geleia de Jabuticaba', price:24.90, cat:'doces', emoji:'🍇', img:IMG.jam,
   selo:'Artesanal', seloColor:'#15803D', unit:'pote 300g', variants:['Tradicional'],
   harmon:'Perfeita em torradas, com queijos curados ou por cima de um sorvete de creme.',
   producer:'Colhida na safra curta da jabuticaba, poucas unidades por ano.'},

  {id:'cafefazenda', name:'Café Especial Torrado na Fazenda', price:46.90, cat:'cafes', emoji:'☕', img:IMG.coffee,
   selo:'Premiado', seloColor:'#D97706', unit:'pacote 500g', variants:['Grão','Moído'],
   harmon:'Notas de chocolate e caramelo. Ideal coado no pano com um pão de queijo.',
   producer:'Cultivado a 1.100m de altitude no Sul de Minas, torrado em pequenos lotes.'},
  {id:'cafecoado', name:'Café Coado Tradicional Moído', price:34.90, cat:'cafes', emoji:'☕', img:IMG.coffeecup,
   selo:'Artesanal', seloColor:'#9A3412', unit:'pacote 500g', variants:['Moído'],
   harmon:'Encorpado e clássico, o café de todo dia para a mesa de Minas.',
   producer:'Blend de fazendas familiares da região da Mantiqueira.'},

  {id:'cachacajequi', name:'Cachaça Envelhecida em Jequitibá', price:119.00, cat:'cachacas', emoji:'🥃', img:IMG.cachaca,
   selo:'Artesanal', seloColor:'#9A3412', unit:'garrafa 700ml', variants:['3 anos','5 anos'],
   harmon:'Aromas amadeirados e baunilha. Aprecie pura ou com uma rodela de limão.',
   producer:'Destilada em alambique de cobre no alambique Jequitibá, em Salinas.'},
  {id:'licor', name:'Licor de Jenipapo Artesanal', price:64.90, cat:'cachacas', emoji:'🍶', img:IMG.cachaca,
   selo:'Artesanal', seloColor:'#15803D', unit:'garrafa 500ml', variants:['Tradicional'],
   harmon:'Doce e aromático, ótimo como digestivo ou sobre sorvete de creme.',
   producer:'Receita caseira infusionada por 40 dias com frutos do cerrado mineiro.'},

  {id:'linguica', name:'Linguiça Artesanal Defumada', price:39.90, cat:'defumados', emoji:'🌭', img:IMG.sausage,
   selo:'Artesanal', seloColor:'#9A3412', unit:'peça 500g', variants:['Apimentada','Tradicional'],
   harmon:'Vai bem no feijão tropeiro, na brasa ou frita com cebola e cachaça.',
   producer:'Curada no fumeiro a lenha por três dias, tempero da casa.'},
  {id:'lombo', name:'Lombo Canastra Defumado', price:54.90, cat:'defumados', emoji:'🥓', img:IMG.sausage,
   selo:'Premiado', seloColor:'#D97706', unit:'peça 400g', variants:['Fatiado','Peça'],
   harmon:'Sirva em tábua com queijos e geleias ou no pão na chapa.',
   producer:'Defumado com lenha de eucalipto na Serra da Canastra.'},

  {id:'paoqueijo', name:'Pão de Queijo Congelado Premium', price:42.90, cat:'pao', emoji:'🫓', img:IMG.bread,
   selo:'Selo Canastra', seloColor:'#15803D', unit:'pacote 1kg', variants:['Coquetel','Tradicional'],
   harmon:'Assado na hora, quentinho, com um café passado na hora. Puro afeto.',
   producer:'Feito com polvilho azedo e queijo canastra curado, sem aditivos.'},
  {id:'broa', name:'Broa de Fubá da Vovó', price:22.90, cat:'pao', emoji:'🍞', img:IMG.bread,
   selo:'Artesanal', seloColor:'#9A3412', unit:'unidade 500g', variants:['Com erva-doce'],
   harmon:'Aquela fatia com manteiga e doce de leite acompanhando o cafezinho.',
   producer:'Assada em forno a lenha, receita da vó Benedita.'},

  {id:'kit-cafe', name:'Kit Café da Manhã Mineiro', price:189.00, cat:'kits', emoji:'🎁', img:IMG.gift,
   selo:'Selo de Origem', seloColor:'#15803D', unit:'cesta', variants:['Cesta completa'],
   harmon:'Café, broa, doce de leite e queijo canastra. A mesa de Minas em uma cesta.',
   producer:'Curadoria do empório com produtos de quatro famílias produtoras.'},
  {id:'kit-tabua', name:'Kit Tábua de Frios & Cachaça', price:229.00, cat:'kits', emoji:'🎁', img:IMG.gift,
   selo:'Presente', seloColor:'#D97706', unit:'kit', variants:['Kit presente'],
   harmon:'Queijos curados, lombo defumado e uma cachaça envelhecida para brindar.',
   producer:'Montado à mão com tábua de madeira de reflorestamento inclusa.'}
];

const PRODUCERS = [
  {name:'Família Reis', region:'Serra da Canastra', emoji:'🧀',
   story:'Quatro gerações fazendo queijo canastra no mesmo terreiro, com leite das próprias vacas.'},
  {name:'Dona Cida', region:'Viçosa', emoji:'🍮',
   story:'Cozinha o doce de leite em tacho de cobre no fogão a lenha, do jeito que a mãe ensinou.'},
  {name:'Fazenda Boa Vista', region:'Sul de Minas', emoji:'☕',
   story:'Café de altitude cultivado e torrado na fazenda, colheita selecionada grão a grão.'},
  {name:'Alambique Jequitibá', region:'Salinas', emoji:'🥃',
   story:'Cachaça de alambique envelhecida em madeiras nobres, no coração do sertão mineiro.'}
];

const ORDERS = [
  {n:'#2041', date:'28 jul', items:'Canastra + Doce de leite', total:'R$ 122,80', status:'Entregue'},
  {n:'#1987', date:'12 jul', items:'Kit Café da Manhã Mineiro', total:'R$ 189,00', status:'Entregue'}
];

const SHORTCUTS = [
  {label:'Queijos Premiados', cat:'queijos', emoji:'🧀'},
  {label:'Doces & Compotas',  cat:'doces',   emoji:'🍯'},
  {label:'Cafés & Cachaças',  cat:'cafes',   emoji:'☕'},
  {label:'Pão de Queijo & Broas', cat:'pao', emoji:'🫓'},
  {label:'Kits Mineiros',     cat:'kits',    emoji:'🎁'}
];

const FEATURED = ['canastra','doceleite','cafefazenda','cachacajequi','goiabada','paoqueijo'];

const cart = {};
let coupon = null;
let frete = null;
const P = id => PRODUCTS.find(p=>p.id===id);
const brl = v => 'R$ ' + v.toFixed(2).replace('.',',');

function productCard(p){
  return `<div class="bg-white rounded-2xl overflow-hidden border border-creme2 press cursor-pointer" onclick="openProduct('${p.id}')">
    <div class="imgwrap h-28">
      <span class="emoji">${p.emoji}</span>
      <img src="${p.img}" onerror="this.remove()" alt="">
      <span class="selo absolute top-2 left-2 bg-white/92" style="color:${p.seloColor}">
        <svg width="8" height="8" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.4 5.8L20 8l-4.5 4L17 18l-5-3.2L7 18l1.5-6L4 8l5.6-.2z"/></svg>${p.selo}
      </span>
    </div>
    <div class="p-2.5">
      <p class="text-[12px] font-semibold text-tijolo leading-tight h-8 overflow-hidden">${p.name}</p>
      <p class="text-[10px] text-tijolo/50">${p.unit}</p>
      <div class="flex items-center justify-between mt-1.5">
        <span class="font-display text-[15px] font-semibold text-tijolo">${brl(p.price)}</span>
        <button class="press w-8 h-8 rounded-full bg-tijolo flex items-center justify-center" onclick="event.stopPropagation();addToCart('${p.id}')" aria-label="Adicionar">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FDFBF7" stroke-width="2.4"><path d="M12 5v14M5 12h14" stroke-linecap="round"/></svg>
        </button>
      </div>
    </div>
  </div>`;
}

function renderStatic(){
  document.getElementById('shortcut-row').innerHTML = SHORTCUTS.map(s=>`
    <button class="press flex-shrink-0 flex flex-col items-center gap-1.5 w-16" onclick="go('categorias');filterCategory('${s.cat}')">
      <span class="w-14 h-14 rounded-2xl bg-creme2 border border-[#eaddc8] flex items-center justify-center text-[24px]">${s.emoji}</span>
      <span class="text-[9.5px] font-semibold text-tijolo/80 leading-tight text-center">${s.label}</span>
    </button>`).join('');

  document.getElementById('featured-grid').innerHTML = FEATURED.map(id=>productCard(P(id))).join('');

  document.getElementById('category-list').innerHTML = CATEGORIES.map(c=>`
    <button class="press w-full flex items-center gap-3 bg-white rounded-2xl border border-creme2 p-3 text-left" onclick="filterCategory('${c.id}')">
      <span class="w-12 h-12 rounded-xl bg-creme2 flex items-center justify-center text-[24px] flex-shrink-0">${c.emoji}</span>
      <span class="flex-1">
        <span class="block text-[13.5px] font-semibold text-tijolo">${c.name}</span>
        <span class="block text-[11px] text-tijolo/55">${c.sub}</span>
      </span>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#c9a988" stroke-width="2"><path d="M9 6l6 6-6 6" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </button>`).join('');

  document.getElementById('producer-list').innerHTML = PRODUCERS.map(pr=>`
    <div class="flex gap-3 bg-white rounded-2xl border border-creme2 p-3">
      <span class="w-12 h-12 rounded-full bg-creme2 flex items-center justify-center text-[24px] flex-shrink-0">${pr.emoji}</span>
      <div>
        <p class="text-[13px] font-semibold text-tijolo">${pr.name} <span class="text-[10px] font-medium text-oliva">· ${pr.region}</span></p>
        <p class="text-[11px] text-tijolo/60 leading-snug mt-0.5">${pr.story}</p>
      </div>
    </div>`).join('');

  document.getElementById('orders-list').innerHTML = ORDERS.map(o=>`
    <div class="flex items-center justify-between bg-white rounded-xl border border-creme2 px-3.5 py-2.5">
      <div>
        <p class="text-[12.5px] font-semibold text-tijolo">Pedido ${o.n} <span class="text-[10px] text-tijolo/45">· ${o.date}</span></p>
        <p class="text-[11px] text-tijolo/55">${o.items}</p>
      </div>
      <div class="text-right">
        <p class="text-[12px] font-semibold text-tijolo">${o.total}</p>
        <span class="text-[9px] font-bold text-oliva bg-oliva/10 px-2 py-0.5 rounded-full">${o.status}</span>
      </div>
    </div>`).join('');
}

function filterCategory(catId){
  const c = CATEGORIES.find(x=>x.id===catId);
  const items = PRODUCTS.filter(p=>p.cat===catId);
  document.getElementById('cat-results-title').textContent = c.name;
  document.getElementById('cat-grid').innerHTML = items.map(productCard).join('');
  document.getElementById('cat-results').classList.remove('hidden');
  document.getElementById('screen').scrollTo({top:0,behavior:'smooth'});
}
function clearCategory(){ document.getElementById('cat-results').classList.add('hidden'); }

function cartCount(){ return Object.values(cart).reduce((a,i)=>a+i.qty,0); }
function subtotal(){ return Object.entries(cart).reduce((a,[id,i])=>a+P(id).price*i.qty,0); }

function updateBadges(){
  const n = cartCount();
  document.querySelectorAll('.cart-badge').forEach(b=>{
    b.textContent = n; b.style.display = n>0 ? 'flex' : 'none';
  });
}

function addToCart(id, variant){
  if(!cart[id]) cart[id] = {qty:0, variant: variant || P(id).variants[0]};
  cart[id].qty++;
  if(variant) cart[id].variant = variant;
  updateBadges(); renderCart();
  showToast(P(id).name.split(' ').slice(0,2).join(' ') + ' na sacola');
}
function changeQty(id, d){
  if(!cart[id]) return;
  cart[id].qty += d;
  if(cart[id].qty<=0) delete cart[id];
  updateBadges(); renderCart();
}

function renderCart(){
  const empty = document.getElementById('cart-empty');
  const content = document.getElementById('cart-content');
  const n = cartCount();
  if(n===0){ empty.classList.remove('hidden'); content.classList.add('hidden'); document.getElementById('sacola-sub').textContent='Confira antes de finalizar.'; return; }
  empty.classList.add('hidden'); content.classList.remove('hidden');
  document.getElementById('sacola-sub').textContent = n + (n===1?' item selecionado':' itens selecionados');

  document.getElementById('cart-items').innerHTML = Object.entries(cart).map(([id,i])=>{
    const p = P(id);
    return `<div class="flex gap-3 bg-white rounded-2xl border border-creme2 p-2.5">
      <div class="imgwrap w-16 h-16 rounded-xl flex-shrink-0">
        <span class="emoji" style="font-size:26px">${p.emoji}</span>
        <img src="${p.img}" onerror="this.remove()" alt="">
      </div>
      <div class="flex-1 min-w-0">
        <p class="text-[12.5px] font-semibold text-tijolo leading-tight truncate">${p.name}</p>
        <p class="text-[10px] text-tijolo/50">${i.variant}</p>
        <div class="flex items-center justify-between mt-1.5">
          <span class="font-display text-[14px] font-semibold text-tijolo">${brl(p.price*i.qty)}</span>
          <div class="flex items-center gap-2.5 bg-cream rounded-full px-1 py-0.5 border border-creme2">
            <button class="press w-6 h-6 rounded-full flex items-center justify-center" onclick="changeQty('${id}',-1)">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#7C2D12" stroke-width="2.6"><path d="M5 12h14" stroke-linecap="round"/></svg>
            </button>
            <span class="text-[13px] font-bold text-tijolo w-4 text-center">${i.qty}</span>
            <button class="press w-6 h-6 rounded-full flex items-center justify-center" onclick="changeQty('${id}',1)">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#7C2D12" stroke-width="2.6"><path d="M12 5v14M5 12h14" stroke-linecap="round"/></svg>
            </button>
          </div>
        </div>
      </div>
    </div>`;
  }).join('');

  updateTotals();
}

function updateTotals(){
  const sub = subtotal();
  document.getElementById('sum-subtotal').textContent = brl(sub);

  let desc = 0;
  const rowDesc = document.getElementById('row-desc');
  if(coupon){
    desc = sub * coupon.rate;
    document.getElementById('row-desc-label').textContent = 'Cupom ' + coupon.code;
    document.getElementById('sum-desc').textContent = '- ' + brl(desc);
    rowDesc.style.display = 'flex';
  } else { rowDesc.style.display = 'none'; }

  document.getElementById('sum-frete').textContent = frete ? brl(frete.value) : 'a calcular';
  const total = Math.max(0, sub - desc) + (frete ? frete.value : 0);
  document.getElementById('sum-total').textContent = brl(total);
}

function applyCoupon(){
  const code = document.getElementById('coupon-input').value.trim();
  const msg = document.getElementById('coupon-msg');
  msg.classList.remove('hidden');
  const valid = {'UAI10':0.10,'MINAS15':0.15};
  if(valid[code]){
    coupon = {code, rate:valid[code]};
    msg.textContent = 'Cupom aplicado: ' + (valid[code]*100) + '% de desconto.';
    msg.className = 'text-[11px] mt-1.5 text-oliva font-semibold';
    showToast('Cupom ' + code + ' aplicado');
  } else {
    coupon = null;
    msg.textContent = 'Cupom inválido. Tente UAI10.';
    msg.className = 'text-[11px] mt-1.5 text-terracota font-semibold';
  }
  updateTotals();
}

function calcFrete(){
  const cep = document.getElementById('cep-input').value.trim();
  const box = document.getElementById('frete-options');
  if(cep.length < 5){ box.classList.remove('hidden'); box.innerHTML = '<p class="text-[11px] text-terracota font-semibold">Digite um CEP válido.</p>'; return; }
  box.classList.remove('hidden');
  const opts = [
    {id:'rapida', label:'Entrega rápida', eta:'Hoje, até 3h (refrigerada)', value:19.90},
    {id:'padrao', label:'Entrega padrão', eta:'2 a 4 dias úteis', value:12.50}
  ];
  box.innerHTML = opts.map((o,idx)=>`
    <label class="flex items-center gap-2.5 bg-cream rounded-xl border ${idx===0?'border-ambar':'border-creme2'} p-2.5 cursor-pointer" onclick="selectFrete(${o.value},'${o.label}',this)">
      <span class="w-4 h-4 rounded-full border-2 ${idx===0?'border-ambar':'border-creme2'} flex items-center justify-center frete-radio">
        <span class="w-2 h-2 rounded-full bg-ambar" style="${idx===0?'':'display:none'}"></span></span>
      <span class="flex-1">
        <span class="block text-[12px] font-semibold text-tijolo">${o.label}</span>
        <span class="block text-[10px] text-tijolo/55">${o.eta}</span>
      </span>
      <span class="text-[12.5px] font-semibold text-tijolo">${brl(o.value)}</span>
    </label>`).join('');
  selectFrete(opts[0].value, opts[0].label);
}
function selectFrete(value, label, el){
  frete = {value, label};
  if(el){
    document.querySelectorAll('#frete-options label').forEach(l=>{
      l.className = l.className.replace('border-ambar','border-creme2');
      const r = l.querySelector('.frete-radio'); r.className = r.className.replace('border-ambar','border-creme2');
      r.querySelector('span').style.display='none';
    });
    el.className = el.className.replace('border-creme2','border-ambar');
    const r = el.querySelector('.frete-radio'); r.className = r.className.replace('border-creme2','border-ambar');
    r.querySelector('span').style.display='block';
  }
  updateTotals();
}

function openProduct(id){
  const p = P(id);
  const sheet = document.getElementById('product-sheet');
  sheet.innerHTML = `<div class="grabber"></div>
    <div class="imgwrap h-52">
      <span class="emoji" style="font-size:70px">${p.emoji}</span>
      <img src="${p.img}" onerror="this.remove()" alt="">
      <button class="press absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 flex items-center justify-center" onclick="closeOverlay('product-overlay')">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7C2D12" stroke-width="2.4"><path d="M6 6l12 12M18 6L6 18" stroke-linecap="round"/></svg>
      </button>
      <span class="selo absolute bottom-3 left-4 bg-white/92" style="color:${p.seloColor}">
        <svg width="9" height="9" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.4 5.8L20 8l-4.5 4L17 18l-5-3.2L7 18l1.5-6L4 8l5.6-.2z"/></svg>${p.selo}
      </span>
    </div>
    <div class="p-5">
      <h3 class="font-display text-[19px] font-semibold text-tijolo leading-tight">${p.name}</h3>
      <p class="text-[11.5px] text-tijolo/55 mt-0.5">${p.unit}</p>
      <p class="font-display text-[24px] font-semibold text-tijolo mt-2">${brl(p.price)}</p>

      ${p.variants.length>1 ? `
      <p class="text-[12px] font-semibold text-tijolo mt-4 mb-2">Escolha a opção</p>
      <div class="flex flex-wrap gap-2" id="variant-picker">
        ${p.variants.map((v,i)=>`<button class="press variant-chip text-[11.5px] font-semibold px-3 py-1.5 rounded-full border ${i===0?'bg-tijolo text-cream border-tijolo':'bg-white text-tijolo border-creme2'}" data-v="${v}" onclick="pickVariant(this)">${v}</button>`).join('')}
      </div>` : ''}

      <div class="mt-4 bg-[#F6EFE3] rounded-2xl p-3.5">
        <p class="text-[11px] font-bold text-ambar tracking-wide flex items-center gap-1.5 mb-1">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="#D97706"><path d="M12 2C8 2 5 5 5 9c0 2.4 1.2 4 2.5 5.3.8.8 1.5 1.7 1.5 2.7v1h6v-1c0-1 .7-1.9 1.5-2.7C17.8 13 19 11.4 19 9c0-4-3-7-7-7z"/><path d="M9 21h6" stroke="#D97706" stroke-width="1.6" stroke-linecap="round"/></svg>
          DICA DE HARMONIZAÇÃO
        </p>
        <p class="text-[12px] text-tijolo/75 leading-snug">${p.harmon}</p>
      </div>

      <div class="mt-3 bg-[#EFF6EF] rounded-2xl p-3.5">
        <p class="text-[11px] font-bold text-oliva tracking-wide flex items-center gap-1.5 mb-1">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#15803D" stroke-width="1.8"><path d="M12 21s-6-5.3-6-10a6 6 0 1112 0c0 4.7-6 10-6 10z"/><circle cx="12" cy="11" r="2"/></svg>
          HISTÓRIA DO PRODUTOR
        </p>
        <p class="text-[12px] text-tijolo/75 leading-snug">${p.producer}</p>
      </div>

      <button class="press w-full mt-5 bg-tijolo text-cream font-bold text-[14px] py-3.5 rounded-full flex items-center justify-center gap-2" onclick="addToCart('${p.id}', selectedVariant); closeOverlay('product-overlay')">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FDFBF7" stroke-width="2.2"><path d="M6 8h12l-1 12H7L6 8z" stroke-linejoin="round"/><path d="M9 8V6a3 3 0 016 0v2"/></svg>
        Adicionar à sacola · ${brl(p.price)}
      </button>
    </div>`;
  selectedVariant = p.variants[0];
  openOverlay('product-overlay');
}
let selectedVariant = null;
function pickVariant(el){
  selectedVariant = el.dataset.v;
  document.querySelectorAll('#variant-picker .variant-chip').forEach(c=>{
    c.className = 'press variant-chip text-[11.5px] font-semibold px-3 py-1.5 rounded-full border bg-white text-tijolo border-creme2';
  });
  el.className = 'press variant-chip text-[11.5px] font-semibold px-3 py-1.5 rounded-full border bg-tijolo text-cream border-tijolo';
}

function openCheckout(){
  if(cartCount()===0){ showToast('Sua sacola está vazia'); return; }
  const sub = subtotal();
  const desc = coupon ? sub*coupon.rate : 0;
  const total = Math.max(0,sub-desc) + (frete?frete.value:0);
  renderCheckout(total);
  openOverlay('checkout-overlay');
}

function renderCheckout(total){
  const sheet = document.getElementById('checkout-sheet');
  sheet.innerHTML = `<div class="grabber"></div>
    <div class="p-5">
      <div class="flex items-center justify-between">
        <h3 class="font-display text-[19px] font-semibold text-tijolo">Finalizar pedido</h3>
        <button class="press w-8 h-8 rounded-full bg-creme2 flex items-center justify-center" onclick="closeOverlay('checkout-overlay')">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7C2D12" stroke-width="2.4"><path d="M6 6l12 12M18 6L6 18" stroke-linecap="round"/></svg>
        </button>
      </div>
      <p class="text-[12px] text-tijolo/55 mt-0.5">Total a pagar <span class="font-display text-[16px] font-semibold text-tijolo ml-1">${brl(total)}</span></p>

      <p class="text-[12px] font-semibold text-tijolo mt-4 mb-2">Forma de pagamento</p>
      <div class="grid grid-cols-2 gap-2.5">
        <button id="pay-pix" class="press pay-opt rounded-2xl border-2 border-oliva bg-oliva/5 p-3 text-left" onclick="selectPay('pix')">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="#15803D"><path d="M12 2l3 3-3 3-3-3 3-3zm-7 7l3-3 3 3-3 3-3-3zm14 0l-3-3-3 3 3 3 3-3zm-7 7l-3-3 3-3 3 3-3 3z"/></svg>
          <p class="text-[13px] font-bold text-tijolo mt-1.5">Pix</p>
          <p class="text-[10px] text-oliva font-semibold">Aprovação na hora</p>
        </button>
        <button id="pay-card" class="press pay-opt rounded-2xl border-2 border-creme2 bg-white p-3 text-left" onclick="selectPay('card')">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#9A3412" stroke-width="1.8"><rect x="3" y="6" width="18" height="12" rx="2"/><path d="M3 10h18"/></svg>
          <p class="text-[13px] font-bold text-tijolo mt-1.5">Cartão</p>
          <p class="text-[10px] text-tijolo/50 font-semibold">Em até 3x</p>
        </button>
      </div>

      <div id="pay-detail" class="mt-4"></div>

      <button class="press w-full mt-4 bg-ambar text-tijolo font-bold text-[14px] py-3.5 rounded-full" onclick="confirmPayment(${total})">Confirmar pagamento</button>
    </div>`;
  selectPay('pix');
}

let payMethod = 'pix';
function selectPay(m){
  payMethod = m;
  document.getElementById('pay-pix').className  = 'press pay-opt rounded-2xl border-2 p-3 text-left ' + (m==='pix'?'border-oliva bg-oliva/5':'border-creme2 bg-white');
  document.getElementById('pay-card').className = 'press pay-opt rounded-2xl border-2 p-3 text-left ' + (m==='card'?'border-terracota bg-terracota/5':'border-creme2 bg-white');
  const box = document.getElementById('pay-detail');
  if(m==='pix'){
    const code = '00020126360014BR.GOV.BCB.PIX0114+55319988877665204000053039865802BR5921EMPORIO DELICIAS MINAS6009BELO HORIZ62070503***6304A1B2';
    box.innerHTML = `<div class="bg-[#F6EFE3] rounded-2xl p-4 text-center">
      <div class="w-28 h-28 mx-auto rounded-xl bg-white p-2 border border-creme2 flex items-center justify-center">
        ${qrSvg()}
      </div>
      <p class="text-[11px] text-tijolo/60 mt-3">Pix Copia e Cola</p>
      <div class="mt-1.5 bg-white border border-creme2 rounded-xl p-2 flex items-center gap-2">
        <span class="text-[9.5px] text-tijolo/70 truncate flex-1 text-left font-mono">${code.slice(0,34)}…</span>
        <button class="press bg-oliva text-white text-[10.5px] font-semibold px-2.5 py-1.5 rounded-lg flex-shrink-0" onclick="copyPix('${code}')">Copiar</button>
      </div>
      <p class="text-[10px] text-tijolo/45 mt-2">O código expira em 30 minutos.</p>
    </div>`;
  } else {
    box.innerHTML = `<div class="bg-white border border-creme2 rounded-2xl p-3.5 space-y-2.5">
      <input class="w-full bg-cream border border-creme2 rounded-xl px-3 py-2.5 text-[13px] outline-none focus:border-ambar" placeholder="Número do cartão" inputmode="numeric">
      <div class="flex gap-2.5">
        <input class="flex-1 bg-cream border border-creme2 rounded-xl px-3 py-2.5 text-[13px] outline-none focus:border-ambar" placeholder="Validade">
        <input class="w-20 bg-cream border border-creme2 rounded-xl px-3 py-2.5 text-[13px] outline-none focus:border-ambar" placeholder="CVV">
      </div>
      <input class="w-full bg-cream border border-creme2 rounded-xl px-3 py-2.5 text-[13px] outline-none focus:border-ambar" placeholder="Nome no cartão">
    </div>`;
  }
}
function qrSvg(){
  let cells='';
  const seed=[1,0,1,1,0,1,0,0,1,1,0,0,1,0,1,1,1,0,1,0,0,1,1,0,1];
  for(let y=0;y<10;y++){for(let x=0;x<10;x++){
    const on=(x*7+y*3+seed[(x+y)%25])%3===0 || (x<3&&y<3)||(x>6&&y<3)||(x<3&&y>6);
    if(on) cells+=`<rect x="${x*10}" y="${y*10}" width="10" height="10"/>`;
  }}
  return `<svg viewBox="0 0 100 100" width="100%" height="100%" fill="#16110d">${cells}</svg>`;
}
function copyPix(code){
  const done = ()=>showToast('Código Pix copiado');
  if(navigator.clipboard && navigator.clipboard.writeText){
    navigator.clipboard.writeText(code).then(done).catch(done);
  } else {
    const t=document.createElement('textarea'); t.value=code; document.body.appendChild(t); t.select();
    try{document.execCommand('copy');}catch(e){} document.body.removeChild(t); done();
  }
}

function confirmPayment(total){
  const sheet = document.getElementById('checkout-sheet');
  sheet.innerHTML = `<div class="grabber"></div>
    <div class="p-6 text-center">
      <div class="w-20 h-20 mx-auto rounded-full bg-oliva/12 flex items-center justify-center" style="animation:fade .4s ease">
        <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="#15803D" stroke-width="2.4"><path d="M5 13l4 4L19 7" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </div>
      <h3 class="font-display text-[21px] font-semibold text-tijolo mt-4">Pedido confirmado</h3>
      <p class="text-[12.5px] text-tijolo/60 mt-1.5 leading-snug">Recebemos seu pagamento de <b class="text-tijolo">${brl(total)}</b> via ${payMethod==='pix'?'Pix':'cartão'}.<br>Já estamos separando com carinho as suas delícias.</p>
      <div class="bg-[#F6EFE3] rounded-2xl p-3 mt-4 text-left flex items-center gap-3">
        <span class="text-[26px]">🚚</span>
        <div>
          <p class="text-[12px] font-semibold text-tijolo">Pedido ${'#' + (2042 + Math.floor(Math.random()*50))}</p>
          <p class="text-[11px] text-tijolo/55">${frete? frete.label + ' · em preparo' : 'Em preparo no empório'}</p>
        </div>
      </div>
      <button class="press w-full mt-5 bg-tijolo text-cream font-bold text-[14px] py-3.5 rounded-full" onclick="finishOrder()">Voltar ao empório</button>
      <button class="press w-full mt-2 text-tijolo/60 font-semibold text-[12px] py-2" onclick="showToast('Abrindo WhatsApp para acompanhar…')">Acompanhar pelo WhatsApp</button>
    </div>`;
}
function finishOrder(){
  for(const k in cart) delete cart[k];
  coupon=null; frete=null;
  document.getElementById('coupon-input').value='';
  document.getElementById('cep-input').value='';
  document.getElementById('frete-options').classList.add('hidden');
  const cmsg=document.getElementById('coupon-msg'); cmsg.classList.add('hidden');
  updateBadges(); renderCart();
  closeOverlay('checkout-overlay');
  go('emporio');
  showToast('Uai, obrigado pela preferência!');
}

function openOverlay(id){ document.getElementById(id).classList.add('open'); }
function closeOverlay(id){ document.getElementById(id).classList.remove('open'); }

function go(tab){
  document.querySelectorAll('.tab').forEach(t=>t.classList.remove('active','fade'));
  const el = document.getElementById('tab-'+tab);
  el.classList.add('active','fade');
  document.querySelectorAll('.navbtn').forEach(b=>b.classList.toggle('active', b.dataset.tab===tab));
  document.getElementById('screen').scrollTo({top:0});
  if(tab==='sacola') renderCart();
}

let toastTimer;
function showToast(msg){
  const t=document.getElementById('toast');
  t.textContent=msg; t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer=setTimeout(()=>t.classList.remove('show'),1900);
}

function tick(){
  const d=new Date();
  document.getElementById('clock').textContent =
    String(d.getHours()).padStart(2,'0')+':'+String(d.getMinutes()).padStart(2,'0');
}

renderStatic();
renderCart();
updateBadges();
tick(); setInterval(tick,10000);
