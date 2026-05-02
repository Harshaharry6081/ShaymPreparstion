export const day11Content = {
    day: 11,
    phase: 2,
    title: "Special Procurement: Subcontracting",
    concepts: [
        {
            id: "day11-c1",
            title: "Subcontracting Process Flow",
            description: `<h3>Subcontracting Process Flow</h3>
<p>5.2  Plant Data/Storage Location   .......................................................   144</p>
<p>5.2.1  General Data   ..................................................................   144</p>
<p>Shelf Life Data   ................................................................   147</p>
<p>5.2.2</p>
<p>5.3  Warehouse Management Data   ....................................................   149</p>
<p>5.3.1  General Data   ..................................................................   149</p>
<p>Storage Strategies   ...........................................................   150</p>
<p>5.3.2</p>
<p>5.3.3  Palletization Data   ...........................................................   153</p>
<p>Storage Bin Stock   ...........................................................   154</p>
<p>5.3.4</p>
<p>5.4  Quality Management Data   ..........................................................   155</p>
<p>5.4.1  General Data   ..................................................................   155</p>
<p>5.4.2  Procurement Data   ..........................................................   157</p>
<p>5.5  Material Requirements Planning Data   .........................................   158</p>
<p>5.5.1  General Data   ..................................................................   159</p>
<p>5.5.2  MRP Procedure   ..............................................................   160</p>
<p>5.5.3</p>
<p>Lot Size Data    .................................................................   161</p>
<p>5.5.4  Procurement   ..................................................................   164</p>
<p>5.5.5  Net Requirements Calculations   .......................................   165</p>
<p>5.5.6</p>
<p>Forecast Requirements   ...................................................   167</p>
<p>5.5.7  Planning   .........................................................................   168</p>
<p>5.5.8  Availability Check   ...........................................................   169</p>
<p>5.5.9  <strong>Bill of Materials</strong> Explosion/Dependent Requirements   .....   171</p>
<p>5.5.10  Discontinued Parts   .........................................................   172</p>
<p>5.5.11  Repetitive Manufacturing/Assembly/Deployment</p>
<p>7.3  Business Examples – Purchasing Information Data   .......................   233</p>
<p>Standard Purchasing Information Record    .......................   233</p>
<p>7.3.1</p>
<p>7.3.2</p>
<p><strong>Subcontracting</strong> Purchasing Information Record  ...............   234</p>
<p>Summary   ....................................................................................   235</p>
<p>24.1  Standard Three-Way Match   ........................................................   537</p>
<p>24.1.1  Entering an Invoice   ........................................................   537</p>
<p>24.1.2  Simulate Posting   ............................................................   540</p>
<p>Invoice Posting   ...............................................................   <strong>541</strong></p>
<p>24.1.3</p>
<p>24.2  Evaluated Receipt Settlement    ....................................................   542</p>
<p>24.2.1  Benefits of ERS   ...............................................................   542</p>
<p>24.2.2  Running the Evaluated Receipt Settlement    ....................   543</p>
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
<p>24.7.1  Evaluated Receipt Settlement   .........................................   555</p>
<p>24.7.2  Variances   .......................................................................   556</p>
<p>24.7.3  Blocking Invoices   ...........................................................   557</p>
<p>24.8  Summary   ....................................................................................   558</p>
<p>Empties are materials consisting of returnable transport packaging and can be sub-</p>
<p>ject to a nominal deposit. Empties can be made from several materials grouped</p>
<p>together in a bill of material (<strong>BOM</strong>) that is assigned to a finished material. Exam-</p>
<p>ples of empties include crates, drums, bottles, or pallets.</p>
<p>With SAP ERP, there is a new extension called EA-CP. This new function for empties man-</p>
<p>agement is available in MM. The functionality allows the use of sales BOMs in purchasing</p>
<p>and sales and adds empties items to full product items in purchase orders (POs). You can</p>
<p>also process these empties items in Invoice Verification.</p>
<p>This functionality allows separate valuations for accounting purposes of full products and</p>
<p>ties empties and compatibility with other solutions that use BOMs (e.g., a free goods dis-</p>
<p>count).</p>`
        },
        {
            id: "day11-c2",
            title: "Bill of Materials (BOM) Basics",
            description: `<h3>Bill of Materials (BOM) Basics</h3>
<p>EE Selection  by  Production  Version:  Alternative  <strong>BOM</strong>  is  defined  in  production</p>
<p>The Component scrap percentage is needed to calculate the correct figure for com-</p>
<p>ponent stock in MRP. This field is needed if the material is a component in a <strong>BOM</strong>.</p>
<p>If a <strong>BOM</strong> for a finished material needs 400 units of material X, and material X has</p>
<p>a component scrap figure of 10%, then the actual figure needed is 110%, that is,</p>
<p>440 units of material X. This figure is not used if it is defined in the <strong>BOM</strong>.</p>
<p>Explode <strong>BOM</strong>, check material availability</p>
<p>Check material availability; no <strong>BOM</strong> explosion</p>
<p>Check material availability; <strong>BOM</strong> explosion if necessary</p>
<p>This field should be selected if the material will not have a material cost estimate,</p>
<p>a sales order cost estimate, or a procurement alternative. The material will also be</p>
<p>unable to be part of a <strong>BOM</strong>’s explosion.</p>`
        },
        {
            id: "day11-c3",
            title: "Subcontracting PO & Item Category L",
            description: `<h3>Subcontracting PO & Item Category L</h3>
<p>A purchase requisition can be generated automatically when the routing in the</p>
<p>production order involves an operation whereby the material needs to be sent out</p>
<p>for external processing, for example, <strong>subcontracting</strong> work.</p>
<p>Another way a purchase requisition can be produced is when the <strong>BOM</strong> calls for a</p>
<p>material that is a non-stock item. This may occur when a special item is required</p>
<p>for the production order or if the material is no longer purchased by the company.</p>
<p>For example, a company that produces furnaces may need to incorporate a special</p>
<p>filter for furnaces that are made for customers based in California. The clean air</p>
<p>Before  creating  a  scheduling  agreement,  the  purchasing  user  must  define  the</p>
<p>account assignment, purchasing organization, and purchasing group. A scheduling</p>
<p>agreement can be created for <strong>subcontracting</strong>, consignment, and stock transfer.</p>
<p>A Florida-based industrial tools manufacturer implemented SAP ERP five years</p>
<p>ago for the Accounting, Human Resources, and Inventory Management functions.</p>
<p>The company was considering expanding the use of SAP ERP to the purchasing</p>
<p>and production areas. A team from the production department was assembled to</p>
<p>review the finished goods and determine what would be the best method to use</p>
<p>for planning the components that are used. The team’s analysis of the products</p>
<p>found that they could implement MRP, which would require BOMs to be devel-</p>
<p>oped for all finished goods. The BOMs were available on a PC system, but these</p>
<p>had not been updated in a number of years and, accuracy was a major concern.</p>
<p>The production order requires materials that are identified in the bill of materi-</p>
<p>als (<strong>BOM</strong>) to complete production of finished goods. The MRP process plans the</p>
<p>order and ensures the correct materials are available, and the MM process supplies</p>
<p>material to the order through a goods issue. Apart from the planned issue of mate-</p>
<p>rial to a production order, the material can be issued to a production order by an</p>
<p>unplanned issue and also by a process known as backflushing.</p>
<p>If the inventory user has information on the production order and the material</p>
<p>needed, the goods issue can be created with reference to the <strong>BOM</strong>.</p>`
        },
        {
            id: "day11-c4",
            title: "Providing Components (ME2O, Mvt 541)",
            description: `<h3>Providing Components (ME2O, Mvt 541)</h3>
<p>Account, 176, 199, 378, 413, <strong>541</strong></p>
<p>Account number, 332</p>
<p>Block, 205</p>
<p>Block keys, 205</p>
<p>Instructions, 196</p>
<p>Method, 71, 205</p>
<p>Period, 204</p>
<p>Process, <strong>541</strong></p>
<p>Program, <strong>541</strong></p>
<p>Rules, <strong>541</strong></p>
<p>Slip, 194</p>
<p>Term, 71, 204</p>
<p>Transaction, 196, 197</p>
<p>Date, 553</p>
<p>Delivery, 445</p>
<p>Line, 432, 436</p>
<p>Manager, <strong>541</strong></p>
<p>Variance, 553</p>
<p><strong>Subcontracting</strong>, 76, 222, 331, 346, 382</p>
<p>Subcontractor, 328, 402</p>
<p>Subcriteria, 316, 321</p>
<p>Subledger, 199, 200</p>
<p>Subordinate class, 601</p>
<p>Subsequent settlement, 213</p>
<p>Superior class, 601</p>
<p>Supplier, 70</p>
<p>Supply chain, 38, 39, 41</p>
<p>management team, 41</p>
<p>Supplying plant, 483, 484</p>
<p>Surcharge, 313, 417</p>
<p>Syntax, 602</p>
<p>VAT, 194</p>
<p>Vendor, 40, 58, 59, 70–73, 76, 86, 157, 189,</p>
<p>218, 229, 238, 239, 241, 281, 315, 318, 327,</p>
<p>341–343, 351, 353, 361, 363, 396, 424, 444,</p>
<p>463, 468, 473, 505–507, 515, 517, 518, 537,</p>
<p>539, <strong>541</strong>–543, 548, 551, 555, 557, 589, 590,</p>
<p>608, 617, 620</p>
<p>(cid:2) Simplified <strong>subcontracting</strong> logic.</p>
<p>(cid:2) Simplified sourcing logic.</p>
<p>(cid:2) Several product master fields eliminated</p>`
        }
    ]
};
