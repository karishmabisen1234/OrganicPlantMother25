let lang = 'en', step = 'menu', selectedPlant = '';

// DOM elements
const messages = document.getElementById('messages');
const options = document.getElementById('options');
const text = document.getElementById('text');
const headerText = document.getElementById('header-text');
const langSelect = document.getElementById('lang');

// Texts for UI and chatbot
const textData = {
  en: {
    header: '🌿 Plant Assistant',
    placeholder: 'Type or speak...',
    send: 'Send',
    mic: '🎤',
    stop: '⏹',
    welcome: 'Hello 👋 I am your plant assistant.',
    choose: 'Choose option 👇',
    plant: 'Which plant is it?',
    problem: 'What problem do you see?',
    done: 'Do you want to continue?',
    unknown: 'I understand only plant related questions 🌱',
    yes: 'Yes',
    no: 'No',
    startOption: 'Plant Disease'
  },
  hi: {
    header: '🌿 पौधा सहायक',
    placeholder: 'टाइप करें या बोलें...',
    send: 'भेजें',
    mic: '🎤',
    stop: '⏹',
    welcome: 'नमस्ते 👋 मैं आपका पौधा सहायक हूँ।',
    choose: 'एक विकल्प चुनें 👇',
    plant: 'कौन सा पौधा है?',
    problem: 'कौन सी समस्या है?',
    done: 'क्या आगे जारी रखना है?',
    unknown: 'मैं सिर्फ पौधों से जुड़े सवाल समझता हूँ 🌱',
    yes: 'हाँ',
    no: 'नहीं',
    startOption: 'पौधों की बीमारी'
  },
  mr: {
    header: '🌿 वनस्पती सहाय्यक',
    placeholder: 'टाइप करा किंवा बोला...',
    send: 'पाठवा',
    mic: '🎤',
    stop: '⏹',
    welcome: 'नमस्कार 👋 मी तुमचा वनस्पती सहाय्यक आहे.',
    choose: 'एक पर्याय निवडा 👇',
    plant: 'कोणते रोप आहे?',
    problem: 'कोणती समस्या आहे?',
    done: 'पुढे सुरू ठेवायचे आहे का?',
    unknown: 'मी फक्त वनस्पतीविषयी प्रश्न समजतो 🌱',
    yes: 'होय',
    no: 'नाही',
    startOption: 'रोप रोग'
  }
};

// 30 popular plants with multiple diseases
const plants = {
  Tomato: {'Leaf Curl': {sol: 'Neem oil spray'}, 'Blight': {sol: 'Copper fungicide'}, 'Yellow Leaf Spot': {sol: 'Baking soda spray'}},
  Potato: {'Late Blight': {sol: 'Remove infected leaves'}, 'Early Blight': {sol: 'Fungicide treatment'}, 'Aphids': {sol: 'Soap spray'}},
  Cabbage: {'Cabbage Worm': {sol: 'Neem oil spray'}, 'Black Rot': {sol: 'Remove infected leaves'}, 'Downy Mildew': {sol: 'Fungicide treatment'}},
  Carrot: {'Aphids': {sol: 'Soap spray'}, 'Leaf Blight': {sol: 'Neem oil spray'}},
  Onion: {'Downy Mildew': {sol: 'Fungicide treatment'}, 'Purple Blotch': {sol: 'Neem oil spray'}},
  Chili: {'Anthracnose': {sol: 'Copper spray'}, 'Mosaic Virus': {sol: 'Remove infected plants'}},
  Brinjal: {'Fruit Rot': {sol: 'Remove infected fruits'}, 'Leaf Spot': {sol: 'Neem oil spray'}},
  Beans: {'Rust': {sol: 'Neem oil spray'}, 'Powdery Mildew': {sol: 'Sulfur spray'}},
  Peas: {'Powdery Mildew': {sol: 'Sulfur spray'}, 'Aphids': {sol: 'Soap spray'}},
  Maize: {'Leaf Blight': {sol: 'Fungicide spray'}, 'Rust': {sol: 'Neem oil spray'}},
  Grapes: {'Downy Mildew': {sol: 'Copper spray'}, 'Powdery Mildew': {sol: 'Sulfur spray'}},
  Mango: {'Powdery Mildew': {sol: 'Sulfur spray'}, 'Anthracnose': {sol: 'Copper spray'}},
  Banana: {'Panama Disease': {sol: 'Remove infected plants'}, 'Bacterial Wilt': {sol: 'Remove affected parts'}},
  Guava: {'Wilt': {sol: 'Remove affected parts'}, 'Anthracnose': {sol: 'Copper spray'}},
  Papaya: {'Ring Spot': {sol: 'Fungicide spray'}, 'Powdery Mildew': {sol: 'Sulfur spray'}},
  Strawberry: {'Gray Mold': {sol: 'Baking soda spray'}, 'Leaf Spot': {sol: 'Neem oil spray'}},
  Apple: {'Scab': {sol: 'Neem oil or compost tea'}, 'Powdery Mildew': {sol: 'Sulfur spray'}},
  Pear: {'Fire Blight': {sol: 'Remove infected parts'}, 'Powdery Mildew': {sol: 'Sulfur spray'}},
  Pomegranate: {'Fruit Rot': {sol: 'Copper spray'}, 'Leaf Spot': {sol: 'Neem oil spray'}},
  Cucumber: {'Powdery Mildew': {sol: 'Baking soda spray'}, 'Downy Mildew': {sol: 'Neem oil spray'}},
  Pumpkin: {'Downy Mildew': {sol: 'Neem oil spray'}, 'Anthracnose': {sol: 'Copper spray'}},
  Watermelon: {'Anthracnose': {sol: 'Copper spray'}, 'Fusarium Wilt': {sol: 'Remove affected plants'}},
  Lettuce: {'Leaf Spot': {sol: 'Neem oil spray'}, 'Downy Mildew': {sol: 'Fungicide spray'}},
  Spinach: {'Fusarium Wilt': {sol: 'Remove affected plants'}, 'Leaf Blight': {sol: 'Neem oil spray'}},
  Okra: {'Yellow Vein Mosaic': {sol: 'Remove infected leaves'}, 'Powdery Mildew': {sol: 'Sulfur spray'}},
  Cauliflower: {'Black Rot': {sol: 'Remove infected parts'}, 'Downy Mildew': {sol: 'Fungicide spray'}},
  SweetPotato: {'Scab': {sol: 'Copper fungicide'}, 'Aphids': {sol: 'Soap spray'}},
  Radish: {'Aphids': {sol: 'Soap spray'}, 'Leaf Spot': {sol: 'Neem oil spray'}},
  Beetroot: {'Cercospora Leaf Spot': {sol: 'Neem oil spray'}, 'Downy Mildew': {sol: 'Fungicide spray'}}
};

