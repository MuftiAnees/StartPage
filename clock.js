function updateClock() {
  const clock = document.getElementById("clock");
  const now = new Date();

  let hours = now.getHours();
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12; // Convert 0 → 12

  const timeString = `${String(hours).padStart(2, "0")}:${minutes} ${ampm}`;
  clock.textContent = timeString;
}

setInterval(updateClock, 1000);
updateClock(); // Run once immediately
