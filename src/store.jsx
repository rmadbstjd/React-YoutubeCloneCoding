import create from 'zustand';
import produce from "immer";
import {devtools}from 'zustand/middleware';
import Youtube from'../src/api/youtube';
import fakeYoutube from '../src/api/fakeYoutube';
const store = set => ({
  youtube : new fakeYoutube(),
  youtubeId :'',
  forId :{
    channel:[],
    youtube:[],
  },
  
  setIdforChannel : (channelId) =>set(produce((draft) => {draft.forId.channel.push(channelId)})),
  setIdforYoutube : (youtubeId) =>set(produce((draft) => {draft.forId.youtube.push(youtubeId)})),
  setPopChannelId :() =>set(produce((draft) => {draft.channelId.pop()})),
  setYoutubeId : (id) => set(state => ({youtubeId : id})),
  
});
const useStore = create(devtools(store));

export default useStore;