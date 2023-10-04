import React, { useState, useMemo } from "react";
import {MagnifyingGlass} from "phosphor-react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Searchbar = ({updateSearch, searchValue, updateDataRange, dateRange, setIsSubmitFilter}) => {

    const [showCalender, setShowCalender] = useState(false);

    const getDateText = useMemo(() => {
        let preparedDateString = '';
        if(!dateRange) {
            const mName = new Date().toLocaleString('en-us', { month: 'short' });
            const day = new Date().getDate();
            const year = new Date().getFullYear();
            preparedDateString = `This month: ${mName} 1 ${year} - ${mName} ${day} ${year}`;
            return preparedDateString;
        };
        if(dateRange?.[1] !== null) {
            const stDate = new Date(dateRange[0]).toDateString().split(' ');
            stDate.shift();
            const endDate = new Date(dateRange[1]).toDateString().split(' ');
            endDate.shift();

            preparedDateString = `${stDate.join(' ')} - ${endDate.join(' ')}` ;
        } else {
            const stDate = new Date(dateRange[0]).toDateString().split(' ');
            stDate.shift();
            preparedDateString = `${stDate.join(' ')}` ;
        }
        return preparedDateString;
    }, [dateRange]);


    return (
        <div className="w-full bg-transparent flex items-center justify-between mb-2 relative z-[100]">
            <div className="flex items-center flex-1 bg-white relative pl-11 pr-3 shadow-[0_0_5px_0_rgba(0,0,0,0.1)] h-9 rounded-lg">
                <span className="absolute z-10 w-4 left-3 top-1/2 -translate-y-1/2"><MagnifyingGlass size={16} weight="regular" /></span>
                <input type="search" value={searchValue || ""} onChange={(e) => updateSearch(e?.target?.value)} placeholder="Search and filter" className="h-full flex-1 !outline-none font-robotoSans text-sm font-normal" />
            </div>
            <div className="flex items-center relative">
                <div className="z-10 ml-1 w-[292px] h-9 flex items-center justify-between bg-[#0000000d] hover:bg-gray-300 px-4 rounded-md"
                onClick={() => {
                    setShowCalender(!showCalender)
                }}>
                    <span className="text-sm text-[#1c1e21] font-robotoSans flex-1">{getDateText}</span>
                    <span className="w-4 h-4 bg-no-repeat inline-flex bg-[length:33px_398px] bg-[0px_-381px] bg-iconImg2 translate-x-1.5"></span>
                </div>
                {showCalender &&
                    <div className="absolute right-0 top-full z-50 bg-white adm-calender pb-4">
                        <Calendar onChange={updateDataRange} value={dateRange}
                            showDoubleView
                            selectRange
                            className="react-calendar-v2"
                            allowPartialRange
                            showNeighboringMonth={false}
                        />
                        <div className="flex items-center justify-end pr-2">
                            <div className="pl-3 pr-4 h-9 flex items-center justify-center bg-gray-200 hover:bg-gray-300 rounded-md cursor-pointer mr-2"
                            onClick={() => {
                                setIsSubmitFilter(false);
                                setShowCalender(false);
                            }}>
                                <span className="text-sm text-gray-600 font-robotoSans">Cancel</span>
                            </div>
                            <div className="pl-3 pr-4 h-9 flex items-center justify-center bg-blue-600 hover:bg-blue-700 rounded-md cursor-pointer mr-2"
                                onClick={() => {
                                    setIsSubmitFilter(prev => !prev);
                                    setShowCalender(false);
                                }}>
                                <span className="text-sm text-white font-bold font-robotoSans">Update</span>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default Searchbar;