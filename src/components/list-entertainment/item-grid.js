import React from "react";
import { List, Icon, Card, Skeleton } from "antd";
import { Image } from "components";

export default function RenderItemGrid({
  item,
  onClickItem,
  toggleFavorite,
  isLoading
}) {
  return (
    <List.Item>
      <Skeleton key={item.title} loading={isLoading} avatar active>
        <Card
          hoverable
          cover={<Image height="280px" src={item.poster} />}
          actions={[
            <Icon
              className="toggle-favorite"
              theme="filled"
              style={{ color: item.isFavorite ? "red" : "#ddd" }}
              type="heart"
              onClick={_ => toggleFavorite(item.id)}
            />,
            <Icon theme="filled" type="eye" onClick={_ => onClickItem(item)} />
          ]}
        >
          <Card.Meta
            title={
              <a className="item-title" onClick={_ => onClickItem(item)}>
                {item.title}
                {item.inTheather && (
                  <Icon
                    style={{ marginLeft: 5 }}
                    type="check-circle"
                    theme="twoTone"
                    twoToneColor="#52c41a"
                  />
                )}
              </a>
            }
          />
        </Card>
      </Skeleton>
    </List.Item>
  );
}
