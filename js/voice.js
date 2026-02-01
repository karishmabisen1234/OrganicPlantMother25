
    feather.replace();

    // ---------- LANG MAP ----------
    const LANG_MAP = {
      en: "en-IN",
      hi: "hi-IN",
      mr: "mr-IN",
      bn: "bn-IN",
      ta: "ta-IN",
      te: "te-IN",
      gu: "gu-IN",
      pa: "pa-IN",
      kn: "kn-IN",
      ml: "ml-IN",
      or: "or-IN",
      ur: "ur-IN"
    };

    let currentLanguage = 'en';
    const statusEl = document.getElementById('status');
    const resultList = document.getElementById('resultList');
    const LANG_DATA = {
  en: {
    title: "🌿 Smart Plant Voice Assistant",
    subtitle: "Voice + Animated list output • Female voice • 13 Indian languages",
    statusIdle: "🎙️ Click Start and say a plant name",
    listening: "🎤 Listening...",
    micStopped: "⏹️ Mic stopped.",
    back: "← Back to Dashboard",
    labels: {
      plant: "Plant",
      disease: "Disease",
      weather: "Weather",
      solution: "Organic Solution",
      suggestion: "Suggestion"
    }
  },

  hi: {
    title: "🌿 स्मार्ट प्लांट वॉइस असिस्टेंट",
    subtitle: "आवाज़ से पौधों की जानकारी",
    statusIdle: "🎙️ स्टार्ट दबाएं और पौधे का नाम बोलें",
    listening: "🎤 सुन रहा है...",
    micStopped: "⏹️ माइक बंद",
    back: "← डैशबोर्ड पर वापस",
    labels: {
      plant: "पौधा",
      disease: "रोग",
      weather: "मौसम",
      solution: "जैविक समाधान",
      suggestion: "सलाह"
    }
  },

  mr: {
    title: "🌿 स्मार्ट प्लांट व्हॉइस असिस्टंट",
    subtitle: "आवाजाद्वारे वनस्पती माहिती",
    statusIdle: "🎙️ स्टार्ट दाबा आणि झाडाचे नाव बोला",
    listening: "🎤 ऐकत आहे...",
    micStopped: "⏹️ माइक बंद",
    back: "← डॅशबोर्ड",
    labels: {
      plant: "वनस्पती",
      disease: "रोग",
      weather: "हवामान",
      solution: "सेंद्रिय उपाय",
      suggestion: "सूचना"
    }
  },

  bn: {
    title: "🌿 স্মার্ট প্ল্যান্ট ভয়েস অ্যাসিস্ট্যান্ট",
    subtitle: "ভয়েস দিয়ে উদ্ভিদের তথ্য",
    statusIdle: "🎙️ স্টার্ট চাপুন এবং গাছের নাম বলুন",
    listening: "🎤 শুনছে...",
    micStopped: "⏹️ মাইক বন্ধ",
    back: "← ড্যাশবোর্ড",
    labels: {
      plant: "উদ্ভিদ",
      disease: "রোগ",
      weather: "আবহাওয়া",
      solution: "জৈব সমাধান",
      suggestion: "পরামর্শ"
    }
  },

  ta: {
    title: "🌿 ஸ்மார்ட் பிளாண்ட் குரல் உதவியாளர்",
    subtitle: "குரலால் தாவர தகவல்",
    statusIdle: "🎙️ தொடங்கு அழுத்தி செடியின் பெயர் சொல்லவும்",
    listening: "🎤 கேட்கிறது...",
    micStopped: "⏹️ மைக் நிறுத்தப்பட்டது",
    back: "← டாஷ்போர்டு",
    labels: {
      plant: "தாவரம்",
      disease: "நோய்",
      weather: "வானிலை",
      solution: "இயற்கை தீர்வு",
      suggestion: "பரிந்துரை"
    }
  },

  te: {
    title: "🌿 స్మార్ట్ ప్లాంట్ వాయిస్ అసిస్టెంట్",
    subtitle: "వాయిస్ ద్వారా మొక్కల సమాచారం",
    statusIdle: "🎙️ స్టార్ట్ నొక్కి మొక్క పేరు చెప్పండి",
    listening: "🎤 వింటోంది...",
    micStopped: "⏹️ మైక్ ఆపబడింది",
    back: "← డాష్‌బోర్డ్",
    labels: {
      plant: "మొక్క",
      disease: "వ్యాధి",
      weather: "వాతావరణం",
      solution: "సేంద్రియ పరిష్కారం",
      suggestion: "సలహా"
    }
  },

  gu: {
    title: "🌿 સ્માર્ટ પ્લાન્ટ વૉઇસ અસિસ્ટન્ટ",
    subtitle: "અવાજથી છોડની માહિતી",
    statusIdle: "🎙️ સ્ટાર્ટ દબાવો અને છોડનું નામ બોલો",
    listening: "🎤 સાંભળી રહ્યું છે...",
    micStopped: "⏹️ માઇક બંધ",
    back: "← ડેશબોર્ડ",
    labels: {
      plant: "છોડ",
      disease: "રોગ",
      weather: "હવામાન",
      solution: "સજીવ ઉપાય",
      suggestion: "સૂચન"
    }
  },

  pa: {
    title: "🌿 ਸਮਾਰਟ ਪਲਾਂਟ ਵੌਇਸ ਅਸਿਸਟੈਂਟ",
    subtitle: "ਆਵਾਜ਼ ਰਾਹੀਂ ਪੌਦਿਆਂ ਦੀ ਜਾਣਕਾਰੀ",
    statusIdle: "🎙️ ਸਟਾਰਟ ਦਬਾਓ ਅਤੇ ਪੌਦੇ ਦਾ ਨਾਮ ਬੋਲੋ",
    listening: "🎤 ਸੁਣ ਰਿਹਾ ਹੈ...",
    micStopped: "⏹️ ਮਾਈਕ ਬੰਦ",
    back: "← ਡੈਸ਼ਬੋਰਡ",
    labels: {
      plant: "ਪੌਦਾ",
      disease: "ਬਿਮਾਰੀ",
      weather: "ਮੌਸਮ",
      solution: "ਜੈਵਿਕ ਹੱਲ",
      suggestion: "ਸਲਾਹ"
    }
  },

  kn: {
    title: "🌿 ಸ್ಮಾರ್ಟ್ ಪ್ಲಾಂಟ್ ವಾಯ್ಸ್ ಅಸಿಸ್ಟೆಂಟ್",
    subtitle: "ಧ್ವನಿಯ ಮೂಲಕ ಸಸ್ಯ ಮಾಹಿತಿ",
    statusIdle: "🎙️ ಸ್ಟಾರ್ಟ್ ಒತ್ತಿ ಸಸ್ಯದ ಹೆಸರನ್ನು ಹೇಳಿ",
    listening: "🎤 ಕೇಳುತ್ತಿದೆ...",
    micStopped: "⏹️ ಮೈಕ್ ನಿಲ್ಲಿಸಲಾಗಿದೆ",
    back: "← ಡ್ಯಾಶ್‌ಬೋರ್ಡ್",
    labels: {
      plant: "ಸಸ್ಯ",
      disease: "ರೋಗ",
      weather: "ಹವಾಮಾನ",
      solution: "ಸಸ್ಯಜ ಪರಿಹಾರ",
      suggestion: "ಸಲಹೆ"
    }
  },

  ml: {
    title: "🌿 സ്മാർട്ട് പ്ലാന്റ് വോയ്സ് അസിസ്റ്റന്റ്",
    subtitle: "ശബ്ദത്തിലൂടെ സസ്യ വിവരങ്ങൾ",
    statusIdle: "🎙️ സ്റ്റാർട്ട് അമർത്തി ചെടിയുടെ പേര് പറയുക",
    listening: "🎤 കേൾക്കുന്നു...",
    micStopped: "⏹️ മൈക്ക് ഓഫ്",
    back: "← ഡാഷ്ബോർഡ്",
    labels: {
      plant: "ചെടി",
      disease: "രോഗം",
      weather: "കാലാവസ്ഥ",
      solution: "ജൈവ പരിഹാരം",
      suggestion: "നിർദ്ദേശം"
    }
  },

  or: {
    title: "🌿 ସ୍ମାର୍ଟ ପ୍ଲାଣ୍ଟ ଭଏସ୍ ଏସିଷ୍ଟାଣ୍ଟ",
    subtitle: "କଣ୍ଠସ୍ୱରରେ ଉଦ୍ଭିଦ ସୂଚନା",
    statusIdle: "🎙️ ଷ୍ଟାର୍ଟ ଦବାନ୍ତୁ ଏବଂ ଗଛର ନାମ କହନ୍ତୁ",
    listening: "🎤 ଶୁଣୁଛି...",
    micStopped: "⏹️ ମାଇକ୍ ବନ୍ଦ",
    back: "← ଡ୍ୟାଶବୋର୍ଡ",
    labels: {
      plant: "ଗଛ",
      disease: "ରୋଗ",
      weather: "ପାଗ",
      solution: "ଜୈବିକ ଉପାୟ",
      suggestion: "ପରାମର୍ଶ"
    }
  },

  ur: {
    title: "🌿 اسمارٹ پلانٹ وائس اسسٹنٹ",
    subtitle: "آواز کے ذریعے پودوں کی معلومات",
    statusIdle: "🎙️ اسٹارٹ دبائیں اور پودے کا نام بولیں",
    listening: "🎤 سن رہا ہے...",
    micStopped: "⏹️ مائیک بند",
    back: "← ڈیش بورڈ",
    labels: {
      plant: "پودا",
      disease: "بیماری",
      weather: "موسم",
      solution: "نامیاتی حل",
      suggestion: "مشورہ"
    }
  }
};



    // ---------- FULL PLANTS ARRAY (from your data) ----------
   const PLANT_KEYS = {
      en: {
        name: "English",
        ui: {
          title: "Disease Severity Records",
          back: "⬅ Back to Dashboard",
          download: "⬇ Download Records (CSV)",
          footer: "Made with 🌱 care by Karishma Bisen",
          headers: ["Plant Name","Disease","Severity"]
        },
        plants: ["Tomato","Potato","Rice","Wheat","Mango","Banana","Apple","Grapes","Orange","Chili"],
        diseases: ["Leaf Blight","Late Blight","Blast","Rust","Anthracnose","Powdery Mildew","Curl Virus","Smut"],
        severities: { low:"Low", medium:"Medium", high:"High" }
      },

      hi: {
        name: "हिन्दी",
        ui: {
          title: "रोग गंभीरता रिकॉर्ड",
          back: "⬅ डैशबोर्ड पर वापस जाएँ",
          download: "⬇ रिकॉर्ड डाउनलोड करें (CSV)",
          footer: "🌱 के साथ बनाया — करिश्मा बिसेन",
          headers: ["पौधे का नाम","रोग","गंभीरता"]
        },
        plants: ["टमाटर","आलू","चावल","गेहूं","आम","केला","सेब","अंगूर","संतरा","मिर्च"],
        diseases: ["पर्ण झुलसा","लेट ब्लाइट","ब्लास्ट","रस्ट","एन्थ्रैक्नोज","पाउडरी मिल्ड्यू","कर्ल वायरस","स्मट"],
        severities: { low:"कम", medium:"मध्यम", high:"उच्च" }
      },

      mr: {
        name: "मराठी",
        ui: {
          title: "रोग गंभीरता नोंदी",
          back: "⬅ डॅशबोर्डवर परत",
          download: "⬇ नोंदी डाउनलोड करा (CSV)",
          footer: "🌱 काळजीपूर्वक बनविले — करिश्मा बिसेन",
          headers: ["पिकाचे नाव","रोग","गंभीरता"]
        },
        plants: ["टोमॅटो","बटाटा","तांदूळ","गहू","आंबा","केळी","सफरचंद","द्राक्षे","संत्री","मिरची"],
        diseases: ["पान गल रोग","लेट ब्लाइट","ब्लास्ट","रस्ट","अँथ्रॅक्नोस","पावडरी मिल्ड्यू","कर्ल व्हायरस","स्मट रोग"],
        severities: { low:"कमी", medium:"मध्यम", high:"जास्त" }
      },

      gu: {
        name: "ગુજરાતી",
        ui: {
          title: "રોગ ગંભીરતા રેકોર્ડ",
          back: "⬅ ડેશબોર્ડ પર પાછા જાઓ",
          download: "⬇ રેકોર્ડ ડાઉનલોડ કરો (CSV)",
          footer: "🌱 સંભાળ સાથે બનાવ્યું — Karishma Bisen",
          headers: ["ચારાનું નામ","રોગ","ગંભીરતા"]
        },
        plants: ["ટામેટા","બટાકા","ચોખા","ઘઉં","કેરી","કેળા","સફરજન","દ્રાક્ષ","નારંગી","મરચું"],
        diseases: ["લીફ બલાઈટ","લેટ બલાઈટ","બ્લાસ્ટ","રસ્ટ","એન્થ્રાક્નોઝ","પાઉડરી મિલ્ડ્યૂ","કર્લ વાયરસ","સ્મટ"],
        severities: { low:"નીચું", medium:"મધ્યમ", high:"ઉંચું" }
      },

      ta: {
        name: "தமிழ்",
        ui: {
          title: "நோய் شددرجة பதிவுகள்",
          back: "⬅ டாஷ்போர்டுக்கு назад",
          download: "⬇ பதிவுகளை பதிவிறக்கம் செய்க (CSV)",
          footer: "🌱 முறையாக உருவாக்கப்பட்டது — Karishma Bisen",
          headers: ["பயிர் பெயர்","நோய்","கடுமை"]
        },
        plants: ["தக்காளி","உருளைக்கிழங்கு","அரிசி","கோதுமை","மாம்பழம்","வாழைப்பழம்","ஆப்பிள்","திராட்சை","ஆரஞ்சு","மிளகாய்"],
        diseases: ["லீஃப் பிளைட்","லேட் பிளைட்","பிளாஸ்ட்","ரஸ்ட்","அந்த்ராக்னோஸ்","பவுடரி மில்ட்யூ","கர்ல் வைரஸ்","ஸ்மட்"],
        severities: { low:"குறைந்த", medium:"நடுத்தரம்", high:"அதிகம்" }
      },

      te: {
        name: "తెలుగు",
        ui: {
          title: "రోగ తీవ్రత రికార్డులు",
          back: "⬅ డాష్‌బోర్డ్కి వెళ్ళు",
          download: "⬇ రికార్డ్స్ డౌన్లోడ్ చేయండి (CSV)",
          footer: "🌱 శ్రద్ధగా తయారు చేసింది — Karishma Bisen",
          headers: ["చెట్టు పేరు","రోగం","తీవ్రత"]
        },
        plants: ["టొమాటో","బంగాళదుంప","బియ్యం","గోధుమ","మామిడి","అరటి","ఆపిల్","ద్రాక్ష","నారింజ","మిరప"],
        diseases: ["లీఫ్ బ్లైట్","లేట్ బ్లైట్","బ్లాస్ట్","రస్ట్","అంత్రాక్నోస్","పౌడరీ మిల్డ్యూ","కర్ల్ వైరస్","స్మట్"],
        severities: { low:"తక్కువ", medium:"మాధ్యమ", high:"ఎక్కువ" }
      },

      kn: {
        name: "ಕನ್ನಡ",
        ui: {
          title: "ರೋಗ ತೀವ್ರತಾ ದಾಖಲೆಗಳು",
          back: "⬅ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್‌ಗೆ ಹಿಂದಿರहोस्",
          download: "⬇ ದಾಖಲೆಗಳನ್ನು ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ (CSV)",
          footer: "🌱 ಕಾಳಜಿ ಸಹಿತ ತಯಾರಿಸಿದೆ — Karishma Bisen",
          headers: ["ಸಸ್ಯದ ಹೆಸರು","ರೋಗ","ತೀವ್ರತೆ"]
        },
        plants: ["ಟೊಮೇಟೋ","ಆಲೂಗಡ್ಡೆ","ಅಕ್ಕಿ","ಗೋಧಿ","ಮಾವಿನಹಣ್ಣು","ಬಾಳೆಹಣ್ಣು","ಆಪಲ್","ದ್ರಾಕ್ಷಿ","ಕಿತ್ತಳೆ","ಮೆಣಸು"],
        diseases: ["ಲೀಫ್ ಬ್ಲೈಟ್","ಲೇಟ್ ಬ್ಲೈಟ್","ಬ್ಲಾಸ್ಟ್","ರಸ್ಟ್","ಅಂತ್ರಾಕ್ನೋಸ್","ಪೌಡರಿ ಮಿಲ್ಡ್ಯೂ","ಕcurl ವೈರಸ್","ಸ್ಮಟ್"],
        severities: { low:"ಕಡಿಮೆ", medium:"ಮಧ್ಯಮ", high:"ಹೆಚ್ಚು" }
      },

      ml: {
        name: "മലയാളം",
        ui: {
          title: "രോഗ ഗൗരവ റിപ്പോര്‍ട്ടുകൾ",
          back: "⬅ ഡാഷ്ബോർഡിലേക്ക് മടങ്ങുക",
          download: "⬇ റിപ്പോര്ട്ടുകൾ ഡൗൺലോഡ് ചെയ്യുക (CSV)",
          footer: "🌱 പരിചരിച്ച് തയ്യാറാക്കിയത് — Karishma Bisen",
          headers: ["അപ്പം പേര്","രോഗം","തീവ്രത"]
        },
        plants: ["തക്കാളി","ഉരുളക്കിഴങ്ങ്","ചോൾ","ഗോതമ്പ്","മാമ്പഴം","വാഴപ്പഴം","ആപ്പിൾ","മുന്തിരി","ഓറഞ്ച്","മുളക്"],
        diseases: ["ലീഫ് ബ്ളൈറ്റ്","ലെറ്റ് ബ്ളൈറ്റ്","ബ്ലാസ്റ്റ്","റസ്റ്റ്","ആൻട്രാക്ക്നോസ്","പൗഡറി മിൽഡ്യൂ","കർൾ വൈറസ്","സ്മട്ട്"],
        severities: { low:"കുറഞ്ഞ", medium:"മധ്യസ്ഥം", high:"ഉയര്ന്ന" }
      },

      bn: {
        name: "বাংলা",
        ui: {
          title: "রোগ তীব্রতা রেকর্ড",
          back: "⬅ ড্যাশবোর্ডে ফিরে যান",
          download: "⬇ রেকর্ড ডাউনলোড করুন (CSV)",
          footer: "🌱 যত্ন নিয়ে তৈরি — Karishma Bisen",
          headers: ["গাছের নাম","রোগ","তীব্রতা"]
        },
        plants: ["টমেটো","আলু","চাল","গম","আম","কলা","আপেল","আঙুর","কমলা","মরিচ"],
        diseases: ["লিফ ব্লাইট","লেট ব্লাইট","ব্লাস্ট","রস্ট","এনথ্র্যাকনোজ","পাউডারি মিলডিউ","কার্ল ভাইরাস","স্মাট"],
        severities: { low:"কম", medium:"মাঝারি", high:"উচ্চ" }
      },

      pa: {
        name: "ਪੰਜਾਬੀ",
        ui: {
          title: "ਰੋਗ ਗੰਭੀਰਤਾ ਰਿਕਾਰਡ",
          back: "⬅ ਡੈਸ਼ਬੋਰਡ ਤੇ ਵਾਪਸ ਜਾਓ",
          download: "⬇ ਰਿਕਾਰਡ ਡਾਊਨਲੋਡ ਕਰੋ (CSV)",
          footer: "🌱 ਪਿਆਰ ਨਾਲ ਬਣਾਇਆ — Karishma Bisen",
          headers: ["ਪੌਦਾ ਨਾਂ","ਰੋਗ","ਗੰਭੀਰਤਾ"]
        },
        plants: ["ਟਮਾਟਰ","ਆਲੂ","ਚਾਵਲ","ਗੰਹੁ","ਅੰਬ","ਕੇਲਾ","ਸੇਬ","ਅੰਗੂਰ","ਸੰਤਰਾ","ਮਿਰਚ"],
        diseases: ["ਲੀਫ ਬਲਾਈਟ","ਲੇਟ ਬਲਾਈਟ","ਬਲਾਸਟ","ਰਸਟ","ਐਂਥਰੈਕਨੋਜ਼","ਪਾਊਡਰੀ ਮਿਲਡਿਊ","ਕਰਲ ਵਾਇਰਸ","ਸਮਟ"],
        severities: { low:"ਘੱਟ", medium:"ਦਰਮਿਆਨਾ", high:"ਉੱਚਾ" }
      },

      ur: {
        name: "اردو",
        ui: {
          title: "بیماری شدت ریکارڈز",
          back: "⬅ ڈیش بورڈ پر واپس جائیں",
          download: "⬇ ریکارڈز ڈاؤن لوڈ کریں (CSV)",
          footer: "🌱 پیار سے بنایا — Karishma Bisen",
          headers: ["پودے کا نام","مرض","شدت"]
        },
        plants: ["ٹماٹر","آلو","چاول","گندم","آم","کیلا","سیب","انگور","نارنگی","مرچ"],
        diseases: ["لیف بلیٹ","لیٹ بلیٹ","بلاسٹ","رسٹ","اینتھریکنوز","پاؤڈری ملڈیو","کرل وائرس","سمٹ"],
        severities: { low:"کم", medium:"درمیانہ", high:"زیادہ" }
      },

      ne: {
        name: "नेपाली",
        ui: {
          title: "रोग गम्भीरता रेकर्ड",
          back: "⬅ ड्यासबोर्डमा फर्कनुहोस्",
          download: "⬇ रेकर्ड डाउनलोड गर्नुहोस् (CSV)",
          footer: "🌱 माया साथ बनेको — Karishma Bisen",
          headers: ["बिरुवा नाम","रोग","गम्भीरता"]
        },
        plants: ["टमाटर","आलु","चामल","गहुँ","आँप","केरा","सेब","अंगुर","सुन्तला","खुर्सानी"],
        diseases: ["पान ब्लाइट","लेट ब्लाइट","ब्लास्ट","रस्ट","एनथ्र्याक्नोज","पाउडरी मिल्ड्यु","कर्ल भाइरस","स्मट"],
        severities: { low:"कम", medium:"मध्यम", high:"उच्च" }
      }
    };


    // ---------- speech & recognition setup ----------
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    let recognition = null;
    let listening = false;
    let synth = window.speechSynthesis;
    let availableVoices = [];
    let chosenVoice = null;

    function loadVoices(){
      availableVoices = synth.getVoices() || [];
      // pick a female-like voice as placeholder; actual voice selection happens per utterance
      chosenVoice = availableVoices.find(v => /female|woman|zira|arya|maya|anjali|kathleen|sara|google|neural/i.test(v.name)) || availableVoices[0] || null;
    }
    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;

    function speak(text, langKey = currentLanguage){
      if(!text) return;
      const u = new SpeechSynthesisUtterance(text);
      const langTag = LANG_MAP[langKey] || LANG_MAP['en'];
      u.lang = langTag;
      // try to find a voice matching language; prefer female-like
      const v = availableVoices.find(vo => vo.lang && vo.lang.toLowerCase().startsWith(langTag.split('-')[0].toLowerCase()) && /female|woman|zira|arya|maya|anjali|kathleen|sara|google|neural/i.test(vo.name));
      if(v) u.voice = v;
      else {
        const v2 = availableVoices.find(vo => vo.lang && vo.lang.toLowerCase().startsWith(langTag.split('-')[0].toLowerCase()));
        if(v2) u.voice = v2;
      }
      // female-like tuning
      u.pitch = 1.15;
      u.rate = 1;
      synth.cancel();
      synth.speak(u);
    }

    // initialize recognition
    if(!SpeechRecognition){
      statusEl.textContent = "❌ Voice Recognition not supported in this browser. Use Chrome.";
    } else {
      recognition = new SpeechRecognition();
      recognition.continuous = true;
      recognition.interimResults = false;
      recognition.lang = LANG_MAP[currentLanguage] || 'en-IN';

      recognition.onresult = (ev) => {
        const last = ev.results[ev.results.length - 1];
        const transcriptRaw = last[0].transcript.trim();
        const transcript = transcriptRaw.toLowerCase();
        statusEl.textContent = `🎙️ Heard: "${transcriptRaw}"`;
        handleCommand(transcript);
      };

      recognition.onerror = (e) => {
        statusEl.textContent = `⚠️ Recognition error: ${e.error}`;
        if(e.error === 'not-allowed' || e.error === 'permission-denied'){
          speak("Microphone permission denied. Please allow microphone access in browser settings.", 'en');
        }
      };

      recognition.onend = () => {
        if(listening){
          recognition.start();
        }
};

    }

    // ---------- command handling ----------
    function handleCommand(cmd){
      // STOP keywords - must stop silently (no speech)
      const stopKeywords = ['stop', 'stop mic', 'mic band', 'mic off', 'microphone stop', 'band kar do mic', 'rok do mic'];
      for(const s of stopKeywords){
        if(cmd.includes(s)) { stopListening(false); return; }
      }

      // language switching: exact words or short forms
      if(cmd.includes('marathi') || cmd.includes('marathi mein') || cmd.includes('switch to marathi')){
        currentLanguage = 'mr';
        recognition.lang = LANG_MAP[currentLanguage];
        speak("भाषा मराठी मध्ये बदलली गेली आहे.", 'mr');
        statusEl.textContent = '🔁 Language: Marathi';
        return;
      }
      if(cmd.includes('hindi') || cmd.includes('hindi mein') || cmd.includes('switch to hindi') || cmd.includes('hindI')){
        currentLanguage = 'hi';
        recognition.lang = LANG_MAP[currentLanguage];
        speak("भाषा हिंदी में बदल दी गई है।", 'hi');
        statusEl.textContent = '🔁 Language: Hindi';
        return;
      }
      if(cmd.includes('english') || cmd.includes('switch to english')){
        currentLanguage = 'en';
        recognition.lang = LANG_MAP[currentLanguage];
        speak("Language switched to English.", 'en');
        statusEl.textContent = '🔁 Language: English';
        return;
      }

      // other language keywords
      const languageKeywords = {
        'gujarati': 'gu', 'gujarat': 'gu', 'bengali': 'bn', 'bangla': 'bn',
        'tamil': 'ta','telugu':'te','kannada':'kn','punjabi':'pa','malayalam':'ml','odia':'or','urdu':'ur','assamese':'as','assam':'as'
      };
      for(const key in languageKeywords){
        if(cmd.includes(key)){
          currentLanguage = languageKeywords[key];
          recognition.lang = LANG_MAP[currentLanguage] || 'en-IN';
          const confirmations = {
            'gu': 'ભાષા બદલાઈ ગઈ છે.',
            'bn': 'ভাষা পরিবর্তন করা হয়েছে।',
            'ta': 'மொழி மாற்றப்பட்டுள்ளது.',
            'te': 'భాష మారింది.',
            'kn': 'ಭಾಷೆ ಬದಲಾಗಿದೆ.',
            'pa': 'ਭਾਸ਼ਾ ਬਦਲੀ ਗਈ ਹੈ।',
            'ml': 'ഭാഷ മാറി.',
            'or': 'ଭାଷା ପରିବର୍ତ୍ତିତ ହେଲା ।',
            'ur': 'زبان تبدیل ہوگئی ہے۔',
            'as': 'ভাষা পৰিবৰ্তিত হৈছে।'
          };
          speak(confirmations[currentLanguage] || 'Language switched.', currentLanguage);
          statusEl.textContent = `🔁 Language: ${currentLanguage}`;
          return;
        }
      }
      

      // find plant match (word boundaries)
      const found = PLANTS.find(p => {
        const nameLower = p.name.toLowerCase();
        // match if command includes the name as a full word or phrase
        return cmd.includes(nameLower) || cmd.includes(nameLower.split(' ')[0]);
      });

      if(found){
        // Build lines
        const lines = [
          `Plant name: ${found.name}.`,
          `Disease: ${found.disease}.`,
          `Weather: ${found.weather}.`,
          `Organic solution: ${found.solution}.`,
          `Suggestion: ${found.suggestion}.`
        ];
        const speakText = lines.join(' ');
        // speak
        speak(speakText, currentLanguage);
        // show list on screen with animation
        showResult(found);
        statusEl.textContent = `✅ Shown & spoken: ${found.name}`;
        return;
      }

      // Not recognized -> do not speak. Show subtle status
      statusEl.textContent = '❓ Not recognized (no voice reply).';
    }

    // ---------- UI list display ----------
    function showResult(item){
  const t = UI_TEXT[currentLanguage].labels;

  resultList.innerHTML = `
    <li><span class="label">${t.plant}:</span> ${item.name}</li>
    <li><span class="label">${t.disease}:</span> ${item.disease}</li>
    <li><span class="label">${t.weather}:</span> ${item.weather}</li>
    <li><span class="label">${t.solution}:</span> ${item.solution}</li>
    <li><span class="label">${t.suggestion}:</span> ${item.suggestion}</li>
  `;

  requestAnimationFrame(() => {
    resultList.classList.add("show");
  });
}


    // ---------- controls ----------
    const startBtn = document.getElementById('startBtn');
    const stopBtn = document.getElementById('stopBtn');
    const themeBtn = document.getElementById('themeBtn');
    const backBtn = document.getElementById('backBtn');

    // ---------- LANGUAGE DROPDOWN HANDLER ----------
