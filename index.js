const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      const newCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection)

      for (let i = 0; i < newCollection.length; i++){
        callback(newCollection[i])
      }

      return collection
    },

    map: function(collection, callback) {
      if (!(collection instanceof Array)) {
        collection = Object.values(collection)
      }
      
      const newArray = []

      for (let i = 0; i < collection.length; i++){
        newArray.push(callback(collection[i]))
      }

      return newArray
    },

    reduce: function(collection, callback, acc) {
      let newCollection = collection.slice(0)

      if (!acc) {
        acc = newCollection[0]
        newCollection = newCollection.slice(1)
      }

      for (let i = 0; i < newCollection.length; i++){
        acc = callback(acc, newCollection[i], newCollection)
      }
    
      return acc
    },

    find: function(collection, predicate) {
      if (!(collection instanceof Array))
        collection = Object.values(collection)

        for (let i = 0; i < collection.length; i++)
          if (predicate(collection[i])) return collection[i]

        
    },

    filter: function(collection, predicate) {
      if (!(collection instanceof Array))
        collection = Object.values(collection)

      const array = []
      
      for (let i = 0; i < collection.length; i++){
        if (predicate(collection[i])) array.push(collection[i])
      }
      return array

    },

    size: function(collection) {
      return (collection instanceof Array) ? collection.length : Object.keys(collection).length
    },

    first: function(array, n){
      return (n) ? array.slice(0, n) : array[0]
    },

    last: function(array, n){
      return (n) ? array.slice(array.length - n, array.length) : array[array.length-1]
    },

    compact: function(array) {
      const falseValues = new Set([false, null, 0, "", undefined, NaN])
      return array.filter(e => !falseValues.has(e))
    },

    sortBy: function(array, callback){
      const newArr = [...array]
      return newArr.sort(function(a, b) {
        return callback(a) - callback(b)
      })
    },

    uniqSorted: function(collection, iteratee) {
      const sorted = [collection[0]]
      for (let idx = 1; idx < collection.length; idx++) {
        if (sorted[idx-1] !== collection[idx])
          sorted.push(collection[idx])
      }
      return sorted
    },

    uniq: function(collection, sorted=false, iteratee=false) {
      if (sorted) {
        return fi.uniqSorted(collection, iteratee)
      } else if (!iteratee) {
        return Array.from(new Set(collection))
      } else {
        const modifiedVals = new Set()
        const uniqVals = new Set()
        for (let val of collection) {
          const moddedVal = iteratee(val)
          if (!modifiedVals.has(moddedVal)) {
            modifiedVals.add(moddedVal)
            uniqVals.add(val)
          }
        }
        return Array.from(uniqVals)
      }
    },

    keys: function(obj) {
      const keys = []
      for (let key in obj){
        keys.push(key)
      }
      return keys
    },

    values: function(obj) {
      const values = []
      for (let key in obj){
        values.push(obj[key])
      }
      return values

    },

    functions: function(obj) {
      const functionNames = []

      for (let key in obj) {
        if (typeof obj[key] === "function"){
          functionNames.push(key)
        }
      }

      return functionNames.sort()
    },


  }
})()

fi.libraryMethod()
