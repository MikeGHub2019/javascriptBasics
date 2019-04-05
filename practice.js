// Simple loop using FOR
/*
for (i=44;i<67;i++) {
    console.log(i);
}
*/
// ////////////////////////////////////////////////////////////////////////////
// CONSOLE.LOG()
/*
console.log("hello")
console.log(42)
console.log(6.28)
console.log(true)
console.log("hello".length)

console.log("hello".toUpperCase())
console.log("HELLO".toLowerCase())
console.log("  hello ".trim())
*/
// console.log(Math.floor(Math.random()*10)) */
/*
console.log("   |   |   ")
console.log("   |   |   ")
console.log("   |   |   ")
console.log("-----------")
console.log("   |   |   ")
console.log("   |   |   ")
console.log("   |   |   ")
console.log("-----------")
console.log("   |   |   ")
console.log("   |   |   ")
console.log("   |   |   ")

console.log("CodeNation".substring(2,6))
console.log("CodeNation".substr(2,6))
*/
/* console.log("All Around the World".toUpperCase).substr(7,1)
console.log("All Around the World".substr(7,1).toUpperCase())
console.log("All around the World".toUpperCase().charAt(7)) */
/*
let name = "Mike";
let i = 10;
let age = 29;
console.log(age)
age +=3
console.log(age) */
/*
let Name = "Mike";
let Age = 21;
let favColour = "blue"
console.log(`My name is ${Name}, my age is ${Age} and my favourite colour is ${favColour}.`)
*/

//console.log("test")

// ////////////////////////////////////////////////////////////////////////////
// CONDITIONAL STATEMENTS
/*
let age = 17
let country = "UK"
if (age > 17 && country == "UK") {
    console.log("OK")
}
else if (age == 17 && country=="UK") {
    console.log("Too young") 
}
else {
    console.log("Way too young!")
}
*/

// ////////////////////////////////////////////////////////////////////////////
// EXERCISE 1

/*
let myVar = "Password"
if (myVar.length<8) {
    console.log("Password too short")
}
else {
    console.log(myVar)
}
*/
// ////////////////////////////////////////////////////////////////////////////
// EXERCISE 2
 /*
let myNum = 5
let myDiv = 3 // or 5
if (myNum % myDiv == 0) {
    console.log("Divisible")
}
else {
    console.log("Not divisible")
} 
*/

// ////////////////////////////////////////////////////////////////////////////
// EXERCISE 3
/*
let myNum = 3
let Mod3 = myNum % 3
let Mod5 = myNum % 5
if (Mod3 == 0 && Mod5 != 0 ) {
    console.log("Fizz")
}
else if (Mod3 != 0 && Mod5 == 0 ) {
    console.log("Buzz")
}
else if (Mod3 == 0 && Mod5 == 0) {
    console.log("Fizz Buzz")
}
else {
    console.log(myNum)
}
*/

// ////////////////////////////////////////////////////////////////////////////
//Ex.4 palindrome
/*
let myNum = 101
let strNum = "carac"
let revStr = ""
let myLen = strNum.length
for (var i = myLen - 1; i>=0; i-- ) {
    revStr += strNum[i]
    //console.log(strNum[i] + "=" + i)
}
if (strNum == revStr) {
    console.log("Palindrome")
}
else { console.log("Not")}
*/
// ////////////////////////////////////////////////////////////////////////////
// Ex.5 Home-Commute-Work
/*
let timeOfDay = 5 // 7, 8 or 9
if (timeOfDay == 7) console.log("At Home")
else if (timeOfDay == 8) console.log("Commuting")
else if (timeOfDay == 9) console.log("At work")
else console.log("Whereabouts unknown!")
*/
// ////////////////////////////////////////////////////////////////////////////
//Ex.7 (Prob with Ex.6)
// Find the index of the last vowel in a string
/*
let myStr = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi"
let i = 0
i = myStr.lastIndexOf(['a','e','i','o','u'])
console.log(i)
*/

