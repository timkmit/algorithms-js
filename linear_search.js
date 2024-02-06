const startArray = [1,2,3,4,5,6,7,8,9,10]

function linearSearch(inputArray, item){
    for(let i = 0; i < inputArray.length; i++){
        if(inputArray[i] === item){
            return i
        }
    }
    return null
}

console.log(linearSearch(startArray, 5))

//O(n)
