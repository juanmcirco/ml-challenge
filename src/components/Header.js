import React from 'react'
import Searchbox from './Searchbox'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import Grid from '@material-ui/core/Grid';
import Link from 'next/link'

export default function Header() {
  const router = useRouter()
  const handleOptionSelected = (search) => {
    router.push(`/items/items?q=${search}`)
  }

  return (
    <Container>
      <Grid container spacing={3} xs={12} justify='center'>
        <Grid item xs={10}>
          <HeaderContainer>
            <SearchComponent>
              <Logo><Link href="/"><img src='https://http2.mlstatic.com/frontend-assets/ui-navigation/5.14.3/mercadolibre/logo__large_plus.png' height='34' width='134' /></Link></Logo>
              <Searchbox optionSelected={handleOptionSelected} />
            </SearchComponent>
          </HeaderContainer>
        </Grid>
      </Grid>
    </Container>
  )
}


const Container = styled.div` 
  max-width: 1200px;
  margin: auto;
`

const HeaderContainer = styled.div`
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  background-color: ${props => props.theme.meli.brandColor};
  display: flex;
  justify-content: center; 
  align-items: center;
  padding: 5px;
`
const SearchComponent = styled.div`
  width: 990px;
  @media (max-width: 600px) {
    width: auto;
  }
  margin: auto;
  display: flex;
`

const Logo = styled.div`
  margin: 0 16px;
  margin-left: -10px;
  display: flex;
  cursor: pointer;
  @media (max-width: 600px) {
    margin-right: 10px;
  }
`