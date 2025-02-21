function openLink(url) {
    window.open(url, '_blank');
}

// র‍্যান্ডম কালার জেনারেট করা
function getRandomColor() {
    const colors = ["red", "limegreen", "blue", "cyan", "yellow", "magenta", "white", "purple", "orange"];
    return colors[Math.floor(Math.random() * colors.length)];
}

// ASCII হেডিং-এর রঙ সুপার-ফাস্ট চেঞ্জ হবে
setInterval(() => {
    let asciiText = document.getElementById("ascii-name");
    asciiText.style.color = getRandomColor();
    asciiText.style.textShadow = `0 0 5px ${getRandomColor()}, 0 0 10px ${getRandomColor()}, 0 0 20px ${getRandomColor()}`;
}, 10); 

// বাটনগুলোর রঙ দ্রুত পরিবর্তন হবে
setInterval(() => {
    let buttons = document.querySelectorAll(".hack-btn");
    buttons.forEach(btn => {
        btn.style.color = getRandomColor();
        btn.style.borderColor = getRandomColor();
        btn.style.boxShadow = `0 0 5px ${getRandomColor()}, 0 0 10px ${getRandomColor()}, 0 0 20px ${getRandomColor()}`;
        btn.style.backgroundColor = getRandomColor();
    });
}, 10);

// ম্যাট্রিক্স রেইন এফেক্ট
const canvas = document.getElementById("matrixCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const chars = "123456789";
const columns = canvas.width / 15;
const drops = Array(Math.floor(columns)).fill(0);

function drawMatrix() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.font = "15px monospace";

    for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillStyle = getRandomColor();
        ctx.fillText(text, i * 15, drops[i] * 15);

        if (drops[i] * 15 > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }

        drops[i]++;
    }
}

setInterval(drawMatrix, 30);
