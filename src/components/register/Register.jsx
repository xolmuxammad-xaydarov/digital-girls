import React from 'react'
import './Register.scss'

export default function Register() {
  return (
    <div className='register'>
      <div className="container">
       <h2>Регистрация</h2>

      <div className="form__block">
        <form action="#">
          <div className="inp_flex">
          <div>
            <label className='label_b' htmlFor="name">Имя</label>
            <input type="text" name='name'/>
          </div>
          <div>
            <label className='label_b' htmlFor="name">Фамилия</label>
            <input type="text" name='name'/>
          </div>
          <div>
            <label className='label_b' htmlFor="name">Дата рождения</label>
            <input type="text" name='name'/>
          </div>
          <div>
            <label className='label_b' htmlFor="name">Почта</label>
            <input type="text" name='name'/>
          </div>
          <div>
            <label className='label_b' htmlFor="name">Адрес</label>
            <input type="text" name='name'/>
          </div>
          <div>
            <label className='label_b' htmlFor="name">Телефон</label>
            <input type="text" name='name'/>
          </div>
          </div>

          <button type='button'>Отправить</button>
        </form>
      </div>
      </div>
    </div>
  )
}
