import React from "react";
import { serviceData } from "../../api";
import TextYellow from "../ui/TextYellow/TextYellow";
import style from "./Service.module.scss";
import ServiceCard from "./ServiceCard/ServiceCard";

const Service = () => {
  return (
    <section className={style.service}>
      <div className={style.container}>
        <div className={style.service_blog}>
          <div className={style.service_left}>
            <div className={style.service_top}>
              <TextYellow title={"Service"} />
              <h3>we Providing Complete Professional IT Services.</h3>
              <p>
                Assertively streamline interactive interfaces after value a
                infrastructures. Authoritatively fabricate fully tested
                methodologies before Holistic deliver end-to-end architectures
                rather sound benefits.
              </p>
            </div>
            <ul>
              {serviceData?.map((item, index) => (
                <li key={index}>
                  <img src={item?.serviceImage} alt="" width={34} height={34} />
                  <div>
                    <h4>{item?.serviceTitle}</h4>
                    <p>{item?.serviceBody}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <ServiceCard />
        </div>
      </div>
    </section>
  );
};

export default Service;
