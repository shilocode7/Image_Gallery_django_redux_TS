import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import { Iimages, IImg } from '../../model/IImg';
import { getstudents, delstudents } from './galleryAPI';


const initialState: Iimages = {
  images: [],
  upd: false
};

export const getStudentsAsync = createAsyncThunk(
  'gallery/getstudents',
  async () => {
    const response = await getstudents();
    //console.log(response)
    return response.data;
  }
);
export const deltudentsAsync = createAsyncThunk(
  'gallery/delstudents',
  async (id: number) => {
    const response = await delstudents(id);
    //console.log(response)
    return response;
  }
);

export const gallerySlice = createSlice({
  name: 'gallery',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(getStudentsAsync.fulfilled, (state, action) => {
        console.log(action.payload)
        state.images = action.payload

      })
      .addCase(deltudentsAsync.fulfilled, (state, action) => {
        const id = (action.payload as any).data;
        console.log("test2")
        state.images = state.images.filter(x => x.id !== id)
        state.upd = true
      })
  },
});
export const { } = gallerySlice.actions;
export const selectImages = (state: RootState) => state.gallery.images;
export const selectUpd = (state: RootState) => state.gallery.images;
export default gallerySlice.reducer;
