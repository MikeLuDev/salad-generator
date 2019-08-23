import { dbRequest, SETTINGS_OBJECT_STORE } from './db';

const settings = {
  getSettings: async () => {
    return new Promise<IUserOptions>((resolve, reject) => {
      const settingsRequest = dbRequest.get(SETTINGS_OBJECT_STORE, 1);

      settingsRequest.onsuccess = (event) => {
        const { result } = event.target as IDBRequest;

        resolve(result);
      };

      settingsRequest.onerror = () => {
        alert(`Error getting user settings.`);
        reject();
      };
    });
  },

  saveSettings: async (settings: IUserOptions) => {
    return new Promise<IUserOptions>((resolve, reject) => {
      const settingsRequest = dbRequest.update(
        SETTINGS_OBJECT_STORE,
        1,
        settings,
      );

      settingsRequest.onsuccess = (event) => {
        const { result } = event.target as IDBRequest;
        console.log(result);
        resolve(result);
      };

      settingsRequest.onerror = () => {
        alert(`Error saving user settings.`);
        reject();
      };
    });
  },
};

export default settings;