import Image from "next/image";
import Link from "next/link";

export default function PostList({ data }) {
    console.log(data);
    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-6 md:gap-3 m-5">
            {
                data.map(post =>
                    <div key={post.id} className="card bg-base-200 shadow-xl">
                        {/* <figure>
                            <img src={dt.thumbnailUrl} alt="Shoes" />
                        </figure> */}
                        
                        <div className="card-body">
                            <h2 className="card-title">{post.title}</h2>
                            <p>{post.body}</p>
                            <div className="card-actions justify-end">
                                <Link href={`blog12/${post.id}`} passHref>
                                    <button className="btn btn-primary">Show More</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
}

export async function getServerSideProps(ctx){
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    return {
        props:{
            // data: data.slice(0, 3),
            data: data,
        }
    }
}
