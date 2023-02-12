import Link from "next/link"

const Error404 = () => {
    return (
        <div style={{
            textAlign: "center",
            display: "flex",
            flexDirection: 'column',
            height: '100vh',
            alignItems: "center",
            justifyContent: 'center',
            // background: 'gray',
            fontSize: "30px"
        }}>
            <h2><span style={{color: 'red'}}>404</span> | Page Not found</h2>
            <Link href="/">
                <h2>Go to <span style={{ 'color': 'blue' }}>home</span> page</h2>
            </Link>
        </div>
    )
}

export default Error404