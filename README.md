# E-commerce App

Una aplicación de comercio electrónico moderna y responsive construida con Next.js y Tailwind CSS. La aplicación ofrece una experiencia de usuario fluida y una arquitectura robusta.

## 🚀 Características Principales

### 🛍️ Módulo de Productos

- 📱 Interfaz responsive para móviles y desktop
- 🔍 Búsqueda de productos por ID
- 📦 Listado de productos por colección
- 🌟 Sistema de favoritos para productos
- 🛒 Carrito de compras con:
  - Modificación de cantidades
  - Cálculo automático del total
  - Manejo de impuestos
  - Confirmación de compra

### 👤 Módulo de Perfiles

- 📊 Información del usuario

## 🛠️ Tecnologías Utilizadas

- **Frontend:**

  - Next.js 14
  - React 18
  - TypeScript
  - Tailwind CSS
  - Context API

- **Gestión de API:**

  - Axios para peticiones HTTP
  - TanStack Query para caché y gestión del estado
  - Integración con API externa para datos de productos

- **UI/UX:**
  - Componentes reutilizables
  - Animaciones suaves
  - Diseño responsive
  - Interfaz intuitiva

## 📦 Funcionalidades Destacadas

### Carrito de Compras

- 📦 Agregar productos al carrito
- 🔢 Modificar cantidades
- 🗑️ Eliminar productos
- 💰 Cálculo automático de total
- 📄 Resumen de compra
- ✅ Proceso de compra

### Sistema de Favoritos

- 🌟 Marcar productos como favoritos
- 🔄 Actualización en tiempo real
- 🗑️ Eliminar de favoritos

## 📁 Estructura del Proyecto

```bash
`src/`
├── `app/`
│ ├── `components/` # Componentes reutilizables
│ │ ├── `modals/` # Componentes de modales
│ │ ├── `status/` # Componentes de estados
│ │ └── Otros componentes...
│ │
│ ├── `context/` # Contextos de React
│ │ ├── `CartProductsProvider.tsx` # Contexto del carrito
│ │ ├── `FavProductsProvider.tsx` # Contexto de favoritos
│ │ └── `ReactQueryProvider.tsx` # Contexto de TanStack Query
│ │
│ ├── `hooks/` # Hooks personalizados
│ │ └── `products/` # Hooks para productos
│ │
│ └── `layout.tsx` # Layout principal de la aplicación
│
└─── `domain/` # Definiciones de tipos y modelos
```

## 🚀 Instalación

1. Clona el repositorio:

```bash
git clone [https://github.com/tu-usuario/e-commerce-app.git](https://github.com/tu-usuario/e-commerce-app.git)
cd e-commerce-app
```

2. Instala las dependencias:

```bash
npm install
```

3. Inicia el servidor de desarrollo:

```bash
npm run dev
```

4. Abre tu navegador y ve a `http://localhost:3000` para ver la aplicación.
