
    /********************
     * TRANSLATIONS DATA
     * Each language key has:
     * - ui: { title, back, download, footer, headers }
     * - plants: [10 plant names]
     * - diseases: [8 disease names]
     * - severities: { low, medium, high }
     ********************/
    const translations = {
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

    // Basic lists lengths (plants=10, diseases=8). We'll generate 50 rows rotating through lists.
    const ROW_COUNT = 50;
    const defaultLang = localStorage.getItem('disease_lang') || 'en';
    const langSelect = document.getElementById('lang');

    // Set saved language in select
    langSelect.value = defaultLang;

    // Update DOM elements' text and regenerate table based on selected language
    function setLanguage(langKey) {
      const lang = translations[langKey] || translations['en'];

      // UI texts
      document.getElementById('title').innerText = lang.ui.title;
      document.getElementById('backBtn').innerText = lang.ui.back;
      document.getElementById('downloadBtn').innerText = lang.ui.download;
      document.getElementById('footer').innerText = lang.ui.footer;
      // headers
      document.getElementById('th-plant').innerText = lang.ui.headers[0];
      document.getElementById('th-disease').innerText = lang.ui.headers[1];
      document.getElementById('th-severity').innerText = lang.ui.headers[2];

      // regenerate table rows based on translated arrays
      const tbody = document.getElementById('tableBody');
      tbody.innerHTML = ""; // clear

      for (let i = 0; i < ROW_COUNT; i++) {
        const plant = lang.plants[i % lang.plants.length];
        const disease = lang.diseases[i % lang.diseases.length];
        // severity distribution (rotate low, medium, high)
        const sevKeys = ['low','medium','high'];
        const sevKey = sevKeys[i % 3];
        const sevText = lang.severities[sevKey];
        const sevClass = sevKey; // CSS: low, medium, high

        const tr = document.createElement('tr');
        tr.innerHTML = `
          <td>${escapeHtml(plant)}</td>
          <td>${escapeHtml(disease)}</td>
          <td><span class="severity ${sevClass}">${escapeHtml(sevText)}</span></td>
        `;
        tbody.appendChild(tr);
      }

      // persist preference
      localStorage.setItem('disease_lang', langKey);
    }

    // CSV download using current language translations
    function downloadCSV() {
      const langKey = document.getElementById('lang').value;
      const lang = translations[langKey] || translations['en'];
      let csv = "";
      // add headers (translated)
      csv += lang.ui.headers.join(",") + "\n";

      // rows should match current table generation rules
      for (let i = 0; i < ROW_COUNT; i++) {
        const plant = lang.plants[i % lang.plants.length];
        const disease = lang.diseases[i % lang.diseases.length];
        const sevKeys = ['low','medium','high'];
        const sevKey = sevKeys[i % 3];
        const sevText = lang.severities[sevKey];

        // escape commas in text by wrapping fields in quotes
        csv += `"${plant.replace(/"/g,'""')}","${disease.replace(/"/g,'""')}","${sevText.replace(/"/g,'""')}"\n`;
      }

      const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      // file name in selected language key for clarity
      const filename = `${langKey}_Disease_Severity_Records.csv`;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      link.remove();
    }

    // Go back (same logic as original)
    function goBack() {
      if (document.referrer) history.back();
      else window.location.href = "dashboard.html";
    }

    // Escape HTML helper (simple)
    function escapeHtml(text) {
      return String(text)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
    }

    // Event listener for language select
    langSelect.addEventListener('change', (e) => {
      setLanguage(e.target.value);
    });

    // Initialize on load
    setLanguage(defaultLang);
  
