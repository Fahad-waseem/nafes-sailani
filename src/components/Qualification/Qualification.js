import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (i) => setToggleState(i);
  return (
    <section className="qualification section">
      <h2 className="section__title" data-aos="fade-up">
        Qualification
      </h2>
      <span
        className="section__subtitle"
        data-aos="fade-up"
        data-aos-delay="250"
      >
        My personal journey
      </span>
      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>
          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>
        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content "
            }
          >
            <div className="qualification__data">
              <div data-aos="fade-right">
                <h3 className="qualification__title">
                  Web & Mobile App development
                </h3>
                <span className="qualification__subtitle">SMIT</span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i> 2020 - 2021
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div data-aos="fade-left" data-aos-delay="250">
                <h3 className="qualification__title">Bachelor in English</h3>
                <span className="qualification__subtitle">GCUF</span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i> 2020 - Present
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div data-aos="fade-right" data-aos-delay="500">
                <h3 className="qualification__title">Inter</h3>
                <span className="qualification__subtitle">
                  Government Post Graduate College Samundri
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i> 2018 - 2020
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div data-aos="fade-left" data-aos-delay="750">
                <h3 className="qualification__title">Matriculation</h3>
                <span className="qualification__subtitle">
                  Govt. High School N0. 1 Samundri
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i> 2017
                </div>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content "
            }
          >
            <div className="qualification__data">
              <div data-aos="fade-right">
                <h3 className="qualification__title">Frontend Developer</h3>
                <span className="qualification__subtitle">SMIT</span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i> 2020 - present
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div data-aos="fade-left" data-aos-delay="250">
                <h3 className="qualification__title">UI/UX Designer</h3>
                <span className="qualification__subtitle">Personal</span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i> 2020 - Present
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div data-aos="fade-right" data-aos-delay="500">
                <h3 className="qualification__title">Web Designer</h3>
                <span className="qualification__subtitle">Figma</span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i> 2020 - 2021
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
