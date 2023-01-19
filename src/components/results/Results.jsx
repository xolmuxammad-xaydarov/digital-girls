import React from 'react'
import './Results.scss'
import code from '../../assets/images/code.png'
import diploma from '../../assets/images/diploma.svg'
import pay from '../../assets/images/pay.svg'
import raketa from '../../assets/images/raketa.svg'
import arrow from '../../assets/images/arrow.svg'

export default function Results() {
  return (
    <div className='results'>
      <div className="container">
        <h2>Результаты</h2>
        <p className='result__text'>Ожидаемый результат: Подготовка квалифицированных и конкурентоспособных  кадров и разработка стартапп проектов и  среди девушек</p>

        <ul>
          <li>
            <img src={code} alt="" />
            <p>Самореализация девушек в сфере IT</p>
          </li>
          <li>
            <img src={diploma} alt="" />
            <p>Выбор профессии без квалификациии дипломов</p>
          </li>
          <li>
            <img src={pay} alt="" />
            <p>Возможность зарабатывать дистанционно (фриланс)</p>
          </li>
          <li>
            <img src={raketa} alt="" />
            <p>Возможность начать свои социальные проекты в виде Старт апов</p>
          </li>
          <li>
            <img src={arrow} alt="" />
            <p>Маркетинговые навыки</p>
          </li>
        </ul>
      </div>
    </div>
  )
}
