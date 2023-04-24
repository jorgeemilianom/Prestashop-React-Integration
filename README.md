# Presta-React-Integration (PRI)
La carpeta 'react' implementa un proyecto de react-vite normal, salvo por unas configuraciones especiales en vite.config.js para que funciones correctamente en el mall dentro de wsl el modo live-server. Adicionalmente hay un archivo React.php que contiene una clase que integra con PrestaShop 1.6 para que no se tenga que tocar codigo por todos lados para integrar.


# Entorno local
Para hacer correr el entorno debemos seguir los siguientes pasos:
- Dentro de la integración (carpeta react) ejecutar `npm install` o `yarn install` corriendo con NodeJS v18.14^
- Una vez instaladas las dependendias levantar el servidor con `npm run dev` o `yarn dev`
- Se puede validar el funcionamiento correcto ingresando al servidor provisto por react-vite.

#Integracion
Datos a tener en cuenta para integrar en un proyecto.
- Clonar Presta-React-Integration dentro del módulo a usar.
- Corriendo el servidor de react (`npm run dev` o `yarn dev`) se debe validar que la ruta localhost dada por react coincida con la que tiene configurada el archivo React.php en la variable $react_host
- A nivel de codigo se debe instanciar la clase React del siguiente modo <br> `$React = new React($this->_path)`
- Por ultimo, donde se quiera integrar se debe crear un elemento DIV con ID 'reactintegration' y debajo del mismo imprimir el contenido de $React->assets

#Deploy
Para el deploy del mismo seguir los siguientes pasos:
- Ejecutar `npm run build` o `yarn build`
- Dentro del archivo React.php cambiar la variable $modeProd a true