import { useState } from "react";
import Field from "@/components/Field";
import Checkbox from "@/components/Checkbox";
import Icon from "@/components/Icon";
import axios from "axios";
import Loading from "@/templates/Inbox/ChatPage/Chat/Question/Loading";
import { useRouter } from "next/router";

type SignInProps = {
    onRecover: () => void;
    onLoginQr: () => void;
};


const SignIn = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [remember, setRemember] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false)
    const router = useRouter()
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true)

        try {
            const response = await axios.post("http://localhost:3001/api/v1/signin", { email, password })
            console.log(response)
            setLoading(false)
            if (response?.data?.status === 200 && response?.data?.onboarded === false) {
                router.push("/onboarding")
            } else if (response?.data?.status === 200 && response?.data?.onboarded === true) {
                router.push("/dashboard/social")
            }

        } catch (error) {

            setLoading(false)
        }
    };

    return (
        <>
            <form action="" onSubmit={handleSubmit}>
                <div className="mb-1 text-h1">Sign in</div>
                <div className="mb-12 text-sm text-n-2 dark:text-white/50">
                    Enter your account details
                </div>
                <Field
                    className="mb-4.5"
                    label="Email"
                    type="email"
                    placeholder="Enter your email"
                    icon="email"
                    value={email}
                    onChange={(e: any) => setEmail(e.target.value)}
                    required
                />
                <Field
                    className="mb-6.5"
                    label="Password"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e: any) => setPassword(e.target.value)}
                    required
                />
                <div className="flex justify-between items-center mb-6.5">
                    <Checkbox
                        label="Remember me"
                        value={remember}
                        onChange={() => setRemember(!remember)}
                    />
                    <button
                        className="mt-0.5 text-xs font-bold transition-colors hover:text-purple-1"
                    // onClick={onRecover}
                    >
                        Recover password
                    </button>
                </div>
                <button
                    className="btn-purple btn-shadow w-full h-14"
                    type="submit"
                >
                    {loading ? <Loading /> : "Sing in"}
                </button>

            </form>
        </>
    );
};

export default SignIn;
