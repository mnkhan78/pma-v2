import { useNavigate } from "react-router";
import {
    FaHome,
    FaCalendarAlt,
<<<<<<< HEAD
    FaUser,
    FaFileMedical,
=======
    FaUser
>>>>>>> 10d8d41a54c1b16b61fe0558da5210cdb2de9019
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
            <button
                onClick={() =>
                    navigate('/pharmacy')
                }
            >
                <FaFileMedical size={20} />
                <span>Medicine Queue</span>
            </button>

=======
>>>>>>> 10d8d41a54c1b16b61fe0558da5210cdb2de9019
        </div>
    );
};

export default BottomNavigation;