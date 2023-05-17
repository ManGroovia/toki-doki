import React, { PropsWithChildren } from "react";
import { RedBtn } from "./atoms/Buttons";
interface IModalProps {
  active: boolean;
  onClose: () => void;
}

const Modal = ({ active, onClose }: PropsWithChildren<IModalProps>) => {
  return (
    <div className={`modal ${active ? "active" : ""}`} onClick={onClose}>
      <div
        className={"modal-content"}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="text">
          <h3>Заказать звонок</h3>
          <p>
            Отправьте заявку на обратный звонок и наши специалисты свяжутся с
            вами <br />
            для консультирования по всем вопросам
          </p>
        </div>
        <div className="forms">
          <form action="">
            <label htmlFor="name">Ваше имя:</label>
            <input type="text" name="name" id="name" placeholder="Имя" />
          </form>
          <form action="">
            <label htmlFor="number">Номер телефона:</label>
            <input
              type="number"
              name="phone"
              id="phone"
              placeholder="+7(***)***-**-**"
            />
          </form>
        </div>
        <RedBtn>Заказать звонок</RedBtn>
        
      </div>
    </div>
  );
};

export default Modal;
