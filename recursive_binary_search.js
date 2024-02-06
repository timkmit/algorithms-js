const startArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14]
let count = 0

function recursiveBinarySearch(inputArray, item, start, end){

    let middle = Math.floor((start + end) / 2)

    count +=1

    if(item === inputArray[middle]){
        return middle
    }
    if(item < inputArray[middle]){
        return recursiveBinarySearch(inputArray, item, 0, middle - 1)
    }else return recursiveBinarySearch(inputArray, item, middle + 1, end)
}

console.log(recursiveBinarySearch(startArray, 11, 0, startArray.length))

console.log(count)
//O(log2n) same 