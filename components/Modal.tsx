import React, {PropsWithChildren} from 'react'

interface IModalProps{
  active: boolean;
  onClose: () => void;
}

const Modal = ({active, onClose} : PropsWithChildren<IModalProps>)=>{
  if (!active){
    return null;
  }
    return(
        <div className={active ? "modal active" : 'modal'} onClick={onClose}>
            <div className={active ? "modal-content active" : 'modal-content'} onClick={(event)=> event.stopPropagation()}>
                <div className="text">
                    <h3>Заказать звонок</h3>
                    <p>Отправьте заявку на обратный звонок и наши специалисты свяжутся с вами <br />для консультирования по всем вопросам</p>
                </div>
                <div className="forms">
                    <form action="">
                        <label htmlFor="name">Ваше имя:</label>
                        <input type="text" name="name" id="name" placeholder='Имя' />
                    </form>
                    <form action="">
                        <label htmlFor="number">Номер телефона:</label>
                        <input type="number" name="phone" id="phone" placeholder='+7(***)***-**-**'/>
                    </form>
                    
                </div>
                <button className='modalBtn'>Заказать</button>
            </div>
        </div>
    )
}

export default Modal