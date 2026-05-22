// ─── PAGE LOAD ───
document.addEventListener("DOMContentLoaded", () => {

  // WATCH BUTTONS (Update title before playing)
  const watchButtons = document.querySelectorAll(".watch-btn, .btn-watch");

  watchButtons.forEach(button => {
    button.addEventListener("click", function () {

      const row = this.closest(".card, .stream-row");
      if (!row) return;

      const matchName =
        row.querySelector(".card-title, .stream-teams")?.innerText || "Live Match";

      const titleEl = document.getElementById("videoTitle");
      if (titleEl) titleEl.textContent = matchName + " (LIVE)";
    });
  });

});


// ─── PLAY MATCH FUNCTION ───
function playMatch(match) {

  const video = document.getElementById("liveVideo");
  const title = document.getElementById("videoTitle");

  if (!video) {
    console.error("Video element not found");
    return;
  }

  const matches = {
    city: {
      src: "videos/city.mp4",
      label: "Manchester City vs Arsenal"
    },
    lakers: {
      src: "videos/lakers.mp4",
      label: "Lakers vs Rockets"
    },
    tennis: {
      src: "videos/tennis.mp4",
      label: "Tennis Match"
    },
    boxing: {
      src: "videos/boxing.mp4",
      label: "Vergil Ortiz Jr. vs Samuel Vargas"
    },
    alaves: {
      src: "videos/alaves.mp4",
      label: "Alaves vs Mallorca"
    }
  };

  const chosen = matches[match] || {
    src: "videos/sample.mp4",
    label: "Live Match"
  };

  // Show loading
  if (title) {
    title.textContent = "Loading stream...";
  }

  // Reset video
  video.pause();
  video.src = chosen.src;
  video.load();

  // Enable autoplay
  video.muted = true;

  video.play().then(() => {
    if (title) {
      title.textContent = chosen.label + " (LIVE)";
    }
  }).catch(err => {
    console.warn("Playback failed:", err);
  });

  // Error handling
  video.onerror = () => {
    alert("Video failed to load");
  };

  // Scroll to player
  const container = document.querySelector(".video-container");
  if (container) {
    container.scrollIntoView({ behavior: "smooth" });
  }
}


// LIVE BLINK EFFECT
setInterval(() => {
  document.querySelectorAll(".stream-live-badge").forEach(el => {
    el.style.opacity = el.style.opacity === "0" ? "1" : "0.3";
  });
}, 600);


// ─── PRICING ───
function selectPlan(plan) {
  alert("You selected the " + plan + " plan");
}


// ─── FEEDBACK ───
function submitFeedback() {
  const name = document.getElementById("name").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !message) {
    alert("Please fill in all fields");
    return;
  }

  if (name.length < 3) {
    alert("Name must be at least 3 characters");
    return;
  }

  alert("Thank you for your feedback, " + name + "!");
}


// ─── LOGIN ───
function loginUser() {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  if (!email || !password) {
    alert("Please fill in all fields");
    return;
  }

  if (email === "admin@gmail.com" && password === "1234") {
    alert("Login successful!");
    window.location.href = "index.html";
  } else {
    alert("Invalid login details");
  }
}
``