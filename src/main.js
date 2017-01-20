import React from 'react';
import ReactDOM from 'react-dom';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';

BigCalendar.setLocalizer(
    BigCalendar.momentLocalizer(moment)
);

document.addEventListener('DOMContentLoaded', function () {
    ReactDOM.render(
    <div style={{height:'600px'}}>
        <BigCalendar events={[]} defaultView="week" />
    </div>,
        document.getElementById('root')
    );
});


