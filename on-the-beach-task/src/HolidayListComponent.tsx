import React, { CSSProperties } from "react";
import { Holiday } from "./Holiday";
import { HolidayProvider } from "./HolidayProvider";
import { Colors } from "./Colors";
import { Util } from "./Util";
import { State } from "./App";

interface HolidayListComponentProps 
{ 
    holidays : Holiday[],
    selectedHolidayIndex : number
}

export class HolidayListComponent extends React.Component<HolidayListComponentProps>
{
    render() 
    {
        let holidays = this.props.holidays.map((holiday, index) => 
        <div key={index} style={{ width: "774px", background: Colors.white, marginBottom: "32px" }}>
            <div style={{ display: "flex", position: "relative" }}>
                <img style={{ display: "inline-block", verticalAlign: "top" }} src={holiday.imageUrl}/>
                <div style={{ display: "inline-block", verticalAlign: "top", position: "relative", width: "280px" }}>
                    <p style={{ padding: "16px 16px 0px 16px", color: Colors.darkBlue, fontWeight: "bold" }} data-testid="holiday-name">{holiday.name}</p>
                    <p style={{ padding: "8px 16px 0px 16px", color: Colors.grey }}>{holiday.location}</p>
                    <div style={{ padding: "8px 15px 0px 15px" }}>
                        {[...Array(holiday.starRating)].map(((e, i) => 
                            <img key={i} style={{ display: "inline-block", width: "16px", height: "16px" }} src={Util.getImageUrl("icon-star-yellow.svg")}/>))}
                    </div>
                    {this.getAttendeesText(holiday)}
                    {this.getDateText(holiday)}
                    {this.getDepartingFromText(holiday)}
                    <div style={{ backgroundColor: Colors.yellow, color: Colors.darkBlue, fontWeight: "bold", padding: "12px", margin: "16px", borderRadius: "4px", textAlign: "center", position: "absolute", bottom: 0, left: 0, right: 0 }}>
                        <p style={{ fontSize: "13px" }}>Book now</p>
                        <p style={{ fontSize: "24px" }}>{this.getPriceString(holiday.price)}</p>
                    </div>
                </div>
                <div style={{ background: Colors.white, color: Colors.darkBlue, position: "absolute", display: "flex", alignItems: "center", padding: "8px 8px 8px 16px", bottom: 0, left: 0, userSelect: "none" }} onClick={() => State.selectHoliday(this.props.selectedHolidayIndex == index ? -1 : index)}>
                    <p><b>Read more</b> about this hotel</p>
                    <img style={{ width: "32px", height: "32px" }} src={this.props.selectedHolidayIndex == index ? Util.getImageUrl("icon-chevron-down.svg") : Util.getImageUrl("icon-chevron-right.svg")}/>
                </div>
            </div>
            <div style={{ display: this.props.selectedHolidayIndex == index ? "block" : "none", padding: "16px" }}>
                <p style={{ color: Colors.darkBlue, fontWeight: "bold", marginBottom: "8px" }}>Overview</p>
                <p>{holiday.overview}</p>
            </div>
        </div>);

        let containerStyle : CSSProperties = 
        {
            display: "inline-block",
            verticalAlign: "top",
            paddingTop: "64px"
        }

        return(
            <div style={containerStyle}>
                {holidays}
            </div>
        )
    }

    getAttendeesText(holiday : Holiday)
    {
        let adultS = holiday.adults == 1 ? "" : "s";
        let children = holiday.children == 1 ? "child" : "children";
        let infantS = holiday.infants == 1 ? "" : "s";
        let infantText = holiday.infants == 0 ? "" : <span> & <b>{holiday.infants}</b> infant{infantS}</span>;
        return <p style={{ padding: "8px 16px 0px 16px", fontSize: "14px" }}><b>{holiday.adults}</b> Adult{adultS}, <b>{holiday.children}</b> {children}{infantText}</p>
    }

    getDateText(holiday : Holiday)
    {
        let dayS = holiday.days == 1 ? "" : "s";
        return <p style={{ padding: "8px 16px 0px 16px", fontSize: "14px" }}><b>{holiday.date}</b> for <b>{holiday.days} day{dayS}</b></p>
    }

    getDepartingFromText(holiday : Holiday)
    {
        return <p style={{ padding: "8px 16px 0px 16px", fontSize: "14px" }}>departing from <b>{holiday.departingFrom}</b></p>
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