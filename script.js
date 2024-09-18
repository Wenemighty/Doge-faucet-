// Set initial values
let balance = 0.0000;
let dailyEarnings = 0.0012;
let invitedUsers = 0;

function startMining() {
    const email = document.getElementById("faucetpay-email").value;
    if (!email.includes("faucetpay.io")) {
        alert("Please use a FaucetPay.io email address to start mining.");
        return;
    }

    alert("Mining started for email: " + email);
    // Update UI
    document.getElementById("balance").textContent = (balance + dailyEarnings).toFixed(4) + " DOGE";
    document.getElementById("usd-balance").textContent = (balance * 0.06).toFixed(5);  // Example rate
    invitedUsers++;
    document.getElementById("invited").textContent = invitedUsers;
}
