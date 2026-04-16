import { state } from "../state/state.js";
import { renderLogin } from "../views/loginView.js";
import { renderMenu } from "../views/menuView.js";
import { renderMyOrders } from "../views/myOrdersView.js";
import { renderProfile } from "../views/profileView.js";
import { renderAdmin } from "../views/adminView.js";
import { renderNav } from "../components/nav.js";

export function router(route) {
  console.log("Ruta: ", route);
  renderNav();

  if (!state.session && route !== "login") {
    return renderLogin();
  }

  if (route === "login") return renderLogin();
  if (route === "menu") return renderMenu();
  if (route === "my-orders") return renderMyOrders();
  if (route === "profile") return renderProfile();

  if (route === "admin") {
    if (state.session.role !== "admin") return renderMenu();
    return renderAdmin();
  }
}
