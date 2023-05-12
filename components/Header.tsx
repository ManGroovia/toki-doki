import Modal from "./Modal";
import React from "react";
import { TopBtns } from "./atoms/Buttons";
const Header = () => {
  const [modalIsOpen, setModalIsOpen] = React.useState<boolean>(false);
  const onCloseModal = () => setModalIsOpen(false);
  return (
    <div className="header">
      {modalIsOpen && (
        <Modal active={modalIsOpen} onClose={onCloseModal}></Modal>
      )}
      <div className="right">
        <div className="logo">
          <img src="icons/logo.svg" alt="logo" />
        </div>
        <div className="agent">
          <p>
            От Японии до Владивостока <br /> один шаг с Токидоки
          </p>
          <TopBtns>Агентский договор</TopBtns>
        </div>
        <div className="icons">
          <img src="icons/vk.svg" alt="" />
          <img src="icons/yt.svg" alt="" />
          <img src="icons/tg.svg" alt="" />
        </div>
      </div>
      <div className="left">
        <div className="contact">
          <a href="#">8(383)2-555-007</a>

          <TopBtns onClick={() => setModalIsOpen(true)}>
            Заказать звонок
          </TopBtns>
        </div>
        <button className="topBtn">
          <img src="icons/dogovor.svg" alt="" />
          Заключить договор
        </button>
      </div>
    </div>
  );
};

export default Header;
