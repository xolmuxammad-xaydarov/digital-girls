import React from 'react'
import './About.scss'
import team1 from '../../assets/images/team1.png';
import team2 from '../../assets/images/team2.png';

export default function About() {
  return (
    <div className='about'>
      <div className="container">
        <h2 className='about__title'>О проекте</h2>

        <div className="team1">
          <div className="background">
            <div className='img__block'>
              <img src={team1} alt="" />
            </div>
            <div className='team1__text__block'>
              <p className='team1__text'>
              Организация курсов повышения квалификации для девушек специалистов в сфере ИТ   и подготовка высококвалифицированных кадров. Дать практические навыки участникам, которые пригодятся в будущей профессиональной деятельности благодаря привлечению в процесс обучения опытных ведущих отечественных и зарубежных специалистов. Создание программы для системной развитии ИТ- сферы в республике.
              </p>
            </div>
          </div>
        </div>

        <div className="team2">
          <div className="background2">
            <div className='team1__text__block2'>
              <p className='team1__text2'>
              Проект “Программа обучения девушек в сфере И.Т ”  предназначен для девушек в возрасте 16-35 ,которые имеет базовые знание в сфере айти.
              </p>
            </div>
            <div className='img__block2'>
              <img src={team2} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
