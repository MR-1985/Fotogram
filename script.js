
let filePath = "./assets/img/";

let imgs = ["Hochhaus.jpg",
    "baya-weaver-9058783_1280.jpg",
    "beetle-8320899_1280.jpg",
    "fields-8478994_1280.jpg",
    "leaf-7215867_1280.jpg",
    "leaves-8709253_1280.jpg",
    "leaves-9244714_1280.jpg",
    "monstera-deliciosa-9299206_1280.jpg",
    "vietnam-9295186_1280.jpg",
    "wachapreague-7974344_1280.jpg",
    "baltic-sea-7434540_1280.jpg",
    "subway-9151034_1280.jpg"];

let altDescription = ["Ein Hochhaus", "Ein Vogel auf einem Ast",
    "Ein Käfer auf einem spitzen Blatt",
    "Ein Feld mit einem Baum. Der Himmel ist lila",
    "4 Tropfen auf einem Blatt", "Viele Tropfen auf einem Blatt",
    "Mehrere lange Blätter", "Ein Blatt einer Monstera",
    "Hügel, Berge mit Sonnenaufgang", "Eine Flusslandschaft",
    "Eine Brücke, oder Steg bei Abenddämmerung", "Eine bunt angestrahlte Rolltreppe"];

let arrayLength = imgs.length;
let filePathLogo = ["./assets/"];
let logo = ["logo_fotogram.svg"];
let altLogoDescription = ["Das Logo von Fotogram"];

function init() {
    renderLogo();
    renderHeadline();
    renderImages();
};

function renderLogo() {
    let logoContainerRef = document.getElementById('logoContainer');
    logoContainerRef.innerHTML += logoContainerTemplate(logo, altLogoDescription);
}

function renderHeadline() {
    let headlineRef = document.getElementById("headline");
    headlineRef.textContent = 'Ein Fotoalbum';
    headlineRef.textContent = headlineRef.textContent.toUpperCase();
    headlineRef.classList.add('h1');
}

function renderImages() {
    let contentRef = document.getElementById('content');
    for (let i = 0; i < imgs.length; i++) {
        contentRef.innerHTML += contentTemplate(i);
    };
}

function toggleOverlay() {
    let overlayRef = document.getElementById('overlay');
    overlayRef.classList.toggle('dNone');
};

function togglePictureWindow(i) {
    let imgWindowRef = document.getElementById('imgWindow');
    imgWindowRef.innerHTML = "";
    imgWindowRef.classList.toggle('dNone');
    imgWindowRef.innerHTML += imgWindowTemplate(i);
};

function eventProtection(event) {
    event.stopPropagation();
}

function showPrevPicture(indexPrevPicture) {
    if (indexPrevPicture > 0) {
        indexPrevPicture--;
    } else {
        indexPrevPicture = imgs.length - 1;
    }
    updateImgWindow(indexPrevPicture);
}

function showNextPicture(indexNextPicture) {
    if (indexNextPicture < imgs.length - 1) {
        indexNextPicture++;
    } else {
        indexNextPicture = 0;
    }
    updateImgWindow(indexNextPicture);
}

function updateImgWindow(actuelIndex) {
    let imgWindowRef = document.getElementById('imgWindow');
    imgWindowRef.innerHTML = imgWindowTemplate(actuelIndex);
}

function emptyImgWindowToggleOverlayToggleImgWindow() {
    document.getElementById('imgWindow').innerHTML = "";
    document.getElementById('imgWindow').classList.toggle('dNone');
    document.getElementById('overlay').classList.toggle('dNone');
}





