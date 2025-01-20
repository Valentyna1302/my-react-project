// const LoginForm = () => {
//   const handleSubmit = (evt) => {
//     evt.preventDefault();

//     const form = evt.target; // У контексті форми evt.target буде сам <form>, на якому, наприклад, спрацювала подія onSubmit
//     const { login, password } = form.elements; // form.elements усі елементи форми (такі як <input>, <select>, <textarea>), що мають атрибут name. { login, password }: Це деструктуризація, яка дозволяє швидко отримати доступ до елементів форми за їх іменами (name="login", name="password").
//     console.log(login, password); // Посилання на DOM-елементи
//     console.log(login.value, password.value); // Значення полів

//     form.reset(); // Скидаємо значення полів після відправки
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" name="login" />
//       <input type="password" name="password" />
//       <button type="submit">Log in</button>
//     </form>
//   );
// };

// export default LoginForm;

// У компоненті форми деструктуризуємо пропс onLogin, це функція, тому викликаємо її при сабміті форми і передаємо їй значення полів.
// Зверніть увагу на те, що в пропс onLogin ми передаємо дані полів форми, а не об'єкт події. Об'єкт події використовується лише всередині форми для скасування типової поведінки і роботи з її елементами. Передавати об'єкт події в пропс - це антипаттерн.
const LoginForm = ({ onLogin }) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();

    const form = evt.target;
    const { login, password } = form.elements;

    // Викликаємо пропс onLogin
    onLogin({
      login: login.value,
      password: password.value,
    });

    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="login" />
      <input type="password" name="password" />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;

//* Хук useId

// const LoginForm = () => {
//   const loginId = useId();
//   const passwordId = useId();

//   return (
//     <form>
//       <label htmlFor={loginId}>Login</label>
//       <input type="text" name="login" id={loginId} />

//       <label htmlFor={passwordId}>Password</label>
//       <input type="password" name="password" id={passwordId} />

//       <button type="submit">Login</button>
//     </form>
//   );
// };

// export default LoginForm;
