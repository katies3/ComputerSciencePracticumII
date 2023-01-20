import { useState } from "react";
import CreatePost from "./createPost";

export default function ShowHidePost() {
    const [isShown, setIsShown] = useState(false);
    const handleClick = (event) => {
        setIsShown((current) => !current);
    };

    return (
        <>
            <div className="d-flex align-items-center justify-content-center">
                <button
                    className="btn btn-primary"
                    type="button"
                    onClick={handleClick}
                >
                    Create a post!
                </button>
            </div>
            {isShown && <CreatePost />}
        </>
    );
}
