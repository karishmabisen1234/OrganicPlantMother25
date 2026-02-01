
// Plant Database
const plantDB = {
  "Tomato":[
    {disease:"Late blight",organic:["Neem oil","Bordeaux mixture (organic)"]},
    {disease:"Aphids",organic:["Neem oil","Garlic spray"]}
  ],
  "Potato":[
    {disease:"Early blight",organic:["Neem oil","Copper fungicide (organic)"]}
  ],
  "Cabbage":[
    {disease:"Cabbage worm",organic:["Neem oil","Baking soda"]}
  ],
  "Carrot":[
    {disease:"Carrot fly",organic:["Neem oil","Diatomaceous earth"]}
  ],
  "Spinach":[
    {disease:"Downy mildew",organic:["Neem oil","Potassium bicarbonate"]}
  ],
  "Cucumber":[
    {disease:"Powdery mildew",organic:["Neem oil","Milk spray"]},
    {disease:"Aphids",organic:["Garlic spray","Neem oil"]}
  ],
  "Bell Pepper":[
    {disease:"Bacterial spot",organic:["Neem oil","Copper fungicide (organic)"]}
  ],
  "Chili":[
    {disease:"Anthracnose",organic:["Neem oil","Garlic spray"]}
  ],
  "Brinjal":[
    {disease:"Fruit rot",organic:["Neem oil","Bordeaux mixture (organic)"]},
    {disease:"Aphids",organic:["Garlic spray","Neem oil"]}
  ],
  "Lettuce":[
    {disease:"Leaf spot",organic:["Neem oil","Potassium bicarbonate"]}
  ],
  "Pumpkin":[
    {disease:"Powdery mildew",organic:["Neem oil","Baking soda"]}
  ],
  "Radish":[
    {disease:"Root rot",organic:["Neem oil","Copper fungicide (organic)"]}
  ],
  "Beetroot":[
    {disease:"Cercospora leaf spot",organic:["Neem oil","Garlic spray"]}
  ],
  "Okra":[
    {disease:"Yellow vein mosaic",organic:["Neem oil","Garlic spray"]}
  ],
  "Onion":[
    {disease:"Downy mildew",organic:["Neem oil","Bordeaux mixture (organic)"]}
  ],
  "Garlic":[
    {disease:"White rot",organic:["Neem oil","Baking soda"]}
  ],
  "Ginger":[
    {disease:"Rhizome rot",organic:["Neem oil","Copper fungicide (organic)"]}
  ],
  "Turmeric":[
    {disease:"Leaf spot",organic:["Neem oil","Garlic spray"]}
  ],
  "Corn":[
    {disease:"Maize streak",organic:["Neem oil","Copper fungicide (organic)"]}
  ],
  "Wheat":[
    {disease:"Rust",organic:["Neem oil","Bordeaux mixture (organic)"]}
  ],
  "Rice":[
    {disease:"Blast",organic:["Neem oil","Copper fungicide (organic)"]}
  ],
  "Apple":[
    {disease:"Apple scab",organic:["Neem oil","Bordeaux mixture (organic)"]}
  ],
  "Mango":[
    {disease:"Powdery mildew",organic:["Neem oil","Garlic spray"]}
  ],
  "Banana":[
    {disease:"Panama disease",organic:["Neem oil","Copper fungicide (organic)"]}
  ],
  "Grapes":[
    {disease:"Downy mildew",organic:["Neem oil","Bordeaux mixture (organic)"]}
  ],
  "Orange":[
    {disease:"Citrus canker",organic:["Neem oil","Copper fungicide (organic)"]}
  ],
  "Strawberry":[
    {disease:"Gray mold",organic:["Neem oil","Baking soda"]}
  ],
  "Peas":[
    {disease:"Powdery mildew",organic:["Neem oil","Garlic spray"]}
  ],
  "Soybean":[
    {disease:"Rust",organic:["Neem oil","Copper fungicide (organic)"]}
  ],
  "Cabbage":[
    {disease:"Clubroot",organic:["Neem oil","Baking soda"]}
  ],
  "Tomato Cherry":[
    {disease:"Leaf curl",organic:["Neem oil","Garlic spray"]}
  ],
  
};

