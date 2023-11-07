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

const HomePage = () => {
    const [search, setSearch] = useState<string>("");
    // const [photographer, setPhotographer] = useState(false)
    const [agree, setAgree] = useState(false)

    const router = useRouter()
        const handleClick = () => {
            router.push("/dashboard/social")
        }

    return (
        <Layout title="Terms and Conditions" background>
            <h3 className="font-bold capitalize text-lg text-justify">Lorem ipsum dolor sit amet.</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam, possimus. Numquam, perferendis voluptatem ea blanditiis aliquam, nulla harum illum natus nisi voluptates minus consectetur impedit magni cum dolore non maiores laudantium iusto? Molestias commodi corrupti inventore ipsa quibusdam laudantium minima autem iusto eveniet animi! Laudantium aut doloremque excepturi eum nam iste numquam enim ex accusantium ab velit a sapiente officia obcaecati quasi, beatae deserunt nemo! Beatae iure consectetur ut earum rem minima ducimus deserunt odit iste aut in, sit soluta, pariatur alias dolorum necessitatibus placeat laudantium. Animi aut recusandae labore possimus aperiam sunt architecto. Aliquam excepturi cum molestiae quam totam similique sequi eius possimus est sint inventore odit nesciunt reprehenderit obcaecati pariatur deserunt eos commodi earum, provident sed perferendis. Neque dignissimos veritatis quos cumque accusamus non reprehenderit minus officia corrupti. Commodi aperiam recusandae quaerat animi eos possimus assumenda suscipit amet ab quas cum soluta ipsam eius excepturi, porro aut voluptatem vel unde. In mollitia suscipit error ipsa autem. Debitis eum culpa earum ad, facere minima officiis dignissimos possimus necessitatibus. Porro aspernatur ipsam aliquid, omnis molestias optio! Rerum maxime suscipit temporibus autem accusamus perspiciatis earum consequatur assumenda laborum iure reiciendis, enim quos eaque, praesentium molestiae unde nostrum laboriosam repellat, rem quas.</p>
            <h3 className="font-bold capitalize text-lg my-3">Lorem ipsum dolor sit amet.</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam cum expedita architecto neque quae facilis iusto iure cumque, consectetur tenetur nihil reprehenderit vitae perferendis ipsum ea assumenda quidem quod? Sunt voluptas vel inventore officia incidunt eius nesciunt commodi reiciendis quisquam quasi excepturi maxime harum vero aliquid, necessitatibus nisi consequatur cum debitis. Deserunt dolore, voluptatem laboriosam et quasi tempora, consequuntur sed eligendi reiciendis nulla dignissimos asperiores libero voluptate doloremque nostrum doloribus vero cupiditate cum. Facere unde, a modi aliquid commodi ipsum.</p>
            <p className="mb-5" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta inventore, perferendis mollitia veniam odit illum! Doloremque, ut saepe laborum, dolorum nemo est odit, tempore natus culpa id tenetur voluptatum quasi consequatur esse officia sapiente iusto in assumenda sunt excepturi fuga beatae. Sapiente, libero. Voluptates praesentium harum fuga animi nihil explicabo?</p>
            <Checkbox
                label="I Agree To Enfoni Terms and Conditions"
                value={agree}
                onChange={() => setAgree(!agree)}
            />
            <button
                disabled={agree ? false : true}
                className="btn-purple btn-shadow w-56 lg:w-full h-14 my-10"
                type="submit"
                onClick={handleClick}
            >
                Continue
            </button>
        </Layout>
    );
};

export default HomePage;
