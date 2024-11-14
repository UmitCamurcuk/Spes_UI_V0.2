export const setItem = (key: string, value: any): void => {
    localStorage.setItem(key, JSON.stringify(value));
  };
  
  export const getItem = <T>(key: string): T | null => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  };
  
  export const removeItem = (key: string): void => {
    localStorage.removeItem(key);
  };
  
  export const clearStorage = (): void => {
    localStorage.clear();
  };
  