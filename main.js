// FUNCIONES:

// Crea un programa el cual te pregunte por una nota del 0 al 10 y dependiendo del número, te devuelva la siguiente clasificación.
// Nota: Debes de usar el Switch.
// 0 - 4: Insuficiente.
// 5 - 6: Suficiente.
// 7 - 8: Notable.
// 9 - 10: Sobresaliente.


function nota () {
let nota = prompt ('dime tu nota:');
console.log();

    switch (true) {
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
            console.log("Insuficiente");
            break;
        case '5':
        case '6':
            console.log("Suficiente");
            break;
        case '7':
        case '8':
            console.log("Notable");
            break;
        case '9':
        case '10':
            console.log("Sobresaliente");
            break;
        default:
            console.log("No existe");
    }
}

// SE ME ATRAGANTÓ, ESPERO A LA CORRECIÓN 
  
// Crea una función resta que espere dos parámetros a y b y que devuelva la resta de los mismos.
 
function resta(a, b) {
  let total = a - b;
  return total;
}
console.log(resta(8, 3));

// Crea la función duplicaNumero debe recibir un tipo number y devolver el doble del valor recibido. Si la función no recibe un dato tipo number debe devolver el string ‘Debo ser ejecutada con un número’


function duplicaNumero(num) {
  let double = num * 2;
  return double;
}

console.log(duplicaNumero(6));

// Crea la función caracterInicial  debe recibir un tipo string y devolver un string con el primer carácter. 
// Si la función no recibe un dato tipo string debe devolver el string 'Debo ser ejecutada con un string'. 
// Si recibe un string vacío debe devolver 'Debo ser ejecutada con un string no vacío'

function caracterinicial(get) {
  if (typeof get !== "string") {
    return "Debo ser ejecutada con un string";
  } else if (get.length === 0) {
    return "Debo ser ejecutada con un string no vacio";
  } else {
    return get['armario'];
  }
}
console.log(caracterinicial());

// Crea la función ultimoCaracter debe recibir un tipo string y devolver un string con el último carácter.
// Si la función no recibe un dato tipo string debe devolver el string 'Debo ser ejecutada con un string'.
// Si recibe un string vacío debe devolver 'Debo ser ejecutada con un string no vacío'

function ultimoCaracter(get) {
  if (typeof get !== "string") {
    return "Debo ser ejecutada con un string";
  } else if (get.length === 0) {
    return "Debo ser ejecutada con un string no vacio";
  } else {
    return get[get.length - 1];
  }
}
console.log(ultimoCaracter("mtocicleta"));

// Crea la función cuentaCaracteres debe recibir un tipo string y devolver un number con el número de carácteres
// Si la función no recibe un dato tipo string debe devolver el string 'Debo ser ejecutada con un string'

function cuentaCaracter(get) {
  if (typeof get !== "string") {
    return "Debo ser ejecutada con un string";
  } else if (get.length === 0) {
    return "Debo ser ejecutada con un string no vacio";
  } else {
    return get.length;
  }
}
console.log(cuentaCaracter("esternonucleomastoideo"));


// Un palíndromo es una palabra que se escribe igual del derecho que del revés por ejemplo orejero, rallar o somos.  Crea la función esPalindromo que recibirá una cadena de texto y deberá devolver si es un palíndromo o no.
// Si la función no recibe una cadena de texto o está vacía 'no es un formato correcto'


function esPalindromo(str) {
  const strReversed = str.split("").reverse().join("");

  return strReversed === str ? "es palindromo" : "no es palindromo";
}
console.log(esPalindromo("oso"))


// Crea la función getPrecioMostrar para que devuelva una cadena de texto con formato precio con dos decimales. Para 2 debería devolver 2.00 €. 
// Si la función no recibe un número debería devolver devolver 'no es un formato correcto'


function getPrecioMostrar(plata) {
  if (typeof plata === "number") {
    return plata.toFixed(2);
  } else {
    return "no es un formato correcto";
  }
}

console.log(getPrecioMostrar('F'));


// Crea la función division que acepte como argumento dos números y devuelva el resultado de su división



function division(dividend, divisor) {
  return dividend / divisor;
}
console.log(division(10, 2));


// Crea una función que dada una array de números, devuelve una nueva array que tenga solo los números que son 5 o más. Ejemplo entrada [3, 6, 8, 2] salida [6, 8]


// Crea una aplicación que nos pida un número por prompt y con un método se lo pasamos por parámetro para que nos indique si es o no un número primo, debe devolver true si es primo sino false. 
// Un número primo es aquel que solo puede dividirse entre 1 y sí mismo. Por ejemplo: 25 no es primo, ya que 25 es divisible entre 5, sin embargo, 17 si es primo.


const numPrompt = prompt("teclea un número para comprobar si es primo");
function primo(num) {
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      return "no es Primo";
    }                                                     
  }
  return "es Primo";
}
console.log(primo(numPrompt));


