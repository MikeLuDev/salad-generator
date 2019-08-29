import { dbRequest, SETTINGS_OBJECT_STORE } from './db';

const SETTINGS_KEY = 'userSettingsKey';
const DIETARY_KEY = 'userDietaryKey';

const settings = {
  getSettings: async () => {
    return new Promise<IUserOptions>((resolve, reject) => {
      const settingsRequest = dbRequest.get(
        SETTINGS_OBJECT_STORE,
        SETTINGS_KEY,
      );

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
        SETTINGS_KEY,
        settings,
      );

      settingsRequest.onsuccess = (event) => {
        const { result } = event.target as IDBRequest;

        resolve(result);
      };

      settingsRequest.onerror = () => {
        alert(`Error saving user settings.`);
        reject();
      };
    });
  },
};

export { settings as default, SETTINGS_KEY, DIETARY_KEY };
