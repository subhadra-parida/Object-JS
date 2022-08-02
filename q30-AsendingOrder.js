var dict={"bijender":45,"deepak":60,"param":20,"anjili":30,"roshini":50}
var a=dict.values;
var num=array(a)
var i=0;
while (i<num.length){
    a=i;
    j=i+1;
    while (j<num.length){
        if (num[a]>num[j]){
            a=j;
        }
        j++
    }
    num[i],num[a]=num[a],num[i];
    i++
}
console.log(num)
var dict1={}
for (k in dict){
    for (l in dict.values()){
        if (dict[i]==num[i]){
            console.log(i)
        }
    }
}


// // Ascending order....
// dict={"bijender":45,"deepak":60,"param":20,"anjili":30,"roshini":50}
// ai<lnudict.values()
// num=list(a)
// i=0
// while i<len(num):
//     a=i
//     j=i+1
//     while j<len(num):
//         if num[a]>num[j]:
//             a=j
//         j=j+1
//     num[i],num[a]=num[a],num[i]
//     i+=1
// print(num)
// dict1={}
// for k in dict:
//     for l in dict.values():
//         if dict[i]==num[i]:
//             print(i)
