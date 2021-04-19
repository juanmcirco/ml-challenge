import React from 'react';

import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import NumberFormat from 'react-number-format';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import { condition } from '../constants/contants'
import Button from '@material-ui/core/Button';

export default function ResultDescription({ item }) {
  return (
    <Container>
      <Grid container xs={12} justify='center'>
        <Grid item xs={10}>
          <CardContainer>
            <Details >
              <Image src={item.picture} />
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
  @media (max-width: 600px) {
    max-width: 100%;
  }
`

const CardContainer = styled(Card)`
  display: block;
  margin: auto;
  border-bottom: thin solid #eee;
  border-radius: 0mm;
`

const Details = styled.div`
  display: flex;
  @media (max-width: 600px) {
    flex-direction: column;
  }
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
  @media (max-width: 600px) {
    max-width: 100%;
  }
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
  @media (max-width: 600px) {
    line-height: inherit;
  }
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
  @media (max-width: 600px) {
    line-height: inherit;
  }
`
const Price = styled(NumberFormat)`
  font-size: 46px;
`

const Image = styled.img`
  cursor: -webkit-zoom-in;
  cursor: zoom-in;
  height: auto;
  object-fit: contain;
  width: 680px;
  height: 680px;
  margin-top: 32px;
  margin-left: 32px;
  @media (max-width: 600px) {
    width:100%;
    height: 100%;
    margin-top: 0px;
    margin-left: 0px;
    object-fit: cover;
  }
`