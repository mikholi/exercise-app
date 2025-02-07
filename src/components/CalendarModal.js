import { Calendar, LocaleConfig } from "react-native-calendars";
import React, {useState} from "react";

const CalendarModal = () => {
    const [selected, setSelected] = useState("");


    return (
        <Calendar 
        onPress={day => {
            setSelected(day.dateString)
        }}
        markedDates={{
            [selected]: {selected: true, disableTouchEvent: true}
        }}
        />
    )
}

export default CalendarModal;