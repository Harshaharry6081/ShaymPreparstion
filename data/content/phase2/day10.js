export const day10Content = {
    day: 10,
    phase: 2,
    title: "Outline Agreements: Scheduling Agreements",
    concepts: [
        {
            id: "day10-c1",
            title: "Concept of Scheduling Agreements",
            description: `<h3>Concept of Scheduling Agreements</h3>
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
<p><strong>Scheduling Agreement</strong>   ................................................................   382</p>
<p><strong>Scheduling Agreement</strong> Overview   ..................................   382</p>
<p>15.6.1</p>
<p>15.6.2  Create a <strong>Scheduling Agreement</strong> Manually   .....................   382</p>
<p>15.6.3  Create a <strong>Scheduling Agreement</strong> with Reference   ............   384</p>
<p>15.7  Contracts   ....................................................................................   386</p>
<p>15.7.1</p>
<p>Contract Overview   .......................................................   386</p>
<p>15.7.2  Centrally Agreed Contract   .............................................   386</p>
<p>15.7.3  Creating a Contract   .......................................................   387</p>
<p>15.7.4  Release Order Against a Contract   .................................   389</p>
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
<p>15.13.3  <strong>Scheduling Agreement</strong>    ................................................   408</p>
<p>15.13.4  Contracts    .....................................................................   408</p>
<p>15.13.5  Releasing a Purchase Order   ..........................................   409</p>
<p>15.14  Summary   ....................................................................................   409</p>
<p>17.1  Master Data in CBP   ....................................................................   429</p>
<p>17.1.1  Material Master Record   ..................................................   429</p>
<p>17.1.2  Planning Calendar   ..........................................................   430</p>
<p>17.2  Planning Process   .........................................................................   432</p>
<p>17.2.1  Planning at the Plant Level   .............................................   432</p>
<p>17.2.2  Planning at the Storage Location Level   ...........................   432</p>
<p>17.3  Planning Evaluation   ....................................................................   434</p>
<p>17.3.1  MRP List   ........................................................................   434</p>
<p>17.3.2  Stock/Requirements List    ................................................   435</p>
<p>17.4  Procurement Proposal    ................................................................   436</p>
<p>17.4.1  Purchase Requisitions   .....................................................   437</p>
<p>17.4.2  Schedule Lines   ...............................................................   437</p>
<p>17.4.3  Planned Orders   ..............................................................   437</p>
<p>17.5  Business Examples – Consumption-Based Planning   .....................   437</p>
<p>17.5.1  Planning Process   ............................................................   437</p>
<p>17.5.2  Planning Evaluation   ........................................................   438</p>
<p>17.6  Summary   ....................................................................................   439</p>
<p>EE Chapter 15: With this chapter, we move into the area of the PO, including the</p>
<p>various functions associated with the PO, such as account assignment, message</p>
<p>output, and order type. The chapter also investigates the variations such as out-</p>
<p>line purchase agreements, scheduling agreements, and contracts. The function-</p>
<p>ality of purchase release strategy is also discussed.</p>
<p>A mid-sized automotive parts business in the United Kingdom had been using a</p>
<p>series of in-house customized systems to run its production, distribution, and main-</p>
<p>tenance facilities. The company moved its AS400-based accounting and purchasing</p>
<p>system to a new SAP ERP system and was in the process of planning the next phase</p>
<p>of  the  implementation.  To  achieve  the  biggest  cost  saving,  the  company  needed</p>
<p>to move the production, distribution, and maintenance processes to SAP ERP and</p>
<p>decommission a number of costly servers. After the initial analysis, the company was</p>
<p>unsure of how many plants to create. In the legacy system, the company had defined</p>
<p>one location for three physical buildings: one for the manufacturing of parts, one</p>
<p>maintenance facility, and a distribution center that was located a quarter mile from</p>
<p>the maintenance and production site. The final decision was to create one plant for</p>
<p>the manufacturing and maintenance facility because it was physically at the same</p>
<p>location,  and  a  separate  plant  for  the  distribution  center.  The  decision  to  create</p>
<p>a separate plant for the distribution center was made after management decided</p>
<p>to make modifications to their business processes. Management decided to create</p>
<p>storage locations at the manufacturing site for material that was being shipped out</p>
<p>immediately after being produced and for material received from vendors using a</p>
<p>just-in-time (<strong>JIT</strong>) methodology. The distribution center then became a facility whose</p>
<p>primary function was to keep finished goods inventory, rather than having the addi-</p>
<p>tional responsibility of holding raw materials for manufacturing.</p>
<p>This is a material type delivered by SAP to use for creating KANBAN containers.</p>
<p>A KANBAN container is used in the KANBAN container-based system sometimes</p>
<p>implemented at a manufacturing plant for just-in-time (<strong>JIT</strong>) replenishment of parts</p>
<p>on the production line. The KANBAN container is used to transport the material</p>`
        },
        {
            id: "day10-c2",
            title: "Creating Delivery Schedules (ME38)",
            description: `<h3>Creating Delivery Schedules (ME38)</h3>
<p>Subsequent to the header information being entered, the line items can be entered</p>
<p>for the <strong>scheduling agreement</strong>. Each line item requires that a target quantity be</p>
<p>entered, as shown in Figure 15.14. The Targ. Qty is the quantity that was agreed</p>
<p>upon by the purchasing department and the vendor.</p>
<p>Figure 15.14  Detail Line Items for <strong>Scheduling Agreement</strong> Using Transaction <strong>ME31L</strong></p>
<p>15.6.3  Create a <strong>Scheduling Agreement</strong> with Reference</p>
<p>If there is a purchase requisition or quotation that should reference the scheduling</p>
<p>agreement, the document can be identified when Transaction <strong>ME31L</strong> is run.</p>
<p>When the transaction is run, the user can reference other documents. Figure 15.15</p>
<p>shows that a <strong>scheduling agreement</strong> can be created based on the details from a pur-</p>
<p>chase requisition.</p>
<p>After choosing a purchase requisition, the details from the requisition are available</p>
<p>to be adopted and entered into the <strong>scheduling agreement</strong>. The pur chase requisi-</p>
<p>tion line items are shown in Figure 15.16. Users then use the Adopt + Details</p>
<p>button to copy the details into the <strong>scheduling agreement</strong>.</p>`
        },
        {
            id: "day10-c3",
            title: "SA vs Contract Comparison",
            description: `<h3>SA vs Contract Comparison</h3>
<p>EE Increasing the level of just-in-time (<strong>JIT</strong>) inventory</p>
<p>This chapter discussed the goods receipt process that occurs in a normal manu-</p>
<p>facturing company. It is important to receive the material to keep the production</p>
<p>line  operational  and  to  avoid  stockouts.  As  companies  move  to  <strong>JIT</strong>  operation,</p>
<p>goods receipt must be achieved in a timely fashion to keep operations flowing.</p>
<p>Understanding the processes of a goods receipt for a PO or a production order is</p>
<p>important to you as a MM consultant because these are fundamental steps in the</p>
<p>movement of materials. Other less common goods receipts are often found at plant</p>
<p>sites and should be understood to successfully advise your client.</p>
<p><strong>Scheduling Agreement</strong></p>
<p>A purchasing</p>
<p>agreement with a vendor where the vendor</p>
<p>supplies material to the customer at agreed</p>
<p>upon days and times.</p>
<p>Maintain <strong>Scheduling Agreement</strong> Supplement</p>
<p>Generation of <strong>Scheduling Agreement</strong> Releases</p>
<p>Individual Display of <strong>Scheduling Agreement</strong> Release</p>`
        }
    ]
};
