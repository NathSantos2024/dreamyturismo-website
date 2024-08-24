// Seleciona o elemento de vídeo
const video = document.getElementById('video');

// Array com os caminhos dos vídeos
const videoSources = [
    'video1.mp4',
    'video2.mp4',
    'video3.mp4',
    'video4.mp4',
    'video5.mp4',
    'video6.mp4',
    'video7.mp4'
];

// Índice do vídeo atual
let currentVideoIndex = 0;

// Função para carregar o vídeo atual
function loadVideo() {
    video.src = videoSources[currentVideoIndex];
    video.play(); // Inicia automaticamente o vídeo
}

// Função para ir para o próximo vídeo
function nextVideo() {
    currentVideoIndex++;
    if (currentVideoIndex >= videoSources.length) {
        currentVideoIndex = 0; // Volta para o primeiro vídeo se chegar ao último
    }
    loadVideo();
}

// Função para voltar para o vídeo anterior
function prevVideo() {
    currentVideoIndex--;
    if (currentVideoIndex < 0) {
        currentVideoIndex = videoSources.length - 1; // Vai para o último vídeo se estiver no primeiro
    }
    loadVideo();
}

// Carrega o primeiro vídeo ao carregar a página
loadVideo();












