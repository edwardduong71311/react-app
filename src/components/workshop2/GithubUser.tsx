type Props = {
    link: string;
    image: string;
    name: string;
}
export default function GithubUser({link, image, name}: Props) {
    return (<div className="card">
        <a href={link} target="_blank">
            <img src={image} style={{width: '100px'}}/>
        </a>
        <p className="card-text">{name}</p>
    </div>)
}