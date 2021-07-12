import React from "react";
import {
  Form,
  FormGroup,
  ButtonToolbar,
  Button,
  InputGroup,
  Input,
  Icon,
} from "rsuite";
import { Link, useRouteMatch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { saveKeywords, selectState } from "./TextSearchSlice";
import { createArrayForKeyword } from "../../Results/ResultsSlice";
import {
  fetchRijksmuseum,
  fetchMET,
  fetchCooperHewitt,
  fetchArtInstituteChicago,
} from "../../Museums/index";
import "./_textSearch.scss";

const CustomInputGroupWidthButton = ({
  onClick,
  onChange,
  placeholder,
  ...props
}) => (
  <InputGroup
    classPrefix="input-group search-by-keyword-input"
    {...props}
    inside
  >
    <Input onChange={onChange} placeholder={placeholder} />
    <InputGroup.Button onClick={onClick}>
      <Icon icon="search" size="x2" />
    </InputGroup.Button>
  </InputGroup>
);

export default function ArtworkSearch({ setPending }) {
  const state = useSelector(selectState);
  const { keywords } = state;
  const dispatch = useDispatch();
  let { url } = useRouteMatch();

  const handleChange = (text) => {
    dispatch(saveKeywords(text.split(/\W/g)));
  };

  const handleSubmit = () => {
    if (keywords.length !== 0 && keywords.length <= 5) {
      setPending();
      keywords.forEach((word) => {
        dispatch(createArrayForKeyword(word));
        dispatch(fetchArtInstituteChicago(word));
        dispatch(fetchCooperHewitt(word));
        dispatch(fetchRijksmuseum(word));
        dispatch(fetchMET(word));
      });
    }
  };

  return (
    <Form classPrefix="rs-form search-by-keyword-form">
      <FormGroup classPrefix="rs-form-group searchy-by-keyword-input-wrapper">
        <CustomInputGroupWidthButton
          size="lg"
          placeholder="Search"
          onChange={handleChange}
          onClick={handleSubmit}
        />
      </FormGroup>
      <FormGroup>
        <ButtonToolbar>
          <Link to={`${url}/results`}>
            <Button
              disabled={keywords.length <= 0}
              classPrefix="btn-ready"
              appearance="primary"
              color="green"
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </Link>

          <Button
            disabled={keywords.length <= 0}
            classPrefix="btn-ready clear"
            appearance="default"
            color="cyan"
          >
            Clear
          </Button>
        </ButtonToolbar>
      </FormGroup>
    </Form>
  );
}
