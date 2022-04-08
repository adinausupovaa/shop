import React, { useContext, useEffect, useState } from "react";
import { productsContext } from "../../context/ProductContext";
import "./ProductCart.css";
import "../NavBar/NavBar.css";
import { Modal, Button } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import makeup from "../img/makeup_logo.png";
import { UserOutlined } from "@ant-design/icons";
import { Link, useSearchParams, useNavigate } from "react-router-dom";
import { Input, Pagination } from "antd";

const { Search } = Input;

const ProductCart = () => {
  const { products, getProducts, clickDelete } = useContext(productsContext);
  const [searchParams, setSearchParams] = useSearchParams("");
  const [search, setSearch] = useState(
    searchParams.get("q") ? searchParams.get("q") : ""
  );
  const [page, setPage] = useState(
    searchParams.get("_page") ? searchParams.get("_page") : 1
  );
  const [limit, setLimit] = useState(6);

  useEffect(() => {
    setSearchParams({
      q: search,
      _page: page,
      _limit: limit,
    });
  }, [search, page, limit]);

  useEffect(() => {
    getProducts();
  }, [searchParams]);

  const navigate = useNavigate();

  useEffect(() => {
    getProducts();
  }, []);
  const { confirm } = Modal;
  function showDeleteConfirm(id) {
    confirm({
      title: "Вы точно хотите удалить продукт?",
      icon: <ExclamationCircleOutlined />,
      content: "Удаление возврату не подлежит",
      okText: "Удалить",
      okType: "danger",
      cancelText: "Отмена",
      onOk() {
        clickDelete(id);
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  }

  return (
    <div className="container">
      <div className="h1">
        <h1>Каталог товаров</h1>
        <div>
          <Search
            type="text"
            placeholder="Search Name"
            enterButton
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="container_product">
        {products.map((item) => (
          <div className="add_product" key={item.id}>
            <img
              className="product"
              src={item.image}
              alt="img"
              width="230px"
              height="220px"
            />
            <h1>{item.name}</h1>
            <hr />
            <h2>{item.price}</h2>
            <hr />
            <span className="span">
              <b>{item.description}</b>
            </span>
            <br />
            <Button
              className="btn btn_delete"
              onClick={() => showDeleteConfirm(item.id)}
            >
              Delete
            </Button>
            <Button
              className="btn btn_Edit"
              type="primary"
              onClick={() => navigate(`/edit/${item.id}`)}
            >
              Edit
            </Button>
          </div>
        ))}
      </div>
      <Pagination
        style={{ margin: "50px 0px", textAligin: "center" }}
        defaultCurrent={1}
        total={50}
        current={+page}
        pageSize={+limit}
        onChange={(page, limit) => {
          setPage(page);
          setLimit(limit);
        }}
      />
    </div>
  );
};

export default ProductCart;
