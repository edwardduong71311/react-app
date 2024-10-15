type Props = {
    username: string;
    setUsername: (value: string) => void;
    onGetUser: () => void;
}
export default function UserInput({username, setUsername, onGetUser}: Props) {
    return (
        <>
            <input
                type="text"
                placeholder="enter the name you search"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                onKeyDown={(event) => {
                    if (event.key === 'Enter') {
                        onGetUser();
                    }
                }}/>
            <button onClick={onGetUser}>Search</button>
        </>
    )
}