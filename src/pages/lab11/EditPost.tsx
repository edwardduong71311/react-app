import {useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {getPostById, Post, savePostById} from "../../data/lab11Data";

export default function EditPost() {
    let { id } = useParams();

    const [post, setPost] = useState<Post | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [title, setTitle] = useState<string>('');
    const [content, setContent] = useState<string>('');

    const onSave = () => {
        if (!id) return;
        savePostById(parseInt(id), title, content).then(r => {
            alert("Saved");
        });
    }

    useEffect(() => {
        if (id) {
            setLoading(true);
            getPostById(parseInt(id)).then((data) => {
                setPost(data);
                if (data) {
                    setTitle(data.title);
                    setContent(data.content)
                }
            }).finally(() => {
                setLoading(false);
            });
        }
    }, []);

    return (
        <>
            {loading && 'Loading'}
            {!loading && (post == null ? 'Not found' : (
                <table>
                    <tbody>
                        <tr>
                            <td>Title</td>
                            <td><input value={title} onChange={(event) => setTitle(event.target.value)} /></td>
                            <td>Content</td>
                            <td><input value={content} onChange={(event) => setContent(event.target.value)} /></td>
                            <td><button onClick={onSave}>Save</button></td>
                        </tr>
                    </tbody>
                </table>
            ))}
        </>
    )
}