import { useState } from 'react';
import styled from 'styled-components';
import { Util } from './Util';
import { SortingSection } from './SortingSection';
import { HolidayList } from './HolidayList';
import { HolidayProvider } from './HolidayProvider';
import { SortType } from './SortType';

const Container = styled.div`
    width: 100%;
    height: 100vh;
`;

const Background = styled.div`
    width: 100%;
    height: 100vh;
    position: fixed;
    background-image: url(${Util.getImageUrl("background.png")});
    background-size: auto 100%;
    z-index: -1;
`;

function App() {
    const [holidays, setHolidays] = useState(HolidayProvider.getHolidaysData());
    const [selectedHolidayIndex, setSelectedHolidayIndex] = useState(-1);
    const [sortType, setSortType] = useState<SortType>("price");

    const sortHolidays = (newSortType: SortType) => {
        let newHolidays = holidays;

        switch (newSortType) {
            case "alphabet":
                newHolidays = holidays.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case "price":
                newHolidays = holidays.sort((a, b) => a.price - b.price);
                break;
            case "stars":
                newHolidays = holidays.sort((a, b) => a.starRating - b.starRating);
                break;
        }

        //hide holiday overviews
        setSelectedHolidayIndex(-1);

        //highlight the right sort button
        setSortType(newSortType);

        //update holidays list
        setHolidays(newHolidays)
    }

    return (
        <Container>
            <Background/>
            <SortingSection sortType={sortType} sortHolidays={sortHolidays}/>
            <HolidayList holidays={holidays} selectedHolidayIndex={selectedHolidayIndex} setSelectedHolidayIndex={setSelectedHolidayIndex}/>
        </Container>
    );
}

export default App;