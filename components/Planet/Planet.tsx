import React, { FunctionComponent, useState } from "react";
import TwoColumn from "../../Layout/TwoColumn/TwoColumn";

import Tabs from "../Tabs/Tabs";

import Styles from "./Planet.module.scss"

export interface PlanetObject {
  name: string,
  images: {
    png: string,
    webp: string
  },
  description: string,
  distance: string,
  travel: string,
  visible: boolean
}
type Props = {
  data: PlanetObject[]
}

const Planet: FunctionComponent<Props> = ({ data }: Props) => {
  const tabs = data.map((planet: PlanetObject) => planet.name);
  const [activeTab, setActiveTab] = useState(data[0].name)

  return (
    <>
      {data.map((planet: PlanetObject, i: any) => (
        <div key={i} className={Styles.Planet}>
          {activeTab == planet.name && (
            <>
              <TwoColumn>
                <>
                  <img src={planet.images.png} />
                </>
                <div>
                  <Tabs tabs={tabs} setActiveTab={setActiveTab} activeTab={activeTab} />
                  <div>
                    <h1 className="font-l text-white">{planet.name}</h1>
                    <p className="font-base text-light-blue">{planet.description}</p>
                    <hr />
                    <TwoColumn collapse={false}>
                      <>
                        <h2 className="text-light-blue font-sm">Avg. Distance</h2>
                        <h1 className="font-sm">{planet.distance}</h1>
                      </>
                      <>
                        <h2 className="text-light-blue font-sm">Est. Travel Time</h2>
                        <h1 className="font-sm">{planet.travel}</h1>
                      </>
                    </TwoColumn>

                  </div>
                </div>
              </TwoColumn>
            </>
          )}
        </div>
      ))}
    </>
  )
}

export default Planet