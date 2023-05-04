import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Social = () => {
  return (
    <div className="home__social">
      <a
        data-aos="fade-right"
        href="https://www.instagram.com/nafeesrehman432/"
        target="_blank"
        className="home__social-icon"
      >
        <i class="uil uil-instagram"></i>
      </a>
      <a
        data-aos="fade-right"
        href="https://www.messenger.com/t/100035325437005"
        target="_blank"
        className="home__social-icon"
      >
        <i class="uil uil-facebook-messenger-alt"></i>
      </a>
      <a
        data-aos="fade-right"
        href="https://github.com/NafeesRehman57"
        target="_blank"
        className="home__social-icon"
      >
        <i class="uil uil-github-alt"></i>
      </a>
    </div>
  );
};

export default Social;
