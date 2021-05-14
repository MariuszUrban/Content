import React from "react";
import { saveFeelings } from "./FeelingsSearchSlice";
import { FlexboxGrid, Checkbox, CheckboxGroup, Button } from "rsuite";
import { getRandom } from "../helpers/Random";
import { chunk } from "../helpers/Chunk";
import { colors } from "./utils/Colors";
import { feelings } from "./utils/Feelings";
import _ from "lodash";
import "./_feelingsPicker.scss";

export const FeelingsSearchDry = ({ dispatch }) => {
  let combinedFeelings = [];

  feelings.forEach((feeling) => {
    combinedFeelings.push(_.lowerCase(feeling));
  });

  for (const [_, value] of Object.entries(colors)) {
    combinedFeelings.push(...value);
  }

  const randomFeelings = getRandom(combinedFeelings, 24);
  const chunks = chunk(randomFeelings, 6);

  const handleCheck = (e) => {
    dispatch(saveFeelings(e));
  };

  return (
    <section id="feelings-picker">
      <div className="show-flexbox">
        <FlexboxGrid justify="space-around">
          {chunks.map((arr, index = 0) => {
            return (
              <CheckboxGroup name={`group-${index}`}>
                {arr.map((el) => {
                  return (
                    <FlexboxGrid.Item colspan={8}>
                      <Checkbox value={el} onChange={handleCheck}>
                        {el}
                      </Checkbox>
                    </FlexboxGrid.Item>
                  );
                })}
              </CheckboxGroup>
            );
          })}
        </FlexboxGrid>
      </div>
      <Button>Check for artworks</Button>
    </section>
  );
};
const FeelingsSearch = React.memo(FeelingsSearchDry);
export default FeelingsSearch;
