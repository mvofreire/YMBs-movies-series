import React from "react";
import Img from "react-image";
import { Spin } from "antd";

export const Image = props => <Img {...props} loader={<Spin size="small" />} />;
