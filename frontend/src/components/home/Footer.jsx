import React from "react";
// import "./footer.css";

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="footer">
            <p className="login-copyright">
                © {new Date().getFullYear()} PMA.
                All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;