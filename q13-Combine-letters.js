var obj={"1":["add","sub"],"2":["mul","div"]};
for (i in obj["1"]){
    for (j in obj["2"]){
        console.log(i+j)
    }
}


// OutPut:-
// 00
// 01
// 10
// 11
