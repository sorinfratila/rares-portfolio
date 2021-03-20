import React from 'react';
import PropTypes from 'prop-types';
import Backdrop from '../../UI/Backdrop/Backdrop';
import * as classes from './Menu.module.scss';
import NavigationItems from '../NavigationItems/NavigationItems';

function Menu({ clicked, show, menuList, isMain, backdropClicked }) {
  const classesArr = isMain ? [classes.MenuItems] : [classes.MenuItemsLeft];
  if (show) classesArr.push(classes.Shown);

  return (
    <>
      <Backdrop show={show} clicked={backdropClicked}></Backdrop>
      <div className={classesArr.join(' ')}>
        <NavigationItems
          items={menuList}
          clicked={clicked}
          show={show}></NavigationItems>
      </div>
    </>
  );
}

Menu.propTypes = {
  clicked: PropTypes.func,
  show: PropTypes.bool,
  linkClicked: PropTypes.func,
  menuList: PropTypes.array,
  isMain: PropTypes.bool,
  backdropClicked: PropTypes.func,
};

export default Menu;
