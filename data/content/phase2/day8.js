export const day8Content = {
    day: 8,
    phase: 2,
    title: "Purchase Order (PO) \u2013 Basics",
    concepts: [
        {
            id: "day8-c1",
            title: "Structure of a Purchase Order",
            description: `<h3>Structure of a Purchase Order</h3>
<p>I welcomed the opportunity to work with Martin Murray again — it is always a plea-</p>
<p>sure to witness such dedication and expertise in SAP. I’m confident that you will find</p>
<p>Martin’s most recent book with SAP PRESS up to the same standard as his previous</p>
<p>books: SAP Warehouse Management Functionality and Configuration, Discover Logis-</p>
<p>tics with SAP ERP, Maximize Your Warehouse Operations with SAP ERP, and Under-</p>
<p>standing the Logistics Information System.</p>
<p>2.1  Client Structure   ...........................................................................   43</p>
<p>2.1.1  What Is a Client?   ............................................................   43</p>
<p>2.1.2</p>
<p>Creating the Client Landscape   ........................................   44</p>
<p>2.1.3  Defining a Client   ............................................................   45</p>
<p>Correction and Transport System (CTS)   ...........................   45</p>
<p>2.1.4</p>
<p>2.2  Company Code   ...........................................................................   46</p>
<p>2.2.1  What Is a Company?   ......................................................   46</p>
<p>2.2.2  Creating a Company Code   ..............................................   47</p>
<p>2.2.3  Assigning a Company Code   ............................................   48</p>
<p>2.3  Plants    ........................................................................................   48</p>
<p>2.3.1  What Is a Plant?   .............................................................   48</p>
<p>2.3.2  Prerequisites for a Plant   ..................................................   48</p>
<p>2.3.3  Defining a Plant   .............................................................   49</p>
<p>2.3.4  Valuation Level   ..............................................................   50</p>
<p>2.3.5  Assigning a Plant   ............................................................   51</p>
<p>6.1  General Data   ..............................................................................   189</p>
<p>Address Screen   ...............................................................   190</p>
<p>Control Screen   ...............................................................   192</p>
<p>Payment Transactions   .....................................................   196</p>
<p>6.2  Accounting Information   ..............................................................   199</p>
<p>6.2.1  Accounting Information    ................................................   199</p>
<p>6.2.2  Payment Transactions   .....................................................   203</p>
<p>6.2.3  Correspondence Screen   ..................................................   206</p>
<p>6.3  Purchasing Data    .........................................................................   209</p>
<p>6.3.1  Conditions   .....................................................................   209</p>
<p>Sales Data   ......................................................................   211</p>
<p>6.3.2</p>
<p>6.3.3  Control Data   ..................................................................   212</p>
<p>6.3.4  Default Data Material   .....................................................   215</p>
<p>6.3.5</p>
<p>Service Data   ...................................................................   216</p>
<p>6.3.6  Partner Functions   ...........................................................   217</p>
<p>6.4  Business Examples – Vendor Master Data   ...................................   218</p>
<p>6.4.1  General Data   ..................................................................   218</p>
<p>6.4.2  Purchasing Data   .............................................................   219</p>
<p>6.5  Summary   ....................................................................................   220</p>
<p>9.3.3</p>
<p>Flag for Deletion – Proposal List   .....................................   269</p>
<p>9.3.4  Material Master Archiving    .............................................   269</p>
<p>9.3.5  Remove a Material-Deletion Flag   ...................................   270</p>
<p>9.4  Loading Material Master Records   ................................................   270</p>
<p>9.4.1</p>
<p>Loading Material Master Records via Direct Input   ..........   270</p>
<p>9.4.2  Distribution of Material Master Records via ALE   ............   272</p>
<p>9.5  Production Versions   ....................................................................   272</p>
<p>9.5.1</p>
<p>Production Version Overview   .........................................   272</p>
<p>9.5.2  Creating a Production Version   ........................................   273</p>
<p>9.5.3  Production Versions – Mass Processing   ...........................   276</p>
<p>9.6  Revision Levels   ...........................................................................   276</p>
<p>9.6.1  Revision Level Overview  .................................................   276</p>
<p>9.6.2  Revision Level Configuration   ..........................................   277</p>
<p>9.7  Business Examples – Material Master Record   ..............................   277</p>
<p>9.7.1</p>
<p>Creating and Changing a Material Master Record   ...........   278</p>
<p>9.7.2  Material Master Deletion   ...............................................   278</p>
<p>9.7.3  Version Control   ..............................................................   279</p>
<p>9.8  Summary   ....................................................................................   280</p>
<p>11.1  Purchase Requisition   ...................................................................   301</p>
<p>11.2  Request for Quotation   ................................................................   302</p>
<p>11.3  Quotation   ...................................................................................   304</p>
<p>11.4  <strong>Purchase Order</strong>   ...........................................................................   305</p>
<p>11.5  Source List and Source Determination   .........................................   307</p>
<p>11.5.1  Single Source   .................................................................   307</p>
<p>11.5.2  Multi-Source   ..................................................................   308</p>
<p>11.5.3  Generate a Source List   ....................................................   310</p>
<p>11.5.4  Source Determination   ....................................................   311</p>
<p>11.6  Conditions in Purchasing   .............................................................   312</p>
<p>11.6.1  Condition Processing   ......................................................   312</p>
<p>11.6.2  Pricing Conditions   ..........................................................   313</p>
<p>11.6.3  Taxes   ..............................................................................   314</p>
<p>11.6.4  Delivery Costs   ................................................................   314</p>
<p>11.7  Vendor Evaluation   ......................................................................   314</p>
<p>11.7.1  Vendor Evaluation Overview   ..........................................   315</p>
<p>11.7.2  Vendor Evaluation Criteria   ..............................................   315</p>
<p>11.7.3  Vendor Evaluation Weighting   .........................................   318</p>
<p>11.7.4  Points Scoring for Criteria   ...............................................   318</p>
<p>11.7.5  Maintain Vendor Evaluation   ...........................................   320</p>
<p>11.7.6  Scoring for Automatic and Semi-Automatic Criteria   ........   321</p>
<p>11.7.7  Evaluation for a Material    ...............................................   322</p>
<p>11.8  Business Examples – Purchasing   ..................................................   322</p>
<p>11.8.1  Purchase Requisitions   .....................................................   323</p>
<p>11.8.2  Source List   .....................................................................   323</p>
<p>11.8.3  Conditions   .....................................................................   324</p>
<p>11.8.4  Vendor Evaluation   ..........................................................   324</p>
<p>11.9  Summary   ....................................................................................   325</p>
<p>15  <strong>Purchase Order</strong>   .........................................................................   371</p>
<div class="hero-tip"><strong>💡 Hero Tip:</strong> The payment terms are defined to allow the vendor to offer cash discounts and 
favorable  payment  periods  to  the  company.  In  many  accounts  payable  depart-
ments, before the time of e-commerce, the rule was to pay the vendor as close 
as possible to the last day of the agreed payment period to maximize the day’s 
payables and keep the cash within the company. However, over the past 10 years, 
vendors have been offering incentives to companies for fast payment, and pur-
chasing departments have responded by implementing best practices for paying 
vendors as soon as the invoice arrives, or sooner. The evaluated receipt settlement agreement (identified in Figure 6.10 as Auto-
EvalGRSetmt Del.) is created between the vendor and the purchasing department. 
The agreement allows the purchasing department to send payments for the goods 
received at the time those materials are posted into stock. The vendor will not send 
an invoice for the material sent. This method of ERS, sometimes called a two-way 
match, is designated a best practice by many purchasing experts.</div>`
        },
        {
            id: "day8-c2",
            title: "Creating PO with Reference",
            description: `<h3>Creating PO with Reference</h3>
<p>Services can be purchased using the normal <strong>PO</strong> creation Transaction ME21. In</p>
<p>addition to the entry of the Vendor, Purch. Organization, Purchasing Group,</p>
<p>and Delivery date, the Item Category needs to be entered and set to D for ser-</p>
<p>vices as shown in Figure 16.9.</p>
<p>An Overall Limit can be entered for all of the unplanned services on the <strong>PO</strong>. This</p>
<p>limit may not be exceeded.</p>
<p>Figure 16.9  <strong>Purchase Order</strong> Entry Screen for Services</p>
<p>Figure 16.10  Detail Screen for <strong>Purchase Order</strong> for Services</p>
<p>The service <strong>PO</strong> can allow the purchasing user to add one or a number of purchase</p>
<p>Contracts. A limit to the services purchased against the contract can be added.</p>
<p>Many services can be added to the <strong>PO</strong> that are required for the <strong>PO</strong>. The Service</p>
<p>number is entered with a quantity (Qty) and price per unit (Un) of measure. After</p>
<p>the information is entered for the individual services, the <strong>PO</strong> can be completed</p>
<p>after the header information shown in Figure 16.11 has been verified.</p>`
        },
        {
            id: "day8-c3",
            title: "PO Document Types (NB, UB, FO)",
            description: `<h3>PO Document Types (NB, UB, FO)</h3>
<p>SAP S/4HANA Finance offers SAP BPC for SAP S/4HANA Finance, as well as the ability</p>
<p>to integrate both operational/nonfinancial and financial information in a cohesive</p>
<p>manner and to optimize the planning, budgeting, and forecasting processes. It also</p>
<p>works with advanced analytics tools such as SAP HANA Live and SAP Crystal Reports,</p>
<p>which are available to build real-time dashboards.</p>
<p>It’s important to drive integration of information across the enterprise via a robust</p>
<p>infrastructure with common standards, data definitions, finance processes, and plan-</p>
<p>ning  platforms.  In  other  words,  you  should  strive  to  implement  a  single  source  of</p>
<p>truth for the financials processes.</p>
<p>Because you have easy and real-time access to your internal data via SAP S/4HANA</p>
<p>Finance’s Universal Journal, you can use this as a basis for simulating the impact on</p>
<p>the business performance of potential new offerings by using SAP’s advanced ana-</p>
<p>lytic tools, such as SAP Predictive Analytics. SAP Predictive Analytics also allows you</p>
<p>to  evaluate  opportunities  for  stimulating  your  organic  growth  or  the  potential  for</p>
<p>mergers and acquisitions.</p>
<p>SAP  Predictive  Analytics  can  provide  organizations  with  the  ability  to  anticipate</p>
<p>and  shape  their  business,  their  customer  relationships,  competitive  forces,  and</p>
<p>operational aspects. It enhances organizational performance by applying advanced</p>
<p>mathematical modeling, deep computing, simulation, data analytics, and optimiza-</p>
<p>tion  techniques  by  using  analytical  engines,  data  mining,  and  statistical  models</p>
<p>that address specific business process areas. SAP S/4HANA Finance brings greater</p>
<p>speed  and  agility  to  decision-making,  with  clear  links  to  target  performance  out-</p>
<p>comes, more reliable and accurate financial reporting, and greater visibility into the</p>
<p>levers that drive performance. By combining your own internal data organized in</p>
<p>SAP S/4HANA Finance’s Universal Journal with external data sources such as indus-</p>
<p>try trends and the nature of the competition, you can better determine the most</p>
<p>promising opportunities.</p>
<p>Industry Pain Points and SAP S/4HANA Benefits</p>
<p>SAP S/4HANA Finance can help assess and improve business performance only with</p>
<p>these sophisticated business analytics and the talent to interpret and use cross-func-</p>
<p>tional information. However, acquiring the right technological and business know-</p>
<p>how is only one of the issues CFOs must handle; many CFOs are preoccupied with</p>
<p>more immediate challenges, such as whether their own finance teams are ready to</p>
<p>weather the storm. Table 2.1 lists some finance workforce challenges and the oppor-</p>
<p>tunities available to address them.</p>
<div class="hero-tip"><strong>💡 Hero Tip:</strong> SAP S/4HANA seeks in the future to address all these issues by simplifying processes
for collecting, registering, and checking invoices; verifying them against preconfig-
ured business rules; and handling exceptions with SAP solutions for invoice and pay-
ables  management. However,  this  is  currently  an  area  in  which  little  is  delivered
within the SAP S/4HANA core that can be considered best practices. The current pro-
cesses  focus  on  the  standard  Logistics  Invoice  Verification  (LIV)  processes,  in  con-
junction  with  SAP  Fiori-enabled  invoice  approvals.  The  SAP  roadmap  will  start  to
incorporate the open-text Vendor Invoice Management (VIM) functionality, but it’s
currently unclear to what extent—that is, whether this will include optical character
recognition (OCR) and exception handling and how it will integrate with invoice han-
dling in the Ariba Network. scheduling and confirmation of planned work
(cid:2) Equipment as a service for renting and booking
(cid:2) Support for additional industry standards and content
(cid:2) Resale of content and best practices
(cid:2)</div>`
        },
        {
            id: "day8-c4",
            title: "Conditions & Pricing",
            description: `<h3>Conditions & Pricing</h3>
<p>It’s important to understand how gaps in functionality in SAP S/4HANA Cloud can be</p>
<p>fulfilled through the extensibility options. The latest version (1708) has an Extensibil-</p>
<p>ity  Cockpit  to  easily  manage  the  in-app  extensibility  (forms,  fields,  business  logic)</p>
<p>and maintain the inventory of these changes. The SAP Business Hub API provides a</p>
<p>detailed understanding of the interface development and available APIs for connect-</p>
<p>ing to other cloud solutions like SAP Ariba, SAP Fieldglass, SAP SuccessFactors, Con-</p>
<p>cur, SAP Hybris, and so on. SAP Cloud Platform is available to create new apps and to</p>
<p>provide side-by-side extensibility. Finally, a Custom CDS Views app provides already-</p>
<p>designed CDS views to create ad hoc reports and interface with other SAP and third-</p>
<p>party solutions.</p>
<p>Once  you  sign  up  for  a  subscription,  a  customer  engagement  executive  (CEE)  is  as-</p>
<p>signed by SAP to make sure the processes are followed and to provide support for the</p>
<p>fit-to-standard workshops and provisioning of the systems. With the SAP Enterprise</p>
<p>Support, a customer success manager (CSM) is assigned to provide support for exten-</p>
<p>sibility, new releases, and any technical issues encountered during the project lifecycle.</p>
<h3>The key roles within the realm of content lifecycle management are as follows</h3>
<p>In this chapter, we looked at the features of SAP S/4HANA Cloud. Although adopting</p>
<p>SAP S/4HANA Cloud provides value in terms of using cutting-edge technology as well</p>
<p>as providing the capability to interface seamlessly with other SAP and non-SAP cloud</p>
<p>offerings,  its  greatest  value  lies  in  opportunity  to  rethink  your  business  and  turn</p>
<p>business ideas into reality with SAP S/4HANA as the center of digital transformation</p>
<p>and support from the ecosystem built around it.</p>
<p>In the past, the customization and extension of SAP functionality focused mainly on</p>
<p>ABAP application development as part of the SAP ERP solution. Later, Java application</p>
<p>development  was  added  with  the  introduction  of  SAP  NetWeaver  and  service-ori-</p>
<p>ented  architecture  to  create  a  composition  environment.  Building  in  the  runtime</p>
<p>environments of SAP NetWeaver AS ABAP or SAP NetWeaver AS Java were the two</p>
<p>methods to enhance the SAP ERP core.</p>
<h3>Custom analytics and forms</h3>
<p>Reports, print forms, interactive forms</p>
<p>Deployment</p>
<p>models activation</p>
<p>of optional</p>
<p>components</p>
<div class="hero-tip"><strong>💡 Hero Tip:</strong> Software as a service (SaaS) encourages best practices even more, providing robust
functionality  with  less  customization,  which  businesses  are  willing  to  sacrifice  for
agility, faster deployments, regular feature updates, and reduced costs. However, the
inescapable truth is that customization can’t be removed fully from the technology
that  supports  businesses.  Because  each  business  is  different,  there  will  always  be
some custom application code and software parameters configuration. Best practices
may enable businesses to upgrade functionality with less prep time, effort, and risk,
which is good for software companies that want happy clients, but businesses require
technology to enable their uniqueness, too. (cid:2) New interfaces.
(cid:2) New development processes and best practices to be instilled, including a path to
production changes (such as continuous integration, delivery, or deployment). For
example,  there’s  a  significant  adjustment  for  build  management,  moving  away
from  cherry-picking  transports  that  move  object  version  updates  to  environ-
ments and toward continuous code delivery environment updates based on up-
dates to GitHub source control that trigger task runners.</div>`
        }
    ]
};
