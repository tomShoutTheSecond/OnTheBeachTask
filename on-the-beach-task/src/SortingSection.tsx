import { CSSProperties } from "react";
import { Colors } from "./Colors";
import { Util } from "./Util";
import { SortType } from "./SortType";
import { State } from "./App";

interface SortingSectionProps 
{ 
    sortType : SortType    
}

export function SortingSection(props: SortingSectionProps)
{
    let containerStyle : CSSProperties =
    {
        width: "256px",
        padding: "64px",
        display: "inline-block",
        verticalAlign: "top"
    }

    let selectedStyle : CSSProperties =
    {
        color: Colors.white,
        background: Colors.darkBlue,
        padding: "16px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
    }

    let unselectedStyle = Util.copy(selectedStyle);
    unselectedStyle.color = Colors.darkBlue;
    unselectedStyle.background = Colors.white;

    let borderStyle : CSSProperties = 
    {
        height: "1px",
        background: Colors.darkBlue
    }

    let iconStyle : CSSProperties = 
    {
        width: "24px",
        height: "24px",
        float: "right"
    }

    return (
        <section style={containerStyle}>
            <div style={props.sortType === "alphabet" ? selectedStyle : unselectedStyle} onClick={() => State.sortHolidays("alphabet")}>
                <p>sort <b>alphabetically</b></p>
                <img style={iconStyle} src={props.sortType === "alphabet" ? Util.getImageUrl("icon-alphabet-white.svg") : Util.getImageUrl("icon-alphabet-grey.svg")} alt="icon alphabet"/>
            </div>
            <div style={borderStyle}/>
            <div style={props.sortType === "price" ? selectedStyle : unselectedStyle} onClick={() => State.sortHolidays("price")}>
                <p>sort by <b>price</b></p>
                <img style={iconStyle} src={props.sortType === "price" ? Util.getImageUrl("icon-price-white.svg") : Util.getImageUrl("icon-price-grey.svg")} alt="icon price"/>
            </div>
            <div style={borderStyle}/>
            <div style={props.sortType === "stars" ? selectedStyle : unselectedStyle} onClick={() => State.sortHolidays("stars")}>
                <p>sort by <b>star rating</b></p>
                <img style={iconStyle} src={props.sortType === "stars" ? Util.getImageUrl("icon-star-white.svg") : Util.getImageUrl("icon-star-grey.svg")} alt="icon star"/>
            </div>
        </section>
    )
}