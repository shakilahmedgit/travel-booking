import { FaPlus } from "react-icons/fa";

const Booking = () => {


    // handle bookings btn click
    const handleBook = (e) => {
        e.preventDefault();
        console.log('Booking flight');
    };

    return (
        <div className="mt-[160px] md:mt-[140px] lg:mt-[160px] mx-4 relative">
            <div className="bg-white rounded-md mx-auto max-w-6xl w-full">
                <form className="flex flex-col md:grid md:grid-cols-3 lg:grid-cols-6">
                    {/* form */}
                    <div className="py-1.5 px-2.5 flex-1 border-r-2">
                        <p className="font-bold text-black">Destination Form</p>
                        <div className="flex flex-row">
                            <select name="form" id="form" className="outline-none p-2 w-full">
                                <option value="Please Select">Please Select</option>
                                <option>New York</option>
                                <option>London</option>
                                <option>Paris</option>
                                <option>Rome</option>
                            </select>
                        </div>
                    </div>

                    {/* destination to */}
                    <div className="py-1.5 px-2.5 flex-1 border-r-2">
                        <p className="font-bold text-black">Destination Form</p>
                        <div className="flex flex-row">
                            <select name="form" id="form" className="outline-none p-2 w-full">
                                <option value="Please Select">Please Select</option>
                                <option>New York</option>
                                <option>London</option>
                                <option>Paris</option>
                                <option>Rome</option>
                            </select>
                        </div>
                    </div>

                    {/* date */}
                    <div className="py-1.5 px-2.5 flex-1 border-r-2 md:border-r-0">
                        <p className="font-bold text-black">Journey Date</p>
                        <input type="date" name="date" required className="outline-none p-2 w-full" />
                    </div>

                    {/* Guest member */}
                    <div className="py-1.5 px-2.5 flex-1 border-r-2">
                        <p className="font-bold text-black">Guests</p>
                        <div className="flex flex-row">
                            <select name="form" id="form" className="outline-none p-2 w-full">
                                <option value="Please Select">Please Select</option>
                                <option>1 Person</option>
                                <option>2 Person</option>
                                <option>3 Person</option>
                                <option>4 Person</option>
                                <option>5 Person</option>
                            </select>
                        </div>
                    </div>

                    {/* Travel Class */}
                    <div className="py-1.5 px-2.5 flex-1 border-r-2">
                        <p className="font-bold text-black">Travel Class</p>
                        <select name="form" id="form" className="outline-none p-2 w-full">
                            <option value="Please Select">Please Select</option>
                            <option>Business</option>
                            <option>Economy</option>
                        </select>
                    </div>

                    {/* button */}
                    <button onClick={(e) => handleBook(e)} type="submit" className="flex justify-center items-center gap-2 bg-indigo-600 text-white font-medium md:rounded-br-md lg:rounded-tr-md lg:rounded-br-md py-6 md:py-0"><FaPlus /> Book Now</button>
                </form>
            </div>
        </div>
    );
};

export default Booking;