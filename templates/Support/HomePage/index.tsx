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

const HomePage = () => {
    const [search, setSearch] = useState<string>("");
    const [photographer, setPhotographer] = useState(false)
    const [editor, setEditor] = useState(false)
    const [worked, setWorked] = useState(false)


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
                {products.map((article) => (
                    <div className="w-[calc(33.333%-1.25rem)] mt-2.5 mx-2.5 2xl:w-[calc(50%-1.25rem)] md:w-full md:mx-0">

                        <Field
                            className="mb-4.5"
                            label={article?.title}
                            type="text"
                            placeholder={article?.content}
                            icon=""
                            // value={full_name}
                            // onChange={(e: any) => setFullName(e.target.value)}
                            required
                        />
                    </div>
                ))}
                <div className="w-[calc(33.333%-1.25rem)] mt-2.5 mx-2.5 2xl:w-[calc(50%-1.25rem)] md:w-full md:mx-0">

                    <Checkbox
                        label="I have worked with enfoni before"
                        value={worked}
                        onChange={() => setWorked(!editor)}
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
        </Layout>
    );
};

export default HomePage;
