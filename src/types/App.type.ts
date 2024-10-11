export interface User {
    uid: string;
    avatar: string;
    uname: string;
}

export interface UserComment {
    rPid: number;
    user: User;
    content: string;
    ctime: string;
    like: number;
}

export enum TAB_TYPE {
    HOT='hot',
    NEWEST='newest',
}

export interface Tab {
    type: TAB_TYPE;
    text: string;
}