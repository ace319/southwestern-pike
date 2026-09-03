const menuButton=document.querySelector('.menu-button');
const nav=document.querySelector('#site-nav');
menuButton.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open));menuButton.textContent=open?'Close':'Menu'});
nav.addEventListener('click',event=>{if(event.target.matches('a')){nav.classList.remove('open');menuButton.setAttribute('aria-expanded','false');menuButton.textContent='Menu'}});
const rolesList=document.querySelector('#roles-list');
if(rolesList&&typeof chapterRoles!=='undefined')rolesList.innerHTML=chapterRoles.map((role,index)=>`<article class="role reveal"><span>${String(index+1).padStart(2,'0')}</span><div><h3>${role.title}</h3><strong>${role.name}</strong></div><p>${role.description}</p></article>`).join('');
const eventList=document.querySelector('#event-list');
if(eventList&&typeof upcomingEvents!=='undefined')eventList.innerHTML=upcomingEvents.map(event=>`<article class="event reveal"><time><b>${event.month}</b><span>${event.day}</span></time><div class="event-main"><small>${event.type}</small><h3>${event.title}</h3><p>${event.description}</p></div><div class="event-place"><span>Location</span><strong>${event.location}</strong><a href="${event.link}" target="_blank" rel="noreferrer">View on Instagram</a></div></article>`).join('');
const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
if(reduced){document.querySelectorAll('.reveal').forEach(el=>el.classList.add('visible'))}else{const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el))}
