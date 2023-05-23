import React, { PropsWithChildren, useRef } from "react";
interface IModalProps {
  active: boolean;
  onClose: () => void;
}

const ModalCompany = ({ active, onClose }: PropsWithChildren<IModalProps>) => {
  if (!active) {
    return null;
  }
  return (
    <div
      className={active ? "modalCompany active" : "modalCompany"}
      onClick={onClose}
    >
      <div className="oNas" onClick={(event) => event.stopPropagation()}>
        <div className="ssylky">
          <li>О компании</li>
          <svg
            width="7"
            height="10"
            viewBox="0 0 7 10"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1 9L5 5L1 1" stroke="#D2D3D8" strokeWidth="1.5" />
          </svg>
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
