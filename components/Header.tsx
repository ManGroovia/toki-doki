const Header = () => {
  return (
    <div className="header">
      <div className="right">
        <div className="logo">
          <img src="icons/logo.svg" alt="logo" />
        </div>
        <div className="agent">
          <p>От Японии до Владивостока <br /> один шаг с Токидоки</p>
          <li>Агентский договор</li>
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
          <li>Заказать звонок</li>
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
