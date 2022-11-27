import create from 'zustand';
import {devtools}from 'zustand/middleware';
import Youtube from'../src/api/youtube';
import fakeYoutube from '../src/api/fakeYoutube';
const store = set => ({
  youtube : new fakeYoutube(),
  youtubeId :'',
  setYoutubeId : (id) => set(state => ({youtubeId : id}))
});
const useStore = create(devtools(store));

export default useStore;