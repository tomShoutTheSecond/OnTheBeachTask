import { CSSProperties } from "react";
import { Util } from "./Util";

interface StarsProps
{
    starRating : number
}

export function Stars(props : StarsProps)
{
    let starsContainerStyle : CSSProperties =
    { 
        padding: "8px 15px 0px 15px"
    }

    let starImgStyle: CSSProperties =
    { 
        display: "inline-block", 
        width: "16px", 
        height: "16px" 
    }

    return (
        <div style={starsContainerStyle}>
            {[...Array(props.starRating)].map(((e, i) => 
                <img key={i} style={starImgStyle} src={Util.getImageUrl("icon-star-yellow.svg")} alt="star icon"/>))}
        </div>
    )
}