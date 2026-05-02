export const day6Content = {
    day: 6,
    phase: 2,
    title: "Purchase Requisition (PR)",
    concepts: [
        {
            id: "day6-c1",
            title: "Direct vs Indirect Procurement",
            description: `<h3>Direct vs Indirect Procurement</h3>
<p>SAP PRESS is a joint initiative of SAP and Galileo Press. The know-how</p>
<p>offered by SAP specialists combined with the expertise of the Galileo</p>
<p>Press publishing house offers the reader expert books in the field. SAP</p>
<p>PRESS features first-hand information and expert advice, and provides</p>
<p>useful skills for professional decision-making.</p>
<p>SAP PRESS offers a variety of books on technical and business related</p>
<h3>topics for the SAP user. For further information, please visit our website</h3>
<p>http://www.sap-press.com.</p>
<p>Akash Agrawal</p>
<p>Customizing Materials Management Processes in SAP ERP Operations</p>
<p>2010, 395 pp.</p>
<p>978-1-59229-280-6</p>
<p>If you are using or need to get up to speed on Materials Management in SAP ERP,</p>
<p>this is your must-have resource. In this third edition of our best-selling book, Martin</p>
<p>Murray will help you navigate these vast, sometimes overwhelming waters by offer-</p>
<p>ing a practical and straightforward guide to the ins and outs of Materials Manage-</p>
<p>ment. This book focuses on everything from goods receipt and invoice verification</p>
<p>to balance sheet valuation and the material ledger.</p>
<p>I welcomed the opportunity to work with Martin Murray again — it is always a plea-</p>
<p>sure to witness such dedication and expertise in SAP. I’m confident that you will find</p>
<p>Martin’s most recent book with SAP PRESS up to the same standard as his previous</p>
<p>books: SAP Warehouse Management Functionality and Configuration, Discover Logis-</p>
<p>tics with SAP ERP, Maximize Your Warehouse Operations with SAP ERP, and Under-</p>
<p>standing the Logistics Information System.</p>
<p>We appreciate your business, and welcome your feedback. Your comments and sug-</p>
<p>gestions are the most useful tools to help us improve our books for you, the reader.</p>
<p>We encourage you to visit our website at www.sap-press.com and share your feed-</p>
<p>back about this work.</p>
<div class="hero-tip"><strong>💡 Hero Tip:</strong> You can also create a material group hierarchy. This is difficult and time-consum-
ing, so the best practice is to use an existing hierarchical material structure already 
defined in the implementing organization. The payment terms are defined to allow the vendor to offer cash discounts and 
favorable  payment  periods  to  the  company.  In  many  accounts  payable  depart-
ments, before the time of e-commerce, the rule was to pay the vendor as close 
as possible to the last day of the agreed payment period to maximize the day’s 
payables and keep the cash within the company. However, over the past 10 years, 
vendors have been offering incentives to companies for fast payment, and pur-
chasing departments have responded by implementing best practices for paying 
vendors as soon as the invoice arrives, or sooner.</div>`
        },
        {
            id: "day6-c2",
            title: "Creating PR (ME51N) & Document Types",
            description: `<h3>Creating PR (ME51N) & Document Types</h3>
<p>The purchasing team worked with a list of about 20 trusted vendors and had a</p>
<p>secondary list of more than 100 vendors. The secondary list contained vendors</p>
<p>who they had dealt with in the past but were not regularly used or had an issue</p>
<p>with a previous purchase.</p>
<p>© 2013 by Galileo Press Inc., Boston (MA)Summary</p>
<p>The release of a RFQ can be triggered in the same way as a <strong>purchase requisition</strong> or</p>
<p>PO. The requirements for whether an RFQ is subject to a release strategy depend</p>
<p>on the configuration the company puts in place. The release strategy for an RFQ</p>
<p>may depend on the dollar value or the type of material to be purchased.</p>
<p>RFQs are important for the purchasing department because they are a powerful</p>
<p>tool with which the department can influence the vendor’s price and terms and</p>
<p>conditions in a competitive bid situation. The process examined in this chapter</p>
<p>looked at the tools available in SAP ERP that are designed to make the RFQ process</p>
<p>simple to use while allowing for the flexibility that is crucial for complex situations</p>
<p>found in purchases for large projects.</p>
<p>Chapter 14 discusses the next process in the RFQ scenario: the vendor’s reply with</p>
<p>quotation. The chapter examines how to work with vendor quotations in detail.</p>
<p>© 2013 by Galileo Press Inc., Boston (MA)After the purchasing department has received responses from the selected</p>
<p>vendors that were sent RFQs, the quotations are entered into the system,</p>
<p>comparisons are made, and the most appropriate vendor bid is accepted.</p>
<div class="hero-tip"><strong>💡 Hero Tip:</strong> This chapter described the processes included in the Document Management Sys-
tem (DMS). Most companies have developed or are developing strategies regard-
ing their documents. Having hard copy documents moving around an organization 
can cause delays, errors, and miscommunications. Scanning documents on receipt, 
for example, invoices from vendors, is one way in which companies can reduce 
the time between approvals and payments to vendors. Knowledge of the DMS in 
SAP ERP is paramount when advising clients on best practices for Purchasing and 
other areas where document management can be an issue. Best-of-breed, 36
Best practice, 204, 213, 301, 308, 620
Beta factor, 457
Beverages, 94</div>`
        },
        {
            id: "day6-c3",
            title: "Account Assignment Category",
            description: `<h3>Account Assignment Category</h3>
<p>With all the changes introduced in the past years and the innovations that are com-</p>
<p>ing alongside those changes, there is a need for more detailed information about and</p>
<p>experience with SAP S/4HANA. We know that there is detailed information available</p>
<p>for certain aspects of SAP S/4HANA, but we believe that other sources only cover a</p>
<p>subset of the overall information and that only address a specific audience. With this</p>
<p>book, we provide a comprehensive overview of the different aspects of SAP S/4HANA</p>
<p>from industry, business, and technical perspectives.</p>
<p>This book is geared toward CxOs, business owners, enterprise architects, and project</p>
<p>managers who want to get a consolidated overview of the value of SAP S/4HANA and</p>
<p>the  related  products  supporting  the  digital  transformation.  We  cover  the  industry</p>
<p>perspective  and  the  implications,  as  well  as  the  strategic,  imperative  results  of  the</p>
<p>industry transformation. Because of this scope, we believe the book is relevant for all</p>
<p>SAP-interested readers across all industries.</p>
<p>We  also  included  information  to  help  business  teams  understand  SAP  S/4HANA’s</p>
<p>functional capabilities (e.g., finance and logistics), as well as how the value scenarios</p>
<p>improve day-to-day work.</p>
<p>On the other side, we look at the technical platform and the migration, upgrading, and</p>
<p>deployment options that are useful for enterprise architects and project managers.</p>
<p>We want to encourage the readers of the book to take a closer look at the concepts we</p>
<p>introduce and consider them in future transformation and implementation projects.</p>
<p>This  reference  book  on  SAP  S/4HANA  provides  both  a  complete  overview  and</p>
<p>important details on each topic. The structure guides you from a strategical level to a</p>
<p>practical level and covers all key aspects of each topic. This book also serves as a com-</p>
<p>pendium: You can pick it up at a specific chapter and read through that chapter for</p>
<p>detailed information  on  a selected topic.  Each  chapter is  complete as  a standalone</p>
<p>source.  However,  we  recommend  that  you  start  from  the  beginning  and  work</p>
<p>through the book because some chapters do refer to previous chapters and build on</p>
<p>each other.</p>
<div class="hero-tip"><strong>💡 Hero Tip:</strong> We also share the experiences we’ve gathered in different client situations, as well as
challenges and how to solve them, with concrete examples. In addition, we’ve identi-
fied a need to prepare customers for the digital transformation and to provide them
with the right setup from the strategic, organizational level on down to the technical
and  operational levels. We aim to close the gap  at the  strategic level  by  discussing
concrete best practices and how to apply them. SAP S/4HANA seeks in the future to address all these issues by simplifying processes
for collecting, registering, and checking invoices; verifying them against preconfig-
ured business rules; and handling exceptions with SAP solutions for invoice and pay-
ables  management. However,  this  is  currently  an  area  in  which  little  is  delivered
within the SAP S/4HANA core that can be considered best practices. The current pro-
cesses  focus  on  the  standard  Logistics  Invoice  Verification  (LIV)  processes,  in  con-
junction  with  SAP  Fiori-enabled  invoice  approvals.  The  SAP  roadmap  will  start  to
incorporate the open-text Vendor Invoice Management (VIM) functionality, but it’s
currently unclear to what extent—that is, whether this will include optical character
recognition (OCR) and exception handling and how it will integrate with invoice han-
dling in the Ariba Network.</div>`
        },
        {
            id: "day6-c4",
            title: "Item Categories",
            description: `<h3>Item Categories</h3>
<p>After choosing the relevant  product version, there  are more decisions to be  made.</p>
<p>The on-premise version can be deployed in the cloud or on-premise, with options for</p>
<p>multiple deployment models (the following terms were explained in greater detail in</p>
<h3>Chapter 9)</h3>
<p>For all environments non-production/production</p>
<p>There can even be a combination or a stacking option for these deployment models.</p>
<p>Some  options  are  provided  by  the  specific  hardware,  including  the  processor.  For</p>
<p>example, IBM Power machines with their proprietary processors can provide an MDC</p>
<p>on top of a VM.</p>
<p>(cid:2) If the database size is too large, then the resource sharing options won’t work out, at</p>
<p>least for the productive environment. You might look at sharing the nonproductive</p>
<p>environments, using one of the available options (e.g., MDC/MCOD/MCOS) and vir-</p>
<p>tualization or a combination of these options. The restrictions for such deployment</p>
<p>options must be adhered to, as explained in Chapter 9. For example, there are prod-</p>
<p>ucts that can be deployed as MCOD for production, as per the whitelist provided in</p>
<p>SAP Note 1661202. These restrictions don’t apply if each application is deployed on</p>
<p>its own tenant database, but they do apply to deployments inside a given tenant</p>
<p>database (in an MDC scenario).</p>
<p>As another example, SAP supports multiple SAP HANA databases on the same sys-</p>
<p>tem (the MCOS scenario), even for the production environment, but only for scale-up</p>
<p>or  single-host  scenarios.  For  this  option,  sizing  must  be  performed  carefully,  and</p>
<p>proper volume testing is important before going live, because contention for the sys-</p>
<p>tem resources by the different components using the same system may lead to poor</p>
<p>performance in production (see SAP Note  1681092). Your choice may also be influ-</p>
<h3>enced by the following</h3>
<p>(cid:2) The underlying infrastructure from existing vendors and the scalability options</p>
<p>for that hardware. Depending on the maximum available size, the workload can be</p>
<p>virtualized so that proper resource sharing happens.</p>
<div class="hero-tip"><strong>💡 Hero Tip:</strong> The cloud vendor should architect and provide offerings based on IT Infrastruc-
ture Library (ITIL) best practices and industry-leading migration services to facili-
tate client transformation to the cloud. The vendor should have expertise in and
best  practices  for  managing  and  operating  security-rich  enterprise  data  centers
around the world. SaaS is not a new concept: It has been proven, adopted, and successful over the past
decade. SAP S/4HANA Cloud offers all the benefits of an SaaS offering, like low TCO, no
hassle keeping up with upgrades, and limited liability. The highest value SAP S/4HANA
brings is access to best practices and the agility that comes with its connection to the
ecosystem around the SAP S/4HANA digital core. The SAP S/4HANA system contains
core  functionality  like  record-to-report,  order-to-cash,  and  requisition-to-pay,  but  it
also  incorporates  the  latest  innovations,  like  machine  learning.  The  SAP  Fiori  UX  is
designed  to  make  changes  easy  for  users  who’ve  been  working  with  SAP  GUI  for
decades.</div>`
        }
    ]
};
