
feather.replace();

const sidebar = document.getElementById('sidebar');
const menuBtn = document.getElementById('menuBtn');
const overlay = document.getElementById('overlay');
const themeToggle = document.getElementById('themeToggle');
const logoutBtn = document.getElementById('menulogoutBtn');
const body = document.body;
const languageSelect = document.getElementById('languageSelect');

/* --------------------- SIDEBAR TOGGLE ---------------------- */
menuBtn.addEventListener('click', () => {
  sidebar.classList.toggle('active');
  overlay.classList.toggle('active');
});

overlay.addEventListener('click', () => {
  sidebar.classList.remove('active');
  overlay.classList.remove('active');
});

/* --------------------------- THEME -------------------------- */
themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark');
});

/* --------------------------- LOGOUT -------------------------- */
logoutBtn.addEventListener('click', () => {
  if (confirm("Are you sure you want to logout?")) {
    window.location.href = "login.html";
  }
});

/* ------------------ PAGE NAVIGATION LINKS ------------------- */
document.querySelectorAll('.nav-item').forEach(item => {
  item.addEventListener('click', () => {
    const text = item.textContent.trim();
    const pages = {
      "Dashboard": "dashboard.html",
      "Disease Detection": "disease-detection.html",
      "Organic Tips": "organic.html",
      "Chatbot": "chatbot.html",
      "Voice Assistant": "voice.html",
      "Learn Diseases": "learn.html",
      "Disease Severity Records": "disease.html"
    };

    if (pages[text]) {
      window.location.href = pages[text];
    }
  });
});

