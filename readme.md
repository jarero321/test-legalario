Holaaaaaa que taaaaaal ¿como estas?.
Esta es mi pruebaaaa despues de tomar mucho redbull, una mezcla extraña de coca-cola con aspirinas salio esta prueba :)
Me presento soy carlos o puedes llamarme CJ, este proyecto esta realizado con React asi que para poder ejecutar el codigo primero deberas de realizar
un npm install para instalar las dependencias
seguido de eso ocuparas correr el proyecto con npm run dev
despues podras correr el proyecto en https://localhost:5173/
claro esto si lo quieres correr en local (tambien estara desplegado en una app de hoisting gratuito).
Si bien el MVP de la feature no me quedo muy claro quise realizar unos ajustes conforme a mi experiencia trabajando este flujo de validaciones.
primero agregue una barra para indicarle al usuario en que paso esta, en el diseño solo vi que seguian un proceso de validacion asi que se me hizo intuitivo decirle al usuario en que parte del flujo estaba.
si bien la propuesta inicial era mostrar la pantalla con los 4 documentos para subir no me cuadraba del todo.
asi que cree la primera vista que menciona que documentos seran necesarios para la validacion biometrica (creo que es el mvp de la prueba no? no me mates ui-ux plis jsjs).
Si bien el foco principal de las validaciones es hacerlas en tiempo real, asi que me oriente totalmente a eso, es decir el flujo te incita a tomar las fotografias en el instante mas sin embargo por x o y razones no todos contamos con camara en la computadora (me incluyo) justo para este tipo de usuarios puse el mensaje que no detectamos algun tipo de camara seguido de la opcion de poder subir el archivo.
como base igualmente puedes elegir entre subir el archivo o tomar la fotografia (claro priorizando una decision para que el usuario tenga una opcion mas clara).
Si bien me hubiera gustado hacer mas cosas (retorno del usuario, hacer pantallas con iconos para dejarlo mas ilustrativo), creo que la app ya tiene un MVP del cual partir que es.
1 se muestra al usuario que proceso seguira
2 se comienza el flujo
3 se le dice al usuario si prefiere subir o tomar la foto (dando prioridad a tomar la fotografia)
4 insita al usuario a confirmar su imagen por si en un caso necesita corregirla
5 se muestra el flujo para la selfie
6 mismos pasos que para el primer documento
7 pantalla de validacion (se agrego el loader pero despues ya no se agrego algun modal)
Puntos que podrian hacer el flujo mas eficiente:
1 mostrar mensaje cuando se valido la informacion
2 retorno constante para el usuario.
3 guardar progreso en la ruta del usuario asi no pierde el progreso. (ejemplo url/validacion-biometrica/paso-no.1)

Bueno ahora hablando de lo tecnico se uso react,vite, tailwind, typescript, librerias como html-5-camera, react-drag-and-drop, y una estructura de carpeta que focalizada en escalabilidad teniendo en el root archivos que se comparten entre las futuras paginas, y un area de pages que centralizaria vistas especificas de cada pagina tomese de base validationBiometrics.

Quedo atento a su feeedback y cualquier tipo de comentario, thx al figma que me ayudo bastante a tomar los colores y margenes de la aplicacion :). 