import './App.scss'
import React, {useMemo, useState} from "react";
import dayjs from "dayjs";
import CommentComponentStateful from "./CommentComponentStateful";
import {Tab, TAB_TYPE, User, UserComment} from "./types/App.type";
import {default_comments, tabList, userInfo} from "./data/lab6Data";


export default function AppLab6_2() {
  const [loggedInUser] = useState<User>(userInfo);
  const [tabs] = useState<Tab[]>(tabList);
  const [tab, setTab] = useState<TAB_TYPE>(tabList[0].type);
  const [comments, setComments] = useState<UserComment[]>(default_comments);

  const sortComment = (type: TAB_TYPE) => {
    setTab(type);
  }

  const postComment = (text: string) => {
    const comment: UserComment = {
      rPid: comments.length + 1,
      user: loggedInUser,
      content: text,
      ctime: dayjs().format('MM-DD HH:ss'),
      like: 0,
    }

    setComments([...comments, comment]);
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
              <img className="bili-avatar-img" src={loggedInUser.avatar} alt="Profile"/>
            </div>
          </div>
          <CommentComponentStateful onPostComment={postComment}/>
        </div>
        {/* comment list */}
        {
          commentsToRender.map(comment => {
            return (
                <div key={comment.rPid} className="reply-list">
                  <div className="reply-item">
                    {/* profile */}
                    <div className="root-reply-avatar">
                      <div className="bili-avatar">
                        <img
                            className="bili-avatar-img"
                            alt=""
                            src={comment.user.avatar}
                        />
                      </div>
                    </div>

                    <div className="content-wrap">
                      {/* username */}
                      <div className="user-info">
                        <div className="user-name">{comment.user.uname}</div>
                      </div>
                      {/* comment content */}
                      <div className="root-reply">
                        <span className="reply-content">{comment.content}</span>
                        <div className="reply-info">
                          {/* comment created time */}
                          <span className="reply-time">{comment.ctime}</span>
                          {/* total likes */}
                          <span className="reply-time">Like: {comment.like}</span>
                          <span className="delete-btn">
                        Delete
                      </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            )
          })
        }
      </div>
    </div>
  )
}