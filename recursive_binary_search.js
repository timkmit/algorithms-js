const array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14]
let count = 0

function recursiveBinarySearch(array, item, start, end){

    let middle = Math.floor((start + end) / 2)

    count +=1

    if(item === array[middle]){
        return middle
    }
    if(item < array[middle]){
        return recursiveBinarySearch(array, item, 0, middle - 1)
    }else return recursiveBinarySearch(array, item, middle + 1, end)
}

console.log(recursiveBinarySearch(array, 11, 0, array.length))

console.log(count)
//O(log2n) same 