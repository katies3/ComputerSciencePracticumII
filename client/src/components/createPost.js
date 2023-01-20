import { useState } from "react";
import axios from "axios";

export default function CreatePost() {
    const [post, setPost] = useState("");

    function handlePost(event) {
        setPost(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();

        const userID = window.localStorage.getItem("id");
        console.log("userID: " + userID);
        const postSend = {
            content: post,
            user: userID
        };

        console.log("content " + postSend.content);
        console.log("user " + postSend.user);
        axios
            .post(`http://localhost:3080/api/posts/create`, postSend)
            .then((res) => {
                console.log(res);
                window.location.reload();
            })
            .catch((error) => console.log(error.response.data));
    }

    return (
        <div className="container align-items-center justify-content-center">
            <form className="m-3" onSubmit={handleSubmit}>
                <div className="form-group m-3 text-start">
                    <h3>Create a Post:</h3>
                </div>
                <div className="form-group">
                    <textarea
                        className="form-control"
                        placeholder="What's on your mind?"
                        id="floatingTextarea"
                        onChange={(e) => handlePost(e)}
                    ></textarea>
                </div>
                <div className="d-grid gap-2 d-md-flex justify-content-md-end mt-3">
                    <button
                        className="btn btn-primary me-md-2"
                        type="button"
                        onClick={handleSubmit}
                    >
                        Submit
                    </button>
                    <button className="btn btn-danger" type="button">
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
}