// ////////////////////////////////////////////////////////////////////////////
// Noughts & Crosses
/*
let space1 = 'o'
let space2 = 'o'    
let space3 = 'o'
let space4 = ' '
let space5 = ' '
let space6 = ' '
let space7 = ' '
let space8 = ' '
let space9 = ' '

console.log("   |   |   ")
console.log(` ${space1} | ${space2} | ${space3} `)
console.log("   |   |   ")
console.log("-----------")
console.log("   |   |   ")
console.log(` ${space4} | ${space5} | ${space6} `)
console.log("   |   |   ")
console.log("-----------")
console.log("   |   |   ")
console.log(` ${space7} | ${space8} | ${space9} `)
console.log("   |   |   ")

if (space1 == 'x' && space2 == 'x' && space3 =='x') {console.log("x wins")}
else if (space1 == 'o' && space2 == 'o' && space3 =='o') {console.log("o wins")}
else console.log("No-one wins")
*/

// ////////////////////////////////////////////////////////////////////////////
// Process drinks order
/*
const displayOrder = (drinkSize, drinkType) =>{
    console.log(`Order: ${drinkSize} ${drinkType}`)
}
displayOrder("Very large", "Coffee");
*/

// ////////////////////////////////////////////////////////////////////////////
// FUNCTIONS
/* function factorial (n) {
    if ((n === 0) || (n === 1)) { return 1;
    } else {
    return (n * factorial(n-1));
    } }
    console.log(factorial(33));
*/
/*
const factorial = (n) =>{
    if ((n === 0) || (n === 1)) { return 1;
    } else {
    return (n * factorial(n-1));
    }
}
console.log(factorial(33))

*/
// ////////////////////////////////////////////////////////////////////////////
// Noughts & Crosses
/*
const pop0andX = (s1,s2,s3,s4,s5,s6,s7,s8,s9) =>{
    let space1 = s1
    let space2 = s2    
    let space3 = s3
    let space4 = s4
    let space5 = s5
    let space6 = s6
    let space7 = s7
    let space8 = s8
    let space9 = s9
    console.log("   |   |   ")
    console.log(` ${space1} | ${space2} | ${space3} `)
    console.log("   |   |   ")
    console.log("-----------")
    console.log("   |   |   ")
    console.log(` ${space4} | ${space5} | ${space6} `)
    console.log("   |   |   ")
    console.log("-----------")
    console.log("   |   |   ")
    console.log(` ${space7} | ${space8} | ${space9} `)
    console.log("   |   |   ")

}

pop0andX('x','x','x','0','0','0',' ',' ',' ')
*/

// ////////////////////////////////////////////////////////////////////////////
// CASHPOINT EXERCISE 

/* Cashpoint functions
const checkPIN = (pinNo) =>{
    let rightPIN = 1234
    let validPIN = false
    if (pinNo == rightPIN) {
        validPIN = true
    } 
    return validPIN
}
const checkBalance =(amnt) =>{
    let currentBalance = 100
    let availability = false
    if (amnt <= currentBalance) {
        availability = true
    }
    return availability
}

const cashWithdrawal = (pinNo, amnt) =>{
    let PINOK = checkPIN(pinNo)
    if (PINOK == false) {
        console.log("Invalid PIN")
    }
    else {
        let amntOK = checkBalance(amnt)
        if (amntOK == false) {
            console.log("Insufficient funds")
        }
        else {
            console.log("Here is your cash.")
        }
    }
}
cashWithdrawal(1234,200)
*/

// ////////////////////////////////////////////////////////////////////////////
// MATHS FUNCTIONS
//
// multiply number function
/*
const multiplication = (num1, num2) =>{
    let r = num1*num2
    return r 
}
console.log(multiplication(123,456))
*/
// ////////////////////////////////////////////////////////////////////////////
// ARRAYS
//
// 3 song array
/*
let myTopSongs = ['IP - Oceano', 'Prefab Sprout - Scarlet Nights', 'Steely Dan - Doctor Wu']
myTopSongs.push("Le Orme - Amici Di Ieri")
console.log(myTopSongs)
myTopSongs.pop()
console.log(myTopSongs)
*/
// 3 websites activity, add 2 more sites, then remove the last
/*
let myWebSites = ['https://wearecodenation', 'bbbc.co.uk', 'amazon.co.uk']
console.log(myWebSites)
myWebSites.push("www.visitmonmouthshire")
myWebSites.push("windowoneurasia2.blogspot.com")
console.log(myWebSites)
myWebSites.pop()
console.log(myWebSites)
*/

// ////////////////////////////////////////////////////////////////////////////
// FUNCTIONS
//
// Functions required:
// CONVERT num to str 
const convNtoS = (num) =>{
    let s = ''
    s = num 
    return s 
}
// console.log(convNtoS(2019))

