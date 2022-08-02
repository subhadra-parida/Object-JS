// Count the properties of object............
// Output:-5

var dict =  {
    'Alex': ['subj1', 'subj2', 'subj3'],
    'David': ['subj1', 'subj2']
 }
var total_count=0;
for (i in dict){
    for (j in dict[i]){
        total_count++
    }
}
console.log(total_count)

