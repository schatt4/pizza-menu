import Pizza from "./Pizza";

export default function Menu({ pizzaData }) {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <p>
        Authentic Italian cuisine. 6 creative dishes to choose from. All from
        our stone oven, all organic, all delicious.
      </p>
      <Pizza pizzaData={pizzaData} />
    </main>
  );
}