/* ----------------- INSTANT 12 MULTI-LANGUAGE CHANGE ---------------- */
const translations = {
  en: {
    welcome: "Welcome Back, Karishma 🌼",
    accuracy: "Detection Accuracy",
    scans: "Recent Scans",
    disease: "Diseases Detected",
    performance: "Performance",
    model: "97.4% Model Accuracy Achieved",
    scanToday: "12 Leaf Images Analyzed Today",
    found: "3 New Cases Identified",
    stable: "System Health: Stable 🌱",
    footer: "© 2025 Plant Health Dashboard | Designed by Karishma Bisen 💚",

    sidebarTitle: "🌿 Organic Plant Mother 25",
    menuDashboard: "Dashboard",
    menuDetect: "Disease Detection",
    menuTips: "Organic Tips",
    menuChat: "Chatbot",
    menuVoice: "Voice Assistant",
    menuLearn: "Learn Diseases",
    menuRecords: "Disease Severity Records",
    menulogoutBtn: "Logout"
  },

  hi: {
    welcome: "वापसी पर स्वागत है, करिश्मा 🌼",
    accuracy: "डिटेक्शन सटीकता",
    scans: "हाल के स्कैन",
    disease: "पाई गई बीमारियाँ",
    performance: "प्रदर्शन",
    model: "97.4% मॉडल सटीकता प्राप्त",
    scanToday: "आज 12 पत्ती चित्र विश्लेषित किए",
    found: "3 नए मामलों की पहचान",
    stable: "सिस्टम स्थिति: स्थिर 🌱",
    footer: "© 2025 प्लांट हेल्थ डैशबोर्ड | डिज़ाइन: करिश्मा बिसेन 💚",
    
    sidebarTitle: "🌿 ऑर्गेनिक प्लांट मदर 25",
    menuDashboard: "डैशबोर्ड",
    menuDetect: "बीमारी पहचान",
    menuTips: "ऑर्गेनिक सुझाव",
    menuChat: "चैटबॉट",
    menuVoice: "वॉइस असिस्टेंट",
    menuLearn: "बीमारियाँ सीखें",
    menuRecords: "बीमारी गंभीरता रिकॉर्ड",
    menulogoutBtn: "लॉगआउट"
  },

  mr: {
    welcome: "परत स्वागत आहे, करिश्मा 🌼",
    accuracy: "डिटेक्शन अचूकता",
    scans: "अलीकडील स्कॅन",
    disease: "आढळलेले रोग",
    performance: "कार्यप्रदर्शन",
    model: "97.4% मॉडेल अचूकता मिळाली",
    scanToday: "आज 12 पानांच्या प्रतिमा विश्लेषित",
    found: "3 नवीन प्रकरणे आढळली",
    stable: "सिस्टम स्थिती: स्थिर 🌱",
    footer: "© 2025 प्लांट हेल्थ डॅशबोर्ड | डिझाइन: करिश्मा बिसेन 💚",

    sidebarTitle: "🌿 ऑर्गेनिक प्लांट मदर 25" ,
    menuDashboard: "डॅशबोर्ड",
    menuDetect: "रोग ओळख",
    menuTips: "सेंद्रिय टिप्स",
    menuChat: "चॅटबॉट",
    menuVoice: "व्हॉइस असिस्टंट",
    menuLearn: "रोग शिका",
    menuRecords: "रोग गंभीरता नोंदी",
    menulogoutBtn: "लॉगआउट"
  },

  bn: {
    welcome: "ফিরে আসার জন্য স্বাগতম, করিশ্মা 🌼",
    accuracy: "ডিটেকশন সঠিকতা",
    scans: "সাম্প্রতিক স্ক্যান",
    disease: "সনাক্ত রোগসমূহ",
    performance: "পারফরম্যান্স",
    model: "৯৭.৪% মডেল সঠিকতা অর্জিত",
    scanToday: "আজ ১২টি পাতার ছবি বিশ্লেষণ করা হয়েছে",
    found: "৩টি নতুন কেস শনাক্ত",
    stable: "সিস্টেম অবস্থা: স্থিতিশীল 🌱",
    footer: "© 2025 প্ল্যান্ট হেলথ ড্যাশবোর্ড | ডিজাইন: করিশ্মা বিসেন 💚",
    
    sidebarTitle: "🌿 অর্গানিক প্লান্ট মাদার 25",
    menuDashboard: "ড্যাশবোর্ড",
    menuDetect: "রোগ সনাক্তকরণ",
    menuTips: "অর্গানিক টিপস",
    menuChat: "চ্যাটবট",
    menuVoice: "ভয়েস অ্যাসিস্ট্যান্ট",
    menuLearn: "রোগ শিখুন",
    menuRecords: "রোগের তীব্রতার রেকর্ড",
    menulogoutBtn: "লগআউট"
  },

  gu: {
    welcome: "પાછા આવવા માટે સ્વાગત છે, કરિશ્મા 🌼",
    accuracy: "ડિટેક્શન ચોકસાઇ",
    scans: "તાજેતરના સ્કેન",
    disease: "શોધાયેલા રોગો",
    performance: "કાર્યદક્ષતા",
    model: "97.4% મોડેલ ચોકસાઇ પ્રાપ્ત",
    scanToday: "આજે 12 પાનાની છબીઓ વિશ્લેષિત",
    found: "3 નવા કેસ ઓળખાયા",
    stable: "સિસ્ટમ સ્થિતિ: સ્થિર 🌱",
    footer: "© 2025 પ્લાન્ટ હેલ્થ ડેશબોર્ડ | ડિઝાઇન: કરિશ્મા બિસેન 💚",
    
    sidebarTitle: "🌿 ઓર્ગેનિક પ્લાન્ટ માધર 25",
    menuDashboard: "ડેશબોર્ડ",
    menuDetect: "રોગ શોધ",
    menuTips: "ઓર્ગેનિક ટીપ્સ",
    menuChat: "ચેટબોટ",
    menuVoice: "વોઇસ સહાયક",
    menuLearn: "રોગો શીખો",
    menuRecords: "રોગ ગંભીરતા રેકોર્ડ",
    menulogoutBtn: "લૉગઆઉટ"
  },

  ur: {
    welcome: "واپسی پر خوش آمدید، کرشمہ 🌼",
    accuracy: "ڈیٹیکشن کی درستگی",
    scans: "حالیہ اسکین",
    disease: "ملی بیماریاں",
    performance: "کارکردگی",
    model: "97.4% ماڈل درستگی حاصل",
    scanToday: "آج 12 پتوں کی تصاویر کا تجزیہ کیا گیا",
    found: "3 نئے کیس شناخت",
    stable: "سسٹم کی حالت: مستحکم 🌱",
    footer: "© 2025 پلانٹ ہیلتھ ڈیش بورڈ | ڈیزائن: کرشمہ بسین 💚",
    
    sidebarTitle: "🌿 آرگینک پلانٹ مادر 25",
    menuDashboard: "ڈیش بورڈ",
    menuDetect: "مرض کی شناخت",
    menuTips: "نامیاتی تجاویز",
    menuChat: "چیٹ بوٹ",
    menuVoice: "وائس اسسٹنٹ",
    menuLearn: "امراض سیکھیں",
    menuRecords: "شدت کا ریکارڈ",
    menulogoutBtn: "لاگ آؤٹ"
  },

  or: {
    welcome: "ପୁଣି ଫେରିଥିବାରୁ ସ୍ୱାଗତ, କରିଶ୍ମା 🌼",
    accuracy: "ଡିଟେକ୍ସନ ସଠିକତା",
    scans: "ସମ୍ପ୍ରତି ସ୍କ୍ୟାନ",
    disease: "ଚିହ୍ନଟ ରୋଗ",
    performance: "କାର୍ଯ୍ୟକୁଶଳତା",
    model: "97.4% ମଡେଲ ସଠିକତା ଲଭ୍ୟ",
    scanToday: "ଆଜି 12ଟି ପତ୍ର ଛବି ବିଶ୍ଳେଷଣ",
    found: "3ଟି ନୂଆ କେସ ଚିହ୍ନଟ",
    stable: "ସିଷ୍ଟମ ସ୍ଥିତି: ସ୍ଥିର 🌱",
    footer: "© 2025 ପ୍ଲାଣ୍ଟ ହେଲ୍ଥ ଡ୍ୟାଶବୋର୍ଡ | ଡିଜାଇନ୍: କରିଶ୍ମା ବିସେନ 💚",
    
    
    menuDashboard: "ଡ୍ୟାଶବୋର୍ଡ",
    menuDetect: "ରୋଗ ସନ୍ଧାନ",
    menuTips: "ଜୈବ ପରାମର୍ଶ",
    menuChat: "ଚ୍ୟାଟବଟ୍",
    menuVoice: "ଭୋଇସ୍ ସହାୟକ",
    menuLearn: "ରୋଗ ଶିଖନ୍ତୁ",
    menuRecords: "ରୋଗ ଗୁରୁତ୍ୱ ରେକର୍ଡ",
    menulogoutBtn: "ଲଗଆଉଟ"
  },

  pa: {
    welcome: "ਵਾਪਸੀ 'ਤੇ ਸੁਆਗਤ ਹੈ, ਕਰਿਸ਼ਮਾ 🌼",
    accuracy: "ਡਿਟੈਕਸ਼ਨ ਸ਼ੁੱਧਤਾ",
    scans: "ਤਾਜ਼ਾ ਸਕੈਨ",
    disease: "ਪਾਈਆਂ ਬਿਮਾਰੀਆਂ",
    performance: "ਕਾਰਗੁਜ਼ਾਰੀ",
    model: "97.4% ਮਾਡਲ ਸ਼ੁੱਧਤਾ ਪ੍ਰਾਪਤ",
    scanToday: "ਅੱਜ 12 ਪੱਤਿਆਂ ਦੀਆਂ ਤਸਵੀਰਾਂ ਦਾ ਵਿਸ਼ਲੇਸ਼ਣ",
    found: "3 ਨਵੇਂ ਕੇਸ ਮਿਲੇ",
    stable: "ਸਿਸਟਮ ਸਥਿਤੀ: ਸਥਿਰ 🌱",
    footer: "© 2025 ਪਲਾਂਟ ਹੈਲਥ ਡੈਸ਼ਬੋਰਡ | ਡਿਜ਼ਾਈਨ: ਕਰਿਸ਼ਮਾ ਬਿਸੇਨ 💚",
    
    sidebarTitle: "🌿 ਆਰਗੈਨਿਕ ਪਲਾਂਟ ਮਦਰ 25",
    menuDashboard: "ਡੈਸ਼ਬੋਰਡ",
    menuDetect: "ਰੋਗ ਪਤਾ ਲਗਾਉਣਾ",
    menuTips: "ਜੈਵਿਕ ਸੁਝਾਅ",
    menuChat: "ਚੈਟਬੋਟ",
    menuVoice: "ਵੋਇਸ ਸਹਾਇਕ",
    menuLearn: "ਬਿਮਾਰੀਆਂ ਸਿੱਖੋ",
    menuRecords: "ਬਿਮਾਰੀ ਗੰਭੀਰਤਾ ਰਿਕਾਰਡ",
    menulogoutBtn: "ਲਾਗਆਉਟ"
  },

  ta: {
    welcome: "மீண்டும் வருக, கரிஷ்மா 🌼",
    accuracy: "கண்டறியும் துல்லியம்",
    scans: "சமீபத்திய ஸ்கான்",
    disease: "கண்டறியப்பட்ட நோய்கள்",
    performance: "செயல்திறன்",
    model: "97.4% மாதிரி துல்லியம் பதிவு",
    scanToday: "இன்று 12 இலை படங்கள் பகுப்பாய்வு",
    found: "3 புதிய வழக்குகள் கண்டறியப்பட்டன",
    stable: "கணினி நிலை: நிலையானது 🌱",
    footer: "© 2025 செடி ஆரோக்கிய டாஷ்போர்ட் | வடிவமைப்பு: கரிஷ்மா பிசேன் 💚",

    sidebarTitle: "🌿 உயிரியல் தாவரம் மாதா 25",
    menuDashboard: "டாஷ்போர்ட்",
    menuDetect: "நோய் கண்டறிதல்",
    menuTips: "உயிரியல் குறிப்புகள்",
    menuChat: "அரட்டை பொட்டி",
    menuVoice: "குரல் உதவியாளர்",
    menuLearn: "நோய்களை கற்றுக்கொள்ளுங்கள்",
    menuRecords: "நோய் தீவிரத்தின் பதிவுகள்",
    menulogoutBtn: "லாக்அவுட்"
  },

  kn: {
    welcome: "ಮತ್ತೆ ಸ್ವಾಗತ, ಕರಿಷ್ಮಾ 🌼",
    accuracy: "ಗುರುತಿಸುವ ನಿಖರತೆ",
    scans: "ಇತ್ತೀಚಿನ ಸ್ಕ್ಯಾನ್‌ಗಳು",
    disease: "ಪತ್ತೆಯಾದ ರೋಗಗಳು",
    performance: "ಕಾರ್ಯಕ್ಷಮತೆ",
    model: "97.4% ಮಾದರಿ ನಿಖರತೆ ಸಾಧಿಸಲಾಗಿದೆ",
    scanToday: "ಇಂದು 12 ಎಲೆ ಚಿತ್ರಗಳನ್ನು ವಿಶ್ಲೇಷಿಸಲಾಗಿದೆ",
    found: "3 ಹೊಸ ಪ್ರಕರಣಗಳು ಪತ್ತೆ",
    stable: "ವ್ಯವಸ್ಥೆಯ ಸ್ಥಿತಿ: ಸ್ಥಿರ 🌱",
    footer: "© 2025 ಸಸ್ಯ ಆರೋಗ್ಯ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್ | ವಿನ್ಯಾಸ: ಕರಿಷ್ಮಾ ಬಿಸೆನ್ 💚",
    
    sidebarTitle: "🌿 ಆರ್ಗ್ಯಾನಿಕ್ ಪ್ಲಾಂಟ್ ಮದರ್ 25",
    menuDashboard: "ಡ್ಯಾಶ್‌ಬೋರ್ಡ್",
    menuDetect: "ರೋಗ ಪತ್ತೆ",
    menuTips: "ಜೈವಿಕ ಸಲಹೆಗಳು",
    menuChat: "ಚಾಟ್‌ಬಾಟ್",
    menuVoice: "ಧ್ವನಿ ಸಹಾಯಕ",
    menuLearn: "ರೋಗಗಳನ್ನು ಕಲಿಯಿರಿ",
    menuRecords: "ರೋಗ ತೀವ್ರತಾ ದಾಖಲೆಗಳು",
    menulogoutBtn: "ಲಾಗ್‌ಔಟ್"
  },

  te: {
    welcome: "తిరిగి స్వాగతం, కరిష్మా 🌼",
    accuracy: "డిటెక్షన్ ఖచ్చితత్వం",
    scans: "ఇటీవలి స్కాన్‌లు",
    disease: "గుర్తించిన వ్యాధులు",
    performance: "నిర్వహణ",
    model: "97.4% మోడల్ ఖచ్చితత్వం సాధించబడింది",
    scanToday: "నేడు 12 ఆకుల చిత్రాలు విశ్లేషించబడ్డాయి",
    found: "3 కొత్త కేసులు గుర్తించబడినవి",
    stable: "సిస్టమ్ స్థితి: స్థిరం 🌱",
    footer: "© 2025 ప్లాంట్ హెల్త్ డాష్‌బోర్డ్ | డిజైన్: కరిష్మా బిసేన్ 💚",
    
    sidebarTitle: "🌿 ఆర్గానిక్ ప్లాంట్ మదర్ 25",
    menuDashboard: "డాష్‌బోర్డ్",
    menuDetect: "వ్యాధి గుర్తింపు",
    menuTips: "సేంద్రీయ చిట్కాలు",
    menuChat: "చాట్‌బాట్",
    menuVoice: "వాయిస్ అసిస్టెంట్",
    menuLearn: "వ్యాధులు నేర్చుకోండి",
    menuRecords: "వ్యాధి తీవ్రమైన రికార్డులు",
    menulogoutBtn: "లాగ్అవుట్"
  },

  ml: {
    welcome: "തിരികെ വരുവാൻ സ്വാഗതം, കരിഷ്മാ 🌼",
    accuracy: "ഡിറ്റക്ഷൻ കൃത്യത",
    scans: "സമീപകാല സ്കാനുകൾ",
    disease: "കണ്ടെത്തിയ രോഗങ്ങൾ",
    performance: "പ്രകടനം",
    model: "97.4% മോഡൽ കൃത്യത നേടിയിരിക്കുന്നു",
    scanToday: "ഇന്ന് 12 ഇല ചിത്രങ്ങൾ വിശകലനം ചെയ്തു",
    found: "3 പുതിയ കേസുകൾ കണ്ടെത്തി",
    stable: "സിസ്റ്റം നില: സ്ഥിരം 🌱",
    footer: "© 2025 പ്ലാന്റ് ഹെൽത്ത് ഡാഷ്ബോർഡ് | ഡിസൈൻ: കരിഷ്മ ബിസെൻ 💚",

    sidebarTitle: "🌿 ഓർഗാനിക് പ്ലാൻറ് മദർ 25",
    menuDashboard: "ഡാഷ്ബോർഡ്",
    menuDetect: "രോഗം കണ്ടെത്തൽ",
    menuTips: "ഓർഗാനിക്ക് വിശദാംശങ്ങൾ",
    menuChat: "ചാറ്റ്‌ബോട്ട്",
    menuVoice: "വോയ്‌സ് അസിസ്റ്റന്റ്",
    menuLearn: "രോഗങ്ങൾ പഠിക്കുക",
    menuRecords: "രോഗ ഗുരുതരത രേഖകൾ",
    menulogoutBtn: "ലോഗ്ഔട്ട്"
  }
};



