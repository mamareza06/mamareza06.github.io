const countdown = document.getElementById('countdown');
const eventDate = new Date("June 16, 2025 08:00:00").getTime();

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

let currentSlide = 0;
  const images = document.querySelectorAll('#slider img');
  const captions = document.querySelectorAll('.caption');

  function changeSlide() {
    images[currentSlide].classList.remove('active');
    captions[currentSlide].classList.remove('active');

    currentSlide = (currentSlide + 1) % images.length;

    images[currentSlide].classList.add('active');
    captions[currentSlide].classList.add('active');
  }

  setInterval(changeSlide, 5000); // Ganti setiap 3 detik

document.getElementById("playButton").addEventListener("click", function () {
            const button = this;
            const audio = document.getElementById("myAudio");

            // Sembunyikan tombol agar tidak bisa diklik lagi
            button.style.display = "none";

            // Mainkan musik sebagai respons dari interaksi pengguna
            audio.play().then(() => {
                console.log("Musik berhasil diputar.");

                // Setelah 2 detik, reload halaman
                setTimeout(() => {
                    window.location.href = window.location.href;
                }, 2000);
            }).catch(err => {
                // Jika gagal, tampilkan pesan
                console.error("Gagal memutar musik:", err);
                alert("Gagal memutar musik. Pastikan file tersedia dan Anda sudah klik tombol.");
                // Tampilkan kembali tombol agar bisa dicoba ulang
                button.style.display = "inline-block";
            });
        });
