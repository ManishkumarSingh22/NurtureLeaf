// Plant info database (you can expand)
const plantData = {
  "Monstera": `Monstera Deliciosa (Swiss Cheese Plant)

Description:
A tropical indoor plant with large, split leaves that add a lush, modern touch to any space.

Light:
Bright, indirect sunlight. Avoid harsh direct rays.

Water:
Water once a week when top soil feels dry. Don’t overwater.

Temperature & Humidity:
Prefers 18–30°C and high humidity. Mist leaves occasionally.

Soil:
Well-draining mix with peat and perlite.

Fertilizer:
Feed monthly in spring and summer.

Common Problems:
Yellow leaves = too much water; Brown tips = low humidity.

Benefits:
Purifies air and enhances home décor.

Care Tip:
Wipe leaves often and support with a moss pole.`,
  "Pothos": `🌿 Pothos (Epipremnum aureum)

Description:
A fast-growing vine with heart-shaped leaves, known for bringing good luck and fresh air.

Light:
Bright, indirect sunlight. Tolerates low light too.

Water:
Water once a week or when soil feels dry. Avoid overwatering.

Temperature & Humidity:
Thrives in 20–35°C and medium humidity.

Soil:
Well-draining potting mix with compost.

Fertilizer:
Feed every 4–6 weeks during the growing season.

Common Problems:
Yellow leaves = overwatering; pale leaves = low light.

Benefits:
Purifies air and adds positivity to space.

Care Tip:
Trim regularly to keep it bushy and healthy.`,
  "Jade Plant": `🌿 Jade Plant (Crassula ovata)

Description:
A popular succulent with thick, glossy green leaves symbolizing luck and prosperity.

Light:
Needs bright, indirect sunlight; can tolerate some direct sun.

Water:
Water every 2–3 weeks. Let soil dry completely between waterings.

Temperature & Humidity:
Prefers 18–30°C and low to moderate humidity.

Soil:
Well-draining cactus or succulent mix.

Fertilizer:
Feed monthly in spring and summer with succulent fertilizer.

Common Problems:
Soft or wrinkled leaves = over or under watering.

Benefits:
Brings positive energy and purifies air.

Care Tip:
Avoid overwatering; ensure pot has good drainage.`,
  "Prayer Plant": `🌿 Prayer Plant (Maranta leuconeura)

Description:
A colorful indoor plant with patterned leaves that fold up at night like praying hands.

Light:
Bright, indirect sunlight. Avoid direct sun.

Water:
Keep soil slightly moist; water 1–2 times a week.

Temperature & Humidity:
Prefers 18–28°C and high humidity. Mist leaves often.

Soil:
Well-draining, rich potting mix.

Fertilizer:
Feed every 2–4 weeks in spring and summer.

Common Problems:
Brown leaf tips = dry air; yellow leaves = overwatering.

Benefits:
Beautiful foliage that adds calmness and color to homes.

Care Tip:
Clean leaves gently and keep away from cold drafts.`,
"Spider Plant": `Spider Plant (Chlorophytum comosum)

Description:
An easy-to-grow indoor plant with long, green-and-white striped leaves and baby offshoots.

Light:
Bright, indirect sunlight. Tolerates low light too.

Water:
Water once a week; let soil dry slightly between waterings.

Temperature & Humidity:
Thrives in 18–30°C with moderate humidity.

Soil:
Well-draining potting mix.

Fertilizer:
Feed every 2–4 weeks during spring and summer.

Common Problems:
Brown tips = fluoride in water or low humidity.

Benefits:
Excellent air purifier and easy to care for.

Care Tip:
Trim brown tips and repot yearly for fresh growth.`,
"Areca Palm" : `🌿 Areca Palm (Dypsis lutescens)

Description:
A graceful indoor palm with feathery green fronds that add a tropical touch to any space.

Light:
Bright, indirect sunlight. Avoid harsh direct rays.

Water:
Water 1–2 times a week; keep soil slightly moist, not soggy.

Temperature & Humidity:
Prefers 20–30°C and high humidity. Mist leaves regularly.

Soil:
Rich, well-draining potting mix.

Fertilizer:
Feed monthly during spring and summer with balanced fertilizer.

Common Problems:
Brown tips = dry air or underwatering.

Benefits:
Excellent air purifier and natural humidifier.

Care Tip:
Wipe leaves often and avoid overwatering.`,
"Rubber Plant" : `🌿 Rubber Plant (Ficus elastica)

Description:
A bold indoor plant with large, glossy leaves that give a modern, elegant look to any room.

Light:
Bright, indirect sunlight. Can handle some direct morning sun.

Water:
Water once a week; let top soil dry before watering again.

Temperature & Humidity:
Thrives in 20–30°C with moderate humidity.

Soil:
Well-draining potting mix with peat and perlite.

Fertilizer:
Feed every 4 weeks in spring and summer.

Common Problems:
Yellow leaves = overwatering; drooping = low light.

Benefits:
Purifies indoor air and adds rich greenery.

Care Tip:
Wipe leaves regularly to keep them shiny and dust-free.`,
"Boston Fern":`🌿 Boston Fern (Nephrolepis exaltata)

Description:
A lush fern with arching green fronds that adds a fresh, elegant touch indoors.

Light:
Bright, indirect light. Avoid direct sunlight.

Water:
Keep soil moist but not soggy. Water 2–3 times a week.

Temperature & Humidity:
Prefers 18–26°C and high humidity. Mist often.

Soil:
Rich, well-draining potting mix.

Fertilizer:
Feed every 4–6 weeks in growing season.

Common Problems:
Brown leaves = dry air or underwatering.

Benefits:
Excellent natural air purifier and humidity booster.

Care Tip:
Trim dry fronds and keep away from AC or heaters.`,
"Croton":`🌿 Croton Plant (Codiaeum variegatum)

Description:
A vibrant plant with bold, multicolored leaves that brighten any indoor or outdoor space.

Light:
Needs bright, indirect sunlight to maintain leaf color.

Water:
Water once or twice a week; keep soil slightly moist.

Temperature & Humidity:
Prefers 20–30°C and moderate to high humidity.

Soil:
Well-draining, rich potting mix.

Fertilizer:
Feed every 3–4 weeks in spring and summer.

Common Problems:
Leaf drop = sudden temperature change or low humidity.

Benefits:
Adds color and freshness to any décor.

Care Tip:
Wipe leaves regularly and avoid moving the plant too often.`,
"Oyster Plant":`🌿 Oyster Plant (Tradescantia spathacea)

Description:
A compact plant with striking green leaves on top and purple undersides, adding color and texture to any space.

Light:
Bright, indirect sunlight. Can tolerate partial shade.

Water:
Water once a week; let soil dry slightly between waterings.

Temperature & Humidity:
Thrives in 20–30°C and moderate humidity.

Soil:
Well-draining potting mix.

Fertilizer:
Feed every 4–6 weeks during spring and summer.

Common Problems:
Yellow leaves = overwatering; dull color = low light.

Benefits:
Low-maintenance and visually attractive foliage.

Care Tip:
Trim old leaves regularly to keep it looking fresh.`,
"Cactus":`🌵 Cactus (Cactaceae)

Description:
A hardy, low-maintenance succulent that stores water in its thick stems and thrives in dry conditions.

Light:
Needs plenty of bright, direct sunlight.

Water:
Water every 2–3 weeks; let soil dry completely before watering again.

Temperature & Humidity:
Prefers 18–35°C and low humidity.

Soil:
Sandy, well-draining cactus mix.

Fertilizer:
Feed once a month in spring and summer.

Common Problems:
Soft stems = overwatering; pale color = lack of sunlight.

Benefits:
Improves air quality and adds a modern, minimal look.

Care Tip:
Rotate occasionally for even growth and avoid overwatering.`,

  "Aloe Vera": `🌿 Aloe Vera (Aloe barbadensis miller)

Description:
A succulent plant with thick, fleshy leaves filled with soothing, medicinal gel.

Light:
Needs 6–8 hours of bright, indirect sunlight.

Water:
Water every 2–3 weeks; let soil dry completely between waterings.

Temperature & Humidity:
Prefers 18–30°C and dry conditions.

Soil:
Well-draining sandy or cactus mix.

Fertilizer:
Feed lightly twice a year during growing season.

Common Problems:
Soft leaves = overwatering; brown tips = too much sun.

Benefits:
Heals burns, improves skin, and purifies air.

Care Tip:
Water at the base — avoid wetting leaves.`,
  "Snake Plant": "Snake Plant purifies air. Thrives in low light, requires little water, very hardy.",
  "Tulsi": `🌿 Tulsi (Holy Basil - Ocimum tenuiflorum)

Description:
A sacred and aromatic plant known for its healing, spiritual, and air-purifying properties.

Light:
Needs 4–6 hours of direct sunlight daily.

Water:
Water every 1–2 days in summer; less in winter. Keep soil slightly moist.

Temperature & Humidity:
Thrives in 20–35°C with moderate humidity.

Soil:
Loamy, well-draining soil with organic compost.

Fertilizer:
Use organic compost once a month.

Common Problems:
Fungal infection if overwatered or waterlogged.

Benefits:
Boosts immunity, purifies air, and holds religious value.

Care Tip:
Pinch flower buds regularly to promote more leaf growth.`,
"Dragon Plant":`🌿 Dragon Plant (Dracaena marginata)

Description:
A stylish indoor plant with long, slender green leaves edged in red, perfect for homes and offices.

Light:
Bright, indirect sunlight; tolerates low light too.

Water:
Water once a week; let top soil dry between waterings.

Temperature & Humidity:
Thrives in 18–30°C with moderate humidity.

Soil:
Well-draining potting mix with peat and perlite.

Fertilizer:
Feed every 4–6 weeks in spring and summer.

Common Problems:
Brown leaf tips = fluoride in water or dry air.

Benefits:
Purifies air and adds an elegant, modern look.

Care Tip:
Wipe leaves and avoid overwatering.`,
"Bamboo Tree":`🎋 Bamboo Plant (Dracaena sanderiana / Lucky Bamboo)

Description:
A popular indoor plant symbolizing luck, peace, and prosperity. Known for its tall, green stalks and easy care.

Light:
Bright, indirect sunlight. Avoid direct sun.

Water:
If grown in water, change water every 7–10 days.
If in soil, water once a week to keep it slightly moist.

Temperature & Humidity:
Prefers 18–30°C and moderate humidity.

Soil:
Rich, well-draining potting mix (if planted in soil).

Fertilizer:
Feed monthly with mild liquid fertilizer.

Common Problems:
Yellow leaves = dirty water or too much fertilizer.

Benefits:
Brings positivity, purifies air, and enhances home décor.

Care Tip:
Use clean, filtered water and keep away from harsh sunlight.`,
"Shami Plant" : `🌿 Shami Plant (Prosopis cineraria)

Description:
A sacred and hardy plant known for its spiritual importance and ability to thrive in dry conditions.

Light:
Needs full sunlight for healthy growth.

Water:
Water once a week; allow soil to dry completely before watering again.

Temperature & Humidity:
Prefers warm climates, 25–40°C, and low humidity.

Soil:
Sandy or loamy, well-draining soil.

Fertilizer:
Feed every 2 months with organic compost.

Common Problems:
Overwatering can cause root rot.

Benefits:
Brings positive energy, improves air quality, and is used in traditional rituals.

Care Tip:
Place in sunny outdoor area and avoid excess watering.`,
"Rose":`🌹 Rose Plant (Rosa spp.)

Description:
A classic flowering plant known for its beautiful blooms and pleasant fragrance, symbolizing love and beauty.

Light:
Needs at least 5–6 hours of direct sunlight daily.

Water:
Water 2–3 times a week; keep soil moist but not soggy.

Temperature & Humidity:
Thrives in 20–30°C with moderate humidity.

Soil:
Rich, well-draining soil with organic compost.

Fertilizer:
Feed every 2–4 weeks with a balanced flower fertilizer.

Common Problems:
Aphids or black spots due to poor air circulation.

Benefits:
Adds beauty, fragrance, and positivity to the surroundings.

Care Tip:
Prune regularly to encourage new blooms and healthy growth.`,
"Jasmine":`🌼 Jasmine Plant (Jasminum spp.)

Description:
A fragrant flowering plant known for its white blooms and soothing aroma, often used in perfumes and rituals.

Light:
Needs 4–6 hours of direct sunlight daily.

Water:
Water 2–3 times a week; keep soil evenly moist.

Temperature & Humidity:
Prefers 20–32°C and moderate humidity.

Soil:
Well-draining, fertile soil with compost.

Fertilizer:
Feed every 3–4 weeks during growing season.

Common Problems:
Yellow leaves = overwatering or poor drainage.

Benefits:
Relieves stress, adds fragrance, and purifies air.

Care Tip:
Prune after flowering to maintain shape and promote new growth.`,
"Hibiscus":`🌺 Hibiscus (Hibiscus rosa-sinensis)

Description:
A tropical flowering plant with large, bright blooms that add vibrant color and beauty to any garden or balcony.

Light:
Needs 5–6 hours of direct sunlight daily.

Water:
Water 3–4 times a week; keep soil moist but not waterlogged.

Temperature & Humidity:
Thrives in 20–35°C with moderate to high humidity.

Soil:
Rich, well-draining soil with organic compost.

Fertilizer:
Feed every 2 weeks during blooming season.

Common Problems:
Yellow leaves = overwatering; no blooms = lack of sunlight.

Benefits:
Attracts pollinators and has medicinal and cosmetic uses.

Care Tip:
Prune regularly to encourage more flowers and healthy growth.`,
"Marigold":`🌼 Marigold (Tagetes spp.)

Description:
A cheerful flowering plant with golden-orange blooms, known for its beauty and pest-repelling properties.

Light:
Needs full sunlight for 5–6 hours daily.

Water:
Water 2–3 times a week; keep soil slightly moist.

Temperature & Humidity:
Grows well in 20–35°C and moderate humidity.

Soil:
Well-draining, fertile soil with compost.

Fertilizer:
Feed every 3–4 weeks during flowering season.

Common Problems:
Fungal issues if overwatered or overcrowded.

Benefits:
Repels insects, adds color, and is used in festivals and rituals.

Care Tip:
Remove dried flowers regularly to promote new blooms.`
};