// Plant translations
const plantTranslations = {
  en: {
    "Tomato":"Tomato","Potato":"Potato","Cabbage":"Cabbage","Carrot":"Carrot",
    "Spinach":"Spinach","Cucumber":"Cucumber","Bell Pepper":"Bell Pepper",
    "Chili":"Chili","Brinjal":"Brinjal","Lettuce":"Lettuce",
    "Pumpkin":"Pumpkin","Radish":"Radish","Beetroot":"Beetroot",
    "Okra":"Okra","Onion":"Onion","Garlic":"Garlic","Ginger":"Ginger",
    "Turmeric":"Turmeric","Corn":"Corn","Wheat":"Wheat","Rice":"Rice",
    "Apple":"Apple","Mango":"Mango","Banana":"Banana","Grapes":"Grapes",
    "Orange":"Orange","Strawberry":"Strawberry","Peas":"Peas",
    "Soybean":"Soybean","Tomato Cherry":"Tomato Cherry"
  },

  mr: {
    "Tomato":"टमाटर","Potato":"आलू","Cabbage":"पत्ता गोभी","Carrot":"गाजर",
    "Spinach":"पालक","Cucumber":"खीरा","Bell Pepper":"ढोबळी मिरची",
    "Chili":"मिरची","Brinjal":"वांगी","Lettuce":"लेट्यूस",
    "Pumpkin":"भोपळा","Radish":"मूळा","Beetroot":"बीट",
    "Okra":"भेंडी","Onion":"कांदा","Garlic":"लसूण","Ginger":"आले",
    "Turmeric":"हळद","Corn":"मका","Wheat":"गहू","Rice":"तांदूळ",
    "Apple":"सफरचंद","Mango":"आंबा","Banana":"केळी","Grapes":"द्राक्षे",
    "Orange":"संत्री","Strawberry":"स्ट्रॉबेरी","Peas":"मटार",
    "Soybean":"सोयाबीन","Tomato Cherry":"चेरी टमाटर"
  },

  hi: {
    "Tomato":"टोमॅटो","Potato":"बटाटा","Cabbage":"कोबी","Carrot":"गाजर",
    "Spinach":"पालक","Cucumber":"खीरा","Bell Pepper":"शिमला मिर्च",
    "Chili":"मिर्च","Brinjal":"बैंगन","Lettuce":"सलाद पत्ता",
    "Pumpkin":"कद्दू","Radish":"मूली","Beetroot":"चुकंदर",
    "Okra":"भिंडी","Onion":"प्याज","Garlic":"लहसुन","Ginger":"अदरक",
    "Turmeric":"हल्दी","Corn":"मक्का","Wheat":"गेहूं","Rice":"चावल",
    "Apple":"सेब","Mango":"आम","Banana":"केला","Grapes":"अंगूर",
    "Orange":"संतरा","Strawberry":"स्ट्रॉबेरी","Peas":"मटर",
    "Soybean":"सोयाबीन","Tomato Cherry":"चेरी टमाटर"
  },

  bn: {
    "Tomato":"টমেটো","Potato":"আলু","Cabbage":"ক্যাবেজ","Carrot":"গাজর",
    "Spinach":"পালং","Cucumber":"শসা","Bell Pepper":"বেল পেপার",
    "Chili":"মরিচ","Brinjal":"বেগুন","Lettuce":"লেটুস",
    "Pumpkin":"কুমড়ো","Radish":"মূলা","Beetroot":"বিট",
    "Okra":"ঢেঁড়স","Onion":"পেঁয়াজ","Garlic":"রসুন","Ginger":"আদা",
    "Turmeric":"হলুদ","Corn":"ভুট্টা","Wheat":"গম","Rice":"চাল",
    "Apple":"আপেল","Mango":"আম","Banana":"কলা","Grapes":"আঙুর",
    "Orange":"কমলা","Strawberry":"স্ট্রবেরি","Peas":"মটর",
    "Soybean":"সয়াবিন","Tomato Cherry":"চেরি টমেটো"
  },

  ta: {
    "Tomato":"தக்காளி","Potato":"உருளைக்கிழங்கு","Cabbage":"முட்டைக்கோசு",
    "Carrot":"காரட்","Spinach":"கீரை","Cucumber":"வெள்ளரி",
    "Bell Pepper":"குடைமிளகாய்","Chili":"மிளகாய்","Brinjal":"கத்தரிக்காய்",
    "Lettuce":"லெட்டூஸ்","Pumpkin":"பூசணி","Radish":"முள்ளங்கி",
    "Beetroot":"பீட்ரூட்","Okra":"வெண்டை","Onion":"வெங்காயம்",
    "Garlic":"பூண்டு","Ginger":"இஞ்சி","Turmeric":"மஞ்சள்",
    "Corn":"சோளம்","Wheat":"கோதுமை","Rice":"அரிசி",
    "Apple":"ஆப்பிள்","Mango":"மாம்பழம்","Banana":"வாழைப்பழம்",
    "Grapes":"திராட்சை","Orange":"ஆரஞ்சு","Strawberry":"ஸ்ட்ராபெரி",
    "Peas":"பட்டாணி","Soybean":"சோயாபீன்","Tomato Cherry":"செர்ரி தக்காளி"
  },

  te: {
    "Tomato":"టమోటా","Potato":"ఆలుగడ్డ","Cabbage":"కోసు",
    "Carrot":"క్యారెట్","Spinach":"పాలకూర","Cucumber":"దోసకాయ",
    "Bell Pepper":"బెల్ మిర్చి","Chili":"మిరపకాయ","Brinjal":"వంకాయ",
    "Lettuce":"లెట్టూస్","Pumpkin":"గుమ్మడికాయ","Radish":"ముల్లంగి",
    "Beetroot":"బీట్‌రూట్","Okra":"బెండకాయ","Onion":"ఉల్లిపాయ",
    "Garlic":"వెల్లులి","Ginger":"అల్లం","Turmeric":"పసుపు",
    "Corn":"మొక్కజొన్న","Wheat":"గోధుమ","Rice":"అన్నం",
    "Apple":"ఆపిల్","Mango":"మామిడి","Banana":"అరటి పండు",
    "Grapes":"ద్రాక్ష","Orange":"కమలాపండు","Strawberry":"స్ట్రాబెర్రీ",
    "Peas":"బటానీలు","Soybean":"సోయాబీన్","Tomato Cherry":"చెర్రీ టమోటా"
  },

  gu: {
    "Tomato":"ટમેટા","Potato":"બટાટા","Cabbage":"કોબી",
    "Carrot":"ગાજર","Spinach":"પાલક","Cucumber":"કાકડી",
    "Bell Pepper":"શિમલા મરચું","Chili":"મરચું","Brinjal":"રીંગણ",
    "Lettuce":"લેટીસ","Pumpkin":"કોળું","Radish":"મૂલું",
    "Beetroot":"બીટ","Okra":"ભીંડા","Onion":"ડુંગળી",
    "Garlic":"લસણ","Ginger":"આદુ","Turmeric":"હળદર",
    "Corn":"મકાઈ","Wheat":"ઘઉં","Rice":"ચોખા",
    "Apple":"સફરજન","Mango":"કેરી","Banana":"કેળું",
    "Grapes":"દ્રાક્ષ","Orange":"સંતરું","Strawberry":"સ્ટ્રોબેરી",
    "Peas":"વટાણા","Soybean":"સોયાબીન","Tomato Cherry":"ચેરી ટામેટું"
  },

  pa: {
    "Tomato":"ਟਮਾਟਰ","Potato":"ਆਲੂ","Cabbage":"ਪੱਤਾ ਗੋਭੀ",
    "Carrot":"ਗਾਜਰ","Spinach":"ਪਾਲਕ","Cucumber":"ਖੀਰਾ",
    "Bell Pepper":"ਸ਼ਿਮਲਾ ਮਿਰਚ","Chili":"ਮਿਰਚ","Brinjal":"ਬੈਂਗਣ",
    "Lettuce":"ਲੈਟੂਸ","Pumpkin":"ਕੱਦੂ","Radish":"ਮੂਲੀ",
    "Beetroot":"ਚੁੱਕੰਦਰ","Okra":"ਭਿੰਡੀ","Onion":"ਪਿਆਜ਼",
    "Garlic":"ਲਸਣ","Ginger":"ਅਦਰਕ","Turmeric":"ਹਲਦੀ",
    "Corn":"ਮੱਕੀ","Wheat":"ਗੇਂਹੂँ","Rice":"ਚੌਲ",
    "Apple":"ਸੇਬ","Mango":"ਅੰਬ","Banana":"ਕੇਲਾ",
    "Grapes":"ਅੰਗੂਰ","Orange":"ਸੰਤਰਾ","Strawberry":"ਸਟ੍ਰਾਬੇਰੀ",
    "Peas":"ਮਟਰ","Soybean":"ਸੋਯਾਬੀਨ","Tomato Cherry":"ਚੈਰੀ ਟਮਾਟਰ"
  },

  kn: {
    "Tomato":"ಟೊಮೇಟೋ","Potato":"ಆಲೂಗಡ್ಡೆ","Cabbage":"ಕೋಸು",
    "Carrot":"ಕ್ಯಾರೆಟ್","Spinach":"ಸೊಪ್ಪು","Cucumber":"ಸೌತೆಕಾಯಿ",
    "Bell Pepper":"ಕ್ಯಾಪ್ಸಿಕಂ","Chili":"ಮೆಣಸಿನಕಾಯಿ","Brinjal":"ಬದನೆಕಾಯಿ",
    "Lettuce":"ಲೆಟ್ಯೂಸ್","Pumpkin":"ಕುಂಬಳಕಾಯಿ","Radish":"ಮೂಲಂಗಿ",
    "Beetroot":"ಬೀಟ್ರೂಟ್","Okra":"ಬೆಂಡೆಕಾಯಿ","Onion":"ಈರುಳ್ಳಿ",
    "Garlic":"ಬೆಳ್ಳುಳ್ಳಿ","Ginger":"ಶುಂಠಿ","Turmeric":"ಅರಿಶಿನ",
    "Corn":"ಜೋಳ","Wheat":"ಗೋಧಿ","Rice":"ಅಕ್ಕಿ",
    "Apple":"ಸೇಬು","Mango":"ಮಾವಿನಹಣ್ಣು","Banana":"ಬಾಳೆಹಣ್ಣು",
    "Grapes":"ದ್ರಾಕ್ಷಿ","Orange":"ಕಿತ್ತಳೆ","Strawberry":"ಸ್ಟ್ರಾಬೆರಿ",
    "Peas":"ಬಟಾಣಿ","Soybean":"ಸೋಯಾಬಿನ್","Tomato Cherry":"ಚೆರಿ ಟೊಮೇಟೋ"
  },

  ml: {
    "Tomato":"തക്കാളി","Potato":"ഉരുളക്കിഴങ്ങ്","Cabbage":"മുട്ടക്കോസ്",
    "Carrot":"കാരറ്റ്","Spinach":"ചീര","Cucumber":"വെള്ളരി",
    "Bell Pepper":"ക്യാപ്സിക്കം","Chili":"മുളക്","Brinjal":"വഴുതന",
    "Lettuce":"ലറ്റ്യൂസ്","Pumpkin":"മത്തങ്ങ","Radish":"മുല്ലങ്കി",
    "Beetroot":"ബീറ്റ്റൂട്ട്","Okra":"വെണ്ട","Onion":"സവാള",
    "Garlic":"വെളുത്തുള്ളി","Ginger":"ഇഞ്ചി","Turmeric":"മഞ്ഞൾ",
    "Corn":"ചോളം","Wheat":"ഗോദമ്പ്","Rice":"അരി",
    "Apple":"ആപ്പിൾ","Mango":"മാങ്ങ","Banana":"വാഴപ്പഴം",
    "Grapes":"മുന്തിരി","Orange":"ഓറഞ്ച്","Strawberry":"സ്ട്രോബെറി",
    "Peas":"പയർ","Soybean":"സോയാബീൻ","Tomato Cherry":"ചെറി തക്കാളി"
  },

  or: {
    "Tomato":"ଟମାଟର","Potato":"ଆଳୁ","Cabbage":"କୋବି",
    "Carrot":"ଗାଜର","Spinach":"ପାଳଙ୍କ","Cucumber":"ଖୀରା",
    "Bell Pepper":"ବେଲ୍ ପେପର","Chili":"ଲଙ୍କା","Brinjal":"ବାଇଗଣ",
    "Lettuce":"ଲେଟୁସ୍","Pumpkin":"କୁମୁଡ଼","Radish":"ମୂଳା",
    "Beetroot":"ବିଟ୍","Okra":"ଭେଣ୍ଡି","Onion":"ପିଆଜ",
    "Garlic":"ରସୁଣ","Ginger":"ଅଦା","Turmeric":"ହଳଦୀ",
    "Corn":"ମକା","Wheat":"ଗହୁଁ","Rice":"ଚାଉଳ",
    "Apple":"ସେବ","Mango":"ଆମ୍ବ","Banana":"କଦଳୀ",
    "Grapes":"ଦାଖ","Orange":"କମଳା","Strawberry":"ଷ୍ଟ୍ରବେରୀ",
    "Peas":"ମଟର","Soybean":"ସୋୟାବିନ୍","Tomato Cherry":"ଚେରି ଟମାଟର"
  },

  ur: {
    "Tomato":"ٹماٹر","Potato":"آلو","Cabbage":"گوبھی",
    "Carrot":"گاجر","Spinach":"پالک","Cucumber":"کھیرا",
    "Bell Pepper":"شملہ مرچ","Chili":"مرچ","Brinjal":"بینگن",
    "Lettuce":"لیٹش","Pumpkin":"کدو","Radish":"مولی",
    "Beetroot":"چقندر","Okra":"بھنڈی","Onion":"پیاز",
    "Garlic":"لہسن","Ginger":"ادرک","Turmeric":"ہلدی",
    "Corn":"مکئی","Wheat":"گندم","Rice":"چاول",
    "Apple":"سیب","Mango":"آم","Banana":"کیلا",
    "Grapes":"انگور","Orange":"سنترہ","Strawberry":"اسٹرابیری",
    "Peas":"مٹر","Soybean":"سویا","Tomato Cherry":"چیری ٹماٹر"
  }
};



