import React from "react";
import { Drawer, Row, Col, Icon } from "antd";
import { DescriptionItem } from "components";
const pStyle = {
  fontSize: 16,
  color: "rgba(0,0,0,0.85)",
  lineHeight: "24px",
  display: "block",
  marginBottom: 16
};

export default function ViewDetail({
  item,
  visible,
  onClose,
  onToggleFavorite
}) {
  return (
    <Drawer
      width={640}
      placement="right"
      closable={false}
      onClose={onClose}
      visible={visible}
    >
      {visible && (
        <React.Fragment>
          <p style={{ ...pStyle, marginBottom: 24 }}>Details</p>
          <Row>
            <Col span={12}>
              <DescriptionItem title="Name" content={item.title} />
            </Col>
            <Col span={6}>
              <DescriptionItem title="Time" content={item.time} />
            </Col>
            <Col span={6}>
              <Icon
                theme="filled"
                style={{ color: item.isFavorite ? "red" : "#ddd" }}
                onClick={onToggleFavorite}
                type="heart"
              />
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <DescriptionItem title="Description" content={item.description} />
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <DescriptionItem title="Rating" content={item.rating} />
            </Col>
          </Row>
        </React.Fragment>
      )}
    </Drawer>
  );
}
