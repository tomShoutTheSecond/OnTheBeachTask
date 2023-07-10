import React, { CSSProperties } from "react";
import { Colors } from "./Colors";
import { Util } from "./Util";

interface SortingComponentProps { }

interface SortingComponentState 
{
    sortType : SortType
}

type SortType = "alphabet" | "price" | "stars"; 

export class SortingComponent extends React.Component<SortingComponentProps, SortingComponentState>
{
    state : SortingComponentState = { sortType: "alphabet" };

    render(): React.ReactNode 
    {
        let containerStyle : CSSProperties =
        {
            width: "256px",
            padding: "64px",
            display: "inline-block"
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
                <div style={this.state.sortType == "alphabet" ? selectedStyle : unselectedStyle} onClick={() => this.setState({ sortType: "alphabet" })}>
                    <p>sort <b>alphabetically</b></p>
                    <img style={iconStyle} src={this.state.sortType == "alphabet" ? Util.getImageUrl("icon-alphabet-white.svg") : Util.getImageUrl("icon-alphabet-grey.svg")}/>
                </div>
                <div style={borderStyle}/>
                <div style={this.state.sortType == "price" ? selectedStyle : unselectedStyle} onClick={() => this.setState({ sortType: "price" })}>
                    <p>sort by <b>price</b></p>
                    <img style={iconStyle} src={this.state.sortType == "price" ? Util.getImageUrl("icon-price-white.svg") : Util.getImageUrl("icon-price-grey.svg")}/>
                </div>
                <div style={borderStyle}/>
                <div style={this.state.sortType == "stars" ? selectedStyle : unselectedStyle} onClick={() => this.setState({ sortType: "stars" })}>
                    <p>sort by <b>star rating</b></p>
                    <img style={iconStyle} src={this.state.sortType == "stars" ? Util.getImageUrl("icon-star-white.svg") : Util.getImageUrl("icon-star-grey.svg")}/>
                </div>
            </div>
        )
    }
}