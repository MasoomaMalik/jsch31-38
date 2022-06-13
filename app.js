// CHAP 31-34
// q1
// var todDate= new Date();
// document.write(todDate);

// q2
// var d= new Date();
//  cM=d.getMonth()
//  monthArr=['january','febraury', 'march', 'april', 'may', 'june', ' july','aug', 'sept','oct','nov' ,'dec']
//  document.write("Current Month: "+ monthArr[cM])

// q3
// var d= new Date();
//  cD=d.getDay()
//  dayArr=['sun','mon', 'tue','wed','thurs','fri','sat'];
//   document.write("Today is "+ dayArr[cD])

// q4
// var d= new Date();
//  cD=d.getDay()
//  if(cD==0 || cD== 6)
//  {
//   document.write("it's funday")}

// q5
// var d= new Date();
//  cD=d.getDate()
//  console.log(cD)
//  if(cD<=14)
//  {
//   document.write("first fifteen days")}
//   else{
//     document.write("last fifteen days")
//   }

// q6

// var oldDate= new Date("Jan 1, 1970");
// ot= oldDate.getTime();
// var d= new Date();
// nt=d.getTime();
// var sec=(nt-ot)
// var min= (nt-ot)/(1000*60)
// document.write("elapsed millisec since jan 1 1970: "+ sec)
// document.write("<br>elapsed min since jan 1 1970: "+ min)

// q7
// var d= new Date();
// h=d.getHours();
// alert(h)
// if(h<12){
//     alert('it\'s AM')
// }
// else 
// {
//     alert('it\'s PM')
// }


// q8
// var d=new Date();
// document.write(d+"<br>")
//  d.setFullYear(2020)
// d.setMonth(11)
// d.setDate(31)
// document.write(d+"<br>")

// // q9
// var Rdate= new Date("Apr 2, 2022");
// var Tdate= new Date();
// rt= Rdate.getTime();
// tt=Tdate.getTime();
// time=tt-rt;
// days=time/(1000*60*60*24)
// document.write(days+ " have passed after Ramadan")

// // q10
// var d=new Date();
// var oldD= new Date("Jan 1, 2015")

// tt= d.getTime();
// ot=oldD.getTime();

// time=(tt-ot)/1000;
// time=Math.floor(time)
// document.write("on reference date "+ d + ", "+ time+ " seconds have passed")


// q11
// var d=new Date();
// h=d.getHours();
// document.write("current date: " +d+ "<BR>")
// d.setHours(h-1)
// document.write("1 hour age it was "+d)


// q12
// var d=new Date();
// y=d.getFullYear();
// document.write("current date: " +d+ "<BR>")
// d.setFullYear(y-100)
// document.write("100 years ago it was "+d)

// q13
// age=+prompt("enter your age in numbers")
// var d= new Date();
// var y= d.getFullYear();
// var oy= y-age;
// document.write("your age is: "+ age+"<br> your birth year is "+ oy)

// q14
// var d= new Date();
// var cm = d.getMonth();
// units = 410
// charge = 16 
// nap = units*charge;
// lps= 350; 
// gap = nap + lps
// monthArr=['january','febraury', 'march', 'april', 'may', 'june', ' july','aug', 'sept','oct','nov' ,'dec']
// document.write("Customer Name: ABC Customer <BR> Current Month: "+monthArr[cm]+" <br> Number of units: 410 <br> Charges per unit: 16 <br> Net Amount Payable (within Due Date): " +nap+ "<br> Late Payment Surcharge:  " +lps+  "<br> Gross Amount Payable (after Due Date): " + gap)

























// CHAP 35-38
// Q1

// function dispDate ()
// {
// todDate= new Date();
// document.write(todDate);
// }

// dispDate();

// Q2

// function greet()
// {
// var fN = prompt('Enter your first name')
// var lN = prompt('Enter your last name')
// alert("Welcome  " + fN +" " + lN)
// }
// greet();

// Q3

// function add ()
// {
//     var n1 = +prompt('Enter 1st num')
//     var n2 = +prompt('Enter 2nd num')
//     return (n1+ n2)
// }
// var ans = add()
// alert(ans)

// Q4

