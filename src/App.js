import React, { useState } from "react";
// import Card from "./components/Card/Card";
// import Counter from "./components/Counter/Counter";
// import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import "./Style.css";

const App = () => {
  const str = "hello react!";
  const logo = "https://pngimg.com/uploads/tesla_logo/tesla_logo_PNG21.png";
  let init_cars = [
    {
      model: "Model S",
      image:
        "https://avatars.mds.yandex.net/get-verba/1540742/2a0000017761d1c8de5ba80a8148f180432f/cattouchret",
      id: 1,
    },
    {
      model: "Model Y",
      image:
        "https://img-c.drive.ru/models.large.main.images/0000/000/000/001/94e/48d87b7124e03248-main.jpg",
      id: 2,
    },
    {
      model: "Model X",
      image: "https://electrodrivemoscow.ru/img/b3s1.jpg",
      id: 3,
    },
    {
      model: "Model 3",
      image:
        "https://enormgallery.b-cdn.net/tsportline/65513/matte-military-green-tesla-model-3-performance-20-inch-forged-wheels-m3115-black-wm-1-1611274233-600a17f946521.jpg?width=1024",
      id: 4,
    },
  ];
  const [cars, setCars] = useState(init_cars);

  // const [state, setState] = useState(0);
  return (
    <div id="body">
      {/* <button onClick={e => setState(state - 1)}>-</button>
      <span>{state}</span>
      <button onClick={e => setState(state + 1)}>+</button> */}
      {/* <Card /> */}
      {/* <Counter /> */}
      <Header cars={cars} logo={logo} name={"Ulan"} />
      {/* <div>{str}</div> */}
      <List cars={cars} />
      {/* <Footer /> */}
    </div>
  );
};

export default App;
