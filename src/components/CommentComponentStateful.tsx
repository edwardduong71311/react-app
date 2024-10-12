import React, {useRef, useState} from "react";

type Prop = {
    onPostComment: Function;
}
export default function CommentComponentStateful(props: Readonly<Prop>) {
    const commentRef = useRef<HTMLTextAreaElement>(null);
    const [text, setText] = useState<string>('');

    return (<div className="reply-box-wrap">
        {/* comment */}
        <textarea
            ref={commentRef}
            className="reply-box-textarea"
            placeholder="tell something..."
            value={text}
            onChange={(event) => setText(event.target.value)}
        />
        {/* post button */}
        <div className="reply-box-send">
            <div className="reply-box-send">
                <button className="send-text" onClick={() => {
                    props.onPostComment(text);
                    setText('');
                    commentRef?.current?.focus();
                }}>Post
                </button>
            </div>
        </div>
    </div>)
}