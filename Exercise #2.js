// UW-Fullstack assignment #2
//1. Create an object representation of yourself.  Should include: firstName lastName 
//'favorite food' bestFriend (object with the same 3 properties as above)

const person = {
    firstName: 'Kyle',
    lastName: 'Lemons',
    favoriteFood: 'Tacos',
    bestFriend: {
      firstName: 'Brandon',
      lastName: 'Rodriguez',
      favoriteFood: 'Burritos'
    }
  };
  


//2. console.log best friend's firstName and your favorite food
console.log("Best Friend's First Name:", person.bestFriend.firstName);
console.log("Kyle's Favorite Food:", person.favoriteFood);
//3. Create an array  to represent this tic-tac-toe board
const ticTacToe = [
    ['-','O','-'],
    ['-','X','O'],
    ['X','-','X']
];
ticTacToe[0][2] = 'O'
console.log(ticTacToe[0])
console.log(ticTacToe[1])
console.log(ticTacToe[2])

//6. You are given an email as string myEmail, make sure it is in correct email format. Should be 1 or more characters, then @ sign, then 1 or more characters, then dot, then one or more characters - no whitespace.  i.e. "foo@bar.baz" is a good email, "brett@ mall" is not.
const myEmail = "kalemons@uw.edu";

// Regular expression pattern for validating email format
const emailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

console.log("Valid email status =", emailRegEx.test(myEmail))
 

//7. You are given an assignmentDate as a string in the format "month/day/year", i.e. '1/21/2019'.  Convert this string to a Date
const assignmentDateStr = '1/21/2019';
const assignmentDateParts = assignmentDateStr.split('/');
const month = parseInt(assignmentDateParts[0], 10) - 1; 
const day = parseInt(assignmentDateParts[1], 10);
const year = parseInt(assignmentDateParts[2], 10);

const assignmentDate = new Date(year, month, day);
//8. Create a new Date instance to represent the dueDate.  This will be exactly 7 days after the assignment date.
const dueDate = new Date(assignmentDate);
dueDate.setDate(assignmentDate.getDate() + 7);
//9. Use dueDate values to create an HTML time tag in format:'<time datetime="2018-01-14">January 14, 2018</time>'
const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

const formattedDueDate = `${dueDate.getFullYear()}-${(dueDate.getMonth() + 1).toString().padStart(2, '0')}-${dueDate.getDate().toString().padStart(2, '0')}`;

// `dueDate as 'Month Day, Year
const formattedDueDateText = `${months[dueDate.getMonth()]} ${dueDate.getDate()}, ${dueDate.getFullYear()}`;

//Create an HTML time tag with the formatted due date
const timeTag = `<time datetime="${formattedDueDate}">${formattedDueDateText}</time>`;

console.log(formattedDueDate)
console.log(formattedDueDateText)
console.log(timeTag)