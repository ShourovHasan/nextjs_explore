export default function BlogPage() {
    return (
        <div>
            Enter
        </div>
    );
}

export async function getStaticPaths() {


    return {
        paths:[],
        fallback:false
    }
}
export async function getStaticProps(ctx){


    return {
        props:{
            data:null
        }
    }
}
