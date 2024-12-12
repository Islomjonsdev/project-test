import React from "react";
import { useState } from "react";
import { companyData } from "../../../api";
import Text from "../../ui/Text/Text";
import { FaAngleDown } from "react-icons/fa6";
import { HiOutlineChevronUp } from "react-icons/hi";
import topIcon from "../../../assets/svg/top.svg";
import bottomIcon from "../../../assets/svg/bottom.svg";
import "./SolutionsRight.scss";

const SolutionsRight = () => {
  const [collapse, setCollapse] = useState(false);
  const onToggle = (i) => {
    if (collapse === i) {
      return setCollapse(true);
    } else {
      setCollapse(i);
    }
  };
  return (
    <div className="solution_right">
      <div className="solution_right_top">
        <Text title={"Why choose us"} />
        <h4>Proven Expertise in Complex IT Solutions</h4>
        <p>
          Assertively streamline interactive interfaces after value-added
          infrastructures. Authoritatively fabricate fully tested methodologies
          before. Holistic deliver end-to-end architectures rather than
          economically sound benefits. Progressively simplify end-to-end
          paradigms. Assertively streamline interactive interfaces after
          value-added infrastructure.
        </p>
      </div>

      <ul className="solution_right_list">
        {companyData?.map((item, i) => (
          <li key={i} onClick={() => onToggle(i)}>
            <div>
              <h5>{item?.companyTitle}</h5>
              {collapse === i ? (
                <img src={topIcon} alt="" />
              ) : (
                <img src={bottomIcon} alt="" />
              )}
            </div>
            <div className={collapse === i ? "showBody show" : "showBody"}>
              <p>{item?.companyBody}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SolutionsRight;
