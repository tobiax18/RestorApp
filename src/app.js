import { seedData } from "./data/seed.js";
import { loadStorage } from "./data/storage.js";
import { router } from "./router/router.js";

seedData();
loadStorage();

router("login");
