const clubs = [
  ['FOSS Club','Technical','Open-source software, coding and collaborative technology.'],
  ['Robotics Club','Technical','Robotics, automation and hands-on engineering.'],
  ['GraphiX Club','Creative','Computer graphics, animation and visual creativity.'],
  ['Cypher Club','Technical','Cybersecurity and technology exploration.'],
  ['Aero Club','Technical','Aviation, aeromodelling and aerospace.'],
  ["Brain Stormer's Club",'Creative','Ideas, problem solving and creative thinking.'],
  ['Wall Magazine Club','Creative','Campus writing, design and visual storytelling.'],
  ['Metamorph Club','Creative','Fashion, creativity and stage expression.'],
  ['Pegasus Club','Technical','Innovation and student technology projects.'],
  ['Code Cooks Club','Technical','Programming, problem solving and development.'],
  ['Technofuel Club','Technical','Technology learning and innovation.'],
  ['Art Glimpse Club','Creative','Art, illustration and creative expression.'],
  ['CoDE Club AIML','Technical','Artificial intelligence and machine learning.'],
  ['CoDE Club AIDS','Technical','AI, data science and analytics.'],
  ['PIXINSIGHT Club','Creative','Photography, visual arts and media.'],
  ['App Club','Technical','Application and website development.'],
  ['Rotaract Club ENTC','Social','Community service and student leadership.'],
  ['MARS Club','Technical','Engineering, innovation and practical projects.'],
  ['Astronomy Club','Technical','Astronomy, space and scientific curiosity.']
];
const chapters=['ACM Student Chapter','ISLE Student Chapter','PMA Student Chapter','IEEE Student Chapter','CSI Student Chapter','IETE Student Chapter','IEI Student Chapter','SAE Student Chapter','IET Student Chapter','S4DS Student Chapter'];
const activities=['SPDC Centre','ED Cell','NSS','M-Pulse','Art Circle','Sports','Student Welfare','ISR','Karmanya'];
const events=[
 ['Beyond Algorithms: Building Intelligent Solutions with ML','28 Sep 2026','Online Lab • Computer Department'],
 ['Efficient Data Structures for Big Data Analytics','23 Sep 2026','230 Seminar Hall'],
 ['Advanced Databases and Emerging Trends','23 Sep 2026','Classroom No. 320'],
 ['NSS Police Mitra Activity','14–24 Sep 2026','Tulshibagh Ganpati, Pune']
];

const $ = id => document.getElementById(id);
const icons=['⬡','◈','✦','⌁','△','✳','▤','◇','✧','⌘'];

function escapeHTML(value){return String(value).replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));}
function visualSVG(title,index=0,kind='club'){
  const palettes=[['#062d3a','#22d3ee'],['#111d42','#7c8cff'],['#241333','#e879f9'],['#082f2a','#34d399'],['#30200b','#fbbf24']];
  const [bg,accent]=palettes[index%palettes.length];
  const icon=kind==='chapter'?'◎':kind==='event'?'◆':icons[index%icons.length];
  const short=escapeHTML(title).slice(0,32);
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 520"><defs><linearGradient id="g" x1="0" x2="1"><stop stop-color="${bg}"/><stop offset="1" stop-color="#07111d"/></linearGradient></defs><rect width="900" height="520" fill="url(#g)"/><circle cx="760" cy="100" r="190" fill="${accent}" opacity=".10"/><circle cx="780" cy="400" r="230" fill="${accent}" opacity=".06"/><path d="M0 410 Q180 330 360 415 T900 390 V520 H0Z" fill="${accent}" opacity=".08"/><text x="55" y="190" fill="${accent}" font-family="Arial" font-size="100" font-weight="700">${icon}</text><text x="55" y="275" fill="#ffffff" font-family="Arial" font-size="35" font-weight="700">${short}</text><text x="55" y="325" fill="#a7bcc8" font-family="Arial" font-size="19">PES's Modern College of Engineering</text><text x="55" y="365" fill="${accent}" font-family="Arial" font-size="18" letter-spacing="3">MCOE CLUBCONNECT</text></svg>`)}`;
}

