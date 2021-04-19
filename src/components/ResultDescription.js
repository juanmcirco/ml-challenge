import React from 'react';

import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import NumberFormat from 'react-number-format';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import { condition } from '../constants/contants'
import Button from '@material-ui/core/Button';

export default function ResultDescription({ item }) {
  return (
    <Container>
      <Grid container spacing={3} xs={12} justify='center'>
        <Grid item xs={10}>
          <CardContainer>
            <Details >
              <Cover
                image={item.picture}
                title={item.title}
              />
              <Content>
                <Info>{condition[item.condition]} - {item.sold_quantity} vendidos </Info>
                <Title>{item.title}</Title>
                <Price
                  value={item.price.amount}
                  displayType={'text'}
                  thousandSeparator={'.'}
                  decimalSeparator={','}
                  thousandsGroupStyle='thousand'
                  prefix={item.price.currency === 'ARS' ? '$ ' : 'U$S '}
                />
                <ButtonContainer>
                  <ButtonWapper variant="contained" color="#3483FA">Comprar</ButtonWapper>
                </ButtonContainer>
              </Content>
            </Details>
            <Description >
              <DescriptionTitle>Descripción del producto</DescriptionTitle>
              <DescriptionP>{item.description}</DescriptionP>
            </Description>
          </CardContainer>
        </Grid>
      </Grid>
    </Container >
  );
}

/**
* Protypes
*/

ResultDescription.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string,
    picture: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.shape({
      amount: PropTypes.string,
      currency: PropTypes.string
    }),
    state: PropTypes.string,
  })
}

/**
 * Styles
 */

const Container = styled.div` 
  max-width: 1200px;
  margin: auto;
`

const CardContainer = styled(Card)`
  display: block;
  width: 886;
  min-height: 886;
  margin: auto;
  border-bottom: thin solid #eee;
  border-radius: 0
`

const Details = styled.div`
  display: flex;
`

const Cover = styled(CardMedia)`
  width: 680px;
  height: 680px;
  margin-top: 32px;
  margin-left: 32px;
  background-size: auto !important;
  background-position-x: center !important;
  background-position-y: center !important;
`

const Content = styled(CardContent)`
  flex: 1 0 auto;
`

const Description = styled.div`
  display: flex;
  flex-direction:column;
  flex-grow: 1;
  margin: 32px;
  max-width:60%;
  overflow: hidden;
`
const Title = styled.div`
  display: flex;
  flex-direction:row;
  font-size: 24px;
  font-weight: 600;
  max-width: 240px;
  line-height: 30px;
`
const ButtonContainer = styled.div`
  display: flex;
  flex-direction:row;
  font-size: 24px;
  font-weight: 600;
  max-width: 240px;
  line-height: 30px;
  margin-right: 16px
`

const ButtonWapper = styled(Button)`
  display: flex;
  flex-grow:1;
  color: ${props => props.theme.meli.white}!important;
  text-transform: inherit !important;
  background-color: ${props => props.theme.meli.brightBlue}!important;
  :hover {
    background-color: ${props => props.theme.meli.blue}!important
  }
`

const DescriptionTitle = styled.div`
  font-size: 28px;
  line-height:0;
  margin-top:16px;
  margin-bottom:32px;
  color: ${props => props.theme.meli.darkGray};
`
const DescriptionP = styled.div`
  font-size: 16px;
  color: ${props => props.theme.meli.gray};
`

const Info = styled.div`
  font-size: 12px;
  color: ${props => props.theme.meli.gray};
  margin: 16px 0;
  line-height: 0;
`
const Price = styled(NumberFormat)`
  font-size: 46px;
`