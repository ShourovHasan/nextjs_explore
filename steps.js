/* 
    --For Dynamic Folder name [commentId].js
    const router = useRouter();
    const commentId = router.query.commentId;
    console.log(commentId);

    -------------------------------------
    --next js routing (catch all routes)
    // [...params].js
    [[...params]].js

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

    -------------------------------------

    -------------------------------------

    -------------------------------------
    
    -------------------------------------
    
    -------------------------------------

    -------------------------------------

    -------------------------------------
    
    -------------------------------------









*/