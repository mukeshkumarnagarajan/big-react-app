import { Helmet, HelmetProvider } from "react-helmet-async";

const AboutPage: React.FC = () => {
  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>About US</title>
        </Helmet>
      </HelmetProvider>
    </div>
  );
};

export default AboutPage;
