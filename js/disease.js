/********************
 * BASIC LANGUAGE
 ********************/
const translations = {
  en: {
    ui: {
      title: "Disease Severity Records",
      back: "Back",
      download: "Download",
      footer: "Made by Karishma",
      headers: ["Plant", "Disease", "Severity"]
    },
    severities: {
      low: "Low",
      medium: "Medium",
      high: "High"
    }
  }
};

/********************
 * DATA
 ********************/
const PLANTS = [
  {name:'Tomato', category:'Vegetable', disease:'Early blight', solution:'Remove infected leaves; fungicide', weather:'Warm & Humid', suggestion:'Remove infected leaves and apply neem-based fungicide; increase airflow.'},
  {name:'Potato', category:'Vegetable', disease:'Late blight', solution:'Use certified seed; remove infected plants', weather:'Cool & Wet', suggestion:'Use certified seed and avoid planting in waterlogged areas.'},
  {name:'Onion', category:'Vegetable', disease:'Downy mildew', solution:'Good drainage; fungicide', weather:'Cool & Moist', suggestion:'Improve drainage and use recommended fungicides.'},
  {name:'Garlic', category:'Vegetable', disease:'White rot', solution:'Crop rotation; remove infected bulbs', weather:'Cool & Dry', suggestion:'Rotate crops and remove infected bulbs.'},
  {name:'Carrot', category:'Vegetable', disease:'Alternaria', solution:'Seed treatment; remove debris', weather:'Cool & Moist', suggestion:'Treat seed and clear debris from beds.'},
  {name:'Cabbage', category:'Vegetable', disease:'Black rot', solution:'Resistant varieties; avoid overhead watering', weather:'Cool', suggestion:'Use resistant varieties and drip irrigation.'},
  {name:'Spinach', category:'Vegetable', disease:'Fusarium wilt', solution:'Resistant seed; rotate crops', weather:'Cool & Moist', suggestion:'Grow resistant varieties and rotate crops.'},
  {name:'Lettuce', category:'Vegetable', disease:'Bottom rot', solution:'Improve drainage; fungicide', weather:'Cool & Humid', suggestion:'Improve drainage and use fungicides when needed.'},
  {name:'Cucumber', category:'Vegetable', disease:'Powdery mildew', solution:'Remove leaves; sulfur', weather:'Warm', suggestion:'Remove infected leaves and use sulfur sprays.'},
  {name:'Pumpkin', category:'Vegetable', disease:'Anthracnose', solution:'Remove infected fruits; fungicide', weather:'Warm & Humid', suggestion:'Remove infected fruits and apply fungicides early.'},
  {name:'Apple', category:'Fruit', disease:'Apple scab', solution:'Fungicide at bloom', weather:'Temperate & Cool', suggestion:'Spray fungicide during bloom and manage fallen leaves.'},
  {name:'Mango', category:'Fruit', disease:'Anthracnose', solution:'Copper fungicide; remove infected parts', weather:'Tropical & Humid', suggestion:'Remove infected parts and apply copper sprays.'},
  {name:'Banana', category:'Fruit', disease:'Panama wilt', solution:'Use disease-free suckers', weather:'Hot & Humid', suggestion:'Plant disease-free planting material.'},
  {name:'Orange', category:'Fruit', disease:'Canker', solution:'Remove infected tissue; copper', weather:'Warm', suggestion:'Prune and apply copper formulations.'},
  {name:'Lemon', category:'Fruit', disease:'Greening', solution:'Remove infected trees', weather:'Warm', suggestion:'Remove infected trees and monitor psyllids.'},
  {name:'Grapes', category:'Fruit', disease:'Powdery mildew', solution:'Sulfur sprays', weather:'Temperate', suggestion:'Use sulfur or recommended fungicides.'},
  {name:'Strawberry', category:'Fruit', disease:'Botrytis', solution:'Improve ventilation; fungicides', weather:'Cool & Humid', suggestion:'Improve ventilation and harvest properly.'},
  {name:'Pineapple', category:'Fruit', disease:'Heart rot', solution:'Avoid waterlogging', weather:'Tropical', suggestion:'Ensure good drainage.'},
  {name:'Pear', category:'Fruit', disease:'Fire blight', solution:'Prune infected branches', weather:'Temperate', suggestion:'Prune and disinfect tools.'},
  {name:'Papaya', category:'Fruit', disease:'Ring spot', solution:'Use resistant varieties', weather:'Tropical', suggestion:'Plant resistant varieties and control vectors.'},
  {name:'Rose', category:'Flower', disease:'Black spot', solution:'Fungicide; remove leaves', weather:'Humid', suggestion:'Remove infected leaves and use neem/copper sprays.'},
  {name:'Marigold', category:'Flower', disease:'Powdery mildew', solution:'Fungicide', weather:'Warm', suggestion:'Use fungicides and improve airflow.'},
  {name:'Jasmine', category:'Flower', disease:'Leaf spot', solution:'Prune diseased parts', weather:'Warm to Mild', suggestion:'Prune and keep canopy open.'},
  {name:'Sunflower', category:'Flower', disease:'Sclerotinia', solution:'Rotate crops', weather:'Temperate', suggestion:'Rotate and avoid infected debris.'},
  {name:'Hibiscus', category:'Flower', disease:'Rust', solution:'Remove infected leaves', weather:'Warm', suggestion:'Prune and apply organic sprays.'},
  {name:'Lavender', category:'Herb', disease:'Root rot', solution:'Improve drainage', weather:'Dry & Sunny', suggestion:'Plant in well-drained soil.'},
  {name:'Basil', category:'Herb', disease:'Downy mildew', solution:'Good airflow', weather:'Warm & Humid', suggestion:'Thin plants and avoid overhead watering.'},
  {name:'Mint', category:'Herb', disease:'Rust', solution:'Remove infected parts', weather:'Moist & Mild', suggestion:'Remove infected parts and improve sanitation.'},
  {name:'Coriander', category:'Herb', disease:'Aphids', solution:'Insecticidal soap', weather:'Cool', suggestion:'Use insecticidal soap or neem.'},
  {name:'Thyme', category:'Herb', disease:'Root rot', solution:'Well-drained soil', weather:'Dry & Sunny', suggestion:'Keep soil well-drained and sparse watering.'},
  {name:'Oregano', category:'Herb', disease:'Leaf spot', solution:'Remove affected leaves', weather:'Mediterranean', suggestion:'Remove infected leaves.'},
  {name:'Chili', category:'Vegetable', disease:'Bacterial spot', solution:'Copper sprays', weather:'Warm & Humid', suggestion:'Use copper sprays and resistant varieties.'},
  {name:'Bell Pepper', category:'Vegetable', disease:'Bacterial spot', solution:'Resistant varieties', weather:'Warm', suggestion:'Use resistant varieties and clean seed.'},
  {name:'Eggplant', category:'Vegetable', disease:'Verticillium wilt', solution:'Rotate crops', weather:'Warm', suggestion:'Rotate crops and improve soil health.'},
  {name:'Beetroot', category:'Vegetable', disease:'Cercospora', solution:'Fungicides', weather:'Temperate', suggestion:'Use recommended fungicides.'},
  {name:'Radish', category:'Vegetable', disease:'Clubroot', solution:'Soil pH adjust', weather:'Cool', suggestion:'Adjust soil pH and avoid infected soils.'},
  {name:'Millet', category:'Grain', disease:'Blast', solution:'Resistant seed', weather:'Warm & Dry', suggestion:'Use resistant varieties.'},
  {name:'Kale', category:'Vegetable', disease:'Downy mildew', solution:'Spacing & fungicide', weather:'Cool', suggestion:'Space plants and use fungicide.'},
  {name:'Broccoli', category:'Vegetable', disease:'Black rot', solution:'Clean seed', weather:'Cool', suggestion:'Use clean seed and avoid overhead watering.'},
  {name:'Cauliflower', category:'Vegetable', disease:'Soft rot', solution:'Avoid bruising', weather:'Cool & Moist', suggestion:'Handle carefully and avoid injury.'},
  {name:'Peas', category:'Vegetable', disease:'Powdery mildew', solution:'Resistant varieties', weather:'Cool', suggestion:'Grow resistant varieties.'},
  {name:'Sweet Potato', category:'Vegetable', disease:'Black rot', solution:'Healthy slips', weather:'Warm', suggestion:'Use healthy slips and good sanitation.'},
  {name:'Fig', category:'Fruit', disease:'Fig rust', solution:'Remove fallen leaves', weather:'Warm & Dry', suggestion:'Clear fallen leaves and prune.'},
  {name:'Pomegranate', category:'Fruit', disease:'Fruit rot', solution:'Harvest dry', weather:'Hot & Dry', suggestion:'Harvest during dry weather.'},
  {name:'Guava', category:'Fruit', disease:'Wilt', solution:'Good drainage', weather:'Tropical', suggestion:'Improve drainage and soil health.'},
  {name:'Lychee', category:'Fruit', disease:'Anthracnose', solution:'Copper sprays', weather:'Tropical & Humid', suggestion:'Use copper sprays and prune.'},
  {name:'Chrysanthemum', category:'Flower', disease:'Leaf spot', solution:'Remove infected leaves', weather:'Cool', suggestion:'Remove infected leaves and increase airflow.'},
  {name:'Orchid', category:'Flower', disease:'Root rot', solution:'Reduce watering', weather:'Humid Indirect', suggestion:'Water less and keep roots aerated.'},
  {name:'Peony', category:'Flower', disease:'Botrytis', solution:'Remove diseased parts', weather:'Cool', suggestion:'Remove diseased parts and improve ventilation.'},
  {name:'Tulip', category:'Flower', disease:'Tulip fire', solution:'Remove bulbs', weather:'Cold Winters', suggestion:'Remove infected bulbs and avoid replanting.'},
  {name:'Dahlia', category:'Flower', disease:'Powdery mildew', solution:'Good airflow', weather:'Warm', suggestion:'Improve airflow and remove affected leaves.'},
  {name:'Sage', category:'Herb', disease:'Root rot', solution:'Well-drained', weather:'Dry', suggestion:'Ensure good drainage.'},
  {name:'Rosemary', category:'Herb', disease:'Root rot', solution:'Improve drainage', weather:'Dry', suggestion:'Plant in well-drained soil.'},
  {name:'Bay Leaf', category:'Herb', disease:'Leaf spot', solution:'Remove leaves', weather:'Mild', suggestion:'Remove infected leaves.'},
  {name:'Aloe Vera', category:'Herb', disease:'Soft rot', solution:'Reduce watering', weather:'Dry & Warm', suggestion:'Reduce watering and use porous soil.'},
  {name:'Tulsi', category:'Herb', disease:'Leaf blight', solution:'Remove leaves', weather:'Warm', suggestion:'Remove affected leaves and use neem spray.'},
  {name:'Cinnamon', category:'Spice', disease:'Dieback', solution:'Prune', weather:'Tropical', suggestion:'Prune affected branches.'},
  {name:'Cardamom', category:'Spice', disease:'Rhizome rot', solution:'Healthy material', weather:'Humid & Shaded', suggestion:'Use healthy planting material.'},
  {name:'Ginger', category:'Spice', disease:'Soft rot', solution:'Well-drained', weather:'Warm & Humid', suggestion:'Use well-drained soil and healthy seed.'},
  {name:'Turmeric', category:'Spice', disease:'Leaf spot', solution:'Seed treatment', weather:'Warm & Moist', suggestion:'Treat seed and improve sanitation.'},
  {name:'Avocado', category:'Fruit', disease:'Root rot', solution:'Tolerant rootstock', weather:'Mild', suggestion:'Use tolerant rootstocks and improve drainage.'},
  {name:'Apricot', category:'Fruit', disease:'Brown rot', solution:'Prune & fungicide', weather:'Temperate', suggestion:'Prune and apply fungicide at bloom.'},
  {name:'Plum', category:'Fruit', disease:'Black knot', solution:'Prune knots', weather:'Temperate', suggestion:'Prune and remove knots.'},
  {name:'Pearl Millet', category:'Grain', disease:'Downy mildew', solution:'Resistant varieties', weather:'Hot & Dry', suggestion:'Use resistant varieties.'},
  {name:'Persimmon', category:'Fruit', disease:'Leaf spot', solution:'Remove leaves', weather:'Temperate', suggestion:'Remove infected leaves.'},
  {name:'Coconut', category:'Fruit', disease:'Bud rot', solution:'Improve drainage', weather:'Tropical', suggestion:'Improve drainage and avoid waterlogging.'},
  {name:'Dates', category:'Fruit', disease:'Fruit rot', solution:'Harvest dry', weather:'Hot & Arid', suggestion:'Harvest in dry conditions.'},
  {name:'Almond', category:'Nut', disease:'Brown rot', solution:'Sanitation', weather:'Mediterranean', suggestion:'Sanitize and remove infected fruit.'},
  {name:'Cashew', category:'Nut', disease:'Dieback', solution:'Remove parts', weather:'Tropical', suggestion:'Prune and remove infected parts.'},
  {name:'Mustard Greens', category:'Vegetable', disease:'White rust', solution:'Resistant varieties', weather:'Cool', suggestion:'Use resistant varieties.'},
  {name:'Fenugreek', category:'Herb', disease:'Powdery mildew', solution:'Airflow', weather:'Warm', suggestion:'Improve airflow and spacing.'},
  {name:'Zucchini', category:'Vegetable', disease:'Powdery mildew', solution:'Remove leaves', weather:'Warm', suggestion:'Remove affected leaves and increase sunlight.'},
  {name:'Squash', category:'Vegetable', disease:'Downy mildew', solution:'Resistant varieties', weather:'Warm & Humid', suggestion:'Use resistant varieties.'},
  {name:'Melon', category:'Fruit', disease:'Anthracnose', solution:'Sanitation', weather:'Warm', suggestion:'Sanitize and use crop rotation.'},
  {name:'Watermelon', category:'Fruit', disease:'Fusarium wilt', solution:'Resistant varieties', weather:'Warm', suggestion:'Use resistant varieties.'},
  {name:'Gooseberry', category:'Fruit', disease:'Powdery mildew', solution:'Sulfur sprays', weather:'Cool', suggestion:'Use sulfur sprays.'},
  {name:'Blackberry', category:'Fruit', disease:'Orange rust', solution:'Remove canes', weather:'Temperate', suggestion:'Remove infected canes.'},
  {name:'Raspberry', category:'Fruit', disease:'Verticillium wilt', solution:'Rotate crops', weather:'Cool', suggestion:'Rotate and avoid infected soils.'},
  {name:'Blueberry', category:'Fruit', disease:'Root rot', solution:'Acidic soil', weather:'Cool & Acidic', suggestion:'Maintain acidic soil and drainage.'},
  {name:'Okra', category:'Vegetable', disease:'Leaf spot', solution:'Remove leaves', weather:'Warm', suggestion:'Remove infected leaves and improve sanitation.'},
  {name:'Moringa', category:'Tree', disease:'Leaf spot', solution:'Sanitation', weather:'Tropical', suggestion:'Sanitation and pruning.'},
  {name:'Neem', category:'Tree', disease:'Stem-borer', solution:'Prune & treat', weather:'Dry & Hot', suggestion:'Prune and treat pests.'},
  {name:'Chamomile', category:'Herb', disease:'Damping off', solution:'Sterile seedbeds', weather:'Cool', suggestion:'Use sterile seedbeds and avoid overwatering.'},
  {name:'Fennel', category:'Herb', disease:'Rust', solution:'Remove parts', weather:'Mild', suggestion:'Remove infected parts and improve airflow.'},
  {name:'Dill', category:'Herb', disease:'Downy mildew', solution:'Airflow', weather:'Cool', suggestion:'Improve airflow and avoid wet foliage.'},
  {name:'Saffron', category:'Spice', disease:'Corm rot', solution:'Well-drained soils', weather:'Hot & Dry', suggestion:'Ensure well-drained soils.'},
  {name:'Passionfruit', category:'Fruit', disease:'Brown spot', solution:'Fungicide', weather:'Tropical', suggestion:'Apply fungicide when needed.'},
  {name:'Jackfruit', category:'Fruit', disease:'Stem rot', solution:'Good drainage', weather:'Tropical', suggestion:'Improve drainage and remove infected parts.'},
  {name:'Amla', category:'Medicinal', disease:'Fruit rot', solution:'Remove affected fruit', weather:'Tropical', suggestion:'Remove affected fruit and improve sanitation.'},
  {name:'Ashwagandha', category:'Medicinal', disease:'Root rot', solution:'Well-drained soil', weather:'Warm & Dry', suggestion:'Improve drainage and avoid waterlogging.'},
  {name:'Giloy', category:'Medicinal', disease:'Leaf spot', solution:'Prune infected leaves', weather:'Humid & Tropical', suggestion:'Prune and remove infected leaves.'},
  {name:'Shankhpushpi', category:'Medicinal', disease:'Leaf spot', solution:'Air circulation', weather:'Warm', suggestion:'Improve air circulation.'},
  {name:'Brahmi', category:'Medicinal', disease:'Algal growth', solution:'Avoid overwatering', weather:'Humid', suggestion:'Avoid overwatering and keep soil aerated.'},
  {name:'Lemon Grass', category:'Medicinal', disease:'Leaf blight', solution:'Trim leaves', weather:'Warm', suggestion:'Trim and remove affected leaves.'},
  {name:'Curry Leaves', category:'Herb', disease:'Leaf spot', solution:'Neem spray', weather:'Warm & Humid', suggestion:'Spray neem and remove infected parts.'},
  {name:'Stevia', category:'Medicinal', disease:'Powdery mildew', solution:'Avoid moisture', weather:'Warm', suggestion:'Avoid excess moisture and improve airflow.'},
  {name:'Arjun Tree', category:'Medicinal Tree', disease:'Bark rot', solution:'Prune branches', weather:'Tropical', suggestion:'Prune and remove infected parts.'},
  {name:'Bhringraj', category:'Medicinal', disease:'Leaf spot', solution:'Neem spray', weather:'Warm', suggestion:'Spray neem and remove infected leaves.'},
  {name:'Henna', category:'Medicinal Shrub', disease:'Leaf blight', solution:'Trim and apply fungicide', weather:'Hot & Dry', suggestion:'Trim and apply recommended fungicide.'},
  {name:'Rubber Plant', category:'Ornamental', disease:'Root rot', solution:'Reduce watering', weather:'Warm', suggestion:'Reduce watering and repot with fresh medium.'},
  {name:'Areca Palm', category:'Indoor Plant', disease:'Leaf tip burn', solution:'Filtered light', weather:'Warm', suggestion:'Provide filtered light and balanced watering.'},
  {name:'Snake Plant', category:'Indoor', disease:'Overwatering rot', solution:'Reduce watering', weather:'Warm', suggestion:'Let soil dry thoroughly between waterings.'},
  {name:'Money Plant', category:'Indoor', disease:'Leaf yellowing', solution:'Avoid direct sunlight', weather:'Humid', suggestion:'Provide indirect light and avoid overwatering.'},
  {name:'Peace Lily', category:'Indoor', disease:'Leaf spot', solution:'Prune damaged leaves', weather:'Humid', suggestion:'Prune and improve humidity control.'},
  {name:'Bamboo', category:'Indoor/Outdoor', disease:'Fungal infection', solution:'Keep soil dry', weather:'Humid', suggestion:'Avoid overwatering and ensure drainage.'},
  {name:'Jade Plant', category:'Succulent', disease:'Root rot', solution:'Good drainage', weather:'Warm & Dry', suggestion:'Use sandy soil and infrequent watering.'},
  {name:'Cactus', category:'Succulent', disease:'Soft rot', solution:'Avoid overwatering', weather:'Hot & Dry', suggestion:'Water sparingly and ensure drainage.'},
  {name:'Croton', category:'Ornamental', disease:'Leaf drop', solution:'Maintain humidity', weather:'Warm', suggestion:'Maintain stable humidity and avoid drafts.'},
  {name:'Spider Plant', category:'Indoor', disease:'Leaf tip burn', solution:'Avoid fluoride water', weather:'Mild', suggestion:'Use filtered water.'},
  {name:'Pothos', category:'Indoor', disease:'Root rot', solution:'Avoid soggy soil', weather:'Humid', suggestion:'Allow soil to dry between waterings.'},
  {name:'Begonia', category:'Flower', disease:'Powdery mildew', solution:'Improve ventilation', weather:'Humid', suggestion:'Improve ventilation and avoid wet foliage.'},
  {name:'Bougainvillea', category:'Flower', disease:'Leaf spot', solution:'Reduce watering', weather:'Hot & Dry', suggestion:'Reduce watering and give full sun.'},
  {name:'Ixora', category:'Flower', disease:'Leaf spot', solution:'Prune infected leaves', weather:'Warm', suggestion:'Prune and remove infected leaves.'},
  {name:'Fern', category:'Indoor', disease:'Frond yellowing', solution:'Increase humidity', weather:'Humid', suggestion:'Increase humidity and trim dead fronds.'},
  {name:'Anthurium', category:'Indoor', disease:'Root rot', solution:'Well-drained soil', weather:'Warm & Humid', suggestion:'Repot and reduce watering.'},
  {name:'Peepal Tree', category:'Tree', disease:'Leaf blight', solution:'Prune affected parts', weather:'Tropical', suggestion:'Prune and remove affected parts.'},
  {name:'Banyan Tree', category:'Tree', disease:'Root rot', solution:'Avoid waterlogging', weather:'Tropical', suggestion:'Improve drainage.'},
  {name:'Sandalwood', category:'Tree', disease:'Spike disease', solution:'Remove infected plants', weather:'Tropical & Dry', suggestion:'Remove infected plants and monitor closely.'},
  {name:'Eucalyptus', category:'Tree', disease:'Leaf blight', solution:'Fungicide spray', weather:'Warm & Dry', suggestion:'Apply fungicide and remove infected foliage.'},
  {name:'Teak', category:'Tree', disease:'Heart rot', solution:'Proper pruning', weather:'Tropical', suggestion:'Prune and manage tree health.'},
  {name:'Clove', category:'Spice', disease:'Dieback', solution:'Prune affected branches', weather:'Humid', suggestion:'Prune and maintain orchard hygiene.'},
  {name:'Nutmeg', category:'Spice', disease:'Fruit rot', solution:'Harvest dry', weather:'Tropical', suggestion:'Harvest during dry conditions.'},
  {name:'Betel Leaf', category:'Medicinal', disease:'Leaf rot', solution:'Good ventilation', weather:'Humid & Warm', suggestion:'Improve ventilation and avoid waterlogging.'},
  {name: 'Pea', category: 'Vegetable', disease: 'Powdery mildew', solution: 'Sulfur spray', weather: 'Cool', suggestion:'Use sulfur spray and rotate crops.'},
  {name: 'Chili', category: 'Vegetable', disease: 'Leaf curl virus', solution: 'Use resistant varieties', weather: 'Warm', suggestion:'Plant resistant varieties.'},
  {name: 'Coconut', category: 'Fruit', disease: 'Bud rot', solution: 'Remove affected parts', weather: 'Tropical', suggestion:'Remove affected parts and improve drainage.'},
  {name: 'Papaya', category: 'Fruit', disease: 'Papaya mosaic virus', solution: 'Control aphids', weather: 'Warm', suggestion:'Control aphids and remove infected plants.'},
  {name: 'Sunflower', category: 'Flower', disease: 'Downy mildew', solution: 'Seed treatment', weather: 'Sunny', suggestion:'Treat seed and avoid crowded planting.'},
  {name: 'Marigold', category: 'Flower', disease: 'Botrytis blight', solution: 'Avoid overwatering', weather: 'Mild', suggestion:'Avoid overwatering and remove debris.'},
  {name: 'Coriander', category: 'Herb', disease: 'Stem rot', solution: 'Avoid excess moisture', weather: 'Cool', suggestion:'Avoid waterlogged conditions.'},
  {name: 'Turmeric', category: 'Spice', disease: 'Leaf blotch', solution: 'Use fungicide', weather: 'Humid', suggestion:'Apply recommended fungicide.'},
  {name: 'Ginger', category: 'Spice', disease: 'Soft rot', solution: 'Use well-drained soil', weather: 'Warm', suggestion:'Ensure well-drained planting medium.'},
  {name: 'Moringa', category: 'Tree', disease: 'Root rot', solution: 'Water control', weather: 'Dry', suggestion:'Control irrigation and improve drainage.'},
  {name: 'Peach', category: 'Fruit', disease: 'Leaf curl', solution: 'Copper spray', weather: 'Mild', suggestion:'Spray copper during dormancy.'},
  {name: 'Apple', category: 'Fruit', disease: 'Scab', solution: 'Fungicide treatment', weather: 'Cool', suggestion:'Spray timely fungicides and remove fallen leaves.'},
  {name: 'Rice', category: 'Grain', disease: 'Blast', solution: 'Resistant variety', weather: 'Humid', suggestion:'Use resistant varieties and practice good water management.'},
  {name: 'Wheat', category: 'Grain', disease: 'Rust', solution: 'Use fungicide', weather: 'Cool', suggestion:'Apply recommended fungicides.'},
  {name: 'Cotton', category: 'Fiber plant', disease: 'Wilt', solution: 'Soil sterilization', weather: 'Hot', suggestion:'Practice soil management and use healthy seed.'}
];
/********************
 * INIT
 ********************/
