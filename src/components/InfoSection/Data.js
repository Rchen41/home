import React from 'react'

const lightPurple = '#D0C8E9'
const darkPurple = '#330C49'


export const homeObjOne = {
  id: 'about',
  idwrapper: 'aboutwrapper',
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: 'About me',
  headline: 'Regina Chen',
  description: <p>
    Hi! As you can see this is my personal webpage.
    <br/><br/>
    As a short intro, I was born and raised in NYC.
    I am attending <b style={{color: lightPurple}}>Stuyvesant High School</b>,
    and I am graduating in 2024 with a high school deploma.
    <br/><br/>
    I'm currently a Junior that's interested in <b style={{color: lightPurple}}>Computer Science</b>.
    So far, my experience at Stuy has been pretty good.
  </p>,
  buttonLabel: 'Resume',
  imgStart: false,
  img: require('../../images/Character_Silver_Wolf_Splash_Art.webp'),
  alt: 'Regina',
  dark: true,
  primary: true,
  darkText: false,
  linkRef: "https://docs.google.com/document/d/1f2H7l-bByoZ4JOKukgZNF6vxPg5iJO2qLRu8wQx3krc/preview"
}

export const homeObjTwo = {
  id: 'interests',
  idwrapper: 'interestswrapper',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'My Interests',
  headline: 'A bit of everything',
  description: <div>
    In school, I am taking <b style={{color: darkPurple}}>AP Computer Science</b> where I'm 
    learning algorithms using the programming language <b style={{color: darkPurple}}>java</b>.
    <br/><br/>
    During my free time, I would probably be playing open world rpg video games or reading light novels.
    Two of my favorite games right now are <b style={{color: darkPurple}}> Genshin Impact </b> 
    and <b style={{color: darkPurple}}> Honkai: Star Rail</b> because I really like the story lines, 
    the characters and their Chinese voice actors.  
  </div>,
  buttonLabel: 'My spreadsheets',
  imgStart: true,
  img: require('../../images/Character_Himeko_Splash_Art.webp'),
  alt: 'Interests',
  dark: false,
  primary: false,
  darkText: true,
  linkRef: ""
}

export const homeObjThree = {
  id: 'purpose',
  idwrapper: 'purposewrapper',
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: 'my website',
  headline: "The purpose",
  description: <div>
    This site is still in development, so to keep myself organized and on track,
    I'll be updating the features I have planned and in progress on a separate page.
    I'm still getting acclimated to frontend development, so it's likely going to be a long but fun journey.
    <br/><br/>
    I would say one factor driving me to make this website is to grow an <b style={{color: lightPurple}}>extension of myself. </b>
    When I was younger, I often found myself lagging behind those who were more artistically talented than me, but I always had ideas
    to design and create things. Now I have a way to put some of those ideas into existence.
  </div>,
  buttonLabel: 'Media gallery (TBD)',
  imgStart: false,
  img: require('../../images/Character_Kafka_Splash_Art.webp'),
  alt: 'purpose',
  dark: true,
  primary: true,
  darkText: false,
  linkRef: "https://docs.google.com/document/d/1Ovf_qBS0vfUTw018aqn4eoGpA8Z6baGgKkxfF8MN8Ts/edit?usp=sharing"
}
