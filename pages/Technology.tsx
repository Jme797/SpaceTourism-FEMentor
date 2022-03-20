import React, { useEffect, useState, useRef } from "react"
import type { NextPage } from 'next'
import PageHead from '../components/PageHead/PageHead'

import { breakpoints, Server } from '../Config'
import PageContainer from "../Layout/PageContainer/PageContainer"
import { FixedRight } from "../Layout/Fixed/Fixed"
import TwoColumn from "../Layout/TwoColumn/TwoColumn"
import SlideNumberedControls from "../components/SlideNumberedControls/SlideNumberedControls"
import useBreakpoint from "../Hooks/useBreakpoint"
import PageHeader from "../components/PageHeader/PageHeader"
import useSwipeable from "../Hooks/useSwipeable"

interface TechnologyObject {
  name: string,
  images: {
    portrait: string,
    landscape: string,
  },
  description: string
}

type Props = {
  technologies: TechnologyObject[]
}

const Technology: NextPage<Props> = ({ technologies }: Props) => {
  const [activeSlide, setActiveSlide] = useState(0)
  const PageTitle: string = "03 Technology"
  const activeTech: TechnologyObject = technologies[activeSlide]
  const swipeableComponent = useRef(null)

  const isDesktop: Boolean = useBreakpoint(breakpoints.lg)

  function handleLeftSwipe() {
    setActiveSlide(curr => {
      if (curr < technologies.length - 1) { return curr + 1 }
      return technologies.length - 1
    })
  }

  function handleRightSwipe() {
    setActiveSlide(curr => {
      if (curr > 0) { return curr - 1 }
      return 0
    })
  }

  useEffect(() => {
    if (swipeableComponent.current) {
      const unmount = useSwipeable(swipeableComponent.current, handleLeftSwipe, handleRightSwipe)
      return unmount
    }
  }, [isDesktop])

  function crewC(): JSX.Element {
    return (
      <TwoColumn reverse={!isDesktop}>
        <>
          {isDesktop && (
            <PageHeader preText="03" title="Space launch 101" />
          )}
          <TwoColumn leftColumns={1} rightColumns={5}>
            <>
              <SlideNumberedControls slideCount={technologies.length} slideNumber={activeSlide} setSlideNumber={setActiveSlide} />
            </>
            <>
              <div className="st-Technology-body">
                <h2 className="font-base text-light-blue">The Terminology...</h2>
                <h1 className="text-white font-base">{activeTech.name}</h1>
                <p className="text-light-blue font-base">{activeTech.description}</p>
              </div>
            </>

          </TwoColumn>
        </>
        <div style={{ textAlign: "right" }}>
          <img className="st-Technology-Image" src={isDesktop ? activeTech.images.portrait : activeTech.images.landscape} width={500} height={500} />
        </div>
      </TwoColumn>
    )
  }

  return (
    <>
      <main className="st-Technology">
        <PageHead title={PageTitle} />
        {isDesktop && (
          <PageContainer right>
            {crewC()}
          </PageContainer>
        )}
        {!isDesktop && (
          <div style={{ position: "fixed", width: "100vw" }}>
            {!isDesktop && (
              <PageHeader preText="03" title="Space launch 101" />
            )}
            <div ref={swipeableComponent} style={{ position: "absolute", width: "100vw" }} >
              {crewC()}
            </div>
          </div>
        )}


      </main>
    </>
  )
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch(`${Server}data.json`)
  const data = await res.json()

  const technologies = data.technology

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      technologies,
    },
  }
}

export default Technology