import { CSSProperties } from "react";
import { Colors } from "./Colors";
import { Util } from "./Util";
import { Holiday } from "./Holiday";
import { Stars } from "./Stars";

interface HolidayItemProps
{
    index : number,
    holiday : Holiday,
    isSelected : boolean,
    setSelectedHolidayIndex : (index : number) => void;
}

export function HolidayItem(props : HolidayItemProps)
{
    const getAttendeesText = () =>
    {
        let adultS = props.holiday.adults === 1 ? "" : "s";
        let children = props.holiday.children === 1 ? "child" : "children";
        let infantS = props.holiday.infants === 1 ? "" : "s";
        let infantText = props.holiday.infants === 0 ? "" : <span> & <b>{props.holiday.infants}</b> infant{infantS}</span>;
        return <p style={{ padding: "8px 16px 0px 16px", fontSize: "14px" }}><b>{props.holiday.adults}</b> Adult{adultS}, <b>{props.holiday.children}</b> {children}{infantText}</p>
    }

    const getDateText = () =>
    {
        let dayS = props.holiday.days === 1 ? "" : "s";
        return <p style={{ padding: "8px 16px 0px 16px", fontSize: "14px" }}><b>{props.holiday.date}</b> for <b>{props.holiday.days} day{dayS}</b></p>
    }

    const getDepartingFromText = () =>
    {
        return <p style={{ padding: "8px 16px 0px 16px", fontSize: "14px" }}>departing from <b>{props.holiday.departingFrom}</b></p>
    }

    const getPriceString = (price : number) =>
    {
        const formatter = new Intl.NumberFormat('en-GB', 
        {
            style: 'currency',
            currency: 'GBP',
        });
        
        return formatter.format(price); 
    }

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
        display: props.isSelected ? "block" : "none", 
        padding: "16px" 
    }

    let overviewTitleStyle : CSSProperties =
    { 
        color: Colors.darkBlue, 
        fontWeight: "bold", 
        marginBottom: "8px" 
    }

    return (
        <div key={props.index} style={containerStyle}>
            <div style={innerContainerStyle}>
                <img style={imgStyle} src={props.holiday.imageUrl} alt="hotel"/>
                <div style={detailsContainerStyle}>
                    <p style={titleStyle} data-testid="holiday-name">{props.holiday.name}</p>
                    <p style={locationStyle}>{props.holiday.location}</p>
                    <Stars starRating={props.holiday.starRating}/>
                    {getAttendeesText()}
                    {getDateText()}
                    {getDepartingFromText()}
                    <div style={bookNowButtonStyle}>
                        <p style={bookNowTextStyle}>Book now</p>
                        <p style={priceTextStyle}>{getPriceString(props.holiday.price)}</p>
                    </div>
                </div>
                <div style={readMoreContainerStyle} onClick={() => props.setSelectedHolidayIndex(props.isSelected ? -1 : props.index)}>
                    <p><b>Read more</b> about this hotel</p>
                    <img style={chevronIconStyle} src={props.isSelected ? Util.getImageUrl("icon-chevron-down.svg") : Util.getImageUrl("icon-chevron-right.svg")} alt="chevron icon"/>
                </div>
            </div>
            <div style={overviewContainerStyle} data-testid="overview">
                <p style={overviewTitleStyle}>Overview</p>
                <p>{props.holiday.overview}</p>
            </div>
        </div>
    )
}