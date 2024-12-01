document.addEventListener("DOMContentLoaded", () => {
  const message = document.getElementById("message");
  const subMessage = document.getElementById("sub-message");
  const celebrateBtn = document.getElementById("celebrate-btn");

  // Tampilkan pesan setelah 1 detik
  setTimeout(() => {
    message.classList.remove("hidden");
    message.style.opacity = 1; // Fade in pesan utama
  }, 1000);

  // Tampilkan sub pesan setelah 2 detik
  setTimeout(() => {
    subMessage.classList.remove("hidden");
    subMessage.style.opacity = 1; // Fade in sub pesan
  }, 3000);

  // Event listener untuk tombol
  celebrateBtn.addEventListener("click", () => {
    alert("Mari kita rayakan cinta kita! ❤️"); // Pesan saat tombol ditekan
  });
});