// Solutions translation
const translatedSolutions = {
  en: { 
    "Neem oil":"Neem oil",
    "Baking soda":"Baking soda",
    "Garlic spray":"Garlic spray",
    "Copper fungicide (organic)":"Copper fungicide (organic)",
    "Bordeaux mixture (organic)":"Bordeaux mixture (organic)",
    "Diatomaceous earth":"Diatomaceous earth",
    "Potassium bicarbonate":"Potassium bicarbonate",
    "Milk spray":"Milk spray"
  },
  hi: { 
    "Neem oil":"नीम का तेल",
    "Baking soda":"बेकिंग सोडा",
    "Garlic spray":"लहसुन स्प्रे",
    "Copper fungicide (organic)":"तांबे का फंगीसाइड (ऑर्गेनिक)",
    "Bordeaux mixture (organic)":"बोर्डो मिश्रण (ऑर्गेनिक)",
    "Diatomaceous earth":"डायाटोमेयस अर्थ",
    "Potassium bicarbonate":"पोटेशियम बाइकार्बोनेट",
    "Milk spray":"दूध का स्प्रे"
  },
  mr: { 
    "Neem oil":"कडुनिंब तेल",
    "Baking soda":"बेकिंग सोडा",
    "Garlic spray":"लसूण स्प्रे",
    "Copper fungicide (organic)":"कॉपर फंगिसाइड (सेंद्रिय)",
    "Bordeaux mixture (organic)":"बॉर्डो मिश्रण (सेंद्रिय)",
    "Diatomaceous earth":"डायटोमेसियस अर्थ",
    "Potassium bicarbonate":"पोटॅशियम बायकार्बोनेट",
    "Milk spray":"दूध स्प्रे"
  },
  bn: { 
    "Neem oil":"নীম তেল",
    "Baking soda":"বেকিং সোডা",
    "Garlic spray":"রসুন স্প্রে",
    "Copper fungicide (organic)":"তামা ফাঙ্গিসাইড (অর্গানিক)",
    "Bordeaux mixture (organic)":"বোর্ডো মিশ্রণ (অর্গানিক)",
    "Diatomaceous earth":"ডায়াটোমেসিয়াস আর্থ",
    "Potassium bicarbonate":"পটাশিয়াম বাইকার্বনেট",
    "Milk spray":"দুধ স্প্রে"
  },
  ta: { 
    "Neem oil":"வெள்ளைவேப்பிலை எண்ணெய்",
    "Baking soda":"சோடியம் பைக்கார்போனேட்",
    "Garlic spray":"பூண்டு ஸ்ப்ரே",
    "Copper fungicide (organic)":"தாமிரக் கிருமிநாசினி (இயற்கை)",
    "Bordeaux mixture (organic)":"போர்டோ கலவை (சுற்றுச்சூழல்)",
    "Diatomaceous earth":"டயாடோமேஷியஸ் மண்",
    "Potassium bicarbonate":"பொட்டாசியம் கார்போனேட்",
    "Milk spray":"பால் ஸ்ப்ரே"
  },
  te: { 
    "Neem oil":"వేపాయిల్",
    "Baking soda":"బేకింగ్ సోడా",
    "Garlic spray":"లహసున్ స్ప్రే",
    "Copper fungicide (organic)":"కాపర్ ఫంగిసైడ్ (సేంద్రియ)",
    "Bordeaux mixture (organic)":"బోర్డో మిశ్రమం (సేంద్రియ)",
    "Diatomaceous earth":"డయాటోమేసియస్ ఎర్త్",
    "Potassium bicarbonate":"పొటాషియం బైకార్బోనేట్",
    "Milk spray":"పాలు స్ప్రే"
  },
  gu: { 
    "Neem oil":"નીમ તેલ",
    "Baking soda":"બેકિંગ સોડા",
    "Garlic spray":"લસણ સ્પ્રે",
    "Copper fungicide (organic)":"તામ્ર ફંગિસાઇડ (સેન્ડ્રિય)",
    "Bordeaux mixture (organic)":"બોર્ડો મિશ્રણ (સેન્ડ્રિય)",
    "Diatomaceous earth":"ડાયટોમેસિયસ અર્થી",
    "Potassium bicarbonate":"પોટેશિયમ બાઈકાર્બોનેટ",
    "Milk spray":"દૂધ સ્પ્રે"
  },
  pa: { 
    "Neem oil":"ਨੀਂਮ ਦਾ ਤੇਲ",
    "Baking soda":"ਬੇਕਿੰਗ ਸੋਡਾ",
    "Garlic spray":"ਲਸਣ ਸਪਰੇ",
    "Copper fungicide (organic)":"ਤਾਂਬੇ ਦਾ ਫੰਗਿਸਾਈਡ (ਆਰਗੈਨਿਕ)",
    "Bordeaux mixture (organic)":"ਬੋਰਡੋ ਮਿਸ਼ਰਣ (ਆਰਗੈਨਿਕ)",
    "Diatomaceous earth":"ਡਾਇਟੋਮੇਸ਼ਸ ਅਰਥ",
    "Potassium bicarbonate":"ਪੋਟਾਸੀਅਮ ਬਾਈਕਾਰਬੋਨੇਟ",
    "Milk spray":"ਦੂਧ ਸਪ੍ਰੇ"
  },
  kn: { 
    "Neem oil":"ಏಳುಎಣ್ಣೆ",
    "Baking soda":"ಬೇಕರಿಂಗ್ ಸೋಡಾ",
    "Garlic spray":"ಬೆಳ್ಳುಳ್ಳಿ ಸ್ಪ್ರೇ",
    "Copper fungicide (organic)":"ಕಾಪರ್ ಫಂಗಿಸೈಡ್ (ಸೇಂದ್ರಿಯ)",
    "Bordeaux mixture (organic)":"ಬೋರ್ಡೋ ಮಿಶ್ರಣ (ಸೇಂದ್ರಿಯ)",
    "Diatomaceous earth":"ಡಯಟೋಮೇಶಿಯಸ್ ಅರ್ಥ್",
    "Potassium bicarbonate":"ಪೊಟ್ಯಾಸಿಯಂ ಬೈಕಾರ್ಬೋನೇಟ್",
    "Milk spray":"ಹಾಲು ಸ್ಪ್ರೇ"
  },
  ml: { 
    "Neem oil":"വേപ്പില എണ്ണ",
    "Baking soda":"ബേക്കിംഗ് സോഡ",
    "Garlic spray":"വെളുത്തുള്ളി സ്പ്രേ",
    "Copper fungicide (organic)":"താമ്ര ഫംഗിസൈഡ് (സേന്ദ്രിയ)",
    "Bordeaux mixture (organic)":"ബോർഡോ മിശ്രണം (സേന്ദ്രിയ)",
    "Diatomaceous earth":"ഡയറ്റോമേഷ്യസ് അർത്ത്",
    "Potassium bicarbonate":"പോട്ടാസ്യം ബൈകാർബണേറ്റ്",
    "Milk spray":"പാൽ സ്പ്രേ"
  },
  or: { 
    "Neem oil":"ନିମ୍ତେଲ",
    "Baking soda":"ବେକିଂ ସୋଡା",
    "Garlic spray":"ରସୁଣ ସ୍ପ୍ରେ",
    "Copper fungicide (organic)":"ତାମ୍ବା ଫଙ୍ଗିସାଇଡ୍ (ଓର୍ଗାନିକ)",
    "Bordeaux mixture (organic)":"ବୋର୍ଡୋ ମିଶ୍ରଣ (ଓର୍ଗାନିକ)",
    "Diatomaceous earth":"ଡାୟାଟୋମେସିୟସ ଅର୍ଥ",
    "Potassium bicarbonate":"ପୋଟାସିଅମ୍ ବାଇକାର୍ବୋନେଟ୍",
    "Milk spray":"ଦୁଧ ସ୍ପ୍ରେ"
  },
  ur: { 
    "Neem oil":"نیم کا تیل",
    "Baking soda":"بیکنگ سوڈا",
    "Garlic spray":"لہسن اسپرے",
    "Copper fungicide (organic)":"کاپر فنگیسائیڈ (نامیاتی)",
    "Bordeaux mixture (organic)":"بورڈو مرکب (نامیاتی)",
    "Diatomaceous earth":"ڈایٹومیسیس ارتھ",
    "Potassium bicarbonate":"پوٹاشیم بائکاربونیٹ",
    "Milk spray":"دودھ اسپرے"
  }
};


