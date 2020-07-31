var foo = new Array()
for(var i = 0; i <= 1000; i++){
    foo.push(i)
  }
const even  = foo.filter(x => x%2 == 0)
const odd   = foo.filter(x=> x%2 != 0)
const mult5 = foo.map(x=> x*5)
const prime = foo.filter((num) => {
    for (let start = 2; num > start; start++) {
        if (num % start == 0) {
          return false;
        }
      }
      return num > 1;
  })
const prime100 = foo.filter((num) => {
    for (let start = 2; num > start; start++) {
        if (num % start == 0) {
          return false;
        }
      }
      return num > 1;
  }).filter(x=> x<100)

  
console.log(even)
console.log(odd)
console.log(mult5)
console.log(prime)
console.log(prime100)