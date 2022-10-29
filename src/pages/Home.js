import "../css/main.scss";
import AppFeatures from '../component/app_features';
import Slider from '../component/slider';

export default function Home() {
  return (
    <>
      <section id="banner" className="py-5 py-sm-70">
          <div className="container">
            <div className="row">
              <div className="col-lg-7">
                <div className="left">
                  <h3>#1 Editiors Choice App of 2020</h3>
                  <h1 className="mb-4">Best app for your modern lifestyle</h1>
                  <p className="mb-5">Increase productivity with a simple to-do app. app for
  managing your personal budgets.</p>
                  <div className="btn-group d-flex align-items-center">
                    <a href="/" className="btn-1 me-4">Try for free</a>
                    <a href="/">Watch demo video</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="right">
                  <img src="./images/banner-image.png" alt="Banner Mobile" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="hm-trusted">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 d-flex justify-content-center">
                <h2 className="mb-4">Trusted by companies like</h2>
              </div>
            </div>
            <div className="row">
              <Slider />
            </div>
          </div>
        </section>

        <section id="app-features" className="py-5 py-sm-70">
          <div className="container">
            <div className="row">
              <div className="col-lg-7">
                <div className="left">
                  <img src="./images/app-features.png" alt="" />
                </div>
              </div>
              <div className="col-lg-5">
                <div className="right pt-4">
                  <AppFeatures />
                </div>
              </div>
            </div>
          </div>
        </section>
    </>
  );
}