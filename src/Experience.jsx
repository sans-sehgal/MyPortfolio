import React from "react";
import TM from "./assets/tech-mahindra-logo-new.jpeg";
import BuzzFeed from "./assets/buzzfeed-logo.jpeg";
import PnG from "./assets/P&G_logo.png";
import Cult from "./assets/cult.fit.jpeg";

// import Fade from "react-reveal/Fade";
import { Fade } from "react-awesome-reveal";

import { Link } from "react-scroll";
import Lottie from "lottie-react";
import DownAnimationData from "./assets/DownAnimation.json";
import ExperienceAnimationData from "./assets/ExperienceAnimation.json";
export default function Experience() {
  return (
    <>
      <div id='experience' className='bg-customGradient-900 py-24 w-screen'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-16 mx-auto max-w-7xl px-6 lg:px-8'>
            <div>
              <Fade bottom duration={1200}>
                <h2 className='text-3xl font-bold tracking-tight text-customGradient-200 sm:text-4xl'>
                  Experience
                </h2>
                <blockquote className='mt-6 text-xl leading-8 italic text-customGradient-300 border-l-4 border-customGradient-200 pl-4'>
                  “Turning complex problems into elegant solutions, one line of
                  code at a time.”
                </blockquote>
              </Fade>
            </div>
            <div className='flex justify-center items-center'>
              <Fade bottom duration={1200}>
                <div
                  style={{ width: "300px", height: "250px" }}
                  className='center'
                >
                  <Lottie animationData={ExperienceAnimationData}></Lottie>
                </div>
              </Fade>
            </div>
          </div>

          <Fade bottom duration={1500}>
            <div className='mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-customGradient-50 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none'>
              <div className='p-8 sm:p-10 lg:flex-auto'>
                <h3 className='text-2xl font-bold tracking-tight text-customGradient-200'>
                  Buzzfeed - Sr. Full Stack Developer
                </h3>
                <h4 className='text-customGradient-200 italic'>
                  August 2022 - Present | New York City, New York, US
                </h4>
                <p className='mt-6 text-base leading-7 text-customGradient-200'>
                  Contributed to a scalable React-based frontend for BuzzFeed's
                  interactive quiz platform, supporting millions of daily active
                  users and significantly enhancing user engagement - <br /> •
                  Developed React components along with custom hooks reducing
                  code duplication by 22%. <br /> • Overhauled existing
                  components to ensure they meet WCAG 2.0 accessibility
                  standards. <br /> • Performance enhancement by using React's
                  lazy loading, suspense, and code splitting. <br />
                  • Implemented Pub/Sub APIs with GraphQL subscriptions to
                  facilitate real-time updates. <br />• Led a 12% boost in
                  website traffic, generating an additional $400,000 in ad
                  revenue.
                </p>
                <div className='mt-10 flex items-center gap-x-4'>
                  <h4 className='flex-none text-xl font-semibold leading-6 text-customGradient-400'>
                    Technology Stack
                  </h4>
                  <div className='h-px flex-auto bg-gray-100'></div>
                </div>
                <ul
                  role='list'
                  className='mt-8 flex flex-wrap gap-3 text-sm leading-6 text-customGradient-200'
                >
                  <li className='flex items-center'>
                    <a className='relative z-10 rounded-full bg-customGradient-50 px-2 py-1 font-medium text-gray-600 hover:bg-customGradient-400'>
                      React
                    </a>
                  </li>
                  <li className='flex items-center'>
                    <a className='relative z-10 rounded-full bg-customGradient-50 px-2 py-1 font-medium text-gray-600 hover:bg-customGradient-400'>
                      Apollo Client
                    </a>
                  </li>
                  <li className='flex items-center'>
                    <a className='relative z-10 rounded-full bg-customGradient-50 px-2 py-1 font-medium text-gray-600 hover:bg-customGradient-400'>
                      GraphQL
                    </a>
                  </li>
                  <li className='flex items-center'>
                    <a className='relative z-10 rounded-full bg-customGradient-50 px-2 py-1 font-medium text-gray-600 hover:bg-customGradient-400'>
                      React Testing Library
                    </a>
                  </li>
                  <li className='flex items-center'>
                    <a className='relative z-10 rounded-full bg-customGradient-50 px-2 py-1 font-medium text-gray-600 hover:bg-customGradient-400'>
                      Git
                    </a>
                  </li>
                  <li className='flex items-center'>
                    <a className='relative z-10 rounded-full bg-customGradient-50 px-2 py-1 font-medium text-gray-600 hover:bg-customGradient-400'>
                      Jest
                    </a>
                  </li>
                  <li className='flex items-center'>
                    <a className='relative z-10 rounded-full bg-customGradient-50 px-2 py-1 font-medium text-gray-600 hover:bg-customGradient-400'>
                      Lighthouse
                    </a>
                  </li>
                  <li className='flex items-center'>
                    <a className='relative z-10 rounded-full bg-customGradient-50 px-2 py-1 font-medium text-gray-600 hover:bg-customGradient-400'>
                      Webpack
                    </a>
                  </li>
                  <li className='flex items-center'>
                    <a className='relative z-10 rounded-full bg-customGradient-50 px-2 py-1 font-medium text-gray-600 hover:bg-customGradient-400'>
                      Jenkins
                    </a>
                  </li>
                  <li className='flex items-center'>
                    <a className='relative z-10 rounded-full bg-customGradient-50 px-2 py-1 font-medium text-gray-600 hover:bg-customGradient-400'>
                      Docker
                    </a>
                  </li>
                  <li className='flex items-center'>
                    <a className='relative z-10 rounded-full bg-customGradient-50 px-2 py-1 font-medium text-gray-600 hover:bg-customGradient-400'>
                      Agile
                    </a>
                  </li>
                  <li className='flex items-center'>
                    <a className='relative z-10 rounded-full bg-customGradient-50 px-2 py-1 font-medium text-gray-600 hover:bg-customGradient-400'>
                      Scrum
                    </a>
                  </li>
                </ul>
              </div>
              <div className='-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0'>
                <div className='rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16 h-full'>
                  <div className='mx-auto max-w-xs h-full px-8 flex justify-center items-center'>
                    <img src={BuzzFeed} alt='' className='w-full h-auto'></img>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
          <Fade bottom duration={1700}>
            <div className='mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-customGradient-50 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none'>
              <div className='p-8 sm:p-10 lg:flex-auto'>
                <h3 className='text-2xl font-bold tracking-tight text-customGradient-200'>
                  Procter & Gamble - Frontend Developer
                </h3>
                <h4 className='text-customGradient-200 italic'>
                  April 2021 - June 2022 | Mumbai, MH, India (Remote)
                </h4>
                <p className='mt-6 text-base leading-7 text-customGradient-200'>
                  Renovated Align-Probiotic's e-commerce platform for P&G,
                  enhancing the shopping experience. Project involved creating
                  responsive product pages, shopping carts, and a redirect
                  process. Achieved a 99.81% uptime and supported a 26% increase
                  in concurrent users - <br />
                  • Implemented a smart redirect system using React and the
                  Google Maps Geolocation API. <br />• Boosted page load times
                  and SEO with Next.js SSR, increasing organic search traffic by
                  32%.
                  <br />• Reduced bounce rates by 35% by ensuring users are
                  directed to appropriate local retailers.
                </p>
                <div className='mt-10 flex items-center gap-x-4'>
                  <h4 className='flex-none text-xl font-semibold leading-6 text-customGradient-400'>
                    Technology Stack
                  </h4>
                  <div className='h-px flex-auto bg-gray-100'></div>
                </div>
                {/* here */}
                <ul
                  role='list'
                  className='mt-8 flex flex-wrap gap-3 text-sm leading-6 text-customGradient-200'
                >
                  <li className='flex items-center'>
                    <a className='relative z-10 rounded-full bg-customGradient-50 px-2 py-1 font-medium text-gray-600 hover:bg-customGradient-400'>
                      React
                    </a>
                  </li>
                  <li className='flex items-center'>
                    <a className='relative z-10 rounded-full bg-customGradient-50 px-2 py-1 font-medium text-gray-600 hover:bg-customGradient-400'>
                      Google Maps API
                    </a>
                  </li>
                  <li className='flex items-center'>
                    <a className='relative z-10 rounded-full bg-customGradient-50 px-2 py-1 font-medium text-gray-600 hover:bg-customGradient-400'>
                      NextJS
                    </a>
                  </li>
                  <li className='flex items-center'>
                    <a className='relative z-10 rounded-full bg-customGradient-50 px-2 py-1 font-medium text-gray-600 hover:bg-customGradient-400'>
                      Server Side Rendering
                    </a>
                  </li>
                  <li className='flex items-center'>
                    <a className='relative z-10 rounded-full bg-customGradient-50 px-2 py-1 font-medium text-gray-600 hover:bg-customGradient-400'>
                      SEO
                    </a>
                  </li>
                  <li className='flex items-center'>
                    <a className='relative z-10 rounded-full bg-customGradient-50 px-2 py-1 font-medium text-gray-600 hover:bg-customGradient-400'>
                      Hotjar
                    </a>
                  </li>
                  <li className='flex items-center'>
                    <a className='relative z-10 rounded-full bg-customGradient-50 px-2 py-1 font-medium text-gray-600 hover:bg-customGradient-400'>
                      Google Analytics
                    </a>
                  </li>
                  <li className='flex items-center'>
                    <a className='relative z-10 rounded-full bg-customGradient-50 px-2 py-1 font-medium text-gray-600 hover:bg-customGradient-400'>
                      JSON-LD
                    </a>
                  </li>
                </ul>
              </div>
              <div className='-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0'>
                <div className='rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16 h-full'>
                  <div className='mx-auto max-w-xs h-full px-8 flex justify-center items-center'>
                    <img src={PnG} alt='' className='w-full h-auto'></img>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
          <Fade bottom duration={1900}>
            <div className='mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-customGradient-50 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none'>
              <div className='p-8 sm:p-10 lg:flex-auto'>
                <h3 className='text-2xl font-bold tracking-tight text-customGradient-200'>
                  Tech Mahindra - Full Stack Developer
                </h3>
                <h4 className='text-customGradient-200 italic'>
                  Jan 2020 — Feb 2021 - Bangalore, KA, India (Hybrid)
                </h4>
                <p className='mt-6 text-base leading-7 text-customGradient-200'>
                  Assisted in developing an internal recruitment tool aimed at
                  automating the candidate selection process. This solution
                  enhanced efficiency and growth by streamlining the candidate
                  selection process, reducing candidate interview to onboarding
                  time by 60%, while minimizing bias - <br />• Reduced
                  application completion time from 7 minutes to less than 2
                  minutes.
                  <br />• Responsive design with Flexbox and Media Queries,
                  boosting mobile traffic by 13%. <br />• Implemented OAuth 2.0
                  integrating with multiple identity providers like Google and
                  LinkedIn.
                </p>
                <div className='mt-10 flex items-center gap-x-4'>
                  <h4 className='flex-none text-xl font-semibold leading-6 text-customGradient-400'>
                    Technology Stack
                  </h4>
                  <div className='h-px flex-auto bg-gray-100'></div>
                </div>
                <ul
                  role='list'
                  className='mt-8 flex flex-wrap gap-3 text-sm leading-6 text-customGradient-200'
                >
                  <li className='flex items-center'>
                    <a className='relative z-10 rounded-full bg-customGradient-50 px-2 py-1 font-medium text-gray-600 hover:bg-customGradient-400'>
                      React
                    </a>
                  </li>
                  <li className='flex items-center'>
                    <a className='relative z-10 rounded-full bg-customGradient-50 px-2 py-1 font-medium text-gray-600 hover:bg-customGradient-400'>
                      OCR
                    </a>
                  </li>
                  <li className='flex items-center'>
                    <a className='relative z-10 rounded-full bg-customGradient-50 px-2 py-1 font-medium text-gray-600 hover:bg-customGradient-400'>
                      SCSS
                    </a>
                  </li>
                  <li className='flex items-center'>
                    <a className='relative z-10 rounded-full bg-customGradient-50 px-2 py-1 font-medium text-gray-600 hover:bg-customGradient-400'>
                      PostgresSQL
                    </a>
                  </li>
                  <li className='flex items-center'>
                    <a className='relative z-10 rounded-full bg-customGradient-50 px-2 py-1 font-medium text-gray-600 hover:bg-customGradient-400'>
                      OAuth 2.0
                    </a>
                  </li>
                  <li className='flex items-center'>
                    <a className='relative z-10 rounded-full bg-customGradient-50 px-2 py-1 font-medium text-gray-600 hover:bg-customGradient-400'>
                      UML Diagrams
                    </a>
                  </li>
                </ul>
              </div>
              <div className='-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0'>
                <div className='rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16 h-full'>
                  <div className='mx-auto max-w-xs h-full px-8 flex justify-center items-center'>
                    <img src={TM} alt='' className='w-full h-auto'></img>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
          <Fade bottom duration={1900}>
            <div className='mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-customGradient-50 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none'>
              <div className='p-8 sm:p-10 lg:flex-auto'>
                <h3 className='text-2xl font-bold tracking-tight text-customGradient-200'>
                  Cult.Fit Healthcare - Frontend Developer
                </h3>
                <h4 className='text-customGradient-200 italic'>
                  Feb 2018 — Dec 2019 - Bangalore, KA, India
                </h4>
                <p className='mt-6 text-base leading-7 text-customGradient-200'>
                  Worked on Implementing an admin dashboard for Cult.fit staff
                  to manage user data, analyze platform metrics, and handle
                  customer support requests. The dashboard centralized key
                  functionalities, supporting 100s of staff members in managing
                  1000s of active users - <br />• Maintained React-Crux, a
                  library that simplifies CRUD operations in React applications.
                  <br />• Utilized React-Crux to create multiple CMS tools
                  within the admin dashboard.
                  <br />• Incorporated Redux-Thunk for managing state and
                  handling asynchronous operations.
                </p>
                <div className='mt-10 flex items-center gap-x-4'>
                  <h4 className='flex-none text-xl font-semibold leading-6 text-customGradient-400'>
                    Technology Stack
                  </h4>
                  <div className='h-px flex-auto bg-gray-100'></div>
                </div>
                <ul
                  role='list'
                  className='mt-8 flex flex-wrap gap-3 text-sm leading-6 text-customGradient-200'
                >
                  <li className='flex items-center'>
                    <a className='relative z-10 rounded-full bg-customGradient-50 px-2 py-1 font-medium text-gray-600 hover:bg-customGradient-400'>
                      React
                    </a>
                  </li>
                  <li className='flex items-center'>
                    <a className='relative z-10 rounded-full bg-customGradient-50 px-2 py-1 font-medium text-gray-600 hover:bg-customGradient-400'>
                      React-Crux
                    </a>
                  </li>
                  <li className='flex items-center'>
                    <a className='relative z-10 rounded-full bg-customGradient-50 px-2 py-1 font-medium text-gray-600 hover:bg-customGradient-400'>
                      Content Management Systems
                    </a>
                  </li>
                  <li className='flex items-center'>
                    <a className='relative z-10 rounded-full bg-customGradient-50 px-2 py-1 font-medium text-gray-600 hover:bg-customGradient-400'>
                      Material UI
                    </a>
                  </li>
                  <li className='flex items-center'>
                    <a className='relative z-10 rounded-full bg-customGradient-50 px-2 py-1 font-medium text-gray-600 hover:bg-customGradient-400'>
                      Redux-Thunk
                    </a>
                  </li>
                  <li className='flex items-center'>
                    <a className='relative z-10 rounded-full bg-customGradient-50 px-2 py-1 font-medium text-gray-600 hover:bg-customGradient-400'>
                      HashiCorp Vault
                    </a>
                  </li>
                  <li className='flex items-center'>
                    <a className='relative z-10 rounded-full bg-customGradient-50 px-2 py-1 font-medium text-gray-600 hover:bg-customGradient-400'>
                      Nginx
                    </a>
                  </li>
                  <li className='flex items-center'>
                    <a className='relative z-10 rounded-full bg-customGradient-50 px-2 py-1 font-medium text-gray-600 hover:bg-customGradient-400'>
                      Google Cloud
                    </a>
                  </li>
                  <li className='flex items-center'>
                    <a className='relative z-10 rounded-full bg-customGradient-50 px-2 py-1 font-medium text-gray-600 hover:bg-customGradient-400'>
                      Axios
                    </a>
                  </li>
                </ul>
              </div>
              <div className='-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0'>
                <div className='rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16 h-full'>
                  <div className='mx-auto max-w-xs h-full px-8 flex justify-center items-center'>
                    <img src={Cult} alt='' className='w-full h-auto'></img>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
          <Link
            to='education'
            className='font-semibold leading-6 text-customGradient-200 hover:text-opacity-50'
            smooth={true}
            duration={800}
          >
            <div className='absolute  left-1/2 transform -translate-x-1/2 mb-8 pt-10'>
              <Lottie animationData={DownAnimationData}></Lottie>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