// DOM elements
const container = document.getElementById("container");
const searchInput = document.getElementById("searchInput");
const languageSwitcher = document.getElementById("languageSwitcher");

// Helper: get matching plants based on search term in current language
function getMatchingPlants(term, lang) {
  term = term.toLowerCase();
  return Object.keys(plantDB).filter(plant => {
    const displayPlant = plantTranslations[lang][plant] || plant;
    return plant.toLowerCase().includes(term) || displayPlant.toLowerCase().includes(term);
  });
}

// Render cards
function renderCards(filter="", lang="en") {
  container.innerHTML = "";
  const matchingPlants = getMatchingPlants(filter, lang);

  matchingPlants.forEach(plant => {
    const data = plantDB[plant];
    const displayPlant = plantTranslations[lang][plant] || plant;

    const card = document.createElement('div');
    card.className = 'card';
    let html = `<h3>${displayPlant}</h3>`;
    data.forEach(d => {
      const tips = d.organic.map(sol => translatedSolutions[lang][sol] || sol).join(", ");
      html += `<p>${d.disease}: ${tips}</p>`;
    });
    card.innerHTML = html;

    card.addEventListener('click', () => {
      document.querySelectorAll('.card').forEach(c => c.classList.remove('active'));
      card.classList.add('active');
    });

    container.appendChild(card);
  });
}

