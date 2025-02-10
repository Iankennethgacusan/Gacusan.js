function Mylet() {
    let message = "Hello from Mylet!";
    if (true) {
      let message = "New block-scoped let message";
      console.log(message);
    }
    console.log(message);
  }
  
  function Myconst() {
    const greeting = "Hello from Myconst!";
    console.log(greeting);
  
  }
  

  function Myvar() {
    var name = "Hello from Myvar!";
    if (true) {
      var name = "Reassigned var in block scope";
      console.log(name);
    }
    console.log(name);
  }
  
  Mylet();
  Myconst();
  Myvar();
  