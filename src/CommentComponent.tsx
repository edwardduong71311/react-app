import React, {useRef} from "react";

type Prop = {
    text: string;
    onChange: Function;
    onPostComment: Function;
}
export default function CommentComponent(props: Prop) {
    const commentRef = useRef<HTMLTextAreaElement>(null);

    return (<div className="reply-box-wrap">
        {/* comment */}
        <textarea
            ref={commentRef}
            className="reply-box-textarea"
            placeholder="tell something..."
            value={props.text}
            onChange={(event) => props.onChange(event.target.value)}
        />
        {/* post button */}
        <div className="reply-box-send">
            <div className="send-text" onClick={() => {
                props.onPostComment();
                commentRef?.current?.focus();
            }}>post</div>
        </div>
    </div>)
}