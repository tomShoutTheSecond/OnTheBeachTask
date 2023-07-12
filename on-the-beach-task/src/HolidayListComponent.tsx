import React, { CSSProperties } from "react";
import { Holiday } from "./Holiday";
import { HolidayItem } from "./HolidayItem";

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
            <HolidayItem key={index} index={index} holiday={holiday} isSelected={this.props.selectedHolidayIndex === index}/>);

        let containerStyle : CSSProperties = 
        {
            display: "inline-block",
            verticalAlign: "top",
            paddingTop: "64px"
        }

        return(
            <section style={containerStyle}>
                {holidays}
            </section>
        )
    }
}