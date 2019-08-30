import { dbRequest, SETTINGS_OBJECT_STORE } from './db';

const SETTINGS_KEY = 'userSettingsKey';
const DIETARY_KEY = 'userDietaryKey';

const ingredientSettings = {
  getIngredientSettings: async () => {
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

  saveIngredientSettings: async (settings: IUserOptions) => {
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

const dietarySettings = {
  getDietarySettings: async () => {
    return new Promise<IDietaryOptions>((resolve, reject) => {
      const settingsRequest = dbRequest.get(SETTINGS_OBJECT_STORE, DIETARY_KEY);

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

  saveDietarySettings: async (settings: IDietaryOptions) => {
    return new Promise<IDietaryOptions>((resolve, reject) => {
      const settingsRequest = dbRequest.update(
        SETTINGS_OBJECT_STORE,
        DIETARY_KEY,
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

const settings = { ingredientSettings, dietarySettings };

export { settings as default, SETTINGS_KEY, DIETARY_KEY };
