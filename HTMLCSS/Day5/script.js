let mainHeader= document.createElement("header");
mainHeader.className="mainHeader";
//children of mainHeader
let imageBox=document.createElement("div");
imageBox.className="imageBox";
//Adding the content to the imageBox
let pic=document.createElement("img");
pic.src="AKC.png";
imageBox.appendChild(pic);

let whiteBar=document.createElement("div");
whiteBar.className="whiteBar";
whiteBar.innerText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, tenetur!";

let myName=document.createElement("div");
myName.innerText="ASHUTOSH KALSI";
myName.className="name";

mainHeader.append(imageBox,whiteBar,myName);
// ------end of the header section-------

// ------Begining of section A-----------
let sectionA=document.createElement("section");
sectionA.className="personalDetails"

let pD=document.createElement("div");
pD.innerText="+91 951333902 | aakalsi@gmail.com";

sectionA.append(pD);

// ------Begining of section B-----------
let sectionB=document.createElement("section");
sectionB.className="container"

let lH=document.createElement("div");
lH.className="left-half";

let div1=document.createElement("div");
div1.innerHTML=` <h2><i class="fas fa-user-circle"></i> Profile Summary</h2>
<ul>
  <li>Ashutosh is a techno-functional consultant with 9+ years of experience. He is an effective team player with strong communication skills.</li>
  <li>His functional responsibilities in implementation and production support were Requirements gathering, Functional gap analysis, Setup configuration, Test script generation, Writing training guides, Conducting CRP sessions, Production support and Financial Reporting through FSG.</li>
  <li> His technical responsibilities in production support and enhancements: Developing reports, debugging reports, issues with the deployed interfaces, enhancements of interfaces, forms development.</li>
 <li>His experience in Oracle E Business Suite Release 12 -
    Financial Management:- General Ledger, Accounts Payable, Accounts Receivable, Fixed Assets, Cash Management, Subledger Accounting, EB Tax.
    Procurement:- Purchasing
    Distributions:- Inventory
    EBS Tools & Technology:- System Administrator, Forms, Reports, XML Publisher, ADIs, Dataloader, Personalizations, Discoverer, UPK, Oracle Business Accelerator L3.
  </li>
</ul> <br> `

let div2=document.createElement("div");
div2.innerHTML=`<h2><i class="fas fa-fill-drip"></i> Skills</h2>
<h3 class="skills">Functional Skills</h3>
<ul>
    <li>Oracle Financial Functional - GL,AP,AR,FA,CM</li>
    <li>Oracle Purchasing - P2P</li>
    <li>Tax - EB Tax</li>
</ul>

<h3 class="skills">Additional Skills</h3>
<ul>
    <li>Pl/Sql, Forms, Reports</li>
    <li>XML Publisher</li>
    <li>Dataloader</li>
    <li>Personalizations</li>
    <li>Discoverer</li>
    <li>UPK</li>
</ul><br>`

let div3=document.createElement("div");
div3.innerHTML=`<h2><i class="fas fa-history"></i> Professional and Business History</h2>
<ul>
    <li>Akamai Technologies, India: Senior Business System Analyst, May 2017 to Present</li>
    <li>Alshaya Outsourcing India Pvt Ltd: Application System Manager, Oct’ 2015 to Apr’ 2017</li>
    <li>MH Alshaya CO. WLL, Kuwait: Application System Supervisor, April 2013 to Sept’ 2015</li>
    <li>Sonata Software Ltd, India: System Analyst, September 2010 to March 2013</li>
</ul><br>`;