// Increment
const increment = (num) =>{
    num++
    return num
}
// console.log(increment(1))

//decrement
const decrement = (num) =>{
    num--
    return num
}
// console.log(decrement(57))


//add
const goAdd = (num1,num2) =>{
    let r = num1+num2
    return r
}
// console.log(goAdd(1962,57))

//subtract
const goSubtract = (num1,num2) =>{
    let r = num1-num2
    return r
}
// console.log(goSubtract(2019,57))

// multiply
const goMultiply = (num1, num2) =>{
    let r = num1*num2
    return r 
}
// console.log(goMultiply(2,3))

//divide
const goDivide = (num1, num2) =>{
    let r = num1/num2
    return r 
}
// console.log(goDivide(100,25))

//square
const goSquare = (num) =>{
    let r = num*num
    return r
}
// console.log(goSquare(5))

//calculate FUNCTION
/*
const goCalc = (op,num1,num2) =>{
   // let snum1 = convNtoS(num1)
   // let snum2 = convNtoS(num2)
    if (op == '+') r = num1 + num2
    else if (op=='-') r = num1-num2
    else if (op=='*') r = num1*num2
    else if (op=='/') r = num1/num2
    else r = 'Problem with params'
    return r
}
console.log(goCalc('/', 22, 3.2))
*/

// >
const isGtr = (num1,num2) =>{
    r = false
    if (num1 > num2) r = true
    return r  
}
//console.log(isGtr(9,9))

// <
const isLes = (num1,num2) =>{
    r = false
    if (num1 < num2) r = true
    return r  
}
//console.log(isLes(8,7))

// =
const isEql = (num1,num2) =>{
    r = false
    if (num1==num2) r = true
    return r
}
// console.log(isEql(1,2))
// MIN - return the smallest value of TWO numbers
const getMin = (num1,num2) =>{
    r = num1
    if (num2<num1) r = num2
    return r
}
// console.log(getMin(2,3))

// MAX
const getMax = (num1,num2) =>{
    r = num1
    if (num2>num1) r = num2
    return r
}

// console.log(getMax(8,3))

// EVEN -- FURTHER DOWN THIS LISTING

// ODD  -- FURTHER DOWN THIS LISTING

// Grades
/*
# letterGrade(score, total)

Returns a letter grade. "A": 90-100% "B": 80-89% "C": 70-79% "D": 60-69% "F": 0-59%

Parameters

score: number

total: number, maximum possible score

Returns: string, the score represented as a letter grade
*/

// 
/*
# combine(word1, word2)

Joins two strings with a space.

Parameters

word1: string

word2: string

Returns: string, joined the words joined with a space
*/
// ////////////////////////////////////////////////////////////////////////////
// BACKWARD COUNT
/*
for (i=9;i>-1;i--) {
    console.log(i);
}
*/
// ////////////////////////////////////////////////////////////////////////////
// Populate an array and display contents
/*
let myTopSongs = ['IP - Oceano', 'Prefab Sprout - Scarlet Nights', 'Steely Dan - Doctor Wu']
myTopSongs.push("Le Orme - Amici Di Ieri")
console.log(myTopSongs)
myTopSongs.pop()
console.log(myTopSongs)
*/

//loop through an array
/*
let myFilms = ['Goodfellas', 'Jason And The Argonauts','Taras Bulba','Supernature','Carry On At Your Convenience']
myFilms.push('Tears Of the Sun')
myFilms.push('Cinema Paradiso')
for (i=0;i<myFilms.length;i++){
    console.log(myFilms[i])
}  */

//loop through an array
/*
let myFilms = ['Goodfellas', 'Jason And The Argonauts','Ghostbusters','Some Spy']
for (i=0;i<myFilms.length;i++){
    console.log(myFilms[i])
} 

const filmCheck = (array) =>{
    r = false
    // console.log(array[2])
    if (myFilms[2] == "Ghostbusters")
    {
        r  = true
    }
    return r  
}

//console.log(filmCheck(myFilms))
if (filmCheck(myFilms)) {
    console.log("Yes. Ghostbusters found!") }
else {
    console.log("No. Film not found.") }

*/

// ////////////////////////////////////////////////////////////////////////////
// PROBLEM 1
//2019-Apr-03 15:29pm prob 1
//35Totals
//Get all the numbers below 1000 that are divisible by 3 or 5. Add them up 
/*
{
    tot35 = 0;
    for (i=0; i<1000;i++) {
        //console.log(i, (i%3)) /*
        if ((i % 3) == 0 || (i % 5) == 0) {
            tot35 = tot35+i
        }
    }
console.log (tot35)
} */

