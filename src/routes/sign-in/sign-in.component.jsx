import { signInWithPopup } from "firebase/auth";
import { SignInWithGooglePopup } from "../../../utils/firebase/firebase.utils";

const SignIn = () => {
    const logGoogleUser = async () => {
        const response = await signInWithPopup();
    }
    return (
        <div>
            <h1>Sign in Page</h1>
            <button onClick={logGoogleUser}></button>
        </div>
    )
};

export default SignIn;