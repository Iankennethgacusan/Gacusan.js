function letExample() {
    let message = "Hello from let!";
    if (true) {
      let message = "New block-scoped let message";
      console.log(message);
    }
    console.log(message);
  }
  
  function constExample() {
    const greeting = "Hello from const!";
    console.log(greeting);
  
  }
  

  function varExample() {
    var name = "Hello from var!";
    if (true) {
      var name = "Reassigned var in block scope";
      console.log(name);
    }
    console.log(name);
  }
  
  letExample();
  constExample();
  varExample();
  