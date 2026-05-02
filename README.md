## 🍕 Proyecto Pizzeria Mamma Mia  

Este proyecto corresponde al Hito 7 del módulo de React, donde se implementa manejo de rutas dinámicas, contexto global para autenticación simulada y rutas protegidas.

------ 

## 📌 Funcionalidades del proyecto
1. 🔍 Detalle de pizzas con useParams
Se implementa una ruta dinámica /pizza/:id
Se obtiene el id desde la URL con useParams
Se realiza una petición a la API para mostrar la información de la pizza seleccionada

------ 
## 🛠️ Tecnologías utilizadas
React
Context API
React Router DOM
Bootstrap
JavaScript 

------ 

## 🌐 Contexto de usuario (UserContext)
Se crea un contexto global para manejar autenticación simulada
El estado token controla si el usuario está logueado o no
Incluye métodos:
login() → activa el token
logout() → desactiva el token


------ 

## 🛒 Carrito protegido
El botón "Pagar" se deshabilita si el usuario no está logueado (token = false)

------ 

## 🔐 Rutas protegidas
/profile solo es accesible si el usuario está logueado
Si token = false, se redirige a /login
Si el usuario está logueado, no puede acceder a /login ni /register

------  

## 📷 Captura de Imagen 

<img width="1889" height="837" alt="image" src="https://github.com/user-attachments/assets/aa08d0f5-2722-4e3d-864d-2611dbb081c5" />

<img width="675" height="611" alt="image" src="https://github.com/user-attachments/assets/bb34e38c-b061-4097-95c9-37efbb54a961" />



------

👩‍💻 Autor

Proyecto desarrollado por Ariadna Jara
