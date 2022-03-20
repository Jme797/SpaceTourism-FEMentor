import React, { useState, useRef, useEffect } from "react"
import type { NextPage } from 'next'
import PageHead from '../components/PageHead/PageHead'

import { breakpoints, Server } from '../Config'
import TwoColumn from '../Layout/TwoColumn/TwoColumn'
import SlideDotControls from "../components/SlideDotControls/SlideDotControls"
import { FixedBottom } from "../Layout/FixedBottom/Fixed"
import PageContainer from "../Layout/PageContainer/PageContainer"
import useSwipeable from "../Hooks/useSwipeable"
import { relative } from "path"
import PageHeader from "../components/PageHeader/PageHeader"
import useBreakpoint from "../Hooks/useBreakpoint"

interface CrewObject {
  name: string,
  images: {
    png: string,
    webp: string
  }
  role: string,
  bio: string
}

type Props = {
  crew: CrewObject[]
}

const Crew: NextPage<Props> = ({ crew }: Props) => {
  const [activeSlide, setActiveSlide] = useState(0)
  const PageTitle = "02 Crew"
  const currCrew = crew[activeSlide]
  const crewComponent = useRef(null)

  function swipeLeft() {
    setActiveSlide(curr => {
      if (curr < crew.length - 1) { return curr + 1 }
      return crew.length - 1
    })
  }

  function swipeRight() {
    setActiveSlide(curr => {
      if (curr > 0) { return curr - 1 }
      return 0
    })
  }

  useEffect(() => {
    if (crewComponent.current != null) {
      const unmount = useSwipeable(crewComponent.current, swipeLeft, swipeRight, "50%")
      return unmount
    }
  }, [])

  return (
    <>
      <main className="st-Crew">
        <PageHead title={PageTitle} />
        <PageContainer centered>
          <FixedBottom elRef={crewComponent}>
            <TwoColumn>
              <>
                <PageHeader preText="02" title="Meet Your Crew" />
                <h1 className="font-sm text-dark-grey">{currCrew.role}</h1>
                <h1 className="font-base text-white">{currCrew.name}</h1>
                <p className="font-base text-light-blue">{currCrew.bio}</p>

                <div className="st-Crew-slideControls" >
                  <SlideDotControls slideCount={crew.length} setSlideNumber={setActiveSlide} slideNumber={activeSlide} />
                </div>

              </>
              <>
                <img className="st-Crew-Image" src={currCrew.images.png} height={700} />
              </>
            </TwoColumn>
          </FixedBottom>
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

  const crew = data.crew

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      crew,
    },
  }
}

export default Crew