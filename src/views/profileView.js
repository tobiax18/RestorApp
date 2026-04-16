import { state } from "../state/state.js";

export function renderProfile() {
  const app = document.getElementById("app");

  const myOrders = state.orders.filter(
    order => order.userId === state.session.id
  );

  const totalSpent = myOrders.reduce(
    (acc, order) => acc + order.total,
    0
  );

  app.innerHTML = `
    <div class="card">
      <h2>Perfil</h2>
      <p><strong>Nombre:</strong> ${state.session.name}</p>
      <p><strong>Email:</strong> ${state.session.email}</p>
      <p><strong>Rol:</strong> ${state.session.role}</p>
      <p><strong>Pedidos realizados:</strong> ${myOrders.length}</p>
      <p><strong>Total gastado:</strong> $${totalSpent}</p>
    </div>
  `;
}
