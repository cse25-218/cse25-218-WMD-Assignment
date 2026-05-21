function showPage(pageId) {
    let pages = document.getElementsByClassName("page");

    for (let i = 0; i < pages.length; i++) {
        pages[i].style.display = "none";
    }

    document.getElementById(pageId).style.display = "block";
}

// HOME PAGE
document.getElementById("welcome").innerHTML = 
    "Welcome to SportStream - Watch live sports anytime!";

// LIVE STREAM
const sportFilter = document.getElementById("sport-filter");
const leagueFilter = document.getElementById("league-filter");
const statusFilter = document.getElementById("status-filter");

const streams = document.querySelectorAll(".stream-row");

function filterStreams() {
  const sportValue = sportFilter.value.toLowerCase();
  const leagueValue = leagueFilter.value.toLowerCase();
  const statusValue = statusFilter.value.toLowerCase();

  streams.forEach(stream => {
    const leagueText = stream.querySelector(".stream-league").textContent.toLowerCase();
    const teamsText = stream.querySelector(".stream-teams").textContent.toLowerCase();

    let show = true;

    // Filter by sport (based on keywords)
    if (sportValue && !leagueText.includes(sportValue) && !teamsText.includes(sportValue)) {
      show = false;
    }

    // Filter by league
    if (leagueValue && !leagueText.includes(leagueValue)) {
      show = false;
    }

    // Filter by status (you only have LIVE now)
    if (statusValue === "live") {
      // all visible (since all are live)
    }

    stream.style.display = show ? "flex" : "none";
  });
}

sportFilter.addEventListener("change", filterStreams);
leagueFilter.addEventListener("change", filterStreams);
statusFilter.addEventListener("change", filterStreams);
setInterval(() => {
  document.querySelectorAll(".stream-live-badge").forEach(el => {
    el.style.opacity = (el.style.opacity === "0") ? "1" : "0.3";
  });
}, 600);

// SCHEDULE

let schedule = [
  {
    date: "April 14",
    time: "2100PM",
    teams: ["Atletico Madrid vs Barcelona", "Liverpool vs PSG"],
    league: "UCL"
  },
  {
    date: "April 15",
    time: "2100PM",
    teams: ["Bayern vs Madrid", "Arsenal vs Sporting"],
    league: "UCL"
  },
  {
    date: "April 18",
    time: "1800PM",
    teams: [
      "Chelsea vs Man United",
      "Leeds United vs Wolves",
      "Newcastle vs Bournemouth"
    ],
    league: "Premier League"
  },
  {
    date: "April 18",
    time: "2200PM",
    teams: ["Atletico Madrid vs Real Sociedad"],
    league: "Copa del Rey (Final)"
  },
  {
    date: "April 19",
    time: "1800PM",
    teams: [
      "Man City vs Arsenal",
      "Aston Villa vs Sunderland",
      "Liverpool vs Everton"
    ],
    league: "Premier League"
  },
  {
    date: "April 20",
    time: "1800PM",
    teams: [
      "Hawks vs Knicks",
      "Timberwolves vs Nuggets",
      "Cavaliers vs Raptors"
    ],
    league: "NBA"
  },
  {
    date: "April 21",
    time: "1800PM",
    teams: ["Charley Suarez vs Emmanuel Navarrete II"],
    league: "Boxing"
  }
];

// PRICING
function selectPlan(price) {
    document.getElementById("priceDisplay").innerHTML = 
        "Selected Plan: P" + price;
}

// FEEDBACK
function submitFeedback() {
    let feedback = document.getElementById("feedbackText").value;

    if (feedback === "") {
        alert("Please enter feedback");
        return;
    }

    alert("Thank you for your feedback!");

    // optional: clear textbox
    document.getElementById("feedbackText").value = "";
}

// LOGIN
document.addEventListener("DOMContentLoaded", () => {

  const loginBtn = document.querySelector(".btn-login");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const rememberCheckbox = document.querySelector("input[name='remember']");

  // Load saved email (Remember Me)
  const savedEmail = localStorage.getItem("userEmail");
  if (savedEmail) {
    emailInput.value = savedEmail;
    rememberCheckbox.checked = true;
  }

  // Email validation pattern
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Login button click
  loginBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    // Check empty fields
    if (email === "" || password === "") {
      alert("Please fill in all fields");
      return;
    }

    // Validate email format
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address");
      return;
    }

    // Validate password length
    if (password.length < 6) {
      alert("Password must be at least 6 characters");
      return;
    }

    // REMEMBER ME
    if (rememberCheckbox.checked) {
      localStorage.setItem("userEmail", email);
    } else {
      localStorage.removeItem("userEmail");
    }

    // Successful login
    alert("Login successful");

    // Redirect to streams page
    window.location.href = "live-streams.html";
  });

});