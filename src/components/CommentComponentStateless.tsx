import React, {useRef} from "react";

type Prop = {
    text: string;
    onChange: Function;
    onPostComment: Function;
}
export default function CommentComponentStateless(props: Readonly<Prop>) {
    const commentRef = useRef<HTMLTextAreaElement>(null);

    return (<div className="reply-box-wrap">
        <textarea
            ref={commentRef}
            className="reply-box-textarea"
            placeholder="tell something..."
            value={props.text}
            onChange={(event) => props.onChange(event.target.value)}
        />
        <div className="reply-box-send">
            <button className="send-text" onClick={() => {
                props.onPostComment();
                commentRef?.current?.focus();
            }}>Post</button>
        </div>
    </div>)
}