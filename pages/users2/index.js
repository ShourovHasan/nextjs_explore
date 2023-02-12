import Header from "@/components/Header";
import { useState } from "react";

export default function index() {
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState();
    const handleUsers = () => {
        fetch('/api/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }
    const handleAddUser= () => {
        fetch("/api/users", {
            method: 'POST',
            body: JSON.stringify({ user }),
            headers: { "content-Type": "application/json" },
        });
        handleUsers();
    }
    const handleDeleteBtn = (id) => {
        fetch(`/api/users/${id}`, {
            method: 'DELETE',
        })
        handleUsers();
    }
    return (
        <div className="flex flex-col items-center justify-center p-5 mx-auto mt-6 border border-red-500 rounded-lg w-fit">
            <div className="flex items-center mb-3">
                <input onChange={e => setUser(e.target.value)} className='mr-2 text-2xl border border-blue-500 rounded-md focus:border-red-500'></input>
                <button onClick={handleAddUser} className='btn'>Add User</button>
            </div>
            <div>
                <button onClick={handleUsers} className="mb-3 btn">Load data</button>
                {
                    users?.map(user => <div
                        key={user.id}
                        className='flex items-center justify-between mb-1'
                    >
                        <h2 className="font-bold">{user.id}. {user.name}</h2>
                        <button onClick={()=> handleDeleteBtn(user.id)} className='text-red-500 bg-white border btn btn-xs'>Delete</button>
                    </div>)
                }
            </div>
        </div>
    );
}

export async function getServerSideProps(ctx){


    return {
        props:{
            data:null
        }
    }
}
index.getLayout = function getLayout(page) {
    return (
        <>
            <Header/>
            {page}
        </>
    )
}