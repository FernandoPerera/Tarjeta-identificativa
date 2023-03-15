**- Práctica 1 -**
=

***Tarjeta identificativa***
- 

Este proyecto trata de realizar una aplicación móvil dando uso de React-Native, sobre una tarjeta identificativa propia en la que añadamos un código QR que nos diriga hacía mi perfil de github.

<br>

#### **| Gestión de ramas |**

<br>
En este proyecto comenzaré creando una rama development para, a su vez crear subramas y ir realizando funciones de la aplicación para después pushearlas a development.
<br><br>

#### **| Comienzo del proyecto |**
<br>

Realizo primero la gestión del espacio de la pantalla con tres **<code>View</code>** y 
un estilo para cada uno de ellos dando uso de **<code>flex</code>** en la rama development previamente creada.

<br>

#### **| Desarrollo de las ramas |**
<br>

> **header**

- Creamos la rama header y desarrollo la presentación del usuario dando uso de un componente al que llamé **<code>Header</code>** y con la creación de estilos.

> **biography**

- A continuación creamos otra rama llamada biography dónde representaremos el texto de la biografía del usuario.Esto lo realizaremos con un componente llamado **<code>Biography</code>** donde introduciremos el texto.

> **qrCode**

- En el apartado del QR es necesario instalar unas librerías para su uso de esta manera :

<pre><code>npx expo install react-native-svg</code></pre> 

- - *Esto permite usar SVG en la aplicación, con soporte para interactividad y animación.*

<pre><code>npx expo install react-native-qrcode-svg</code></pre> 

- - *Permite generar un QR para su uso.* 
<br></br>

- Necesitamos importar **<code>QRCode</code>** para poder crear el QR y introducir dentro la website que queremos colocar.

<pre><code>import QRCode from 'react-native-qrcode-svg'</code></pre>

Luego de importarlo usaremos su propiedad **<code>value</code>** en la que introduciremos la website a la que queremos que se redireccione el QR.

Finalizamos el componente añadiendo un retoque al QR con un border sencillo y un pequeño mensaje debajo, con sus respectivos estilos.

<br>

#### **| Conclusión del proyecto |**
<br>
Me ha parecido un proyecto completo en el que se da uso de <strong><code>flex</code></strong> y de otras diferentes propiedades en el <strong><code>StyleSheet</code></strong> para obtener un buen diseño en la aplicación.

<br>

Además de esperar un buen código haciendo uso de la creación de componentes y de su buena implementación en el <strong><code>App.js</code></strong>.

<br>

Y por último y no menos importante el uso del <strong><code>git</code></strong>, el cual estará presente en todos los proyectos y nos enseñará a ordenar y gestionar nuestro proyecto con ramas y buenos <strong><code>commit</code></strong>.
<br>

