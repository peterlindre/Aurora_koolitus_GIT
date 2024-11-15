import i18n from "i18next";
import { initReactI18next } from "react-i18next";


const resources = {
  en: {
    translation: {
      "Ilusate autode kodu": "Home of beautiful cars",
      "Täielik valik autode sise- ja välishooldusteenuseid": "Full service detailing for both interior and exterior",
      "Sise- ja välispesu": "Interior and exterior cleaning",
      "Kere poleerimine": "Polishing",
      "Vahatamine ja keraamiline kaitse": "Waxing and ceramic coating",
      "Klaaside vihmavastane töötlemine": "Windshield rain repellent",
      "Nahahooldus ja keemiline puhastus": "Leather care and interior detailing",
      "Taastamine" : "Restoration",
      "Nahkistmete ja roolide taastamine": "Restoration of leather seats and steering wheels",
      "Rooli nahatamine": "Steering wheel leather replacement",
      "Tulede taastamine": "Headlight restoration",
      "Pidurisadulate värvimine": "Brake caliper painting and design",
      "Kere- ja värvitööd" : "Body and paint work",
      "Kiletamine" : "Wrapping",
      "PPF kaitsekiletamine" : "PPF application",
      "Vinüülkiletamine": "Vinyl wrapping",
      "Salongi detailide kiletamine": "Interior trim vinyl wrapping",
      "Iluliistude kiletamine" : "Exterior trim vinyl wrapping",
      "Klaaside ja tulede toonimine" : "Window and headlight tinting",
      "Muud teenused" : "Other services",
      "Autode komisjonimüük": "Commission sale",
      "Autode müügifotod" : "Studio photos for sales advertisement",
      "Broneeri aeg või küsi teenuste kohta lisainformatsiooni" : "Make a reservation or contact us for further information about our services",
      "Küsimuste korral võib ka helistada numbril" : "If you have more questions you can contact us by calling",
      "Teenused" : "Services",
      "Hinnakiri" : "Prices",
      "Kontakt" : "Contact",
      "Välispesu" : "Regular wash",
      "Salongi keemiline puhastus" : "Interior deep clean",
      "Poleerimine" : "Polishing",
      
    
    }
  },
  et: {
    translation: {
      "Ilusate autode kodu": "Ilusate autode kodu",
      "Täielik valik autode sise- ja välishooldusteenuseid": "Täielik valik autode sise- ja välishooldusteenuseid",
      "Sise- ja välispesu": "Sise- ja välispesu",
      "Kere poleerimine": "Kere poleerimine",
      "Vahatamine ja keraamiline kaitse":  "Vahatamine ja keraamiline kaitse",
      "Klaaside vihmavastane töötlemine": "Klaaside vihmavastane töötlemine",
      "Nahahooldus ja keemiline puhastus": "Nahahooldus ja keemiline puhastus",
      "Taastamine" : "Taastamine",
      "Nahkistmete ja roolide taastamine":  "Nahkistmete ja roolide taastamine",
      "Rooli nahatamine": "Rooli nahatamine",
      "Tulede taastamine":"Tulede taastamine",
      "Pidurisadulate värvimine": "Pidurisadulate värvimine",
      "Kere- ja värvitööd": "Kere- ja värvitööd",
      "Kiletamine": "Kiletamine",
      "PPF kaitsekiletamine" : "PPF kaitsekiletamine",
      "Vinüülkiletamine": "Vinüülkiletamine",
      "Salongi detailide kiletamine" : "Salongi detailide kiletamine",
      "Iluliistude kiletamine" : "Iluliistude kiletamine",
      "Klaaside ja tulede toonimine" : "Klaaside ja tulede toonimine",
      "Muud teenused" : "Muud teenused",
      "Autode komisjonimüük": "Autode komisjonimüük",
      "Autode müügifotod" : "Autode müügifotod",
      "Broneeri aeg või küsi teenuste kohta lisainformatsiooni":"Broneeri aeg või küsi teenuste kohta lisainformatsiooni",
      "Küsimuste korral võib ka helistada numbril": "Küsimuste korral võib ka helistada numbril",
      "Teenused" :  "Teenused",
      "Hinnakiri" :  "Hinnakiri",
      "Kontakt" : "Kontakt",
      "Välispesu" : "Välispesu",
      "Salongi keemiline puhastus" : "Salongi keemiline puhastus",
      "Poleerimine" : "Poleerimine",
    

    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: localStorage.getItem("keel") || "et", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;
