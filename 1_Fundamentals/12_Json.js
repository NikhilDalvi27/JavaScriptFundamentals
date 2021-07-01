const book = {
    title : 'Ego is Enemy',
    author: 'Ryan Holiday'
}


//todo JSON.stringify converts object/array into a JSON string
const bookJson = JSON.stringify(book);
console.log(bookJson);


//todo JSON parse takes in the JSON string and gives a JSON object
const parsedData = JSON.parse(bookJson);
console.log(parsedData);
console.log(parsedData.author);
