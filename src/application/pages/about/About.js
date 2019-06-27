import React from "react";
import { Row, Col } from "antd";
import { DescriptionItem } from "components";

export default _ => (
  <React.Fragment>
    <Row type="flex">
      <Col xs={24}>
        <DescriptionItem
          title="Author"
          content="Marcus Vinícius Ostrufka Freire"
        />
      </Col>
    </Row>
    <Row type="flex">
      <Col xs={24}>
        <DescriptionItem
          title="Why i need to use YBMs"
          content="Marcus Vinícius Ostrufka Freire"
        />
      </Col>
    </Row>
    <Row type="flex">
      <Col xs={24}>
        <DescriptionItem
          title="How skilled you are as a frontend."
          content="Marcus Vinícius Ostrufka Freire"
        />
      </Col>
    </Row>
    <Row type="flex">
      <Col xs={24}>
        <DescriptionItem
          title="Challenges"
          content="Normalize and Use tow Context's API with same components"
        />
      </Col>
    </Row>
  </React.Fragment>
);
