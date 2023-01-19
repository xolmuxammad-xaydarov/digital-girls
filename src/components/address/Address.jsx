import React from 'react'
import './Address.scss'
import web from '../../assets/images/web.svg'
import tel from '../../assets/images/tel.svg'
import email from '../../assets/images/email.svg'
import map from '../../assets/images/map.svg'

export default function Address() {
  return (
    <div className='address container'>
      <div className='address__text'>
        <ul>
          <li className='web'>
            <img src={web} alt="" />
            <div>
              <p>Веб сайт</p>
              <span>digitalcity.uz</span>
            </div>
          </li>
          <li className='tel'>
              <img src={tel} alt="" />
              <div>
                <p>Телефон</p>
                <span>+99874 222-22-22</span>
              </div>
          </li>
          <li className='email'>
            <img src={email} alt="" />
            <div>
              <p>Почта</p>
              <span>dcity@info.com</span>
            </div>
          </li>
          <li className='street'>
            <img src={map} alt="" />
            <div>
              <p>Адресс</p>
              <span className='b'>улица Бобур Шох, Andizhan, Узбекистан</span>
            </div>
          </li>
        </ul>
      </div>
      <div>
      <iframe title='re' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1426.8456344045321!2d72.35888425263754!3d40.74751830917011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bced630e0f4795%3A0xf72460c2369068a8!2sDigital%20City!5e0!3m2!1sru!2s!4v1674156799504!5m2!1sru!2s" width={666} height={537} style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  )
}
