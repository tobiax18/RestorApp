import { state } from "../state/state.js";
import { saveOrders } from "../data/storage.js";

export function renderAdmin() {
  const app = document.getElementById("app");

  app.innerHTML = `<h2>Panel de administración</h2>`;

  if (state.orders.length === 0) {
    app.innerHTML += `<p>No hay pedidos</p>`;
    return;
  }

  state.orders.forEach(order => {
    const div = document.createElement("div");
    div.className = "card";

    div.innerHTML = `
      <p><strong>Pedido:</strong> #${order.id}</p>
      <p><strong>Usuario:</strong> ${order.userId}</p>
      <p><strong>Total:</strong> $${order.total}</p>
      <p>
        <strong>Estado:</strong>
        <select>
          <option value="pendiente">pendiente</option>
          <option value="preparando">preparando</option>
          <option value="listo">listo</option>
          <option value="entregado">entregado</option>
        </select>
      </p>
    `;

    const select = div.querySelector("select");
    select.value = order.status;

    select.addEventListener("change", () => {
      order.status = select.value;
      saveOrders();
    });

    app.appendChild(div);
  });
}
