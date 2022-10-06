// black theme

let backgroundDark = "rgb(53, 53, 53)";
let backgroundR2planDark = "rgb(207, 207, 207)";
  
let primaryColorDark = "hsl(204, 42%, 27%)";
let secondaryColorDark = "rgb(60, 110, 113)";

let textColorDark = "rgb(255, 255, 254)";
let linkColorDark = "rgb(79, 102, 103)";

let buttonBgColorDark = "rgb(254, 255, 255)";
let buttonTextColorDark = "rgb(0,0,0)";

let tableTextColorDark = "#000";
let tableThBackgroundColorDark = "rgb(60, 110, 113)";
let tableThTextColorDark = "#000";
let tableTrBackgroundColorOddDark = "rgb(212, 212, 212)";
let tableTrBackgroundColorEvenDark = "rgb(180, 180, 180)";

let loaderTextColorDark = "#FFF";
let loaderBackgroundColorDark = "rgb(53, 53, 53)";

let alertOkColorDark = "rgb(60, 113, 84)";
let alertErrorColorDark ="rgb(133, 55, 55)";

let inputBackgroundColorDark = "rgb(211, 211, 211)";

let versorTextColorDark = "#fff";

let colorTextInfoProjectDark = '#fff';

// Light Theme

let backgroundLight = "#fff";
let backgroundR2planLight = "#fff";
  
let primaryColorLight = "hsl(204, 42%, 27%)";
let secondaryColorLight = "rgb(60, 110, 113)";

let textColorLight = "rgb(255, 255, 254)";
let linkColorLight = "rgb(79, 102, 103)";

let buttonBgColorLight = "rgb(254, 255, 255)";
let buttonTextColorLight = "rgb(0,0,0)";

let tableTextColorLight = "#000";
let tableThBackgroundColorLight = "rgb(1, 0, 138)";
let tableThTextColorLight = "#fff";
let tableTrBackgroundColorOddLight = "rgb(212, 212, 212)";
let tableTrBackgroundColorEvenLight = "rgb(180, 180, 180)";

let loaderTextColorLight = "#000";
let loaderBackgroundColorLight = "#fff";

let alertOkColorLight = "rgb(1, 0, 138)";
let alertErrorColorLight ="rgb(180, 55, 55)";

let inputBackgroundColorLight = "#fff";

let versorTextColorLight = "#000";

let colorTextInfoProjectLight = '#000';

export class ThemeController {
  constructor() {
    this.status = 0;
  }

  toLight() {
    document.documentElement.style.setProperty('--background', backgroundLight);
    document.documentElement.style.setProperty('--background-r2plan', backgroundR2planLight);
    document.documentElement.style.setProperty('--table-text-color', tableTextColorLight);
    document.documentElement.style.setProperty('--table-th-background-color', tableThBackgroundColorLight);
    document.documentElement.style.setProperty('--table-th-text-color', tableThTextColorLight);
    document.documentElement.style.setProperty('--loader-text-color', loaderTextColorLight);
    document.documentElement.style.setProperty('--loader-background-color', loaderBackgroundColorLight);
    document.documentElement.style.setProperty('--alert-ok-color', alertOkColorLight);
    document.documentElement.style.setProperty('--alert-error-color', alertErrorColorLight);
    document.documentElement.style.setProperty('--input-background-color', inputBackgroundColorLight);
    document.documentElement.style.setProperty('--versor-text-color', versorTextColorLight);
    document.documentElement.style.setProperty('--color-text-info-project', colorTextInfoProjectLight);
  }

  toDark() {
    document.documentElement.style.setProperty('--background', backgroundDark);
    document.documentElement.style.setProperty('--background-r2plan', backgroundR2planDark);
    document.documentElement.style.setProperty('--table-text-color', tableTextColorDark);
    document.documentElement.style.setProperty('--table-th-background-color', tableThBackgroundColorDark);
    document.documentElement.style.setProperty('--table-th-text-color', tableThTextColorDark);
    document.documentElement.style.setProperty('--loader-text-color', loaderTextColorDark);
    document.documentElement.style.setProperty('--loader-background-color', loaderBackgroundColorDark);
    document.documentElement.style.setProperty('--alert-ok-color', alertOkColorDark);
    document.documentElement.style.setProperty('--alert-error-color', alertErrorColorDark);
    document.documentElement.style.setProperty('--input-background-color', inputBackgroundColorDark);
    document.documentElement.style.setProperty('--versor-text-color', versorTextColorDark);
    document.documentElement.style.setProperty('--color-text-info-project', colorTextInfoProjectDark);
  }
}