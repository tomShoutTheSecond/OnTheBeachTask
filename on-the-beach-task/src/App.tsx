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
        switch(sortType)
        {
            case "alphabet":
                this.app.setState({ holidays: State.app.state.holidays.sort((a, b) => a.name.localeCompare(b.name)) });
                break;
            case "price":
                this.app.setState({ holidays: State.app.state.holidays.sort((a, b) => a.price - b.price) });
                break;
            case "stars":
                this.app.setState({ holidays: State.app.state.holidays.sort((a, b) => a.starRating - b.starRating) });
                break;
        }
    }
}

interface AppProps { }

interface AppState
{
    holidays : Holiday[]
}

class App extends React.Component<AppProps, AppState>
{
    state : AppState = { holidays: HolidayProvider.getHolidaysData() }

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
                <SortingComponent/>
                <HolidayListComponent holidays={this.state.holidays}/>
            </div>
        );
    }

    componentDidMount(): void 
    {
        State.app = this;    
    }
}

export default App;