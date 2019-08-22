/**
 * Not using typescript here because it's broken when evaluating event.target.result
 * @see https://github.com/Microsoft/TypeScript/issues/28293
 * Maybe fix this myself?
 */

import defaultSettings from '../constants/defaultSettings';

const DB_VERSION = 3;
const DB_NAME = 'saladAppDatabase';
const SETTINGS_OBJECT_STORE = 'settings';
let db;

const indexedDatabase = () => {
  if (!window.indexedDB) {
    console.log(`Your browser doesn't support a stable version of IndexedDB. 
      Salad settings filters will not be enabled.`);

    return;
  };

  const databaseRequest = indexedDB.open(DB_NAME, DB_VERSION);

  databaseRequest.onerror = (event) => {
    console.log('There was an error opening the database', event);
  };

  databaseRequest.onupgradeneeded = (event) => {
    db = event.target.result;

    return db.createObjectStore(SETTINGS_OBJECT_STORE, { autoIncrement: true });
  };

  databaseRequest.onsuccess = async (event) => {
    db = event.target.result;

    const userSettings = dbRequest.getAll(SETTINGS_OBJECT_STORE);
    userSettings.onsuccess = () => {
      if (!userSettings.result.length) return dbRequest.add(SETTINGS_OBJECT_STORE, defaultSettings);
    };
  };
};

const dbRequest = {
  getObjectStore: (store, mode = 'readonly') => db.transaction(store, mode).objectStore(store),
  
  get: (store, key) => dbRequest.getObjectStore(store).get(key),

  getAll: (store, key = null) => dbRequest.getObjectStore(store).getAll(key),

  add: (store, data) => dbRequest.getObjectStore(store, 'readwrite').add(data),

  update: (store, key, data) => dbRequest.getObjectStore(store).put(data),
};

export { indexedDatabase as default, dbRequest};
