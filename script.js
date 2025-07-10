async function showBio() {
  const bio = document.getElementById("bio");
  bio.style.display = "block";
  bio.classList.add("fade-in");

  const AudioContext = window.AudioContext || window.webkitAudioContext;
  const audioContext = new AudioContext();

  try {
    const response = await fetch("https://files.catbox.moe/el3pk4.mp3");
    const arrayBuffer = await response.arrayBuffer();
    const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);

    const source = audioContext.createBufferSource();
    source.buffer = audioBuffer;
    source.connect(audioContext.destination);
    source.loop = true;
    source.start(0);
  } catch (e) {
    alert("Gagal memutar lagu 😢: " + e.message);
  }
}