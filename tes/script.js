// JavaScript untuk menambahkan efek tambahan jika diperlukan
window.onload = function () {
  const codeElement = document.querySelector(".haha");
  codeElement.style.opacity = 0; // Mulai dengan opacity 0

  // Animasi fade in
  setTimeout(() => {
    codeElement.style.transition = "opacity 2s";
    codeElement.style.opacity = 1; // Ubah opacity menjadi 1 setelah 1 detik
  }, 1000);
};
