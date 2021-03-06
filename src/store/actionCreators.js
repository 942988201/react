import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_LIST_ACTION } from './actionTypes';
import axios from '@/api';
export const getInputChangeAction = (value) => ({
    type: CHANGE_INPUT_VALUE,
    value
});

export const getAddItemAction = () => ({
    type: ADD_TODO_ITEM
});

export const getDeleteItemAction = (index) => ({
    type: DELETE_TODO_ITEM,
    index
});
export const initListAction = (data) => ({
    type: INIT_LIST_ACTION,
    data
});
export const getTodoList = () => {
    return (dispatch, getState) => {
        axios.get("posts").then(res => {
            const action = initListAction(res.data);
            // console.log(getState())
            dispatch(action);

        })
    }
}