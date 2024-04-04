import { Helmet } from "react-helmet-async";
import Localized from "./Localized";

const AboutPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About US</title>
      </Helmet>

      <div>
        <h1>Demo of i18n and l10n</h1>
        <Localized />
      </div>
    </>
  );
};

export default AboutPage;
