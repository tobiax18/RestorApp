import { state } from "../state/state.js";

export function seedData() {
  if (!localStorage.getItem("users")) {
    const users = [
      { id: 1, name: "Admin", email: "admin@restorapp.com", role: "admin" },
      { id: 2, name: "Juan", email: "user@restorapp.com", role: "user" }
    ];
    localStorage.setItem("users", JSON.stringify(users));
  }

  if (!localStorage.getItem("products")) {
    const products = [
      { id: 1, name: "Hamburguesa", price: 15000, category: "Comida" },
      { id: 2, name: "Pizza", price: 18000, category: "Comida" },
      { id: 3, name: "Gaseosa", price: 5000, category: "Bebida" }
    ];
    localStorage.setItem("products", JSON.stringify(products));
  }

  state.users = JSON.parse(localStorage.getItem("users"));
  state.products = JSON.parse(localStorage.getItem("products"));
}
