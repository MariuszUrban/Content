import React from "react";
import { ButtonGroup, Button, TagPicker } from "rsuite";
import { useDispatch, useSelector } from "react-redux";
import { saveStylesToArray, selectState } from "./StyleSearchSlice";
import { createArrayForKeyword } from "../../Results/ResultsSlice";

import {
  fetchRijksmuseum,
  fetchMET,
  fetchCooperHewitt,
  fetchArtInstituteChicago,
} from "../../Museums/index";
import { styles } from "./utils/Styles";
import "./_styleSearch.scss";
const StyleSearch = () => {
  const state = useSelector(selectState);
  const dispatch = useDispatch();
  const { selected_styles } = state;

  const handleChange = (e) => {
    dispatch(saveStylesToArray(e));
  };

  const handleSearch = () => {
    if (selected_styles.length !== 0 && selected_styles.length <= 5) {
      selected_styles.forEach((word) => {
        dispatch(createArrayForKeyword(word));
        dispatch(fetchArtInstituteChicago(word));
        dispatch(fetchCooperHewitt(word));
        dispatch(fetchRijksmuseum(word));
        dispatch(fetchMET(word));
      });
    }
  };

  const filterStyles = () => {
    const filtered = styles.map((element) => {
      return element.label;
    });
    if (selected_styles == null) {
      return [];
    } else if (selected_styles != null && selected_styles.length > 0) {
      let diff = filtered.filter((x) => !selected_styles.includes(x));
      return diff;
    }
  };

  const checkedValues = { ...selected_styles };
  const checkedCount = Object.values(checkedValues).filter(
    (value) => value
  ).length;
  const filteredStyles = filterStyles();

  return (
    <section id="style-search">
      <TagPicker
        creatable
        data={styles}
        style={{ width: 300 }}
        menuStyle={{ width: 300 }}
        groupBy="role"
        placeholder="Select Style"
        onChange={handleChange}
        disabledItemValues={checkedCount >= 5 ? filteredStyles : null}
        renderMenuGroup={(label, item) => {
          return (
            <div>
              <i className="rs-icon rs-icon-bank" /> {label} - (
              {item.children.length})
            </div>
          );
        }}
        renderMenuItem={(label, item) => {
          return (
            <div>
              <i className="rs-icon rs-icon-image" /> {label}
            </div>
          );
        }}
      />
      <ButtonGroup>
        <Button onClick={handleSearch} disabled={checkedCount <= 0}>
          Search
        </Button>
      </ButtonGroup>
    </section>
  );
};

export default StyleSearch;
