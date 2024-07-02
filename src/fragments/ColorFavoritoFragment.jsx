/*imports core */
import React, {useState} from "react";
import {Badge} from "reactstrap";

/* component view */
function ColorFavoritoFragment({color, datos}) {
    return (
        <>
        <h1>
            Color Favorito<Badge>{color}</Badge>
        </h1>
        </>
    )
}





export default ColorFavoritoFragment