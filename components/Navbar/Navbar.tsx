import Link from 'next/link';
import React, { FunctionComponent, useState } from 'react';
import { breakpoints } from '../../Config';
import useBreakpoint from '../../Hooks/useBreakpoint';

import styles from './Navbar.module.scss';

type Props = {}

const links = [{ name: 'Home', step: "00", url: "/" }, { name: 'Destination', step: "01", url: "/Destination" }, { name: 'Crew', step: "02", url: "/Crew" }, { name: 'Technology', step: "03", url: "/Technology" }]

const Navbar: FunctionComponent = ({ }: Props) => {
  const isDesktop = useBreakpoint(breakpoints.lg)
  const [navActive, setNavActive] = useState(false)

  if (useBreakpoint(breakpoints.md)) {
    return (
      <nav className={styles.Navbar}>
        <div className={styles.background}></div>
        <ul>
          {links.map((link, i) => (
            <li key={i}>
              <Link href={link.url}>
                <a>{`${isDesktop ? link.step : ""} ${link.name}`}</a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    );
  }

  if (navActive) {
    return (
      <nav className={styles.MobileNav}>
        <div className={styles.CloseButton}>
          <button onClick={() => setNavActive(false)} className={`reset`}>
            <img src='/assets/shared/icon-close.svg' />
          </button>
        </div>
        <ul className='reset'>
          {links.map((link, i) => (
            <li key={i}>
              <Link href={link.url}>
                <a>{`${link.step} ${link.name}`}</a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    )
  }

  return (
    <nav className={styles.hamburger}>
      <div>
        <button onClick={() => setNavActive(true)} className={`reset`}>
          <img src='/assets/shared/icon-hamburger.svg' />
        </button>
      </div>
    </nav>
  )

}

export default Navbar;
