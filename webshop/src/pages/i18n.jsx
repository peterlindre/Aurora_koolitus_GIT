import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      "Sort A-Z": "Sort A-Z",
      "Sort Z-A": "Sort Z-A",
      "Price acending": "Price ascending",
      "Price descending": "Price descending",
      "Rating ascending": "Rating ascending",
      "Rating descending": "Rating descending",
      "Select Category": "Select Category",
      "Men's clothing" :"Men's clothing",
      "Women's clothing" :"Women's clothing",
      "Jewelery" : "Jewelery",
      "Electronics" : "Electronics",
      "Inspect" : "Inspect",
      "Add to cart" : "Add to cart",
      "Homepage" : "Homepage",
      "Shops" : "Shops",
      "Contact" : "Contact",
      "Cart" : "Cart",
      "Add product" : "Add product",
      "Maintain products" : "Maintain products",
      "Maintain categories" : "Maintain categories",
      "Maintain shops" : "Maintain shops", 
      "Supplier" : "Supplier", 
      "Electricity" : "Electricity", 
      "Name" : "Name",
      "Message" : "Message",
      "Send" : "Send", 
      "Cart is empty" : "Cart is empty",
      "Go back to" : "Go back to",
      "homepage" : "homepage",
      "Items in cart" : "Items in cart",
      "pcs" : "pcs",
      "Clear all" : "Clear all", 
      "Product name" : "Product name",
      "Image" : "Image",
      "Description" : "Description", 
      "Price" : "Price", 
      "Rating" : "Rating", 
      "Category" : "Category", 
      "Add" : "Add", 
      "Picture" : "Picture", 
      "Change" : "Change",

   
    }
  },
  et: {
    translation: {
      "Sort A-Z": "Sorteeri A-Z",
      "Sort Z-A": "Sorteeri Z-A",
      "Price ascending": "Hinna järgi kasvavalt",
      "Price descending": "Hinna järgi kahanevalt",
      "Rating ascending": "Reiting kavavalt",
      "Rating descending": "Reiting kahanevalt",
      "Select Category": "Rohkem valikuid",
      "Men's clothing" : "Meeste riided",
      "Women's clothing" : "Naiste riided",
      "Jewelery" : "Ehted",
      "Electronics" : "Elektroonika",
      "Inspect" : "Vt lähemalt",
      "Add to cart" : "Lisa ostukorvi",
      "Homepage" : "Avaleht",
      "Shops" : "Kauplused",
      "Contact": "Kontaktid",
      "Cart" : "Ostukorv",
      "Add product" : "Lisa tooteid",
      "Maintain products" : "Halda tooteid",
      "Maintain categories" : "Halda kategooriaid", 
      "Maintain shops" : "Halda kaupluseid", 
      "Supplier" : "Tarnija", 
      "Electricity" : "Elekter",
      "Name" : "Nimi",
      "Message" : "Sõnum",
      "Send" : "Saada",
      "Cart is empty" : "Ostukorv on tühi",
      "Go back to" : "Mine tagasi",
      "homepage" : "avalehele",
      "Items in cart" : "Tooteid ostukorvis",
      "pcs" : "tk", 
      "Clear all" : "Tühjenda ostukorv",
      "Product name" : "Toote nimi",
      "Image" : "Toote pilt",
      "Description" : "Toote kirjeldus",
      "Price" : "Hind",
      "Rating" : "Reiting", 
      "Category" : "Kategooria", 
      "Add" : "Lisa",
      "Picture" : "Pilt",
      "Change" : "Muuda",
      
      

     

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
