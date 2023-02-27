import React from 'react'
import Head from 'next/head'

import Navbar from '../components/navbar'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Home - Hannah's Design Co</title>
          <meta property="og:title" content="Home - Hannah's Design Co" />
        </Head>
        <Navbar></Navbar>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            position: relative;
            min-height: 100vh;
            overflow-x: hidden;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
            background-color: var(--dl-color-backgrounds-gray);
          }
        `}
      </style>
    </>
  )
}

export default Home
