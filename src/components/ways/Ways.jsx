import React from 'react'
import './Ways.scss';
import image9 from '../../assets/images/image9.png'
import d3 from '../../assets/images/d3.png'
import design from '../../assets/images/design.png'
import car from '../../assets/images/car.png'
import prog from '../../assets/images/prog.png'
import meneg from '../../assets/images/meneg.png'

export default function Ways() {
  return (
    <div className='ways'>
      <div className="container">
        <h2>Направлении</h2>
        <p>Проект будет проводится по направлениям</p>

        <div className="cards">
          <div className="cards__list">
            <div className="card">
              <span>
              SMM и Таргетинг, копирайтинг
              </span>
              <img src={image9} alt="" />
            </div>
            <div className="card">
              <span>
              SMM и Таргетинг, копирайтинг
              </span>
              <img src={d3} alt="" />
            </div>
            <div className="card">
              <span>
              SMM и Таргетинг, копирайтинг
              </span>
              <img src={design} alt="" />
            </div>
            <div className="card">
              <span>
              SMM и Таргетинг, копирайтинг
              </span>
              <img src={car} alt="" />
            </div>
            <div className="card">
              <span>
              SMM и Таргетинг, копирайтинг
              </span>
              <img src={prog} alt="" />
            </div>
            <div className="card">
              <span>
              SMM и Таргетинг, копирайтинг
              </span>
              <img src={meneg} alt="" />
            </div>
          </div>

          <button className='cards__btn' type='button'>Записаться</button>
        </div>
      </div>
    </div>
  )
}
