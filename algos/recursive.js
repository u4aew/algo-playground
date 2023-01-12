const three = {
    value: 3,
    next: {
        value: 5,
        next: {
            value: 6,
            next: {
                value: 7,
                next: {
                    value: 8,
                    next: {
                        value: 9,
                    }
                }
            }
        }
    }
}

const sum = (list) => {
    if (!list.next) {
        return list.value;
    }
    return list.value + sum(list.next);
}

const findSum = (list) => {
    let sum = 0;
    while (list) {
        sum += list.value;
        list = list.next;
    }
    return sum;
}


console.log(sum(three), 'result')
console.log(findSum(three), 'result')
