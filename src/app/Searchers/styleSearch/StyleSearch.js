import React from "react";
import { TagPicker, Tag, Icon } from "rsuite";
import { styles } from "./utils/Styles";

import "./_styleSearch.scss";
export const StyleSearch = () => {
  const stylesObj = styles;

  return (
    <section id="style-search">
      <TagPicker
        style={{ width: 500, height: 50 }}
        menuStyle={{ width: 500 }}
        appearance="subtle"
        data={styles}
        groupBy="role"
        placeholder="Select Style"
        block
        preventOverflow
        renderMenuItem={(label, item) => {
          return (
            <div>
              <i className="rs-icon rs-icon-user" /> {label}
            </div>
          );
        }}
        renderMenuGroup={(label, item) => {
          return (
            <div>
              <i className="rs-icon rs-icon-group" /> {label} - (
              {item.children.length})
            </div>
          );
        }}
        renderValue={(values, items, tags) => {
          return values.map((tag, index) => (
            <Tag key={index}>
              <Icon icon="user" /> {tag}
            </Tag>
          ));
        }}
      ></TagPicker>
    </section>
  );
};
