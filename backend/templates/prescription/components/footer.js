const clinic = require("../clinic.config");

const Footer = () => {

    return `

    <div class="footer">

        <div class="footer-content">
            <div class="branches-list">
                        ${clinic.branches
                        .map(
                            branch => `
                                    <div class="branch">
            
                                        ${branch}
            
                                    </div>
                                `
                        )
                        .join("")}
            
                    </div>
        </div>
    </div>
 
`;

};

module.exports = Footer;