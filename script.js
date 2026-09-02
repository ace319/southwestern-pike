const menuButton=document.querySelector('.menu-button');
const nav=document.querySelector('#site-nav');
menuButton.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open));menuButton.textContent=open?'Close':'Menu'});
nav.addEventListener('click',event=>{if(event.target.matches('a')){nav.classList.remove('open');menuButton.setAttribute('aria-expanded','false');menuButton.textContent='Menu'}});
const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
if(reduced){document.querySelectorAll('.reveal').forEach(el=>el.classList.add('visible'))}else{const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el))}
