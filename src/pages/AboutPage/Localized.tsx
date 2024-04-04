import { useTranslation } from "react-i18next";

const Localized: React.FC = () => {
  const { t, i18n } = useTranslation();

  const handleChangeLanguage = (tagetLanguage: string) => {
    console.log(tagetLanguage);
    i18n.changeLanguage(tagetLanguage);
  };

  return (
    <div>
      <h2>You are seeing i18n and l10n here</h2>
      <p>The following text will appear in different languages</p>
      <hr />

      <h4>{t("welcome")}</h4>
      <h4>{t("intro")}</h4>

      <div>
        <button
          className="btn btn-warning"
          onClick={() => {
            handleChangeLanguage("en");
          }}
        >
          English
        </button>
        <br />
        <br />
        <button
          className="btn btn-warning"
          onClick={() => {
            handleChangeLanguage("fr");
          }}
        >
          French
        </button>
      </div>
    </div>
  );
};

export default Localized;
