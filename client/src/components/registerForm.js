import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function CreateUser() {
    const [isShown, setShown] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [ErrMsg, setErrMsg] = useState("");
    const navigate = useNavigate();

    const togglePassword = () => {
        setShown(!isShown);
    };

    function handleUsername(event) {
        setUsername(event.target.value);
    }

    function handlePassword(event) {
        setPassword(event.target.value);
    }

    function handlePasswordConfirm(event) {
        setPasswordConfirm(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();

        const user = {
            username: username,
            password: password,
            password2: passwordConfirm
        };

        axios
            .post(`http://localhost:3080/api/users/register`, user)
            .then((res) => {
                console.log(res);
                console.log(res.data);
                navigate("/login");
            })
            .catch(function (error) {
                console.log(error);
                setErrMsg(error.response.data.error);
            });
    }

    const passwordsMatch =
        password !== "" &&
        passwordConfirm !== "" &&
        password === passwordConfirm;

    return (
        <div className="container d-flex align-items-center justify-content-center">
            <form className="color-me m-3 border" onSubmit={handleSubmit}>
                <div className="form-group m-3">
                    <h3>Create your GEO account to start your GEOurney:</h3>
                </div>
                <div className="form-group mb-3 mx-4 text-start">
                    <input
                        id="username"
                        type="username"
                        className="form-control"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => handleUsername(e)}
                    />
                </div>
                <div className="form-group mb-3 mx-4 text-start">
                    <input
                        id="password"
                        type={isShown ? "text" : "password"}
                        className="form-control"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => handlePassword(e)}
                    />
                </div>
                <div className="form-group mb-3 mx-4 text-start">
                    <input
                        id="password-confirm"
                        type={isShown ? "text" : "password"}
                        className="form-control"
                        placeholder="Confirm password"
                        value={passwordConfirm}
                        onChange={(e) => handlePasswordConfirm(e)}
                    />
                </div>
                <div className="form-check text-start mx-4 ">
                    <input
                        id="checkbox"
                        type="checkbox"
                        className="form-check-input"
                        checked={isShown}
                        onChange={togglePassword}
                    />
                    <label className="form-check-label">Show Password</label>
                </div>
                <div className="mt-3 mb-4 mx-4 text-start">
                    <button
                        disabled={!passwordsMatch}
                        type="submit"
                        className="btn btn-primary register-btn"
                    >
                        Submit
                    </button>
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
