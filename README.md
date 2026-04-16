# 🍽️ RestorApp

Aplicación web para la gestión de un restaurante, que permite manejar usuarios, productos y órdenes desde una interfaz sencilla en el navegador.

---

## 🚀 Demo

> ⚠️ Proyecto frontend basado en almacenamiento local (`localStorage`). No cuenta con backend.

---

## 🧠 Descripción

**RestorApp** es una aplicación diseñada como práctica de arquitectura frontend, donde se implementan conceptos clave como:

* Manejo de estado global
* Navegación entre vistas
* Persistencia de datos en el cliente
* Separación de responsabilidades

---

## 🏗️ Arquitectura del Proyecto

```
RestorApp/
│
├── index.html          # Entry point
├── styles.css          # Estilos globales
├── README.md
│
└── src/
    │
    ├── app.js          # Inicialización de la app
    │
    ├── components/     # Componentes reutilizables
    │   ├── cartSummary.js
    │   └── nav.js
    │
    ├── views/          # Vistas (pantallas)
    │   ├── adminView.js
    │   ├── loginView.js
    │   ├── menuView.js
    │   ├── myOrdersView.js
    │   └── profileView.js
    │
    ├── router/         # Navegación
    │   └── router.js
    │
    ├── state/          # Estado global
    │   └── state.js
    │
    └── data/           # Persistencia / datos
        ├── seed.js
        └── storage.js
```

---

## ⚙️ Funcionalidades

* 🔐 Simulación de login
* 👥 Gestión de usuarios
* 🍔 Gestión de productos
* 🧾 Creación de órdenes
* 💾 Persistencia con `localStorage`

---

## 🧪 Tecnologías utilizadas

* JavaScript (Vanilla)
* HTML5
* CSS3

---

## 📦 Instalación y uso

1. Clona el repositorio:

```bash
git clone https://github.com/tu-usuario/restorapp.git
```

2. Abre el proyecto:

```bash
cd restorapp
```

3. Ejecuta el proyecto abriendo el archivo:

```bash
index.html
```

---

## ⚠️ Limitaciones

Este proyecto **NO está listo para producción** por las siguientes razones:

* ❌ No tiene backend
* ❌ No hay autenticación real
* ❌ Los datos se almacenan en el navegador
* ❌ Seguridad inexistente

---

## 🚀 Mejoras futuras

* Integración con backend (Node.js / Next.js)
* Base de datos (PostgreSQL / MongoDB)
* Autenticación segura (JWT + bcrypt)
* Migración a React + TypeScript
* Manejo de estado avanzado (Redux / Zustand)
* Validaciones y manejo de errores

---

## 📈 Objetivo del proyecto

Este proyecto fue desarrollado con fines educativos para:

* Practicar arquitectura frontend
* Entender flujo de datos en aplicaciones SPA
* Preparar bases para proyectos más complejos

---

## 👨‍💻 Autor

Desarrollado por **Tobías Atehortúa**

---

## 📄 Licencia

Este proyecto es de uso libre para fines educativos.
