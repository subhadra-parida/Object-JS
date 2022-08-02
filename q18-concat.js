// HOW TO CONCAT THE ELEMENTS?????????////

var dic1={1:10, 2:20}
var dic2={3:30,4:40}
var dic3={5:50,6:60}
// var dic=Object.assign(dic1,dic2,dic3)
// console.log(dic)
// Output:- {'1':10, '2':20,'3':30,'4':40,'5':50,'6':60}

var dic1={1:10, 2:20};
var dic2={3:30,2:40,4:40};
var dic3={5:50,6:60};
for (i in dic1){
  for (j in dic2){
    if (i==j){
        dic3[i]=dic1[i]+dic2[j]
        break
    }
     else{
        dic3[i]=dic1[i]
        dic3[j]=dic2[j]
     }
  } 
}
console.log(dic3);
// Output:- {'1':10, '2':60,'3':30,'4':40,'5':50,'6':60}
