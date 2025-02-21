
//___________FOTOGRAM___________

//___________________GLOBAL___________________________

let filePath = "./assets/img/";

let imgs = ["architecture-5585737_1280.jpg",
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

    let filePathLogo = ["./assets/"];
    let logo = ["logo_fotogram.svg"];
    let altLogoDescription = ["Das Logo von Fotogram"];

//________________FUNCTIONS_BILDER_ANZEIGEN_____________________________________

function render() {
    let contentToFill = document.getElementById('content');
    let logoContainer = document.getElementById('logoContainer');
    for (let i = 0; i < imgs.length; i++) {
        contentToFill.innerHTML += useHtml(i);
    };

    function useHtml(index) {
        return `<img onclick="toggleOverlay(), togglePictureWindow(${index})" class="img" src="${filePath}${imgs[index]}" alt="${altDescription[index]}">`;
    };

    logoContainer.innerHTML += putInLogo(logo, altLogoDescription);
    
    function putInLogo(logo, altLogoDescription){
        return `<img class="logoFotogram" src="${filePathLogo}${logo}" alt="${altLogoDescription}">`
    };
//_______________________H2 mit JAVASCRIPT__________________________

    let h1 = document.getElementById("headline");
    h1.textContent = 'Ein Fotoalbum';
    h1.textContent = h1.textContent.toUpperCase();
    h1.classList.add('h1');
};

//_____________________INNER WINDOW_______________________________________

function toggleOverlay(){
    let overlayRef = document.getElementById('overlay');
    overlayRef.classList.toggle('dNone');
};

function togglePictureWindow(index) {
    let windowRef = document.getElementById('imgWindow');
    windowRef.classList.toggle('dNone');
        windowRef.innerHTML += showImg(index);
    };


function showImg(index) {
    return `
            <img class="sizeImg" src="${filePath}${imgs[index]}" alt="${altDescription[index]}">
            `
};

function eventProtection(event){
    event.stopPropagation()
}
//HIER muss das Bubbling rein, sonst klickt man immer aufs Overlay, obwohl man aufs bild klickt




