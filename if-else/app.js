// 1. একটা সংখ্যা ইনপুট নাও। যদি সংখ্যা ধনাত্মক হয় তাহলে "Positive" আর নাহলে "Negative" প্রিন্ট করো
const number = 23 ;
if ( number > 0){
    console.log("Positive");
}else{
    console.log("Negative");
}
// 2. একজন মানুষের বয়স দেওয়া থাকবে। যদি বয়স ১৮ বা তার বেশি হয় তাহলে "Adult" না হলে "Minor" প্রিন্ট করো।
const age = 18 ;
if(age >= 18){
    console.log("Adult");
}else{
    console.log("Minor");
}
// 3. একটা সংখ্যা ইনপুট নাও। যদি সেটা জোড় (even) হয় তাহলে "Even" আর বিজোড় হলে "Odd" প্রিন্ট করো।
const number1 = 46 ;
if(number1 % 2 === 0){
    console.log("Even");
}else{
    console.log("Odd");
}
/* 4. পরীক্ষার পাস/ফেল চেক করো:

যদি নম্বর ৩৩ এর কম হয় → "Fail"

অন্যথায় "Pass" */
const examMark = 98 ;
if(examMark < 33){
    console.log("Fail");
}else{
    console.log("Pass");
}
/* 5. গ্রেড সিস্টেম বানাও:
৮০ বা তার বেশি → "A+"
৭০ বা তার বেশি → "A"
৬০ বা তার বেশি → "A-"
৫০ বা তার বেশি → "B"
৪০ বা তার বেশি → "C"
নাহলে "F" */
const grade = 33 ;
if(grade >= 80){
    console.log("A+");
}else if(grade >= 70){
    console.log("A");
}else if(grade >= 60){
    console.log("A-");
}else if(grade >= 50){
    console.log("B");
}else if(grade >= 40){
    console.log("C");
}else if(grade >= 33){
    console.log("D");
}
else{
    console.log("F");
}
/* 6.একজন মানুষকে ভোট দেওয়ার যোগ্য কিনা দেখাও:
যদি বয়স ≥ ১৮ হয় এবং National ID card থাকে → "Eligible for vote"
নাহলে "Not eligible" */
const voterAge = 18 ;
const hasNid = true ;
if(voterAge >= 18 && hasNid){
    console.log("Eligible for vote");
}else{
    console.log("Not Eligible");
}
/* 7. ইউজারের নাম ইনপুট নাও। যদি নাম "Bayezid" হয় তাহলে "Welcome Developer!" প্রিন্ট করো, অন্যথায় "Hello Stranger!" প্রিন্ট করো। */
const name1 = "Bayezid";
if(name1 === "Bayezid"){
    console.log(`Welcome ${name1} Developer.`);
}else{
    console.log("Hello Stranger!");
}

/* 8. একটি সংখ্যা ইনপুট নাও।
 যদি ৩ দিয়ে বিভাজ্য হয় → "Fizz"
 যদি ৫ দিয়ে বিভাজ্য হয় → "Buzz"
 যদি ৩ এবং ৫ দুটো দিয়েই বিভাজ্য হয় → "FizzBuzz"
 অন্যথায় সংখ্যা প্রিন্ট করো। */
const number3 = 15 ;
if(number3 % 3 === 0 && number3 % 5 === 0){
    console.log("FizzBuzz");
}else if(number3 % 3 ===  0){
    console.log("Fizz");
}else if(number3 % 5 === 0){
    console.log("Buzz");
}else{
    console.log(number3);
}
// 9. একটি সংখ্যা ইনপুট নাও। সেটা prime number কিনা বের করো।
const number4 = 7 ;
if(number4 % 1 === 0 && number4 % number4 === 0){
    console.log("Prime");
}else{
    console.log("Not Prime");
}

