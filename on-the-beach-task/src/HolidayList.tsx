import { CSSProperties } from "react";
import { Holiday } from "./Holiday";
import { HolidayItem } from "./HolidayItem";

interface HolidayListProps 
{ 
    holidays : Holiday[],
    selectedHolidayIndex : number
}

export function HolidayList(props : HolidayListProps)
{
    let holidays = props.holidays.map((holiday, index) => 
        <HolidayItem key={index} index={index} holiday={holiday} isSelected={props.selectedHolidayIndex === index}/>);

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