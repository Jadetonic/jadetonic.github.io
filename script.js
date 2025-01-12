// Delayed link navigation with animation
document.body.addEventListener("click", function (e) {
    if (e.target.classList.contains("icon")) {
        e.preventDefault();
        e.target.style.animation = "button-push 2s ease 0.01s";
        setTimeout(function () {
            window.location = e.target.getAttribute("href");
        }, 2000);
    }
});

// Fetch subscriber count
async function get_subscriber_count() {
    const url = "https://api-v2.nextcounts.com/api/youtube/channel/estimate/mixerno/UCLMXW-ObMCao2slmB09xLCQ";
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        document.getElementById("estimatedSubCount").textContent = data.estimatedSubCount || "N/A";
    } catch (error) {
        console.error('Error fetching subscriber count:', error);
        document.getElementById("estimatedSubCount").textContent = "Error fetching data";
    }
}

// Fetch Discord member count
async function get_member_count() {
    const url = "https://api-v2.nextcounts.com/api/discord/server/pGBrnWCdyZ";
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        document.getElementById("membersCount").textContent = data.membersCount || "N/A";
    } catch (error) {
        console.error('Error fetching member count:', error);
        document.getElementById("membersCount").textContent = "Error fetching data";
    }
}

// Initialize data on page load
document.addEventListener("DOMContentLoaded", async function () {
    await Promise.all([get_subscriber_count(), get_member_count()]);
});
