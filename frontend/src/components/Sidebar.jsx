import { useNavigate } from "react-router";
import {
    FaHome,
    FaCalendarAlt,
    FaUser,
<<<<<<< HEAD
    FaFileMedical,
=======
<<<<<<< HEAD
    FaFileMedical,
=======
    FaCog
>>>>>>> 10d8d41a54c1b16b61fe0558da5210cdb2de9019
>>>>>>> 96c49262d961cdbf0048e98c52f65a8985d72b92
} from "react-icons/fa";
import "./styles/dashboard.css";

const Sidebar = ({ user }) => {

    const navigate = useNavigate();

    return (
        <aside className="sidebar">

            <div className="sidebar-top">

                <div className="sidebar-logo">
<<<<<<< HEAD
                    <h2>PMA</h2>
=======
                    <h2>Slotify</h2>
>>>>>>> 10d8d41a54c1b16b61fe0558da5210cdb2de9019
                </div>

                <div className="sidebar-user">
                    <div className="sidebar-avatar">
                        {user?.name?.charAt(0)}
                    </div>

                    <h4>{user?.name}</h4>
                </div>

            </div>

            <div className="sidebar-menu">

                <button
                    className="sidebar-link"
                    onClick={() => navigate("/frontal")}
                >
                    <FaHome />
                    <span>Dashboard</span>
                </button>

                <button
                    className="sidebar-link"
                    onClick={() => navigate("/appointments/today")}
                >
                    <FaCalendarAlt />
                    <span>Appointments</span>
                </button>

                <button
                    className="sidebar-link"
                    onClick={() =>
                        navigate('/dashboard')
                    }
                >
                    <FaUser />
                    <span>Patients</span>
                </button>

<<<<<<< HEAD
                <button
=======
<<<<<<< HEAD
                <button
                    className="sidebar-link"
                    onClick={() => navigate("/pharmacy")}
                >
                    <FaFileMedical />
                    <span>Medicine Queue</span>
                </button>
=======
                {/* <button
>>>>>>> 96c49262d961cdbf0048e98c52f65a8985d72b92
                    className="sidebar-link"
                    onClick={() => navigate("/pharmacy")}
                >
<<<<<<< HEAD
                    <FaFileMedical />
                    <span>Medicine Queue</span>
                </button>
=======
                    <FaCog />
                    <span>Settings</span>
                </button> */}
>>>>>>> 10d8d41a54c1b16b61fe0558da5210cdb2de9019
>>>>>>> 96c49262d961cdbf0048e98c52f65a8985d72b92

            </div>

        </aside>
    );
};

export default Sidebar;