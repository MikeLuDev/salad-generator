import { dbRequest, SETTINGS_OBJECT_STORE } from './db';

const SETTINGS_KEY = 'userSettingsKey';
const DIETARY_KEY = 'userDietaryKey';

const helpers = {
  getSettings: async (store: string, key: string | number) => {
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

  saveSettings: async (
    store: string,
    key: string | number,
    settings: IUserOptions,
  ) => {
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

const ingredientSettings = {
  getIngredientSettings: () =>
    helpers.getSettings(SETTINGS_OBJECT_STORE, SETTINGS_KEY),
  saveIngredientSettings: (data: IUserOptions) =>
    helpers.saveSettings(SETTINGS_OBJECT_STORE, SETTINGS_KEY, data),
};

const settings = { ingredientSettings };

export { settings as default, SETTINGS_KEY, DIETARY_KEY };
