// ========== STATE ==========
let readingData = {};

// ========== PARTICLES ==========
function initParticles() {
  const canvas = document.getElementById('particles');
  const ctx = canvas.getContext('2d');
  let particles = [];
  function resize() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
  resize();
  window.addEventListener('resize', resize);

  class Particle {
    constructor() { this.reset(); }
    reset() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 2 + 0.5;
      this.speedY = -Math.random() * 0.3 - 0.1;
      this.speedX = (Math.random() - 0.5) * 0.2;
      this.opacity = Math.random() * 0.4 + 0.1;
      this.life = Math.random() * 200 + 100;
      this.maxLife = this.life;
    }
    update() {
      this.y += this.speedY; this.x += this.speedX; this.life--;
      this.opacity = (this.life / this.maxLife) * 0.4;
      if (this.life <= 0) this.reset();
    }
    draw() {
      ctx.fillStyle = `rgba(240, 192, 64, ${this.opacity})`;
      ctx.beginPath(); ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2); ctx.fill();
    }
  }
  for (let i = 0; i < 60; i++) particles.push(new Particle());
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => { p.update(); p.draw(); });
    requestAnimationFrame(animate);
  }
  animate();
}

// ========== NAVIGATION ==========
function showSection(id) {
  document.querySelectorAll('section').forEach(s => { s.classList.remove('active-section'); s.classList.add('hidden-section'); });
  const el = document.getElementById(id);
  el.classList.remove('hidden-section');
  el.classList.add('active-section');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ========== NUMEROLOGY CALCULATIONS ==========
const LETTER_VALUES = {
  a:1,b:2,c:3,d:4,e:5,f:6,g:7,h:8,i:9,j:1,k:2,l:3,m:4,n:5,o:6,p:7,q:8,r:9,s:1,t:2,u:3,v:4,w:5,x:6,y:7,z:8
};

function reduceToSingle(n) {
  if (n === 11 || n === 22 || n === 33) return n;
  while (n > 9) {
    if (n === 11 || n === 22 || n === 33) return n;
    n = String(n).split('').reduce((a, b) => a + parseInt(b), 0);
  }
  return n;
}

function nameToNumber(name, type) {
  const letters = name.toLowerCase().replace(/[^a-z]/g, '').split('');
  const vowels = 'aeiou';
  let sum = 0;
  letters.forEach(l => {
    const val = LETTER_VALUES[l] || 0;
    if (type === 'destiny') sum += val;
    else if (type === 'soul') { if (vowels.includes(l)) sum += val; }
    else if (type === 'personality') { if (!vowels.includes(l)) sum += val; }
  });
  return reduceToSingle(sum);
}

function dateToLifePath(dateStr) {
  const parts = dateStr.split('-');
  if (parts.length !== 3) return 1;
  const [y, m, d] = parts;
  const sum = String(y).split('').reduce((a,b) => a+parseInt(b),0)
    + String(m).split('').reduce((a,b) => a+parseInt(b),0)
    + String(d).split('').reduce((a,b) => a+parseInt(b),0);
  return reduceToSingle(sum);
}

// ========== QUESTION ANSWERING ==========
function answerQuestion(question, lifePath, destiny, soul) {
  if (!question) return '';
  const q = question.toLowerCase();
  const mainNum = lifePath;
  const data = NUMBER_MEANINGS[mainNum];

  let category = 'general';
  if (q.match(/love|relationship|partner|marriage|romantic|dating|heart|soulmate/)) category = 'love';
  else if (q.match(/career|job|money|business|work|promotion|professional|salary/)) category = 'career';

  const templates = QUESTION_TEMPLATES[category];
  const template = templates[Math.floor(Math.random() * templates.length)];

  const adviceMap = {
    love: { 1:"you must lead with vulnerability, not control", 2:"partnership is your greatest strength — lean into it", 3:"express your feelings creatively and joyfully", 4:"build trust through consistency and reliability", 5:"embrace change in relationships without fear", 6:"your nurturing nature attracts deep love", 7:"seek a partner who understands your need for solitude", 8:"balance ambition with emotional presence", 9:"love unconditionally but don't lose yourself", 11:"your intuition guides you to the right partner", 22:"build a love that inspires others", 33:"your love has the power to heal" },
    career: { 1:"take the lead — you were born to pioneer", 2:"collaboration will unlock your greatest professional achievements", 3:"your creative talents are your greatest career asset", 4:"systematic effort will build an empire", 5:"adaptability is your superpower in business", 6:"service-oriented careers bring you the most fulfillment", 7:"research and specialized knowledge are your path to success", 8:"financial mastery and leadership are your birthright", 9:"careers that serve humanity bring you greatest reward", 11:"your visionary ideas can transform industries", 22:"you can build institutions that change the world", 33:"teaching and healing are your highest calling" },
    general: { 1:"now is the time for bold, independent action", 2:"seek harmony and trust in divine timing", 3:"express yourself authentically — the world needs your voice", 4:"stay grounded and trust the process", 5:"embrace the changes coming — they serve your growth", 6:"focus on home, family, and creating beauty", 7:"go within — the answers you seek are already there", 8:"step into your power and claim your abundance", 9:"release the past and serve from a full heart", 11:"trust your intuition — it's guiding you perfectly", 22:"dream bigger than you ever thought possible", 33:"your compassion is your greatest power" }
  };

  const themeMap = { love:{ 1:"passionate leadership", 2:"deep partnership", 3:"joyful expression", 4:"lasting commitment", 5:"adventure and growth", 6:"nurturing devotion", 7:"soulful connection", 8:"powerful attraction", 9:"unconditional love", 11:"spiritual union", 22:"legendary partnership", 33:"healing love" } };

  const forecastMap = { love:{ 1:"a new romantic chapter is beginning", 2:"a significant partnership deepens soon", 3:"creative romance brings unexpected joy", 4:"a solid foundation for love is forming", 5:"exciting romantic changes are on the horizon", 6:"love grows through acts of care and beauty", 7:"a mysterious connection awaits", 8:"power and passion align in your favor", 9:"a love that transcends the ordinary draws near", 11:"a soulmate connection is being activated", 22:"a love story that inspires others unfolds", 33:"a deeply healing love transforms you" } };

  const result = template
    .replace('{number}', mainNum)
    .replace('{title}', data.title)
    .replace('{advice}', adviceMap[category][mainNum] || adviceMap[category][1])
    .replace('{theme}', (themeMap[category]||{})[mainNum] || 'growth')
    .replace('{forecast}', (forecastMap[category]||{})[mainNum] || 'positive change')
    .replace('{guidance}', adviceMap[category][mainNum] || adviceMap[category][1])
    .replace('{specific}', `Your Destiny Number ${destiny} ("${NUMBER_MEANINGS[destiny].title}") amplifies this by adding ${destiny === mainNum ? 'reinforcing energy' : 'a complementary vibration'}`)
    .replace('{strength}', data.strengths.split(',')[0].trim().toLowerCase())
    .replace('{career}', data.careers.split(',')[0].trim().toLowerCase())
    .replace('{action}', category === 'career' ? 'strategic advancement' : 'patient trust')
    .replace('{reminder}', `you are guided by the energy of ${data.title}`);

  return result;
}

// ========== MAIN CALCULATION ==========
function calculateReading() {
  const name = document.getElementById('fullName').value.trim();
  const date = document.getElementById('birthDate').value;
  const question = document.getElementById('userQuestion').value.trim();

  if (!name) { alert('Please enter your full name'); return; }
  if (!date) { alert('Please enter your date of birth'); return; }

  const lifePath = dateToLifePath(date);
  const destiny = nameToNumber(name, 'destiny');
  const soul = nameToNumber(name, 'soul');
  const personality = nameToNumber(name, 'personality');

  readingData = { name, date, question, lifePath, destiny, soul, personality };

  // Show loading
  showSection('loading-section');
  animateLoading(lifePath, () => {
    displayResults();
  });
}

// ========== LOADING ANIMATION ==========
function animateLoading(targetNum, callback) {
  const numEl = document.getElementById('loadingNum');
  const textEl = document.getElementById('loadingText');
  const texts = [
    'Analyzing the vibrations of your name...',
    'Calculating your life path from your birthdate...',
    'Channeling the energy of your numbers...',
    'Revealing your numerological profile...'
  ];
  let step = 0;
  const interval = setInterval(() => {
    numEl.textContent = Math.floor(Math.random() * 9) + 1;
    textEl.textContent = texts[step % texts.length];
    step++;
    if (step > 7) {
      clearInterval(interval);
      numEl.textContent = targetNum;
      numEl.classList.add('final-num');
      setTimeout(callback, 600);
    }
  }, 400);
}

// ========== DISPLAY RESULTS ==========
function displayResults() {
  const { name, lifePath, destiny, soul, personality, question } = readingData;

  document.getElementById('result-name').innerHTML = `Numerology reading for <strong>${name}</strong>`;

  // Animate core numbers
  animateNumber('lifePathNum', lifePath);
  animateNumber('destinyNum', destiny);
  animateNumber('soulNum', soul);
  animateNumber('personalityNum', personality);

  // Detailed readings
  const readings = document.getElementById('detailed-readings');
  readings.innerHTML = '';

  const sections = [
    { num: lifePath, label: 'Life Path Number', desc: 'Your core purpose and the path you walk in this lifetime', type: 'lifePath' },
    { num: destiny, label: 'Destiny Number', desc: 'What you are destined to become and achieve', type: 'destiny' },
    { num: soul, label: 'Soul Urge Number', desc: 'Your deepest desires and inner motivations', type: 'soulUrge' },
    { num: personality, label: 'Personality Number', desc: 'How others perceive you', type: 'personality' }
  ];

  sections.forEach((s, i) => {
    const data = NUMBER_MEANINGS[s.num];
    const div = document.createElement('div');
    div.className = 'detail-card';
    div.style.animationDelay = `${i * 0.2}s`;
    div.innerHTML = `
      <div class="detail-header">
        <div class="detail-num-circle">${s.num}</div>
        <div>
          <h3>${s.label} — ${data.title}</h3>
          <p class="detail-desc">${s.desc}</p>
        </div>
      </div>
      <p class="detail-text">${data[s.type]}</p>
      <div class="detail-grid">
        <div class="detail-item"><span class="detail-label">Strengths</span><span>${data.strengths}</span></div>
        <div class="detail-item"><span class="detail-label">Challenges</span><span>${data.challenges}</span></div>
        <div class="detail-item"><span class="detail-label">Best Careers</span><span>${data.careers}</span></div>
        <div class="detail-item"><span class="detail-label">Love & Compatibility</span><span>${data.love}</span></div>
      </div>`;
    readings.appendChild(div);
  });

  // Question answer
  const qAnswer = answerQuestion(question, lifePath, destiny, soul);
  const qDiv = document.getElementById('question-answer');
  if (qAnswer) {
    qDiv.classList.remove('hidden');
    qDiv.innerHTML = `<h3>🔮 Your Question</h3><p class="question-text">"${question}"</p><p class="answer-text">${qAnswer}</p>`;
  } else {
    qDiv.classList.add('hidden');
  }

  // Lucky info
  const lucky = LUCKY_DATA[lifePath];
  document.getElementById('lucky-info').innerHTML = `
    <h3>✨ Your Lucky Numbers & Attributes</h3>
    <div class="lucky-grid">
      <div class="lucky-item"><span class="lucky-label">Lucky Colors</span><span>${lucky.color}</span></div>
      <lucky-item"><span class="lucky-label">Lucky Gem</span><span>${lucky.gem}</span></div>
      <div class="lucky-item"><span class="lucky-label">Lucky Day</span><span>${lucky.day}</span></div>
      <div class="lucky-item"><span class="lucky-label">Ruling Planet</span><span>${lucky.planet}</span></div>
      <div class="lucky-item"><span class="lucky-label">Life Path</span><span>${lifePath} — ${NUMBER_MEANINGS[lifePath].title}</span></div>
    </div>`;

  showSection('results-section');
}

function animateNumber(elId, target) {
  const el = document.getElementById(elId);
  let count = 0;
  const interval = setInterval(() => {
    el.textContent = Math.floor(Math.random() * 9) + 1;
    count++;
    if (count > 10) {
      clearInterval(interval);
      el.textContent = target;
    }
  }, 80);
}

// ========== COMPATIBILITY ==========
function checkCompatibility() {
  const name2 = document.getElementById('compatName').value.trim();
  if (!name2) return;
  const num2 = nameToNumber(name2, 'destiny');
  const num1 = readingData.destiny;
  const score = getCompatScore(num1, num2);
  const result = document.getElementById('compat-result');
  result.classList.remove('hidden');

  const compatDesc = score >= 80 ? 'An extraordinary connection! Your numbers vibrate in powerful harmony.' :
    score >= 60 ? 'A strong and supportive connection. Your energies complement each other well.' :
    score >= 40 ? 'A moderate connection that requires effort and understanding from both sides.' :
    'A challenging but potentially growth-oriented connection. Differences can become strengths.';

  result.innerHTML = `
    <div class="compat-score"><span class="score-num">${score}%</span><span>Compatibility</span></div>
    <p>${compatDesc}</p>
    <p class="compat-detail">${readingData.name}'s Destiny Number ${num1} (${NUMBER_MEANINGS[num1].title}) + ${name2}'s Destiny Number ${num2} (${NUMBER_MEANINGS[num2].title})</p>
    <div class="compat-bar"><div class="compat-fill" style="width:${score}%"></div></div>`;
}

function getCompatScore(n1, n2) {
  if (n1 === n2) return 85;
  const harmonious = {1:[3,5,9],2:[4,8],3:[1,5,9],4:[2,8],5:[1,3,7],6:[2,6,9],7:[5,7],8:[2,4],9:[1,3,6],11:[2,6,9],22:[4,8],33:[6,9]};
  const challenging = {1:[4,6],2:[7,9],3:[4,6],4:[1,3,9],5:[4,6],6:[1,3],7:[2,4],8:[1,5],9:[4,8],11:[4,8],22:[1,5],33:[1,5]};
  if ((harmonious[n1]||[]).includes(n2) || (harmonious[n2]||[]).includes(n1)) return 70 + Math.floor(Math.random()*15);
  if ((challenging[n1]||[]).includes(n2) || (challenging[n2]||[]).includes(n1)) return 35 + Math.floor(Math.random()*15);
  return 50 + Math.floor(Math.random()*15);
}

// ========== RESET ==========
function resetReading() {
  document.getElementById('fullName').value = '';
  document.getElementById('birthDate').value = '';
  document.getElementById('userQuestion').value = '';
  document.getElementById('compatName').value = '';
  document.getElementById('question-answer').classList.add('hidden');
  document.getElementById('compat-result').classList.add('hidden');
  readingData = {};
  showSection('landing');
}

// ========== INIT ==========
document.addEventListener('DOMContentLoaded', () => { initParticles(); });
