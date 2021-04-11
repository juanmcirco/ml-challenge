import React from 'react'
import Searchbox from './Searchbox'
import { useRouter } from 'next/router'
import styled from 'styled-components'

export default function Header() {
    const router = useRouter()
    const handleOptionSelected = (search) => {
        router.push(`/items/items?q=${search}`)
    }

    return (
        <HeaderContainer>
            <SearchComponent>
                <img src='https://http2.mlstatic.com/frontend-assets/ui-navigation/5.14.3/mercadolibre/logo__large_plus.png' height='34' width='134' />
                <Searchbox optionSelected={handleOptionSelected} />
            </SearchComponent>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.div`
    position: fixed;
    width: 100%;
    left: 0;
    top: 0;
    background-color: #fff159;
    display: flex;
    justify-content: center; 
    align-items: center;
    padding: 5px;
`
const SearchComponent = styled.div`
    width: 1000px;
    margin: auto;
    display: flex;
`