let div4=document.createElement("div");
div4.innerHTML=`<h2><i class="fas fa-briefcase"></i> Work Experience</h2>
<ol>
    <li><h3>AT AKAMAI TECHNOLOGIES, INDIA</h3>
        <p>Project Title: P2P PaySource and ACH Implementation <br> Client: Internal <br>Period: May’18 – Ongoing <br> Designation: Senior Business System Analyst<br>Project Type: Payment Automation<br>Role:
        </p>
        <ul>
            <li>Gathering business requirements and vetting and finalizing them with stakeholders in multiple collaboration sessions</li>
            <li>Planning the project phases </li>
            <li>Organizing regular meetings with governance to share the status, challenges, and successes, and meetings with JP Morgan and internal teams to monitor and control the project </li>
            <li>Documenting the functional specifications – current process, risks with the current process, requirements, and solution design with considerations, BR 100 documents, and weekly governance status reports.</li>
            <li>Managing technical resources and getting the development done within time and with quality</li>
            <li>Configuring the EBS R12 application for PaySource and ACH </li>
            <li>Managing Business Analysis, Quality Analysis, and User Acceptance Testing cycles with respective teams</li>
            <li>Managing additional GO Live activities with various teams such as payables team, master data management team, and DBA team</li>
        </ul><br>
        
        <p>Project Title: P2P Transaction Automation Program and Supplier Portal <br> Client: Internal <br> Period: May’17 – Apr’18 <br>Designation: Senior Business System Analyst<br>Project Type: Invoice Automation and Sourcing Implementation<br>Role:
        </p>
        <ul>					
            <li>Gathering business requirements and vetting and finalizing them with stakeholders in multiple collaboration sessions</li>
            <li>Organizing vendor demos from prospective vendors such as Apex, Coupa, Esker, Inspyrus, Ivalua, Oracle Webcenter, Paybox, Taulia, Transcepta for the stakeholders and gathering demo feedback surveys</li>
            <li>Evaluating vendors based on criteria such as </li>
                <ul>
                    <li>Functional Fit (Data Validation, Interface, Invoice Process, Reporting, Security, Supplier Communication, Supplier Form, Tax, Workflow, Data Management, Language Support, OCR Exception Processing, OCR Post Processing, OCR Processing, Supplier Management)</li>
                    <li>Technology/Security Fit (Application Technical Requirements, Business Continuity &amp; Disaster Recovery, Data Security &amp; Compliance, Global Scalability, Operations Maintenance &amp; Support, SLAs, Systems Integration, Upgrades, User Interface &amp; Access, Workflow Requirements)</li>
                    <li>Service Fit, Vendor Profile, Costs, and more</li>
                </ul>
            <li>Organizing vendor application hands-on sessions for Akamai stakeholders and supporting the users with Hands-on on the vendor applications</li>
        </ul><br>
    </li>
    <li><h3>AT M H ALSHAYA, KUWAIT</h3>
      <p>Project Title: Roll-out Oracle Financials and Support<br>Client: Shaya, Turkey<br>Period: Apr’13 – May 17<br>Designation: Lead<br>Project Type: Roll-out &amp; Support<br>Location: Kuwait &amp; Turkey (Onsite)<br>Role:						
      </p>
      <ul>
          <li>Providing onsite support to the business users during the UAT phase in understanding the oracle applications financials modules from functionality and business point of view</li>
          <li>Migrating &amp; deploying Middle East instance existing custom reports to Turkey instance and bringing them in working condition in a different language and set-up environment with different chart of accounts structure</li>
          <li>Conducting periodic enhancements &amp; developments and personalizing the self-service pages (suppliers) as per the business requirement; generating Issue Logs and maintaining &amp; circulating to team as and when required</li>
          <li>Resolving the issues related to billing &amp; invoicing faced by the team members through daily status calls and creation of TAR in Oracle Metalink</li>
          <li>Managing finance track month-end closing and 24/7 supports for P1 issues</li>
          <li>Organizing shift plans, managing healthy tickets distribution amongst the team</li>
          <li>Worked with Shaya Turkey, Partnera offshore technical resources for development of extensions and custom programs for new implementations</li>
      </ul><br>
      <p>Project Title: Roll-out Oracle Purchasing<br>Client: Shaya, Turkey<br>Designation: Lead<br>Project Type: Roll-out &amp; Support<br>Location: Kuwait &amp; Turkey (Onsite)<br>Role:
      </p>
      <ul>
          <li>Setting-up Oracle purchasing in Development and UAT instances in Turkey; testing the set-ups along with preparation of BR100 for configurations and TE040 document for the system testing</li>
      </ul><br>
      <p>Project Title: Production Support<br>Client: Internal<br>Period: Apr’13 - Present<br>Designation: Application Systems Supervisor<br>Project Type: Support<br>Location: Kuwait<br>Role:
      </p>
      <ul>
          <li>Resolving day-to-day user issues related to financials and purchasing modules</li>
          <li>Conducting bi-weekly meetings with the governance to present the status of the SLA</li>
          <li>Liaising with Oracle for data fixes, code fixes and patching for production environment application issues</li>
          <li>Managing the periodic enhancements &amp; developments of reports and interfaces as per business requirements</li>
      </ul>
    </li>
  <br>
</ol>`;

