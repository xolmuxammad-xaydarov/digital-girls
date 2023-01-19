import React from 'react'
import './Home.scss';
import Header from '../../components/header/Header'
import Title from '../../components/title/Title';
import About from '../../components/about/About';
import Ways from '../../components/ways/Ways';
import Detailed from '../../components/detailed/Detailed';
import Task from '../../components/task/Task';
import Register from '../../components/register/Register';
import Results from '../../components/results/Results';
import Address from '../../components/address/Address';
import Footer from '../../components/footer/Footer';

export default function Home() {
  return (
    <div className='home'>
      <Header/>
      <div className="back">
      <Title/>
      <About/>
      </div>
      <Ways/>
      <Detailed/>
      <Task/>
      <Register/>
      <Results/>
      <Address/>
      <Footer/>
    </div>
  )
}
