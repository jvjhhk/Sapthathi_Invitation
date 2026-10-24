
const venueLink = "https://maps.app.goo.gl/r4V4bAhndTBhYq2k7";

// Open the invitation
const welcomeScreen = document.getElementById("welcomeScreen");
const invitation = document.getElementById("invitation");
const openButton = document.getElementById("openInvitation");

openButton.addEventListener("click", () => {
  welcomeScreen.style.display = "none";
  invitation.classList.add("show");
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Countdown to the celebration date.
// No event time is displayed or assumed.
// The countdown ends at the start of 31 December 2026.
const eventDate = new Date(2026, 11, 31, 0, 0, 0);

function updateCountdown() {
  const now = new Date();
  const difference = eventDate.getTime() - now.getTime();
  const countdown = document.getElementById("countdown");

  if (difference <= 0) {
    countdown.innerHTML =
      "<p class='countdown-note'>The celebration date has arrived!</p>";
    return;
  }

  const days = Math.floor(
    difference / (1000 * 60 * 60 * 24)
  );

  const hours = Math.floor(
    (difference / (1000 * 60 * 60)) % 24
  );

  const minutes = Math.floor(
    (difference / (1000 * 60)) % 60
  );

  const seconds = Math.floor(
    (difference / 1000) % 60
  );

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent =
    String(hours).padStart(2, "0");
  document.getElementById("minutes").textContent =
    String(minutes).padStart(2, "0");
  document.getElementById("seconds").textContent =
    String(seconds).padStart(2, "0");
}

updateCountdown();
setInterval(updateCountdown, 1000);

// Create the QR code from the exact supplied venue URL.
const qrContainer = document.getElementById("qrcode");

if (typeof QRCode !== "undefined") {
  new QRCode(qrContainer, {
    text: venueLink,
    width: 180,
    height: 180,
    colorDark: "#4b1426",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
  });
} else {
  qrContainer.textContent =
    "QR code unavailable. Check your internet connection and refresh.";
}

const backToHomeButton = document.getElementById("backToHome");

backToHomeButton.addEventListener("click", () => {
  invitation.classList.remove("show");
  welcomeScreen.style.display = "flex";
  window.scrollTo({ top: 0, behavior: "smooth" });
});
