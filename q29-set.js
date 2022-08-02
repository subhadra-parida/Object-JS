// How to print unique value in a list ?????????????????
var dict=["Rani","Lucky","Shalu","Swapna","Rajshri","Rani","Rajshree","Shalu","Barsha"];
var i=0;
var s=[];
while (i<dict.length){
    var j=0;
    var count=0;
    while (j<dict.length){
        if (dict[i]==dict[j]){
            count++
        }
        j++
    }
    if (!s.includes(dict[i])){
        s.push(dict[i])
    }
    i++
}
console.log(s)


// OUTPUT:-["Rani", "Lucky", "Shalu", "Swapna", "Rajshri", "Rani","Rajshree", "Barsha"]