const langSelect = document.getElementById('langSelect');

langSelect.addEventListener('change', () => {
  const selectedLang = langSelect.value;

  currentLanguage = selectedLang;
  recognition.lang = LANG_MAP[currentLanguage] || 'en-IN';

  const statusText = {
    en: "🌐 Language switched to English",
    hi: "🌐 भाषा हिंदी में बदल दी गई है",
    mr: "🌐 भाषा मराठी मध्ये बदलली आहे",
    bn: "🌐 ভাষা পরিবর্তন করা হয়েছে",
    ta: "🌐 மொழி மாற்றப்பட்டுள்ளது",
    te: "🌐 భాష మార్చబడింది",
    gu: "🌐 ભાષા બદલાઈ ગઈ છે",
    pa: "🌐 ਭਾਸ਼ਾ ਬਦਲੀ ਗਈ ਹੈ",
    kn: "🌐 ಭಾಷೆ ಬದಲಾಗಿದೆ",
    ml: "🌐 ഭാഷ മാറി",
    or: "🌐 ଭାଷା ପରିବର୍ତ୍ତିତ ହେଲା",
    ur: "🌐 زبان تبدیل ہوگئی ہے"
  };

  statusEl.textContent = statusText[selectedLang] || "🌐 Language changed";

  speak(statusText[selectedLang] || "Language changed", selectedLang);
});

   langSelect.addEventListener("change", () => {
  currentLanguage = langSelect.value;
  recognition.lang = LANG_MAP[currentLanguage] || "en-IN";

  updatePageLanguage();
  speak(LANG_DATA[currentLanguage].title, currentLanguage);
});


    startBtn.addEventListener('click', () => {
      if(!SpeechRecognition) return;
      try{
        recognition.lang = LANG_MAP[currentLanguage] || 'en-IN';
        recognition.start();
        listening = true;
        updateUI();
        statusEl.textContent = UI_TEXT[currentLanguage].listening;

      }catch(err){
        statusEl.textContent = '⚠️ Could not start — try again.';
      }
    });

    stopBtn.addEventListener('click', () => {
      stopListening(false);
    });

    function stopListening(showText = true){
      if(!SpeechRecognition) return;
      try{ recognition.stop(); }catch(e){}
      synth.cancel(); // stop speaking
      listening = false;
      updateUI();
      if(showText) statusEl.textContent = UI_TEXT[currentLanguage].micStopped;

    }

    function updatePageLanguage() {
  const data = LANG_DATA[currentLanguage] || LANG_DATA.en;
  // Title
  document.querySelector("h1").textContent = data.title;
  // Subtitle
  document.querySelector(".subtitle").textContent = data.subtitle;
  // Status (idle text)
  statusEl.textContent = data.statusIdle;
  // Back button
  document.getElementById("backBtn").textContent = data.back;
}



    function updateUI(){
      if(listening){
        startBtn.style.transform = 'scale(1.04)';
        startBtn.title = 'Listening...';
      } else {
        startBtn.style.transform = '';
        startBtn.title = 'Start listening';
      }
    }


    themeBtn.addEventListener('click', () => {
      document.body.classList.toggle('dark');
      const isDark = document.body.classList.contains('dark');
      themeBtn.innerHTML = isDark ? feather.icons.sun.toSvg() : feather.icons.moon.toSvg();
    });

    backBtn.addEventListener('click', () => {
      window.location.href = 'dashboard.html';
    });

    function detectPlant(spokenText, lang) {
  spokenText = spokenText.toLowerCase();

  for (let key in PLANT_KEYS) {
    if (
      PLANT_KEYS[key][lang] &&
      spokenText.includes(PLANT_KEYS[key][lang].toLowerCase())
    ) {
      return key; // tomato, potato
    }
  }
  return null;
}
const plantKey = detectPlant(userSpeech, currentLanguage);

if (plantKey) {
  const plantName =
    PLANT_KEYS[plantKey][currentLanguage] ||
    PLANT_KEYS[plantKey].en;

  output.innerText = `🌱 ${plantName} की जानकारी दिखा रहा हूँ`;
  speak(output.innerText, currentLanguage);
} else {
  speak("पौधा पहचान में नहीं आया", currentLanguage);
}


    // Prevent auto-speak at load; voices load asynchronously
    // But we load voices and set chosen voice heuristically
    loadVoices();

    // Accessibility: allow keyboard start/stop (Space toggles start)
    document.addEventListener('keydown', (e) => {
      if(e.code === 'Space'){
        e.preventDefault();
        if(listening) stopListening(false);
        else startBtn.click();
      }
    });
  
