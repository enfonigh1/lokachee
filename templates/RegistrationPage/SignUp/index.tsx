import { useState } from "react";
import Field from "@/components/Field";
import Checkbox from "@/components/Checkbox";
import Select from "@/components/Select";

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

const SignUp = ({}: SignUpProps) => {
    const [country, setCountry] = useState<any>(countries[0]);
    const [email, setEmail] = useState<string>("");
    const [full_name, setFullName] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [agreeEmail, setAgreeEmail] = useState<boolean>(true);
    const [conditions, setConditions] = useState<boolean>(false);

    return (
        <>
            <form action="" onSubmit={() => console.log("Submit")}>
                <div className="mb-1 text-h1">Sign up</div>
                <div className="mb-12 text-sm text-n-2 dark:text-white/50">
                    Before we start, please enter your current location
                </div>
              
                <Field
                    className="mb-4.5"
                    label="Full Name"
                    type="text"
                    placeholder="Enter your Full name"
                    icon=""
                    value={full_name}
                    onChange={(e: any) => setFullName(e.target.value)}
                    required
                />
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
                    Create account
                </button>
            </form>
        </>
    );
};

export default SignUp;
