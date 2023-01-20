import { useState } from "react";
import CreateComment from "./createComment";

export default function ShowHideComment() {
    const [isShown, setIsShown] = useState(false);
    const handleClick = (event) => {
        setIsShown((current) => !current);
    };

    return (
        <>
            <div className="d-flex align-items-center justify-content-center">
                <button className="btn btn-primary" onClick={handleClick}>
                    Leave a comment!
                </button>
            </div>
            {isShown && <CreateComment />}
        </>
    );
}
