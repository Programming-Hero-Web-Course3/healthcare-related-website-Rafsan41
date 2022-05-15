import React from 'react';
import BookingCounciling from '../BookingSection/BookingCounciling';
import CouncilingSedule from '../CouncilingSedule/CouncilingSedule';

const Counciling = () => {
    return (
        <div>
            <CouncilingSedule></CouncilingSedule>
            <BookingCounciling></BookingCounciling>
        </div>
    );
};

export default Counciling;