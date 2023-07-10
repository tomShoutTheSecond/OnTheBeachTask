import React, { CSSProperties } from "react";
import { Holiday } from "./Holiday";
import { HolidayProvider } from "./HolidayProvider";

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
        <div>
            {holiday.name}
        </div>);

        let containerStyle : CSSProperties = 
        {
            display: "inline-block"
        }

        return(
            <div style={containerStyle}>
                {holidays}
            </div>
        )
    }
}