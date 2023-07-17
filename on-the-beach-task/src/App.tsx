import { CSSProperties, useState } from 'react';
import './App.css';
import { Util } from './Util';
import { SortingSection } from './SortingSection';
import { HolidayList } from './HolidayList';
import { HolidayProvider } from './HolidayProvider';
import { SortType } from './SortType';

function App()
{
    const [holidays, setHolidays] = useState(HolidayProvider.getHolidaysData());
    const [selectedHolidayIndex, setSelectedHolidayIndex] = useState(-1);
    const [sortType, setSortType] = useState<SortType>("price");

    const sortHolidays = (newSortType : SortType) =>
    {
        let newHolidays = holidays;

        switch(newSortType)
        {
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

    let containerStyle : CSSProperties =
    {
        width: "100%",
        height: "100vh"
    }

    let backgroundStyle : CSSProperties =
    {
        width: "100%",
        height: "100vh",
        position: "fixed",
        backgroundImage: `url(${Util.getImageUrl("background.png")})`,
        backgroundSize: "auto 100%",
        zIndex: -1
    }

    return (
        <div style={containerStyle}>
            <div style={backgroundStyle}/>
            <SortingSection sortType={sortType} sortHolidays={sortHolidays}/>
            <HolidayList holidays={holidays} selectedHolidayIndex={selectedHolidayIndex} setSelectedHolidayIndex={setSelectedHolidayIndex}/>
        </div>
    );
}

export default App;