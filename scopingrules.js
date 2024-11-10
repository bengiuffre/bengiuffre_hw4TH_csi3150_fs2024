var x = 1;
let y = 2;
const z = 3;

// Within the following If statement you can see the changes that are made. Since var is globally going to change that will be reflected later when it outputs within the statement and outside of If statement. Outside the if statement the output should continue to have the y and z yield the original inputs. Within the if statement the y and z were changed "locally" meaning when they are outputed within that block they will be changed. var x is a global change so the change within the the if statement will be reflected even outside of the if statement.


if (true) {
  var x = 10; 
  let y = 20; 
  const z = 30; 

  console.log(x, y, z); // Outputs: 10 20 30
}

console.log(x, y, z); // Outputs: 10 2 3
