export const day5Content = {
    day: 5,
    phase: 1,
    title: "Purchasing Info Record & Source List",
    concepts: [
        {
            id: "day5-c1",
            title: "Purpose of the Purchasing Info Record",
            description: `<h3>Purpose of the Purchasing Info Record</h3>
<p>11.1  Purchase Requisition   ...................................................................   301</p>
<p>11.2  Request for Quotation   ................................................................   302</p>
<p>11.3  Quotation   ...................................................................................   304</p>
<p>11.4  Purchase Order   ...........................................................................   305</p>
<p>11.5  <strong>Source List</strong> and Source Determination   .........................................   307</p>
<p>11.5.1  Single Source   .................................................................   307</p>
<p>11.5.2  Multi-Source   ..................................................................   308</p>
<p>11.5.3  Generate a <strong>Source List</strong>   ....................................................   310</p>
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
<p>11.8.2  <strong>Source List</strong>   .....................................................................   323</p>
<p>11.8.3  Conditions   .....................................................................   324</p>
<p>11.8.4  Vendor Evaluation   ..........................................................   324</p>
<p>11.9  Summary   ....................................................................................   325</p>
<p>EE Chapter 11: This chapter reviews the functionality included in purchasing. This</p>
<p>includes an overview of the purchase requisition, request for quotation (RFQ),</p>
<p>purchase order (PO), <strong>source list</strong>, and vendor evaluation. These topics are then</p>
<p>examined in more detail in later chapters.</p>
<p>Checking this field allows the purchasing unit of measure to be variable. The pur-</p>
<p>chasing unit of measure can be changed for a PO or the <strong>source list</strong>.</p>
<p>The <strong>Source list</strong> indicator is important to the purchasing department. If this indi-</p>
<p>cator is checked, there is a requirement to maintain a <strong>source list</strong> for procurement</p>
<p>for the plant. The <strong>source list</strong> has to have been created before a PO can be entered.</p>
<p>Maintenance of source lists is described more fully later in this book.</p>
<p>The Quota arr. usage field is a key that defines how quota arrangements are used</p>
<p>in  purchasing.  The  information  for  the  quota-arrangement  usage  key  is  found</p>
<p>in Table TMQ2 and configured via the navigation path, IMG  • Materials Man-</p>
<p>agement  • Purchasing  • <strong>Quota Arrangement</strong>  • Define <strong>Quota Arrangement</strong></p>
<p>Usage. Figure 4.13 shows the purchasing functions that can be assigned to a quota</p>
<p>arrangement usage key.</p>
<p>Figure 4.13  Purchasing Functions Assignable to a <strong>Quota Arrangement</strong> Usage Key</p>`
        },
        {
            id: "day5-c2",
            title: "Info Record Categories (Standard, Subcontracting, Consignment)",
            description: `<h3>Info Record Categories (Standard, Subcontracting, Consignment)</h3>
<p>© 2013 by Galileo Press Inc., Boston (MA)<strong>Source List</strong> and Source Determination</p>
<p>11.5  <strong>Source List</strong> and Source Determination</p>
<p>For a purchasing decision to be made, a buyer will look at the <strong>source list</strong>, which</p>
<p>contains contracted or certified vendors for a particular material.</p>
<p>In SAP ERP, each vendor can be entered into the <strong>source list</strong> for a certain mate-</p>
<p>rial for a particular plant and/or purchasing organization. The maintenance of the</p>
<p><strong>source list</strong> in SAP ERP can be accessed using Transaction <strong>ME01</strong> or via the naviga-</p>
<p>tion path, SAP Menu • Logistics • Materials Management • Purchasing • Mas-</p>
<p>ter Data • <strong>Source List</strong> • Maintain.</p>
<p>Figure 11.5 shows the initial screen of <strong>ME01</strong>. The purchasing user has to enter</p>
<p>the material and the plant where the <strong>source list</strong> is being maintained. Different</p>
<p>plants may have different vendors for the same material, due to logistical issues</p>
<p>or the cost of transportation. Other reasons may include the fact that the vendor</p>
<p>has different regional outlets with different vendor numbers. The screen in Figure</p>
<p>11.5 shows the fields that are relevant to maintaining the <strong>source list</strong>, and they are</p>
<p>described in the following sections.</p>
<p>© 2013 by Galileo Press Inc., Boston (MA)<strong>Source List</strong> and Source Determination</p>`
        },
        {
            id: "day5-c3",
            title: "Source List & ME01",
            description: `<h3>Source List & ME01</h3>
<p>© 2013 by Galileo Press Inc., Boston (MA)<strong>Source List</strong> and Source Determination</p>
<p>Figure 11.6  Selection Screen for Generating a <strong>Source List</strong> for a Material or Range of Materials</p>
<p>Source determination allows the buyer to find the most suitable source of supply</p>
<p>for a purchasing need, based on various sourcing information. This information</p>
<p>does not necessarily have to come directly from the <strong>source list</strong>. There are other</p>
<p>areas where sourcing information is found.</p>
<p>Outline agreements can offer the buyer information about current contracts in</p>
<p>place with regard to the vendor/material combination. An agreement such as a</p>
<p><strong>quota arrangement</strong> can influence sourcing because it informs buyers of the level of</p>
<p>commitment the vendors have contracted to for a given time period.</p>
<p>EE <strong>Quota arrangement</strong>: If the system finds a <strong>quota arrangement</strong> for the material</p>
<p>that is valid for the date needed, then the system will determine that vendor as</p>
<p>the source of supply.</p>
<p>EE Source  list:  If  there  are  no  valid  quota  arrangements,  then  the  system  will</p>
<p>review the entries on the <strong>source list</strong> for the required material/plant combina-</p>
<p>tion. If there is a single source or a source that is flagged as the preferred ven-</p>
<p>dor, then the system will offer this vendor as the determined source. However,</p>
<p>if there are a number of vendors on the <strong>source list</strong> that are valid by date selec-</p>
<p>tion, then the system will stop and offer the selection to the purchaser. A ven-</p>
<p>dor can then be selected from the list.</p>`
        },
        {
            id: "day5-c4",
            title: "Quota Arrangements",
            description: `<h3>Quota Arrangements</h3>
<p>Price Change Involving Vendor’s Info Records</p>
<p>Currency Change for <strong>Info Record</strong> Conditions of Vendor</p>
<p>Quantity Stipulations, 131</p>
<p><strong>Quota arrangement</strong>, 115, 311, 312</p>
<p>Quotation, 304, 313, 314, 345, 347, 348,</p>
<p>361–363, 365–367, 369, 370, 382, 384</p>
<p>Also in the realm of the product master, several fields in the MRP view won’t be used</p>
<p>any longer in SAP S/4HANA (e.g., storage location MRP, <strong>quota arrangement</strong> usage [pro-</p>
<p>curement data], etc.). There is also a new material type, SERV. In SAP S/4HANA, mate-</p>
<p>rial  type  SERV  is  introduced  for  the  product  master  for  simplification  purposes.</p>
<p>Because not all fields and user departments are relevant for this type of material, in</p>
<p>SAP S/4HANA these fields are hidden to produce a more simplified and leaner look.</p>
<p>Additional configuration for this material type is required.</p>
<p>(cid:2) Purchasing <strong>info record</strong>: procurement type F (external procurement)</p>
<p>(cid:2) Delivery schedules: procurement type F (external procurement)</p>
<p>(cid:2) Purchasing contract: procurement type F (external procurement)</p>
<p>(cid:2) Production versions are the only sources of supply for in-house production and are</p>
<p>integrated into quota arrangements. In the traditional SAP ERP system, the source</p>
<p>of supply for internal production was determined via a selection method in the</p>
<p>material attributes of quantity, explosion data, and production version. A produc-</p>
<p>tion  version  references  a  routing,  and  the  routing  is  used  to  create  production</p>
<p>orders.</p>`
        }
    ]
};
