// import pizzaData from "./PizzaData.js";

export default function Pizza({ pizzaData }) {
  const pLen = pizzaData.length;
  if (!pLen) return <p>Opps! we're sorry out of order</p>;
  return (
    <ul className="pizzas">
      {pizzaData.map((e, i) => {
        // if (e.soldOut) return null;
        return (
          <li className={`pizza ${e.soldOut ? "sold-out" : ""}`} key={i}>
            <img src={e.photoName} alt={e.name} />
            <div>
              <h3>{e.name}</h3>
              <p>{e.ingredients}</p>
              <span>{e.soldOut ? "SOLD OUT" : e.price}</span>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
