import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useCookies } from "react-cookie";
import SearchIcon from '@material-ui/icons/Search';
import { useRouter } from 'next/router'

export default function Searchbox({ optionSelected }) {
  const router = useRouter()

  const { q, category } = router.query
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState([]);
  const loading = !open && options.length === 0;
  const [cookies, setCookie] = useCookies();
  const [value, setValue] = useState(cookies.LastSearch || null)
  const [visible, setVisible] = useState(false)


  useEffect(() => {
    const lastSearch = q || category;
    setCookie("LastSearch", lastSearch || '');
    setValue(lastSearch)
  }, [router]);

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
          <InputWrapper type="text" placeholder="Nunca dejes de buscar" autoComplete={false} onChange={handleChange} style={{ paddingLeft: 10 }} defaultValue={value} value={value} onClick={() => { setVisible(true) }} />
          <Search><Lupita onClick={onSubmit} /></Search>
        </InputContainer>
      </Form>
    </SearchBoxContainer>
  );
}

/**
 * Protypes
 */

Searchbox.propTypes = {
  optionSelected: PropTypes.func
}

/**
 * Styles
 */

const InputWrapper = styled.input`
  padding: 7px 60px 9px 15px;
  -webkit-border-radius: 2px;
  border-radius: 2px;
  background-color: ${props => props.theme.meli.white};
  border: 0 rgba(0,0,0,.2);
  flex: 1;
  :focus {
    outline: -webkit-focus-ring-color auto 0px !important;
  }
  @media (max-width: 600px) {
    padding:0
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
  background: ${props => props.theme.meli.white};
  color: ${props => props.theme.meli.veryDarkGray};
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
  color: ${props => props.theme.meli.veryDarkGray};
  font-size: 16px;
  :hover{
    color: ${props => props.theme.meli.white};
    background-color:  ${props => props.theme.meli.brightBlue};
  }
`

const Search = styled.div`
  width:34px;
  height: 34px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color:  ${props => props.theme.meli.white};
  box-sizing: border-box;
  cursor: pointer;
  ::before{
    content: '';
    display: block;
    width:34px;
    height: 34px;
    border-left: 1px solid ${props => props.theme.meli.veryLightGray};
    position: absolute;
    top: 6.5px;
  }
  @media (max-width: 600px) {
    margin-right: 10px;
  }
`

const Lupita = styled(SearchIcon)`
  font: 300 13.3333px Arial;
  color:  ${props => props.theme.meli.gray};
`
const InputContainer = styled.div`
  display: flex;
  flex-grow: 1;
`