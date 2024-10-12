import React, {createContext, ReactNode, useCallback, useContext, useEffect, useMemo, useState} from "react";
import {User, UserComment} from "../types/App.type";
import {getComments, getUserInfo} from "../data/lab6Data";


type CommentContextType = {
    loggedInUser: User | null;
    comments: UserComment[];
    addComment: (comment: UserComment) => void;
}
const CommentContext = createContext<CommentContextType>({
    loggedInUser: null,
    comments: [],
    addComment: () => {}
});

type Props = {
    children: ReactNode;
}
export default function CommentContextProvider(props: Readonly<Props>) {
    const [loggedInUser, setLoggedInUser] = useState<User | null>(null);
    const [comments, setComments] = useState<UserComment[]>([]);

    const addComment = useCallback((comment: UserComment) => {
        setComments([
            ...comments,
            comment
        ])
    }, [comments]);

    const init = (getCommentController: AbortController, getUserInfoController: AbortController) => {
        getComments(getCommentController.signal).then(data => {
            setComments(data);
        })
        getUserInfo(getUserInfoController.signal).then(data => {
            setLoggedInUser(data);
        })
    }

    useEffect(() => {
        const getCommentController = new AbortController();
        const getUserInfoController = new AbortController();
        init(getCommentController, getUserInfoController);
        return () => {
            getCommentController.abort();
            getUserInfoController.abort();
        }
    }, []);

    const value = useMemo(() => {
        return {
            loggedInUser,
            comments,
            addComment
        }
    }, [loggedInUser, addComment, comments]);

    return(
        <CommentContext.Provider value={value}>
            {props.children}
        </CommentContext.Provider>
    )
}

export const useCommentContext = () => useContext(CommentContext);