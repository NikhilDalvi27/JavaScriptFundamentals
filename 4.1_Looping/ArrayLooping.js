
//todo looping Arrays
// Suitable for getting only the ITEM
// and NOT the INDEX
const arr =[2,3,5,7,8];

for( const item of arr){
    console.log(item);
}

for( const item of arr.entries()){
    //todo Note it's the INDEX and ITEM
    console.log(item[0]+" "+item[1]);
}

//todo Note it's the INDEX and ITEM
// using Destructuring
// THIS is Important
for( const [index,item] of arr.entries()){
    console.log(index+" "+item);
}