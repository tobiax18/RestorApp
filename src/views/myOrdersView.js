import { state } from "../state/state.js";

export function renderMyOrders() {
  const app = document.getElementById("app");

  const myOrders = state.orders.filter(
    order => order.userId === state.session.id
  );

  app.innerHTML = `<h2>Mis pedidos</h2>`;

  if (myOrders.length === 0) {
    app.innerHTML += `<p>No tienes pedidos aún</p>`;
    return;
  }

  myOrders.forEach(order => {
    const div = document.createElement("div");
    div.className = "card";

    div.innerHTML = `
      <p><strong>Pedido:</strong> #${order.id}</p>
      <p><strong>Total:</strong> $${order.total}</p>
      <p>
        <strong>Estado:</strong>
        <span class="status status-${order.status}">
          ${order.status}
        </span>
      </p>
    `;

    app.appendChild(div);
  });
}
