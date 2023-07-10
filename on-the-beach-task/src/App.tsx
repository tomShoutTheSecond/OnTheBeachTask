import React, { CSSProperties } from 'react';
import logo from './logo.svg';
import './App.css';
import { Util } from './Util';
import { SortingComponent } from './SortingComponent';
import { HolidayListComponent } from './HolidayListComponent';

function App() {

    let containerStyle : CSSProperties =
    {
        width: "100%",
        height: "100vh",
        backgroundImage: `url(${Util.getImageUrl("background.png")})`,
        backgroundSize: "auto 100%"
    }

    return (
        <div style={containerStyle}>
            <SortingComponent/>
            <HolidayListComponent/>
        </div>
    );
}

export default App;
