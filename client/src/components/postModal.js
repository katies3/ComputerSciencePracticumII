import { useState } from "react";
import Comment from "../components/comment";
import ShowHideComment from "./showHideComment";
export default function PostModal(props) {
    //functions to handle modal display
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <button
                className="btn btn-info btn-sm"
                onClick={handleShow}
                style={{ float: "right" }}
            >
                See More
            </button>

            <div
                className="modal"
                style={{
                    display: show ? "block" : "none",
                    backgroundColor: "rgba(0, 0, 0, 0.6)"
                }}
            >
                <div
                    className="card"
                    style={{
                        width: "65%",
                        margin: "auto",
                        top: "25%"
                    }}
                >
                    <div className="modal-header">
                        <div className="modal-title">
                            <h4>Post Details</h4>
                        </div>
                        <button
                            className="btn btn-danger btn-sm"
                            onClick={handleClose}
                        >
                            X
                        </button>
                    </div>

                    <div className="modal-body" style={{ textAlign: "left" }}>
                        <div className="card-text">{props.content}</div>

                        <br />

                        <div style={{ display: "flex", alignItems: "center" }}>
                            <img
                                src="/images/upArrow.jpg"
                                height="15px"
                                width="15px"
                                alt=""
                            />{" "}
                            {props.upvotes}
                            <img
                                src="/images/downArrow.jpg"
                                height="15px"
                                width="15px"
                                alt=""
                                style={{ marginLeft: "5px" }}
                            />{" "}
                            {props.downvotes}
                        </div>

                        <div style={{ display: "flex", alignItems: "center" }}>
                            {props.user_id}
                        </div>

                        <div>
                            {console.log(props.comments)}
                            <Comment comments={props.comments} />
                        </div>
                        <ShowHideComment />
                    </div>
                </div>
            </div>
        </>
    );
}
