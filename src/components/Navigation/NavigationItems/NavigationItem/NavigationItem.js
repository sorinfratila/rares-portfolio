import React from "react";
import PropTypes from "prop-types";
import * as classes from "./NavigationItem.module.scss";
import { Link } from "gatsby";
import "../../../../App.scss";

function NavigationItem(props) {
  const { link, children, show, clicked } = props;
  const classesArr = [classes.NavigationItem];

  if (show) {
    classesArr.push(classes.On);
  }

  const delay = func => {
    // delay function used to toggle list item classes to obtain fade out effect
    // when closing the menu by selecting another route
    const index = classesArr.findIndex((el) => el.includes('On'))
    const element = classesArr[index];
    classesArr.splice(index,1);

    return setTimeout(() => {
      classesArr.push(element);
      return func.apply(null);
    }, 350);
  };

  return (
    <li className={classesArr.join(" ")}>
      <Link
        onClick={() => clicked()}
        activeStyle={{
          color: "#6d6d6d",
          transition: "color, 350ms, ease-in-out"
        }}
        to={`/${link}`}>
        {children}
      </Link>
    </li>
  );
}

NavigationItem.propTypes = {
  link: PropTypes.string,
  children: PropTypes.any,
  show: PropTypes.bool,
  clicked: PropTypes.func
};

export default NavigationItem;
