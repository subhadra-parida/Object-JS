a="w3resourse"
b={}
for (i in a){
    if (i in b){
        b[i]=b[i]+1
    }
    else{
        b[i]=1
    }
}
console.log(typeof(b))

