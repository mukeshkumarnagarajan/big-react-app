import MenuList from "./MenuList";

const Footer: React.FC = () => {
  const copyrightYear = new Date().getFullYear();
  const developerName = "Mukeshkumar Nagarajan";

  return (
    <footer className="text-center">
      <hr />
      <MenuList />
      <p>
        Copyright {copyrightYear} | {developerName}
      </p>
    </footer>
  );
};

export default Footer;
