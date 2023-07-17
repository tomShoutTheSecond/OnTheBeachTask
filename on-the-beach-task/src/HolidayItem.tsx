import styled from 'styled-components';
import { Holiday } from "./Holiday";
import { Stars } from "./Stars";
import { Colors } from "./Colors";
import { Util } from "./Util";

interface HolidayItemProps {
    index: number;
    holiday: Holiday;
    isSelected: boolean;
    setSelectedHolidayIndex: (index: number) => void;
}

const Container = styled.div`
    width: 774px;
    background: ${Colors.white};
    margin-bottom: 32px;
`;

const InnerContainer = styled.div`
    display: flex;
    position: relative;
`;

const Img = styled.img`
    display: inline-block;
    vertical-align: top;
`;

const DetailsContainer = styled.div`
    display: inline-block;
    vertical-align: top;
    position: relative;
    width: 280px;
`;

const Title = styled.p`
    padding: 16px 16px 0px 16px;
    color: ${Colors.darkBlue};
    font-weight: bold;
`;

const Location = styled.p`
    padding: 8px 16px 0px 16px;
    color: ${Colors.grey};
`;

const BookNowButton = styled.div`
    background-color: ${Colors.yellow};
    color: ${Colors.darkBlue};
    font-weight: bold;
    padding: 12px;
    margin: 16px;
    border-radius: 4px;
    text-align: center;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
`;

const BookNowText = styled.p`
    font-size: 13px;
`;

const PriceText = styled.p`
    font-size: 24px;
`;

const ReadMoreContainer = styled.div`
    background: ${Colors.white};
    color: ${Colors.darkBlue};
    position: absolute;
    display: flex;
    align-items: center;
    padding: 8px 8px 8px 16px;
    bottom: 0;
    left: 0;
    user-select: none;
`;

const ChevronIcon = styled.img`
    width: 32px;
    height: 32px;
`;

interface OverviewContainerProps {
    isSelected: boolean;
}

const OverviewContainer = styled.div<OverviewContainerProps>`
    display: ${props => props.isSelected ? 'block' : 'none'};
    padding: 16px;
`;

const OverviewTitle = styled.p`
    color: ${Colors.darkBlue};
    font-weight: bold;
    margin-bottom: 8px;
`;

export function HolidayItem(props: HolidayItemProps) {

    const getAttendeesText = () => {
        let adultS = props.holiday.adults === 1 ? "" : "s";
        let children = props.holiday.children === 1 ? "child" : "children";
        let infantS = props.holiday.infants === 1 ? "" : "s";
        let infantText = props.holiday.infants === 0 ? "" : <span> & <b>{props.holiday.infants}</b> infant{infantS}</span>;
        return <p style={{ padding: "8px 16px 0px 16px", fontSize: "14px" }}><b>{props.holiday.adults}</b> Adult{adultS}, <b>{props.holiday.children}</b> {children}{infantText}</p>
    }

    const getDateText = () => {
        let dayS = props.holiday.days === 1 ? "" : "s";
        return <p style={{ padding: "8px 16px 0px 16px", fontSize: "14px" }}><b>{props.holiday.date}</b> for <b>{props.holiday.days} day{dayS}</b></p>
    }

    const getDepartingFromText = () => {
        return <p style={{ padding: "8px 16px 0px 16px", fontSize: "14px" }}>departing from <b>{props.holiday.departingFrom}</b></p>
    }

    const getPriceString = (price : number) => {
        const formatter = new Intl.NumberFormat('en-GB', 
        {
            style: 'currency',
            currency: 'GBP',
        });
        
        return formatter.format(price); 
    }
    
    return (
        <Container key={props.index}>
            <InnerContainer>
                <Img src={props.holiday.imageUrl} alt="hotel" />
                <DetailsContainer>
                    <Title data-testid="holiday-name">{props.holiday.name}</Title>
                    <Location>{props.holiday.location}</Location>
                    <Stars starRating={props.holiday.starRating} />
                    {getAttendeesText()}
                    {getDateText()}
                    {getDepartingFromText()}
                    <BookNowButton>
                        <BookNowText>Book now</BookNowText>
                        <PriceText>{getPriceString(props.holiday.price)}</PriceText>
                    </BookNowButton>
                </DetailsContainer>
                <ReadMoreContainer onClick={() => props.setSelectedHolidayIndex(props.isSelected ? -1 : props.index)}>
                    <p><b>Read more</b> about this hotel</p>
                    <ChevronIcon src={props.isSelected ? Util.getImageUrl("icon-chevron-down.svg") : Util.getImageUrl("icon-chevron-right.svg")} alt="chevron icon" />
                </ReadMoreContainer>
            </InnerContainer>
            <OverviewContainer isSelected={props.isSelected} data-testid="overview">
                <OverviewTitle>Overview</OverviewTitle>
                <p>{props.holiday.overview}</p>
            </OverviewContainer>
        </Container>
    );
}
