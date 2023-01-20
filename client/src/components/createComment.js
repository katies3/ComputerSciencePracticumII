import { useState } from "react";
import axios from "axios";

export default function CreateComment() {
    const [comment, setComment] = useState("");

    function handleComment(event) {
        setComment(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();

        console.log("Comment: " + comment);
        const userID = window.localStorage.getItem("id");
        const commentToSend = {
            comment: comment,
            user: userID
        };

        axios
            .post(`http://localhost:3080/api/comments/create`, commentToSend)
            .then((res) => {
                window.location.reload();
            })
            .catch((error) => {
                console.log(error.response.data);
            });
    }

    return (
        <div className="container align-items-center justify-content-center">
            <form className="m-3">
                <div className="form-group m-3 text-start">
                    <h3>Comment on this Post:</h3>
                </div>
                <div className="form-group">
                    <textarea
                        className="form-control"
                        placeholder="What's your comment?"
                        id="floatingTextarea"
                        value={comment}
                        onChange={(e) => handleComment(e)}
                    ></textarea>
                </div>
                <div className="d-grid gap-2 d-md-flex justify-content-md-end mt-3">
                    <button
                        className="btn btn-primary me-md-2"
                        onClick={handleSubmit}
                        type="button"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}
