import {Post} from "../data/lab11Data";
import React from "react";
import {Link} from "react-router-dom";

type Props = {
    data: Post
}
export default function PostItem({ data } : Readonly<Props>) {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '0 15px 0',
            alignItems: 'center',
            gap: '10px',
            height: '40px',
            width: '500px',
            border: '1px solid black',
            borderRadius: '5px',
        }}>
            <div>{data.title}</div>
            <Link to={`/posts/${data.id}`}>View</Link>
        </div>
    )
}