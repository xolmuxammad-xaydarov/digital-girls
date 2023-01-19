import React from 'react'
import './Title.scss'
import woman from '../../assets/images/woman.png'

export default function Title() {
  return (
    <div className='bg '>
      <div className="allContent container">
        <div className='text__content'>
          <h1 className='h1'>“Girls in digital”</h1>
          <p>Организация курсов повышения квалификации для девушек специалистов в сфере ИТ   и подготовка высококвалифицированных кадров</p>
          <a href="/">Подробнее</a>
        </div>
        <div className='picture'>
          <img src={woman} alt="" />
        </div>
      </div>
    </div>
  )
}
