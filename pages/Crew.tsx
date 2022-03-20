import React, { useState, useRef, useEffect, useLayoutEffect, FunctionComponent } from "react"
import type { NextPage } from 'next'
import PageHead from '../components/PageHead/PageHead'

import { Server } from '../Config'
import TwoColumn from '../Layout/TwoColumn/TwoColumn'
import SlideDotControls from "../components/SlideDotControls/SlideDotControls"
import { FixedBottom } from "../Layout/Fixed/Fixed"
import PageContainer from "../Layout/PageContainer/PageContainer"
import useSwipeable from "../Hooks/useSwipeable"
import PageHeader from "../components/PageHeader/PageHeader"

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
  const prevSlide = useRef(activeSlide)
  const PageTitle = "02 Crew"
  const crewComponent = useRef(null)
  const [swipeDirectionRight, setSwipeDirectionRight] = useState(false)

  useLayoutEffect(() => {
    if (prevSlide.current > activeSlide) {
      setSwipeDirectionRight(false)
    } else {
      setSwipeDirectionRight(true)
    }
    prevSlide.current = activeSlide

  }, [activeSlide])

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
            {crew.map((crewMember, i) => (
              <>
                <FixedBottom pointerEvents={i == activeSlide}>
                  <CrewMember visible={i == activeSlide} crew={crewMember} setActiveSlide={setActiveSlide} activeSlide={activeSlide} slideCount={crew.length} swipeDirectionRight={swipeDirectionRight}></CrewMember>
                </FixedBottom>
              </>
            ))}
          </FixedBottom>
        </PageContainer>
      </main>
    </>
  )
}

type CrewProps = {
  crew: CrewObject,
  setActiveSlide: Function,
  activeSlide: Number,
  slideCount: number,
  visible: Boolean,
  swipeDirectionRight: Boolean
}

const CrewMember: FunctionComponent<CrewProps> = ({ crew, setActiveSlide, activeSlide, slideCount, visible, swipeDirectionRight = false }: CrewProps) => {

  return (
    <div className={`${swipeDirectionRight ? "swipe-left" : "swipe-right"} ${visible ? "swipe-visible" : "swipe-hidden"} swipe`}>
      <TwoColumn>
        <>
          <PageHeader preText="02" title="Meet Your Crew" />
          <h1 className="font-sm text-dark-grey">{crew.role}</h1>
          <h1 className="font-base text-white">{crew.name}</h1>
          <p className="font-base text-light-blue">{crew.bio}</p>

          <div className="st-Crew-slideControls">
            <SlideDotControls slideCount={slideCount} setSlideNumber={setActiveSlide} slideNumber={activeSlide} />
          </div>

        </>
        <>
          <img className="st-Crew-Image" src={crew.images.png} height={700} />
        </>
      </TwoColumn>
    </div>
  )
}


export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch(`${Server}data.json`)
  const data = await res.json()

  const crew = data.crew

  // By returning {props: {posts} }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      crew,
    },
  }
}

export default Crew