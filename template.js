function contentTemplate(i) {
    return `<img onclick="toggleOverlay(), togglePictureWindow(${i})" class="img" src="${filePath}${imgs[i]}" alt="${altDescription[i]}">`;
};

function logoContainerTemplate(logo, altLogoDescription) {
    return `<img class="logoFotogram" src="${filePathLogo}${logo}" alt="${altLogoDescription}">`
};

function imgWindowTemplate(i) {
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