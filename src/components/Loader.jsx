import React from "react";

function Loader({ loading }) {
    return (
        <>
            {loading && (<div class="loader" > <div class="load-circle"></div></div>)}
        </>
    )
}

export default Loader