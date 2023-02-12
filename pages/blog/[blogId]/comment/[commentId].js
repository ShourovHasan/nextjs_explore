import { useRouter } from "next/router";

const BlogDetails = () => {

    const router = useRouter();
    const commentId = router.query.commentId;
    console.log(commentId);
    return (
        <div>  
            <h1>This is Comment page for comment id: {commentId}</h1>
            {/* <h1>This is blog list page 2.</h1>
            <h1>This is blog list page 3.</h1>
            <h1>This is blog list page 4.</h1> */}
        </div>
    );
};

export default BlogDetails;