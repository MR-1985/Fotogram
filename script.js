
//___________FOTOGRAM___________

//___________________GLOBAL___________________________


//_______________Speicherort_der_Bilder_____________

let filePath = "./assets/img/";

//_______________Bilder_mit_Namen_________________________

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

//_______________alternative_Beschreibung_der_Bilder_____________________

let altDescription = ["Ein Hochhaus", "Ein Vogel auf einem Ast",
    "Ein Käfer auf einem spitzen Blatt",
    "Ein Feld mit einem Baum. Der Himmel ist lila",
    "4 Tropfen auf einem Blatt", "Viele Tropfen auf einem Blatt",
    "Mehrere lange Blätter", "Ein Blatt einer Monstera",
    "Hügel, Berge mit Sonnenaufgang", "Eine Flusslandschaft",
    "Eine Brücke, oder Steg bei Abenddämmerung", "Eine bunt angestrahlte Rolltreppe"];

//________________Globale_Variablen_für_späteren_Gebrauch_______________________


let arrayLength = imgs.length;
let filePathLogo = ["./assets/"];
let logo = ["logo_fotogram.svg"];
let altLogoDescription = ["Das Logo von Fotogram"];

//________________FUNCTIONS_BILDER_ANZEIGEN_nach Laden_der_Seite____________________________

function render() {                                                 //beim Laden der Seite wird direkt eine Funktion ausgeführt
    let contentToFill = document.getElementById('content');
    let logoContainer = document.getElementById('logoContainer');
    for (let i = 0; i < imgs.length; i++) {
        contentToFill.innerHTML += useHtml(i);
    };

    //________________Beim_Laden_werden_alle_Bilder_innerHTML_angezeigt_____________

    function useHtml(i) {                                       //Funktion die durch übergeordnete Funktion ausgelöst wurde und HTML anzeigt
        return `<img onclick="toggleOverlay(), togglePictureWindow(${i})" class="img" src="${filePath}${imgs[i]}" alt="${altDescription[i]}">`;
    };

    logoContainer.innerHTML += putInLogo(logo, altLogoDescription);

    //___________________Logo_mit_JS_einfügen____________________________

    function putInLogo(logo, altLogoDescription) {
        return `<img class="logoFotogram" src="${filePathLogo}${logo}" alt="${altLogoDescription}">`
    };

    //_______________________h1 mit JAVASCRIPT__________________________

    let h1 = document.getElementById("headline");
    h1.textContent = 'Ein Fotoalbum';
    h1.textContent = h1.textContent.toUpperCase();
    h1.classList.add('h1');
};

//_____________________OVERLAY_erscheint________________

function toggleOverlay() {
    let overlayRef = document.getElementById('overlay');
    overlayRef.classList.toggle('dNone');
};

//____________________Bilderrahmen_erscheint_______________________

function togglePictureWindow(i) {                               //Funktion fügt eine Klasse hinzu, die ein neues Fenster erscheinen lässt
    let windowRef = document.getElementById('imgWindow');
    windowRef.innerHTML = "";
    windowRef.classList.toggle('dNone');
    windowRef.innerHTML += showImg(i);

};

function showImg(i) {                                           //Führt innerHTML aus mit einer Funktion, die durch eine übergeordnete Funktion ausgelöst wurde
    return `
          <div class="imgBar">
                <div id="imgName">
                ${altDescription[i]}
                </div>
                <button id="closeX" onclick="emptyImgWindowToggleOverlayToggleImgWindow()">
                    X
                </button>
            </div>
            <div id="clickNextContainer">
                <button id="arrowLeft" onclick="showPrevPicture(${i})">
                    <
                </button>
                <div id="countImg">
                    ${i + 1} / ${arrayLength}
                </div>
                <button id="arrowRight" onclick="showNextPicture(${i})">
                    >
                </button>
            </div>
            <img class="sizeImg" src="${filePath}${imgs[i]}" alt="${altDescription[i]}">
            `
};

//___________________Schutz_vor_Ausführung_in_Elternelement_______________________

function eventProtection(event) {                  //verhindert die gleichzeitige Ausführung von Funktionen, die auf dem übergeordneten div liegen
    event.stopPropagation();
}

// ______________________vorheriges_Bild_erscheint______________________

function showPrevPicture(backAktualIndex) {
    if (backAktualIndex > 0) {
        backAktualIndex--;         //solabge die variable 0 ist, soll der Index einen Schritt zurückgehen
    } else {
        backAktualIndex = imgs.length - 1;     //sollte die Variable nicht mehr größer 0 sondern gleich sein, soll sie die Länge des Array - 1 sein                                      //somit ist die Variable eines der letzten Bilder im Array und man kann wieder Rückwärts gehen
    }
    updateImgWindow(backAktualIndex);                  //das Fenster wird nun aktualisiert mit einer Funktion, die eine Funktion aufruft, die es bereits gibt
}

//______________________nächstes_Bild_erscheint_____________________________

function showNextPicture(forwardActualIndex) {
    if (forwardActualIndex < imgs.length - 1) {    //currentIndex ist global definiert und ist 0. Solange sie kleiner ist als die Länge des Array -1
        forwardActualIndex++;                     //soll der Index einen Schritt höher gehen
    } else {
        forwardActualIndex = 0;                    //sollte der index aber gleich der Länge Array - 1 sein, ist er wieder wie global definiert
        //damit steht er wieder auf dem 1 Bild mit Index 0
    }
    updateImgWindow(forwardActualIndex);                       //das Fenster wird wieder mit einer Funktion aktualisiert, die ein Bild reinläd, ABER mit aktuellen Index
}

//_____________________Anzeigefenster_aktualisiert_sich_________________________

function updateImgWindow(actuelIndex) {                                //die Funktion läd ein Bild ins Fenster,ABER mit der aktuellen Indexzahl
    let windowRef = document.getElementById('imgWindow');

    windowRef.innerHTML = showImg(actuelIndex);
}

//_____________________Leeren_von_Bilderahmen_+_dNone-Klassen_bei_Klick_X_oder_Overlay_______________

function emptyImgWindowToggleOverlayToggleImgWindow() {
    //auf Overlay muss eine onclick-Funktion, die das Fenster leert und es wieder verschwinden lässt
    document.getElementById('imgWindow').innerHTML = "";
    document.getElementById('imgWindow').classList.toggle('dNone');
    document.getElementById('overlay').classList.toggle('dNone');
}





