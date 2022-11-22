import create from 'zustand';
import {devtools}from 'zustand/middleware';
const store = set => ({
    keyword : '',
    setKeyword : (keyword) => set(state => ({keyword}))
});
const useStore = create(devtools(store));

export default useStore;