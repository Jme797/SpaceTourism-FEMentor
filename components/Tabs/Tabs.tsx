import React, { FunctionComponent } from "react"

import { PlanetObject } from "../Planet/Planet"

import Styles from "./Tabs.module.scss"

type Props = {
  tabs: Array<string>,
  setActiveTab: Function,
  activeTab: string
}

const Tabs: FunctionComponent<Props> = ({ tabs, activeTab, setActiveTab }: Props) => {
  return (
    <section className={Styles.Tabs}>
      <ul className="reset">
        {tabs.map((tab: string, i: any) => (
          <li key={i}>
            <button className={`reset ${activeTab === tab ? Styles.active : ""}`} onClick={() => setActiveTab(tab)}>
              <h3 className={`font-sm ${activeTab === tab ? "text-white" : "text-light-blue"}`}>{tab}</h3>
            </button>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Tabs;