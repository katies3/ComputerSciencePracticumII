import RegisterForm from "../components/registerForm";
import UnAuthNavBar from "../components/UnAuthNavBar";

export default function Register() {
    return (
        <>
            <UnAuthNavBar />
            <div className="container text-center">
                <RegisterForm />
            </div>
        </>
    );
}
