import React from "react";
import { Link } from "react-router-dom";
import { serviceCard } from "../../../api";
import style from "./ServiceCard.module.scss";

const ServiceCard = () => {
  return (
    <ul className={style.card}>
      {serviceCard?.map((item, index) => (
        <li key={index}>
          <img src={item?.serImage} alt="" />
          <div>
            <h5>{item?.title}</h5>
            <p>{item?.text}</p>
          </div>
          <Link>Learn more</Link>
        </li>
      ))}
    </ul>
  );
};

export default ServiceCard;