// ////////////////////////////////////////////////////////////////////////////
// PROBLEM 2
//
// “jrfndklhgfndjkjlkgperfijfhidknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhiejkdsoiufghedjwsh”
// The word “hi” appears multiple times. Find the first and last occurrence of the word hi and log them to the console.
/*
{
    var bigStr = 'jrfndklhgfndjkjlkgperfijfhidknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhiejkdsoiufghedjwsh'
    var i = bigStr.search('hi')
    var j = bigStr.lastIndexOf('hi')
    console.log("First: ",i+1, "Last: ", j+1)
} */

// ////////////////////////////////////////////////////////////////////////////
// Problem 3:
// Take the string from problem 2 and print each letter out individually.
// Can you assign a string into an array, with each letter becoming an array element? YES
/*
{
    var bigStr = 'jrfndklhgfndjkjlkgperfijfhidknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhiejkdsoiufghedjwsh'
    var myArr = bigStr.split("")
    console.log(myArr)
}
*/
// ////////////////////////////////////////////////////////////////////////////
// Problem 4:
//
// Take the string from problem 2, loop through the string and find out how many times the word hi appears and the indexes where it appears.
//
/*
    var bigStr = 'jrfndklhgfndjkjlkgperfijfhidknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhiejkdsoiufghedjwsh'
    let startpt = 0;
    let hict = 0;
    let f = 0;
    var hiloc = [];
    while (f != -1) {
        f = bigStr.indexOf('hi',startpt)
        if (f != -1) {
            hict++
            hiloc[hict-1] = f
        } 
    }
    console.log('Hi occurs ', hict, 'time(s)')
    console.log('Locations in the string: ')
    console.log(hiloc)
    //var i = bigStr.indexOf('hi')
*/

// ////////////////////////////////////////////////////////////////////////////
// Create person object
//  
/*
    let person = {
        name:"Mike",
        age:56}
    }

console.log(person.name)
console.log(person['name'])

person['favBiscuits'] = 
['custard creams', 'biscotti'];
console.log(person.favBiscuits)
console.log (person)

person['favSongs'] = ['Song A', 'Song B', 'Song C'];

console.log(person)

let person =
{
name = 'Sam',
age = 29,
favouriteDrinks:['Wine', 'Gin', 'Water'],
mood: "bad",
greeting () {
    if (this.mood == "good") {
        return "Hi, nice to see you")
        else 
    }

}

}
*/
/* This works:
let person = {
name:"Sam",
age: 29,
favouriteDrinks:["Wine","Gin","Water"],
mood:"good",
greeting(){
    if(this.mood=="good") {
        return "Hi!"}
        else {
            return "Go away"
        }
    }
}
console.log(person.greeting())
*/
    
// ////////////////////////////////////////////////////////////////////////////
// find hi using indexOf

// get pos, ct++
// slice off processed part of string -- up to first letter of searched word
// 
/*
    var bigStr = "jrfndklhgfndjkjlkgperfijfhidknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhiejkdsoiufghedjwsh";
    var wrkStr = bigStr;
    var wct = 0;
    var wpos = [];
    var fpos = 0;
    var spos = 0;
    var sLen = 0; 
    var escloop = 0

    console.log('string now being searched:', wrkStr);
    // sLen = wrkStr.length ; console.log('Length:', sLen)

    while (fpos !=-1) { 
        
        escloop++
        // console.log('fpos:', fpos, 'escloop:', escloop)
        
        fpos = wrkStr.search('hi');
        //console.log('hi found at pos:' , (spos+fpos));
        if (fpos !=-1) 
        {
            wct++
            spos = spos+fpos
            if (wct>1) spos++ 
            wpos[wct-1] = spos
            console.log(wct, spos)
            // slice
            wrkStr = wrkStr.slice(fpos+1); //console.log('String now:', wrkStr)
            sLen = wrkStr.length;        //console.log('Length now:', sLen)

        } 
        else 
        {
            // console.log('No (more) his found.')
        }
    } 
    console.log("Final scores:")
    console.log("hi found", wct, "times")
    console.log("Positions:", wpos)
*/
// ////////////////////////////////////////////////////////////////////////////
// PROBLEM 5
// 
// Create a function that checks if a number is a palindrome.
// Use this function to find the biggest palindrome less than 90283743503594.

