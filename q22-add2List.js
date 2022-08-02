// How to merge to list in a dictionary????????????????????
let list1=['one','two','three','four','five']
let list2=[1,2,3,4,5]
var n={}
for (i in list2){
   n[list1[i]]=list2[i]
}
console.log(n);


//OUTPUT:= {'one':1,two':2,'three':3,'four':4,'five':5}

