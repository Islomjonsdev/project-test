import React from "react";
import Text from "../ui/Text/Text";
import style from "./Aboutus.module.scss";
import imageOne from "../../assets/images/imageone.png";
import imageTwo from "../../assets/images/imagetwo.png";
import AboutRight from "./AboutRight/AboutRight";

const Aboutus = () => {
  return (
    <section className={style.abount_us}>
      <div className={style.container}>
        <div className={style.abount_us_top}>
          <Text title={"About us"} />
          <h3>
            Our Company Specialize In IT Solutions & Technology with Passion
          </h3>
          <p>
            Assertively streamline interactive interfaces after value-added
            infrastructures. Authoritatively fabricate fully tested
            methodologies before. Holistic deliver end-to-end architectures
            rather than economically sound benefits. Progressively simplify
            end-to-end paradigms. Assertively streamline interactive interfaces
            after value-added infrastructure.
          </p>
        </div>

        <div className={style.abount_us_wrapper}>
          <div className={style.abount_us_left}>
            <div className={style.abount_us_blog}>
              <img src={imageOne} alt="" width={242} height={392} />
              <div className={style.abount_us_left_item}>
                <span>12+</span>
                <p>Years Experience</p>
              </div>
            </div>
            <img src={imageTwo} alt="" width={317} height={533}/>
          </div>
          <AboutRight />
        </div>
      </div>
    </section>
  );
};

export default Aboutus;
