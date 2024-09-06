// 1) Write a program to print the sum of two numbers entered by user by defining your own function.
// let n1=parseInt(prompt("Enter first number:"))
// let n2=parseInt(prompt("Enter second number:"))
// function addTwoNum(a,b)
// {
//     console.log("Addition of two numbers: "+(a+b)) ;
// }
// addTwoNum(n1,n2)

// 2)Define a function that returns the product of two numbers entered by user.
// let p1=parseInt(prompt("Enter first number:"))
// let p2=parseInt(prompt("Enter second number:"))
// function productTwoNum(c,d)
// {
//     console.log("Product of two numbers: "+(c*d)) ;
// }
// productTwoNum(p1,p2)

// 3)Write a program to print the circumference and area of a circle of radius entered by user by defining your own function.
// let radius=parseInt(prompt("Enter a radius:"))

// function areaCir(r)
// {
//     console.log("Area of circle: "+(3.14*r*r)) ;
//     console.log("Circumference of circle: "+(2*3.14*r)) ;
// }
// areaCir(radius)
// 4)Define two functions to print the maximum and the minimum number respectively among three numbers entered by user.
// let x=parseInt(prompt("Enter first number: "))
// let y=parseInt(prompt("Enter second number: "))
// let z=parseInt(prompt("Enter third number: "))
// function minVal(x,y,z)
// {
// if(x<y)
// {
//     if(x<z)
//     {
//         console.log(x+" is the minimum number");
        
//     }
//     if(z<y)
//         {
//             console.log(z+" is the minimum number");
            
//         }
// }
// else if(y<z){
// console.log(y+" is the minimum number");

// }
// else
// {
//     console.log(z+" is the minimum number");
// }
// }
// function maxVal(x,y,z)
// {
//     if(x>y)
//     {
//         if(x>z)
//         {
//             console.log(x+" is the maximum number");
            
//         }
//         if(z>y)
//             {
//                 console.log(z+" is the maximum number");
                
//             }
//     }
//     else if(y>z){
//     console.log(y+" is the maximum number");
    
//     }
//     else
//     {
//         console.log(z+" is the maximum number");
//     }
//     }

// maxVal(x,y,z)
// minVal(x,y,z)

// 5) Define a program to find out whether a given number is even or odd.
// let num=parseInt(prompt("Enter a number "))
// function odd_even(num)
// {
//     if(num%2==0)
//     {
//         console.log(num + " is a Even number");
        
//     }
//     else
//     {
//         console.log(num + " is a Odd number");
        
//     }
// }
// odd_even(num)
// 6) A person is elligible to vote if his/her age is greater than or equal to 18. Define a function to find out if he/she is elligible to vote.
// let age=parseInt(prompt("Enter a age "))
// function vote(age)
// {
//     if(age>=18)
//     {
//         console.log(age + " is eligible for voting");
        
//     }
//     else
//     {
//         console.log(age + " is not eligible for voting");
        
//     }
// }
// vote(age)
// 7)Define a function to find out if number is prime or not.
// let numb=parseInt(prompt("Enter a number"))
// function prime(numb){
//     let is_div = true;
//     for (let i = 2; i < numb; i++) {
//         if (numb % i == 0) {
//             is_div = false;
//             break;
//         }
//     }
//     if (is_div == true)
//         console.log(numb + " is a prime number ");
//     else
//         console.log(numb + " is not a prime number");
// }
// prime(numb)
// 8)Write a program which will ask the user to enter his/her marks (out of 100). Define a function that will display grades according to the marks entered as below:
// Marks        Grade
// 91-100         AA
// 81-90          AB
// 71-80          BB
// 61-70          BC
// 51-60          CD
// 41-50          DD
// <=40          Fail
// let mark=parseInt(prompt("Enter a mark from 0 to 100"))
// function gradeCalc(mark){
//     let m;
// switch(true){
// case(mark>90):
//  m="AA grade";
// break;
// case(mark<=90&&mark>80):
// m="AB grade";
// break;
// case(mark<=80&&mark>70):
// m="BB grade";
// break;
// case(mark<=70&&mark>60):
// m="BC grade";
// break;
// case(mark<=60&&mark>50):
// m="CD grade";
// break;
// case(mark<=50&&mark>40):
// m="DD grade";
// break;
// case(mark<=40):
// m="Fail";
// }
// console.log(m)}
// gradeCalc(mark)
// 9)Write a program to print the factorial of a number by defining a function named 'Factorial'.
// Factorial of any number n is represented by n! and is equal to 1*2*3*....*(n-1)*n. E.g.-
// 4! = 1*2*3*4 = 24
// 3! = 3*2*1 = 6
// 2! = 2*1 = 2
// Also,
// 1! = 1
// 0! = 0
// let numbe=parseInt(prompt("Enter a number"))
// function factorial(numbe) { 

// if (numbe === 0) { 
//     return 1; 
// } 
// else { 
//     return numbe * factorial( numbe - 1 ); 
// } 
// } 

// console.log(factorial(numbe));