const path = require("path");

module.exports = {

    clinicName: "Medizone Homoeocare",
    tagline: "Homeopathy for Health",

    phone: "+91 7278592371",
    website: "https://dr-mahfooza-ebrahim.vercel.app",
    email: "mahfoozaebrahim@gmail.com",
    address: "33/3, Palm Avenue, KOLKATA - 700019",

    logo: path.join(__dirname, "assets", "logo.jpeg"),
    signature: path.join(__dirname, "assets", "signature.png"),

    doctors: {

        primary: {

            name: "Dr. Mahfooza Ebrahim",
            // qualification: "MD (Hom.) | AF Hom. (London)",
            qualifications: [
                "B.Sc, BHMS",
                // "AF Hom. (London)"
            ],
            designation: "Associate Consultant",
            achievements: [
                "Consultant Homoepathic Physician",
                // `Associate Professor, Department of Organon of Medicine <br/> &nbsp; Metropolitan Homoeopathic Medical College & Hospital, Kolkata`,
                "Ex. House Physician, D.N. Dey Homoeopathic Medical College & Hospital (Paediatrics) <br/> Govt. of West Bengal",
            ]

        },

        consultants: [

            // {

            //     name: "Dr. Fatma Zeba",
            //     qualification: "MD (Hom.)",
            //     designation: "Associate Consultant",
            //     achievements: [
            //         "Assistant Professor, Department of Practice of Medicine <br/> &nbsp; H.M.H Medical College & Hospital, Bihar",
            //         "Ex. House Physician, The Calcutta Homoeopathic Medical College & Hospital <br/> &nbsp; Govt. of West Bengal",
            //     ]

            // }

        ]

    },
    branches: [
        "33/3, Palm Avenue, KOLKATA - 700019 | 6:30 PM TO 8:30 P.M. DAILY EXCEPT SUNDAY",
        // "TOPSIA BRANCH - 57A, TOPSIA ROAD, KOLKATA-700046 | GERMAN HOMOEO PHARMACY | SUNDAY 6:30P.M to 10:30 P.M.",
        // "Residence: Second Floor 155/2, Keshab Chandra Sen Street, Kolkata-700009. At Raja Bazar Crossing, Above Danish Music. SUNDAY 11 AM to 2 P.M.",
        // "For Same Day Appointment Call: 7278592371 | 6 P.M to 8 P.M",
        "FOR EMERGENCY CONTACT LOCAL HOSPITAL/DOCTOR | PLEASE BRING THIS PRESCRIPTION ON YOUR NEXT VISIT.",
    ]
};