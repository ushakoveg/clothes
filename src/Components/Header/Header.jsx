import './Header.scss'
import img1 from '../../img/Group5.jpg'
import img2 from '../../img/Vector(1).png'
import img3 from '../../img/Vector2.png'
import img4 from '../../img/Vectors.jpg'


export default function Header() {
  return (
    <div className='header__container'>
      <div className="place">
      <img src={img4} alt="" />
        <p className='text'>Доставляем по Минску</p>
        <ul className='nav'>
          <li className='list'><a href=""  className='link'>Магазины</a></li>
          <li className='list'><a href=""  className='link'>Помощь</a></li>
          <li className='list'><a href=""  className='link'>Блоги</a></li>
        </ul>
      </div>
      <div className="header__function">
        <div className="function">       
      <img src={img1} alt="" className='function__img'/>
      <p className='function__text'>Бесплатная доставка *</p>
        </div>
        <div className="function">
      <img src={img3} alt="" className='function__img'/>
      <p className='function__text'>Оплата наличными</p>
        </div>
        <div className="function">
      <img src={img2} alt="" className='function__img'/>
      <p className='function__text'>Возврат в течение 14 дней</p>
        </div>
      </div>

    </div>
  )
}
