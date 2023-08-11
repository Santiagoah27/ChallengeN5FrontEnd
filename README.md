# ChallengeN5 Frontend

Este proyecto es una aplicación web construida con React para interactuar con el backend de administración de permisos.

## Índice

- [Configuración Inicial](#configuración-inicial)
- [Instalación de Dependencias](#instalación-de-dependencias)
- [Ejecución](#ejecución)
- [Contribuciones](#contribuciones)

## Configuración Inicial

### Configuración del Backend

Antes de ejecutar el frontend, asegúrate de haber configurado y puesto en marcha el proyecto backend siguiendo las instrucciones de su `README.md`. El frontend dependerá de la API proporcionada por este backend para funcionar correctamente.

### Configuración del Proyecto React

1. **Variables de Entorno**: Asegúrate de configurar cualquier variable de entorno que el proyecto pueda requerir. Estas se encuentran en el archivo `.env` en la raíz del proyecto. Si el proyecto proporciona un `.env.example`, puedes usarlo como base.

2. **Proxy**: Si el backend no está corriendo en el mismo puerto que el frontend, es posible que necesites configurar un proxy en el archivo `package.json` para evitar problemas de CORS. Añade la siguiente línea:

```json
"proxy": "http://localhost:[PUERTO_DEL_BACKEND]"
```
Reemplaza [PUERTO_DEL_BACKEND] con el puerto donde esté corriendo tu API del backend.

### Instalación de Dependencias
Con Node.js y npm instalados, navega a la raíz del proyecto y ejecuta:

```bash
npm install
```
Esto instalará todas las dependencias necesarias para el proyecto.

### Ejecución
Una vez configurado y con las dependencias instaladas, puedes iniciar la aplicación con:

```bash
npm start
```
La aplicación debería abrirse automáticamente en tu navegador. Si no es así, visita `http://localhost:3000`.
