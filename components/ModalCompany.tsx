import React, { PropsWithChildren } from "react";

interface IModalProps {
  active: boolean;
  onClose: () => void;
}

const ModalCompany = ({ active, onClose }: PropsWithChildren<IModalProps>) => {
  return (
    <div className="modalCompany" onClick={onClose}>
      <div className="oNas" onClick={(event) => event.stopPropagation()}>
        <div className="ssylky">
          <li>О компании</li>
          <img src="icons/Vector.svg" alt="" />
        </div>
        <div className="ssylky">
          <li>Наши сотрудники</li>
          <img src="icons/Vector.svg" alt="" />
        </div>
        <div className="ssylky">
          <li>Автопарк Токидоки</li>
          <img src="icons/Vector.svg" alt="" />
        </div>
        <div className="ssylky">
          <li>Офис Токидоки</li>
          <img src="icons/Vector.svg" alt="" />
        </div>
        <div className="ssylky">
          <li>Агентский договор</li>
          <img src="icons/Vector.svg" alt="" />
        </div>
        <div className="ssylky">
          <li>Учредительные документы</li>
          <img src="icons/Vector.svg" alt="" />
        </div>
        <div className="ssylky">
          <li>Видео</li>
          <img src="icons/Vector.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default ModalCompany;