// Language change event
languageSwitcher.addEventListener('change', function() {
  const lang = this.value;
  document.querySelector('header').innerText = lang === 'hi' ? "पौधे स्वास्थ्य डैशबोर्ड" :
                                               lang === 'mr' ? "वनस्पती आरोग्य डॅशबोर्ड" :
                                               "Plant Health Dashboard";
  searchInput.placeholder = lang === 'hi' ? "पौधों को खोजें..." :
                              lang === 'mr' ? "वनस्पती शोधा..." :
                              "Search plants...";
  document.getElementById('downloadBtn').innerText = lang === 'hi' ? "डाउनलोड" :
                                                      lang === 'mr' ? "डाउनलोड" :
                                                      "Download";
  renderCards(searchInput.value, lang);
});

// Search input
searchInput.addEventListener('input', e => renderCards(e.target.value, languageSwitcher.value));

// Download
document.getElementById("downloadBtn").addEventListener("click", () => {
  const lang = languageSwitcher.value;
  let text = (lang==='hi'?"पौधे स्वास्थ्य डैशबोर्ड":lang==='mr'?"वनस्पती आरोग्य डॅशबोर्ड":"Plant Health Dashboard") + "\n\n";
  Object.keys(plantDB).forEach(plant => {
    const displayPlant = plantTranslations[lang][plant] || plant;
    text += `🌱 ${displayPlant}\n`;
    plantDB[plant].forEach(d => {
      const tips = d.organic.map(sol => translatedSolutions[lang][sol] || sol).join(", ");
      text += ` - ${d.disease}: ${tips}\n`;
    });
    text += "\n";
  });
  const blob = new Blob([text], { type: "text/plain" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `Organic_Solutions_${lang}.txt`;
  link.click();
});
document.querySelector(".back-btn").addEventListener("click", function() {
    window.location.href = "dashboard.html"; // Change this to your dashboard page URL
});

// Initial render
renderCards();



