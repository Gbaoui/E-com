import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import authService from './authService';

const getUserfromLocalStorage = localStorage.getItem('user')

const initialState = {
    user:userDefaultState,
    isError:false,
    isLoading:false,
    isSuccess:false,
    message:"",

};

export const login = createAsyncThunk(
    "auth/login",
    async (userData, thunkAPI) => {
      try {
        return await authService.login(userData);
      } catch (error) {
        return thunkAPI.rejectWithValue(error);
      }
    }
  );



export const authSlice = createSlice({
    name:"auth",
    initialState:initialState,
    reducers:{},
    extraReducers:(builder)=> {
        builder.addCase(login.pending, (state)=>{
            state.isLoading = true
        });
        builder.addCase(login.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.isSuccess=true;
            state.user = action.payload
        });
        builder.addCase(login.rejected, (state, action)=>{
            state.isLoading = false;
            state.isError= true;
            state.isSuccess=false;
            state.user = null
        });
    },
});


export default authSlice.reducer;