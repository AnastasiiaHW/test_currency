interface ReturnType {
  setLocalStorageItem: (key: string, value: unknown) => void;
  getLocalStorageItem: <Response>(key: string) => Response | null;
}

export const localStorageUtils = (): ReturnType => {
  const setLocalStorageItem = (key: string, value: unknown) =>
    localStorage.setItem(key, JSON.stringify(value));

  const getLocalStorageItem = <Response>(key: string) => {
    const result = localStorage.getItem(key);
    return result ? (JSON.parse(result) as Response) : null;
  };
  return { setLocalStorageItem, getLocalStorageItem };
};
