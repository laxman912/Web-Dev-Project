// --- 1. COUNTDOWN TIMER LOGIC ---
const targetDate = new Date("June 11, 2026 00:00:00").getTime();

const updateCountdown = () => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    // Time calculations
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    // Update the DOM (Selecting by the spans inside our .time-box)
    const timeBoxes = document.querySelectorAll('.time-box span');
    if(timeBoxes.length === 4) {
        timeBoxes[0].innerText = days < 10 ? `0${days}` : days;
        timeBoxes[1].innerText = hours < 10 ? `0${hours}` : hours;
        timeBoxes[2].innerText = minutes < 10 ? `0${minutes}` : minutes;
        timeBoxes[3].innerText = seconds < 10 ? `0${seconds}` : seconds;
    }
};

// Update every second
setInterval(updateCountdown, 1000);

// --- 2. MOBILE MENU RESPONSIVENESS ---
const createMobileMenu = () => {
    const nav = document.querySelector('nav');
    const ul = document.querySelector('nav ul');
    
    // Create the hamburger button
    const burger = document.createElement('div');
    burger.innerHTML = '&#9776;'; // Hamburger icon
    burger.classList.add('mobile-menu-icon');
    
    nav.prepend(burger);

    burger.addEventListener('click', () => {
        ul.classList.toggle('active');
        burger.innerHTML = ul.classList.contains('active') ? '&#10006;' : '&#9776;'; // Toggle X icon
    });
};

// Initialize mobile menu
createMobileMenu();