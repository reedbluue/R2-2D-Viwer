// black theme

let backgroundDark = "#212529";
let backgroundR2planDark = "#ADB5BD";
  
let primaryColorDark = "hsl(204, 42%, 27%)";
let secondaryColorDark = "rgb(60, 110, 113)";

let textColorDark = "rgb(255, 255, 254)";
let linkColorDark = "rgb(79, 102, 103)";

let buttonBgColorDark = "rgb(254, 255, 255)";
let buttonTextColorDark = "rgb(0,0,0)";

let formButtonBgColorDark = "#495057"
let formButtonTextColorDark = "#fff";

let tableTextColorDark = "#000";
let tableThBackgroundColorDark = "#495057";
let tableThTextColorDark = "#fff";
let tableTrBackgroundColorOddDark = "rgb(212, 212, 212)";
let tableTrBackgroundColorEvenDark = "rgb(180, 180, 180)";

let loaderTextColorDark = "#FFF";
let loaderBackgroundColorDark = "#212529";

let alertOkColorDark = "#495057";
let alertErrorColorDark ="#343A40";

let inputBackgroundColorDark = "#CED4DA";

let versorTextColorDark = "#fff";

let colorTextInfoProjectDark = '#fff';

// Light Theme

let backgroundLight = "#EAF4F4";
let backgroundR2planLight = "#CCE3DE";
  
let primaryColorLight = "hsl(204, 42%, 27%)";
let secondaryColorLight = "rgb(60, 110, 113)";

let textColorLight = "rgb(255, 255, 254)";
let linkColorLight = "rgb(79, 102, 103)";

let buttonBgColorLight = "rgb(254, 255, 255)";
let buttonTextColorLight = "rgb(0,0,0)";

let formButtonBgColorLight = "#CCE3DE"
let formButtonTextColorLight = "rgb(0,0,0)";

let tableTextColorLight = "#000";
let tableThBackgroundColorLight = "#6B9080";
let tableThTextColorLight = "#000";
let tableTrBackgroundColorOddLight = "rgb(212, 212, 212)";
let tableTrBackgroundColorEvenLight = "rgb(180, 180, 180)";

let loaderTextColorLight = "#000";
let loaderBackgroundColorLight = "#EAF4F4";

let alertOkColorLight = "#6B9080";
let alertErrorColorLight ="#b15353";

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
    document.documentElement.style.setProperty('--form-button-bg-color', formButtonBgColorLight);
    document.documentElement.style.setProperty('--form-button-text-color', formButtonTextColorLight);
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
    document.documentElement.style.setProperty('--form-button-bg-color', formButtonBgColorDark);
    document.documentElement.style.setProperty('--form-button-text-color', formButtonTextColorDark);
  }
}