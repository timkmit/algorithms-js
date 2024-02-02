const array = [1,3,2,7,5,6,0,-4,8,-2,9,-1,10,-5]
let count = 0

function selectionSort(array){
    for (let i = 0; i < array.length; i++){
        let indexMin = i
        for (let j = i + 1; j < array.length; j++){
            if(array[j] < array[indexMin]){
                indexMin = j
            }
            count+=1
        }
        let tmp = array[i]
        array[i] = array[indexMin]
        array[indexMin] = tmp
        
    }
    return array
}

console.log(selectionSort(array))

console.log(count)

//O(k*n^2), that k - coefficient (like 1/2 or etc), but usually never writting 