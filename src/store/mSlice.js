import { createSlice , createAsyncThunk} from "@reduxjs/toolkit";
export const getData = createAsyncThunk('data/getData', async(data,thunkAPI)=>{
    try{
        const res = await fetch("https://jostore2000.000webhostapp.com/portfolio.php");
        const data = await res.json();
        return data;
/*
Axios.get(url , [header] ) 
.then(
    res = > clg(res)
)
.catch(
    err=>{
        clg(catch)
    }
)
*/
    }
    catch(error){
        console.log(error)
        // return rejectWithValue(error.message);
    }
})
// export const getData2 = createAsyncThunk('data/getData2', async(data,thunkAPI)=>{
//     try{
//         const res = await fetch("https://jostore2000.000webhostapp.com/portfolio.php");
//         const data = await res.json();
//         // console.log(data)
//         return data;
//     }
//     catch(error){
//         console.log(error)
//         // return rejectWithValue(error.message);
//     }
// })
const mSlice = createSlice({
    name:'data',
    initialState:{ data:[] ,projectsResults:[],projectimage:[],services:[],links:[], isLoading : false},
    extraReducers:{
    [getData.pending]:(state, action) =>{
        state.isLoading = true ;
        // console.log(action);
    },
    [getData.fulfilled]:(state, action) =>{
        state.isLoading = false ;
        state.data=action.payload.skills.data;
        
        // console.log(state.data)
        state.projectsResults = action.payload.projects;
        // console.log(state.projectsResults)

        state.projectimage = action.payload.projects.name;
        // console.log(state.projectimage)

        state.services = action.payload.profile;
        state.links = action.payload.links.data;
        console.log(state.links)

    },
    [getData.rejected]:(state, action) =>{
        state.isLoading = false ;
    },


    },
});
export default mSlice.reducer