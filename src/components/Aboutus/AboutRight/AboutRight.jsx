import React from "react";
import { aboutus } from "../../../api";
import Button from "../../ui/Button/Button";
import style from "./AboutRight.module.scss";

const AboutRight = () => {
  return (
    <div className={style.about_right}>
      <ul className={style.about_right_list}>
        {aboutus?.map((item, index) => (
          <li key={index}>
            <h5>{item?.aboutTitle}</h5>
            <p>{item?.aboutBody}</p>
          </li>
        ))}
      </ul>
      <Button title={"More about us"}/>
    </div>
  );
};

export default AboutRight;
