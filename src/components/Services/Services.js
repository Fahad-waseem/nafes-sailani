import React, { useState } from "react";
import "./services.css";

const Services = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (i) => setToggleState(i);

  return (
    <section className="services section" id="services">
      <h2 className="section__title" data-aos="fade-up">
        Services
      </h2>
      <span
        className="section__subtitle"
        data-aos="fade-up"
        data-aos-delay="250"
      >
        What I offer
      </span>
      <div className="services__container container grid">
        <div
          className="services__content"
          data-aos="fade-left"
          data-aos-delay="250"
        >
          <div>
            <i className="uil uil-web-grid services__icon"></i>
            <h3 className="services__title">
              Product <br /> Designer
            </h3>
          </div>
          <span className="services__button" onClick={() => toggleTab(1)}>
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>
          <div
            className={
              toggleState === 1
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                className="uil uil-times services__modal-close"
                onClick={() => toggleTab(0)}
              ></i>
              <h3 className="services__modal-title">Product Designer</h3>
              <p className="services__modal-description">
                Service with one year of experience.Providing quality of work to
                client and companies.
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle srvices__modal-icon"></i>
                  <p className="services__modal-info">
                    Good design is obvious. Great design is transparent.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle srvices__modal-icon"></i>
                  <p className="services__modal-info">
                    Arranging elements in such a way as to best accomplish a
                    particular purpose.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle srvices__modal-icon"></i>
                  <p className="services__modal-info">
                    I create UX element interactions.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle srvices__modal-icon"></i>
                  <p className="services__modal-info">
                    I position your company brand.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle srvices__modal-icon"></i>
                  <p className="services__modal-info">
                    Design and mockups of products for companies.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div
          className="services__content"
          data-aos="fade-left"
          data-aos-delay="500"
        >
          <div>
            <i className="uil uil-arrow services__icon"></i>
            <h3 className="services__title">
              UI/UX <br /> Designer
            </h3>
          </div>
          <span className="services__button" onClick={() => toggleTab(2)}>
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>
          <div
            className={
              toggleState === 2
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                className="uil uil-times services__modal-close"
                onClick={() => toggleTab(0)}
              ></i>
              <h3 className="services__modal-title">UI/UX Designer</h3>
              <p className="services__modal-description">
                Service with one year of experience.Providing quality of work to
                client and companies.
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle srvices__modal-icon"></i>
                  <p className="services__modal-info">
                    I develop the user interface.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle srvices__modal-icon"></i>
                  <p className="services__modal-info">Web page development.</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle srvices__modal-icon"></i>
                  <p className="services__modal-info">
                    I create UX element interactions.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle srvices__modal-icon"></i>
                  <p className="services__modal-info">
                    I position your company brand.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle srvices__modal-icon"></i>
                  <p className="services__modal-info">
                    Design and mockups of products for companies.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div
          className="services__content"
          data-aos="fade-left"
          data-aos-delay="750"
        >
          <div>
            <i className="uil uil-edit services__icon"></i>
            <h3 className="services__title">
              visual <br /> Designer
            </h3>
          </div>
          <span className="services__button" onClick={() => toggleTab(3)}>
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>
          <div
            className={
              toggleState === 3
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                className="uil uil-times services__modal-close"
                onClick={() => toggleTab(0)}
              ></i>
              <h3 className="services__modal-title">Visual Designer</h3>
              <p className="services__modal-description">
                Service with one year of experience.Providing quality of work to
                client and companies.
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle srvices__modal-icon"></i>
                  <p className="services__modal-info">
                    Visual design is about problem solving, not about personal
                    preference.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle srvices__modal-icon"></i>
                  <p className="services__modal-info">
                    Like all forms, visual design is unsupported opinion.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle srvices__modal-icon"></i>
                  <p className="services__modal-info">
                    Good design is a language, not a style.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle srvices__modal-icon"></i>
                  <p className="services__modal-info">
                    I position your company brand.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle srvices__modal-icon"></i>
                  <p className="services__modal-info">
                    Design and mockups of products for companies.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