/*
const isPal = (num) => {
    revStr = '';
    strNum = num.toString();
    myLen = strNum.length;
    for (var i = myLen - 1; i>=0; i-- ) {
        revStr += strNum[i]
        //console.log(strNum[i] + "=" + i)
    }
    if (strNum == revStr) {
        return true //console.log("Palindrome")
    }
    else { 
        return false //console.log("Not")
    }
} //isPal 

var num = 90283743503594;
do {
    num--;
    isFound = isPal(num) }
while (isFound == false) 
console.log(num)
*/
// THIS WORKS - 90283733738209

// ////////////////////////////////////////////////////////////////////////////
// Problem 6
// This is a paragraph from Harry Potter. 
// Count how many words are in this paragraph (using code!).
/*
var str = "Non-magic people (more commonly known as Muggles) were particularly afraid of \
magic in medieval times, but not very good at recognizing it. On the rare \
occasion that they did catch a real witch or wizard, burning had no effect \
whatsoever. The witch or wizard would perform a basic Flame Freezing Charm and \
then pretend to shriek with pain while enjoying a gentle, tickling sensation. \
Indeed, Wendelin the Weird enjoyed being burned so much that she allowed herself \
to be caught no less than forty seven times in various disguises."
 
var wrds = str.split(" "); //wrds is an array, each element holding a word!
console.log(wrds[0], wrds[88])
console.log('No. of words:', wrds.length)

// this works! NB the backslash to deal with the length of the text. 
*/

// ////////////////////////////////////////////////////////////////////////////
// Problem 7 - Fibonacci numbers
// Get the index of the first number to contain 10 digits?
/*
var aFN = [];
aFN[0] = aFN[1] = i = 1;
var strNum ='';
// loop until num digits >9
while (strNum.length < 10 ) {
    i++; //elements 0 and = 1, so start at index 2
    aFN[i]=aFN[i-1]+aFN[i-2];
    strNum = aFN[i].toString();
    console.log(strNum.length); 
}
console.log(aFN[i])
*/

// ////////////////////////////////////////////////////////////////////////////
// Problem 8 
// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
//
// test
/*
i=116396280
console.log('>',i,'<',i%19,i%18,i%17,i%16,i%15,i%14,i%13,i%12,i%11,i%10,i%9,i%8,i%7,i%6,i%5,i%4,i%3,i%2);
*/ 
/* This works..
allNosDiv = false
m=20
while ((allNosDiv == false) && (m<20000000000)) {
    m+=20
    
    for (i=19;i>0;i--){
        // console.log(i)
        allNosDiv = false
        if (m%i>0) {
            allNosDiv = false
            break } // move on to next multiple
        else {
            // console.log(i,'goes into', m)
            // divides into bigno
            allNosDiv = true
        }
    }
    if (allNosDiv == true) console.log('m:', m) 
}
console.log(m) // 232792560
*/
// ////////////////////////////////////////////////////////////////////////////
// PROBLEM 9
/*
If I add up the digits of the number 19082 I would get 1+9+0+8+2=20. Add the digits of the number:
3710728753390210279879799822083759024651013574025046376937677490009712648124896\
9700780504170182605387432498619952474105947423330951305812372661730962991942213\
3635741615725224305633018110724061549082502306758820753934617117198031042104751\
3778063246676892616706966236338201363784183836841773436172675728112879812849979\
4080654819315926216912758898327384427422891743252032192358942287679648767027218\
9318474514457360013064390911672168568445887116031532767038648610584302543993961\
982891759366568675793495162176457141856560629502157223196586755079324193331
*/
/*
// Get num -- get Infinity message. Better to treat as a srtring.
// Assign to string
let bigStr = "3710728753390210279879799822083759024651013574025046376937677490009712648124896\
9700780504170182605387432498619952474105947423330951305812372661730962991942213\
3635741615725224305633018110724061549082502306758820753934617117198031042104751\
3778063246676892616706966236338201363784183836841773436172675728112879812849979\
4080654819315926216912758898327384427422891743252032192358942287679648767027218\
9318474514457360013064390911672168568445887116031532767038648610584302543993961\
982891759366568675793495162176457141856560629502157223196586755079324193331"
// console.log(bigStr)

//Declare vars
var aBigStr = [] 
var aBigNum = []
var total = 0

// Assign to string array
aBigStr = bigStr.split("")

// Assign to num array & add up numbers
for (i=0; i<bigStr.length;i++) {
    // convert to num, assign to new array and totalise
    aBigNum[i] = Number(bigStr[i]); // console.log(aBigNum[i])
    total += aBigNum[i]
}
console.log('Total:', total) // = 2447
*/
// ////////////////////////////////////////////////////////////////////////////
// Each new term in the Fibonacci sequence is generated by adding the previous two terms. 
// By starting with 1 and 2, the first 10 terms will be: 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
// By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.

