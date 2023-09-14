import {useEffect, useMemo} from "react";
import Sidebar from "./components/Sidebar"
import Topbar from "./components/Topbar"
import ChartDetails from "./components/ChartDetails"
import Searchbar from "./components/Searchbar"
import TableTopbar from "./components/TableTopbar"
import TableTab from "./components/TableTab"
import DataTable from "./components/DataTable"
import { useState } from "react"

function App() {
  const [loading, setLoading] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  const [dateRange, setDateRange] = useState("");
  const [allData, setAllData] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isViewChartDetails, setIsViewChartDetails] = useState(false);

  const filterData = useMemo(() => {
    return searchValue ? allData.filter((item) => item?.campaign_title?.toLowerCase().includes(searchValue.toLowerCase())) : allData;
  },[allData, searchValue]);

  const updateDataRange = (newValue) => {
    setDateRange(newValue);
  }

  const updateSearch = (newValue) => {
    setSearchValue(newValue);
  }

  const setChartView = (value) => {
    setIsViewChartDetails(() => value);
  }

  const selectItem = (itemId) => {
      const getItem = allData?.find((item) => item.id === itemId);
      setSelectedItem(getItem);
  }

  const removeSelectedItem = () => {
      setSelectedItem(null);
  }

  const getDate = useMemo(() => {
    const fromDate = dateRange?.[0] ? new Date(dateRange[0]).toLocaleString("default", { year: "numeric" }) + "-" + new Date(dateRange[0]).toLocaleString("default", { month: "2-digit" }) + "-" + new Date(dateRange[0]).toLocaleString("default", { day: "2-digit" } ) : "";
    const toDate = dateRange?.[1] ? new Date(dateRange[1]).toLocaleString("default", { year: "numeric" }) + "-" + new Date(dateRange[1]).toLocaleString("default", { month: "2-digit" }) + "-" + new Date(dateRange[1]).toLocaleString("default", { day: "2-digit" } ) : "";

    return {from_date: fromDate, to_date: toDate};
  },[dateRange]);

  useEffect(() => {
      const fetchData = async () => {
          setLoading(true);
          await fetch(`https://facebook.edutrix.net/api/campaigns?from_date=${getDate.from_date}&to_date=${getDate.to_date}`)
          .then(response => response.json())
          .then(data => {
              setAllData(data?.data);
          }).catch(err => {
            console.error(err)
          });
          setLoading(false);
      }
      fetchData();

  },[dateRange, getDate]);

  return (
    <div className='relative flex'>
      <Sidebar />
      <div className='relative h-screen overflow-hidden flex-1 bg-[#0000000d] pl-2 pr-[52px]'>
        <Topbar />
        <div className="relative w-full">
          <Searchbar searchValue={searchValue} updateSearch={updateSearch} dateRange={dateRange} updateDataRange={updateDataRange} />
          <div className="relative">
            <TableTab />
            <TableTopbar />
            <DataTable loading={loading} allData={filterData} selectItem={selectItem} setChartView={setChartView} />
          </div>
        </div>
        <ChartDetails removeSelectedItem={removeSelectedItem} selectedItem={selectedItem} setChartView={setChartView} isViewChartDetails={isViewChartDetails} />
      </div>
    </div>
  );
}

export default App;
