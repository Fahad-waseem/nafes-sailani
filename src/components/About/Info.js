import React from "react";

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box" data-aos="fade-down" data-aos-delay="250">
        <i class="bx bx-award about__icon"></i>
        <h3 className="about-title">Experience</h3>
        <span className="about__subtitle">1 year of working</span>
      </div>
      <div className="about__box" data-aos="fade-down" data-aos-delay="500">
        <i class="bx bx-briefcase-alt about__icon"></i>
        <h3 className="about-title">Completed</h3>
        <span className="about__subtitle">10 + Projects</span>
      </div>
      <div className="about__box" data-aos="fade-down" data-aos-delay="1000">
        <i class="bx bx-support about__icon"></i>
        <h3 className="about-title">Support</h3>
        <span className="about__subtitle">Online 24/7</span>
      </div>
    </div>
  );
};

export default Info;
