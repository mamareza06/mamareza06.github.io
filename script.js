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

const button = document.getElementById("playButton");
        const audio = document.getElementById("myAudio");

        // Jika sesi sebelumnya sudah berakhir (browser ditutup), hapus posisi musik
        if (!sessionStorage.getItem("sesiAktif")) {
            localStorage.removeItem("musikPosisi");
        }

        // Tandai sesi aktif agar saat reload tidak menghapus
        sessionStorage.setItem("sesiAktif", "ya");

        // Saat halaman dimuat
        window.addEventListener("DOMContentLoaded", () => {
            const lastTime = localStorage.getItem("musikPosisi");
            if (lastTime) {
                audio.currentTime = parseFloat(lastTime);
                audio.play().catch(err => {
                    console.error("Gagal melanjutkan musik:", err);
                });
                button.style.display = "none";
            }
        });

        // Saat tombol diklik
        button.addEventListener("click", () => {
            button.style.display = "none";
            audio.currentTime = 0;
            audio.play().then(() => {
                // Simpan posisi setiap 500ms
                const interval = setInterval(() => {
                    localStorage.setItem("musikPosisi", audio.currentTime);
                }, 500);

                // Reload setelah 3 detik
                setTimeout(() => {
                    clearInterval(interval);
                    window.location.reload();
                }, 3000);
            }).catch(err => {
                console.error("Gagal memutar musik:", err);
                alert("Gagal memutar musik. Pastikan file tersedia dan Anda klik tombol.");
                button.style.display = "inline-block";
            });
        });
