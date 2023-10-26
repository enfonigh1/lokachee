import Link from "next/link";
import Icon from "@/components/Icon";

type PostProps = {
    item: any;
};

const Post = ({ item }: PostProps) => (
    <div
        className="flex flex-col items-start w-[calc(33.333%-1.25rem)] mt-2.5 mx-2.5 p-5 card transition-colors hover:border-purple-1 hover:text-purple-1 lg:w-full lg:mx-0"

    >
        <div className="min-w-[7.25rem] mb-3.5 label-stroke text-center text-n-1">
            {item.category}
        </div>
        <div className="mb-1 text-h6">{item.title}</div>
        <div className="relative flex flex-col justify-center items-center border-none self-center w-24 h-24 mt-3 ml-3 border border-n-1 text-xs font-bold md:w-full md:flex-row md:h-8 md:mx-1 dark:border-white">
            <input className="absolute cursor-pointer inset-0 opacity-0 top-0 right-0 left-0 bottom-0" type="file" />
            <Icon
                className="icon-18 mb-2 md:mb-0 md:mr-3 dark:fill-white"
                name="upload"
            />
            Upload
        </div>
        <div className="flex self-center items-center mt-auto text-xs font-bold text-n-1 dark:text-white">
            {/* <Icon className="mr-1.5 dark:fill-white" name="arrow-next" /> */}
            {item.size}
        </div>
    </div>
);

export default Post;
