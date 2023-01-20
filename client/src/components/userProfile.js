import { Link } from "react-router-dom";

export default function UserProfile(props) {
    const name = props.name;
    const date = props.date;
    const posts = props.posts;
    return (
        <div className="container d-flex justify-content-center p-3 color-me">
            <img
                src="/images/avatar.png"
                height="120"
                width="120"
                className="border rounded-circle"
                alt="Your avatar."
            />
            <div className="ml-auto p-3">
                <Link to="/profile">
                    <h4>{name}</h4>
                </Link>
                <p className="text-left">
                    Joined: {date}
                    <br />
                    Posts: {posts}
                </p>
            </div>
        </div>
    );
}
