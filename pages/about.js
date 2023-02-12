import Link from "next/link";

const About = () => {
    return (
        <div>
            <h2>This is about page</h2> 
            <Link href="/">
                <h2>Go to Home Page</h2>
            </Link>
        </div>
    );
};

export default About;