// Search Function
const searchInput = document.getElementById("searchInput");
const clearSearch = document.getElementById("clearSearch");

if (searchInput && clearSearch) {
  searchInput.addEventListener("input", function () {
    clearSearch.style.display = searchInput.value ? "inline" : "none";
    const query = searchInput.value.toLowerCase();
    document.querySelectorAll(".plant-card").forEach(card => {
      const name = card.dataset.name.toLowerCase();
      card.style.display = name.includes(query) ? "block" : "none";
    });
  });

  clearSearch.addEventListener("click", function () {
    searchInput.value = "";
    clearSearch.style.display = "none";
    // Trigger input event to reset the gallery
    searchInput.dispatchEvent(new Event("input"));
  });
}

// Modal Functions
function openModal(name) {
  const plantNameElem = document.getElementById("plantName");
  const plantInfoElem = document.getElementById("plantInfo");
  const plantModalElem = document.getElementById("plantModal");
  if (plantNameElem && plantInfoElem && plantModalElem) {
    plantNameElem.innerText = name;
    plantInfoElem.innerText = plantData[name] || "Information is coming soon!";
    plantModalElem.style.display = "flex";
  }
}

function closeModal() {
  const plantModalElem = document.getElementById("plantModal");
  if (plantModalElem) {
    plantModalElem.style.display = "none";
  }
}

