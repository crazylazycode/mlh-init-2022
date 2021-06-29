const data = require("./data.json");

var newArray;

function dateCompare(date1,date2) {
    
    if(date1.slice(6,date2.length) >= date2.slice(6,date1.length) && date1.slice(3,5) >= date2.slice(3,5) && date1.slice(0,2) >= date2.slice(0,2)) return true;
    return false;
}

function sortingList(array) {
    let temp;

    for(let i = 0; i < array.length; i++) {
        for(let j = i + 1; j < array.length; j++) {
            if(array[i].name >= array[j].name && dateCompare(array[i].date,array[j].date)) {
                temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }


    for(let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}

sortingList(data.hackathon);