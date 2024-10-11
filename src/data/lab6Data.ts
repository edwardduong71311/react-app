import {Tab, TAB_TYPE, User, UserComment} from "../types/App.type";
import axios from "axios";

const host: string = "http://localhost:3001"
export const getComments = (signal: AbortSignal): Promise<UserComment[]> => {
    return new Promise<UserComment[]>(resolve => {
        axios.get(`${host}/comments`, {
            signal: signal
        }).then(function (response) {
            resolve(response.data.data);
        }).catch(function (error) {
            console.log(error);
        });
    })
}

export const getUserInfo = (signal: AbortSignal): Promise<User> => {
    return new Promise<User>(resolve => {
        axios.get(`${host}/user-info`,{
            signal: signal
        }).then(function (response) {
            resolve(response.data);
        }).catch(function (error) {
            console.log(error);
        });
    })
}


// Nav Tab
export const tabList: Tab[] = [
    { type: TAB_TYPE.HOT, text: 'Top' },
    { type: TAB_TYPE.NEWEST, text: 'Newest' },
]