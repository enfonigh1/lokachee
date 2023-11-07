import { useState } from "react";
import Layout from "@/components/Layout";
import Search from "@/components/Search";
import Article from "@/components/Article";
import Post from "./Post";

import { products, popularArticles } from "@/mocks/support";
import Field from "@/components/Field";
import Checkbox from "@/components/Checkbox";
import Attachments from "@/components/Details/Attachments";
import Icon from "@/components/Icon";
import { useRouter } from "next/router";
import axios from "axios";

const HomePage = () => {
    const [search, setSearch] = useState<string>("");
    const [photographer, setPhotographer] = useState(false)
    const [editor, setEditor] = useState(false)
    const [worked, setWorked] = useState(false)
    const [loading, setLoading] = useState<boolean>(false)
    const router = useRouter()
    const [details, setDetails] = useState(
        {
            full_name: "",
            editing: false,
            studio_name: "",
            photography: false,
            studio_location: "",
            phone_number: "",
            worked_with_us: false,
            accepted_terms: false,
        }
    )

    const handleChange = (e: any) => {
        const name = e.target.name
        const value = e.target.value
        setDetails({ ...details, [name]: value })
    }

    // 
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true)
        console.log(details, editor, photographer)
        try {
            const response = await axios.post("http://localhost:3001/api/v1/user/onboarding", { full_name: details.full_name, studio_name: details.studio_name, studio_location: details.studio_location, phone_number: details.phone_number, editing: editor, photography: photographer, worked_with_us: worked })
            console.log(response)
            setLoading(false)
            if (response?.data?.status === 200) {
                router.push("/onboarding-2")
            }
            else {
                // setError(response?.data?.message.toLowerCase())
            }

        } catch (error) {

            setLoading(false)
        }
    };


    return (
        <Layout title="Onboarding" background>
            <div className="max-w-[41.25rem] w-full mx-auto mb-18 pt-12 md:mb-10 md:pt-6">
                <div className="mb-6 text-center text-h1 md:text-h3">
                    Let's get you onboard
                </div>
                {/* <Search
                    className="mb-3.5"
                    placeholder="Search help articles"
                    value={search}
                    onChange={(e: any) => setSearch(e.target.value)}
                    onSubmit={() => console.log("Submit")}
                    large
                /> */}
                <div className="text-center">
                    Please fill out all <strong>required</strong> fields
                </div>
            </div>
            <form action="" onSubmit={handleSubmit}>
                <div className="mb-5 text-sm font-bold">What would you like to do?</div>
                <div className="w-[calc(33.333%-1.25rem)] mt-2.5 mx-2.5 2xl:w-[calc(50%-1.25rem)] md:w-full md:mx-0 flex space-x-4 mb-5">

                    <Checkbox
                        label="Photography"
                        value={photographer}
                        onChange={() => setPhotographer(!photographer)}
                    />
                    <Checkbox
                        label="Photo editing"
                        value={editor}
                        onChange={() => setEditor(!editor)}
                    />



                </div>
                <div className="flex flex-wrap -mt-2.5 -mx-2.5 mb-8 md:block md:mx-0">

                    <div className="w-[calc(33.333%-1.25rem)] mt-2.5 mx-2.5 2xl:w-[calc(50%-1.25rem)] md:w-full md:mx-0">
                        <Field
                            className="mb-4.5"
                            label="Full Name"
                            type="text"
                            placeholder="Please enter full name"
                            icon=""
                            name="full_name"
                            value={details.full_name}
                            onChange={(e: any) => setDetails({ ...details, full_name: e.target.value })}
                            required
                        />
                    </div>
                    <div className="w-[calc(33.333%-1.25rem)] mt-2.5 mx-2.5 2xl:w-[calc(50%-1.25rem)] md:w-full md:mx-0">
                        <Field
                            className="mb-4.5"
                            label="Studio Name"
                            type="text"
                            name="studio_name"
                            placeholder="Please enter full name"
                            icon=""
                            value={details?.studio_name}
                            onChange={(e: any) => setDetails({ ...details, studio_name: e.target.value })}
                            required
                        />
                    </div>
                    <div className="w-[calc(33.333%-1.25rem)] mt-2.5 mx-2.5 2xl:w-[calc(50%-1.25rem)] md:w-full md:mx-0">
                        <Field
                            className="mb-4.5"
                            label="Studio Location"
                            type="text"
                            placeholder="Please enter full name"
                            name="studio_location"
                            icon=""
                            value={details?.studio_location}
                            onChange={(e: any) => setDetails({ ...details, studio_location: e.target.value })}
                            required
                        />
                    </div>
                    <div className="w-[calc(33.333%-1.25rem)] mt-2.5 mx-2.5 2xl:w-[calc(50%-1.25rem)] md:w-full md:mx-0">
                        <Field
                            className="mb-4.5"
                            label="Phone Number"
                            type="text"
                            name="phone_number"
                            placeholder="Please enter full name"
                            icon=""
                            value={details?.phone_number}
                            onChange={(e: any) => setDetails({ ...details, phone_number: e.target.value })}
                            required
                        />
                    </div>

                    <div className="w-[calc(33.333%-1.25rem)] mt-2.5 mx-2.5 2xl:w-[calc(50%-1.25rem)] md:w-full md:mx-0">

                        <Checkbox
                            label="I have worked with enfoni before"
                            value={worked}
                            onChange={() => setWorked(!worked)}
                        />
                    </div>
                </div>
                <div className="mb-5 text-sm font-bold">To help review your work upload the following client photos</div>
                <div className="flex flex-wrap -mt-2.5 -mx-2.5 lg:block lg:mx-0">
                    {popularArticles.map((article) => (
                        <Post item={article} key={article.id} />
                    ))}
                </div>
                <button
                    className="btn-purple btn-shadow lg:w-full w-48 h-14 my-8"
                    type="submit"

                >
                    Submit
                </button>
            </form>
        </Layout>
    );
};

export default HomePage;
