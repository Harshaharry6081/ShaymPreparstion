export const day26Content = {
    day: 26,
    phase: 5,
    title: "S/4HANA Innovations in MM",
    concepts: [
        {
            id: "day26-c1",
            title: "CDS Views & Simplified Data Model",
            description: `<h3>CDS Views & Simplified Data Model</h3>
<p>If you are using or need to get up to speed on Materials Management in SAP ERP,</p>
<p>this is your must-have resource. In this third edition of our best-selling book, Martin</p>
<p>Murray will help you navigate these vast, sometimes overwhelming waters by offer-</p>
<p>ing a practical and straightforward guide to the ins and outs of Materials Manage-</p>
<p>ment. This book focuses on everything from goods receipt and invoice verification</p>
<p>to balance sheet valuation and the <strong>material ledger</strong>.</p>
<p>26  <strong>Material Ledger</strong>   ........................................................................   577</p>
<p>26.1  <strong>Material Ledger</strong> Overview   ...........................................................   577</p>
<p>26.1.1  Activating the <strong>Material Ledger</strong> and Actual Costing   .........   578</p>
<p>26.1.2  Benefits of Using the <strong>Material Ledger</strong>   .............................   578</p>
<p>26.2  <strong>Material Ledger</strong> Data   ..................................................................   579</p>
<p>26.2.1  Material Master Record   ..................................................   579</p>
<p>26.2.2  Data for the <strong>Material Ledger</strong>   ..........................................   581</p>
<p>26.3  Material Price Determination   ......................................................   582</p>
<p>26.3.1  Material Price Analysis   ...................................................   582</p>
<p>26.3.2  Single-Level Material Price Determination    .....................   583</p>
<p>26.3.3  Multi-Level Material Price Determination    .....................   585</p>
<p>26.3.4  Transaction-Based Material Price Determination   ............   585</p>
<p>26.4  Business Examples – <strong>Material Ledger</strong>   ..........................................   586</p>
<p>26.4.1  <strong>Material Ledger</strong> Overview   ..............................................   586</p>
<p>26.4.2  Material Price Determination   .........................................   587</p>
<p>26.5  Summary   ....................................................................................   587</p>
<p>The subject matter in this book is not just of interest to those who work directly</p>
<p>with MM but also for those who work in related SAP areas, such as Warehouse</p>
<p>Management (WM), Production Planning (PP), and Sales and Distribution (SD).</p>
<p>The subject matter should also be of interest to those in supply chain management</p>
<p>and to purchasing managers who want to understand more of the functionality</p>
<p>that they have implemented and the functionality that they may be considering,</p>
<p>such as <strong>material ledger</strong>, Service Purchasing, and Handling Unit Management.</p>
<p>Each chapter focuses on a specific MM function, exploring the different facets of</p>
<p>the function and providing examples relating to it. The book starts examining the</p>
<p>MM functionality; from the very basic key elements through standard MM func-</p>
<p>tions such as purchasing and inventory movements to more complex functions</p>
<p>such as <strong>material ledger</strong> and classification. Let’s now get an idea of what is included</p>
<h3>in each chapter</h3>
<p>EE Chapter 26: This chapter focuses on the <strong>material ledger</strong>. This may not be some-</p>
<p>thing  that  most  MM  consultants  have  been  involved  in,  so  this  chapter  pro-</p>
<p>vides a general understanding of the functionality.</p>`
        },
        {
            id: "day26-c2",
            title: "Material Ledger is Mandatory",
            description: `<h3>Material Ledger is Mandatory</h3>
<p>Figure 3.3  Production Planning and Detailed Scheduling: Traditional SAP ERP versus</p>
<p>SAP <strong>S/4HANA</strong></p>
<p>In SAP <strong>S/4HANA</strong> 1709, complex manufacturing has been added as an extended LoB</p>
<p>product  engineering  for  highly  complex  products  and  the  SAP  <strong>S/4HANA</strong>  digital</p>
<h3>core through a unified systems of record. It offers the following</h3>
<p>The second major 1709 innovation for manufacturing is demand-driven MRP, which</p>
<p>is also delivered as an extended LoB solution for SAP <strong>S/4HANA</strong>. This is a more person-</p>
<p>alized and dynamic way of replenishment planning. With the demand-driven MRP</p>
<h3>concept, companies can do the following</h3>
<p>3.2.6    General Process Optimization/<strong>Simplification</strong></p>
<p>In SAP <strong>S/4HANA</strong>, storage location MRP is no longer available; MRP can only be planned</p>
<p>on the plant and MRP area levels. With the introduction of MRP areas, MRP require-</p>
<p>ments for different subcontractors can be differentiated within the same plant. MRP</p>
<p>areas  cover  the  same  requirements  for  MRP  on  the  storage  location  level  (through</p>
<p>MRP type ND or VB).</p>
<div class="hero-tip"><strong>💡 Hero Tip:</strong> SAP <strong>S/4HANA</strong> seeks in the future to address all these issues by simplifying processes
for collecting, registering, and checking invoices; verifying them against preconfig-
ured business rules; and handling exceptions with SAP solutions for invoice and pay-
ables  management. However,  this  is  currently  an  area  in  which  little  is  delivered
within the SAP <strong>S/4HANA</strong> core that can be considered best practices. The current pro-
cesses  focus  on  the  standard  Logistics  Invoice  Verification  (LIV)  processes,  in  con-
junction  with  SAP  <strong>Fiori</strong>-enabled  invoice  approvals.  The  SAP  roadmap  will  start  to
incorporate the open-text Vendor Invoice Management (VIM) functionality, but it’s
currently unclear to what extent—that is, whether this will include optical character
recognition (OCR) and exception handling and how it will integrate with invoice han-
dling in the Ariba Network. The key point of <strong>simplification</strong> which must be evaluated by clients is the previous
functionality  for  freight  shipment  costing  that  was  delivered  through  the  LE-TRA
component,  which  is  not  the  target  architecture  within  SAP  <strong>S/4HANA</strong>.  Instead,
freight cost settlement functionality within SAP Transportation Management is the
solution of choice and will be available as an extended separately licensed solution
embedded within SAP <strong>S/4HANA</strong>. However, this integration isn’t delivered currently
for optimized bulk oil shipments and is on the roadmap for future innovation.</div>`
        },
        {
            id: "day26-c3",
            title: "Business Partner Mandate",
            description: `<h3>Business Partner Mandate</h3>
<p>Moving  forward,  SAP  will  integrate  full  or  partial  solutions  in  the  SAP  <strong>S/4HANA</strong></p>
<p>core; for example, SAP Extended Warehouse Management (SAP EWM) is part of SAP</p>
<p><strong>S/4HANA</strong>  1610.  SAP  Advanced  Planning  and  Optimization  (SAP  APO)  will  be  com-</p>
<p>pletely replaced by multiple solutions. The Production Planning and Demand Sched-</p>
<p>9.1 The Journey from SAP ERP to SAP <strong>S/4HANA</strong></p>
<p>uling (PP/DS) and Global Available to Promise (GATP; now known as advanced ATP</p>
<p>[AATP]) functions are available and integrated with the SAP <strong>S/4HANA</strong> core in the 1610</p>
<p>release. Also, IS-CWM (catch weight management in the Consumer Products industry</p>
<p>solution)  was  made  available  in  SAP  <strong>S/4HANA</strong>  1610.  However,  the  solution  is  not</p>
<p>exactly the same, nor is a conversion possible from an earlier IS-CWM solution to SAP</p>
<p><strong>S/4HANA</strong> (see SAP Note 2358928).This feature has now been enhanced in 1709 release</p>
<p>to remove some of the constraints which were in the solution in the earlier version.</p>
<p>Management, including related SAP <strong>Fiori</strong> apps.</p>
<p>(cid:2) SAP Commercial Project Management, now delivered as part of SAP <strong>S/4HANA</strong> and</p>
<p>(cid:2) SAP  Transportation  Management  is  now  embedded  in  SAP  <strong>S/4HANA</strong>  and  the</p>
<p>order integration with SAP TM has been simplified. Thus, delivery creation hap-</p>
<p>pens according to the results of transportation planning, and creation and update</p>
<p>of transportation requirements happen based on delivery documents.</p>
<div class="hero-tip"><strong>💡 Hero Tip:</strong> The implementation for SAP <strong>S/4HANA</strong> Cloud is much faster due to the standard-
ized process configurations, which include SAP Best Practices for implementation.
Both new and existing SAP ERP customers only need to perform data migration,
which is aided by migration tools and templates for different data objects. Deep
technical skills aren’t needed. For the on-premise implementation—both for the
migration scenario and the new implementation scenario—technical knowledge
and skills are mandatory for the team, because there will be customer-specific sce-
narios and considerable customization. The timelines for the SAP <strong>S/4HANA</strong> adop-
tion are also longer. SaaS is not a new concept: It has been proven, adopted, and successful over the past
decade. SAP <strong>S/4HANA</strong> Cloud offers all the benefits of an SaaS offering, like low TCO, no
hassle keeping up with upgrades, and limited liability. The highest value SAP <strong>S/4HANA</strong>
brings is access to best practices and the agility that comes with its connection to the
ecosystem around the SAP <strong>S/4HANA</strong> digital core. The SAP <strong>S/4HANA</strong> system contains
core  functionality  like  record-to-report,  order-to-cash,  and  requisition-to-pay,  but  it
also  incorporates  the  latest  innovations,  like  machine  learning.  The  SAP  <strong>Fiori</strong>  UX  is
designed  to  make  changes  easy  for  users  who’ve  been  working  with  SAP  GUI  for
decades.</div>`
        },
        {
            id: "day26-c4",
            title: "Fiori: The New UX",
            description: `<h3>Fiori: The New UX</h3>
<p>As part of the conversion to SAP <strong>S/4HANA</strong>, many code changes are applied to your</p>
<p>SAP system. Although most code will work normally after the conversion, some of</p>
<p>your custom code may require mandatory changes to ensure a smooth transition.</p>
<p>This also includes database-dependent code. As discussed earlier, SAP HANA code</p>
<p>remediation  is  also  referred  to  as  HANAtization.  (See  Section  13.2.4  for  more</p>
<p>details.)</p>
<p>Before  moving  to  SAP  <strong>S/4HANA</strong>,  it’s  important  to  understand  the  current  func-</p>
<p>tional limitations the conversion  may have on your SAP system. For example,  if</p>
<p>you aren’t currently using G/L in SAP ERP, it’s possible to convert to SAP <strong>S/4HANA</strong>,</p>
<p>but you won’t benefit from the new G/L functionalities, such as parallel accounting</p>
<p>and document splitting. In the past, if you wanted to use these functionalities, you</p>
<p>had to first migrate to New G/L, and then perform the SAP <strong>S/4HANA</strong> conversion.</p>
<p>With the latest releases of SAP <strong>S/4HANA</strong>, after conversion parallel ledgers can be</p>
<p>activated with SAP <strong>S/4HANA</strong> 1610 and document splitting with SAP <strong>S/4HANA</strong> 1709.</p>
<p>It’s important to ensure that all your current systems are patched to the minimum</p>
<p>level prior to starting the system conversion. The minimum requirements to move to</p>
<p>on-premise SAP <strong>S/4HANA</strong> are listed in this section.</p>
<p>With the latest release of SAP <strong>S/4HANA</strong> Enterprise Management, there has been con-</p>
<p>siderable enhancement to the functional scope, with key additional features mainly</p>
<p>focusing on the logistics and finance areas. These additional features have led to a</p>
<p>change in the technical prerequisites needed to run SAP <strong>S/4HANA</strong>.</p>
<p>This has also led to an adjustment in the technical architecture of SAP <strong>S/4HANA</strong>.The</p>
<h3>architecture now consists of the following (see Figure 13.16)</h3>
<p>(cid:2) SAP <strong>S/4HANA</strong> core components</p>
<p>(cid:2) SAP NetWeaver 7.5 (or above)</p>
<p>(cid:2) SAP HANA database</p>
<div class="hero-tip"><strong>💡 Hero Tip:</strong> For a greenfield implementation, this is a good opportunity to start again by leverag-
ing SAP Best Practices and standard functionality. SAP Activate supports these activ-
ities (more information on SAP Activate is available in Chapter 14). Any custom code
that is still required can be leveraged from the legacy system and adapted on the fly
to be incorporated into the new SAP <strong>S/4HANA</strong> system. As mentioned in Section 13.4, it’s important to maintain low data volumes via data
archiving or by removing unnecessary data that may not require archiving. This is
valid prior to moving to SAP <strong>S/4HANA</strong>, but should also be considered as part of your
best practices throughout the application lifecycle management (ALM) of your SAP
and IT landscapes.</div>`
        }
    ]
};
