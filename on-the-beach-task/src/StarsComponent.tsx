import React, { CSSProperties } from "react";
import { Util } from "./Util";

interface StarsComponentProps
{
    starRating : number
}

export class StarsComponent extends React.Component<StarsComponentProps>
{
    render()
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
                {[...Array(this.props.starRating)].map(((e, i) => 
                    <img key={i} style={starImgStyle} src={Util.getImageUrl("icon-star-yellow.svg")} alt="star icon"/>))}
            </div>
        )
    }
}