// 10. একটি বছর ইনপুট নাও। সেটা leap year কিনা বের করো।
const year = 1900;
if((year % 4  === 0 && year % 100 !== 0 ) || ( year % 400 === 0 ) ){
    console.log("Leap Year");
}else{
    console.log("Not Leap Year");
}
// 11. ইনপুটে একটি character দেওয়া আছে। সেটা vowel (a, e, i, o, u) নাকি consonant সেটা প্রিন্ট করো।
const word = "A";
const vowels ="aeiouAEIOU";
if(vowels.includes(word)){
    console.log("Vowel");
} else{
    console.log("Consonant");
}
//12.  তিনটি কোণ ইনপুট নাও। যদি তিনটির যোগফল ১৮০ হয় তাহলে “Valid triangle” না হলে “Invalid triangle”।
const number5 = 60 ;
const number6 = 60 ;
const number7 = 60 ;
if(number5 + number6 + number7 === 180){
    console.log("Valid triangle");
}else{
    console.log("Invalid triangle");
}
// 13. একটি মানুষের বয়স ইনপুট নাও। বয়স অনুসারে ক্যাটাগরি দেখাও:
// 0–12 → Child
// 13–19 → Teenager
// 20–59 → Adult
// 60+ → Senior
const age1 = 18 ;
if(age1 >= 0 && age1 <= 12){
    console.log("Child");
}else if(age1 >= 13 && age1 <= 19){
    console.log("Teenager");
}else if(age1 >= 20 && age1 <= 59){
    console.log("Adult");
}else if(age1 >= 60){
    console.log("Senior");
}

//14. একজন শিক্ষার্থীর নাম্বার ইনপুট নাও। যদি সে Science গ্রুপে থাকে এবং 80+ পায় তাহলে "Scholarship Eligible", না হলে "Not Eligible"।
const science = true ;
const sicenceMark = 85 ;
if(science && sicenceMark >= 80 ){
    console.log("Scholarship Eligible");
}else{
    console.log("Not Eligible");
}
// ternary operator
science && sicenceMark >= 80 ? console.log("Scholarship Eligible") : console.log("Not Eligible");
// 15. দুটি সংখ্যা ইনপুট নাও। যদি প্রথম সংখ্যাটি দ্বিতীয়টির গুণিতক হয় তাহলে "Yes", না হলে "No"।
const number8 = 2 ;
const number9 = 100 ;
if(number8 % number9 === 0){
    console.log("True")
}else{
    console.log("False");
}

// 16. একটি character ইনপুট নাও। সেটা uppercase, lowercase, digit নাকি special character সেটা নির্ধারণ করো।
const word1 = "55";
if(word1 >= "A" && word1 <= "Z"){
    console.log("Uppercase");
}else if(word1 >= 'a' && word1 <= "z"){
    console.log("Lowercase")
}else if(word1 >= "0" && word1 <= "9"){
    console.log("Digit");
}else {
    console.log("Special Character");
}
// 17. কারও আয় ইনপুট নাও। আয় অনুযায়ী ট্যাক্স হিসাব করো:
// আয় ≤ 10000 → 0%
// 10001–20000 → 10%
// 20001–50000 → 20%
// 50000 → 30%
const income = 50001 ;
if(income <= 10000){
    console.log(income);
}else if(income >= 10001 && income <= 20000){
    const tax = income / 100 * 10 ;
    const fincome = income - tax ;
    console.log(fincome);
}else if( income >= 20001 && income < 50000 ){
 const tax = income / 100 * 20 ;
 const fincome = income - tax ;
 console.log(fincome);
}else if(income >= 50000){
    const tax = income / 100 * 30 ;
    const fincome = income - tax ;
    console.log(fincome);
}
// 18. একটি সময় (hour) ইনপুট নাও। সেটা সকাল/দুপুর/বিকেল/রাত এর কোনটা তা বের করো।
 const hour = 17 ;
 if( hour >= 5 && hour <= 11){
    console.log("Good Morning ");
 }else if(hour >= 12 && hour <= 16 ){
    console.log("Good Afternoon");
 }else if(hour >= 17 && hour <= 20){
    console.log("Good Evening");
 }else{
    console.log("Good Night")
 }

