import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";

let pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

//function name must be capitalized
//never neest components, they should be top-level functions
function Pizza({ pizzaObj }) {
  //function must return markup

  return (
    <li className={`pizza ${pizzaObj.soldOut && "sold-out"}`}>
      <img src={pizzaObj.photoName} alt="Pizza Spinaci" />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
      </div>
    </li>
  );
}

function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {/* conditional rendering using && */}
      {pizzaData.length > 0 && (
        // returning 2 elements needs a react fragment
        <React.Fragment>
          <p>
            Authentic Italian cuisine, 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>
          <ul className="pizzas">
            {pizzaData.map((el) => (
              <Pizza pizzaObj={el} key={el.name} />
            ))}
          </ul>
        </React.Fragment>
      )}
    </main>
  );
}

function Header() {
  //inline styles in react
  // return (
  //   <h1 style={{ color: "red", fontSize: "48px" }}>Fast React Pizza Company</h1>
  // );
  return (
    <header className="header">
      <h1>Fast React Pizza Co</h1>;
    </header>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 20;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  return (
    <footer className="footer">
      {/* conditional rendering using ternery operator */}
      {isOpen ? (
        <Order closeHour={closeHour} />
      ) : (
        <div>We open again at {openHour}:00</div>
      )}
    </footer>
  );
}

//destructuring props
function Order({ closeHour }) {
  return (
    <div className="order">
      <p>We're open until {closeHour}:00. Come visit us or order online.</p>
      <button className="btn">Order &rarr;</button>
    </div>
  );
}

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
