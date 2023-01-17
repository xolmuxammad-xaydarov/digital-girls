import React from 'react'
import './Header.scss'
import logoImg from '../../assets/images/logoImg.png';
import GinD from '../../assets/images/GinD.png';

export default function Header() {
  return (
    <div className='header header-l'>
      <div className="container to__line_header">
        <div className='logos'>
          <img src={logoImg} alt="" />
          <img src={GinD} alt="" />
        </div>

        <div className='right_nav'>
          <nav>
            <ul className='nav__list'>
              <li><a href="/">О Проекте</a></li>
              <li><a href="/">Направления</a></li>
              <li><a href="/">Задачи</a></li>
              <li><a href="/">Результаты</a></li>
              <li><a href="/">Контакты</a></li>
            </ul>
          </nav>
          <select className='select' name="select">
            <option value="ru">РУ</option>
            <option value="uz">УЗ</option>
          </select>
          <button type='button'>Регистрация</button>
        </div>
      </div>
    </div>
  )
}
