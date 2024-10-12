import {UserComment} from "../types/App.type";
import React from "react";

export function CommentComponent(props: { comment: UserComment }) {
    return <div className="reply-list">
        <div className="reply-item">
            {/* profile */}
            <div className="root-reply-avatar">
                <div className="bili-avatar">
                    <img
                        className="bili-avatar-img"
                        alt=""
                        src={props.comment.user.avatar}
                    />
                </div>
            </div>

            <div className="content-wrap">
                {/* username */}
                <div className="user-info">
                    <div className="user-name">{props.comment.user.uname}</div>
                </div>
                {/* comment content */}
                <div className="root-reply">
                    <span className="reply-content">{props.comment.content}</span>
                    <div className="reply-info">
                        {/* comment created time */}
                        <span className="reply-time">{props.comment.ctime}</span>
                        {/* total likes */}
                        <span className="reply-time">Like: {props.comment.like}</span>
                        <span className="delete-btn">
                        Delete
                      </span>
                    </div>
                </div>
            </div>
        </div>
    </div>;
}