const langSelect = document.getElementById('lang');
const defaultLang = 'en';

/********************
 * TABLE GENERATE
 ********************/
function setLanguage(langKey) {
  const lang = translations[langKey];

  document.getElementById('title').innerText = lang.ui.title;
  document.getElementById('footer').innerText = lang.ui.footer;

  document.getElementById('th-plant').innerText = lang.ui.headers[0];
  document.getElementById('th-disease').innerText = lang.ui.headers[1];
  document.getElementById('th-severity').innerText = lang.ui.headers[2];

  const tbody = document.getElementById('tableBody');
  tbody.innerHTML = "";

  PLANTS.forEach((p, i) => {
    const sev = ['low','medium','high'][i % 3];

    const row = `
      <tr>
        <td>${p.name}</td>
        <td>${p.disease}</td>
        <td><span class="severity ${sev}">
          ${lang.severities[sev]}
        </span></td>
      </tr>
    `;
    tbody.innerHTML += row;
  });
}

/********************
 * CSV DOWNLOAD
 ********************/
function downloadCSV() {
  let csv = "Plant,Disease,Severity\n";

  PLANTS.forEach((p, i) => {
    const sev = ['low','medium','high'][i % 3];
    csv += `${p.name},${p.disease},${sev}\n`;
  });

  const blob = new Blob([csv], { type: "text/csv" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "plants.csv";
  link.click();
}

/********************
 * NAVIGATION
 ********************/
function goBack() {
  window.location.href = "dashboard.html";
}

/********************
 * LOAD
 ********************/
setLanguage(defaultLang);