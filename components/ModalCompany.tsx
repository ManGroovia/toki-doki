import React, { PropsWithChildren, useRef } from "react";
import { RightArrow } from "./atoms/Icons";

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
          <div className="modal-link"> О компании</div>
          <RightArrow></RightArrow>
        </div>
        <div className="ssylky">
          <div className="modal-link"> Наши сотрудники</div>
          <RightArrow></RightArrow>
        </div>
        <div className="ssylky">
          <div className="modal-link"> Автопарк Токидоки</div>
          <RightArrow></RightArrow>
        </div>
        <div className="ssylky">
          <div className="modal-link"> Офис Токидоки</div>
          <RightArrow></RightArrow>
        </div>
        <div className="ssylky">
          <div className="modal-link"> Агентский договор</div>
          <RightArrow></RightArrow>
        </div>
        <div className="ssylky">
          <div className="modal-link">Учредительные документы</div>
          <RightArrow></RightArrow>
        </div>
        <div className="ssylky">
          <div className="modal-link">Видео</div>
          <RightArrow></RightArrow>
        </div>
      </div>
    </div>
  );
};

export default ModalCompany;
