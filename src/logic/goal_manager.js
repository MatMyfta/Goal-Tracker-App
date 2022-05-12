import { storeData, getAllKeys, getMultiple } from '../core/async_storage'

/**
 * Store a single [Goal] into persistent storage.
 * @param goal: the [Goal] value that has to be stored. 
 */
export const storeGoal = (goal) => {
    let key = '@goal-' + goal.id
    storeData(key,goal)
}

/**
 * Get a list of all the goals in the storage.
 * @returns the list of all the goals in the persistent storage.
 */
export const getAllGoals = () => {
    // getAllKeys() returns all the keys in the storage.
    // We need to filter the list to the values that starts with '@goal-'
    let keys = getAllKeys().filter(key => key.includes('@goal-'))
    // getMultiple(keys) returns all the goals associated to the keys.
    return getMultiple(keys)
}
