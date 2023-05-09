// Lista de links cadastrados
var links = [
    "https://drive.google.com/file/d/1D7oT6xbwJMZOuemyPI0H_0pNxY84dZmJ/preview",
    "https://drive.google.com/file/d/13TPhtzS3TnrHEZlwqdUmhjVoryUHXsfE/preview",
    "https://drive.google.com/file/d/1GagAgdX7h1PhncvP1Snpn5OxQ7YrYS9r/preview",
    /*
    "imgs/FormsFeedback.gif",
    "imgs/vemAi.gif",
    "https://dti.ag/LinksGestoAVista1",
    "https://dti.ag/LinksGestoAVista2",
    "https://dti.ag/LinksGestoAVista3",
    "https://dti.ag/LinksGestoAVista4",
    "https://dti.ag/LinksGestoAVista5",
    "https://dti.ag/LinksGestoAVista6",
    */
];
var indice = 0;
var intervalo;
function iniciarRotina() {
    var iframe = document.getElementById("link-iframe");
    iframe.src = links[indice];
    indice = (indice + 1) % links.length;
}
function comecarRotina() {
    iniciarRotina();
    intervalo = setInterval(iniciarRotina, 18000);
}
function pararRotina() {
    clearInterval(intervalo);
}
/*
function definirTamanhoIframe() {
    // Seleciona o elemento iframe
    const iframe = document.getElementById('link-iframe');

    // Cria um objeto Image para carregar a imagem
    const img = new Image();

    // Define a fonte da imagem como a fonte do iframe
    img.src = iframe.src;

    // Define a largura e altura do iframe com base no tamanho da imagem
    img.onload = function () {
        iframe.width = this.width;
        iframe.height = this.height;
    }
}
*/