function renderClubs(){
  const q=$('search').value.trim().toLowerCase();
  const active=document.querySelector('.chip.active')?.dataset.filter||'All';
  const list=clubs.filter(c=>(active==='All'||c[1]===active)&&c[0].toLowerCase().includes(q));
  $('clubGrid').innerHTML=list.length?list.map((c,i)=>`<article class="club-card"><button class="club-open" data-club="${escapeHTML(c[0])}" aria-label="Open ${escapeHTML(c[0])}"><img src="${visualSVG(c[0],i)}" alt="${escapeHTML(c[0])}"><div class="card-body"><span class="tag">${escapeHTML(c[1])}</span><h3>${escapeHTML(c[0])}</h3><p>${escapeHTML(c[2])}</p><span class="card-link">View club →</span></div></button></article>`).join(''):'<p class="empty">No clubs found.</p>';
}
function renderChapters(){ $('chapterGrid').innerHTML=chapters.map((x,i)=>`<article class="chapter-card"><img src="${visualSVG(x,i+2,'chapter')}" alt="${escapeHTML(x)}"><div><span class="tag">STUDENT CHAPTER</span><h3>${escapeHTML(x)}</h3><button class="small-link" data-chapter="${escapeHTML(x)}">View details →</button></div></article>`).join(''); }
function renderActivities(){ $('activityGrid').innerHTML=activities.map((x,i)=>`<button class="activity-item" data-activity="${escapeHTML(x)}"><span>${icons[i%icons.length]}</span><b>${escapeHTML(x)}</b><small>Explore activity →</small></button>`).join(''); }
function renderEvents(){ $('eventGrid').innerHTML=events.map((e,i)=>`<article class="event-card"><div class="date"><b>${escapeHTML(e[1])}</b><span>MCOE</span></div><div class="event-content"><span class="tag">MCOE EVENT</span><h3>${escapeHTML(e[0])}</h3><p>${escapeHTML(e[2])}</p><button class="card-link event-open" data-event="${i}">View details →</button></div></article>`).join(''); }

renderClubs(); renderChapters(); renderActivities(); renderEvents();
$('clubCount').textContent=clubs.length; $('chapterCount').textContent=chapters.length; $('activityCount').textContent=activities.length;

$('search').addEventListener('input',renderClubs);
document.querySelectorAll('.chip').forEach(btn=>btn.addEventListener('click',()=>{document.querySelector('.chip.active')?.classList.remove('active');btn.classList.add('active');renderClubs();}));

const nav=$('nav'),menuBtn=$('menuBtn');
menuBtn.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuBtn.setAttribute('aria-expanded',String(open));});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));

function openModal(id){$(id).classList.add('open');$(id).setAttribute('aria-hidden','false');document.body.classList.add('modal-open');}
function closeModal(id){$(id).classList.remove('open');$(id).setAttribute('aria-hidden','true');document.body.classList.remove('modal-open');}

document.querySelectorAll('.modal-backdrop').forEach(b=>b.addEventListener('click',()=>closeModal(b.closest('.modal').id)));
document.querySelectorAll('.close').forEach(b=>b.addEventListener('click',()=>closeModal(b.closest('.modal').id)));
$('loginBtn').addEventListener('click',()=>openModal('authModal'));

function showLogin(){ $('loginForm').hidden=false; $('registerForm').hidden=true; $('authTitle').textContent='Student login'; }
function showRegister(){ $('loginForm').hidden=true; $('registerForm').hidden=false; $('authTitle').textContent='Create account'; }
$('toRegister').addEventListener('click',showRegister); $('toLogin').addEventListener('click',showLogin);
document.querySelectorAll('[data-toggle]').forEach(btn=>btn.addEventListener('click',()=>{const input=$(btn.dataset.toggle);input.type=input.type==='password'?'text':'password';}));

$('register').addEventListener('submit',e=>{
  e.preventDefault();
  const name=$('regName').value.trim(), id=$('regId').value.trim(), p=$('regPass').value, c=$('regConfirm').value;
  $('regError').textContent='';
  if(p.length<6){$('regError').textContent='Password must contain at least 6 characters.';return;}
  if(p!==c){$('regError').textContent='Passwords do not match.';return;}
  const users=JSON.parse(localStorage.getItem('mcoeUsers')||'[]');
  if(users.some(u=>u.id.toLowerCase()===id.toLowerCase())){$('regError').textContent='This Student ID / Email is already registered.';return;}
  users.push({name,id,password:p,role:'Student'});localStorage.setItem('mcoeUsers',JSON.stringify(users));
  $('register').reset(); showLogin(); $('loginId').value=id; toast('Account created. Sign in to continue.');
});
$('login').addEventListener('submit',e=>{
  e.preventDefault();
  const id=$('loginId').value.trim(),p=$('loginPass').value; const users=JSON.parse(localStorage.getItem('mcoeUsers')||'[]');
  const u=users.find(x=>x.id.toLowerCase()===id.toLowerCase()&&x.password===p);
  if(!u){$('loginError').textContent='Invalid Student ID / Email or password.';return;}
  $('loginError').textContent='';localStorage.setItem('mcoeCurrentUser',JSON.stringify(u));closeModal('authModal');toast(`Welcome, ${u.name}!`);showDashboard(u);
});

