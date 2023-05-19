import React from 'react'
import ModalCompany from './ModalCompany'

const HeaderLink = ()=>{
    const [modalIsOpen, setModalIsOpen] = React.useState<boolean>(false);
  const onCloseModal = () => setModalIsOpen(false);
    return(
        <div className="links">
            {modalIsOpen && (
        <ModalCompany active={modalIsOpen} ></ModalCompany>
      )}
            <div className="nav">
            <ul>
                <li onClick={() => setModalIsOpen(true)}>О нас</li>
                <li>Новости</li>
                <li>Аукционы</li>
                <li>Конструктор</li>
                <li>В пути</li>
                <li>Как купить</li>
                <li>Важная информация</li>
                <li>Вопросы</li>
                <li>Отзывы</li>
                <li>Доставка</li>
                <li>Контакты</li>
            </ul>
            </div>
        </div>
    )
}
export default HeaderLink