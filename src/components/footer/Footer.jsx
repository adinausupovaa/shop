import { InstagramOutlined } from "@ant-design/icons";
import React from "react";
import "./Footer.css";
import telegram from "../img/telegram.svg";
import instagram from "../img/instagram.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        ИНФОРМАЦИЯ
        <div>
          <ul>
            <li>О магазине</li>
            <li>Оплата и доставка</li>
            <li>Контакты</li>
          </ul>
        </div>
        <div>
          МЫ В СОЦ.СЕТЯХ
          <div className="social">
            <a
              target={"_blank"}
              href="https://www.instagram.com/03__0990__/?utm_medium=copy_link"
            >
              <img src={instagram} alt="" />
            </a>
            <a target={"_blank"} href="https://web.telegram.org/z/#1711146091">
              <img width="47px" src={telegram} alt="icons" />
            </a>
          </div>
          <div className=".footer_text">
            Copyright 2022 Make up for ever.Все права защищены. <br /> ИП
            Усупова Адина.Адрес: г.БИШКЕК, УЛ.ТАБЫШАЛИЕВА 29
          </div>
        </div>
      </div>

      <div>
        КОНТАКТЫ
        <ul>
          <li>+996709061862</li>
          <li>E-mail:adinausupova66@gmail.com</li>
        </ul>
        <div> ПОДПИСКА</div>
        <input className="inputGmail" type="text" placeholder=" Ваш Еmail" />
        {""}
        <button className="btnGo"> Go </button>
      </div>
      <div>
        РАБОТАЕМ БЕЗ ВЫХОДНЫХ
        <ul>
          <li>10:00-20:00</li>
          <li>ЗАКАЗЫ С САЙТА ПРИНИМАЮТСЯ КРУГЛОСУТОЧНО!</li>
        </ul>
      </div>
      {/* <div>Copyright 2022 Make up for ever.Все права защищены.</div> */}
    </div>
  );
};

export default Footer;
