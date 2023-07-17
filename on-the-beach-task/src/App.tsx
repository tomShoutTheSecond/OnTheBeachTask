import React, { CSSProperties } from 'react';
import './App.css';
import { Util } from './Util';
import { SortingSection } from './SortingSection';
import { HolidayList } from './HolidayList';
import { Holiday } from './Holiday';
import { HolidayProvider } from './HolidayProvider';
import { SortType } from './SortType';

export class State
{
    static app : App;

    static sortHolidays(sortType : SortType)
    {
        let holidays = State.app.state.holidays;

        switch(sortType)
        {
            case "alphabet":
                holidays = holidays.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case "price":
                holidays = holidays.sort((a, b) => a.price - b.price);
                break;
            case "stars":
                holidays = holidays.sort((a, b) => a.starRating - b.starRating);
                break;
        }

        this.app.setState({ selectedHolidayIndex: -1, sortType: sortType, holidays: holidays });
    }

    static selectHoliday(index : number)
    {
        this.app.setState({ selectedHolidayIndex: index });
    }
}

interface AppProps { }

interface AppState
{
    holidays : Holiday[],
    selectedHolidayIndex : number,
    sortType : SortType
}

class App extends React.Component<AppProps, AppState>
{
    state : AppState = { holidays: HolidayProvider.getHolidaysData(), selectedHolidayIndex: -1, sortType: "price" }

    render() 
    {
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
                <SortingSection sortType={this.state.sortType}/>
                <HolidayList holidays={this.state.holidays} selectedHolidayIndex={this.state.selectedHolidayIndex}/>
            </div>
        );
    }

    componentDidMount(): void 
    {
        State.app = this;
        
        State.sortHolidays(this.state.sortType);
    }
}

export default App;