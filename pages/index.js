import React from 'react'
import Head from 'next/head'

import Navbar from '../components/navbar'
import FeatureCard from '../components/feature-card'
import Slide from '../components/slide'
import GridCard from '../components/grid-card'
import Footer from '../components/footer'
import Copyright from '../components/copyright'

const Landing = (props) => {
  return (
    <>
      <div className="landing-container">
        <Head>
          <title>Hannah's Design Co</title>
          <meta property="og:title" content="Hannah's Design Co" />
        </Head>
        <Navbar></Navbar>
        <main className="landing-main">
          <div className="section-container">
            <div className="landing-max-width max-content-container">
              <div className="landing-content-container">
                <h1 className="landing-text Heading1">
                  <span>
                    Feed all your news sources and mailboxes right into
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="landing-text02">
                    Feedbox
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </h1>
                <div className="landing-input-container">
                  <div className="landing-container1 input">
                    <svg
                      viewBox="0 0 804.5714285714286 1024"
                      className="landing-icon"
                    >
                      <path d="M804.571 708.571c0 20.571-9.143 60.571-17.714 79.429-12 28-44 46.286-69.714 60.571-33.714 18.286-68 29.143-106.286 29.143-53.143 0-101.143-21.714-149.714-39.429-34.857-12.571-68.571-28-100-47.429-97.143-60-214.286-177.143-274.286-274.286-19.429-31.429-34.857-65.143-47.429-100-17.714-48.571-39.429-96.571-39.429-149.714 0-38.286 10.857-72.571 29.143-106.286 14.286-25.714 32.571-57.714 60.571-69.714 18.857-8.571 58.857-17.714 79.429-17.714 4 0 8 0 12 1.714 12 4 24.571 32 30.286 43.429 18.286 32.571 36 65.714 54.857 97.714 9.143 14.857 26.286 33.143 26.286 50.857 0 34.857-103.429 85.714-103.429 116.571 0 15.429 14.286 35.429 22.286 49.143 57.714 104 129.714 176 233.714 233.714 13.714 8 33.714 22.286 49.143 22.286 30.857 0 81.714-103.429 116.571-103.429 17.714 0 36 17.143 50.857 26.286 32 18.857 65.143 36.571 97.714 54.857 11.429 5.714 39.429 18.286 43.429 30.286 1.714 4 1.714 8 1.714 12z"></path>
                    </svg>
                    <input
                      type="text"
                      placeholder="Your phone number..."
                      className="landing-textinput input"
                    />
                  </div>
                  <button className="landing-button button-primary button">
                    Get started
                  </button>
                </div>
                <div className="landing-features-container">
                  <div className="landing-feature">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="landing-icon02"
                    >
                      <path d="M733.714 419.429c0-9.714-3.429-19.429-10.286-26.286l-52-51.429c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-233.143 232.571-129.143-129.143c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-52 51.429c-6.857 6.857-10.286 16.571-10.286 26.286s3.429 18.857 10.286 25.714l206.857 206.857c6.857 6.857 16.571 10.857 25.714 10.857 9.714 0 19.429-4 26.286-10.857l310.286-310.286c6.857-6.857 10.286-16 10.286-25.714zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="landing-text03">
                      Easiest way to read news and RSS Feeds.
                    </span>
                  </div>
                  <div className="landing-feature1">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="landing-icon04"
                    >
                      <path d="M733.714 419.429c0-9.714-3.429-19.429-10.286-26.286l-52-51.429c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-233.143 232.571-129.143-129.143c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-52 51.429c-6.857 6.857-10.286 16.571-10.286 26.286s3.429 18.857 10.286 25.714l206.857 206.857c6.857 6.857 16.571 10.857 25.714 10.857 9.714 0 19.429-4 26.286-10.857l310.286-310.286c6.857-6.857 10.286-16 10.286-25.714zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="landing-text04">
                      Works with all mail providers, including Google and Yahoo.
                    </span>
                  </div>
                  <div className="landing-feature2">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="landing-icon06"
                    >
                      <path d="M733.714 419.429c0-9.714-3.429-19.429-10.286-26.286l-52-51.429c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-233.143 232.571-129.143-129.143c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-52 51.429c-6.857 6.857-10.286 16.571-10.286 26.286s3.429 18.857 10.286 25.714l206.857 206.857c6.857 6.857 16.571 10.857 25.714 10.857 9.714 0 19.429-4 26.286-10.857l310.286-310.286c6.857-6.857 10.286-16 10.286-25.714zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="landing-text05">
                      Over 2000, highly recommended customer reviews.
                    </span>
                  </div>
                </div>
              </div>
              <div className="landing-image-container">
                <img
                  alt="image"
                  src="/playground_assets/hero%20image-1200w.png"
                  className="landing-image"
                />
              </div>
            </div>
          </div>
          <div className="landing-section-one section-container">
            <div className="landing-max-width1 max-content-container">
              <h2 className="landing-text06 Heading2">
                <span>
                  Read
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="landing-text08">everything in one place</span>
                <span> and</span>
                <br></br>
                <span> keep up with important news</span>
              </h2>
              <div className="landing-cards-container">
                <FeatureCard image_src="/playground_assets/stars-200h.png"></FeatureCard>
                <FeatureCard
                  text1="See how &gt;"
                  heading="Follow favorite topics"
                  image_src="/playground_assets/hearth-200h.png"
                ></FeatureCard>
                <FeatureCard
                  text1="Learn more &gt;"
                  heading="Read your emails"
                  image_src="/playground_assets/mail-200h.png"
                ></FeatureCard>
                <FeatureCard
                  text1="Learn more &gt;"
                  heading="Read newspapers"
                  image_src="/playground_assets/paper-200h.png"
                ></FeatureCard>
              </div>
            </div>
          </div>
          <div className="section-container">
            <div className="landing-max-width2 max-content-container">
              <div className="landing-image-container1">
                <img
                  alt="image"
                  src="/playground_assets/section-image1-1200w.png"
                  className="landing-image1"
                />
              </div>
              <div className="landing-content-container1">
                <h1 className="landing-text12 Heading2">
                  <span>
                    Your favorite articles at your fingertips.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="landing-text14">Always.</span>
                </h1>
                <span className="landing-text15 Content-Light">
                  <span>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Velit officia consequat duis enim velit mollit.
                  </span>
                  <br></br>
                  <span>Lorem ipsum dolor sit amet.</span>
                </span>
              </div>
            </div>
          </div>
          <div className="section-container">
            <div className="landing-max-width3 max-content-container">
              <div className="landing-content-container2">
                <h1 className="landing-text18 Heading2">
                  <span>
                    The best content, handpicked for you.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="landing-text20">In the morning.</span>
                </h1>
                <span className="landing-text21 Content-Light">
                  <span>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Velit officia consequat duis enim velit mollit.
                  </span>
                  <br></br>
                  <span>Lorem ipsum dolor sit amet.</span>
                </span>
              </div>
              <div className="landing-image-container2">
                <img
                  alt="image"
                  src="/playground_assets/section-image2-1200w.png"
                  className="landing-image2"
                />
              </div>
            </div>
          </div>
          <div className="landing-section-four section-container">
            <div className="landing-max-width4 max-content-container">
              <h2 className="landing-text24 Heading2">
                <span>People love Feedbox.</span>
                <br></br>
                <span className="landing-text26">So would you.</span>
                <span className="landing-text27"></span>
              </h2>
            </div>
            <div data-type="slider" className="landing-slider">
              <Slide></Slide>
              <Slide
                Role="DESIGN DIRECTOR"
                Author="Bill Smith"
                image_src="/playground_assets/vector%202-700w.png"
                Testimonial='“Stunning app! I use it everyday since I discovered it and love it every since. It really makes newsreading a pleasure. I enjoy all the customization options available, super highly recommended!"'
                Testimonial2="Super highly recommended!”"
                rootClassName="slide-root-class-name"
              ></Slide>
              <Slide
                Role="FREELANCE WRITER"
                Author="Julia Xang"
                image_src="/playground_assets/vector%202%20%5B2%5D-700w.png"
                Testimonial="“Feedbox is very easy to use and flexible! I especially like the pre-made templates that are accessible; they're extraordinary for monitoring a few feed sources and various RSS Feeds together.”"
                rootClassName="slide-root-class-name1"
              ></Slide>
            </div>
          </div>
          <div className="section-container">
            <div className="landing-max-width5 max-content-container">
              <div className="landing-heading-container">
                <h2 className="landing-text28 Heading2">
                  <span>If you love simplicity, you’ll</span>
                  <br></br>
                  <span>
                    simply love
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="landing-text31">Feedbox.</span>
                </h2>
                <span className="Content-Light">
                  <span>
                    Go to App Store, install Feedbox and start changing your
                    reading habits to
                  </span>
                  <span className="landing-text34"></span>
                  <span>day!</span>
                </span>
              </div>
              <div className="landing-get-the-app">
                <img
                  alt="image"
                  src="/playground_assets/frame-1200w.png"
                  className="landing-image3"
                />
                <img
                  alt="image"
                  src="/playground_assets/frame%2034-200h.png"
                  className="landing-image4"
                />
              </div>
              <div className="landing-cards-container1">
                <GridCard image_src="/playground_assets/vector%203-200h.png"></GridCard>
                <GridCard
                  text="Follow your friends"
                  image_src="/playground_assets/vector%203%20%5B1%5D-200h.png"
                ></GridCard>
                <GridCard
                  text="Declutter your life inbox"
                  image_src="/playground_assets/vector%203%20%5B2%5D-200h.png"
                ></GridCard>
                <GridCard
                  text="Less apps, more space"
                  image_src="/playground_assets/vector%203%20%5B3%5D-200h.png"
                ></GridCard>
              </div>
            </div>
          </div>
          <div className="landing-section-six section-container">
            <div className="landing-max-width6 max-content-container">
              <div className="landing-content-container3">
                <h1 className="landing-text36 Heading2">
                  <span>Get started today.</span>
                  <br></br>
                  <span className="landing-text38">Try free for 30 days.</span>
                </h1>
                <span className="landing-text39 Content-Light">
                  Go to App Store, install Feedbox and start changing your
                  reading habbits today!
                </span>
                <div className="landing-input-container1">
                  <div className="landing-container2 input">
                    <svg
                      viewBox="0 0 804.5714285714286 1024"
                      className="landing-icon08"
                    >
                      <path d="M804.571 708.571c0 20.571-9.143 60.571-17.714 79.429-12 28-44 46.286-69.714 60.571-33.714 18.286-68 29.143-106.286 29.143-53.143 0-101.143-21.714-149.714-39.429-34.857-12.571-68.571-28-100-47.429-97.143-60-214.286-177.143-274.286-274.286-19.429-31.429-34.857-65.143-47.429-100-17.714-48.571-39.429-96.571-39.429-149.714 0-38.286 10.857-72.571 29.143-106.286 14.286-25.714 32.571-57.714 60.571-69.714 18.857-8.571 58.857-17.714 79.429-17.714 4 0 8 0 12 1.714 12 4 24.571 32 30.286 43.429 18.286 32.571 36 65.714 54.857 97.714 9.143 14.857 26.286 33.143 26.286 50.857 0 34.857-103.429 85.714-103.429 116.571 0 15.429 14.286 35.429 22.286 49.143 57.714 104 129.714 176 233.714 233.714 13.714 8 33.714 22.286 49.143 22.286 30.857 0 81.714-103.429 116.571-103.429 17.714 0 36 17.143 50.857 26.286 32 18.857 65.143 36.571 97.714 54.857 11.429 5.714 39.429 18.286 43.429 30.286 1.714 4 1.714 8 1.714 12z"></path>
                    </svg>
                    <input
                      type="text"
                      placeholder="Your phone number..."
                      className="landing-textinput1 input"
                    />
                  </div>
                  <button className="landing-button1 button-primary button">
                    Get started
                  </button>
                </div>
                <div className="landing-features-container1">
                  <div className="landing-feature3">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="landing-icon10"
                    >
                      <path d="M733.714 419.429c0-9.714-3.429-19.429-10.286-26.286l-52-51.429c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-233.143 232.571-129.143-129.143c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-52 51.429c-6.857 6.857-10.286 16.571-10.286 26.286s3.429 18.857 10.286 25.714l206.857 206.857c6.857 6.857 16.571 10.857 25.714 10.857 9.714 0 19.429-4 26.286-10.857l310.286-310.286c6.857-6.857 10.286-16 10.286-25.714zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="landing-text40">
                      Easiest way to read news and RSS Feeds.
                    </span>
                  </div>
                  <div className="landing-feature4">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="landing-icon12"
                    >
                      <path d="M733.714 419.429c0-9.714-3.429-19.429-10.286-26.286l-52-51.429c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-233.143 232.571-129.143-129.143c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-52 51.429c-6.857 6.857-10.286 16.571-10.286 26.286s3.429 18.857 10.286 25.714l206.857 206.857c6.857 6.857 16.571 10.857 25.714 10.857 9.714 0 19.429-4 26.286-10.857l310.286-310.286c6.857-6.857 10.286-16 10.286-25.714zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="landing-text41">
                      Works with all mail providers, including Google and Yahoo.
                    </span>
                  </div>
                  <div className="landing-feature5">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="landing-icon14"
                    >
                      <path d="M733.714 419.429c0-9.714-3.429-19.429-10.286-26.286l-52-51.429c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-233.143 232.571-129.143-129.143c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-52 51.429c-6.857 6.857-10.286 16.571-10.286 26.286s3.429 18.857 10.286 25.714l206.857 206.857c6.857 6.857 16.571 10.857 25.714 10.857 9.714 0 19.429-4 26.286-10.857l310.286-310.286c6.857-6.857 10.286-16 10.286-25.714zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="landing-text42">
                      Over 2000, highly recommended customer reviews.
                    </span>
                  </div>
                </div>
              </div>
              <div className="landing-image-container3">
                <img
                  alt="image"
                  src="/playground_assets/group%2032-1200w.png"
                  className="landing-image5"
                />
              </div>
            </div>
          </div>
        </main>
        <Footer></Footer>
        <Copyright></Copyright>
      </div>
      <style jsx>
        {`
          .landing-container {
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
          .landing-main {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .landing-max-width {
            align-items: stretch;
          }
          .landing-content-container {
            flex: 1;
            display: flex;
            min-width: 50%;
            align-items: flex-start;
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            justify-content: center;
          }
          .landing-text {
            width: 90%;
            margin-bottom: 42px;
          }
          .landing-text02 {
            color: var(--dl-color-backgrounds-primary);
          }
          .landing-input-container {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: row;
          }
          .landing-container1 {
            width: 100%;
            height: 56px;
            display: flex;
            max-width: 376px;
            align-items: center;
            line-height: 1.5;
            padding-top: var(--dl-space-space-unit);
            border-width: 0px;
            margin-right: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-oneandhalfunits);
            border-radius: 32px;
            padding-right: var(--dl-space-space-oneandhalfunits);
            padding-bottom: var(--dl-space-space-unit);
          }
          .landing-icon {
            fill: var(--dl-color-grays-gray40);
            width: 20px;
            height: 20px;
          }
          .landing-textinput {
            flex: 1;
            color: var(--dl-color-grays-gray40);
            border-width: 0px;
            padding-left: 12px;
            padding-right: 12px;
          }
          .landing-button {
            display: flex;
            align-items: center;
            line-height: 1;
            padding-top: 20px;
            white-space: nowrap;
            padding-left: 32px;
            padding-right: 32px;
            padding-bottom: 20px;
            justify-content: center;
          }
          .landing-features-container {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .landing-feature {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: 20px;
            flex-direction: row;
          }
          .landing-icon02 {
            fill: #62bf77;
            width: 17px;
            height: 17px;
            min-width: 17px;
            margin-right: 12px;
          }
          .landing-text03 {
            color: var(--dl-color-grays-gray60);
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
          }
          .landing-feature1 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: 20px;
            flex-direction: row;
          }
          .landing-icon04 {
            fill: #62bf77;
            width: 17px;
            height: 17px;
            min-width: 17px;
            margin-right: 12px;
          }
          .landing-text04 {
            color: var(--dl-color-grays-gray60);
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
          }
          .landing-feature2 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .landing-icon06 {
            fill: #62bf77;
            width: 17px;
            height: 17px;
            min-width: 17px;
            margin-right: 12px;
          }
          .landing-text05 {
            color: var(--dl-color-grays-gray60);
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
          }
          .landing-image-container {
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .landing-image {
            width: 100%;
            max-width: 589px;
            object-fit: cover;
            margin-left: 45px;
          }
          .landing-section-one {
            border-color: rgba(33, 33, 33, 0.1);
            border-width: 1px;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .landing-max-width1 {
            flex-direction: column;
          }
          .landing-text06 {
            text-align: center;
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .landing-text08 {
            color: var(--dl-color-backgrounds-primary);
          }
          .landing-cards-container {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .landing-max-width2 {
            flex-direction: row;
            justify-content: flex-start;
          }
          .landing-image-container1 {
            flex: 1;
            margin-right: var(--dl-space-space-oneandhalfunits);
          }
          .landing-image1 {
            width: 100%;
            max-width: 640px;
            object-fit: cover;
            margin-left: -100px;
          }
          .landing-content-container1 {
            flex: 1;
            display: flex;
            max-width: 446px;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .landing-text12 {
            margin-bottom: 24px;
          }
          .landing-text14 {
            color: var(--dl-color-backgrounds-primary);
          }
          .landing-text15 {
            color: var(--dl-color-grays-gray100);
          }
          .landing-max-width3 {
            flex-direction: row;
            justify-content: flex-start;
          }
          .landing-content-container2 {
            flex: 1;
            display: flex;
            max-width: 446px;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .landing-text18 {
            margin-bottom: 24px;
          }
          .landing-text20 {
            color: var(--dl-color-backgrounds-primary);
          }
          .landing-text21 {
            color: var(--dl-color-grays-gray100);
          }
          .landing-image-container2 {
            flex: 1;
            margin-left: var(--dl-space-space-oneandhalfunits);
          }
          .landing-image2 {
            width: 100%;
            object-fit: cover;
            margin-left: 85px;
          }
          .landing-section-four {
            padding-bottom: 0px;
          }
          .landing-max-width4 {
            flex-direction: column;
          }
          .landing-text24 {
            text-align: center;
            margin-bottom: var(--dl-space-space-threeunits);
          }
          .landing-text26 {
            color: var(--dl-color-backgrounds-primary);
          }
          .landing-text27 {
            color: transparent;
          }
          .landing-slider {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            transition: 0.5s;
            align-items: stretch;
            flex-direction: row;
          }
          .landing-max-width5 {
            flex-direction: column;
            justify-content: center;
          }
          .landing-heading-container {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: column;
          }
          .landing-text28 {
            text-align: center;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .landing-text31 {
            color: var(--dl-color-backgrounds-primary);
          }
          .landing-text34 {
            color: var(--dl-color-grays-gray100);
          }
          .landing-get-the-app {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: row;
          }
          .landing-image3 {
            width: 151px;
            object-fit: cover;
            margin-right: var(--dl-space-space-unit);
          }
          .landing-image4 {
            width: 151px;
            object-fit: cover;
          }
          .landing-cards-container1 {
            width: 100%;
            display: grid;
            grid-gap: var(--dl-space-space-twounits);
            grid-template-columns: 1fr 1fr;
          }
          .landing-section-six {
            padding-top: var(--dl-space-space-threeunits);
            padding-bottom: 0px;
            background-color: var(--dl-color-backgrounds-primary);
          }
          .landing-max-width6 {
            align-items: stretch;
          }
          .landing-content-container3 {
            flex: 1;
            display: flex;
            min-width: 60%;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .landing-text36 {
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .landing-text38 {
            color: var(--dl-color-grays-white100);
          }
          .landing-text39 {
            color: var(--dl-color-grays-white80);
            margin-bottom: 36px;
          }
          .landing-input-container1 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: row;
          }
          .landing-container2 {
            width: 100%;
            height: 56px;
            display: flex;
            max-width: 376px;
            align-items: center;
            line-height: 1.5;
            padding-top: var(--dl-space-space-unit);
            border-width: 0px;
            margin-right: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-oneandhalfunits);
            border-radius: 32px;
            padding-right: var(--dl-space-space-oneandhalfunits);
            padding-bottom: var(--dl-space-space-unit);
          }
          .landing-icon08 {
            fill: var(--dl-color-grays-gray40);
            width: 20px;
            height: 20px;
          }
          .landing-textinput1 {
            flex: 1;
            color: var(--dl-color-grays-gray40);
            border-width: 0px;
            padding-left: 12px;
            padding-right: 12px;
          }
          .landing-button1 {
            display: flex;
            transition: 0.3s;
            align-items: center;
            line-height: 1;
            padding-top: 20px;
            white-space: nowrap;
            padding-left: 32px;
            padding-right: 32px;
            padding-bottom: 20px;
            justify-content: center;
            background-color: var(--dl-color-grays-dark100);
          }
          .landing-button1:hover {
            background-color: var(--dl-color-grays-white100);
          }
          .landing-features-container1 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .landing-feature3 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: 20px;
            flex-direction: row;
          }
          .landing-icon10 {
            fill: var(--dl-color-grays-white100);
            width: 17px;
            height: 17px;
            min-width: 17px;
            margin-right: 12px;
          }
          .landing-text40 {
            color: var(--dl-color-grays-white80);
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
          }
          .landing-feature4 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: 20px;
            flex-direction: row;
          }
          .landing-icon12 {
            fill: var(--dl-color-grays-white100);
            width: 17px;
            height: 17px;
            min-width: 17px;
            margin-right: 12px;
          }
          .landing-text41 {
            color: var(--dl-color-grays-white80);
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
          }
          .landing-feature5 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .landing-icon14 {
            fill: var(--dl-color-grays-white100);
            width: 17px;
            height: 17px;
            min-width: 17px;
            margin-right: 12px;
          }
          .landing-text42 {
            color: var(--dl-color-grays-white80);
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
          }
          .landing-image-container3 {
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .landing-image5 {
            width: 100%;
            max-width: 589px;
            min-width: 550px;
            object-fit: contain;
          }
          @media (max-width: 991px) {
            .landing-max-width {
              flex-direction: column;
            }
            .landing-content-container {
              margin-bottom: 42px;
              padding-right: 0px;
            }
            .landing-text {
              width: 100%;
            }
            .landing-image {
              max-width: 100%;
              margin-left: 0px;
            }
            .landing-image1 {
              max-width: 100%;
              margin-left: 0px;
            }
            .landing-content-container1 {
              margin-bottom: 42px;
              padding-right: 0px;
            }
            .landing-text12 {
              width: 100%;
            }
            .landing-content-container2 {
              margin-bottom: 42px;
              padding-right: 0px;
            }
            .landing-text18 {
              width: 100%;
            }
            .landing-image2 {
              max-width: 100%;
              margin-left: 0px;
            }
            .landing-max-width6 {
              flex-direction: column;
            }
            .landing-text36 {
              width: 100%;
            }
            .landing-image5 {
              max-width: 100%;
            }
          }
          @media (max-width: 767px) {
            .landing-text06 {
              margin-bottom: var(--dl-space-space-twounits);
            }
            .landing-cards-container {
              flex-wrap: wrap;
              justify-content: space-between;
            }
            .landing-max-width2 {
              flex-direction: column;
            }
            .landing-image-container1 {
              width: 100%;
              margin-right: 0px;
            }
            .landing-image1 {
              margin-bottom: var(--dl-space-space-twounits);
            }
            .landing-content-container1 {
              max-width: 100%;
            }
            .landing-max-width3 {
              flex-direction: column-reverse;
            }
            .landing-content-container2 {
              max-width: 100%;
            }
            .landing-image-container2 {
              width: 100%;
              margin-right: 0px;
            }
            .landing-image2 {
              margin-bottom: var(--dl-space-space-twounits);
            }
            .landing-text24 {
              margin-bottom: var(--dl-space-space-twounits);
            }
            .landing-text28 {
              margin-bottom: var(--dl-space-space-twounits);
            }
            .landing-cards-container1 {
              grid-template-columns: 1fr;
            }
            .landing-image5 {
              min-width: 100%;
            }
          }
          @media (max-width: 479px) {
            .landing-input-container {
              flex-direction: column;
            }
            .landing-container1 {
              max-width: 100%;
              margin-bottom: var(--dl-space-space-unit);
            }
            .landing-cards-container {
              justify-content: center;
            }
            .landing-input-container1 {
              flex-direction: column;
            }
            .landing-container2 {
              max-width: 100%;
              margin-bottom: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

export default Landing
