import React, { CSSProperties } from "react";
import { Colors } from "./Colors";
import { Util } from "./Util";
import { SortType } from "./SortType";
import { State } from "./App";

interface SortingComponentProps 
{ 
    sortType : SortType    
}

export class SortingComponent extends React.Component<SortingComponentProps>
{
    render(): React.ReactNode 
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
            <div style={containerStyle}>
                <div style={this.props.sortType == "alphabet" ? selectedStyle : unselectedStyle} onClick={() => State.sortHolidays("alphabet")}>
                    <p>sort <b>alphabetically</b></p>
                    <img style={iconStyle} src={this.props.sortType == "alphabet" ? Util.getImageUrl("icon-alphabet-white.svg") : Util.getImageUrl("icon-alphabet-grey.svg")}/>
                </div>
                <div style={borderStyle}/>
                <div style={this.props.sortType == "price" ? selectedStyle : unselectedStyle} onClick={() => State.sortHolidays("price")}>
                    <p>sort by <b>price</b></p>
                    <img style={iconStyle} src={this.props.sortType == "price" ? Util.getImageUrl("icon-price-white.svg") : Util.getImageUrl("icon-price-grey.svg")}/>
                </div>
                <div style={borderStyle}/>
                <div style={this.props.sortType == "stars" ? selectedStyle : unselectedStyle} onClick={() => State.sortHolidays("stars")}>
                    <p>sort by <b>star rating</b></p>
                    <img style={iconStyle} src={this.props.sortType == "stars" ? Util.getImageUrl("icon-star-white.svg") : Util.getImageUrl("icon-star-grey.svg")}/>
                </div>
            </div>
        )
    }
}