const removeFromArray = function(arr, ...items) {
    const newArr = [];
    arr.forEach((item) => {
        if (!items.includes(item)) {
            newArr.push(item);
        }
    })
    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
