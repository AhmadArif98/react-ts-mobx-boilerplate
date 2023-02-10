import {types} from 'mobx-state-tree';

export const SubStore = types.model({
  subStoreCounter: types.number,
}).actions(self => {
  const setSubStoreCounter = (value: number) => {
    self.subStoreCounter = value;
  }
  return {
    setSubStoreCounter,
  };
});


export function initSubStore() {
    return SubStore.create({
      subStoreCounter: 0,
    });
}

