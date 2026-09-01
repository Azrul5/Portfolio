function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div>

          <a
            href="#home"
            className="footer-logo"
          >
            AZRUL<span>.</span>
          </a>

          <p>
            Junior Web Developer
          </p>

        </div>

        <p className="copyright">
          © {new Date().getFullYear()}
          {" "}
          Muhammad Azrul Din Isnari.
        </p>

        <a
          href="#home"
          className="back-top"
        >
          Back to top ↑
        </a>

      </div>

    </footer>
  );
}

export default Footer;