let div5=document.createElement("div");

div5.innerHTML=`
<ol start="3" >
    <li><h3>AT SONATA SOFTWARE LIMITED, BANGALORE</h3>
        <p>Project Title: Internal Support<br>Client: Sonata Software Limited, Bangalore<br>Period: Jul’12 – Mar’13<br>Project Type: Support<br>Role:
        </p>
        <ul>
            <li>Offered support to the Billing Team for employee expenses &amp; payables at every period end</li>	
            <li>Organized &amp; generated agreements, events, revenue and customer invoices; recorded the same in Microsoft Axapta</li>
            <li>Translated the functional requirements to the technical team for developing various reports &amp; financial statement </li>
        </ul><br>
        <p>Project Title: Implementation Project<br>Client: Essilor Manufacturing India Pvt. Ltd., Bangalore<br>Period: Dec’11 – Jun’12<br>Designation: System Analyst<br>Project Type: Implementation<br>Role:
        </p>
        <ul>
            <li>Performed a study on the existing business practices of the client as part of As-Is-Study (BP040); designed the solution to meet the business requirements as part of To-Be-Flows (BP080)</li>
            <li>Developed Test Scripts (TE040) and tested the system; set-up applications in the Test, Development and Production Environments; managed Multiple Reporting Currencies, Translation and Revaluation</li>
            <li>Planned &amp; defined Flexfileds, Value Sets, Cross Validations, Security Rules and monitored application security, profile options and document sequencing</li>
            <li>Worked on Mass Allocation which involved preparing the formula for mass allocations and generating the mass allocations journals</li>
            <li>Drafted &amp; analyzed the functional specifications; provided KT to team members</li>
            <li>Executed the set-ups for payables like setting-up financial &amp; payable options, document sequencing, bank set-ups, recurring invoice template definition and expense report template definition</li>
            <li>Supervised the set-ups for Receivables system like setting-up KFFs, system options, transaction types, transactions sources, auto accounting on various transaction types &amp; receipts</li>
            <li>Used FSG Tool for creating financial reports; monitored data migration activities to prepare data templates and to collect the data from the key users</li>						
        </ul><br>
        <p>Project Title: Customized Module Development<br>Client: The New Indian Express, Chennai<br>Period: Jun’11 – Dec’11<br>Designation: System Analyst<br>Location: Chennai (Onsite)<br>Role:
        </p>
        <ul>
            <li>Offered demonstrations for the Fixed Deposit To-Be-Application to the client; proposed the workaround solutions</li>
            <li>Prepared MD50 &amp; TE040 documents; explained the FD process to the technical consultants for the application development; provided user training for the fixed deposit customized module</li>
            <li>Developed the Test cases and conducted testing of the Developing module</li>
            <li>Managed data migration from the legacy system to the customized system while coordinating with the technical team</li>
            <li>Worked on Manual and Automatic Reconciliation for Cash Management</li>
        </ul><br>
        <p>Project Title: Implementation Project<br>Client: Shubham Packaging Private Limited, Bangalore<br>Period: Jan’11 – May’11<br>Designation: System Analyst<br>Project Type: Implementation<br>Role:
        </p>
        <ul>
            <li>Mapped the client business requirements to Oracle functionality and set-up application in the Test, Development and Production environments</li>
            <li>Utilized System Test Scripts in DEV and TEST instances for testing the business processes</li>
            <li>Managed the filling of questionnaire in project work space of Oracle Business Accelerator</li>
        </ul>
    </li>
</ol><br>`;

let div6=document.createElement("div");

div6.innerHTML=` <h3><i class="fas fa-user-graduate"></i> Education and certifications</h3>
<p>Bachelor of Engineering in Electronics & Telecommunications
</p> <br>`;

let div7=document.createElement("div");
div7.innerHTML=`<h3><i class="fas fa-braille"></i> Extras</h3>
<p>Holds B1 for USA</p><br>`;

lH.append(div1,div2,div3,div4,div5,div6,div7);

sectionB.append(lH);

document.body.append(mainHeader,sectionA,sectionB)










