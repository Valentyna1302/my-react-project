// src/components/App.jsx

// import Product from "./Product";

// export default function App() {
//   return (
//     <div>
//       <h1>Best selling</h1>
//       <Product
//         name="Tacos With Lime"
//         imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
//         price={10.99}
//       />

//       <Product
//         name="Fries and Burger"
//         imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
//         price={14.29}
//       />
//     </div>
//   );
// }

// import BookList from "./Product";

// const favouriteBooks = [
//   { id: "id-1", name: "JS for beginners" },
//   { id: "id-2", name: "React basics" },
//   { id: "id-3", name: "React Router overview" },
// ];

// export default function App() {
//   return (
//     <>
//       <h1>Books of the week</h1>
//       <BookList books={favouriteBooks} />
//     </>
//   );
// }

// const CustomButton = ({ message, children }) => {
//   return <button onClick={() => alert(message)}>{children}</button>;
// };

// const App = () => {
//   return (
//     <>
//       <CustomButton message="Playing music!">Play some music</CustomButton>
//       <CustomButton message="Uploading your data!">Upload data</CustomButton>
//     </>
//   );
// };

// export default App;

//* так не працюватиме
// const App = () => {
//   let clicks = 0;

//   const handleClick = () => {
//     clicks = clicks + 1;
//   };

//   return <button onClick={handleClick}>Current: {clicks}</button>;
// };

//* 1) Перепишемо код з використанням стану. Щоб додати змінну стану, імпортуйте useState з React угорі файлу компонента.
//* 2) Далі замінимо локальну змінну clicks. Тут синтаксис [ clicks, setClicks ] - це деструктуризація масиву. Масив, який повертає useState, завжди має точно два елементи: перший (clicks) - це змінна стану, а другий (setClicks) - це функція для її встановлення.
//* 3) У handleClick використовуємо setClicks для зміни стану clicks.
//* Тепер, при кліку на кнопку, стан в змінній clicks буде змінюватися, що змусить компонент оновлюватися і повторно рендерити JSX з оновленими значеннями.

// import { useState, useEffect } from "react";
// import ClickCounter from "./ClickCounter";

// const App = () => {
//   // let clicks = 0;
//   const [clicks, setClicks] = useState(2);

//   const handleClick = () => {
//     // clicks = clicks + 1;
//     setClicks(clicks + 1);
//   };z

//   return <button onClick={handleClick}>Current: {clicks}</button>;
// };

// export default App;

//*

// function App() {
//   const [clicks, setClicks] = useState(0);
//   const [isOpen, setIsOpen] = useState(false);

//   const handleClick = () => {
//     setClicks(clicks + 1);
//   };

//   const handleToggle = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <>
//       <button onClick={handleClick}>Current: {clicks}</button>
//       <button onClick={handleToggle}>{isOpen ? "Hide" : "Show"}</button>
//       {isOpen && <p>Now you can see me!</p>}
//     </>
//   );
// }

//* <ClickCounter /> в окремому файлі

// import ClickCounter from "./ClickCounter";

// const App = () => {
//   return (
//     <>
//       <ClickCounter />
//       <ClickCounter />
//     </>
//   );
// };

// export default App;

//* Підняття стану

// ClickCounter отримує функцію onUpdate (ім'я пропа),
// яка викликається під час події onClick
// const ClickCounter = ({ value, onUpdate }) => {
//   return <button onClick={onUpdate}>Current: {value}</button>;
// };

// const App = () => {
//   const [clicks, setClicks] = useState(0);

//   // Функція, яку будемо передавати в ClickCounter
//   // для виклику під час кліку
//   const handleClick = () => {
//     setClicks(clicks + 1);
//   };

//   return (
//     <>
//       <ClickCounter value={clicks} onUpdate={handleClick} />
//       <ClickCounter value={clicks} onUpdate={handleClick} />
//     </>
//   );
// };

// const App = () => {
//   const [values, setValues] = useState({
//     x: 0,
//     y: 0,
//   });

//   const updateX = () => {
//     setValues({
//       ...values,
//       x: values.x + 1,
//     });
//   };

