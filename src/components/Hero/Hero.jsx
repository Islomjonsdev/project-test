import React from "react";
import { Link } from "react-router-dom";
import Button from "../ui/Button/Button";
import style from "./Hero.module.scss";
import playIcon from "../../assets/svg/play.svg";
import Text from "../ui/Text/Text";
import heroImage from "../../assets/images/hero.png";
import imageCard from "../../assets/images/pimage.png"

const Hero = () => {
  return (
    <section className={style.hero}>
      <div className={style.container}>
        <div className={style.hero_container}>
          <div className={style.hero_left}>
              <Text className={style.text} title={"WELCOME TO Ztech!"}/>
            <p className={style.desc}>We Are Ready<span>To Provide </span>It Solution</p>
            <p>
              Assertively streamline interactive interfaces after value
              infrastructures. untorn datively fabricate fully tested
              methodologies before Assertively streamline interactive interfaces
              after infrastructures. We are 100+ professional software .
            </p>
            <div>
              <Button title={"Explore services"} />
              <Link to={"/"}>
                <img src={playIcon} alt="" />
                Watch A Video
              </Link>
            </div>
          </div>

          <div className={style.hero_right}>
              <img className={style.hero_img} src={heroImage} alt="" />
              <img className={style.image_card} src={imageCard} alt="" />
              <div>
                  <span>2000+</span>
                  <p>Happy Clients</p>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
