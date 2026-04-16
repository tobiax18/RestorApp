import { state } from "../state/state.js";

export function loadStorage() {
  state.users = JSON.parse(localStorage.getItem("users")) || [];
  state.products = JSON.parse(localStorage.getItem("products")) || [];
  state.orders = JSON.parse(localStorage.getItem("orders")) || [];
  state.session = JSON.parse(localStorage.getItem("session"));
}

export function saveOrders() {
  localStorage.setItem("orders", JSON.stringify(state.orders));
}

export function setSession(user) {
  state.session = user;
  localStorage.setItem("session", JSON.stringify(user));
}

export function clearSession() {
  state.session = null;
  localStorage.removeItem("session");
}
