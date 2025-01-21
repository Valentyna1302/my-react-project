//* Дані всіх елементів контрольованої форми зберігаються у стані та передаються як значення їх атрибута value. Зверніть увагу, що імена властивостей об'єкта стану (login та password) збігаються зі значеннями атрибутів name елементів форми.
//* Далі для кожного поля оголошуємо функцію оновлення стану і передаємо їх як значення атрибута onChange. Колбек-функція отримає один аргумент - об'єкт події. Оголошуємо один обробник handleChange для всіх полів форми.
//* Відправка форми. Щоб отримати значення полів контрольованої форми під час відправлення, створюємо функцію, наприклад handleSubmit, в якій ми звертаємося до її стану. Передаємо її у форм <form onSubmit={handleSumit}>.

// import { useState } from "react";

// const ControlledForm = () => {
//   const [values, setValues] = useState({
//     login: "",
//     password: "",
//   });

//   //   const handleLoginChange = (evt) => {
//   //     setValues({
//   //       ...values,
//   //       login: evt.target.value,
//   //     });
//   //   };

//   //   const handlePwdChange = (evt) => {
//   //     setValues({
//   //       ...values,
//   //       password: evt.target.value,
//   //     });
//   //   };

//   // Замість цього буде це, щоб не повторювати код:

//   const handleChange = (evt) => {
//     setValues({
//       ...values,
//       [evt.target.name]: evt.target.value,
//     }); //evt.target.value - значення поля
//     //evt.target.name - значення атрибута name
//   };

//   const handleSubmit = (evt) => {
//     evt.preventDefault();
//     console.log(values); //{login: 'vv', password: 'vv'}

//     // Очищаємо форму
//     setValues({
//       login: "",
//       password: "",
//     });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         name="login"
//         value={values.login}
//         onChange={handleChange}
//       />
//       <input
//         type="password"
//         name="password"
//         value={values.password}
//         onChange={handleChange}
//       />
//       <button type="submit">Login</button>
//     </form>
//   );
// };

// export default ControlledForm;
