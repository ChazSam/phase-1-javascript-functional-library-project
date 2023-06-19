
function sanitize(collection){
    return Array.isArray(collection) ? [...collection] :  Object.values(collection)
     
}

function myEach(collection, callback){
    let newArray = sanitize(collection)
 for (let i of newArray){
    callback(i)
    alert(i)
 
 }
 return collection
 }

function myMap(collection, callback){
   let newArray = sanitize(collection)


    let newCollection = []

    for( let i of newArray){
      newCollection.push(callback(i))
    }
    return newCollection
}


function myReduce(collection, callback, acc){
    
    let newArray = sanitize(collection)
    let i
    if(acc){
        i=0
    }else{
        acc=newArray[0]
        i=1
    }

for(i; i < newArray.length; i++) {
    acc = callback(acc, newArray[i], newArray)
}

   return acc
}


function myFind(collection, predicate){
    let newArray = sanitize(collection)
  
   for(let i of newArray){
    if(predicate(i)){
        return i
    }
   }
}

function myFilter(collection, predicate){
    let newArray = sanitize(collection)
    let newCollection=[]
    for(let i of newArray){
        if(predicate(i)){
    newCollection.push(i)
        }
       }
       return newCollection
}

function mySize(collection){
    let newArray = sanitize(collection)
    return newArray.length
}

function myFirst(array, n = 1){
   
//     let newFirst = []

//     for(let i = 0; i < n; i++) {
 
//     newFirst.push(array[i])
  
// } 
// if (newFirst.length === 1) {
// return newFirst[0]
// }else{
// return newFirst
// }

return n === 1 ?  array[0] : array.slice(0, n)
 }

function myLast(array, n = 1) {
//     let newArray=array.slice().reverse()
//     let newFirst = []
//     for(let i = 0; i < n; i++) {
//      newFirst.push(newArray[i])
// }


// if (newFirst.length === 1) {
//     return newFirst[0]
//     }else{
//     return newFirst.slice().reverse()
//     }
return n === 1 ? array[array.length-1] : array.slice(array.length-n)

}




// function mySortby(array, callback){

// }

// function myFlatten(array, [shallow], newArr=[]){

// }

function myKeys(object){
    let keysArray = [] = Object.keys(object)
    return keysArray
}

function myValues(object){
    let keysArray= [] = Object.values(object)
    return keysArray
}