import React from 'react'
import './Home.scss';
import Header from '../../components/header/Header'
import Title from '../../components/title/Title';
import About from '../../components/about/About';

export default function Home() {
  return (
    <div className='home'>
      <Header/>
      <Title/>
      <About/>
    </div>
  )
}
