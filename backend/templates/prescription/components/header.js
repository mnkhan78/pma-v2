const fs = require("fs");
const clinic = require("../clinic.config");

const Header = () => {

    const logoBase64 = fs.readFileSync(clinic.logo).toString("base64");

    return `

<div class="header">

    <div class="doctor-section">
        <div class="doctor-heading">
            <div class="doctor-name">

                ${clinic.doctors.primary.name}

            </div>

            <div class="qualification-column">

                ${clinic.doctors.primary.qualifications
                    .map(q => `<div class="qualification">${q}</div>`)
                    .join("")}

            </div>
        </div>

        <div class="achievement-list">
            ${clinic.doctors.primary.achievements
            .map(
                item => `
                        <div class="achievement">

                            ${item}

                        </div>
                    `
            )
            .join("")}

        </div>

        ${clinic.doctors.consultants.length
            ?
            clinic.doctors.consultants.map(doc => `

                <div class="consultant-block">
                    <div class="consultant-title">
                        Associate Consultant
                    </div>
                    <div class="consultant-name">
                        ${doc.name}
                        <span class="qualification">
                            ${doc.qualification}
                        </span>
                    </div>

                    <div class="achievement-list">
                        ${doc.achievements.map(a => `
                            <div class="achievement">
                                ${a}
                            </div>
                        `).join("")}
                    </div>
                </div>
            `).join("")

            :

            ""
        }
    </div>

    <div class="logo-container">
        <img
            class="logo"
            src="data:image/jpeg;base64,${logoBase64}"
        />
    </div>


    <div>
        <div class="contact-details">
            ${clinic.clinicName ? `<div class="clinic-name">${clinic.clinicName}</div>` : ""}
            ${clinic.address ? `<div class="address">${clinic.address}</div>` : ""}
            ${clinic.website ? `<div class="website">Visit: ${clinic.website}</div>` : ""}
            ${clinic.phone ? `<div class="phone">Call: ${clinic.phone}</div>` : ""}
            ${clinic.email ? `<div class="email">Email: ${clinic.email}</div>` : ""}
        </div>
    </div>
</div>

`;

};

module.exports = Header;