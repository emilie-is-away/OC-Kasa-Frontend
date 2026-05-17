import logoFooter from "../images/KASA-LOGO-FOOTER.png";

export default function Footer() {
  return (
    <footer>
      <img src={logoFooter} alt="Logo Kasa" />
      <p className="copyright">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}