//   const updateY = () => {
//     setValues({
//       ...values,
//       y: values.y + 1,
//     });
//   };

//   return (
//     <div>
//       <p>
//         x: {values.x}, y: {values.y}
//       </p>

//       <button onClick={updateX}>Update x</button>
//       <button onClick={updateY}>Update y</button>
//     </div>
//   );
// };

// export default App;

// const App = () => {
//   const [clicks, setClicks] = useState(0);

//   // Оголошуємо ефект
//   useEffect(() => {
//     document.title = `You clicked ${clicks} times`;
//   });

//   return (
//     <button onClick={() => setClicks(clicks + 1)}>
//       You clicked {clicks} times
//     </button>
//   );
// };

//* Якщо другим аргументом хука useEffect передати порожній масив, то такий ефект виконається лише один раз - на етапі монтування компонента, і більше ніколи.

// useEffect(() => {
//   // ...
// }, []);

//* Виправити проблему з модальним вікном тепер дуже просто, необхідно при розмонтуванні компонента очищати інтервал. Для цього зберігаємо ідентифікатор інтервалу в змінну і в функції очищення використовуємо її для виклику clearInterval.

// const Modal = () => {
//   useEffect(() => {
//     // Зберігаємо ідентифікатор інтервалу в змінну
//     const intervalId = setInterval(() => {
//       console.log(`Interval - ${Date.now()}`);
//     }, 2000);

//     return () => {
//       // Очищаємо інтервал за його ідентифікатором
//       clearInterval(intervalId);
//     };
//   }, []);

//   return <div>Modal</div>;
// };

// const App = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div>
//       <button onClick={() => setIsOpen(!isOpen)}>
//         {isOpen ? "Close" : "Open"}
//       </button>
//       {isOpen && <Modal />}
//     </div>
//   );
// };

// export default App;

// const App = () => {
//   const [clicks, setClicks] = useState(0);

//   // ❌ Ефект записаний з помилкою!
//   useEffect(() => {
//     console.log("Clicks updated: ", clicks);
//   }, []);

//   return (
//     <button onClick={() => setClicks(clicks + 1)}>
//       You clicked {clicks} times
//     </button>
//   );
// };

// const App = () => {
//   const [clicks, setClicks] = useState(0);

//   // ✅ Залежності вказані правильно
//   useEffect(() => {
//     console.log("Clicks updated: ", clicks);
//   }, [clicks]);

//   return (
//     <button onClick={() => setClicks(clicks + 1)}>
//       You clicked {clicks} times
//     </button>
//   );
// };

// const App = () => {
//   const [first, setFirst] = useState(0);
//   const [second, setSecond] = useState(0);

//   useEffect(() => {
//     console.log("First updated: ", first);
//   }, [first]);

//   useEffect(() => {
//     console.log("Second updated: ", second);
//   }, [second]);

//   useEffect(() => {
//     console.log("First or second updated: ", first + second);
//   }, [first, second]);

//   return (
//     <>
//       <button onClick={() => setFirst(first + 1)}>First: {first}</button>
//       <button onClick={() => setSecond(second + 1)}>Second: {second}</button>
//     </>
//   );
// };

//* useEffect

// import { useState, useEffect } from "react";

// const App = () => {
//   const [clicks, setClicks] = useState(0);

//   // Оголошуємо ефект
//   useEffect(() => {
//     document.title = `You clicked ${clicks} times`;
//   });

//   return (
//     <button onClick={() => setClicks(clicks + 1)}>
//       You clicked {clicks} times
//     </button>
//   );
// };

// import { useState, useEffect } from "react";

// const App = () => {
//   const [clicks, setClicks] = useState(0);

//   useEffect(() => {
//     console.log("You can see me only once!");
//   }, []);

//   return (
//     <button onClick={() => setClicks(clicks + 1)}>
//       You clicked {clicks} times
//     </button>
//   );
// };

// import { useState, useEffect } from "react";
// const Modal = () => {
//   useEffect(() => {
//     setInterval(() => {
//       console.log(`Interval - ${Date.now()}`);
//     }, 2000);
//   }, []);

