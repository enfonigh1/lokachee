import Link from "next/link";
import { useColorMode } from "@chakra-ui/color-mode";
import Image from "@/components/Image";

type TestProps = {
    className?: string;
    light?: boolean;
};

const Test = ({ className, light }: TestProps) => {
    const { colorMode } = useColorMode();
    const isDarkMode = colorMode === "dark";

    return (
        <Link className={`flex w-[7.125rem] ${className}`} href="/">
            <Image
                className="w-full h-auto"
                src={
                    light
                        ? "/images/lokachee.svg"
                        : isDarkMode
                            ? "/images/lokachee.svg"
                            : "/images/lokachee-black.svg"
                }
                width={113}
                height={25}
                alt="Lokachee"
                priority
            />
        </Link>
    );
};

export default Test;
