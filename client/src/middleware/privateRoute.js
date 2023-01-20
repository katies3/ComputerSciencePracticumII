import { useContext } from "react";
import { UserContext } from "./userProvider";
import { useNavigate } from "react-router-dom";

export default function PrivateRoute({ props }) {
    const { user } = useContext(UserContext);
    const navigate = useNavigate();
    if (user.auth === undefined) {
        return null;
    }

    return user.auth ? props : navigate("/login");
}
