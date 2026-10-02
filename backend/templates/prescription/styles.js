const styles = `
<style>

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

body{
    height:100%;
}
html,
body{
    font-family:Arial,Helvetica,sans-serif;
    padding:0;
    margin:0;
    background:white;
    font-size:13px;
}

.page{
    min-height:290mm;
    display:flex;
    flex-direction:column;
}

.content{
    flex:1;
}

/* ---------------- HEADER ---------------- */

/* ================= HEADER ================= */

.header {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;

    width: 100%;

    border-bottom: 3px solid #0B4EA2;
    

    padding-bottom: 10px;
    margin-bottom: 10px;
}


/* ================= LEFT : DOCTOR ================= */

.doctor-section {
    min-width: 0;
    padding-left: 0;
    padding-right: 15px;
}

.doctor-heading {
    display: block;
}

.doctor-name {
    font-size: 22px;
    font-weight: 700;
    color: #0B4EA2;
    line-height: 1.1;
    margin-bottom: 4px;
}

.qualification-column {
    display: flex;
    flex-direction: column;
    margin-top: 0;
}

.qualification {
    color: #D32F2F;
    font-size: 11px;
    font-weight: 700;
    line-height: 1.2;
    white-space: nowrap;
}

.achievement-list {
    display: flex;
    flex-direction: column;
    margin-top: 5px;
}

.achievement {
    font-size: 11px;
    color: #444;
    line-height: 1.25;
}


/* ================= CENTER : LOGO ================= */

.logo-container {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 15px;
}

.logo-container img {
    display: block;
    width: 150px;
    height: auto;
}


/* ================= RIGHT : CLINIC DETAILS ================= */

.contact-details {
    text-align: left;

    padding-left: 15px;
}

.clinic-name {
    font-size: 22px;
    font-weight: 700;
    color: #0B4EA2;

    line-height: 1.15;
    margin-bottom: 5px;
}

.website,
.phone,
.address,
.email {
    font-size: 11px;
    color: #444;
    line-height: 1.4;
    text-align: left;
}

.website {
    color: #0B4EA2;
}


/* ================= CONSULTANT ================= */

.consultant-block {
    margin-top: 10px;
}

.consultant-title {
    color: #0B4EA2;
    font-weight: 700;
    font-size: 14px;

    margin-bottom: 2px;

    border-bottom: 1px solid #0B4EA2;
    display: inline-block;
}

.consultant-name {
    font-size: 18px;
    color: #0B4EA2;
    font-weight: 700;

    margin-bottom: 4px;
}

/* -------- Patient Information -------- */

.patient-bar{
    display:grid;
    grid-template-columns:2fr 1fr 1fr 1fr 1fr;
    border:1px solid #DDD;
    margin-top:15px;
    margin-bottom:20px;
}

.patient-item{
    padding:7px;
    border-right:1px solid #DDD;
}

.patient-item:last-child{
    border-right:none;
}

.label{
    color:#666;
    font-size:11px;
}

.value{
    margin-top:4px;
    font-weight:bold;
}

/* ---------- Main Section ---------- */

.main{
    display:grid;
    grid-template-columns:28% 72%;
    // grid-template-columns:30% 70%;
    gap:18px;
}

/* -------- Cards -------- */

.card{
    border:1px solid #DDD;
    border-radius:6px;
    margin-bottom:10px;
    overflow:hidden;
}

.card-title{
    color:#0B4EA2;
    padding:7px;
    font-size:15px;
    font-weight:bold;
}

.card-body{
    padding:8px;
}
.card-text{
    margin: 0;
    padding: 0;
    text-align: left;    
}

/* -------- Footer -------- */

.footer {
    width: 100%;
    box-sizing: border-box;

    color: #FFFFFF;

    padding: 6px 10px;

    font-size: 10px;
    line-height: 1.35;

    margin-top: 10px;

    flex-shrink: 0;
}

.footer-content {
    width: 100%;
}

.branches-list {
    display: flex;
    flex-direction: column;
    gap: 2px;
}

.branch {
    color: #0B4EA2;
    font-size: 10px;
    line-height: 1.35;
    font-weight: 900;
    margin: 0;
    padding: 0;
}

/* ------------ google icons ------------- */

.material-symbols-outlined {
    font-family: 'Material Symbols Outlined';

    font-weight: normal;
    font-style: normal;

    font-size: 22px;

    line-height: 1;

    letter-spacing: normal;
    text-transform: none;

    display: inline-block;

    white-space: nowrap;
    word-wrap: normal;
    direction: ltr;

    -webkit-font-feature-settings: 'liga';
    -webkit-font-smoothing: antialiased;

    font-variation-settings:
        'FILL' 0,
        'wght' 400,
        'GRAD' 0,
        'opsz' 24;
}

</style>
`;

module.exports = styles;