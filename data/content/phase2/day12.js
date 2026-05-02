export const day12Content = {
    day: 12,
    phase: 2,
    title: "Special Procurement: Consignment",
    concepts: [
        {
            id: "day12-c1",
            title: "The Consignment Concept",
            description: `<h3>The Consignment Concept</h3>
<p>24.1  Standard Three-Way Match   ........................................................   537</p>
<p>24.1.1  Entering an Invoice   ........................................................   537</p>
<p>24.1.2  Simulate Posting   ............................................................   540</p>
<p>Invoice Posting   ...............................................................   541</p>
<p>24.1.3</p>
<p>24.2  Evaluated Receipt <strong>Settlement</strong>    ....................................................   542</p>
<p>24.2.1  Benefits of ERS   ...............................................................   542</p>
<p>24.2.2  Running the Evaluated Receipt <strong>Settlement</strong>    ....................   543</p>
<p>24.3  Document Parking   ......................................................................   544</p>
<p>24.3.1  Benefits of Document Parking   ........................................   544</p>
<p>24.3.2  Parking an Invoice   ..........................................................   544</p>
<p>24.4  Variances   ....................................................................................   545</p>
<p>24.4.1  Variances Overview   ........................................................   545</p>
<p>24.4.2  Tolerance Limits   .............................................................   545</p>
<p>24.5  Blocking Invoices   ........................................................................   548</p>
<p>24.5.1  Blocking Invoices   ...........................................................   548</p>
<p>24.5.2  Manual Block   .................................................................   548</p>
<p>24.5.3  Stochastic or Random Block   ...........................................   550</p>
<p>24.5.4  Block Due to Amount of an Invoice Item   ........................   551</p>
<p>24.5.5  Block Due to Variance of an Invoice Item   .......................   553</p>
<p>24.6  Releasing Invoices   .......................................................................   554</p>
<p>24.6.1  Releasing Invoices Automatically   ....................................   554</p>
<p>24.7  Business Examples – Invoice Verification   .....................................   555</p>
<p>24.7.1  Evaluated Receipt <strong>Settlement</strong>   .........................................   555</p>
<p>24.7.2  Variances   .......................................................................   556</p>
<p>24.7.3  Blocking Invoices   ...........................................................   557</p>
<p>24.8  Summary   ....................................................................................   558</p>
<p>EE Chapter 24: This chapter describes the SAP ERP process of Invoice Verification.</p>
<p>The  chapter  describes  the  standard  three-way  match  as  well  as  other  invoice</p>
<p>options  in  SAP  ERP  such  as  the  evaluated  receipt  <strong>settlement</strong>  or  the  two-way</p>
<p>match.  The  chapter  also  reviews  the  function  of  blocking  and  releasing</p>
<p>invoices.</p>
<p>The vendor may offer some kind of incentive to the purchasing department to pur-</p>
<p>chase more material. This may take two forms. One may be an instant reduction in</p>
<p>price — a promotional price — for a given period. The second incentive may take</p>
<p>the form of the subsequent <strong>settlement</strong>. This is an agreement between the vendor</p>
<p>and the purchasing department under which, depending on how much material is</p>
<p>purchased, a rebate is offered at the end of an agreed period.</p>
<p>For example, an office supply vendor could agree to give a 10% rebate for the total</p>
<p>amount of purchases over a three-month period. This may have a provision that</p>
<p>the total amount of purchases would be more than 50% greater than for the same</p>
<p>period in the previous year. If the purchases were in excess of the 50%, then the</p>
<p>subsequent <strong>settlement</strong> with the vendor would take place at the end of the period.</p>
<p>The vendor would give a 10% rebate on all of the purchases over that period.</p>
<p>If the B.vol.comp./ag.nec indicator is set, data must be compared between the ven-</p>
<p>dor and the purchasing department before any subsequent <strong>settlement</strong> is posted.</p>
<p>In the example of the office-supply vendor, the agreement may depend on the</p>
<p>comparison of the files from both parties.</p>
<p>The Vendor Master record has a number of fields that are specifically concerned</p>
<p>with purchasing. These include condition data such as order currency and inco-</p>
<p>terms, and control data, such as the indicators for goods receipt invoice verifica-</p>
<p>tion, ERS, and subsequent <strong>settlement</strong>.</p>
<div class="hero-tip"><strong>💡 Hero Tip:</strong> The evaluated receipt <strong>settlement</strong> agreement (identified in Figure 6.10 as Auto-
EvalGRSetmt Del.) is created between the vendor and the purchasing department. 
The agreement allows the purchasing department to send payments for the goods 
received at the time those materials are posted into stock. The vendor will not send 
an invoice for the material sent. This method of ERS, sometimes called a two-way 
match, is designated a best practice by many purchasing experts.</div>`
        },
        {
            id: "day12-c2",
            title: "Consignment Info Record & PO (Item Cat K)",
            description: `<h3>Consignment Info Record & PO (Item Cat K)</h3>
<p>Discounts or surcharges may be percentage-based, quantity-dependent, or absolute</p>
<p>values. A user can enter conditions that do not take effect immediately at the time</p>
<p>of a transaction but at a later date, such as with subsequent <strong>settlement</strong> rebates.</p>
<p>When a purchasing agent creates a PO, the system searches existing info records</p>
<p>and documents for valid conditions and assumes any it finds as default values in</p>
<p>the new document.</p>
<p>Invoice Verification is part of the accounts payable (AP) process where ven dors are</p>
<p>paid for materials or services that they have provided to their cus tomer. The veri-</p>
<p>fication of the invoice is important to both the vendor and the customer because</p>
<p>it ensures that the quantities and the pricing are all cor rect and that neither party</p>
<p>has made an error. The standard method of Invoice Verification is the three-way</p>
<p>match. This chapter describes this proc ess and a process called Evaluated Receipt</p>
<p><strong>Settlement</strong>  (ERS),  which  is  a  two-way  match  between  the  PO  and  the  delivery</p>
<p>note, whereby the vendor is paid without an invoice being sent to the customer.</p>
<p>The first sec tion of this chapter discusses the traditional verification of the invoice</p>
<p>using a three-way match.</p>
<p>A new report (RMMR1MDC) is available within Invoice Verification, with which you can</p>
<p>automatically settle planned delivery costs. To invoke the report, use Transaction MRDC or</p>
<p>the navigation path, SAP Menu • Logistics • Materials Man agement • Logistics Invoice</p>
<p>Verification • Automatic <strong>Settlement</strong> • Automatic Delivery Cost <strong>Settlement</strong>.</p>
<p>Most companies will still use the traditional three-way match to process invoices</p>
<p>and pay vendors. However, as more efficiencies are being sought in the supply</p>
<p>chain in an effort to reduce costs, other techniques are being introduced. The next</p>
<p>section discusses the use of one of those processes, Evaluated Receipt <strong>Settlement</strong></p>
<p>(ERS).</p>
<p>Evaluated Receipt <strong>Settlement</strong> (ERS) is the process whereby the goods receipt and</p>
<p>the PO are matched and posted without any invoice, in other words, a two-way</p>
<p>match.  The  vendor  does  not  send  an  invoice  for  materials  that  are  defined  for</p>
<p>evaluated <strong>settlement</strong>. This process is not stand ard for most companies because</p>
<p>the evaluated-receipt process requires a sig nificant level of cooperation and trust</p>
<p>between customer and vendor. How ever, this method is of particular benefit to</p>
<p>companies that purchase materials between different parts of the organization.</p>
<p>The evaluated-receipt process reduces the need for sending and matching invoices</p>
<p>between depart ments.</p>`
        },
        {
            id: "day12-c3",
            title: "Goods Receipt for Consignment",
            description: `<h3>Goods Receipt for Consignment</h3>
<p>Price Change Involving Vendor’s Info Records</p>
<p>Currency Change for <strong>Info Record</strong> Conditions of Vendor</p>
<p>Batch Determination, 164</p>
<p>Criteria, 321</p>
<p>Evaluated Receipt <strong>Settlement</strong>, 213</p>
<p>Model selection, 455</p>
<p>Payment, 198, 203</p>
<p>Purchase Order, 112, 213</p>
<p>Release, 554</p>
<p>Reorder-point planning, 442</p>
<p>Availability check, 135 , 169, 170</p>
<p>Available quantity, 476</p>
<p>Available stock, 434, 443, 445, 447</p>
<p>Average price, 363</p>
<p>Engineering Change Management, 39, 261,</p>
<p>Engineering drawing, 243, 245, 612, 613</p>
<p>Environmentally Relevant, 107</p>
<p>Equal Opportunity Act, 366</p>
<p>Equipment, 82, 83, 328, 608</p>
<p>Equipment category, 83</p>
<p>ERP, 36</p>
<p>European Article Number (EAN), 106, 617</p>
<p>Evaluated Receipt <strong>Settlement</strong> (ERS), 213</p>
<p>Acknowledgement, 390, 391, 392</p>
<p>Currency, 210</p>
<p><strong>Settlement</strong>, 581</p>
<p>Type, 373</p>
<p>Number, 490, 510</p>
<p>Routing, 327</p>
<p><strong>Settlement</strong>, 581</p>`
        },
        {
            id: "day12-c4",
            title: "Consignment Settlement (MRKO)",
            description: `<h3>Consignment Settlement (MRKO)</h3>
<p>In SAP S/4HANA, sales and distribution rebates will be replaced by the condition con-</p>
<p>tract  <strong>settlement</strong>  process,  followed  by  the  <strong>settlement</strong>  management  process.  This</p>
<p>means that all existing rebate agreements can only be processed up until the end of</p>
<p>validity date and then closed by a final agreement. Customers with SAP CRM Trade</p>
<p>Promotion Management (TPM) who want to integrate their existing SAP CRM TPM</p>
<p>scenarios with SAP S/4HANA will have to use SD rebate processing, which has been</p>
<p>optimized for the database footprint. Consider the following key differences between</p>
<p>condition contract <strong>settlement</strong> and the SD rebate agreement functionality:</p>
<p>(cid:2) With condition contract <strong>settlement</strong>, SAP provides a central solution for customers</p>
<p>and vendors conditions. In the traditional solution, all customer rebate–relevant</p>
<p>billing documents are stored in table VBOX. For changes that needed to be applied</p>
<p>retrospectively, this table will need to be updated through a separate transaction</p>
<p>(VBOF) and all billing documents in this table would be locked at the same time.</p>
<p>The other issue is the size of the table; this table could contain millions of entries</p>
<p>required for rebate calculation.</p>
<p>(cid:2) In  condition  contract  <strong>settlement</strong>,  there  is  no  table  VBOF  equivalent  any  longer.</p>
<p>Rebate <strong>settlement</strong>-related information doesn’t need to be stored in a table any</p>
<p>longer;  instead,  rebate  conditions  will  be  applied  instantly.  In  addition,  con-</p>
<p>dition  contract  <strong>settlement</strong>  enables  the  user  to  use  multiple  data  sources  for</p>
<p>rebate settlements. Traditionally, this can only be done based on the billing doc-</p>
<p>uments.</p>
<p>Figure 5.3 shows the traditional SD rebate agreement versus the condition contract</p>
<p><strong>settlement</strong>.</p>
<p>Business Volume Determination, Calculation</p>
<p>via Pricing, <strong>Settlement</strong> Document Creation</p>
<p>Sales Orders, Purchase Orders, Deliveries, In-</p>
<p>voices, Goods Movements, <strong>Settlement</strong> Manage-</p>
<p>ment Documents, External Systems, POS Data</p>
<div class="hero-tip"><strong>💡 Hero Tip:</strong> The key point of simplification which must be evaluated by clients is the previous
functionality  for  freight  shipment  costing  that  was  delivered  through  the  LE-TRA
component,  which  is  not  the  target  architecture  within  SAP  S/4HANA.  Instead,
freight cost <strong>settlement</strong> functionality within SAP Transportation Management is the
solution of choice and will be available as an extended separately licensed solution
embedded within SAP S/4HANA. However, this integration isn’t delivered currently
for optimized bulk oil shipments and is on the roadmap for future innovation.</div>`
        }
    ]
};
