// PETALORA website settings
// Replace this demo number with your WhatsApp business number in international format.
// Bangladesh example: 8801XXXXXXXXX (do not use +, spaces or dashes).
const WHATSAPP_NUMBER = "8801XXXXXXXXX";

const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");
menuBtn?.addEventListener("click", () => nav.classList.toggle("open"));

document.querySelectorAll("nav a").forEach(a => {
  a.addEventListener("click", () => nav.classList.remove("open"));
});

document.getElementById("year").textContent = new Date().getFullYear();

function selectBouquet(name, price) {
  const select = document.getElementById("bouquet");
  const option = [...select.options].find(o => o.text.startsWith(name));
  if (option) select.value = option.value;
  document.getElementById("order").scrollIntoView({behavior:"smooth"});
}

document.getElementById("orderForm").addEventListener("submit", function(e) {
  e.preventDefault();

  if (WHATSAPP_NUMBER.includes("X")) {
    alert("First open script.js and replace WHATSAPP_NUMBER with your real WhatsApp business number.");
    return;
  }

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const bouquet = document.getElementById("bouquet").value;
  const quantity = document.getElementById("quantity").value;
  const date = document.getElementById("date").value;
  const address = document.getElementById("address").value.trim();
  const message = document.getElementById("message").value.trim() || "No card message";

  const text =
`🌸 PETALORA ORDER 🌸

Name: ${name}
Phone: ${phone}
Bouquet: ${bouquet}
Quantity: ${quantity}
Delivery Date: ${date}
Address: ${address}
Card Message: ${message}

Please confirm my order. ❤️`;

  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, "_blank");
});
