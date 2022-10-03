//Closure
Function init () {
    let nama ="Gilang";
    Function menampilkanNama (){
        console.log(nama);
    }
    menampilkanNama ()
}
init();

//Immediately Invoked Function Expression
(function(){
     console.log(4) })(); //4 
(function(){
     console.log(4) }()); //4


// First-class function
// Menetapkan fungsi ke variabel
     const foo = () => {
        console.log("foobar");
      };
      foo(); // Panggil menggunakan variabel
      // foobar

// Melewati fungsi sebagai argumen
      function sayHello() {
        return "Hello, ";
      }
      function greeting(helloMessage, name) {
        console.log(helloMessage() + name);
      }
      // Teruskan `sayHello` sebagai argumen ke fungsi `greeting`
      greeting(sayHello, "JavaScript!");
      // Hello, JavaScript!

// Mengembalikan fungsi
      function sayHello() {
        return () => {
          console.log("Hello!");
        };
      }

//Higher-order function
      const greet = function(name){
        return function(m){
    
            console.log(`Hi!! ${name}, ${m}`);
        }
    }
    
    const greet_message = greet('ABC');
    greet_message("Welcome To ITERA")

//Execution Context

    console.log(HelloWorld())
    var hello = "Hello World"

    function HelloWorld (){
        return 'variabel hello berisi : $ {hello}'
    }
    
//Execution Stack
var name = "Gilang";

function first() {
  var a = "Hi!";
  second();
  console.log(`${a} ${name}`);
}

function second() {
  var b = "Hey!";
  third();
  console.log(`${b} ${name}`);
}

function third() {
  var c = "Hello!";
  console.log(`${c} ${name}`);
}

first();

//Callback
function myFirst() {
    myDisplayer("Hello");
  }
  
  function mySecond() {
    myDisplayer("Goodbye");
  }
  
  myFirst();
  mySecond();

//Promises dan Async/Await
  function resolveAfter2Seconds() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, 2000);
    });
  }
  
  async function asyncCall() {
    console.log('calling');
    const result = await resolveAfter2Seconds();
    console.log(result);
    // expected output: "resolved"
  }
  
  asyncCall();
  