import React, { Component } from "react";
import { loadDetail } from "services/movies-series";
import { Banner, DescriptionItem } from "components";
import FavoritesManager from "utils/favorites";
import { List, Divider, Col, Row, Typography, Icon } from "antd";

const { Title } = Typography;
const pStyle = {
  fontSize: 16,
  color: "rgba(0,0,0,0.85)",
  lineHeight: "24px",
  display: "block",
  marginBottom: 16
};

class Detail extends Component {
  state = {
    isLoading: false,
    data: {},
    isFavorite: false
  };

  componentDidMount() {
    this.favoritesManager = new FavoritesManager();
    this.loadData();
  }

  loadData = async () => {
    const { id } = this.props.match.params;
    this.setState({ isLoading: true });
    const data = await loadDetail(id);

    this.setState({
      data,
      isLoading: false,
      isFavorite: this.favoritesManager.isFavorite(data.imdbID)
    });
  };

  toggleFavorite = () => {
    const { data } = this.state;
    if (this.favoritesManager.toggle(data.imdbID)) {
      this.setState({ isFavorite: !this.state.isFavorite });
    }
  };

  render() {
    const { data, isFavorite } = this.state;
    const banners = !!data.Poster ? [{ id: data.imdbID }] : [];
    return (
      <div>
        <Banner banners={banners} />
        <Divider />
        <Row type="flex">
          <Col xs={20}>
            <Title>{data.Title}</Title>
          </Col>
          <Col xs={4}>
            <Icon
              theme="filled"
              style={{ color: isFavorite ? "red" : "#ddd", fontSize: 30 }}
              type="heart"
              onClick={this.toggleFavorite}
            />
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <DescriptionItem title="Description" content={data.Plot} />
          </Col>
        </Row>
        <Row>
          <Col span={8}>
            <DescriptionItem title="Time" content={data.Runtime} />
          </Col>
          <Col span={8}>
            <DescriptionItem title="Rating" content={data.imdbRating} />
          </Col>
          <Col span={8}>
            <DescriptionItem title="Votes" content={data.imdbVotes} />
          </Col>
        </Row>
        <Row>
          <Col span={8}>
            <DescriptionItem title="Director" content={data.Director} />
          </Col>
          <Col span={8}>
            <DescriptionItem title="Writer" content={data.Writer} />
          </Col>
          <Col span={8}>
            <DescriptionItem
              title="Writer"
              content={<a href={data.Website}>{data.Website}</a>}
            />
          </Col>
        </Row>
        <Divider />
        <p style={pStyle}>Ratings</p>
        <Row>
          <Col span={24}>
            <List
              dataSource={data.Ratings || []}
              bordered
              renderItem={item => (
                <List.Item key={item.Source}>
                  <List.Item.Meta
                    title={item.Source}
                    description={item.Value}
                  />
                </List.Item>
              )}
            />
          </Col>
        </Row>
        <Divider />
        <p style={pStyle}>Cast</p>
        <Row>
          <Col span={24}>
            <DescriptionItem title="Actors" content={data.Actors} />
          </Col>
        </Row>
        <Divider />
        <p style={pStyle}>Events</p>
        <Row>
          <Col span={24}>
            <DescriptionItem title="Awards" content={data.Awards} />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Detail;

/**
 *  Open details from a specific movie or series;
    o Image or trailer as a banner;
    o Name movie or series;
    o Full Description;
    o Time;
    o Rating;
    o Cast (picture and name);
    o Trailers;
    o Top three reviews;
    o Add or Remove favorite.
 */
