import React from 'react'
import './Task.scss';

export default function Task() {
  return (
    <div className='task__block'>
      <div className='container for_pad'>

        <h2>Задачи</h2>
        <div className='tasks'>
          <div className="task"><span>01</span><p>Подбор рабочей группы</p></div>
          <div className="task"><span>02</span><p>Установить контакт с партнерами</p></div>
          <div className="task"><span>03</span><p>Закупка офисной техники</p></div>
          <div className="task"><span>04</span><p>Привлечение опытных специалистов (зарубежные специалисты);</p></div>
          <div className="task"><span>05</span><p>Разработка модуля</p></div>
          <div className="task"><span>06</span><p>Освещение  проекта с помощью СМИ</p></div>
          <div className="task"><span>07</span><p>Проведение отбора участников</p></div>
          <div className="task"><span>08</span><p>Организация проекта в 4 этапа</p></div>
          <div className="task"><span>09</span><p>Организация форума и церемония награждения победителей</p></div>
          <div className="task task__last"><span>10</span><p>Мониторинг деятельности участников после окончание проекта, oценка эффективности проекта, составление отчетов</p></div>
        </div>
      </div>
    </div>
  )
}
