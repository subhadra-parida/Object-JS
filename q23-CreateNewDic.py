# How to print new list .................
list = [{ "first": "1", "second": "2", "third": "1", "four": "5", "five": "5", 
"six": "9", "seven": "7" }]
new=[]
for i in list:
  for j in i:
    if new is not (i[j]):
      new.append(i[j])
print(new) 

new_list = [1,2,1,5,5,9,7]
def n(string_list):
    i=0
    list=[]
    while i<len(string_list):
        if new_list[i] not in list:
            new_list.append(new_list[i])
        i=i+1
    print(list)
n(new_list)