import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    objectId: 2345,
    apiData: {}
};

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setData: (state, action) => {
            return {...state, apiData: action.payload};
        },
        reset: () => {
            return initialState;
        },
        incrementId: state => {
            return {...state,  objectId: state.objectId + 1 };
        },
        decrementId: state => {
            return {...state, objectId: state.objectId - 1 };
        },
        customId: (state, action) => {
            return {...state, objectId: action.payload };
        }
    }
})

export const fetchData = () => {
    const dataThunk = async (dispatch, getState) => {
        let state = getState()
        const response = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${state.data.objectId}`)
        const resData = await response.json()
        console.log(resData)
        dispatch(dataSlice.actions.setData(resData))
    }
    return dataThunk
}

export const { incrementId, decrementId, customId, reset, setData } = dataSlice.actions

export default dataSlice.reducer