import { GiRocketFlight } from "react-icons/gi";

const Header = () => {
    return (
        <header className="w-full bg-slate-50 py-3">
            <nav className="flex justify-between items-center max-w-6xl mx-auto px-4 lg:px-0">
                <a href="/" className="text-lg font-bold flex items-center gap-2"><GiRocketFlight className="text-2xl font-bold text-indigo-600" /> Travel Booking</a>
                <button className="bg-indigo-600 text-white px-6 py-2 rounded font-medium">Login</button>
            </nav>
        </header>
    );
};

export default Header;