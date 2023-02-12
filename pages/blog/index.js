import Link from "next/link";
import { useRouter } from "next/router";

const index = ({ blogId = 400 }) => {

    // const router = useRouter();

    const handleClick = () => {
        // router.push("/about");
        // router.replace("/about");
    }
    return (
        <div>
            <h1>This is blog page.</h1>
            <Link href={`/blog/${blogId}`} replace>
                <h2>This is blog: {blogId}</h2>
            </Link>
            <button onClick={handleClick}>For Submitting</button>
        </div>
    );
};

export default index;