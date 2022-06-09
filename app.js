console.log("Hello World!\n==========\n");
console.log("JavaScript Functions");
// Exercise 1 Section
console.log("EXERCISE 1: Print Odds Continued \n==========\n");

const printOdds = function (count = 0) {
  if (count < 0) {
    count = count * -1;
  }
  for (var i = 1; i <= count; i++) {
    if (i % 2 != 0) {
      console.log("odd number: ", i);
    }
  }
};
printOdds(100);

// Exercise 2 Section
console.log("EXERCISE 2: Legal to Drive? \n==========\n");

function checkAge(userName = "No Name", age = 0) {
  let aboveSixteen = `Congrats ${userName}, you can drive!`;
  let belowSixteen = `Sorry ${userName}, but you need to wait until you're 16.`;
  if (age >= 16) {
    console.log(aboveSixteen);
  } else {
    console.log(belowSixteen);
  }
}

checkAge(17);
checkAge("Sam");
checkAge("Sam", 25);

// Exercise 3 Section
console.log("EXERCISE 3: Which Quadrant?? \n==========\n");

function findQuadrant(x = false, y = false) {
  var coordinateString = `(${x},${y})`;

  if (x === false || y === false) {
    console.log("Invalid Input");
    return;
  }

  if (x == 0 && y == 0) {
    console.log(coordinateString + " is at the Center");
    return;
  }

  if (x == 0) {
    console.log(coordinateString + " is on the X axis");
    return;
  }

  if (y == 0) {
    console.log(coordinateString + " is on the Y axis");
    return;
  }
  if (x > 0 && y > 0) {
    console.log(coordinateString + " is in Quadrant 1");
    return;
  }
  if (x < 0 && y > 0) {
    console.log(coordinateString + " is in Quadrant 2");
    return;
  }
  if (x < 0 && y < 0) {
    console.log(coordinateString + " is in Quadrant 3");
    return;
  }
  if (x > 0 && y < 0) {
    console.log(coordinateString + " is in Quadrant 4");
    return;
  }
}

findQuadrant(2, -4);

// Exercise 4 Section
console.log("EXERCISE 4: What type of triangle??? \n==========\n");

function triangleType(x = 0, y = 0, z = 0) {
  triangleSidesMsg = `Sides ${x},${y},${z}`;

  if (x + y <= z || x === 0 || y === 0 || z === 0) {
    return triangleSidesMsg + " are not a valid Triangle";
  }
  if (x == y && x == z && y == z) {
    return triangleSidesMsg + " make an equilateral triangle";
  }
  if (x == y || x == z || y == z) {
    return triangleSidesMsg + " make an isosceles triangle";
  }
  if (x != y && x != z && y != z) {
    return triangleSidesMsg + " make a scalene triangle";
  }
}

console.log(triangleType(1, 2, 2));
console.log(triangleType(1, 1, 2));

// Exercise 5 Section
console.log("Exercise 5: Data Plan Status\n==========\n");

function cellUsage(planLimit = 0, day = 0, usage = 0) {
  console.log("Cell Usage Report");

  if (planLimit <= 0 || day <= 0 || usage <= 0) {
    return console.log("Invalid Input");
  }

  let planDailyUsage = (planLimit / 30).toFixed(2);
  let avgDailyUsage = (usage / day).toFixed(2);
  let projectedPlanUsage = avgDailyUsage * (30 - day);

  console.log(`${day} days used, ${30 - day} days remaining`);
  console.log(`Total Usage: ${usage}GB`);
  console.log(
    `Average Daily Use to keep under Plan limit: ${planDailyUsage} GB/Day`
  );
  console.log(`Your Average Daily Use: ${avgDailyUsage} GB/Day`);
  if (avgDailyUsage > planDailyUsage) {
    let exceededDataUsage = (avgDailyUsage * (30 - day)).toFixed(2);
    console.log(
      `You are using Excessive Data, if you continue at your rate, you'll exceed your data plan by ${exceededDataUsage} GB`
    );
  } else {
    console.log(`You are using less than your Plan's Average Daily limit.`);
  }
}

cellUsage(40, 10, 20);
