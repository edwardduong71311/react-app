import './App.scss'
import React, {useMemo, useState} from "react";
import dayjs from "dayjs";
import CommentComponentStateful from "./components/CommentComponentStateful";
import {Tab, TAB_TYPE, UserComment} from "./types/App.type";
import {CommentComponent} from "./components/CommentComponent";
import {useCommentContext} from "./context/CommentContext";
import {tabList} from "./data/lab6Data";

export default function AppLab8() {
  const { loggedInUser, comments, addComment } = useCommentContext();
  const [tabs] = useState<Tab[]>(tabList);
  const [tab, setTab] = useState<TAB_TYPE>(tabList[0].type);

  const sortComment = (type: TAB_TYPE) => {
    setTab(type);
  }

  const postComment = (text: string) => {
    if (!loggedInUser) return;

    console.log(text)

    const comment: UserComment = {
      rPid: comments.length + 1,
      user: loggedInUser,
      content: text,
      ctime: dayjs().format('MM-DD HH:ss'),
      like: 0,
    }
    addComment(comment);
  }

  const commentsToRender: UserComment[] = useMemo(() => {
    if (tab === TAB_TYPE.HOT) {
      return comments.sort((a, b) => {
        if (a.like !== b.like) {
          return b.like - a.like
        } else {
          return b.ctime.localeCompare(a.ctime);
        }
      });
    } else {
      return comments.sort((a, b) => b.ctime.localeCompare(a.ctime));
    }
  }, [comments, tab]);

  return (
    <div className="app">
      {/* Nav Tab */}
      <div className="reply-navigation">
        <ul className="nav-bar">
          <li className="nav-title">
            <span className="nav-title-text">Comments</span>
            <span className="total-reply">{comments.length}</span>
          </li>
          <li className="nav-sort">
            {
              tabs.map(item => (
                  <span
                      key={item.type}
                      onClick={() => sortComment(item.type)}
                      className={`nav-item ${tab === item.type && 'active'}`}
                  >{item.text}</span>
              ))
            }
          </li>
        </ul>
      </div>

      <div className="reply-wrap">
        {/* comments */}
        <div className="box-normal">
          {/* current logged in user profile */}
          <div className="reply-box-avatar">
            <div className="bili-avatar">
              <img className="bili-avatar-img" src={loggedInUser ? loggedInUser.avatar : ''} alt="Profile"/>
            </div>
          </div>
          <CommentComponentStateful onPostComment={postComment}/>
        </div>
        {/* comment list */}
        {
          commentsToRender.map(comment => {
            return (
                <CommentComponent key={comment.rPid} comment={comment}/>
            )
          })
        }
      </div>
    </div>
  )
}