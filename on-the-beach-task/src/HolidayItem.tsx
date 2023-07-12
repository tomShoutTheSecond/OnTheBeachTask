import React, { CSSProperties } from "react";
import { Colors } from "./Colors";
import { Util } from "./Util";
import { Holiday } from "./Holiday";
import { State } from "./App";
import { StarsComponent } from "./StarsComponent";

interface HolidayItemProps
{
    index : number,
    holiday : Holiday,
    isSelected : boolean
}

export class HolidayItem extends React.Component<HolidayItemProps>
{
    render() {

        let containerStyle : CSSProperties = 
        {
            width: "774px", 
            background: Colors.white, 
            marginBottom: "32px"
        }

        let innerContainerStyle : CSSProperties = 
        {
            display: "flex", 
            position: "relative"
        }

        let imgStyle : CSSProperties = 
        {
            display: "inline-block", 
            verticalAlign: "top"
        }

        let detailsContainerStyle : CSSProperties = 
        {
            display: "inline-block", 
            verticalAlign: "top", 
            position: "relative", 
            width: "280px"
        }

        let titleStyle : CSSProperties =
        {
            padding: "16px 16px 0px 16px", 
            color: Colors.darkBlue, 
            fontWeight: "bold"
        }

        let locationStyle : CSSProperties =
        { 
            padding: "8px 16px 0px 16px", 
            color: Colors.grey 
        }

        let bookNowButtonStyle : CSSProperties = 
        { 
            backgroundColor: Colors.yellow, 
            color: Colors.darkBlue, 
            fontWeight: "bold", 
            padding: "12px", 
            margin: "16px", 
            borderRadius: "4px", 
            textAlign: "center", 
            position: "absolute", 
            bottom: 0, 
            left: 0, 
            right: 0 
        }

        let bookNowTextStyle : CSSProperties = 
        { 
            fontSize: "13px" 
        }

        let priceTextStyle : CSSProperties = 
        { 
            fontSize: "24px" 
        }

        let readMoreContainerStyle : CSSProperties = 
        { 
            background: Colors.white, 
            color: Colors.darkBlue, 
            position: "absolute", 
            display: "flex", 
            alignItems: "center", 
            padding: "8px 8px 8px 16px", 
            bottom: 0, 
            left: 0, 
            userSelect: "none" 
        }

        let chevronIconStyle : CSSProperties =
        {
            width: "32px", 
            height: "32px" 
        }

        let overviewContainerStyle : CSSProperties =
        { 
            display: this.props.isSelected ? "block" : "none", 
            padding: "16px" 
        }

        let overviewTitleStyle : CSSProperties =
        { 
            color: Colors.darkBlue, 
            fontWeight: "bold", 
            marginBottom: "8px" 
        }

        return (
            <div key={this.props.index} style={containerStyle}>
                <div style={innerContainerStyle}>
                    <img style={imgStyle} src={this.props.holiday.imageUrl} alt="hotel"/>
                    <div style={detailsContainerStyle}>
                        <p style={titleStyle} data-testid="holiday-name">{this.props.holiday.name}</p>
                        <p style={locationStyle}>{this.props.holiday.location}</p>
                        <StarsComponent starRating={this.props.holiday.starRating}/>
                        {this.getAttendeesText()}
                        {this.getDateText()}
                        {this.getDepartingFromText()}
                        <div style={bookNowButtonStyle}>
                            <p style={bookNowTextStyle}>Book now</p>
                            <p style={priceTextStyle}>{this.getPriceString(this.props.holiday.price)}</p>
                        </div>
                    </div>
                    <div style={readMoreContainerStyle} onClick={() => State.selectHoliday(this.props.isSelected ? -1 : this.props.index)}>
                        <p><b>Read more</b> about this hotel</p>
                        <img style={chevronIconStyle} src={this.props.isSelected ? Util.getImageUrl("icon-chevron-down.svg") : Util.getImageUrl("icon-chevron-right.svg")} alt="chevron icon"/>
                    </div>
                </div>
                <div style={overviewContainerStyle} data-testid="overview">
                    <p style={overviewTitleStyle}>Overview</p>
                    <p>{this.props.holiday.overview}</p>
                </div>
            </div>
        )
    }

    getAttendeesText()
    {
        let adultS = this.props.holiday.adults === 1 ? "" : "s";
        let children = this.props.holiday.children === 1 ? "child" : "children";
        let infantS = this.props.holiday.infants === 1 ? "" : "s";
        let infantText = this.props.holiday.infants === 0 ? "" : <span> & <b>{this.props.holiday.infants}</b> infant{infantS}</span>;
        return <p style={{ padding: "8px 16px 0px 16px", fontSize: "14px" }}><b>{this.props.holiday.adults}</b> Adult{adultS}, <b>{this.props.holiday.children}</b> {children}{infantText}</p>
    }

    getDateText()
    {
        let dayS = this.props.holiday.days === 1 ? "" : "s";
        return <p style={{ padding: "8px 16px 0px 16px", fontSize: "14px" }}><b>{this.props.holiday.date}</b> for <b>{this.props.holiday.days} day{dayS}</b></p>
    }

    getDepartingFromText()
    {
        return <p style={{ padding: "8px 16px 0px 16px", fontSize: "14px" }}>departing from <b>{this.props.holiday.departingFrom}</b></p>
    }

    getPriceString(price : number)
    {
        const formatter = new Intl.NumberFormat('en-GB', 
        {
            style: 'currency',
            currency: 'GBP',
        });
        
        return formatter.format(price); 
    }
}