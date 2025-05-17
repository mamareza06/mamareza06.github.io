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

 const audio = document.getElementById("myAudio");
        const playBtn = document.getElementById("playButton");
        const pauseBtn = document.getElementById("pauseButton");

        // Saat halaman dimuat, cek status sebelumnya
        window.addEventListener("DOMContentLoaded", () => {
            const lastTime = localStorage.getItem("musikPosisi");
            const wasPlaying = localStorage.getItem("musikStatus");

            if (lastTime !== null) {
                audio.currentTime = parseFloat(lastTime);
            }

            // Jika musik sebelumnya sedang diputar, lanjutkan dan sembunyikan tombol play
            if (wasPlaying === "playing") {
                audio.play().then(() => {
                    playBtn.style.display = "none";
                    pauseBtn.style.display = "inline-block";
                }).catch(err => {
                    // Jika autoplay gagal, tampilkan tombol lagi
                    playBtn.style.display = "inline-block";
                    pauseBtn.style.display = "none";
                });
            } else {
                // Jika tidak sedang memutar, tampilkan tombol play
                playBtn.style.display = "inline-block";
                pauseBtn.style.display = "none";
            }
        });

        // Simpan posisi dan status play/pause setiap 500ms
        setInterval(() => {
            localStorage.setItem("musikPosisi", audio.currentTime);
            localStorage.setItem("musikStatus", audio.paused ? "paused" : "playing");
        }, 500);

        // Klik tombol play
        playBtn.addEventListener("click", () => {
            audio.currentTime = 0;
            audio.play().then(() => {
                playBtn.style.display = "none";
                pauseBtn.style.display = "inline-block";
            }).catch(err => {
                alert("Gagal memutar musik. Coba klik lagi.");
            });
        });

        // Klik tombol pause
        pauseBtn.addEventListener("click", () => {
            audio.pause();
            pauseBtn.style.display = "none";
            playBtn.style.display = "inline-block";
        });
