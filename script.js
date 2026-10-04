const header = document.querySelector('.site-header');
const menuToggle = document.getElementById('menuToggle');
const siteNav = document.getElementById('siteNav');
const navLinks = [...document.querySelectorAll('.site-nav a')];
const sections = [...document.querySelectorAll('main section[id]')];

function syncHeader(){
  header.classList.toggle('scrolled', window.scrollY > 20);
}

function closeMenu(){
  siteNav.classList.remove('open');
  menuToggle.setAttribute('aria-expanded','false');
  document.body.classList.remove('menu-open');
}

menuToggle?.addEventListener('click',()=>{
  const open = siteNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
  document.body.classList.toggle('menu-open', open);
});

navLinks.forEach(link=>link.addEventListener('click', closeMenu));
window.addEventListener('scroll', syncHeader, {passive:true});
syncHeader();

const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
},{threshold:.12});

document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

const sectionObserver = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      navLinks.forEach(link=>link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`));
    }
  });
},{rootMargin:'-35% 0px -55% 0px',threshold:0});
sections.forEach(section=>sectionObserver.observe(section));

document.addEventListener('keydown',(event)=>{
  if(event.key === 'Escape') closeMenu();
});
