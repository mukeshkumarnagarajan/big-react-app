import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import { HelmetProvider } from "react-helmet-async";
import { CartProvider } from "./contexts/CartContext";
import MainRoutes from "./routes/MainRoutes";
import { AuthProvider } from "./contexts/AuthContext";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "./locales/en/translation.json";
import frTranslation from "./locales/fr/translation.json";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";

// Setting up i18n with translations
i18n
  // passing the react-i18next instance to i18n
  .use(initReactI18next)
  .use(I18nextBrowserLanguageDetector)
  // init i18next
  .init({
    resources: {
      // Let's support two languages: en, fr
      // loading the translation files
      en: { translation: enTranslation },
      fr: { translation: frTranslation },
    },
    fallbackLng: "en",
    debug: true,
    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
  });

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <HelmetProvider>
          <CartProvider>
            <Header />

            <main className="container mt-5 pt-2">
              <MainRoutes />
            </main>
          </CartProvider>
          <Footer />
        </HelmetProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
