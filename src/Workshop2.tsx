import './index-workshop2.css';
import {useState} from "react";
import axios from "axios";
import GithubUser from "./components/workshop2/GithubUser";
import UserInput from "./components/workshop2/UserInput";

type User = {
    avatar_url: string;
    html_url: string;
    id: number;
    login: string;
}
export default function WorkShop2() {
    const [username, setUsername] = useState<string>('');
    const [users, setUsers] = useState<User[]>([]);
    const [errorMsg, setErrorMsg] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);

    const getUser = () => {
        if (loading) {
            alert("Results are loading. Please wait!");
            return;
        }
        if (!username) {
            alert("Please input name");
            return;
        }

        setErrorMsg('');
        setLoading(true);
        setUsers([]);

        axios.get(`https://api.github.com/search/users?q=${username}`).then((response) => {
            if (response.status !== 200) {
                throw new Error();
            }
            setUsers(response.data.items)
        }).catch((e) => {
            setErrorMsg(e.message);
        }).finally(() => {
            setLoading(false);
        });
    }

    return (
        <div className="container">
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Search Github Users</h3>
                <div>
                    <UserInput username={username} setUsername={setUsername} onGetUser={getUser} />
                </div>
            </section>
            <div className="row">
                {!loading && errorMsg && <p>{errorMsg}</p>}
                {loading && <p>Loading...</p>}
                {!loading && users.map(user => (
                    <GithubUser key={user.id} link={user.html_url} image={user.avatar_url} name={user.login} />
                ))}
            </div>
        </div>
    );
}