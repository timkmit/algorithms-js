function findDuplicates(arr){

    let res = []

    for(let i = 0; i < arr.length; i++){

        let array = arr.slice(i + 1);

        let duplicates = array.filter(item => {
            return array.indexOf(item) !== array.lastIndexOf(item);
        })

        res.push(...duplicates)
    }

    return res
}