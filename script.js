// Task 1: Log a greeting message, "Script running" to the console.
console.log("Script running")

// Task 2: Prompt the user to enter their username and save it in a variable called 'userName'. Then, console log 
let userName = prompt("enter your username") 
console.log("Hello " + userName)



// Task 3: Declare a variable named 'age' and assign it your age. Then, log a message to the console saying "I'm [age] years old."
let age = 16
console.log("I'm " + age + " years old.")



// Task 4: Create an object named 'class' with properties such as 'className', 'teacher', and 'grade'. Assign appropriate values to these properties.
let Class1 = {
  className: "Computer science",
  teacher: "Mr Pham & Ms Gomes",
  grade: 93,
}
  


// Task 5: Console log "I'm taking [className] with [teacher]"
console.log("I'm taking " + Class1.className + " with " + Class1.teacher)



// Task 6: Write an if/else statement that checks if the grade is equal to or over 63. If it is, print "I am passing", else print "Oh no, I'm not passing YET."

if (Class1.grade >= 63){
  console.log("I am passing LOL")
}else{
  console.log("OHHH NO, I'm not passing yet.")
}

