import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * Store a single goal object into [AsyncStorage].
 * @param key: the key of the object.
 * @param value: the value to be stored.
 */
export const storeData = async (key,value) => {
    try {
        const json = JSON.stringify(value)
        await AsyncStorage.setItem(key, json).then(() => {
            console.log("-- stored --")
            console.log(json)
        })
    } catch (e) {
        // saving error
    }
}

/**
 * Get one object from [AsyncStorage].
 * @param key: the key of the object to be returned.
 * @returns: the object binded to the provided key, or [null] if no object is found.
 */
export const getData = async (key) => {
  try {
    const json = await AsyncStorage.getItem(key)
    return json != null ? JSON.parse(json) : null;
  } catch(e) {
    // error reading value
  }
}

/**
 * Remove one object from [AsyncStorage].
 * @param key: the key of the object to be removed.
 */
export const removeValue = async (key) => {
    try {
        await AsyncStorage.removeItem(key)
    } catch(e) {
        // remove error
    }
    console.log('Done.')
}

/**
 * Get all the keys in the persistent local storage.
 * @returns a list of all the stored keys.
 */
export const getAllKeys = async () => {
    let keys = []
    try {
        keys = await AsyncStorage.getAllKeys()
    } catch(e) {
        // read key error
    }
    console.log(keys)
    // example console.log result:
    // ['@MyApp_user', '@MyApp_key']

    // Returning the result
    return keys
}

/**
 * Get multiple objects from the persistent storage.
 * @param keys: the keys that identify the objects. 
 * @returns the list of parsed objects.
 */
export const getMultiple = async (keys) => {
    let objs = []
    let values
    try {
        values = await AsyncStorage.multiGet(keys)
        for(value in values){
            const json = JSON.parse(value)
            if (json != null) objs.push(JSON.parse(json))
        }
    } catch(e) {
        // read error
    }
    console.log(values)
    // example console.log output:
    // [ ['@MyApp_user', 'myUserValue'], ['@MyApp_key', 'myKeyValue'] ]

    // Returning the parsed objects
    return objs
}
