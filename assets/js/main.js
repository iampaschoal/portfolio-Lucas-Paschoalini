const menu=document.querySelector('#menu');
const toggle=document.querySelector('.menu-toggle');
function closeMenu(){menu.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','Abrir menu');}
toggle.addEventListener('click',()=>{const open=menu.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Fechar menu':'Abrir menu');});
menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeMenu();toggle.focus();}});
document.addEventListener('click',e=>{if(!e.target.closest('header'))closeMenu();});
window.addEventListener('resize',()=>{if(window.innerWidth>760)closeMenu();});
const theme=document.querySelector('.theme-toggle');
function setTheme(light){document.body.classList.toggle('light',light);theme.setAttribute('aria-label',light?'Ativar tema escuro':'Ativar tema claro');document.querySelector('meta[name="theme-color"]').content=light?'#ffffff':'#101d30';}
try{setTheme(localStorage.getItem('portfolio-theme-v2')!=='dark');}catch(e){}
theme.addEventListener('click',()=>{const light=!document.body.classList.contains('light');setTheme(light);try{localStorage.setItem('portfolio-theme-v2',light?'light':'dark');}catch(e){}});
document.querySelector('#year').textContent=new Date().getFullYear();
if('IntersectionObserver' in window){const sections=document.querySelectorAll('section[id]');const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){document.querySelectorAll('nav a').forEach(a=>{const active=a.getAttribute('href')==='#'+entry.target.id;a.classList.toggle('active',active);if(active)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current');});}});},{rootMargin:'-15% 0px -55% 0px'});sections.forEach(section=>observer.observe(section));
if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches){const reveals=document.querySelectorAll('.section-heading,.skill,.timeline article,.project');const appear=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');appear.unobserve(entry.target);}});},{threshold:.08});reveals.forEach(el=>{el.classList.add('reveal');appear.observe(el);});}}
