export const day18Content = {
    day: 18,
    phase: 3,
    title: "Material Valuation & Split Valuation",
    concepts: [
        {
            id: "day18-c1",
            title: "Standard Price vs Moving Average Price",
            description: `<h3>Standard Price vs Moving Average Price</h3>
<p>If you are using or need to get up to speed on Materials Management in SAP ERP,</p>
<p>this is your must-have resource. In this third edition of our best-selling book, Martin</p>
<p>Murray will help you navigate these vast, sometimes overwhelming waters by offer-</p>
<p>ing a practical and straightforward guide to the ins and outs of Materials Manage-</p>
<p>ment. This book focuses on everything from goods receipt and invoice verification</p>
<p>to balance sheet <strong>valuation</strong> and the material ledger.</p>
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
<p>2.3.4  <strong>Valuation</strong> Level   ..............................................................   50</p>
<p>2.3.5  Assigning a Plant   ............................................................   51</p>
<p>Strategy   ..........................................................................   172</p>
<p>5.5.12  Storage Location MRP   ....................................................   174</p>
<p>5.6  Accounting Data   .........................................................................   175</p>
<p>5.6.1  General Data   ..................................................................   175</p>
<p>5.6.2  Current <strong>Valuation</strong>   ...........................................................   176</p>
<p>5.6.3  Determination of Lowest Value   ......................................   178</p>
<p>LIFO Data   ......................................................................   179</p>
<p>5.6.4</p>
<p>5.7  Costing Data   ...............................................................................   180</p>
<p>5.7.1  General Data   ..................................................................   180</p>
<p>5.7.2  Quantity Structure Data   .................................................   181</p>
<p>Standard Cost Estimate   ..................................................   182</p>
<p>5.7.3</p>
<p>Planned Prices   ................................................................   183</p>
<p>5.7.4</p>
<p>5.8  Business Examples – Material Master Data   ..................................   183</p>
<p>5.8.1</p>
<p>Plant and Storage Location Data   ....................................   184</p>
<p>5.8.2  Warehouse Data  .............................................................   184</p>
<p>5.8.3  Quality Management Data   .............................................   185</p>
<p>11.1  Purchase Requisition   ...................................................................   301</p>
<p>11.2  Request for Quotation   ................................................................   302</p>
<p>11.3  Quotation   ...................................................................................   304</p>
<p>11.4  Purchase Order   ...........................................................................   305</p>
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
<p>Service Master Record   ................................................................   411</p>
<p>16.1.1  Activity Number   ...........................................................   412</p>
<p>16.1.2</p>
<p>Service Category   ...........................................................   412</p>
<p>16.1.3  Material/Service Group   .................................................   413</p>
<p>16.1.4</p>
<p>Tax Indicator   ................................................................   413</p>
<p>16.1.5  <strong>Valuation</strong> Class   .............................................................   413</p>
<p>16.1.6</p>
<p>Formula   ........................................................................   413</p>
<p>16.1.7  Graphic   ........................................................................   415</p>
<p>Standard Service Catalog (SSC)   ....................................................   415</p>
<p>16.2.1  Overview   ......................................................................   415</p>
<p>16.2.2  Creating a SSC Entry   .....................................................   415</p>
<p>16.3  Conditions in ESM   ......................................................................   417</p>
<p>Total Price Condition   ....................................................   417</p>
<p>16.4  Procurement of Services   ..............................................................   419</p>
<p>16.4.1  Using a Purchase Order   ................................................   419</p>
<p>Entry of Services   .........................................................................   422</p>
<p>Service Entry Sheet   .......................................................   422</p>
<p>16.5.1</p>
<p>16.6  Blanket Purchase Order   ..............................................................   423</p>
<p>16.6.1  Creating a Blanket Purchase Order   ................................   423</p>
<p>16.7  Business Examples – External Service Management   .....................   425</p>
<p>Service Master Record   ..................................................   425</p>
<p>16.7.1</p>
<p>16.7.2  Procurement of Services   ...............................................   426</p>
<p>16.7.3  Blanket Purchase Order   ................................................   426</p>
<p>Summary   ....................................................................................   427</p>
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
<p>17.6  Summary   ....................................................................................   439</p>`
        },
        {
            id: "day18-c2",
            title: "Valuation Areas",
            description: `<h3>Valuation Areas</h3>
<p>In the vendor-evaluation configuration steps, the weighting of the criteria can be</p>
<p>defined for each valid purchasing organization. The configuration can be found</p>
<p>using the navigation path, IMG • Materials Management • Purchasing • Vendor</p>
<p>Evaluation • Maintain Purchasing Organization Data.</p>
<p>In the configuration for the purchasing organization, the user can also configure</p>
<p>the points given for levels of evaluation. The system can calculate any variances</p>
<p>that the vendor may have — in price, for example — and the purchasing user can</p>
<p>determine how many points to award for certain variance ranges from 100% to</p>
<p>plus or minus a certain total variance. As shown in Figure 11.12, the on-time deliv-</p>
<p>ery gives a point score of 100, a 1% variance in the delivery drops the point score</p>
<p>to 90, a 20% variance drops the points score to 60, and a 99.9% variance drops the</p>
<p>points score all of the way down to 0.</p>
<p>© 2013 by Galileo Press Inc., Boston (MA)Vendor Evaluation</p>
<p>After  the  configuration  is  complete,  the  maintenance  of  a  vendor’s  evaluation</p>
<p>record can be performed. The maintenance allows the vendor to have the subjec-</p>
<p>tive scores entered into its evaluation. For example, the scores for price and deliv-</p>
<p>ery can be based on transaction data, but the scoring for quality and service can be</p>
<p>subjective and decided upon outside of SAP ERP. The maintenance of individual</p>
<p>vendor evaluation can be performed using Transaction ME61 or via the navigation</p>
<p>path, SAP Menu • Logistics • Materials Management • Purchasing • Master</p>
<p>Data • Vendor Evaluation • Maintain.</p>
<p>The maintenance of a vendor’s evaluation is at the purchasing organization level,</p>
<p>which  means  that  a  vendor  can  be  evaluated  differently  between  purchasing</p>
<p>organizations.</p>
<p>The Evaluation data shows the Weighting key and the Overall score. There is</p>
<p>a Deletion ind. that can be set if the record is to be deleted.</p>`
        },
        {
            id: "day18-c3",
            title: "Split Valuation Concept",
            description: `<h3>Split Valuation Concept</h3>
<p>The  selection  screen,  shown  in  Figure  25.13,  allows  the  user  to  enter  a  range</p>
<p>of coverage. The values in the coverage for the lowest value determination can</p>
<p>include Material, Plant, <strong>Valuation</strong> Type, Material Type, <strong>Valuation</strong> Class, and</p>
<p>Material Group. In this example, the coverage has been limited to Plant 3000.</p>
<p>After the selection criteria have been entered in Figure 25.13, the transaction can</p>
<p>be executed. The resulting display, as shown in Figure 25.14, shows the range of</p>
<p>coverage, which determines the devaluation percentage and the calculated new</p>
<p>value.</p>
<p>For example, if a company has stock of 400 units of material ABC in a <strong>valuation</strong></p>
<p>area, and the number of movements has been only 40 in the period, then the</p>
<p>movement rate is movements divided by the stock, that is, 40/400, multiplied by</p>
<p>100 to calculate the percentage, which in this case is 10%.</p>
<p>The devaluation percentage is configured in Transaction OMW6, in a similar man-</p>
<p>ner as Transaction OMW5 for range of coverage, where a percentage is configured</p>
<p>per company code. Using the previous example, if a decision was made that a</p>
<p>slow-moving material is anything with a movement rate of below 15%, then the</p>
<p>material ABC would be a slow-moving stock. This means the stock is devalued.</p>
<p>Transaction MRN2 is used to run the lowest value based on movement rate as</p>
<p>shown in Figure 25.15. The selection criteria is the same as shown earlier in Figure</p>
<p>25.13, which includes Material, Plant, <strong>Valuation</strong> Type, Material Type, Valua-</p>
<p>tion Class, and Material Group. This transaction can be found in the navigation</p>
<p>path, SAP Menu  • Logistics  • Materials Management  • <strong>Valuation</strong>  • Balance</p>
<p>Sheet <strong>Valuation</strong> • Determination of Lowest Value • Movement Rate.</p>
<p>25.4  Business Examples – Balance Sheet <strong>Valuation</strong></p>`
        },
        {
            id: "day18-c4",
            title: "Configuring Split Valuation",
            description: `<h3>Configuring Split Valuation</h3>
<p>In addition to parallel currencies, the ML can maintain several valuations. These</p>
<p>valuations can depict stock values from different views (legal, group, profit center),</p>
<p>and values in each <strong>valuation</strong> can differ by addition or exclusion of certain values.</p>
<p>This feature allows you to analyze stock values simultaneously from different per-</p>
<p>spectives. It’s used by global companies to have visibility into stocks from the fol-</p>
<h3>lowing different perspectives</h3>
<p>– Legal <strong>valuation</strong> (statutory and/or tax)</p>
<p>– <strong>Valuation</strong> for individual company segments/organizational units (profit centers)</p>
<p>In total, only three combinations of parallel currencies/parallel valuations can be</p>
<p>defined in SAP ERP.</p>
<p>(cid:2) Periodic actual cost</p>
<p>During  period  end,  <strong>valuation</strong>  of  all  goods  movements  is  performed  with  the</p>
<p>preliminary  <strong>valuation</strong>  price,  which  is  normally  the  standard  price  for  produced</p>
<p>goods and the standard or <strong>moving average</strong> price for purchased materials. ML adds</p>
<p>a feature to calculate periodic actual cost. In this case, all variances from the pre-</p>
<p>liminary <strong>valuation</strong> of materials are collected in the ML. At period end, revaluation</p>
<p>of  ending  inventory  and  consumption  can  be  performed  with  the  determined</p>
<p>actual price. Revaluation is possible using different rules for different valuations.</p>
<p>(cid:2) The absence of a comprehensive reporting tool for different material valuations</p>`
        }
    ]
};
