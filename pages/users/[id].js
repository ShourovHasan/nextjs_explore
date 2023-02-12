import { useRouter } from "next/router";
import { useEffect, useState } from "react";
export default function user() {
    // const [user, setUser] = useState({});

    // const { id } = useRouter().query;

    // useEffect(() => {
    //     fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    //         .then(res => res.json())
    //         .then(data => setUser(data))

    // }, [id])

    console.log(user);
    
    return (
        <div>
            <h1>UserName: {user?.name}</h1>
            
        </div>
    );
}

// export async function getServerSideProps(ctx) {
//     // console.log(ctx);
//     // console.log(ctx.params);
//     const { params } = ctx;
//     const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
//     const data = await res.json();
//     return {
//         props:{
//             user: data
//         }
//     }
// }
