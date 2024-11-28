/* import React, { useState, useEffect } from 'react';
import '../css/style.css';

const Calendar = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [daysInMonth, setDaysInMonth] = useState([]);
    const [startDate, setStartDate] = useState(0); 
    const [selectedDate, setSelectedDate] = useState(null);

    useEffect(() => {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();
        const date = new Date(year, month, 1);
        const days = [];

        while (date.getMonth() === month) {
            days.push(new Date(date));
            date.setDate(date.getDate() + 1);
        }

        setDaysInMonth(days);
        setStartDate(new Date(year, month, 1).getDay());  
    }, [currentDate]);

    const dayNames = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

    const prevMonth = () => {
        setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() - 1)));
    }

    const nextMonth = () => {
        setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() + 1)));
    }

    const handleDateClick = (date) => {
        setSelectedDate(date);
    }

    return (
        <>
        
        <div className='calendar'> 
            <div className='calendar-header'>
                <button onClick={prevMonth}>&lt;</button>
                <span>
                    {currentDate.toLocaleString('default', { month: 'long' })}{' '}
                    {currentDate.getFullYear()}
                </span>
                <button onClick={nextMonth}>&gt;</button>
            </div>
            <div className='day-names'>
                {dayNames.map((day) => (
                    <div key={day} className='day-name'>
                        {day}
                    </div>
                ))}
            </div>
            <div className='days'>
                {Array.from({ length: startDate }).map((_, index) => (  
                    <div key={index} className='empty-day'></div>
                ))}
                {daysInMonth.map((day) => (
                    <div 
                        key={day} 
                        className={`day ${day.getDate() === new Date().getDate() && day.getMonth() === new Date().getMonth() ? 'today' : ''} ${selectedDate && day.toDateString() === selectedDate.toDateString() ? 'selected' : ''}`} 
                        onClick={() => handleDateClick(day)}
                    >
                        {day.getDate()}
                    </div>
                ))}
            </div>
        </div>
        
       
        <div className='meeting-today'>
            <p className='meeting-heading'>Today's Meeting</p>
            <p className='meeting-para'>Wed Nov 14, 2024 at 2:00 PM</p>

        </div>

        <div className='meeting-other'>
            <p className='meeting-heading'>Upcoming Meeting</p>
            <p className='meeting-para'>Thu Nov 16, 2024 at 10:00 AM</p>
        </div>
        
        </>
    );
};

export default Calendar;
 */


import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/style.css';

const Calendar = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [daysInMonth, setDaysInMonth] = useState([]);
    const [startDate, setStartDate] = useState(0);
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedMeeting, setSelectedMeeting] = useState(null);

    // Dummy data for meetings
    const meetings = [
        { date: '2024-11-14', time: '2:00 PM', description: 'Project meeting' },
        { date: '2024-11-16', time: '10:00 AM', description: 'Team sync-up' },
        { date: '2024-11-20', time: '3:30 PM', description: 'Client presentation' },
        { date: '2024-11-25', time: '1:00 PM', description: 'Budget review' },
    ];

    const navigate = useNavigate();

    useEffect(() => {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();
        const date = new Date(year, month, 1);
        const days = [];

        while (date.getMonth() === month) {
            days.push(new Date(date));
            date.setDate(date.getDate() + 1);
        }

        setDaysInMonth(days);
        setStartDate(new Date(year, month, 1).getDay());

        // Automatically show today's meeting if it exists
        const today = new Date().toISOString().split('T')[0];
        const todayMeeting = meetings.find(meeting => meeting.date === today);
        if (todayMeeting) {
            setSelectedMeeting(todayMeeting);
        }
    }, [currentDate, meetings]);

    const dayNames = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

    const prevMonth = () => {
        setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() - 1)));
    };

    const nextMonth = () => {
        setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() + 1)));
    };

    const handleDateClick = (date) => {
        const formattedDate = date.toISOString().split('T')[0]; // Format date as YYYY-MM-DD
        const meeting = meetings.find(meeting => meeting.date === formattedDate);
        setSelectedDate(date);
        setSelectedMeeting(meeting || null);
    };

    const redirectToAddMeeting = () => {
        navigate('/AddeditMeeting');
    };

    return (
        <>
            <div className='calendar-container'>
                <div className='calendar'>
                    <div className='calendar-header'>
                        <button onClick={prevMonth}>&lt;</button>
                        <span>
                            {currentDate.toLocaleString('default', { month: 'long' })}{' '}
                            {currentDate.getFullYear()}
                        </span>
                        <button onClick={nextMonth}>&gt;</button>
                    </div>
                    <div className='day-names'>
                        {dayNames.map((day) => (
                            <div key={day} className='day-name'>
                                {day}
                            </div>
                        ))}
                    </div>
                    <div className='days'>
                        {Array.from({ length: startDate }).map((_, index) => (
                            <div key={index} className='empty-day'></div>
                        ))}
                        {daysInMonth.map((day) => {
                            const formattedDate = day.toISOString().split('T')[0];
                            const hasMeeting = meetings.some(meeting => meeting.date === formattedDate);
                            return (
                                <div 
                                    key={day}
                                    className={`day ${day.getDate() === new Date().getDate() && day.getMonth() === new Date().getMonth() ? 'today' : ''} ${selectedDate && day.toDateString() === selectedDate.toDateString() ? 'selected' : ''} ${hasMeeting ? 'meeting-day' : ''}`}
                                    onClick={() => handleDateClick(day)}
                                >
                                    {day.getDate()}
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className='add-meeting-icon' onClick={redirectToAddMeeting} title="Add Meeting">
                    &#x002B;
                </div>
            </div>

            {/* Show message if no meeting today and no meeting selected */}
            {!selectedMeeting && (
                <div className='no-meeting-message'>
                    <p className='no-meeting-message-para'>No meetings scheduled for today.</p>
                </div>
            )}

            {/* Display meeting details if a meeting is selected */}
            {selectedMeeting && (
                <div className='meeting-details-div'>
                    <p><strong>Meeting Date:</strong> {selectedMeeting.date}</p>
                    <p><strong>Time:</strong> {selectedMeeting.time}</p>
                    <p><strong>Description:</strong> {selectedMeeting.description}</p>
                </div>
            )}
        </>
    );
};

export default Calendar;
