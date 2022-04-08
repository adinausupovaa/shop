import React, { useContext, useEffect, useState } from "react";
import "./NavBar.css";
import makeup from "../img/makeup_logo.png";
import { UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar">
      <img src={makeup} width={200} alt="" />
      <div>
        <Link to="/">Главная </Link>
      </div>

      <div>
        <Link to="/about">О нас</Link>
      </div>
      <div>
        <Link to="/pay">Оплата и доставка</Link>
      </div>
      <div>
        <Link to="/admin">Админ</Link>
      </div>
      <div>
        <Link to="/registration">
          <UserOutlined />
          Войти
        </Link>
      </div>

      <hr />
    </div>
  );
};

export default NavBar;
