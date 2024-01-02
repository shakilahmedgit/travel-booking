import { useDispatch, useSelector } from "react-redux";
import { MdDelete } from "react-icons/md";
import { deleteBooking } from "../redux/actions";

const Table = () => {
    const data = useSelector((state) => state.data);
    const dispatch = useDispatch();

    const handleDelete = (e) => {
        const stringToDigit = parseInt(e.currentTarget.id);
        // console.log(typeof stringToDigit);
        dispatch(deleteBooking(stringToDigit));
    };

    // console.log(data);

    return (
        <>
           {
            data.length && (
                <div className="max-w-6xl mx-auto mt-5 bg-white">
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                            <tr>
                                <th>DESTINATION FROM</th>
                                <th>DESTINATION TO</th>
                                <th>JOURNEY DATE</th>
                                <th>GUESTS</th>
                                <th>TRAVEL CLASS</th>
                                <th>DELETE</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                data.map((data, index) => (
                                    <tr key={index}>
                                        <th>{data.form}</th>
                                        <td>{data.to}</td>
                                        <td>{data.date}</td>
                                        <td>{data.person}</td>
                                        <td>{data.categoryName}</td>
                                        <td><button id={`${data.id}`} onClick={(e) => handleDelete(e)} className="btn-xs bg-red-500 text-white"><MdDelete /></button></td>
                                    </tr>
                                ))
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            )
           }
        </>
    );
};

export default Table;