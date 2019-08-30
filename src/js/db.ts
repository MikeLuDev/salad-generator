import saladDefaultSettings, {
  dietaryDefaultSettings,
} from '../constants/defaultSettings';
import { SETTINGS_KEY, DIETARY_KEY } from './settings';

const DB_VERSION = 3;
const DB_NAME = 'saladAppDatabase';
const SETTINGS_OBJECT_STORE = 'settings';
let db: IDBDatabase;

type Settings = {
  [propName: string]: IUserOptions | IDietaryOptions;
};

const verifyUserSettingsExists = (store: string, key: string | number) => {
  const userSettings = dbRequest.getAll(store);
  const settingsOptions: Settings = {
    [SETTINGS_KEY]: saladDefaultSettings as IUserOptions,
    [DIETARY_KEY]: dietaryDefaultSettings as IDietaryOptions,
  };

  userSettings.onsuccess = () => {
    if (!userSettings.result[key as any]) {
      return dbRequest.add(store, settingsOptions[key], key);
    }
  };
};

const indexedDatabase = () => {
  return new Promise((resolve, reject) => {
    if (!window.indexedDB) {
      console.log(`Your browser doesn't support a stable version of IndexedDB. 
        Salad settings filters will not be enabled.`);

      return;
    }

    const databaseRequest = indexedDB.open(DB_NAME, DB_VERSION);

    databaseRequest.onerror = (event) => {
      console.log('There was an error opening the database', event);
    };

    databaseRequest.onupgradeneeded = (event) => {
      db = (event.target as IDBOpenDBRequest).result;

      return db.createObjectStore(SETTINGS_OBJECT_STORE);
    };

    databaseRequest.onsuccess = async (event) => {
      db = (event.target as IDBOpenDBRequest).result;

      verifyUserSettingsExists(SETTINGS_OBJECT_STORE, SETTINGS_KEY);
      verifyUserSettingsExists(SETTINGS_OBJECT_STORE, DIETARY_KEY);

      resolve(db);
    };
  });
};

const dbRequest = {
  getObjectStore: (store: string, mode: IDBTransactionMode = 'readonly') =>
    db.transaction(store, mode).objectStore(store),

  get: (store: string, key: string | number) =>
    dbRequest.getObjectStore(store).get(key),

  getAll: (store: string, key: string | number | undefined = undefined) =>
    dbRequest.getObjectStore(store).getAll(key),

  add: (store: string, data: object, key?: string | number) =>
    dbRequest.getObjectStore(store, 'readwrite').add(data, key),

  update: (store: string, key: string | number, data: object) =>
    dbRequest.getObjectStore(store, 'readwrite').put(data, key),
};

export { indexedDatabase as default, dbRequest, SETTINGS_OBJECT_STORE, db };
