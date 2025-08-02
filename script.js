// Dummy backend data
const internData = {
  name: "Diya Attri",
  referralCode: "diya2025",
  totalDonations: 7200,
  donationGoal: 10000,
  rewards: [
    "Bronze Badge - ₹1000",
    "Silver Badge - ₹5000",
    "Gold Badge - ₹10000"
  ]
};
localStorage.setItem("loggedIn", "true");

window.onload = function () {
  // Load user data
  document.getElementById("internName").textContent = internData.name;
  document.getElementById("referralCode").textContent = internData.referralCode;
  document.getElementById("donations").textContent = internData.totalDonations;
  // --- Leaderboard Data ---
  const leaderboardData = [
    { name: "Diya Attri", donations: 7200 },
    { name: "Rahul Sharma", donations: 6800 },
    { name: "Ananya Gupta", donations: 5300 },
    { name: "Karan Mehta", donations: 4200 },
    { name: "Priya Singh", donations: 3100 }
  ];

  // --- Render Leaderboard ---
  const leaderboardList = document.getElementById("leaderboardList");
  leaderboardData.forEach((user, index) => {
    const li = document.createElement("li");
    li.textContent = `${index + 1}. ${user.name} - ₹${user.donations}`;
    leaderboardList.appendChild(li);
  });

  // Populate rewards
  const rewardList = document.getElementById("rewardsList");
  internData.rewards.forEach(reward => {
    const li = document.createElement("li");
    li.textContent = reward;
    rewardList.appendChild(li);
  });

  // Progress bar
  const percentage = Math.min(
    (internData.totalDonations / internData.donationGoal) * 100,
    100
  ).toFixed(0);
  const progressBar = document.getElementById("donationProgress");
  progressBar.style.width = percentage + "%";
  progressBar.textContent = percentage + "%";

  // Tier Calculation
  function getTier(donations) {
    if (donations >= 7000) return "Gold";
    if (donations >= 4000) return "Silver";
    return "Bronze";
  }
  const tier = getTier(internData.totalDonations);
  document.getElementById("userTier").textContent = tier;

  // Random Quote of the Day
  const quotes = [
    "Small acts, when multiplied by millions, can transform the world.",
    "You make a living by what you get, but you make a life by what you give.",
    "The best way to find yourself is to lose yourself in the service of others.",
    "Giving is not just about making a donation, it's about making a difference."
  ];
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById("quote").textContent = randomQuote;
};


