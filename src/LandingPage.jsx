import React from "react";
import DhaivatImage from "./assets/me.jpg";
import LondonBackScreen from "./assets/NewYorkBackScreen.jpeg";
import Lottie from "lottie-react";
import AnimationData from "./assets/DownAnimation.json";
// import Fade from "react-reveal/Fade";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-scroll";

export default function LandingPage(props) {
  if (props.isLoggedIn) {
    return (
      <>
        <div
          id='home'
          className='relative isolate w-screen min-h-screen overflow-hidden bg-customGradient-900 py-24 sm:py-32 flex flex-col items-center justify-center text-center'
        >
          <img
            src={LondonBackScreen}
            alt=''
            className='absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center opacity-15'
          />
          <div
            className='hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl'
            aria-hidden='true'
          >
            <div className='aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#013a63] to-[#90e0ef] opacity-20'></div>
          </div>
          <div
            className='absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu'
            aria-hidden='true'
          >
            <div className='aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#90e0ef] to-[#013a63] opacity-20'></div>
          </div>
          <Fade bottom duration={1200}>
            <img
              src={DhaivatImage}
              alt='The profile person image is presented for the profile is to be kept here'
              className='w-64 h-64 md:w-80 md:h-80 rounded-full object-cover object-center opacity-95 mb-6'
            />
            <div className='mx-auto max-w-3xl px-6 lg:px-8'>
              <h2 className='text-3xl md:text-4xl font-bold tracking-tight text-customGradient-50 sm:text-4xl hover:text-opacity-80 transition duration-300 ease-in-out'>
                Software Engineer and Full-Stack Developer
              </h2>
              <p className='mt-6 text-lg leading-8 text-customGradient-300'>
                Hello, I am Sanskar. With over 6 years of experience in web
                development, I excel in creating dynamic and efficient web
                applications using HTML/CSS/JS/TS, React.js, Redux, and more. My
                expertise includes developing beautiful UIs using React,
                optimizing performance, and integrating RESTful APIs for
                seamless backend communication. I am proficient in data
                management with PostgreSQL, MongoDB, DynamoDB, and Firebase, and
                skilled in implementing CI/CD pipelines and web security best
                practices. I am also experienced in enhancing SEO and user
                engagement with tools like Next.js and various analytics
                platforms.
              </p>
            </div>
          </Fade>
          <Link
            to='expertise'
            className='font-semibold leading-6 text-gray-100 hover:text-opacity-80 transition duration-300 ease-in-out mt-8'
            smooth={true}
            duration={800}
          >
            <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-8'>
              <Lottie animationData={AnimationData} />
            </div>
          </Link>
        </div>
      </>
    );
  }
}