// function calc (n1,n2,op)
// {
//     if (op === "+")
//     return(n1+n2)
//     else if (op === "-")
//     return(n1-n2)
//     else if (op === "*")
//     return(n1*n2)
//     else if (op === "/")
//     return(n1/n2)
//     else if (op === "%")
//     return(n1%n2)
//     else {
//         alert ("wrong operator")
//     }
// }
// var n1 = +prompt('Enter 1st num')
// var n2 = +prompt('Enter 2nd num')
// var op = prompt("Enter operator")
// var result = calc(n1,n2,op)
// alert(result)

// Q5
// function square(num)
// {return (num*num)}
// var num = +prompt('enter num to be squared')
// result=square(num)
// alert(result)

// Q6
// function factorial(num)
// { var ans= num;
//     for(i=(num-1); i>=1; i--)
//     {
//         ans= ans*i;
//     }
//     return ans;
// }
// var num = +prompt('enter num')
// ans = factorial(num);
// alert(ans)

// Q7
// function counting(n1,n2)
// {
// for(i=n1;i<=n2;i++)
// {
//     document.write(n1+"<br>")
//     n1=n1+1;
// }
// }
// var n1 = +prompt('Enter start num')
// var n2 = +prompt('Enter end num')
// counting(n1,n2)

// Q8

// function calcH(b,p)
// {
//     bsq=square(b)
//     psq=square(p)
//     hsq= bsq+ psq;
//     h = Math.sqrt(hsq)
//     return h;
// }
// function square(num)
// {return (num*num)}

// var b = +prompt('Enter base')
// var p = +prompt('Enter perp')
// h= calcH(b,p)
// alert(h)

// Q9A AS AVALUE

// function area(l=3,b=5)
// {alert(l*b)}
// area();

// Q9B AS VARIABLE
// function area(l,b)
// {alert(l*b)}
// l=3;b=5
// area(l,b)

// Q10 PALINDROME

// function checkP(str) {
//     console.log(str)
//     var strReverse = ""

//     for (j = str.length; j >= 0; j--) {
//         strReverse = strReverse + str.charAt(j);
//     }
//     console.log(strReverse)
//     for (i = 0; i <= str.length-1; i++) {
//         if (str.charAt(i) == strReverse.charAt(i)) {
             
//             flag=true;
            
//         }
//         else {
//             flag=false;
//         }
        
//     }
//     if (flag == true)
//     {alert("it is a palindrome")}
//     else{
//         alert("not a palindrome")
//     }
     
// }
// var str = prompt('Enter a string to check palindrome')
// checkP(str)

// q11

// function setTitleCase(str)
// {
//     firstLetter = str.charAt(0)
// firstLetter = firstLetter.toUpperCase();
// remainingLetters = str.slice(1)
// remainingLetters = remainingLetters.toLowerCase();
// str= firstLetter + remainingLetters;
// return str

// }
// function capitalizeStr(str="the quick brown fox")
// {
// strArr = str.split(" ");

// for(i=0;i<strArr.length;i++)
// {
//     ch= strArr[i];
//    ch = setTitleCase(ch);
   
//     strArr[i]= ch
//     console.log(strArr[i])
// }

// str = strArr.join(" ");
// alert(str)
// }

// capitalizeStr();

// Q12

// function longWord(str)
// {
//     strArr=str.split(" ")
//     max= strArr[0];
//     for(i=0; i<strArr.length; i++)
//     {
//         strLength = strArr[i].length;
     
        
//         if(strArr[i].length>max.length)
//         {
//             max=strArr[i]
//         }
//     }
//     document.write(" The longest word in '"+str+"' is "+ max)
     
// }
// str= "my name is masooma malik"
// longWord(str);


// q13

// function occurenece(str,letter)
// {count=0;
// for(i=0;i<str.length;i++)
// {
//     if(str.charAt(i)== letter)
//     { 
//         count=count+1;
//     }
// }
// alert(letter+ " occurs "+ count + " times.")
// }
// str=prompt('enter string')
// letter=prompt('enter letter')
// occurenece(str,letter)

// q14
// function calcCircumference(r)
// {
//     c= 2*3.142*r;
//     alert(c)
// }
// function calcArea(r)
// {
//     a=3.142*r*r;
//     alert(a)
// }
// r=7;

// calcCircumference(r)
// calcArea(r)