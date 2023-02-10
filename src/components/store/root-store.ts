import makeInspectable from 'mobx-devtools-mst';
import {initSubStore, SubStore} from './sub-store/subStore';
import {Instance, types} from 'mobx-state-tree';
import {useMemo} from 'react';

const RootStore = types.model({
  subStore: SubStore,
  mainCounter: types.number,
}).actions(self => {
  const setMainCounter = (value: number) => {
    self.mainCounter = value;
  }
  return {
    setMainCounter,
  };
});

export type RootStoreType = Instance<typeof RootStore>;

let store: RootStoreType;

export function initializeStore(snapshot = null) {
  const _store =
    store ??
    RootStore.create({
      subStore: initSubStore(),
      mainCounter: 0,
    });

  if (typeof window === 'undefined') {
    return _store;
  }
  if (!store) {
    store = _store;
  }
  makeInspectable(store);
  return store;
}

export function useStore(initialState: any): Instance<typeof RootStore> {
  return useMemo(() => initializeStore(initialState), [initialState]);
}
