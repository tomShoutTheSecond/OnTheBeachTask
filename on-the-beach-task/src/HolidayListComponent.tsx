import React, { CSSProperties } from "react";
import { Holiday } from "./Holiday";
import { HolidayProvider } from "./HolidayProvider";
import { Colors } from "./Colors";
import { Util } from "./Util";

interface HolidayListComponentProps { }

interface HolidayListComponentState 
{
    visibleHolidays : Holiday[]
}

export class HolidayListComponent extends React.Component<HolidayListComponentProps, HolidayListComponentState>
{
    state : HolidayListComponentState = { visibleHolidays: HolidayProvider.getHolidaysData() };

    render() 
    {
        let holidays = this.state.visibleHolidays.map((holiday, index) => 
        <div style={{ background: Colors.white, marginBottom: "32px", display: "flex" }}>
            <img style={{ display: "inline-block", verticalAlign: "top" }} src={holiday.imageUrl}/>
            <div style={{ display: "inline-block", verticalAlign: "top", position: "relative", width: "280px" }}>
                <p style={{ padding: "16px 16px 0px 16px", color: Colors.darkBlue, fontWeight: "bold" }}>{holiday.name}</p>
                <p style={{ padding: "8px 16px 0px 16px", color: Colors.grey }}>{holiday.location}</p>
                <div style={{ padding: "8px 15px 0px 15px" }}>
                    {[...Array(holiday.starRating)].map(((e, i) => 
                        <img style={{ display: "inline-block", width: "16px", height: "16px" }} src={Util.getImageUrl("icon-star-yellow.svg")}/>))}
                </div>
                {this.getAttendeesText(holiday)}
                {this.getDateText(holiday)}
                {this.getDepartingFromText(holiday)}
                <div style={{ backgroundColor: Colors.yellow, color: Colors.darkBlue, fontWeight: "bold", padding: "12px", margin: "16px", borderRadius: "4px", textAlign: "center", position: "absolute", bottom: 0, left: 0, right: 0 }}>
                    <p style={{ fontSize: "13px" }}>Book now</p>
                    <p style={{ fontSize: "24px" }}>{this.getPriceString(holiday.price)}</p>
                </div>
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