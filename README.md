# Curso ReactJS - Coderhouse

Este proyecto está conformado por los diferentes desafíos planteados en el Curso de ReactJS de Coderhouse.
La propuesta del mismo era desarrollar un ecommerce. Dentro de las principales funcionalidades se encuentran:

- Listar productos.
- Filtrar los productos por categoría al seleccionar alguna del Navbar.
- Acceder al detalle de cada producto.
- Agregar productos al carrito.
- Eliminar artículos específicos del carrito o vaciarlo por completo.
- Generar una orden de compra luego de completar datos personales.

## Tecnologías

Como bien se indica, se utilizó **ReactJS** para el armado del proyecto.
En cuanto a los estilos, se utilizó **Material UI**.
Los datos de los productos y las órdenes generadas se almacenan en **Firebase**.

## Instalación

Luego de descargar el proyecto, ejecutar:

### `npm install`

A continuación, ejecutar:

### `npm start`

De esta manera, comenzará a correr el proyecto en el puerto 3000.

## Deploy

El sitio puede verse deployado [AQUÍ](https://ecstatic-liskov-49e4e4.netlify.app/).

## Puntos a desarrollar para mejorar la aplicación

- **Diseño:** 
    - Establecer una paleta de colores y aplicarla a todos los componentes, no sólo a algunos.
    - Crear un logo para la marca.
- **Responsive:** 
    - Crear un menú "hamburguesa" para la versión mobile.
    - Cambiar las medidas de los elementos por relativas.
- **Imágenes:**
    - Actualmente las imágenes se obtienen directamente desde url sacadas de internet. Lo mejor sería guardarlas en otro lugar (por ejemplo, Drive) para evitar posibles errores al cargarlas.
- **Estilado:**
    - Al ser mi primera vez utilizando Material UI, y al estar aprendiendo cómo funciona, repetí código para estilar cada uno de los elementos. Debería aplicar estilos comunes (por ejemplo, `display: flex; justify-content: center;`).