import React from 'react'
import './Footer.scss'
import GinD from '../../assets/images/GinD.png'
import logo from '../../assets/images/logoImg.png'
import instagram from '../../assets/images/instagram.svg'
import telegram from '../../assets/images/telegram.svg'
import youtube from '../../assets/images/youtube.svg'
import facebook from '../../assets/images/facebook.svg'

export default function Footer() {
  return (
    <div className='footer'>
      <div className="container">
        <div className="footer_flex">
        <div className='logos_f'>
          <img src={logo} alt="" />
          <img src={GinD} alt="" />
        </div>

        <ul className='menu'>
          <li><a href="/">О Проекте</a></li>
          <li><a href="/">Направления</a></li>
          <li><a href="/">Результаты</a></li>
          <li><a href="/">Контакты</a></li>
        </ul>

        <div>
          <div className="footer__btns">
          <button>УЗ</button>
          <button>РУ</button>
          </div>
          <ul className='socials'>
            <li><a href="https://www.instagram.com/holmuhammad15/"><img src={instagram} alt="" /></a></li>
            <li><a href="https://t.me/holmuhammad15"><img src={telegram} alt="" /></a></li>
            <li><a href="https://www.youtube.com/@xaydarovvlog9245/about"><img src={youtube} alt="" /></a></li>
            <li><a href="https://www.facebook.com/profile.php?id=100084835459262"><img src={facebook} alt="" /></a></li>
          </ul>
        </div>
        </div>
      </div>
    </div>
  )
}
