import './Main.scss'
import { useState } from 'react'
import name from '../../img/image1.png'
import man from '../../img/Vector.png'
import int from '../../img/Vector(2).png'
import buy from '../../img/Group6.png'
import brand1 from '../../img/brand1.png'
import brand2 from '../../img/brand2.png'
import brand3 from '../../img/brand3.png'
import brand4 from '../../img/brand4.png'
import brand5 from '../../img/brand5.png'
import brand6 from '../../img/brand6.png'
import brand7 from '../../img/brand7.png'
import brand8 from '../../img/brand8.png'
import brand9 from '../../img/brand9.png'
import sale1 from '../../img/sale1.png'
import sale2 from '../../img/sale2.png'
import position1 from '../../img/position1.png'
import position2 from '../../img/position2.png'
import position3 from '../../img/position3.png'
import position4 from '../../img/position4.png'
import position5 from '../../img/position5.png'
import aftpos from '../../img/aftpos.png'
import jacket from '../../img/jacket.png'
import Carousel from '../Carousel/Carousel'

export default function Main() {
  const [Open, setOpen] = useState(false);

  const openModal = () => {
  setOpen(true);
  };
  
  const closeModal = () => {
  setOpen(false);
  };
  
  return (
    <>
    <div className="transition">
      <div className="who">
        <div className="gender">
          <li className='gender__list'>Мужчинам</li>
          <li className='gender__list'>Женщинам</li>
          <li className='gender__list'>Детям</li>
        </div>
        <img src={name} alt="" />
        <div className="possibilities">
          <div className="possibilities__card">
          <img src={man} alt="" className='possibilities__img'/>
          <p className='possibilities__text'>ВОЙТИ</p>
          </div>
          <div className="possibilities__card">
          <img src={int} alt="" className='possibilities__img'/>
          <p className='possibilities__text'>Избранное</p>
          </div>
          <div className="possibilities__card">
          <img src={buy} alt="" className='possibilities__img'/>
          <p className='possibilities__text'>Корзина</p>
          </div>
        </div>
      </div>
    </div>
    <div className="kinds">
      <ul className='kinds__nav'>
        <li className='kinds__list'><a href="" className='kinds__link'>Новинки</a></li>
        <li className='kinds__list'><a href="" className='kinds__link'>Сноуборд</a></li>
        <li className='kinds__list'><a href="" className='kinds__link'>Лыжи</a></li>
        <li className='kinds__list'><a href="" className='kinds__link'>Скейт</a></li>
        <li className='kinds__list'><a href="" className='kinds__link'>Лонгборд</a></li>
        <li className='kinds__list'><a href="" className='kinds__link'>Вейкборд</a></li>
        <li className='kinds__list'><a href="" className='kinds__link'>Серф</a></li>
        <li className='kinds__list'><a href="" className='kinds__link'>Sup</a></li>
        <li className='kinds__list'><a href="" className='kinds__link'>Одежда</a></li>
        <li className='kinds__list'><a href="" className='kinds__link'>Обувь</a></li>
        <li className='kinds__list'><a href="" className='kinds__link'>Аксессуары</a></li>
        <li className='kinds__list'><a href="" className='kinds__link'>Бренды</a></li>
        <li className='kinds__list'><a href="" className='kinds__link__alpha'>Распродажа</a></li>
      </ul>
    </div>
    <Carousel/>
    <div className="main__brands brand">
      <img src={brand1} className='brand__img'/>
      <img src={brand2} className='brand__img'/>
      <img src={brand3} className='brand__img'/>
      <img src={brand4} className='brand__img'/>
      <img src={brand5} className='brand__img'/>
      <img src={brand6} className='brand__img'/>
      <img src={brand7} className='brand__img'/>
      <img src={brand8} className='brand__img'/>
      <img src={brand9} className='brand__img'/>
    </div>
    <div className="sale">
      <div className="sale-card">
        <img src={sale1} className='sale-img'/>
        <div className="sale-backgroud">
          <h2 className='sale-title'>Название акции</h2>
        </div>
      </div>
      <div className="sale-card">
      <img src={sale2} className='sale-img'/>
        <div className="sale-backgroud">
          <h2 className='sale-title'>Название акции</h2>
        </div>
      </div>
    </div>
    <div className="h2">
    <h2 className='name-title'>Новинки</h2>
    </div>
    <div className="position">
      <div className="position-card" >
        <div className="image">
          <img src={position1} />
          <button className='position-btn'></button>
        </div>
        <div className="position-info">
          <h2 className='position-title'>LIB TECH</h2>
          <p className='position-text'>Мужской Сноуборд</p>
          <h2 className='position-title'>34392 ₽</h2>
        </div>
      </div>
      <div className="position-card">
        <div className="image">
          <img src={position2} />
          <button className='position-btn'></button>
        </div>
        <div className="position-info">
          <h2 className='position-title'>LIB TECH</h2>
          <p className='position-text'>Мужской Сноуборд</p>
          <h2 className='position-title'>17392 ₽</h2>
        </div>
      </div>
      <div className="position-card">
        <div className="image">
          <img src={position3} />
          <button className='position-btn'></button>
        </div>
        <div className="position-info">
          <h2 className='position-title'>LIB TECH</h2>
          <p className='position-text'>Мужской Сноуборд</p>
          <h2 className='position-title'>34392 ₽</h2>
        </div>
      </div>
      <div className="position-card">
        <div className="image">
          <img src={position4} />
          <button className='position-btn'></button>
        </div>
        <div className="position-info">
          <h2 className='position-title'>LIB TECH</h2>
          <p className='position-text'>Мужской Сноуборд</p>
          <h2 className='position-title'>34392 ₽</h2>
        </div>
      </div>
    </div>
    <div className="ad">
<img src={aftpos} alt="" className='ad-img' />
    </div>
    <div className="ad-info">
      <h2 className='ad-title'>Название Акции</h2>
      </div>
      <div className="ad-info">
      <h3 className='ad-text'>Меня не спрашивали, а надо было спросить, что означает имя Заратустры именно в моих устах — в устах первого имморалиста: ведь то, в чём состоит неслыханная уникальность этого перса в истории, являет собою противоположность как раз этому. </h3>
    </div>
    <div className="h2">
    <h2 className='name-title'>DC Shoes популярное в коллекции</h2>
    </div>
    <div className="position">
      <div className="position-card">
        <div className="image">
          <img src={position1} />
          <button className='position-btn'></button>
        </div>
        <div className="position-info">
          <h2 className='position-title'>LIB TECH</h2>
          <p className='position-text'>Мужской Сноуборд</p>
          <h2 className='position-title'>34392 ₽</h2>
        </div>
      </div>
      <div className="position-card">
        <div className="image">
          <img src={position5} />
          <button className='position-btn'></button>
        </div>
        <div className="position-info">
          <h2 className='position-title'>LIB TECH</h2>
          <p className='position-text'>Мужской Сноуборд</p>
          <h2 className='position-title'>17392 ₽</h2>
        </div>
      </div>
      <div className="position-card">
        <div className="image">
          <img src={position3} />
          <button className='position-btn'></button>
        </div>
        <div className="position-info">
          <h2 className='position-title'>LIB TECH</h2>
          <p className='position-text'>Мужской Сноуборд</p>
          <h2 className='position-title'>34392 ₽</h2>
        </div>
      </div>
      <div className="position-card">
        <div className="image">
          <img src={position4} />
          <button className='position-btn'></button>
        </div>
        <div className="position-info">
          <h2 className='position-title'>LIB TECH</h2>
          <p className='position-text'>Мужской Сноуборд</p>
          <h2 className='position-title'>34392 ₽</h2>
        </div>
      </div>
    </div>
    <div className="blog">
      <div className="img">
        <img src={jacket} alt="" />
      </div>
      <div className="blog-info">
<div className="blogs">
  <h2 className='blogs__title'>Блоги</h2>
  <a href="" className='blogs__link'>Все блоги</a>
</div>
<h2 className='blog__title'>Очень преочень длинное название блога</h2>
<p className='blog__text'>Меня не спрашивали, а надо было спросить, что означает имя Заратустры именно в моих устах — в устах первого имморалиста: ведь то, в чём состоит неслыханная уникальность этого перса в истории, являет собою противоположность как раз этому. </p>
<p className='blog__text'>Меня не спрашивали, а надо было спросить, что означает имя Заратустры именно в моих устах — в устах первого имморалиста: ведь то, в чём состоит неслыханная уникальность этого перса в истории, являет собою противоположность как раз этому. </p>
 
      </div>
    </div>
    </>
  )
}
