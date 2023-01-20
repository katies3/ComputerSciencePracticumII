import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../middleware/userProvider";
import axios from "axios";

export default function LoginForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [ErrMsg, setErrMsg] = useState("");
    const navigate = useNavigate();
    const { user, login } = useContext(UserContext);

    function handleUsername(event) {
        setUsername(event.target.value);
    }

    function handlePassword(event) {
        setPassword(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();

        console.log("Username: " + username);
        console.log("Password: " + password);

        const userToSend = {
            username: username,
            password: password
        };

        axios
            .post(`http://localhost:3080/api/users/login`, userToSend)
            .then((res) => {
                console.log("auth before: " + user.auth);

                login(username, res.data._id);
                console.log("auth after: " + user.auth);
                navigate("/home");
            })
            .catch(function (error) {
                console.log(error);
                setErrMsg(error.response.data.error);
            });
    }

    return (
        <div className="container d-flex align-items-center justify-content-center">
            <form className="m-3" onSubmit={handleSubmit}>
                <div className="form-group m-3">
                    <h3>Please enter the following information:</h3>
                </div>
                <div className="form-group mb-3 mx-4 has-validation">
                    <input
                        type="username"
                        className="form-control"
                        id="floatingInput"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => handleUsername(e)}
                    ></input>
                    <div> </div>
                </div>

                <div className="form-group mb-3 mx-4 has-validation">
                    <input
                        type="password"
                        className="form-control"
                        id="floatingPassword"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => handlePassword(e)}
                    ></input>
                </div>

                <div className="mt-3 mb-4 mx-4">
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </div>
                <div>
                    Don't have an account? <a href="/register">Sign Up</a>
                </div>
                {ErrMsg && (
                    <div
                        className="mt-3 mb-4 mx-4 alert alert-danger alert-dismissible fade show"
                        role="alert"
                    >
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="alert"
                            aria-label="Close"
                        ></button>

                        {ErrMsg}
                    </div>
                )}
            </form>
        </div>
    );
}