function showDashboard(u){
  $('dashboard')?.remove();
  const s=document.createElement('section');s.id='dashboard';s.className='section dashboard-section';
  s.innerHTML=`<div class="section-head"><div><span class="eyebrow">STUDENT DASHBOARD</span><h2>Welcome, ${escapeHTML(u.name)}</h2></div><button class="btn ghost" id="logout">Logout</button></div><div class="card-grid"><div class="contact-card"><span class="tag">PROFILE</span><h3>${escapeHTML(u.id)}</h3><p>Role: ${escapeHTML(u.role)}</p></div><div class="contact-card"><span class="tag">CLUBS</span><h3>My Clubs</h3><p>Choose clubs from the portal and keep your interests organized.</p></div><div class="contact-card"><span class="tag">EVENTS</span><h3>Registrations</h3><p>Your demo registrations are stored in this browser.</p></div></div>`;
  $('home').before(s);$('logout').addEventListener('click',()=>{localStorage.removeItem('mcoeCurrentUser');s.remove();toast('Logged out.');});
}

function openClub(name){
  const c=clubs.find(x=>x[0]===name); if(!c)return;
  $('clubDetails').innerHTML=`<img class="profile-image" src="${visualSVG(c[0],clubs.indexOf(c))}" alt="${escapeHTML(c[0])}"><div><span class="tag">${escapeHTML(c[1])}</span><h2>${escapeHTML(c[0])}</h2><p>${escapeHTML(c[2])}</p><h4>About this club</h4><p>This portal profile is a working club information page. Club-specific coordinator details, social links, membership information and verified achievements can be added by the club coordinator.</p><div class="profile-actions"><button class="btn primary" id="joinClub">Join / Register interest</button><a class="btn ghost" href="https://www.moderncoe.edu.in/" target="_blank" rel="noopener">MCOE website ↗</a></div></div>`;
  openModal('clubModal');$('joinClub').addEventListener('click',()=>{closeModal('clubModal');toast(`Interest recorded for ${c[0]} in this demo.`);});
}
$('clubGrid').addEventListener('click',e=>{const b=e.target.closest('[data-club]');if(b)openClub(b.dataset.club);});
$('chapterGrid').addEventListener('click',e=>{const b=e.target.closest('[data-chapter]');if(b){$('genericDetails').innerHTML=`<span class="eyebrow">STUDENT CHAPTER</span><h2>${escapeHTML(b.dataset.chapter)}</h2><p>This chapter is listed in the current student-chapter section of PES's Modern College of Engineering. Verified chapter details can be added to this profile.</p><a class="btn primary" href="https://www.moderncoe.edu.in/" target="_blank" rel="noopener">Open official MCOE site ↗</a>`;openModal('genericModal');}});
$('activityGrid').addEventListener('click',e=>{const b=e.target.closest('[data-activity]');if(b){$('genericDetails').innerHTML=`<span class="eyebrow">CAMPUS ACTIVITY</span><h2>${escapeHTML(b.dataset.activity)}</h2><p>This activity is listed in the current MCOE activities section.</p><a class="btn primary" href="https://www.moderncoe.edu.in/" target="_blank" rel="noopener">Open official MCOE site ↗</a>`;openModal('genericModal');}});

function openEvent(i){const e=events[i];$('eventDetails').innerHTML=`<span class="eyebrow">MCOE EVENT</span><h2>${escapeHTML(e[0])}</h2><p><b>Date:</b> ${escapeHTML(e[1])}<br><b>Venue:</b> ${escapeHTML(e[2])}</p><p>This is a working event-detail view. Registration can be connected to Formspree, Google Forms, Firebase or Supabase when the college backend is available.</p><button class="btn primary" id="registerEvent">Register interest</button>`;openModal('eventModal');$('registerEvent').addEventListener('click',()=>{closeModal('eventModal');toast('Registration interest saved for this demo.');});}
$('eventGrid').addEventListener('click',e=>{const b=e.target.closest('[data-event]');if(b)openEvent(Number(b.dataset.event));});
$('allEventsBtn').addEventListener('click',()=>document.querySelector('#events').scrollIntoView({behavior:'smooth'}));

function toast(msg){const t=$('toast');t.textContent=msg;t.classList.add('show');clearTimeout(window.__toast);window.__toast=setTimeout(()=>t.classList.remove('show'),2600);}

window.addEventListener('load',()=>{const u=JSON.parse(localStorage.getItem('mcoeCurrentUser')||'null');if(u)showDashboard(u);});
