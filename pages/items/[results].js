import React from 'react'
import { useRouter } from 'next/router'
import useSwr from 'swr'
import ResultRows from '../../components/ResultRows'
import ResultDescription from '../../components/ResultDescription'
import styled from 'styled-components'
import Header from '../../components/Header'

export default function Results() {
  const router = useRouter()
  const fetcher = (url) => fetch(url).then((res) => res.json())
  const { q, results } = router.query

  const { data, error } = useSwr(
    q ? `/api/items?q=${q}` : `/api/items/${results}`,
    fetcher
  )

  if (error) return <div>Failed to load user</div>
  if (!data) return <div>Loading...</div>

  return <Container>
    <Header />
    {data.items && data.items.map(item =>
      <ResultRows item={item} key={item.id} />
    )}
    {data.item && <ResultDescription item={data.item} key={data.item.id} />}
  </Container>
}

const Container = styled.div`
  background-color: #ebebeb;
  margin: auto
`