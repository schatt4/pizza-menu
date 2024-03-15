export default function Footer() {
  const hour = new Date().getHours();
  const openHour = 11;
  const closeHour = 21;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className="footer">
      {isOpen && (
        <div className="order">
          <p>
            we are open until {closeHour}.00. Cpme visit us or Order Online{" "}
          </p>
          <button className="btn">Order now</button>
        </div>
      )}
    </footer>
  );
}
