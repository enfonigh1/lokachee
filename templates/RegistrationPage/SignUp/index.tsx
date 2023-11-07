import { useState } from "react";
import Field from "@/components/Field";
import Checkbox from "@/components/Checkbox";
import Select from "@/components/Select";
import axios from "axios";
import axiosinstance from "axios";
import Loading from "@/templates/Inbox/ChatPage/Chat/Question/Loading";
import Footer from "@/components/Footer";
import { Router, useRouter } from "next/router";

const countries = [
    {
        id: "0",
        title: "United States",
    },
    {
        id: "1",
        title: "Ukraine",
    },
    {
        id: "2",
        title: "France",
    },
];

type SignUpProps = {};

const SignUp = ({ }: SignUpProps) => {
    const [country, setCountry] = useState<any>(countries[0]);
    const [email, setEmail] = useState<string>("");
    const [full_name, setFullName] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState<string>("");
    const [agreeEmail, setAgreeEmail] = useState<boolean>(true);
    const [conditions, setConditions] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false)
    const router = useRouter()

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true)
        // console.log(full_name, email, password)
        try {
            const response = await axios.post("http://localhost:3001/api/v1/register", { email, password })
            console.log(response)
            setLoading(false)
            if (response?.data?.status === 200) {
                router.push("/onboarding")
            }
            else {
                setError(response?.data?.message.toLowerCase())
                setLoading(false)
            }

        } catch (error) {

            setLoading(false)
        }
    };

    return (
        <>
            <form action="" onSubmit={handleSubmit}>
                <div className="mb-1 text-h1">Sign up</div>
                <div className="mb-12 text-sm text-n-2 dark:text-white/50">
                    Before we start, please enter your current location
                </div>
                {error === "" ? <></> : <p className="text-white text-center bg-red-400/70 mb-3 py-2 rounded">{error}</p>}
                {/* <Field
                    className="mb-4.5"
                    label="Full Name"
                    type="text"
                    placeholder="Enter your Full name"
                    icon=""
                    value={full_name}
                    onChange={(e: any) => setFullName(e.target.value)}
                    required

                /> */}
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

                <button
                    className="btn-purple btn-shadow w-full h-14"
                    type="submit"
                >
                    {loading ? <Loading /> : "Create account"}
                </button>
            </form>
            <Footer />
        </>
    );
};

export default SignUp;
