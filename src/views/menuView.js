import { state } from "../state/state.js";
import { saveOrders } from "../data/storage.js";
import { renderCartSummary } from "../components/cartSummary.js";

export function renderMenu() {
  const app = document.getElementById("app");

  app.innerHTML = `
    <div class="menu-layout">
        <div>
          <h2>Menú</h2>
          <div class="menu-grid" id="menuGrid"></div>
        </div>

        <div class="card cart" id="cart-summary"></div>
    </div>

    <button id="confirm">Confirmar pedido</button>
  `;

  const grid = document.getElementById("menuGrid");

  state.products.map(product => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `
      <div class="product-name">${product.name}</div>
      <div class="product-price">$${product.price}</div>
      <button>Agregar</button>
    `;

    div.querySelector("button").addEventListener("click", () => {
      state.cart.push(product);
      renderCartSummary();
    });

    grid.appendChild(div);
  });

  document.getElementById("confirm").addEventListener("click", () => {
    if (!state.cart.length) return alert("Carrito vacío");

    const total = state.cart.reduce((a, i) => a + i.price, 0);

    state.orders.push({
      id: Date.now(),
      userId: state.session.id,
      items: state.cart,
      total,
      status: "pendiente",
      createdAt: new Date().toISOString()
    });

    state.cart = [];
    renderCartSummary();
    saveOrders();
    alert("Pedido creado");
  });
}
