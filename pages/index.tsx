import type { NextPage } from 'next'
import Link from 'next/link'

import PageHead from '../components/PageHead/PageHead'
import { breakpoints } from '../Config'
import useBreakpoint from '../Hooks/useBreakpoint'
import { FixedBottom } from '../Layout/Fixed/Fixed'
import PageContainer from '../Layout/PageContainer/PageContainer'
import TwoColumn from '../Layout/TwoColumn/TwoColumn'

const Home: NextPage = () => {
  const offset = useBreakpoint(breakpoints.md) ? 100 : 50
  return (
    <>
      <main className="st-Home">
        <PageHead title="00 Home" />
        <video className="st-Home-BackgroundVideo" autoPlay muted loop>
          <source src="/assets/EarthSpinning.mp4" type="video/mp4" />
        </video>
        {<PageContainer centered>
          <FixedBottom offset={offset}>
            <TwoColumn>
              <div>
                <h2 className='font-base text-light-blue'>So, you want to travel to</h2>
                <h1 className='font-xl'>Space</h1>
                <p className='font-l text-light-blue'>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
              </div>
              <div className='st-Home-MegaButton'>
                <Link href={"/Destination"}>
                  <a>
                    <img src='/assets/Explore-icon.svg' alt="Discover" width="250" height="250" />
                  </a>
                </Link>
              </div>
            </TwoColumn>
          </FixedBottom>
        </PageContainer>}
      </main>
    </>
  )
}

export default Home