// Hindi/Marathi plant mapping
const plantMap = {
  hi: {
    'टमाटर':'Tomato','आलू':'Potato','प्याज':'Onion','गाजर':'Carrot','बिन्स':'Beans','मटर':'Peas','मकई':'Maize',
    'अंगूर':'Grapes','आम':'Mango','केला':'Banana','जामुन':'Guava','पपीता':'Papaya','स्ट्रॉबेरी':'Strawberry',
    'सेब':'Apple','नाशपाती':'Pear','अनार':'Pomegranate','खीरा':'Cucumber','कद्दू':'Pumpkin','तरबूज':'Watermelon',
    'लेट्यूस':'Lettuce','पालक':'Spinach','भिंडी':'Okra','फूलगोभी':'Cauliflower','शकरकंद':'SweetPotato','मूली':'Radish',
    'चुकंदर':'Beetroot','बैंगन':'Brinjal','मिर्च':'Chili','पत्ता गोभी':'Cabbage'
  },
  mr: {
    'टोमॅटो':'Tomato','बटाटा':'Potato','कांदा':'Onion','गाजर':'Carrot','शेंगदाणे':'Beans','मटार':'Peas','मका':'Maize',
    'द्राक्ष':'Grapes','आंबा':'Mango','केळी':'Banana','पेरू':'Guava','पपई':'Papaya','स्ट्रॉबेरी':'Strawberry',
    'सफरचंद':'Apple','नाशपाती':'Pear','डाळिंब':'Pomegranate','काकडी':'Cucumber','भोपळा':'Pumpkin','कलिंगड':'Watermelon',
    'लेट्यूस':'Lettuce','पालक':'Spinach','भेंडी':'Okra','फूलकोबी':'Cauliflower','साखरकंद':'SweetPotato','मुळा':'Radish',
    'बीटरूट':'Beetroot','वांगी':'Brinjal','मिरची':'Chili','कोबी':'Cabbage'
  }
};

// Detect language from text
function detectLang(t){
  if(/[अ-ह]/.test(t)){ if(/[ळ]/.test(t)) return 'mr'; return 'hi'; }
  return 'en';
}

// Update UI labels
function updateUILanguage(){
  headerText.innerText = textData[lang].header;
  text.placeholder = textData[lang].placeholder;
  document.querySelector('.send').innerText = textData[lang].send;
  document.querySelector('.mic').innerText = textData[lang].mic;
  document.querySelector('.stop').innerText = textData[lang].stop;
}

