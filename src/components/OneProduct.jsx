import { BsPlusLg, BsDashLg } from "react-icons/bs";

function OneProduct() {
  const stil = { margin: 1 + "em", borderStyle: "dashed" };
  return (
    <div className="card" style={stil}>
      <img
        className="card-img-top"
        src="https://picsum.photos/200"
        alt="Neka slika"
      />
      <div className="card-body">
        <h3 className="card-title">Naziv proizvoda</h3>
        <p className="card-text">Ovo je neki duzi opis proizvoda.</p>
      </div>
      <button className="btn">
        <BsPlusLg />
      </button>
      <button className="btn">
        <BsDashLg />
      </button>
    </div>
  );
}

export default OneProduct;
