import create from 'zustand';
import {devtools}from 'zustand/middleware';
const store = set => ({
  
});
const useStore = create(devtools(store));

export default useStore;