import React from "react";
import solutionsImage from "../../assets/images/solutions.png";
import style from "./Solutions.module.scss";
import SolutionsRight from "./SolutionsRight/SolutionsRight";

const Solutions = () => {
  return (
    <section className={style.solutions}>
      <div className={style.container}>
        <div className={style.solutions_container}>
          <div className={style.solutions_left}>
            <div className={style.solutions_left_color}></div>
            <img src={solutionsImage} alt="" />
          </div>
          <SolutionsRight />
        </div>
      </div>
    </section>
  );
};

export default Solutions;
