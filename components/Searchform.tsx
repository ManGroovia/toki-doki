import React from "react";
import { RedBtn } from "./atoms/Buttons";

const SearchForm = () => {
  return (
    <>
      <div className="searchform">
        <div className="title"> Найти авто</div>
        <div className="typeForm">
          <select name="Марка" id="">
            <option value="">Марка</option>
            <option value="Mitsubishi">Mitsubishi</option>
          </select>
          <select name="Модель" id="">
            <option value="">Модель</option>
            <option value="Pajero">Pajero</option>
            <option value="Montero">Montero</option>
            <option value="GTO">GTO</option>
            <option value="Eclipse">Eclipse</option>
            <option value="Junior">Junior</option>
            <option value="Legnum">Legnum</option>
            <option value="ЯVR">ЯVR</option>
            <option value="Lancer">Lancer</option>
            <option value="L200">L200</option>
          </select>
        </div>
        <div className="regionForm">
          <label htmlFor="region-select">Регион:</label>
          <select name="region" id="">
            <option value="">Выбрать регион</option>
            <option value="Leningrad">Ленинград</option>
            <option value="Moscow">Москва</option>
          </select>
        </div>
        <div className="filterForm">
          <div className="left">
            <label htmlFor="filterCar">Обьём двигателя:</label>
            <div className="inputs">
              <input type="number" min={0.1} max={10} placeholder="От" />
              -
              <input type="number" min={0.1} max={10} placeholder="До" />
            </div>
          </div>
          <div className="left">
            <label htmlFor="filterCar">Год выпуска:</label>
            <div className="inputs">
              <input type="number" min={1900} max={2023} placeholder="Мин" />
              -
              <input type="number" min={1900} max={2023} placeholder="Макс" />
            </div>
          </div>
        </div>
        <div className="searchBtn">
        <button><img src="icons/search.svg" alt="" />Начать поиск</button>
        </div>
      </div>
    </>
  );
};

export default SearchForm;