// Function to apply translations
function applyLanguage(lang) {
  // Sidebar title
  document.querySelector('.sidebar h2').innerText = translations[lang].sidebarTitle;

  // Header
  document.querySelector('.header h1').innerHTML = translations[lang].welcome;

  // Cards
  const cardTitles = document.querySelectorAll('.card h3');
  const cardTexts = document.querySelectorAll('.card p');

  cardTitles[0].innerText = translations[lang].accuracy;
  cardTitles[1].innerText = translations[lang].scans;
  cardTitles[2].innerText = translations[lang].disease;
  cardTitles[3].innerText = translations[lang].performance;

  cardTexts[0].innerText = translations[lang].model;
  cardTexts[1].innerText = translations[lang].scanToday;
  cardTexts[2].innerText = translations[lang].found;
  cardTexts[3].innerText = translations[lang].stable;

  // Footer
  document.querySelector('.footer').innerHTML = translations[lang].footer;

  // Sidebar menu items + logout
  const menuItems = {
    menuDashboard: "menuDashboard",
    menuDetect: "menuDetect",
    menuTips: "menuTips",
    menuChat: "menuChat",
    menuVoice: "menuVoice",
    menuLearn: "menuLearn",
    menuRecords: "menuRecords",
    menulogoutBtn: "menulogoutBtn"
  };

  for (const id in menuItems) {
    const element = document.getElementById(id);
    if (element) {
      const span = element.querySelector('span');
      if (span) {
        span.innerText = translations[lang][menuItems[id]];
      } else {
        element.innerText = translations[lang][menuItems[id]];
      }
    }
  }
}

// Apply language on page load
document.addEventListener('DOMContentLoaded', () => {
  applyLanguage(languageSelect.value);
});

// Apply language on dropdown change
languageSelect.addEventListener('change', () => {
  applyLanguage(languageSelect.value);
});





