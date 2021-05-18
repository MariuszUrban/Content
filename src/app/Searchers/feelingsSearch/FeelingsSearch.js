import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  saveFeelingsToArray,
  removeFeelingsFromArray,
  updateCheckedItems,
  removeCheckedItems,
  selectState,
} from "./FeelingsSearchSlice";
import {
  FlexboxGrid,
  Checkbox,
  CheckboxGroup,
  Button,
  ButtonGroup,
} from "rsuite";
import { getRandom } from "../../helpers/Random";
import { chunk } from "../../helpers/Chunk";
import { colors } from "./utils/Colors";
import { feelings } from "./utils/Feelings";
import {
  fetchRijksmuseum,
  fetchMET,
  fetchCooperHewitt,
  fetchArtInstituteChicago,
} from "../../Museums/index";
import _, { forEach } from "lodash";
import "./_feelingsSearch.scss";

let combinedFeelings = [];

Object.values(colors).forEach((color) => combinedFeelings.push(...color));
feelings.forEach((el) => combinedFeelings.push(_.toLower(el)));
const random = getRandom(combinedFeelings, 16);
const checkboxGroup = random.map((element) => {
  return {
    name: element,
    key: element,
    label: element,
  };
});

const chunked = chunk(checkboxGroup, 4);

export const FeelingsSearch = () => {
  const state = useSelector(selectState);
  const { selected_feelings, checked_items } = state;
  console.log("🚀 ~ FeelingsSearch ~ selected_feelings", selected_feelings);

  const dispatch = useDispatch();

  const handleChange = (e, formKey) => {
    console.log("🚀 ~ handleChange ~ formKey", formKey);
    const input = document.getElementsByName(e);
    const { name, checked } = input[0];
    const updatedCheckedItems = { ...checked_items, [name]: checked };

    if (formKey && !selected_feelings.includes(name)) {
      dispatch(saveFeelingsToArray(name));
      dispatch(updateCheckedItems(updatedCheckedItems));
    }
    if (!formKey) {
      dispatch(removeFeelingsFromArray(name));
      dispatch(removeCheckedItems(name));
    }
  };

  const handleClick = () => {
    if (selected_feelings.length !== 0 && selected_feelings.length <= 5) {
      selected_feelings.forEach((word) => {
        dispatch(fetchArtInstituteChicago(word));
        dispatch(fetchCooperHewitt(word));
        dispatch(fetchRijksmuseum(word));
        dispatch(fetchMET(word));
      });
    }
  };

  const checkedValues = { ...checked_items };
  const checkedCount = Object.values(checkedValues).filter(
    (value) => value
  ).length;

  return (
    <section id="feelings-search">
      <div className="show-flexbox">
        <FlexboxGrid justify="space-around">
          {chunked.map((row, index) => {
            return (
              <CheckboxGroup>
                {row.map(({ key, name }, index) => {
                  return (
                    <FlexboxGrid.Item colspan={8}>
                      <Checkbox
                        label={key}
                        key={key}
                        name={name}
                        value={name}
                        disabled={!checkedValues[name] && checkedCount >= 5}
                        onChange={handleChange}
                      >
                        {name}
                      </Checkbox>
                    </FlexboxGrid.Item>
                  );
                })}
              </CheckboxGroup>
            );
          })}
        </FlexboxGrid>
      </div>
      <ButtonGroup>
        <Button onClick={handleClick} disabled={checkedCount <= 0}>
          Check for artworks
        </Button>
        <Button onClick={handleClick} disabled={checkedCount <= 0}>
          Clear
        </Button>
      </ButtonGroup>
    </section>
  );
};

export default React.memo(FeelingsSearch);
