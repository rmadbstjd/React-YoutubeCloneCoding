import create from 'zustand';
import {devtools}from 'zustand/middleware';
import Youtube from'../src/api/youtube';
const store = set => ({
  youtube : new Youtube()
});
const useStore = create(devtools(store));

export default useStore;