const findSmallest = (arr) => {
    let smallest = arr[0] // 5;
    let smallestIndex = 0 // 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < smallest) {
        smallest = arr[i];
        smallestIndex = i;
        }
    }
    return smallestIndex;
}

const selectionSort = (arr) => {
    const newArr = [];
    const length = arr.length;

    for (let i = 0; i < length; i++) {
        const smallest = findSmallest(arr);
        newArr.push(arr.splice(smallest, 1)[0]);
    }
    return newArr;
}
console.log(selectionSort([5, 3, 6, 2, 10]), 'result')

