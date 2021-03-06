const STATE_NAME = 'wasetime-state';

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem(STATE_NAME);
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (error) {
    // In case of any errors, play safe and let reducers initialize the state.
    return undefined;
  }
};

export const saveState = state => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(STATE_NAME, serializedState);
  } catch (error) {
    console.log(error);
  }
};
