function startPosterAndMusic() {
    const introScreen = document.getElementById("intro");
    const locandinaScreen = document.getElementById("locandina");
    const audio = document.getElementById("bg-music");
    const autoplayWarning = document.getElementById("autoplayWarning");
    const playPauseBtn = document.getElementById("playPauseBtn");
    const playIcon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8"><path fill-rule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.367 2.807-1.638L19.5 12l-12.193 8.985c-1.278.729-2.807-.21-2.807-1.638V5.653Z" clip-rule="evenodd" /></svg>';
    const pauseIcon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 sm:w-6 sm-h-6 md:w-7 md:h-7 lg:w-8 lg:h-8"><path fill-rule="evenodd" d="M6.75 5.25a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V5.25ZM14.25 5.25a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1-.75-.75V5.25Z" clip-rule="evenodd" /></svg>';
    
    introScreen.style.opacity = '0';

    setTimeout(() => {
        introScreen.classList.add('hidden'); 
        locandinaScreen.classList.remove('opacity-0'); 
    }, 700);

    audio.loop = true;

    audio.play().then(() => {
        autoplayWarning.classList.add('hidden');
        playPauseBtn.innerHTML = pauseIcon; 
    }).catch(e => {
        console.warn("Autoplay bloccato:", e);
        autoplayWarning.classList.remove('hidden');
        playPauseBtn.innerHTML = playIcon; 
    });

    playPauseBtn.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
            playPauseBtn.innerHTML = pauseIcon; 
        } else {
            audio.pause();
            playPauseBtn.innerHTML = playIcon; 
        }
    });
}