import React from "react";
import { persentage } from "../../api";
import style from "./Persentage.module.scss";

const Persentage = () => {
  return (
    <section className={style.persentage}>
      <div className={style.container}>
        <ul>
          {persentage?.map((item, index) => (
            <li key={index}>
              <div>
                <span>{item?.number}</span>
                <p>{item?.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Persentage;