// Add click event to each plant
document.querySelectorAll(".plant-card").forEach(card => {
  card.addEventListener("click", () => {
    openModal(card.dataset.name);
  });
});

// Chatbot
function toggleChat() {
  const chatbotPanel = document.getElementById("chatbotPanel");
  if (chatbotPanel) {
    chatbotPanel.classList.toggle("open");
    // Make sure your CSS handles .chatbot-panel.open { display: flex; } or similar
  }
}

function sendMessage() {
  const input = document.getElementById("chatInput");
  const chatBody = document.getElementById("chatBody");
  if (input && chatBody) {
    const message = input.value.trim();
    if (message) {
      const userMsg = document.createElement("p");
      userMsg.innerHTML = "<strong>You:</strong> " + message;
      chatBody.appendChild(userMsg);

      // Improved keyword-based bot response
      let botReply = "I'm here to help with your plant care questions!";

      const msg = message.toLowerCase();

      if (msg.includes("water") || msg.includes("watering")) {
        botReply = "Most plants prefer their soil to dry out slightly between waterings. Check the top inch of soil—if it's dry, it's time to water!";
      } else if (msg.includes("sun") || msg.includes("light")) {
        botReply = "Most indoor plants need bright, indirect sunlight. Avoid direct harsh sun unless your plant is a succulent or cactus.";
      } else if (msg.includes("fertilizer") || msg.includes("feed")) {
        botReply = "Fertilize your plants during their growing season (spring and summer) with a balanced, water-soluble fertilizer every 2-4 weeks.";
      } else if (msg.includes("yellow") && msg.includes("leaves")) {
        botReply = "Yellow leaves can be caused by overwatering, underwatering, or lack of nutrients. Check your watering routine and consider fertilizing.";
      } else if (msg.includes("disease") || msg.includes("spot") || msg.includes("fungus")) {
        botReply = "Remove affected leaves and avoid overhead watering. Ensure good air circulation. If needed, use an organic fungicide.";
      } else if (msg.includes("pest") || msg.includes("insect") || msg.includes("bug")) {
        botReply = "Inspect your plant for pests like aphids or spider mites. Wipe leaves with soapy water or use neem oil for treatment.";
      } else if (msg.includes("hello") || msg.includes("hi")) {
        botReply = "Hello! How can I assist you with your plants today?";
      } else if (msg.includes("thank")) {
        botReply = "You're welcome! Let me know if you have more questions.";
      }

      const botMsg = document.createElement("p");
      botMsg.innerHTML = "<strong>Nurturing AI Assistant:</strong> " + botReply;
      chatBody.appendChild(botMsg);

      chatBody.scrollTop = chatBody.scrollHeight;
      input.value = "";
    }
  }
}

// Enable Enter key to send message in chatbot
const chatInput = document.getElementById("chatInput");
if (chatInput) {
  chatInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      sendMessage();
    }
  });
}

// Sidebar toggle
function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  const hamburger = document.querySelector(".hamburger");
  sidebar.classList.toggle("open");

  if (sidebar.classList.contains("open")) {
    hamburger.classList.add("hidden"); // hide ☰
  } else {
    hamburger.classList.remove("hidden"); // show ☰
  }
}

function previewPlantImage(event, imgId) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      document.getElementById(imgId).src = e.target.result;
    };
    reader.readAsDataURL(file);
  }
}
