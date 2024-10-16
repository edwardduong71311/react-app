import React, {useEffect, useState} from "react";
import {getPostById, Post} from "../../data/lab11Data";
import {Link, useParams} from "react-router-dom";

export default function PostDetails() {
    let { id } = useParams();

    const [post, setPost] = useState<Post | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        if (id) {
            setLoading(true);
            getPostById(parseInt(id)).then((data) => {
                setPost(data);
            }).finally(() => {
                setLoading(false);
            });
        }
    }, []);

    return <>
        {loading && 'Loading'}
        {!loading && (post == null ? 'Not found' : (
            <>
                <div>Title: {post.title}</div>
                <div>Content: {post.content}</div>
                <Link to={`/posts/${post.id}/edit`}>Edit</Link>
            </>
        ))}
    </>
}