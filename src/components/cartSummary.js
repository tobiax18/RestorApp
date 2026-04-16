import { state } from "../state/state.js";

export function renderCartSummary() {
  const cartContainer = document.getElementById("cart-summary");
  if (!cartContainer) return;

  if (state.cart.length === 0) {
    cartContainer.innerHTML = `<p>Carrito vacío</p>`;
    return;
  }

  // Agrupar productos por id
  const grouped = state.cart.reduce((acc, product) => {
    acc[product.id] = acc[product.id]
      ? { ...acc[product.id], qty: acc[product.id].qty + 1 }
      : { ...product, qty: 1 };
    return acc;
  }, {});

  const items = Object.values(grouped);

  const total = items.reduce((acc, item) => acc + item.price * item.qty, 0);

  cartContainer.innerHTML = `
    <h3>🛒 Tu pedido</h3>
    ${items
      .map(
        item => `
        <div class="cart-item">
          <span>${item.name} x${item.qty}</span>
          <span>$${item.price * item.qty}</span>
          <button data-id="${item.id}">✕</button>
        </div>
      `
      )
      .join("")}
    <hr />
    <strong>Total: $${total}</strong>
  `;

  cartContainer.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = Number(btn.dataset.id);
      const index = state.cart.findIndex(p => p.id === id);
      state.cart.splice(index, 1);
      renderCartSummary();
    });
  });
}
