import Brand from "./Brand";
import FootPinch from "./FootPinch";

const Footer = () => (
  <footer className="pt-10 bg-white dark:bg-gray-900 dark:text-white">
    <div className="md:flex md:flex-row md:items-center md:justify-center max-w-screen-xl mx-auto p-5">
      <Brand />
      <div className="capitalize grid justify-items-center ml-auto p-3 gap-1 xxs:grid-cols-1 xs:grid-cols-2 md:grid-cols-3">
        <FootPinch label="contributors" href="/contributors" />
        <FootPinch label="contact" href="/info/#contact" />
        <FootPinch label="about" href="/info/#about" />
        <FootPinch label="privacy policy" href="/info/#privacy" />
        <FootPinch label="terms & conditions" href="/info/#terms" />
      </div>
    </div>
  </footer>
);
export default Footer;
