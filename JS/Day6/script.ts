
// chunk function in ES6
function chunkES6(arr, size) {
    var res = [], temp = [];
    for (let i = 0; i < arr.length; i++) {
        // console.log(i, arr[i]);
        temp.push(arr[i]);
        if (temp.length === parseInt(size)) {
            res.push(temp);
            temp = [];
        }
    }
    res.push(temp);
    return res;
}

var piece = chunkES6([3, 4, 5, 6, 7], 2);
console.log(piece);

// find function in ES6

function findES6(arr, cond) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > cond) {
            return arr[i];
        }
    }

}

var firstVal = findES6([3, 4, 5, 6, 7], 5);
console.log(firstVal);

// reduce function in ES6
function reduceES6(arr) {
    var tot = 0;
    for (let i = 0; i < arr.length; i++) {
        tot += arr[i];
    }
    return tot;
}

var reduceVal = reduceES6([3, 4, 5, 6, 7]);
console.log(reduceVal);

//filter in ES6
function filterES6(arr, func) {
    var temp = [];
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i], i, arr)) {
            temp.push(arr[i]);
        }
    }
    return temp;
}

var filterVal = filterES6([3, 4, 5, 6, 7], (item, index, arr) => item > 5);
console.log(filterVal);

//sum in ES6
function sumES6(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        if (isNaN(arr[i])) {
            continue;
        }
        sum += parseFloat(arr[i]);
    }
    return sum;
}

var sumVal = sumES6([100, -200, 3]);
console.log(sumVal);