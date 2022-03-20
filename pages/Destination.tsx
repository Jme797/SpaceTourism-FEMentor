import type { NextPage } from 'next'
import PageHead from '../components/PageHead/PageHead'
import Centered from '../Layout/Centered/Centered'
import Planet, { PlanetObject } from '../components/Planet/Planet'

import { Server } from '../Config'
import PageContainer from '../Layout/PageContainer/PageContainer'
import PageHeader from '../components/PageHeader/PageHeader'

type Props = {
  destinations: Array<PlanetObject>
}

const Destination: NextPage<Props> = ({ destinations }: Props) => {
  const PageTitle = "01 Destination"

  return (
    <>
      <main className="st-Destination">
        <PageHead title={PageTitle} />
        <PageContainer centered>
          <Centered>
            <PageHeader preText="01" title="Pick your Destination" />

            <Planet data={destinations} />
          </Centered>
        </PageContainer>
      </main>
    </>
  )
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch(`${Server}data.json`)
  const data = await res.json()

  const destinations = data.destinations

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      destinations,
    },
  }
}

export default Destination