import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import useSwr from 'swr'
import ResultRows from '../../components/ResultRows'
import ResultDescription from '../../components/ResultDescription'
import styled from 'styled-components'
import Header from '../../components/Header'
import Grid from '@material-ui/core/Grid';

export default function Results() {
  const router = useRouter()
  const fetcher = (url) => fetch(url).then((res) => res.json())
  const { q, category, results } = router.query

  const { data, error } = useSwr(
    q ? `/api/items?q=${q}` : category ? `/api/category?q=${category}` : `/api/items/${results}`,
    fetcher
  )

  if (error) return (
    <Container>
      <Header />
      <Container>
        <Grid container spacing={0} xs={12} justify='center'>
          <Grid item xs={10}>
            <Loading><div>No encontramos el producto que deseas...</div></Loading>
          </Grid>
        </Grid>
      </Container>
    </Container >
  )

  if (!data) return (
    <Container>
      <Header />
      <Container>
        <Grid container spacing={0} xs={12} justify='center'>
          <Grid item xs={10}>
            <Loading>Cargando...</Loading>
          </Grid>
        </Grid>
      </Container>
    </Container >
  )

  return <Container>
    <Header />
    <Container>
      <Grid container spacing={0} xs={12} justify='center'>
        <Grid item xs={10}>
          <BreadCrumb>
            {data.breadCrumb.name &&
              <Link href={`/items/items?q=${data.breadCrumb.name}`}>{data.breadCrumb.name}</Link>
            }
            {data.breadCrumb.last &&
              <Link href={`/items/items?q=${data.breadCrumb.last.name}`}>{data.breadCrumb.last.name}</Link>
            }
            {data.breadCrumb.current &&
              <Link href={`/items/category?category=${data.breadCrumb.current.id}`}>{data.breadCrumb.current.name}</Link>
            }
          </BreadCrumb>
        </Grid>
      </Grid>
    </Container>
    {data.items && data.items.map((item, idx) =>
      <ResultRows item={item} key={item.id} idx={idx} />
    )}
    {data.item && <ResultDescription item={data.item} key={data.item.id} />}
  </Container>
}

const Container = styled.div`
  background-color: ${props => props.theme.meli.lightGray} ;
  margin: auto;
  max-width: 1200px;
  padding: 0;
  border-radius: 0;
`
const BreadCrumb = styled.div`
  a {
    font-size:14px; 
    line-height: 14px;
    color: ${props => props.theme.meli.gray};
    text-decoration: none;
    cursor: pointer;
    margin:16px 0;
    display: inline-block;
    ::after{
      content:">";
      margin: 16px 8px;
    }
    :last-child{
      ::after{
        content:"";
        margin: 0;
      }
    }
  }
`
const Loading = styled.div`
  margin:16px 0;
  color: ${props => props.theme.meli.gray};
`
