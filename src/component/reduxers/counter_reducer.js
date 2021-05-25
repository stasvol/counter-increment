import React from "react";
const ADD_NUMBER = 'ADD_NUMBER'

const defaultState ={
    counter:0
}

export const countRed =(state=defaultState,action)=>{

    switch (action.type) {

        case ADD_NUMBER :
            state.counter += action.payload
            return {
                ...state,
            }


        default:
            return  state
    }

}

export const countAC = (payload)=>({type:ADD_NUMBER,payload})

export const thunkCreator =(payload)=>(dispatch,getState)=> {

    const state = getState()
    if (state.count.counter > 10){
        setTimeout(()=>{
            dispatch(countAC(payload))
        },2000)

    }
}