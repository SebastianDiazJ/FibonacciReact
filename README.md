# Fibonacci Clock

Este proyecto es una aplicación React que muestra un reloj basado en la secuencia de Fibonacci. La aplicación utiliza la hora actual para generar dinámicamente una secuencia de Fibonacci y la muestra en pantalla junto con la hora actual.

## Tabla de Contenidos

- [Descripción](#descripción)
- [Requisitos Previos](#requisitos-previos)
- [Instalación](#instalación)
- [Ejecución](#ejecución)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Funcionamiento](#funcionamiento)
  - [Estado del Componente](#estado-del-componente)
  - [Funciones Principales](#funciones-principales)
  - [Ciclo de Vida del Componente](#ciclo-de-vida-del-componente)
- [Scripts Disponibles](#scripts-disponibles)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Contribuciones](#contribuciones)
- [Licencia](#licencia)

---

## Descripción

La aplicación muestra un reloj que actualiza la hora en tiempo real y genera una secuencia de Fibonacci basada en los minutos actuales. La secuencia se actualiza cada segundo para reflejar los cambios en la hora.

---

## Requisitos Previos

Antes de ejecutar este proyecto, asegúrate de tener instalado lo siguiente:

- [Node.js](https://nodejs.org/) (versión 14 o superior)
- [npm](https://www.npmjs.com/) o [yarn](https://yarnpkg.com/)

---

## Instalación

1. Clona este repositorio en tu máquina local:
   ```bash
   git clone https://github.com/SebastianDiazJ/fibonacci-clock.git
   
Navega al directorio del proyecto:

cd fibonacci-clock

Para ejecutar la aplicación en modo de desarrollo, utiliza el siguiente comando:
npm install

## Estructura del Proyecto
fibonacci-clock/
├── public/                 # Archivos públicos
│   ├── index.html          # Archivo HTML principal
│   └── favicon.ico         # Ícono de la aplicación
├── src/                    # Código fuente
│   ├── components/         # Componentes React
│   │   └── [FibonacciClock.js](http://_vscodecontentref_/0) # Componente principal
│   ├── App.js              # Punto de entrada de la aplicación
│   ├── index.js            # Renderizado del DOM
│   └── styles.css          # Estilos de la aplicación
├── package.json            # Configuración del proyecto
└── [README.md](http://_vscodecontentref_/1)               # Documentación del proyecto

## funcionamiento

Estado del Componente
El componente FibonacciClock utiliza dos estados principales:

Secuencia: Un array que almacena la secuencia de Fibonacci generada dinámicamente.
Hora: Una cadena que almacena la hora actual en formato HH:mm:ss.
Funciones Principales
1. generarFibonacci(n)
Genera la secuencia de Fibonacci hasta el n-ésimo número.

Entrada: Un número entero n.
Salida: Un array con los primeros n números de la secuencia de Fibonacci.
Lógica:
Si n <= 0, devuelve un array vacío.
Si n === 1, devuelve [0].
Si n > 1, genera la secuencia sumando los dos últimos números hasta alcanzar la longitud n.
2. obtenerHoraActual()
Obtiene la hora actual del sistema.

Salida: Un objeto con las propiedades horas, minutos y segundos.
Lógica:
Utiliza el objeto Date para obtener la hora, minutos y segundos actuales.
3. determinarLongitud()
Determina la longitud de la secuencia de Fibonacci basada en los minutos actuales.

Salida: Un número entero que representa los minutos actuales.
Ciclo de Vida del Componente
El componente utiliza el hook useEffect para manejar el ciclo de vida:

Montaje:

Se establece un intervalo que se ejecuta cada segundo.
En cada iteración:
Se calcula la longitud de la secuencia basada en los minutos actuales.
Se genera una nueva secuencia de Fibonacci.
Se actualiza la hora actual.
Desmontaje:

Se limpia el intervalo utilizando clearInterval para evitar fugas de memoria.

