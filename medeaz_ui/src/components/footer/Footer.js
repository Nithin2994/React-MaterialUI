import RightMenuComponent from "../RightMenuComponent";
import FooterComponent from "./FooterComponent";
import FooterMenuComponent from "./FooterMenuComponent";
import FooterTopComponent from "./FooterTopComponent";

function Footer() {
  return (
    <div>
      <FooterTopComponent />
      <FooterMenuComponent />
      <FooterComponent />
      <RightMenuComponent />
    </div>
  );
}

export default Footer;
