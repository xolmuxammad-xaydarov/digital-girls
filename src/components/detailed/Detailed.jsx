import React from 'react'
import './Detailed.scss'
import image8 from '../../assets/images/image8.png'
import image10 from '../../assets/images/image10.png'

export default function Detailed() {
  return (
    <div className='detailed container'>
       <div className="team1__detailed">
          <div className="background__detailed">
            <div className='img__block'>
              <img src={image8} alt="" />
            </div>
            <div className='team1__text__block'>
              <p className='team1__text'>
              Организация курсов повышения квалификации для девушек специалистов в сфере ИТ   и подготовка высококвалифицированных кадров. Дать практические навыки участникам, которые пригодятся в будущей профессиональной деятельности благодаря привлечению в процесс обучения опытных ведущих отечественных и зарубежных специалистов. Создание программы для системной развитии ИТ- сферы в республике.
              </p>
            </div>
          </div>
        </div>

        <div className="teams2__detailed">
          <div className="background2">
            <div className='team1__text__block2'>
              <p className='team1__text2'>
              Рабочая группа будет состоят из высококвалифицированных тренеров-специалистов. Для полного информирования участников проекта требуется освещение через СМИ, разработка сайта и создание PR-группы. Рабочей группой будут разработаны модули, программы направлений  в проекте. 
              </p>
            </div>
            <div className='img__block2'>
              <img src={image10} alt="" />
            </div>
          </div>
        </div>
    </div>
  )
}
