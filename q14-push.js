var keys = ["Name","Middle_Name","Sure_name"];
var values = ["Barsha","Priyadarshini","Parida"];
var new_dic={}
for (i in values){
  new_dic[keys[i]]=values[i]
}
console.log(new_dic)

// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

var array1=["Name","Middle_Name","Sure_name"];
var array2=["Barsha","Priyadarshini","Parida"];
var result = {};
array1.forEach((key, i) => result[key] = array2[i]);
console.log(result);


// {"Name":"Barsha","Middle_name":"Priyadarshini","Sure_name":"Parida"}