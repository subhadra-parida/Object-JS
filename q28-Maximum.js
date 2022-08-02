// Write a programme to find the 3 maximum values of an object and print them...............
var my_dict = {'a':50,'b':58,'c':56,'d':40,'e':100,'f':20}
var max1=0;
var max2=0;
var max3=0;
for (i in my_dict){
    if (my_dict[i]>max1){
      //   max3==max2;
      //   max2==max1;
        max1=my_dict[i]
    }
    else if(my_dict[i]<max1>max2){
      //   max3==max2;
        max2=my_dict[i];
    }
    else if(my_dict[i]>max3<max2<max1){
        max3=my_dict[i];
    }
}
console.log(max1,max2,max3);

