const myEach = function(collection, callback) {
    if (collection.isArray) {
        for (let i = 0; i < collection.length; i++) {
            callback(collection[i])
        }
    } else {
        let newArray = Object.values(collection)
        for (let i = 0; i < newArray.length; i++) {
            callback(newArray[i])
        }
    }
    return collection
}

const myMap = function(collection, callback) {
    let newArray = []
    if (collection.isArray) {
        for (let i = 0; i < collection.length; i++) {
            newArray.push(callback(collection[i]))
        }
    } else {
        let arrFromObj= Object.values(collection)
        for (let i = 0; i < arrFromObj.length; i++) {
            newArray.push(callback(arrFromObj[i]))
        }
    }
        return newArray
}

const myReduce = function(collection, callback, start) {
    let newCollection = collection
    if (newCollection.isArray) {
    }
    else{
         newCollection= Object.values(newCollection)
    }
    if (start === undefined) {
        start = newCollection[0]
        newCollection = newCollection.slice(1)
    }
        for (let i = 0; i < newCollection.length; i++) {
            start = callback(start, newCollection[i], newCollection)
        }
        return start
}


const myFind = function(collection, predicate) {
    let newCollection = collection
    if (!newCollection.isArray) {
        newCollection = Object.values(newCollection)
    }
     for (let i = 0; i < newCollection.length; i++) {
        if (predicate(newCollection[i])) {
            return newCollection[i]
        }
    }
    return undefined
}


const myFilter = function(collection, predicate) {
    let newCollection = collection
    if (!newCollection.isArray) {
        newCollection = Object.values(newCollection)
    }
    let newArr = []
     for (let i = 0; i < newCollection.length; i++) {
        if (predicate(newCollection[i])) {
            newArr.push(newCollection[i])
        }
    }
        return newArr
}

const mySize = function(collection) {
    if (collection.isArray) {
        return collection.length
    }
    else {
    collection = Object.values(collection)
    return collection.length
    }
}

const myFirst = function(arr, int) {
    if (int) {
        return arr.slice(0, int)
    }
    else {
        return arr[0]
    }

}

const myLast = function(arr, int) {
    if (int) {
        return arr.slice(arr.length - int)
    }
    else {
        return arr[arr.length-1]
    }
}

const myKeys = function(object) {
    let arr = []
    for (const key in object) {
        arr.push(key)
    }
    return arr
}

const myValues = function(object) {
    let arr = []
    for (const key in object) {
        arr.push(object[key])
    }
    return arr
}