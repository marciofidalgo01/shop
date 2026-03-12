import { useCart } from "../context/CartContext";
import CartItem from "../components/CartItem";

function Carrinho() {

  const { cart } = useCart();

  const total = cart.reduce(
    (acc, item) => acc + Number(item.preco),
    0
  );

  return (

    <div className="cart-page">

      <h1>Seu Carrinho</h1>

      {cart.length === 0 && <p>Carrinho vazio</p>}

      {cart.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}

      <h2>
        Total:
        {total.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </h2>

    </div>
  );
}

export default Carrinho;