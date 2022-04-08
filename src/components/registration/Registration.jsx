import React from "react";
import "./Registration.css";
import { Input, Tooltip, Space, Button } from "antd";
import {
  InfoCircleOutlined,
  UserOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
} from "@ant-design/icons";

const Registration = () => {
  return (
    <div className="reg">
      <div>
        <Input
          placeholder="Enter your username"
          prefix={<UserOutlined className="site-form-item-icon" />}
          suffix={
            <Tooltip title="Соблюдайте верхний регистр CamelCase">
              <InfoCircleOutlined style={{ color: "rgba(0,0,0,.45)" }} />
            </Tooltip>
          }
        />

        <div>
          {" "}
          <Space direction="vertical" className="pass">
            <Input.Password
              placeholder="Password"
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
            />
          </Space>
        </div>
        <div>
          <Button type="dashed" danger>
            Dashed
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Registration;
