const startArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14]
let count = 0

function binarySearch(inputArray, item){

    let start = 0
    let end = inputArray.length
    let middle
    let found = false
    let position = -1

    while (found === false && start <= end){

        count +=1

        middle = Math.floor((start + end) / 2)

        if(inputArray[middle] === item){
            found = true
            position = middle
            return position
        }
        if(item < inputArray[middle]){
            end = middle - 1
        }else {
            start = middle + 1
        }
    }
    return position
}

console.log(binarySearch(startArray, 11))

console.log(count)

//only for sorted arrays
//O(log2n)