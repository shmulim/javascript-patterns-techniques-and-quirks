// binding to the global object
function foo() {
  console.log(this);
}

foo(); // Window


// implicitly binding to an object
function foo(){
  console.log(this.a);
}

var bar = {
  a: 2,
  foo: foo
};

bar.foo(); // 2


// binding to an object with the Function.prototype.bind() method
var bar = {
  a: 2
};

function foo() {
  console.log(this.a);
}

bound = foo.bind(bar);
bound(); // 2

