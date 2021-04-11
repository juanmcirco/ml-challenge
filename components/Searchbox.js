import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete/Autocomplete';
import styled from 'styled-components'
import { useCookies } from "react-cookie";

export default function Searchbox({ optionSelected }) {
    const [open, setOpen] = useState(false);
    const [options, setOptions] = useState([]);
    const loading = open && options.length === 0;
    const [cookies, setCookie] = useCookies(["LastSearch"]);

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
        if (e.target.value && e.target.value !== "") {
            const { data } = await axios(`/api/autosuggest?q=${e.target.value}`)
            const autosuggest = await data.suggestions;
            setOptions(autosuggest.map((key) => { return { name: key.q } }));
        }
    }

    const goToProduct = (e) => {
        optionSelected(e)
        setCookie("LastSearch", e);
    }

    useEffect(() => {
        if (!open) {
            setOptions([]);
        }
    }, [open]);

    return (
        <AutocompleteWrapper
            id="autocomplete"
            open={open}
            onOpen={() => {
                setOpen(true);
            }}
            onClose={() => {
                setOpen(false);
            }}
            getOptionSelected={(option, value) => {
                goToProduct(option.name)
                return option.name === value.name
            }}
            getOptionLabel={(option) => option.name}
            onInputChange={handleChange}
            options={options}
            loading={loading}
            loadingText={'Cargando'}
            popupIcon={null}
            renderInput={(params) => (
                <div ref={params.InputProps.ref}>
                    <InputWrapper type="text" {...params.inputProps} />
                </div>
            )}
        />

    );
}

const InputWrapper = styled.input`
    padding: 7px 60px 9px 15px;
    -webkit-border-radius: 2px;
    border-radius: 2px;
    background-color: #fff;
    border: 0 rgba(0,0,0,.2);
    margin: 0 30px;
    display: flex;
    flex-grow: 1;
`

const AutocompleteWrapper = styled(Autocomplete)`
    display: flex;
    flex-grow: 1;
    div{
        display: flex;
        flex-grow: 1;
    }
`