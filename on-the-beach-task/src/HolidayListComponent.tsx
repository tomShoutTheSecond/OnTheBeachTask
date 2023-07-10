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
        <div style={{ background: Colors.white, marginBottom: "32px" }}>
            <img style={{ display: "inline-block", verticalAlign: "top" }} src={holiday.imageUrl}/>
            <div style={{ display: "inline-block", verticalAlign: "top" }}>
                <p style={{ padding: "16px 16px 0px 16px", color: Colors.darkBlue, fontWeight: "bold" }}>{holiday.name}</p>
                <p style={{ padding: "8px 16px 0px 16px", color: Colors.grey }}>{holiday.location}</p>
                <div style={{ padding: "8px 15px 0px 15px" }}>
                    {[...Array(holiday.starRating)].map(((e, i) => 
                        <img style={{ display: "inline-block", width: "16px", height: "16px" }} src={Util.getImageUrl("icon-star-yellow.svg")}/>))}
                </div>
                {this.getAttendeesText(holiday)}
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
}