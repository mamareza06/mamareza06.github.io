const countdown = document.getElementById('countdown');
const eventDate = new Date("July 12, 2025 10:00:00").getTime();

setInterval(() => {
    const now = new Date().getTime();
    const distance = eventDate - now;

    if (distance < 0) {
        countdown.innerHTML = "Acara telah berlangsung.";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hrs = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((distance % (1000 * 60)) / 1000);

    countdown.innerHTML = `💍 ${days} hari ${hrs} jam ${mins} menit ${secs} detik`;
}, 1000);
