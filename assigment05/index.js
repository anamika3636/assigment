function add(n1, n2) {
    console.log(`Addition is : ${n1 + n2}`);
  }
  
  function sub(n1, n2) {
    console.log(`Subtraction is : ${n1 - n2}`);
  }
  
  function mul(n1, n2) {
    console.log(`Multiplication is : ${n1 * n2}`);
  }
  
  function div(n1, n2) {
    console.log(`Division is : ${n1 + n2}`);
  }
  
  const calculator = (function (n1, n2) {
    add(n1, n2);
    sub(n1, n2);
    mul(n1, n2);
    div(n1, n2);
  })(20, 5);