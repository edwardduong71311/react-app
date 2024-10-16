import {useEffect, useState} from "react";
import {getPostList, Post} from "../../data/lab11Data";
import PostItem from "../../components/PostItem";

export default function PostsList() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        setLoading(true);
        getPostList().then((data) => {
            setPosts(data);
        }).finally(() => {
            setLoading(false);
        });
    }, []);
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
        }}>
            {loading ? 'Loading' : posts.map(post => <PostItem key={post.id} data={post}/>)}
        </div>
    )
}