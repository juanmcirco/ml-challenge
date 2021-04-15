import React from 'react'
import styled from 'styled-components'
import Grid from '@material-ui/core/Grid';
import Header from '../components/Header'
const results = () => {
  return (
    <Container>
      <Header />
      <Grid container spacing={3} xs={12} justify='center'>
        <Grid item xs={10}>
          <Bievenidos>
            <h1>
              ¡Bienvenidos al Challenge de Meli! 💪
            </h1>
            <p>
              ¡Muchas gracias!
            </p>
          </Bievenidos>
        </Grid>
      </Grid>
    </Container>
  )
}

const Container = styled.div`
  max-width: 1200px;
  margin: auto;
`
const Bievenidos = styled.div`
  text-align: center;
`

export default results