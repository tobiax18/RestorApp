import { state } from "../state/state.js";
import { clearSession } from "../data/storage.js";
import { router } from "../router/router.js";

export function renderNav() {
  const nav = document.getElementById("nav");
  nav.innerHTML = "";

  if (!state.session) return;

  if (state.session.role === "user") {
    nav.innerHTML = `
      <button data-route="menu">Menú</button>
      <button data-route="my-orders">Mis pedidos</button>
      <button data-route="profile">Perfil</button>
      <button id="logout">Salir</button>
    `;
  }

  if (state.session.role === "admin") {
    nav.innerHTML = `
      <button data-route="admin">Pedidos</button>
      <button id="logout">Salir</button>
    `;
  }

  nav.querySelectorAll("button[data-route]").forEach(btn => {
    btn.addEventListener("click", () => router(btn.dataset.route));
  });

  document.getElementById("logout").addEventListener("click", () => {
    clearSession();
    router("login");
  });
}
