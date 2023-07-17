import { Holiday } from "./Holiday";
import { HolidayItem } from "./HolidayItem";
import { styled } from "styled-components";

interface HolidayListProps { 
    holidays : Holiday[],
    selectedHolidayIndex : number,
    setSelectedHolidayIndex : (index : number) => void;
}

const Container = styled.section`
    display: inline-block;
    vertical-align: top;
    padding-top: 64px
`;

export function HolidayList(props : HolidayListProps) {
    let holidays = props.holidays.map((holiday, index) => 
        <HolidayItem key={index} index={index} setSelectedHolidayIndex={props.setSelectedHolidayIndex} holiday={holiday} isSelected={props.selectedHolidayIndex === index}/>);

    return(
        <Container>
            {holidays}
        </Container>
    )
}