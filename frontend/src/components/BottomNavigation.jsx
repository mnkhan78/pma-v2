import { useNavigate } from "react-router";
import {
    FaHome,
    FaCalendarAlt,
<<<<<<< HEAD
    FaUser,
    FaFileMedical,
=======
<<<<<<< HEAD
    FaUser,
    FaFileMedical,
=======
    FaUser
>>>>>>> 10d8d41a54c1b16b61fe0558da5210cdb2de9019
>>>>>>> 96c49262d961cdbf0048e98c52f65a8985d72b92
} from "react-icons/fa";
import "./styles/dashboard.css";

const BottomNavigation = ({ user }) => {

    const navigate = useNavigate();

    return (
        <div className="mobile-bottom-nav">

            <button
                onClick={() => navigate("/frontal")}
            >
                <FaHome size={20} />
                <span>Dashboard</span>
            </button>

            <button
                onClick={() => navigate("/appointments/today")}
            >
                <FaCalendarAlt size={20} />
                <span>Appointments</span>
            </button>

            <button
                onClick={() =>
                    navigate('/dashboard')
                }
            >
                <FaUser size={20} />
                <span>Patients</span>
            </button>

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 96c49262d961cdbf0048e98c52f65a8985d72b92
            <button
                onClick={() =>
                    navigate('/pharmacy')
                }
            >
                <FaFileMedical size={20} />
                <span>Medicine Queue</span>
            </button>

<<<<<<< HEAD
=======
=======
>>>>>>> 10d8d41a54c1b16b61fe0558da5210cdb2de9019
>>>>>>> 96c49262d961cdbf0048e98c52f65a8985d72b92
        </div>
    );
};

export default BottomNavigation;