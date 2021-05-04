import React from "react";
import {
  Form,
  FormGroup,
  FormControl,
  ControlLabel,
  ButtonToolbar,
  Button,
} from "rsuite";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMET,
  fetchArtInstituteChicago,
  saveKeywords,
  selectState,
} from "./ArtworkSearchSlice";
import { fetchCooperHewitt } from "../Museums/CooperHewitt";

export default function ArtworkSearch() {
  const state = useSelector(selectState);
  const dispatch = useDispatch();

  let keywords;

  const handleChange = (text) => {
    keywords = text.split(/\W/g);
    dispatch(saveKeywords(keywords));
  };

  const handleSubmit = () => {
    if (state.keywords.length !== 0 && state.keywords.length <= 5) {
      state.keywords.forEach((word) => {
        // dispatch(fetchMET(word));
        // dispatch(fetchArtInstituteChicago(word));
        dispatch(fetchCooperHewitt(word));
      });
    }
  };

  return (
    <Form>
      <FormGroup>
        <ControlLabel>Search for artwork</ControlLabel>
        <FormControl
          rows={5}
          name="textarea"
          componentClass="textarea"
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <ButtonToolbar>
          <Button appearance="primary" color="green" onClick={handleSubmit}>
            Submit
          </Button>
          <Button appearance="default" color="cyan">
            Clear
          </Button>
        </ButtonToolbar>
      </FormGroup>
    </Form>
  );
}