// Language dropdown change
function changeLang(){
  lang = langSelect.value;
  updateUILanguage();
  start();
}

// Text to speech
function speak(msg){
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(msg);
  u.lang = lang==='hi'?'hi-IN':lang==='mr'?'mr-IN':'en-US';
  speechSynthesis.speak(u);
}

// Stop speaking
function stopSpeaking(){ speechSynthesis.cancel(); }

// Add message
function addMsg(msg, cls){
  const d = document.createElement('div');
  d.className = 'msg ' + cls;
  d.innerText = msg;
  messages.appendChild(d);
  messages.scrollTop = messages.scrollHeight;
  if(cls === 'bot') speak(msg);
}

// Show options
function showOptions(arr){
  options.innerHTML = '';
  arr.forEach(o=>{
    const b = document.createElement('button');
    b.innerText = o;
    b.onclick = ()=>handleChoice(o);
    options.appendChild(b);
  });
}

// Chat flow
function start(){
  messages.innerHTML = '';
  options.innerHTML = '';
  step = 'menu';
  addMsg(textData[lang].welcome, 'bot');
  addMsg(textData[lang].choose, 'bot');
  showOptions([textData[lang].startOption]);
}

function handleChoice(c){
  addMsg(c,'user');
  if(step==='menu'){
    addMsg(textData[lang].plant,'bot');
    showOptions(Object.keys(plants));
    step='plant';
  } else if(step==='plant'){
    selectedPlant=c;
    addMsg(textData[lang].problem,'bot');
    showOptions(Object.keys(plants[c]));
    step='problem';
  } else if(step==='problem'){
    addMsg(formatOutput(selectedPlant,c),'bot');
    addMsg(textData[lang].done,'bot');
    showOptions([textData[lang].yes,textData[lang].no]);
    step='end';
  } else if(step==='end'){
    c===textData[lang].yes?start():addMsg(lang==='mr'?'धन्यवाद 🌱':lang==='hi'?'धन्यवाद 🌱':'Thank you 🌱','bot');
  }
}

// Chat send
function sendText(){
  const msg = text.value.trim();
  if(!msg) return;
  lang = detectLang(msg);
  updateUILanguage();
  addMsg(msg,'user');
  text.value='';

  let plant = Object.keys(plants).find(x => msg.toLowerCase().includes(x.toLowerCase()));
  if(!plant && lang!=='en'){ Object.keys(plantMap[lang]).forEach(k => { if(msg.includes(k)) plant = plantMap[lang][k]; }); }

  if(plant){
    selectedPlant = plant;
    addMsg(textData[lang].problem,'bot');
    showOptions(Object.keys(plants[plant]));
    step='problem';
  } else addMsg(textData[lang].unknown,'bot');
}

// Microphone input
function startListening(){
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  if(!SR){ alert('Voice not supported'); return; }
  const rec = new SR();
  rec.lang = lang==='hi'?'hi-IN':lang==='mr'?'mr-IN':'en-US';
  rec.start();

  rec.onresult = e => {
    const voiceText = e.results[0][0].transcript;
    lang = detectLang(voiceText);
    updateUILanguage();

    let plant = Object.keys(plants).find(p => voiceText.toLowerCase().includes(p.toLowerCase()));
    if(!plant && lang!=='en'){ Object.keys(plantMap[lang]).forEach(k => { if(voiceText.includes(k)) plant = plantMap[lang][k]; }); }

    if(!plant){ addMsg(lang==='mr'?'रोप ओळखता आले नाही':lang==='hi'?'पौधा पहचान नहीं हो पाई':'Plant not detected','bot'); return; }

    let output='';
    Object.keys(plants[plant]).forEach(d=>{ output += formatOutput(plant,d)+'\n\n'; });
    addMsg(output,'bot');
  };
}

// Format output
function formatOutput(plant,disease){
  const sol = plants[plant][disease].sol;
  if(lang==='mr') return `🌱 रोप: ${plant}\n🦠 रोग: ${disease}\n🍀 सेंद्रिय उपाय: ${sol}`;
  if(lang==='hi') return `🌱 पौधा: ${plant}\n🦠 रोग: ${disease}\n🍀 जैविक समाधान: ${sol}`;
  return `🌱 Plant: ${plant}\n🦠 Disease: ${disease}\n🍀 Organic Solution: ${sol}`;
}
function goToDashboard() {
  window.location.href = "dashboard.html"; // yahan apna dashboard page ka URL dalen
}
// Init
window.onload = () => {
  updateUILanguage();
  start();
};
