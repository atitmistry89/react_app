import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF,faTwitter, faSlack, faGithub } from '@fortawesome/free-brands-svg-icons'

function Footer() {
    return (
      <footer className="py-5 py-sm-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="logo mb-4 mb-sm-5">
                <a href="/react_app/"><img src="./images/logo.png" alt="Logo" /></a>
              </div>
              <nav>
                  <ul className="mb-4 mb-sm-5">
                      <li><a href="javascript:void(0)">Home</a></li>
                      <li><a href="javascript:void(0)">Key Features</a></li>
                      <li><a href="javascript:void(0)">Pricing</a></li>
                      <li><a href="javascript:void(0)">Testimonial</a></li>
                      <li><a href="javascript:void(0)">FAQ</a></li>
                  </ul>
              </nav>
              <ul className="social mb-4 mb-sm-90 d-flex justify-content-center">
                <li><a href="javascript:void(0)"><FontAwesomeIcon icon={faFacebookF} /></a></li>
                <li><a href="javascript:void(0)"><FontAwesomeIcon icon={faTwitter} /></a></li>
                <li><a href="javascript:void(0)"><FontAwesomeIcon icon={faSlack} /></a></li>
                <li><a href="javascript:void(0)"><FontAwesomeIcon icon={faGithub} /></a></li>
              </ul>
              <div className="copy">
                <p>Copyright © React App Landing 2022. All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;