import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Autocomplete from '@material-ui/lab/Autocomplete/Autocomplete';
import styled from 'styled-components'
import { useCookies } from "react-cookie";
import SearchIcon from '@material-ui/icons/Search';

export default function Searchbox({ optionSelected }) {
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState([]);
  const loading = open && options.length === 0;
  const [cookies, setCookie] = useCookies();
  const [value, setValue] = useState(cookies.LastSearch || null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }
    (async () => {
      const { data } = await axios(`/api/autosuggest?q=${cookies.LastSearch}`)
      const autosuggest = await data.suggestions;

      if (active) {
        setOptions(autosuggest.map((key) => { return { name: key.q } }));

      }
    })();

    return () => {
      active = false;
    };
  }, [loading]);

  const handleChange = async (e) => {
    setVisible(true)
    setValue(e.target.value)
    if (e.target.value && e.target.value !== "") {
      const { data } = await axios(`/api/autosuggest?q=${e.target.value}`)
      const autosuggest = await data.suggestions;
      setOptions(autosuggest.map((key) => { return { name: key.q } }));
    }
  }

  const goToProduct = (e) => {
    const valueSelected = e.currentTarget.innerHTML
    setValue(valueSelected)
    optionSelected(valueSelected)
    setCookie("LastSearch", valueSelected);
    setVisible(false)
  }

  const onSubmit = (e) => {
    e.preventDefault();
    const valueSelected = value
    setValue(valueSelected)
    optionSelected(valueSelected)
    setCookie("LastSearch", valueSelected);
    setVisible(false)
  }

  useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  return (
    <SearchBoxContainer>
      <Form onSubmit={onSubmit} >
        {options.length >= 1 && visible &&
          <SuggestionContainer onBlur={() => { debugger }}>
            <SuggestionList>
              {options.map((value, idx) => <Suggestion onClick={goToProduct} key={`id_${idx}`} tabIndex={idx} >{value.name}</Suggestion>)}
            </SuggestionList>
          </SuggestionContainer>
        }
        <InputContainer>
          <InputWrapper type="text" placeholder="Nunca dejes de buscar" onChange={handleChange} style={{ paddingLeft: 10 }} defaultValue={value} value={value} onClick={() => { setVisible(true) }} />
          <Search><Lupita onClick={onSubmit} /></Search>
        </InputContainer>
      </Form>
    </SearchBoxContainer>
  );
}

const InputWrapper = styled.input`
  padding: 7px 60px 9px 15px;
  -webkit-border-radius: 2px;
  border-radius: 2px;
  background-color: #fff;
  border: 0 rgba(0,0,0,.2);
  flex: 1;
  //margin: 0 30px;
  :focus {
    outline: -webkit-focus-ring-color auto 0px !important;
  }
`

const SearchBoxContainer = styled.div`
  position: relative;
  display: flex;
  flex-grow: 1;
`

const Form = styled.form`
  display: flex;
  flex-grow: 1;
`

const SuggestionContainer = styled.div`
  display: flex; 
  flex-grow: 1;
  width: 100%;
  flex-direction: column;
  position: absolute;
  top: 36px;
  left: 0;
  background: white;
  color: #333;
  font-size: 16px;
`
const SuggestionList = styled.ul`
  margin: 0;
  padding: 0;
`

const Suggestion = styled.li`
  padding: 8px;
  display: flex; 
  flex-grow: 1;
  border: rgba(0,0,0,.2);
  color: #333;
  font-size: 16px;
  :hover{
    color: white;
    background-color: #3483FA;
  }
`

const Search = styled.div`
  width:34px;
  height: 34px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  box-sizing: border-box;
  cursor: pointer;
  ::before{
    content: '';
    display: block;
    width:34px;
     height: 34px;
    border-left: 1px solid #e6e6e6;
    position: absolute;
    top: 6.5px;
  }
`

const Lupita = styled(SearchIcon)`
  font: 300 13.3333px Arial;
  color: #999;
`
const InputContainer = styled.div`
  display: flex;
  flex-grow: 1;
`