//   return <div>Modal</div>;
// };

// const App = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div>
//       <button onClick={() => setIsOpen(!isOpen)}>
//         {isOpen ? "Close" : "Open"}
//       </button>
//       {isOpen && <Modal />}
//     </div>
//   );
// };

//* Функція очищення

// import { useState, useEffect } from "react";

// const App = () => {
//   useEffect(() => {
//     console.log("Effect");

//     return () => {
//       console.log("Clean up");
//     };
//   });

//   return <div>App</div>;
// };

// const Modal = () => {
//   useEffect(() => {
//     // Зберігаємо ідентифікатор інтервалу в змінну
//     const intervalId = setInterval(() => {
//       console.log(`Interval - ${Date.now()}`);
//     }, 2000);

//     return () => {
//       // Очищаємо інтервал за його ідентифікатором
//       clearInterval(intervalId);
//     };
//   }, []);

//   return <div>Modal</div>;
// };

// const App = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div>
//       <button onClick={() => setIsOpen(!isOpen)}>
//         {isOpen ? "Close" : "Open"}
//       </button>
//       {isOpen && <Modal />}
//     </div>
//   );
// };

//* Етап оновлення
//* У ефекті використовується стан clicks, але масив залежностей порожній, це неправильно. Додамо змінну clicks до масиву залежностей ефекту.

// import { useState, useEffect } from "react";

// const App = () => {
//   const [clicks, setClicks] = useState(0);

// 	// ✅ Залежності вказані правильно
//   useEffect(() => {
//     console.log("Clicks updated: ", clicks);
//   }, [clicks]);

//   return (
//     <button onClick={() => setClicks(clicks + 1)}>
//       You clicked {clicks} times
//     </button>
//   );
// };

//* Декілька ефектів
//* Коли в компоненті є кілька станів, можна використовувати ефекти, щоб реагувати на зміни будь-якої комбінації значень і виконувати певний код. Головне не забувати правильно вказувати залежності кожного ефекту.
//* Отримаємо ефекти, які запускаються лише при зміні певних значень.

// import { useState, useEffect } from "react";

// const App = () => {
//   const [first, setFirst] = useState(0);
//   const [second, setSecond] = useState(0);

//   useEffect(() => {
//     console.log("First updated: ", first);
//   }, [first]);

//   useEffect(() => {
//     console.log("Second updated: ", second);
//   }, [second]);

//   useEffect(() => {
//     console.log("First or second updated: ", first + second);
//   }, [first, second]);

//   return (
//     <>
//       <button onClick={() => setFirst(first + 1)}>First: {first}</button>
//       <button onClick={() => setSecond(second + 1)}>Second: {second}</button>
//     </>
//   );
// };

//* localStorage

// import { useState, useEffect } from "react";

// const App = () => {
//   const [clicks, setClicks] = useState(0);

//   useEffect(() => {
//     window.localStorage.setItem("saved-clicks", clicks);
//   }, [clicks]);

//   return (
//     <div>
//       <button onClick={() => setClicks(clicks + 1)}>
//         You clicked {clicks} times
//       </button>
//       <button onClick={() => setClicks(0)}>Reset</button>
//     </div>
//   );
// };

// export default App;

import { useState } from "react";
import LangSwitcher from "./LangSwitcher/LangSwitcher";
import LoginForm from "./LoginForm/LoginForm";
import SearchBar from "./SearchBar/SearchBar";

const App = () => {
  const [lang, setLang] = useState("uk");
  // Колбек-функція для обробки сабміту форми
  const handleLogin = (userData) => {
    // Виконуємо необхідні операції з даними
    console.log(userData);
  };

  return (
    <div>
      <h1>Please login to your account!</h1>
      {/* Передаємо колбек як пропс форми */}
      <LoginForm onLogin={handleLogin} />
      <SearchBar />
      <p>Selected language:{lang} </p>
      <LangSwitcher value={lang} onSelect={setLang} />
    </div>
  );
};

export default App;
