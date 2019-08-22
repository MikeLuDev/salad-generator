import { dbRequest, SETTINGS_OBJECT_STORE } from './db';

const settings = {
  getSettings: async () => {
    return new Promise((resolve, reject) => {
      const settingsRequest = dbRequest.get(SETTINGS_OBJECT_STORE, 1);
  
      settingsRequest.onsuccess = (event) => {
        const userSettings = event.target.result;
  
        resolve(userSettings);
      };
  
      settingsRequest.onerror = (event) => {
        alert(`Error getting user settings. Error: ${event.target.errorCode}`);
        reject();
      };
    });
  },
};

export default settings;
