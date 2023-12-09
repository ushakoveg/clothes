import React, { useState } from "react";
const RegistrationForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [showModal, setShowModal] = useState(false)
 

  const handleRegistration = (e) => {
    e.preventDefault();
    // Обработка данных регистрации
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Phone:", phone);
    console.log("Password:", password);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Обработка данных входа
    console.log("Email or Phone:", email);
    console.log("Password:", password);
  };

    
    const openModal = () => {
    setShowModal(true);
    };

  return (
    <>
      <button onClick={openModal}>Открыть модальное окно</button>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setShowModal(false)}>
              &times;
            </span>

            <h2>Регистрация</h2>
            <form onSubmit={handleRegistration}>
              <input
                type="text"
                placeholder="Имя"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <br />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <br />
              <input
                type="text"
                placeholder="Номер телефона"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <br />
              <input
                type="password"
                placeholder="Пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <br />
              <button type="submit">Зарегистрироваться</button>
            </form>

            <h2>Вход</h2>
            <form onSubmit={handleLogin}>
              <input
                type="text"
                placeholder="Email или номер телефона"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <br />
              <input
                type="password"
                placeholder="Пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <br />
              <button type="submit">Войти</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default RegistrationForm;
