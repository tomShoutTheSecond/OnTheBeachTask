import React, { CSSProperties } from 'react';
import logo from './logo.svg';
import './App.css';
import { Util } from './Util';
import { SortingComponent } from './SortingComponent';
import { HolidayListComponent } from './HolidayListComponent';
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
    state : AppState = { holidays: HolidayProvider.getHolidaysData(), selectedHolidayIndex: -1, sortType: "alphabet" }

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
                <SortingComponent sortType={this.state.sortType}/>
                <HolidayListComponent holidays={this.state.holidays} selectedHolidayIndex={this.state.selectedHolidayIndex}/>
            </div>
        );
    }

    componentDidMount(): void 
    {
        State.app = this;
        
        State.sortHolidays("alphabet");
    }
}

export default App;