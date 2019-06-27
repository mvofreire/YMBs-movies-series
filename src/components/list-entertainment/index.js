import React, { Fragment, useContext } from "react";
import {
  List,
  Divider,
  Row,
  Col,
  Radio,
  Checkbox,
  Typography,
  Icon
} from "antd";

import { TYPES, VIEW_MODES } from "contexts/app";
import ListItem from "./item-list";
import GridItem from "./item-grid";
import ViewDetails from "./ViewDetail";
const { Title } = Typography;

export const ListEntertainment = ({
  data,
  viewType,
  viewMode,
  orderByRelease,
  changeViewMode,
  changeOrder,
  changeType,
  itemDetail,
  visibleDetail,
  closeDetails,
  toggleDetailFavorite,
  onClickItem,
  toggleFavorite,
  isLoading
}) => {
  const _isGrid = VIEW_MODES.GRID === viewMode;

  return (
    <Fragment>
      <Row type="flex" justify="center" align="middle">
        <Col xs={24} md={16}>
          <Row type="flex" justify="center" align="middle">
            <Col xs={24} md={10}>
              <Title>{viewType === TYPES.MOVIE ? "Movies" : "Tv Series"}</Title>
            </Col>
            <Col xs={8} md={4}>
              <Radio.Group
                size="small"
                defaultValue={TYPES.MOVIE}
                onChange={d => changeType(d.target.value)}
                buttonStyle="solid"
              >
                <Radio.Button value={TYPES.MOVIE}>Movies</Radio.Button>
                <Radio.Button value={TYPES.SERIE}>Series</Radio.Button>
              </Radio.Group>
            </Col>
            <Col xs={8} md={7}>
              <Checkbox
                checked={orderByRelease}
                onChange={_ => changeOrder(!orderByRelease)}
              >
                Order by Release Date
              </Checkbox>
            </Col>
            <Col xs={8} md={3} justify="end">
              <Radio.Group
                size="small"
                defaultValue={VIEW_MODES.LIST}
                onChange={d => changeViewMode(d.target.value)}
                buttonStyle="solid"
              >
                <Radio.Button value={VIEW_MODES.LIST}>
                  <Icon type="unordered-list" />
                </Radio.Button>
                <Radio.Button value={VIEW_MODES.GRID}>
                  <Icon type="appstore" />
                </Radio.Button>
              </Radio.Group>
            </Col>
          </Row>
        </Col>
      </Row>
      <Divider />
      <Row type="flex" justify="center" align="middle">
        <Col xs={24} md={16}>
          <List
            grid={_isGrid ? { gutter: 32, column: 3 } : null}
            dataSource={data}
            pagination={{
              pageSize: 6
            }}
            renderItem={item =>
              _isGrid ? (
                <GridItem
                  item={item}
                  onClickItem={onClickItem}
                  toggleFavorite={toggleFavorite}
                  isLoading={isLoading}
                />
              ) : (
                <ListItem
                  item={item}
                  onClickItem={onClickItem}
                  toggleFavorite={toggleFavorite}
                  isLoading={isLoading}
                />
              )
            }
          />
        </Col>
      </Row>
      <ViewDetails
        item={itemDetail}
        visible={visibleDetail}
        onClose={closeDetails}
        onToggleFavorite={toggleDetailFavorite}
      />
    </Fragment>
  );
};
