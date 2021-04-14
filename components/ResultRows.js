import React from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import NumberFormat from 'react-number-format';
import Link from 'next/link'
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import { Highlight } from '@material-ui/icons';

export default function ResultRows({ item, idx }) {
  return (
    <Container>
      <Grid container spacing={0} xs={12} justify='center'>
        <Grid item xs={10}>
          <Link href={`/items/${item.id}`}>
            <Root
              raised={false}
              square={true}
              idx={idx}
            >
              <Cover
                image={item.picture}
                title={item.title}
              />
              <Details>
                <Content>
                  <HighlightedRow>
                    <Price
                      value={item.price.amount}
                      displayType={'text'}
                      thousandSeparator={'.'}
                      decimalSeparator={','}
                      thousandsGroupStyle='thousand'
                      prefix={item.price.currency === 'ARS' ? '$ ' : 'U$S '}
                    />
                    <State>{item.state}</State>
                  </HighlightedRow>
                  <Description>{item.title}</Description>
                </Content>
              </Details>
            </Root>
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
}


const Container = styled.div` 
  max-width: 1200px;
  margin: auto;
  padding: 0;
  border-radius: 0
`

const Root = styled(Card)`
  display: flex;
  width: 886;
  min-height: 150;
  border-bottom: thin solid #eee;
  border-radius: ${props => props.idx === 0 ? '4px 4px 0 0' : '0px'}
`

const Cover = styled(CardMedia)`
  width: 180px;
  height: 180px;
  border-radius:4px;
  object-fit: contain;
  margin:16px;
`

const Details = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 700px;
`

const Content = styled(CardContent)`
  flex: 1 0 auto;
`

const Price = styled(NumberFormat)`
  font-size:24px;
  font-weight: 300;
  line-height:0
`

const Description = styled.div`
  display: flex;
  flex-direction:row;
  font-size: 18px;
  font-weight: 300;
`
const HighlightedRow = styled.div`
  display: flex;
  flex-direction: row;
  line-height:0;
  margin-top: 32px;
  margin-bottom: 32px;
  justify-content: space-between;
  align-items: center;
`

const State = styled.div`
  font-size:12px;
  font-weight: 300;
  color:#999;
`