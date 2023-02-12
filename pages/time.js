const time = ({ time }) => {
    return (
        <div>
            <h2>Time: {time}</h2>
        </div>
    )
}

export const getStaticProps = async (context) => {
    return {
        props: {
            time: new Date().toISOString(),
        },
        revalidate: 1,
    }
}

export default time
