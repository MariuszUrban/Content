import React from "react";
import { TagPicker, Tag, Icon } from "rsuite";
import { styles } from "./utils/Styles";

import "./_styleSearch.scss";
export const StyleSearch = () => {


  // pick up checkers
  


  return (
    <section id="style-search">
      <TagPicker
        style={{ width: 500 }}
        menuStyle={{ width: 500 }}
        data={styles}
        groupBy="role"
        placeholder="Select Style"
        block
        renderMenuItem={(label, item) => {
          return (
            <div>
              <i className="rs-icon rs-icon-bank " /> {label}
            </div>
          );
        }}
        renderMenuGroup={(label, item) => {
          return (
            <div>
              <i className="rs-icon rs-icon-book" /> {label} - (
              {item.children.length})
            </div>
          );
        }}
        renderValue={(values, items, tags) => {
          return values.map((tag, index) => (
            <Tag key={index}>
              <Icon icon="bank" /> {tag}
            </Tag>
          ));
        }}
      ></TagPicker>
    </section>
  );
};
