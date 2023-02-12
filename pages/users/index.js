import Link from "next/link";
import { useEffect, useState } from "react";

export default function users() {
    
    // const [users, setUsers] = useState({});

    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/users') 
    //         .then(res => res.json())
    //         .then( data => setUsers(data))

    // },[])
    console.log(users);
    return (
        <div>
            {
                users.length &&
                users.map(user => <Link href={`users/${user.id}`}
                key={user.id}
                >
                    <h2>Name {user.id}: {user.name}</h2>
                    <hr />
                    <br />
                </Link>)
            }
        </div>
    );
}

// export async function getServerSideProps(ctx){
//     // const { params } = ctx;
//     const res = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await res.json();
//     return {
//         props:{
//             users:data
//         }
//     }
// }
