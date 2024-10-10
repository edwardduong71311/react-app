import './App.scss'
import avatar from './images/bozai.png'
import React, {useMemo, useState} from "react";
import dayjs from "dayjs";
import CommentComponent from "./CommentComponent";

interface User {
  uid: string;
  avatar: string;
  uname: string;
}

interface Comment {
  rPid: number;
  user: User;
  content: string;
  ctime: string;
  like: number;
}

enum TAB_TYPE {
  HOT='hot',
  NEWEST='newest',
}

interface Tab {
  type: TAB_TYPE;
  text: string;
}

// Comment List data
const default_comments: Comment[] = [
  {
    // comment id
    rPid: 3,
    // user info
    user: {
      uid: '13258165',
      avatar: '',
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
      avatar: '',
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
const userInfo: User = {
  // userid
  uid: '30009257',
  // profile
  avatar,
  // username
  uname: 'John',
}

// Nav Tab
const tabList: Tab[] = [
  { type: TAB_TYPE.HOT, text: 'Top' },
  { type: TAB_TYPE.NEWEST, text: 'Newest' },
]

const App = () => {
  // const commentRef = useRef<HTMLTextAreaElement>(null);
  const [loggedInUser] = useState<User>(userInfo);
  const [tabs] = useState<Tab[]>(tabList);
  const [tab, setTab] = useState<TAB_TYPE>(tabList[0].type);
  const [comments, setComments] = useState<Comment[]>(default_comments);
  const [text, setText] = useState<string>('');

  const sortComment = (type: TAB_TYPE) => {
    setTab(type);
  }

  const postComment = () => {
    const comment: Comment = {
      rPid: comments.length + 1,
      user: loggedInUser,
      content: text,
      ctime: dayjs().format('MM-DD HH:ss'),
      like: 0,
    }

    setComments([...comments, comment]);
    setText('');
    // commentRef?.current?.focus();
  }

  const commentsToRender: Comment[] = useMemo(() => {
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
              <img className="bili-avatar-img" src={avatar} alt="Profile"/>
            </div>
          </div>
          <CommentComponent text={text} onChange={setText} onPostComment={postComment}/>
          {/*<div className="reply-box-wrap">*/}
          {/*  /!* comment *!/*/}
          {/*  <textarea*/}
          {/*      ref={commentRef}*/}
          {/*      className="reply-box-textarea"*/}
          {/*      placeholder="tell something..."*/}
          {/*      value={text}*/}
          {/*      onChange={(event) => setText(event.target.value)}*/}
          {/*  />*/}
          {/*  /!* post button *!/*/}
          {/*  <div className="reply-box-send">*/}
          {/*    <div className="send-text" onClick={postComment}>post</div>*/}
          {/*  </div>*/}
          {/*</div>*/}
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

export default App