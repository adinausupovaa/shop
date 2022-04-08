import { Carousel } from "antd";
import React from "react";
import "./Header.css";
import video1 from "../Video/video1.mp4";
import video2 from "../Video/video2.mp4";
import ProductCart from "../Product/ProductCart";

const Header = () => {
  const contentStyle = {
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#ffffff",
    display: "flex",
    justifyContent: "center",
    width: "100%",
    height: "530px",
  };
  return (
    <div className="main">
      <Carousel className="corusel" autoplay>
        <div>
          <video
            className="vid1"
            style={contentStyle}
            src={video1}
            type="video"
            autoPlay
            muted
            loop
          ></video>

          <h1 className="text_h1">
            Kérastase Chroma Absolu:
            <span className="text">
              откройте для себя новую гамму для окрашенных волос
            </span>
          </h1>
        </div>

        <div>
          <video
            style={contentStyle}
            src={video2}
            type="video"
            autoPlay
            muted
            loop
          ></video>
          <h3 className="text3">
            Профессиональная косметика более насыщенна активными компонентами
          </h3>
        </div>

        <div>
          <img
            className="corusela"
            src="https://krasavolos.by/upload/iblock/a92/xbly2sp0fkuc3w4d0ex84d2dx4d6xhjl.jpg"
            alt=""
          />
          <h3 className="texth3">
            Новинка! Расширение гаммы Spécifique{" "}
            <span> для жирной кожи головы и чувствительных по длине волос</span>
          </h3>
        </div>
        <div>
          <img
            className="corusela"
            src="https://krasavolos.by/upload/iblock/a1d/0t3f885m3hb7qaglp2ud9w9jdkv2fz0l.jpg"
            alt=""
          />
          <h2 className="text_h1">
            Curl Manifesto:{" "}
            <span className="text">
              Настало время влюбиться в естественную красоту волос!
            </span>
          </h2>
        </div>

        <div>
          <img
            className="corusel2"
            src="https://krasavolos.by/upload/iblock/1cc/1cc953df929de6237c0f51df87eb33c8.jpg"
            alt=""
          />
          <h2 className="text_h1">
            Лучшее для Ваших волос:{" "}
            <span className="text">
              закажите сейчас средства для волос REDKEN с доставкой
            </span>
          </h2>
        </div>

        <div>
          <img
            className="corusel2"
            src="https://krasavolos.by/upload/iblock/cd8/cd83b9a0afee164176931662f82957ab.jpg"
            alt=""
          />
          <h2 className="text_h1">
            Лучшая продукция:{" "}
            <span className="text">
              закажите сейчас современные профессиональные приборы, для волос
              REDKEN
            </span>
          </h2>
        </div>

        <div>
          <img
            className="corusel2"
            src=" https://krasavolos.by/upload/iblock/e4b/e4bdd0e75e83d858f126fcecad20acc6.png"
            alt=""
          />
          <h2 className="text_h1">
            Joico K-PAK:{" "}
            <span className="text">
              ПРОФЕССИОНАЛЬНАЯ СИСТЕМА РЕКОНСТРУКЦИИ СТРУКТУРЫ ВОЛОС
            </span>
          </h2>
        </div>

        <div>
          <img
            className="corusel2 img"
            src=" 	https://imgcdn.zarina.ru/upload/iblock/ed5/ed5004f06039f03c57d498cdecd88cf1.jpg"
            alt=""
          />
          <button className="btn">
            <a
              href="https://t.me/zarina_brand"
              target="_blank"
              rel="noopener noreferrer"
            >
              Подписаться
            </a>
          </button>
        </div>

        <div>
          <img
            className="corusel2"
            src="  https://imgcdn.zarina.ru/upload/iblock/5cb/5cb011d514117d977112be39a4e3925d.jpg"
            alt=""
          />
          <h2 className="text_h1">
            ESTEL K-PAK:{" "}
            <span className="text">
              ПРОФЕССИОНАЛЬНАЯ СИСТЕМА РЕКОНСТРУКЦИИ СТРУКТУРЫ ВОЛОС
            </span>
          </h2>
        </div>
      </Carousel>
      <div className="brands">
        <h1 className="text2">
          ТОЛЬКО ОРИГИНАЛЬНАЯ ПРОДУКЦИЯ <br /> ОТ ЛУЧШИХ БРЕНДОВ
        </h1>

        <div className="brands1">
          <div className="images">
            <img
              className="img2"
              src="https://krasavolos.by/upload/resize_cache/iblock/18f/340_230_1/10kjmur511d299x1ox6rg8kdkf5sqb1c.jpg"
              alt=""
              width=""
            />
          </div>

          <div className="images">
            <img
              className="img2"
              src="https://krasavolos.by/upload/resize_cache/iblock/690/340_230_1/bscnq2yzc2k8yu027i3yec4bd2vtpch8.jpg"
              alt=""
            />
          </div>
          <div className="images">
            <img
              className="img2"
              src="https://krasavolos.by/upload/resize_cache/iblock/240/340_230_1/240ed8b7fe7e8ecaffe8c75967541815.jpg"
              alt=""
            />
          </div>

          <div className="images">
            <img
              className="img2"
              src="https://krasavolos.by/upload/resize_cache/iblock/349/340_230_1/kmdzxz4j2rvjaoyjlshkaovkpyu64a3m.jpg"
              alt=""
            />
          </div>
          <div className="images">
            <img
              className="img2"
              src="	https://krasavolos.by/upload/resize_cache/iblock/d4c/340_230_1/d4c2eb7a9e90076967ecd64885b81bca.jpg"
              alt=""
            />
          </div>

          <div className="images">
            <img
              className="img2"
              src="	https://krasavolos.by/upload/resize_cache/iblock/ddb/340_230_1/oug7xu6fh8ij2syw228hny0ecw5xpjxx.jpg"
              alt=""
            />
          </div>

          <div className="images">
            <img
              className="img2"
              src="https://krasavolos.by/upload/resize_cache/iblock/55d/340_230_1/3a5e9k57hb6poibg3d2wlv50kko4b6f4.jpg"
              alt=""
            />
          </div>
          <div className="images">
            <img
              className="img2"
              src="	https://krasavolos.by/upload/resize_cache/iblock/bdc/340_230_1/bdccef5c126d3d5836e154922621c5b7.jpg"
              alt=""
            />
          </div>
          <div className="images">
            <img
              className="img2"
              src="	https://krasavolos.by/upload/resize_cache/iblock/d9b/340_230_1/0smtwywut26a1q59ai38rydz37ixb3x9.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      {/* Partners */}
      <div className="partners">
        <img
          className="partners"
          src="https://krasavolos.by/upload/resize_cache/iblock/443/140_140_1/443a3da5cbe62ddf902237e8bbfdef90.jpg"
          alt=" PartnersPartners"
        />
        <img
          className="partners"
          src="https://krasavolos.by/upload/resize_cache/iblock/3a2/140_140_1/3a29a7fe1a614922964dea855d548418.jpg"
          alt=" Partners"
        />
        <img
          className="partners"
          src="https://krasavolos.by/upload/resize_cache/iblock/0b1/140_140_1/0b1348e5062ab11144b92f74cfe5554f.jpg"
          alt=" Partners"
        />
        <img
          className="partners"
          src="https://krasavolos.by/upload/resize_cache/iblock/5c8/140_140_1/5c8186fa2ecc73d7d4461335997396b1.jpg"
          alt=" Partners"
        />
        <img
          className="partners"
          src="https://krasavolos.by/upload/resize_cache/iblock/3ee/140_140_1/3ee0028957c4c9c88d6614fe0ac9597f.jpg"
          alt=" Partners"
        />
        <img
          className="partners"
          src="https://krasavolos.by/upload/resize_cache/iblock/750/140_140_1/75079af05bf17e96facc8a5b0cdcaa2c.jpg"
          alt=" Partners"
        />
        <img
          className="partners"
          src="https://krasavolos.by/upload/resize_cache/iblock/512/140_140_1/512170cbfb19c6a1677d55854a2df1ce.jpg"
          alt=" Partners"
        />
      </div>
      <ProductCart />
    </div>
  );
};

export default Header;
