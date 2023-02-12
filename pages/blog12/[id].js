import Link from "next/link";
import { useRouter } from "next/router";

export default function Post({ data }) {
    // const router = useRouter();
    // postId = router.query.id;

    console.log(data);
    return (
        <div className="card bg-base-200 shadow-xl w-1/2 mx-auto mt-5">
            <div className="card-body">
                <h2 className="card-title">{data.title}</h2>
                <p>{data.body}</p>
                <div className="card-actions justify-end">
                    <Link href={`blog12/${data.id}`} passHref>
                        <button className="btn btn-primary">Show More</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export async function getStaticProps(ctx){
    const { params } = ctx;
    // console.log(ctx);
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
    const data = await res.json();
    return {
        props: {
            data: data,
        }
    }
}
export async function getStaticPaths(){
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const data = await res.json();
    
    const paths = data.map(post => {
        return {
            params: { id: `${post.id}` },
        }
    })

    return {
        paths: paths,
        fallback: false,
    }
    // return {
    //     paths: [{ params: { id: "1" } }],
    //     fallback: true,
    // }
}

// export async function getServerSideProps(ctx){
//     const { params } = ctx;
//     // console.log(ctx);
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
//     const data = await res.json();
//     return {
//         props: {
//             data: data,
//         }
//     }
// }


