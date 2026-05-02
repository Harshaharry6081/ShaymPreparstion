export const day9Content = {
    day: 9,
    phase: 2,
    title: "Outline Agreements: Contracts",
    concepts: [
        {
            id: "day9-c1",
            title: "Value Contracts vs Quantity Contracts",
            description: `<h3>Value Contracts vs Quantity Contracts</h3>
<p>7.3  Business Examples – Purchasing Information Data   .......................   233</p>
<p>Standard Purchasing Information Record    .......................   233</p>
<p>7.3.1</p>
<p>7.3.2</p>
<p>Subcontracting Purchasing Information Record  ...............   234</p>
<p>Summary   ....................................................................................   235</p>
<p>15.2  Maintaining a Purchase Order   .....................................................   374</p>
<p>15.3  Blocking and Canceling a Purchase Order   ....................................   375</p>
<p>15.3.1  Block a Purchase Order Line Item   .................................   375</p>
<p>15.3.2  Canceling a Purchase Order Line Item   ..........................   376</p>
<p>15.4  Account Assignment in a Purchase Order   ....................................   377</p>
<p>15.4.1  Account Assignment Overview   .....................................   377</p>
<p>15.4.2  Account Assignment Categories   ....................................   377</p>
<p>15.4.3  Single Account Assignment   ..........................................   379</p>
<p>15.4.4  Multiple Account Assignment   ......................................   380</p>
<p>15.5  Outline Purchase Agreement   ......................................................   381</p>
<p>15.5.1  Outline Purchase Agreement Overview   ........................   381</p>
<p>15.5.2  Outline Purchase Agreement Types  ...............................   381</p>
<p>Scheduling Agreement   ................................................................   382</p>
<p>Scheduling Agreement Overview   ..................................   382</p>
<p>15.6.1</p>
<p>15.6.2  Create a Scheduling Agreement Manually   .....................   382</p>
<p>15.6.3  Create a Scheduling Agreement with Reference   ............   384</p>
<p>15.7  Contracts   ....................................................................................   386</p>
<p>15.7.1</p>
<p><strong>Contract</strong> Overview   .......................................................   386</p>
<p>15.7.2  Centrally Agreed <strong>Contract</strong>   .............................................   386</p>
<p>15.7.3  Creating a <strong>Contract</strong>   .......................................................   387</p>
<p>15.7.4  <strong>Release Order</strong> Against a <strong>Contract</strong>   .................................   389</p>
<p>15.8  Vendor Confirmation   ..................................................................   390</p>
<p>15.8.1  Vendor Confirmation Overview   ....................................   390</p>
<p>15.8.2  Confirmation Configuration   ..........................................   391</p>
<p>15.8.3  Enter a Manual Confirmation   ........................................   392</p>
<p>15.9  Messages and Outputs   ................................................................   394</p>
<p>15.9.1  Message Overview   .......................................................   394</p>
<p>15.9.2  Message Creation   .........................................................   394</p>
<p>15.9.3  Message Output Definition   ..........................................   395</p>
<p>15.9.4  Output Messages   .........................................................   395</p>
<p>15.10  Pricing Procedures   ......................................................................   396</p>
<p>15.10.1  Pricing Conditions   ........................................................   396</p>
<p>15.10.2  Condition Types   ...........................................................   397</p>
<p>15.10.3  Condition Tables   ...........................................................   398</p>
<p>15.10.4  Access Sequences   .........................................................   399</p>
<p>15.10.5  Calculation Schema   ......................................................   400</p>
<p>15.10.6  Price Determination   .....................................................   401</p>
<p>15.10.7  Standard Pricing Condition Type PB00   ..........................   401</p>
<p>15.10.8  Calculation Schema for Condition Type PB00   ................   401</p>
<p>15.11  Reporting   ...................................................................................   402</p>
<p>15.11.1  Reporting Overview   .....................................................   402</p>
<p>15.12  Release Procedures   .....................................................................   403</p>
<p>15.12.1</p>
<p>Introduction to Release Procedures   ..............................   403</p>
<p>15.12.2  Release with Classification for a Purchase Requisition   ...   403</p>
<p>15.13  Business Examples – Purchase Orders   ..........................................   407</p>
<p>15.13.1  Blocking a Purchase Order    ...........................................   407</p>
<p>15.13.2  Outline Purchase Agreement    .......................................   407</p>
<p>15.13.3  Scheduling Agreement    ................................................   408</p>
<p>15.13.4  Contracts    .....................................................................   408</p>
<p>15.13.5  Releasing a Purchase Order   ..........................................   409</p>
<p>15.14  Summary   ....................................................................................   409</p>
<p>EE Chapter 15: With this chapter, we move into the area of the PO, including the</p>
<p>various functions associated with the PO, such as account assignment, message</p>
<p>output, and order type. The chapter also investigates the variations such as out-</p>
<p>line purchase agreements, scheduling agreements, and contracts. The function-</p>
<p>ality of purchase release strategy is also discussed.</p>
<p>A bill of exchange is a <strong>contract</strong> entitling an exporter to receive immediate payment</p>
<p>in the local currency for goods that would be shipped elsewhere. Time elapses</p>
<p>between payment in one currency and repayment in another, so the interest rate</p>
<p>would also be brought into the transaction. The accounting department will deter-</p>
<p>mine whether the vendor requires a bill-of-exchange limit.</p>
<p>Incoterms make international trade easier and help vendors and customers in dif-</p>
<p>ferent countries understand each other. Incoterms are standard trade definitions</p>
<p>used in international contracts. The International Chamber of Commerce (ICC)</p>
<p>based in Paris, France, devised these. The latest version is Incoterms 2000, which</p>
<p>has been translated into 31 languages.</p>
<div class="hero-tip"><strong>💡 Hero Tip:</strong> Today’s purchasing department has a plethora of information from associations, 
purchasing  think  tanks,  and  specialist  purchasing  consultants.  Companies  can 
introduce best practices along with specialized technology to ensure that the infor-
mation is available to the purchasing professional for negotiating and managing 
contracts.</div>`
        },
        {
            id: "day9-c2",
            title: "Creating a Contract (ME31K)",
            description: `<h3>Creating a Contract (ME31K)</h3>
<p>EE A <strong>contract</strong> is an outline purchase agreement against which release orders can be</p>
<p>A scheduling agreement can be created manually or can be copied with ref erence</p>
<p>to purchase requisitions, quotations, and centrally agreed contracts.</p>
<p>Before  creating  a  scheduling  agreement,  the  purchasing  user  must  define  the</p>
<p>account assignment, purchasing organization, and purchasing group. A scheduling</p>
<p>agreement can be created for subcontracting, consignment, and stock transfer.</p>
<p>Creating a scheduling agreement manually requires the purchasing user to enter</p>
<p>the details rather than referencing a quotation, purchase requisition, or <strong>contract</strong>.</p>
<p>Transaction ME31L is used to create the scheduling agreement. This can be found</p>
<p>in the navigation path, SAP Menu • Logistics • Materials Management • Pur-</p>
<p>chasing  •  Outline  Agreement  •  Scheduling  Agreement  •  Create  •  Vendor</p>
<p>Known.</p>
<p>Figure 15.13 shows the validity dates of the scheduling agreement and the terms</p>
<p>of delivery that have been agreed upon between the purchasing department and</p>
<p>the vendor. The purchasing department may have agreed on a target dollar amount</p>
<p>for the <strong>contract</strong>, which can be entered into the scheduling agreement.</p>
<p>The next section reviews the <strong>contract</strong>, both by quantity and value; how a <strong>contract</strong></p>
<p>is entered; and how releases are made against it.</p>`
        },
        {
            id: "day9-c3",
            title: "Release Orders (Call-offs)",
            description: `<h3>Release Orders (Call-offs)</h3>
<p>Blanket Order</p>
<p>Standing purchase order</p>
<p>(<strong>contract</strong>) with fixed start and end dates for</p>
<p>repetitive purchases from a single vendor.</p>
<p>Requisitioners can purchase against the order</p>
<p>until the amount of the blanket order is de-</p>
<p>pleted or the blanket order expires.</p>
<p><strong>Contract</strong></p>
<p>agreement against which materials or services</p>
<p>are released according to user requirements</p>
<p>over a specified period of time.</p>
<p>Subcontracting</p>
<p>A form of outsourcing,</p>
<p>where an external vendor produces material</p>
<p>for the customer.</p>
<p>Price Change Involving Vendor’s Contracts</p>
<p>Price Change Involving Vendor’s Contracts</p>
<p>Currency Change for <strong>Contract</strong> Conditions of Vendor</p>`
        },
        {
            id: "day9-c4",
            title: "Monitoring Contracts",
            description: `<h3>Monitoring Contracts</h3>
<h3>Complexity is reduced by the following</h3>
<p>(cid:2) One-step management of contracts and</p>
<p>use of self-service requisitioning for</p>
<p>procurement.</p>
<p>In this section, we’ll walk through the key SAP S/4HANA innovations in sourcing and</p>
<p>procurement.  We’ll  start  with  the  innovations  in  the  operational  purchasing  and</p>
<p>provide  some  examples  of  SAP  Fiori  apps  that  will  enable  companies  to  perform</p>
<p>operational procurement processes more efficiently. Then, we’ll discuss the key func-</p>
<p>tionalities for invoicing, sourcing, and <strong>contract</strong> management. Finally, we’ll examine</p>
<p>innovations in supplier evaluation and analytics.</p>
<p>(cid:2) Purchasing and invoicing spend</p>
<p>(cid:2) Contracts</p>
<p>(cid:2) Purchase order average delivery time</p>
<p>(cid:2) Supplier information</p>
<p>6.2.3    Sourcing and <strong>Contract</strong> Management</p>
<p>The processes from a sourcing and <strong>contract</strong> management perspective that are deliv-</p>
<p>ered within the first releases of SAP S/4HANA are streamlined and mostly based on</p>
<p>the standard SAP ERP transactional processes, facilitated through the same SAP Fiori</p>
<p>apps that have been available since the first release of SAP S/4HANA</p>
<p>The <strong>contract</strong> management functions that are present within the SAP S/4HANA initial</p>
<p>releases are the same as those contained within the SAP Business Suite powered by</p>
<p>SAP HANA enabled by SAP Fiori.</p>
<div class="hero-tip"><strong>💡 Hero Tip:</strong> Strategic sourcing incorporates capabilities such as sourcing projects with the abil-
ity to embed best practices for sourcing processes, approvals, and collaboration, as
well as RFx and auctions management using electronic template-based event sup-
port  for  RFI,  RFP,  and  RFQ.  SAP  Ariba  supports  multiple  auction  types,  savings
pipelines  and  tracking,  decision  support  and  optimization,  integrated  customer
support, and out-of-the-box integration with spend visibility, discovery, contracts,
suppliers, and procure-to-pay.</div>`
        }
    ]
};
