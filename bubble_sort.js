const array = [1,3,2,7,5,6,0,-4,8,-2,9,-1,10,-5]
let count = 0

function bubbleSort(array){
    for (let i = 0; i < array.length; i++){

        for (let j = 0; j < array.length; j++){
            if(array[j] > array[j + 1]){
                let tmp = array[j]
                array[j] = array[j + 1]
                array[j + 1] = tmp
            }
            count+=1
        }
    }
    return array
}

console.log(bubbleSort(array))
console.log(count)