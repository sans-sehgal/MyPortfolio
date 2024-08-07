// import Fade from "react-reveal/Fade";
import { Fade } from "react-awesome-reveal";
import KclLogo from "./assets/StonyLogo.png";
import NirmaLogo from "./assets/manipal.jpg";
import Lottie from "lottie-react";
import UpAnimationData from "./assets/UpAnimation.json";
import EducationAnimationData from "./assets/EducationAnimation.json";
import SocialMediaAnimation from "./assets/SocialMediaAnimation.json";
import InstagramAnimation from "./assets/InstagramAnimation.json";
import GithubAnimation from "./assets/GithubAnimation.json";
import MailAnimation from "./assets/MailAnimation.json";
import LinkedinAnimation from "./assets/LinkedInAnimation.json";
import React, { useState, useEffect } from "react";
export default function Education() {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 20) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div
        id='education'
        className='bg-customGradient-900  w-screen'
        style={{ paddingTop: "150px" }}
      >
        <div className='mx-auto max-w-7xl px-6 lg:px-8 '>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-16 mx-auto max-w-7xl px-6 lg:px-8'>
            <div>
              <Fade bottom duration={1200}>
                <h2 className='text-3xl font-bold tracking-tight text-customGradient-200 sm:text-4xl'>
                  Education
                </h2>
                <blockquote className='mt-6 text-xl leading-8 italic text-customGradient-300 border-l-4 border-customGradient-200 pl-4'>
                  "Education is not the learning of facts, but the training of
                  the mind to think." – Albert Einstein
                </blockquote>
              </Fade>
            </div>
            <div className='flex justify-center items-center'>
              <Fade bottom duration={1200}>
                <div
                  style={{ width: "400px", height: "250px" }}
                  className='center'
                >
                  <Lottie animationData={EducationAnimationData}></Lottie>
                </div>
              </Fade>
            </div>
          </div>
        </div>

        <section class='relative isolate overflow-hidden bg-customGradient-900 px-6 sm:py-32 lg:px-8'>
          <div class='absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-customGradient-900'></div>
          <div class='mx-auto max-w-2xl lg:max-w-4xl pb-10'>
            <Fade bottom duration={1500}>
              <img src={KclLogo} alt='' className='mx-auto'></img>
            </Fade>
            <figure class='mt-10'>
              <Fade bottom duration={1500}>
                <h3 className='text-center text-xl text-customGradient-200 font-bold leading-8'>
                  Masters in Computer Science
                </h3>
                <h3 className='text-center text-l text-customGradient-200 font-bold leading-8'>
                  Stony Brook University, New York, USA
                </h3>

                <div className='mt-10 flex items-center gap-x-4'>
                  <h4 className='flex-none text-xl font-semibold leading-6 text-customGradient-400'>
                    Coursework
                  </h4>
                  <div className='h-px flex-auto bg-customGradient-50'></div>
                </div>
              </Fade>
              <ul
                role='list'
                className='mt-8 grid grid-cols-3 gap-6 text-sm leading-6 text-customGradient-200 sm:grid-cols-3 sm:gap-6'
              >
                <Fade bottom duration={1100}>
                  <li className='flex flex-col items-center gap-3 sm:flex-row sm:items-center sm:justify-start'>
                    <a class='relative z-10 rounded-full bg-customGradient-50 px-3 py-1.5 font-medium text-gray-800 hover:bg-customGradient-400'>
                      Full Stack Development
                    </a>
                  </li>
                </Fade>
                <Fade bottom duration={1200}>
                  <li className='flex flex-col items-center gap-3 sm:flex-row sm:items-center sm:justify-start'>
                    <a class='relative z-10 rounded-full bg-customGradient-50 px-3 py-1.5 font-medium text-gray-800 hover:bg-customGradient-400'>
                      Computer Networks
                    </a>
                  </li>
                </Fade>
                <Fade bottom duration={1300}>
                  <li className='flex flex-col items-center gap-3 sm:flex-row sm:items-center sm:justify-start'>
                    <a class='relative z-10 rounded-full bg-customGradient-50 px-3 py-1.5 font-medium text-gray-800 hover:bg-customGradient-400'>
                      Operating Systems
                    </a>
                  </li>
                </Fade>
                <Fade bottom duration={1400}>
                  <li className='flex flex-col items-center gap-3 sm:flex-row sm:items-center sm:justify-start'>
                    <a class='relative z-10 rounded-full bg-customGradient-50 px-3 py-1.5 font-medium text-gray-800 hover:bg-customGradient-400'>
                      Distributed Systems
                    </a>
                  </li>
                </Fade>
                <Fade bottom duration={1500}>
                  <li className='flex flex-col items-center gap-3 sm:flex-row sm:items-center sm:justify-start'>
                    <a class='relative z-10 rounded-full bg-customGradient-50 px-3 py-1.5 font-medium text-gray-800 hover:bg-customGradient-400'>
                      Human Computer Interaction
                    </a>
                  </li>
                </Fade>

                <Fade bottom duration={1700}>
                  <li className='flex flex-col items-center gap-3 sm:flex-row sm:items-center sm:justify-start'>
                    <a class='relative z-10 rounded-full bg-customGradient-50 px-3 py-1.5 font-medium text-gray-800 hover:bg-customGradient-400'>
                      Data Science Foundations
                    </a>
                  </li>
                </Fade>
              </ul>
            </figure>
          </div>
          <Fade bottom duration={1700}>
            <hr></hr>
          </Fade>
          <div class='mx-auto max-w-2xl lg:max-w-4xl pt-10'>
            <Fade bottom duration={1500}>
              <img src={NirmaLogo} alt='' className='mx-auto'></img>
            </Fade>
            <figure class='mt-10'>
              <Fade bottom duration={1500}>
                <h3 className='text-center text-xl text-customGradient-200 font-bold leading-8'>
                  Bachelors in Computer Science
                </h3>
                <h3 className='text-center text-l text-customGradient-200 font-bold leading-8'>
                  Manipal Institute of Technology, Manipal, India
                </h3>
                {/* </blockquote> */}
                <div className='mt-10 flex items-center gap-x-4'>
                  <h4 className='flex-none text-xl font-semibold leading-6 text-customGradient-400'>
                    Coursework
                  </h4>
                  <div className='h-px flex-auto bg-customGradient-50'></div>
                </div>
              </Fade>
              <ul
                role='list'
                className='mt-8 grid grid-cols-3 gap-6 text-sm leading-6 text-customGradient-200 sm:grid-cols-3 sm:gap-6'
              >
                <Fade bottom duration={1100}>
                  <li className='flex flex-col items-center gap-3 sm:flex-row sm:items-center sm:justify-start'>
                    <a class='relative z-10 rounded-full bg-customGradient-50 px-3 py-1.5 font-medium text-gray-800 hover:bg-customGradient-400'>
                      Algorithms
                    </a>
                  </li>
                </Fade>
                <Fade bottom duration={1200}>
                  <li className='flex flex-col items-center gap-3 sm:flex-row sm:items-center sm:justify-start'>
                    <a class='relative z-10 rounded-full bg-customGradient-50 px-3 py-1.5 font-medium text-gray-800 hover:bg-customGradient-400'>
                      Object Oriented Programming
                    </a>
                  </li>
                </Fade>
                <Fade bottom duration={1300}>
                  <li className='flex flex-col items-center gap-3 sm:flex-row sm:items-center sm:justify-start'>
                    <a class='relative z-10 rounded-full bg-customGradient-50 px-3 py-1.5 font-medium text-gray-800 hover:bg-customGradient-400'>
                      Software Engineering
                    </a>
                  </li>
                </Fade>
                <Fade bottom duration={1400}>
                  <li className='flex flex-col items-center gap-3 sm:flex-row sm:items-center sm:justify-start'>
                    <a class='relative z-10 rounded-full bg-customGradient-50 px-3 py-1.5 font-medium text-gray-800 hover:bg-customGradient-400'>
                      Machine Learning
                    </a>
                  </li>
                </Fade>
                <Fade bottom duration={1500}>
                  <li className='flex flex-col items-center gap-3 sm:flex-row sm:items-center sm:justify-start'>
                    <a class='relative z-10 rounded-full bg-customGradient-50 px-3 py-1.5 font-medium text-gray-800 hover:bg-customGradient-400'>
                      Database Systems
                    </a>
                  </li>
                </Fade>
                <Fade bottom duration={1600}>
                  <li className='flex flex-col items-center gap-3 sm:flex-row sm:items-center sm:justify-start'>
                    <a class='relative z-10 rounded-full bg-customGradient-50 px-3 py-1.5 font-medium text-gray-800 hover:bg-customGradient-400'>
                      Parallel Computing
                    </a>
                  </li>
                </Fade>
                {/* <Fade bottom duration={1700}>
                  <li className='flex flex-col items-center gap-3 sm:flex-row sm:items-center sm:justify-start'>
                    <a class='relative z-10 rounded-full bg-customGradient-50 px-3 py-1.5 font-medium text-gray-800 hover:bg-customGradient-400'>
                      Machine Learning
                    </a>
                  </li>
                </Fade> */}
                {/* <Fade bottom duration={1800}>
                  <li className='flex flex-col items-center gap-3 sm:flex-row sm:items-center sm:justify-start'>
                    <a class='relative z-10 rounded-full bg-customGradient-50 px-3 py-1.5 font-medium text-gray-800 hover:bg-customGradient-400'>
                      Big Data Analytics
                    </a>
                  </li>
                </Fade> */}
              </ul>
            </figure>
          </div>
        </section>
        <>
          <div>
            <div
              id='social'
              className='font-semibold leading-6 text-customGradient-200 hover:text-opacity-50 flex justify-center items-center'
            >
              <div style={{ width: "200px", height: "200px" }}>
                <Lottie animationData={SocialMediaAnimation}></Lottie>
              </div>
            </div>
            <div className='flex justify-center items-center pb-10'>
              {/* <a
                href='https://www.linkedin.com/in/parikhvinanti/'
                target='_blank'
                rel='noopener noreferrer'
                className='mx-4'
              >
                <div className='font-semibold leading-6 text-customGradient-200 hover:text-opacity-50 flex justify-center items-center'>
                  <div style={{ width: "50px", height: "50px" }}>
                    <Lottie animationData={LinkedinAnimation}></Lottie>
                  </div>
                </div>
              </a> */}
              <a href='mailto:sanskarsehgal9@gmail.com' className='mx-4'>
                <div className='font-semibold leading-6 text-customGradient-200 hover:text-opacity-50 flex justify-center items-center'>
                  <div style={{ width: "50px", height: "50px" }}>
                    <Lottie animationData={MailAnimation}></Lottie>
                  </div>
                </div>
              </a>
              {/* <a
                href='https://www.instagram.com/vinanti_parikh/'
                target='_blank'
                rel='noopener noreferrer'
                className='mx-4'
              >
                <div className='font-semibold leading-6 text-customGradient-200 hover:text-opacity-50 flex justify-center items-center'>
                  <div style={{ width: "50px", height: "50px" }}>
                    <Lottie animationData={InstagramAnimation}></Lottie>
                  </div>
                </div>
              </a> */}

              <a
                href='https://github.com/sans-sehgal'
                target='_blank'
                rel='noopener noreferrer'
                className='mx-4'
              >
                <div className='font-semibold leading-6 text-customGradient-200 hover:text-opacity-50 flex justify-center items-center'>
                  <div style={{ width: "50px", height: "50px" }}>
                    <Lottie animationData={GithubAnimation}></Lottie>
                  </div>
                </div>
              </a>
            </div>
            {showScrollButton && (
              <div className='flex justify-end fixed bottom-0 right-0 mr-4 mb-4'>
                <button onClick={scrollToTop} className='w-20 h-20'>
                  <Lottie
                    animationData={UpAnimationData}
                    className='h-20 w-20'
                  ></Lottie>
                </button>
              </div>
            )}
          </div>
        </>
      </div>
    </>
  );
}
