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
      "Oh ei": "Oh no!",
      "Otsisime igaltpoolt, aga seda lehte me ei leidnud":"We looked everywhere but this page is nowhere to be found!",
      "Tagasi" : "Back to",
      "kodulehele" : "homepage",
      "Broneerimine" : "Booking",
      "broneerimine":"booking",
      "Oleme avatud":"Opening hours",
      "maa-alune parkla 0. korrus" : "ground floor parking lot",
      "Salongi kuivpuhastus" : "Interior dry-cleaning",
      "al":"from",
      "Keraamiline kaitse": "Ceramic coating",
      "Pesu ja teenuste hinnakiri": "Cleaning and services pricelist",
      "Sisaldab 2x pigileotust koos pigi eemaldamisega auto kerelt ja uksevahedelt, survepesu, šhampoonipesu, velgede pesu happega (piduritolmu eemaldamine), uksevahede pesu ja kogu auto kuivatamist suruõhu ja kuivatuslapiga.":"Includes 2x tar removal, regular wash with shampoo, wheel cleaning with iron remover, doorsill cleaning and car drying",
      "NB! Täpne hind sõltub auto suurusest ja mustuse tasemest!": "NB! Final price of the service depends on the size and level of dirt on the car!",
      "Plastik ja vinüülpindade puhastamist aine ja suruõhuga, klaaside puhastust seest ja kogu autosalongi puhastamist tomuimejaga sh. pagasiruum":"Cleaning of plastic and vinyl surfaces with a substance and compressed air, cleaning of the windows from the inside and cleaning of the entire car interior with a vacuum cleaner incl. trunk",
      "Kogu auto salongi tekstiilpindade märgpesu, põrandate ja pagasiruumi märgpesu, laepolstri puhastust, kõikide plastik ja vinüülpindade põhjalikku puhastamist harja, aine ja suruõhuga, klaaside puhastamist seest.":"Wet cleaning of the textile surfaces of the entire car cabin, wet cleaning of the floors and trunk, cleaning of the ceiling upholstery, thorough cleaning of all plastic and vinyl surfaces with a brush, substance and compressed air, cleaning of the windows from the inside.",
      "Auto kuivatamine 12 h.": "Drying stage takes up to 12 hours",
      "Sisaldab pesu, pinna ettevalmistust, poleerimist erineva abrasiivsusega pastadega (ka. esi- ja tagatuled), värvile läike andmist, vahatamist kvaliteetse püsivahaga, kummi- ja plastikpindade töötlemist ja läigestamist.": "Includes washing, surface preparation, polishing with pastes of different abrasiveness (including front and rear lights), glossing the paint, waxing with high-quality permanent wax, treatment and polishing of rubber and plastic surfaces.",
      "Sisaldab pesu, pinna ettevalmistust, poleerimist erineva abrasiivsusega pastadega (ka. esi- ja tagatuled), värvile läike andmist, pinnatöötlemist keraamilise kaitsega, kummi- ja plastikpindade töötlemist ja läigestamist.":"Includes washing, surface preparation, polishing with pastes of different abrasiveness (including front and rear lights), glossing the paint, surface treatment with ceramic protection, treatment and polishing of rubber and plastic surfaces.",
      " Muude teenuste hinnapakkumise saamiseks palume saata hinnapäring info@orientdetailing.ee":"To receive a price quote for other services, please send a price request to info@orientdetailing.ee",
      


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
      "Oh ei": "Oh ei",
      "Otsisime igaltpoolt, aga seda lehte me ei leidnud":"Otsisime igaltpoolt, aga seda lehte me ei leidnud",
      "Tagasi":"Tagasi",
      "kodulehele":"kodulehele",
      "Broneerimine" :"Broneerimine",
      "broneerimine":"broneerimine",
      "Oleme avatud" :"Oleme avatud",
      "maa-alune parkla 0. korrus":"maa-alune parkla 0. korrus",
      "Salongi kuivpuhastus":"Salongi kuivpuhastus",
      "al" : "al",
      "Keraamiline kaitse":"Keraamiline kaitse",
      "Sisaldab 2x pigileotust koos pigi eemaldamisega auto kerelt ja uksevahedelt, survepesu, šhampoonipesu, velgede pesu happega (piduritolmu eemaldamine), uksevahede pesu ja kogu auto kuivatamist suruõhu ja kuivatuslapiga.":"Sisaldab 2x pigileotust koos pigi eemaldamisega auto kerelt ja uksevahedelt, survepesu, šhampoonipesu, velgede pesu happega (piduritolmu eemaldamine), uksevahede pesu ja kogu auto kuivatamist suruõhu ja kuivatuslapiga.",
      "NB! Täpne hind sõltub auto suurusest ja mustuse tasemest!":"NB! Täpne hind sõltub auto suurusest ja mustuse tasemest!",
      "Plastik ja vinüülpindade puhastamist aine ja suruõhuga, klaaside puhastust seest ja kogu autosalongi puhastamist tomuimejaga sh. pagasiruum":"Plastik ja vinüülpindade puhastamist aine ja suruõhuga, klaaside puhastust seest ja kogu autosalongi puhastamist tomuimejaga sh. pagasiruum",
      "Kogu auto salongi tekstiilpindade märgpesu, põrandate ja pagasiruumi märgpesu, laepolstri puhastust, kõikide plastik ja vinüülpindade põhjalikku puhastamist harja, aine ja suruõhuga, klaaside puhastamist seest.":"Kogu auto salongi tekstiilpindade märgpesu, põrandate ja pagasiruumi märgpesu, laepolstri puhastust, kõikide plastik ja vinüülpindade põhjalikku puhastamist harja, aine ja suruõhuga, klaaside puhastamist seest.",
      "Auto kuivatamine 12 h.":"Auto kuivatamine 12 h.",
      "Sisaldab pesu, pinna ettevalmistust, poleerimist erineva abrasiivsusega pastadega (ka. esi- ja tagatuled), värvile läike andmist, vahatamist kvaliteetse püsivahaga, kummi- ja plastikpindade töötlemist ja läigestamist.":"Sisaldab pesu, pinna ettevalmistust, poleerimist erineva abrasiivsusega pastadega (ka. esi- ja tagatuled), värvile läike andmist, vahatamist kvaliteetse püsivahaga, kummi- ja plastikpindade töötlemist ja läigestamist.",
      "Sisaldab pesu, pinna ettevalmistust, poleerimist erineva abrasiivsusega pastadega (ka. esi- ja tagatuled), värvile läike andmist, pinnatöötlemist keraamilise kaitsega, kummi- ja plastikpindade töötlemist ja läigestamist.":"Sisaldab pesu, pinna ettevalmistust, poleerimist erineva abrasiivsusega pastadega (ka. esi- ja tagatuled), värvile läike andmist, pinnatöötlemist keraamilise kaitsega, kummi- ja plastikpindade töötlemist ja läigestamist.",
      " Muude teenuste hinnapakkumise saamiseks palume saata hinnapäring info@orientdetailing.ee":" Muude teenuste hinnapakkumise saamiseks palume saata hinnapäring info@orientdetailing.ee",








      

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
