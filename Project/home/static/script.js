document.addEventListener("DOMContentLoaded", function () {
    const playButton = document.querySelector(".play-button");
    const heroImage = document.querySelector(".hero-image");
    const heroVideo = document.querySelector(".hero-video");

    playButton.addEventListener("click", function () {
        heroImage.style.display = "none"; // Sembunyikan gambar hero
        heroVideo.style.display = "block"; // Tampilkan video
    });
});
<iframe width="935" height="526" src="https://www.youtube.com/embed/TcMBFSGVi1c" title="Marvel Studios&#39; Avengers: Endgame - Official Trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>