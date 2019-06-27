import React from "react";
import { List, Avatar, Icon, Skeleton } from "antd";

export default function RenderItemList({
  item,
  onClickItem,
  toggleFavorite,
  isLoading
}) {
  return (
    <List.Item
      key={item.title}
      actions={[
        <Icon
          className="toggle-favorite"
          theme="filled"
          style={{ color: item.isFavorite ? "red" : "#ddd" }}
          onClick={_ => toggleFavorite(item.id)}
          type="heart"
        />
      ]}
    >
      <Skeleton loading={isLoading} avatar active>
        <List.Item.Meta
          avatar={<Avatar shape="square" size={64} src={item.poster} />}
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
          description={item.description}
        />
      </Skeleton>
    </List.Item>
  );
}
