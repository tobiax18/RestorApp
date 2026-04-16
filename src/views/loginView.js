import { state } from "../state/state.js";
import { setSession } from "../data/storage.js";
import { router } from "../router/router.js";

export function renderLogin() {
  const app = document.getElementById("app");

  app.innerHTML = `
    <div class="card login">
      <h2>Login</h2>
      <form id="loginForm">
        <input type="email" placeholder="Email" required />
        <button>Ingresar</button>
      </form>
    </div>
  `;

  document.getElementById("loginForm").addEventListener("submit", e => {
    e.preventDefault();
    const email = e.target[0].value;
    const user = state.users.find(u => u.email === email);

    if (!user) return alert("Usuario no encontrado");

    setSession(user);
    router(user.role === "admin" ? "admin" : "menu");
  });
}
