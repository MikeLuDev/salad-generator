import defaultSettings from '../constants/defaultSettings';

const indexedDatabase = async () => {
  const DB_VERSION = 3;
  const DB_NAME = 'saladAppDatabase';

  let request = indexedDB.open(DB_NAME, DB_VERSION);

  request.onerror = (event) => {
    console.log('There was an error opening the database', event);
  };

  request.onupgradeneeded = (event) => {
    const db = event.target.result;
    db.deleteObjectStore('settings');
    return db.createObjectStore('settings', { autoIncrement: true });
  };

  request.onsuccess = async (event) => {
    const db = event.target.result;

    const userSettingsRequest = getUserSettings(db);
    userSettingsRequest.onsuccess = () => {
      if (!userSettingsRequest.result.length) return initialUserSettings(db);
    }
  };

  const getUserSettings = (db) => {
    const transaction = db.transaction('settings');
    const objectStore = transaction.objectStore('settings');
    return objectStore.getAll();
  }

  const initialUserSettings = (db) => {
    const transaction = db.transaction('settings', 'readwrite');
    const store = transaction.objectStore('settings');

    store.add(defaultSettings);
  };
}

export default indexedDatabase;
