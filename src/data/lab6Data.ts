import {Tab, TAB_TYPE, User, UserComment} from "../types/App.type";

const avatar = 'images/bozai.png'
export const default_comments: UserComment[] = [
    {
        // comment id
        rPid: 3,
        // user info
        user: {
            uid: '13258165',
            avatar: 'images/doom.jpg',
            uname: 'Jay Zhou',
        },
        // comment content
        content: 'Nice, well done',
        // created datetime
        ctime: '10-18 08:15',
        like: 88,
    },
    {
        rPid: 2,
        user: {
            uid: '36080105',
            avatar: 'images/doom.jpg',
            uname: 'Song Xu',
        },
        content: 'I search for you thousands of times, from dawn till dusk.',
        ctime: '11-13 11:29',
        like: 88,
    },
    {
        rPid: 1,
        user: {
            uid: '30009257',
            avatar,
            uname: 'John',
        },
        content: 'I told my computer I needed a break... now it will not stop sending me vacation ads.',
        ctime: '10-19 09:00',
        like: 66,
    },
]

// current logged in user info
export const userInfo: User = {
    // userid
    uid: '30009257',
    // profile
    avatar,
    // username
    uname: 'John',
}

// Nav Tab
export const tabList: Tab[] = [
    { type: TAB_TYPE.HOT, text: 'Top' },
    { type: TAB_TYPE.NEWEST, text: 'Newest' },
]