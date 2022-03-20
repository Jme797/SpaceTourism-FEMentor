import React, { FunctionComponent } from 'react';
import Head from 'next/head'
import Navbar from '../Navbar/Navbar';
import Link from 'next/link';

type Props = {
  children?: React.ReactNode,
  title: String
}

const PageHead: FunctionComponent<Props> = ({ children, title }: Props) => (
  <>
    <Head>
      <link rel="icon" href="/favicon.png" />
      <title>{title} | Space Tourism</title>
      <meta name="viewport" content="initial-scale=1, maximum-scale=1" />
      {children}
    </Head>
    <div style={{
      position: "fixed",
      zIndex: 1,
      top: 0,
      width: "100%",
    }}>
      <Link href="/">
        <a style={{ position: "fixed", left: 0, top: 0, zIndex: 20, padding: "30px" }}>
          <img src="/assets/shared/logo.svg" width={40} height={40} />
        </a>
      </Link>
      <Navbar />
    </div>

  </>
)

export default PageHead;