// ////////////////////////////////////////////////////////////////////////////
// FUNCTION: odd & even -------- 
const isEven = (num) => {
    if (num %2 == 0) return true
    else return false
}
  
const isOdd = (num) => {
    if (num%2 != 0) return true
    else return false
}
/*
{ // Body of prog 
// Declare vars
var i = 1
var j = 0
var aFib = []
var upLimit = 4000000
var total = 0

// Get Fib No.s < upper limit
aFib[0] = 1 // Start 1, not zero
aFib[1] = 2
i = 1 
while (aFib[i] < upLimit) {
    i++                            
    aFib[i] = aFib[i-1] + aFib[i-2]     
}
// console.log(aFib) -- will list all the numbers 
// NB last number will be past the upper limit

// Even no.s: Loop -- check even -- do not exceed limit (ie. <i)
for (j=0; j<i; j++) {
    
    if (isEven(aFib[j])) {
        // console.log("Fib no.:", aFib[j], "is even.")
        total += aFib[j]
    }
}
console.log("Total for even Fibonacci numbers:", total)
// 4,613,732
*/
// //////////////////////////////////////////////////////////////////////////
// Problem 11 
/*
Take the paragraph from problem 6.
Find the longest word.
Find the index of the first time the word “witch” appears.
Remove all the punctuation from the string.
*/
/*
var bigStr = ""
var noPunc = ""
var wrds = []
var wcount = 0
var i = 0
puncList = /[,.;()]/g
lngWord = ""
numLet = 0

// Get paragraph
bigStr = "Non-magic people (more commonly known as Muggles) were particularly afraid of \
magic in medieval times, but not very good at recognizing it. On the rare \
occasion that they did catch a real witch or wizard, burning had no effect \
whatsoever. The witch or wizard would perform a basic Flame Freezing Charm and \
then pretend to shriek with pain while enjoying a gentle, tickling sensation. \
Indeed, Wendelin the Weird enjoyed being burned so much that she allowed herself \
to be caught no less than forty seven times in various disguises."

// Remove punctuation
noPunc = bigStr.replace(puncList,"")
console.log("Without punctuation:", noPunc)

// Get longest word
var wrds = noPunc.split(" "); //wrds is an array, each element holding a word!
var wcount = wrds.length
for (i=0; i<wcount; i++) {
    
    if (numLet < wrds[i].length) {
        numLet = wrds[i].length
        lngWord = wrds[i]
        // console.log(wrds[i], "- ", wrds[i].length)
    }
}
console.log('Longest word is "', lngWord, '" with ', numLet, ' letters.')

// Find first location of "witch"
var fLoc = -1
fLoc = bigStr.search("witch")
console.log('First location of "witch": position', fLoc)
*/
// ////////////////////////////////////////////////////////////////////////////

// ////////////////////////////////////////////////////////////////////////////
// Person Object Greeting
// Activity :: let’s edit our person object to include a function called sayHi and 
// when it’s called, it should return `hello, my name is ${this.name}`
//
/*
let person = {  name: "Sam",
                age: 29,
                favouriteDrinks: ["Wine", "Gin", "Water"],
                mood: "good",
                sayHi () {
                    if (this.mood == "good") { return `Hello, my name is ${this.name}`}        
                    else { return "Hi, now go away!"}
                }
            };
console.log(person.sayHi())
*/
// ////////////////////////////////////////////////////////////////////////////

// ////////////////////////////////////////////////////////////////////////////
// Try rabbit
/*
let rabbit = {
                name:"Sherlock",
                ears:"uppy",
                colour:"black and white",
                bunHop(){
                        return `${this.name} is hopping.`
                        },
                bunChew(){
                        return `${this.name} is chewing.`
                        }    
            }
    
console.log(rabbit.bunHop())
console.log(rabbit.bunChew())

// end of rabbit
*/