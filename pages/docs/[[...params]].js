import { useRouter } from "next/router";

const Document = () => {

    const router = useRouter();
    const paramS = router.query.params || [];
    // console.log(paramS);
    if (paramS.length == 2) {
        return (
            <h1>
                This page for {paramS[0]} and {paramS[1]}
            </h1>
        )
    }
    else if (paramS.length == 1) {
        return (
            <h1>
                This page for {paramS[0]}
            </h1>
        )
    }
    return (
        <div>
            <h1>This is Document page</h1>
        </div>
    );

};

export default Document;