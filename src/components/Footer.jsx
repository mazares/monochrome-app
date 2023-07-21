export default function Footer(params) {
  return (
    <div className="footer">
      <section className="footer-container container">
        <section className="footer-contact">
          <ul>
            <li>
              <a href="tel:+44 (0)10 2345 6789" title="  CALL US">
                CALL US
              </a>
            </li>
            <li>
              <a>
                <i href="tel:+44 (0)10 2345 6789" title="  CALL US">
                  1-977-666-1840
                </i>
              </a>
            </li>
            <li>
              <a
                href="mailto:customercare@monochrome.com"
                title="EMAIL CUSTOMER CARE"
              >
                email customer care
              </a>
            </li>
            <li>
              <a
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
                title="see mobile version"
              >
                see mobile version
              </a>
            </li>
          </ul>
        </section>

        <section className="footer-nav-style">
          <nav>
            <ul>
              <li>
                <a href="" title="STYLE & FIT ADVICE">
                  STYLE & FIT ADVICE
                </a>
              </li>
              <li>
                <a href="" title="FAQS">
                  FAQS
                </a>
              </li>
              <li>
                <a href="" title="DELIVERY">
                  DELIVERY
                </a>
              </li>
              <li>
                <a href="" title="EXCHANGES & RETURNS">
                  EXCHANGES & RETURNS
                </a>
              </li>
            </ul>
          </nav>
        </section>

        <section className="footer-nav-about-us">
          <nav>
            <ul>
              <li>
                <a href="" title="ABOUT US">
                  ABOUT US
                </a>
              </li>
              <li>
                <a href="" title="CAREERS">
                  CAREERS
                </a>
              </li>
              <li>
                <a href="" title="AFFILIATES">
                  AFFILIATES
                </a>
              </li>
              <li>
                <a href="" title="ADVERTISING">
                  ADVERTISING
                </a>
              </li>
            </ul>
          </nav>
        </section>

        <div className="footer-newsletter-and-social">
          <section className="footer-sign-up-newsletter">
            <form action="" method="post">
              <label htmlFor="email-newsletter">
                sign up for our newsletter
              </label>
              <input type="email" name="email" id="email-newsletter" />
              <button type="submit">SUMBIT</button>
            </form>
          </section>

          <section className="footer-social">
            <ul>
              <li>
                <a
                  href="http://"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="youtube"
                >
                  <i className="fab fa-youtube"></i>
                </a>
              </li>

              <li>
                <a
                  href="http://"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Twitter"
                >
                  {" "}
                  <i className="fab fa-twitter"></i>
                </a>
              </li>

              <li>
                <a
                  href="http://"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Facebook"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>

              <li>
                <a
                  href="http://"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Instagram"
                >
                  {" "}
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </section>
        </div>
      </section>
    </div>
  );
}