//  19. একটি দোকান ডিসকাউন্ট দেবে
// যদি পণ্যদ্রব্যের দাম ≥ 5000 হয় → ২০% ছাড়
// ২০০০–৪৯৯৯ → ১০% ছাড়
// <2000 → কোনো ছাড় নেই
// Final price বের করো।
const  price  = 5429;
if(price < 2000 ){
 console.log(price);
}else if (price >= 2000 && price <= 4999){
  const discount = price / 100 * 10 ;
   const fprice = price - discount ;
   console.log(fprice);
}
else if(price >=5000){
 const discount = price / 100 * 20 ;
    const fprice = price - discount ;
    console.log(fprice);
}
//20.  একজন ছাত্র ৩টি বিষয়ে নাম্বার পেয়েছে। যদি সবগুলোতে ≥ 33 পায় এবং গড় ≥ 40 হয় তাহলে "Pass", নাহলে "Fail"।
const mark1 = 80 ;
const mark2 = 83 ;
const mark3 = 90 ;
const average = (mark1 + mark2 + mark3) / 3 ;
if(mark1 >= 33 && mark2 >= 33 && mark3 >= 33 && average >= 40){
    console.log("Pass");
}else{
    console.log("Fail");
}
/*21. একটি গাড়ির স্পিড ইনপুট নাও।
≤ 60 → "Safe speed"
61–100 → "Over speed"
100 → "Dangerous speed" */
const speed = 100 ;
if(speed <=60){
    console.log("Safe Speed");
}else if(speed >= 61 && speed < 100){
    console.log("Over Speed");
}else{
    console.log("Dangerous Speed");
}
// 22. একটি ATM সিস্টেম বানাও:
// যদি balance ≥ withdraw amount হয় তাহলে "Transaction Successful"
// না হলে "Insufficient Balance"।
const balance = 10000;   
const withdraw = 4500; 
if(balance >= withdraw){
    console.log("Transaction Successful");
}else{
    console.log("Insufficient Balance");
}

// 23. একটা অ্যারে দেওয়া হলো। চেক করো 7 নাম্বারটা আছে কিনা। যদি থাকে তাহলে "Found" প্রিন্ট করো, না থাকলে "Not Found" প্রিন্ট করো।
const aNumber = [34,7,33,5,43,6,5,3,];
if(aNumber.includes(7)){
    console.log("Found");
}else{
    console.log("Not Found");
}

// 24.  চেক করো "Python" আছে কিনা 
const Planguage = ["JavaScript", "python", "C++", "Java"];
if(Planguage.includes("python")){
    console.log("Python Found");
}else{
    console.log(" Python Not Found");
}

// 25.  indexOf ব্যবহার করে প্রথমবার 2 কোথায় আছে সেটা বের করো।
const num1 = [2, 4, 5, 2, 7, 2, 8];
console.log(num1.indexOf(2));

// 26. একটা অ্যারে: [10, 20, 30, 40]
// indexOf(25) এর আউটপুট কী আসবে? সেটা কোড দিয়ে প্রমাণ করো।
const num2 = [10, 20, 30, 40];
console.log(num2.indexOf(25)); // আউটপুট -1 আসবে কারণ 25 এই অ্যারেতে নেই।

/* 27. একটা অ্যারে দেওয়া হলো: [1, 3, 5, 7, 9]
একসাথে চেক করো "5" আর "10" আছে কিনা। দুটোই থাকলে "Both Found" প্রিন্ট করো, একটা থাকলে "One Found", আর কিছুই না থাকলে "Not Found".*/
const num3 = [1, 3, 5, 7, 9];
if(num3.includes(5) && num3.includes(10)){
    console.log("Both Found");
}
else if(num3.includes(5) || num3.includes(10)){
        console.log("One Found");
}
else{
    console.log("Not Found");
}

/* 28.  একটা বাক্য: "I love JavaScript programming"
একটা অ্যারেতে "JavaScript" আছে কিনা। */
const laka = "I love JavaScript programming";
if(laka.includes('JavaScript')){
    console.log("JavaScript Found");
}else{
    console.log("JavaScript Not Found");
}

// 29. একটা অ্যারে: [100, 200, 300, 400]চেক করো ইনপুট ভ্যালুটা অ্যারেতে আছে কিনা। থাকলে index দেখাও, না থাকলে "Not Found" দেখাও।
const num6 = 200 ;
const num5 = [100, 200, 300, 400] ;
if(num5.includes(200)){
    console.log("index");
}else{
    console.log("Not Found");
}

