import react, { useEffect, useState } from 'react';
import { use } from 'react';        

function FibonacciClock() {
    const [Secuencia, setSecuencia] = useState([]); // Estado para almacenar la secuencia de Fibonacci
    const [Hora, setHora] = useState(''); // Estado para la hora actual

    useEffect(() => {
        
    const intervalId = setInterval(() => {
            const longitud = determinarLongitud(); // Llamar a la función para determinar la longitud de la secuencia
            const nuevaSecuencia = generarFibonacci(longitud); // Generar la nueva secuencia de Fibonacci
            setSecuencia(nuevaSecuencia); // Actualizar el estado con la nueva secuencia

            const { horas, minutos, segundos } = obtenerHoraActual(); // Obtener la hora actual
                  setHora(`${horas}:${minutos < 10 ? '0' + minutos : minutos}:${segundos}`); // : Es un operador ternario que asegura que los minutos siempre tengan dos dígitos. 
                  // Si los minutos son menores a 10, se les agrega un 0 al inicio (por ejemplo, 09 en lugar de 9).Actualizar cada segundo
              }, 1000);
      
              // Limpiar el intervalo cuando el componente se desmonte
              return () => clearInterval(intervalId);
          }, []); // El array vacío [] asegura que el efecto solo se ejecute una vez al montar el componente
          
          function generarFibonacci(n) {
            // Genera la secuencia de Fibonacci hasta el n-ésimo número
            if (n <= 0) {
              // Si n es menor o igual a 0, devuelve un array vacío
              return [];
            } else if (n === 1) {
              // Si n es 1, devuelve un array con el primer número de Fibonacci (0)}
              return [0];
            } else {
              const secuencia = [0, 1]; // Inicializa la secuencia con los dos primeros números de Fibonacci
              // Si n es mayor que 1, comienza a generar la secuencia
              while (secuencia.length < n) {
                // Mientras la longitud de la secuencia sea menor que n, sigue generando números
                const siguienteNumero = secuencia[secuencia.length - 1] + secuencia[secuencia.length - 2]; // Calcula el siguiente número de 
                // Fibonacci sumando los dos últimos números de la secuencia , .length se utiliza para obtener la cantidad de elementos en un array o la longitud de una cadena de texto.
                //  En el caso ls,secuencia.length devuelve el número de elementos que hay actualmente en el array secuencia.
                // Agrega el siguiente número a la secuencia 
                secuencia.push(siguienteNumero);
              }
              return secuencia;
            }
          }
            function obtenerHoraActual() {
                const fecha = new Date(); // Crea un nuevo objeto Date con la fecha y hora actuales
                const horas = fecha.getHours(); // Obtiene la hora actual (0-23)
                const minutos = fecha.getMinutes(); // Obtiene los minutos actuales (0-59)
                const segundos = fecha.getSeconds(); // Obtiene los segundos actuales (0-59)
                return { horas, minutos, segundos }; // Devuelve un objeto con la hora, minutos y segundos
            }


          function determinarLongitud() {  
            const { minutos } = obtenerHoraActual();
            return minutos; // La longitud de la secuencia se basa en los minutos actuales
        }
        return (
            <div className="fibonacci-clock">
                <h1>Fibonacci Clock</h1>
                <h2>{Hora}</h2> {/* Muestra la hora actual */}
                <div className="secuencia">
                    {Secuencia.map((numero, index) => (
                        <div key={index} className="numero">{numero}</div> // Muestra cada número de la secuencia de Fibonacci
                    ))}
                </div>
            </div>
        );
    }
export default FibonacciClock; // Exporta el componente para que pueda ser utilizado en otros archivos
