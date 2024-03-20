import MenuList from "./MenuList";

const Footer: React.FC = () => {
  const copyRightYear = new Date().getFullYear();
  const developerName = 'Mukesh';

  return (
    <footer className="text-center">
      <hr />
      <MenuList />
      <p>Copyright {copyRightYear} | {developerName}</p>
    </footer>
  );
};

export default Footer;
