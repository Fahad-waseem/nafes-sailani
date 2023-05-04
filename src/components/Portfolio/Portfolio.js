import React, { useState } from "react";
import "./portfolio.css";
import Menu from "./Menu";

const Portfolio = () => {
  const [items, setItems] = useState(Menu);
  const [active, setActive] = useState("#all");

  const filterItem = (categoryItem) => {
    const updateItems = Menu.filter((curElem) => {
      return curElem.category === categoryItem;
    });

    setItems(updateItems);
  };

  return (
    <section className="work container section" id="portfolio">
      <h2 className="section__title" data-aos="fade-up">
        Portfolio
      </h2>
      <span
        className="section__subtitle"
        data-aos="fade-up"
        data-aos-delay="250"
      >
        My Recent Work
      </span>
      <div className="work__filters">
        <span
          id="all"
          className={
            active === "#all" ? "work__item work__item-active" : "work__item"
          }
          onClick={() => {
            setItems(Menu);
            setActive("#all");
          }}
        >
          All
        </span>
        <span
          id="js"
          className={
            active === "#js" ? "work__item work__item-active" : "work__item"
          }
          onClick={() => {
            filterItem("JS");
            setActive("#js");
          }}
        >
          JS
        </span>
        <span
          id="react"
          className={
            active === "#react" ? "work__item work__item-active" : "work__item"
          }
          onClick={() => {
            filterItem("React");
            setActive("#react");
          }}
        >
          React
        </span>
        <span
          id="fullStack"
          className={
            active === "#fullStack"
              ? "work__item work__item-active"
              : "work__item"
          }
          onClick={() => {
            filterItem("Full Stack");
            setActive("#fullStack");
          }}
        >
          Full Stack
        </span>
        <span
          id="design"
          className={
            active === "#design" ? "work__item work__item-active" : "work__item"
          }
          onClick={() => {
            filterItem("Design");
            setActive("#design");
          }}
        >
          Design
        </span>
      </div>
      <div className="work__container grid">
        {items.map((elem) => {
          const { id, image, title, category, link } = elem;
          return (
            <div className="work__card" key={id} data-aos="zoom-in">
              <div className="work__thumbnail">
                <img src={image} alt="image" className="work__img" />
                <div className="work__mask"></div>
              </div>
              <span className="work__category">{category}</span>
              <h3 className="work__title">{title}</h3>
              <a href={link} target="_blank" className="work__button">
                <i className="uil uil-link work__button-icon"></i>
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
