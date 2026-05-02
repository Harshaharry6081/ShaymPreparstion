export const day21Content = {
    day: 21,
    phase: 4,
    title: "Logistics Invoice Verification (LIV)",
    concepts: [
        {
            id: "day21-c1",
            title: "MIRO Transaction Overview",
            description: `<h3>MIRO Transaction Overview</h3>
<p>If you are using or need to get up to speed on Materials Management in SAP ERP,</p>
<p>this is your must-have resource. In this third edition of our best-selling book, Martin</p>
<p>Murray will help you navigate these vast, sometimes overwhelming waters by offer-</p>
<p>ing a practical and straightforward guide to the ins and outs of Materials Manage-</p>
<p>ment. This book focuses on everything from goods receipt and <strong>invoice verification</strong></p>
<p>to balance sheet valuation and the material ledger.</p>
<p>4.5  Purchasing Data   ..........................................................................   109</p>
<p>4.5.1  General Data   ..................................................................   110</p>
<p>4.5.2  Purchasing Value Key   .....................................................   112</p>
<p>4.5.3  Other Data/Manufacturer Data   ......................................   114</p>
<p>4.5.4  Manufacturer Parts   .........................................................   116</p>
<p>Foreign Trade Data   .........................................................   117</p>
<p>4.5.5</p>
<p>4.5.6  Origin/EU Market Organization/Preferences    ..................   118</p>
<p>Legal Control  ..................................................................   119</p>
<p>4.5.7</p>
<p>4.6  Forecasting Data   .........................................................................   120</p>
<p>4.6.1  General Data   ..................................................................   121</p>
<p>4.6.2  Number of Periods Required    .........................................   122</p>
<p>4.6.3  Control Data   ..................................................................   123</p>
<p>4.7  Work Scheduling Data   ................................................................   124</p>
<p>4.7.1  General Data   ..................................................................   125</p>
<p><strong>Tolerance</strong> Data   ...............................................................   126</p>
<p>4.7.2</p>
<p>In-House Production Time in Days   .................................   127</p>
<p>4.7.3</p>
<p>4.8  Sales Organizational Data   ...........................................................   128</p>
<p>4.8.1  General Data    .................................................................   129</p>
<p>4.8.2  Tax Data   .........................................................................   130</p>
<p>4.8.3  Quantity Stipulations   .....................................................   131</p>
<p>4.8.4  Grouping Items   ..............................................................   132</p>
<p>4.8.5  Material Groups   .............................................................   133</p>
<p>4.8.6  Product Attributes   ..........................................................   134</p>
<p>4.9  Sales General Data   ......................................................................   134</p>
<p>4.9.1  General Data    .................................................................   135</p>
<p>4.9.2</p>
<p>Shipping Data   ................................................................   135</p>
<p>4.9.3  General Plant Parameters   ...............................................   136</p>
<p>4.10  Business Examples – Material Master Data   ..................................   137</p>
<p>4.10.1  Material Type   .................................................................   137</p>
<p>4.10.2  Classification Data   ..........................................................   138</p>
<p>4.10.3  Purchasing Data   .............................................................   139</p>
<p>4.10.4  Sales Data   ......................................................................   139</p>
<p>4.11  Summary   ....................................................................................   140</p>
<p>24  <strong>Invoice Verification</strong>   ...................................................................   537</p>
<p>24.1  Standard <strong>Three-Way Match</strong>   ........................................................   537</p>
<p>24.1.1  Entering an Invoice   ........................................................   537</p>
<p>24.1.2  Simulate Posting   ............................................................   540</p>
<p>Invoice Posting   ...............................................................   541</p>
<p>24.1.3</p>
<p>24.2  Evaluated Receipt Settlement    ....................................................   542</p>
<p>24.2.1  Benefits of ERS   ...............................................................   542</p>
<p>24.2.2  Running the Evaluated Receipt Settlement    ....................   543</p>
<p>24.3  Document Parking   ......................................................................   544</p>
<p>24.3.1  Benefits of Document Parking   ........................................   544</p>
<p>24.3.2  Parking an Invoice   ..........................................................   544</p>
<p>24.4  Variances   ....................................................................................   545</p>
<p>24.4.1  Variances Overview   ........................................................   545</p>
<p>24.4.2  <strong>Tolerance</strong> Limits   .............................................................   545</p>
<p>24.5  Blocking Invoices   ........................................................................   548</p>
<p>24.5.1  Blocking Invoices   ...........................................................   548</p>
<p>24.5.2  Manual Block   .................................................................   548</p>
<p>24.5.3  Stochastic or Random Block   ...........................................   550</p>
<p>24.5.4  Block Due to Amount of an Invoice Item   ........................   551</p>
<p>24.5.5  Block Due to Variance of an Invoice Item   .......................   553</p>
<p>24.6  Releasing Invoices   .......................................................................   554</p>
<p>24.6.1  Releasing Invoices Automatically   ....................................   554</p>
<p>24.7  Business Examples – <strong>Invoice Verification</strong>   .....................................   555</p>
<p>24.7.1  Evaluated Receipt Settlement   .........................................   555</p>
<p>24.7.2  Variances   .......................................................................   556</p>
<p>24.7.3  Blocking Invoices   ...........................................................   557</p>
<p>24.8  Summary   ....................................................................................   558</p>
<p>EE Chapter 24: This chapter describes the SAP ERP process of <strong>Invoice Verification</strong>.</p>
<p>The  chapter  describes  the  standard  three-way  match  as  well  as  other  invoice</p>
<p>options  in  SAP  ERP  such  as  the  evaluated  receipt  settlement  or  the  two-way</p>
<p>match.  The  chapter  also  reviews  the  function  of  blocking  and  releasing</p>
<p>invoices.</p>
<p>EE Pay on receipt of the vendor invoice (<strong>three-way match</strong>)</p>`
        },
        {
            id: "day21-c2",
            title: "Tolerances in Invoice Verification",
            description: `<h3>Tolerances in Invoice Verification</h3>
<p>A pharmaceutical company can voluntarily recall a product. If the company finds</p>
<p>that a result from a test on a batch was incorrect and that puts the batch out of</p>
<p><strong>tolerance</strong>, then the product made from that batch could be hazardous.</p>
<p>The errors could go all of the way back to the vendor, if any of the material was</p>
<p>purchased. If a vendor informs the company that a batch of purchased material</p>
<p>was out of <strong>tolerance</strong>, then this batch must be traced through the production pro-</p>
<p>cess to find all finished goods batches that may contain the faulty batch.</p>
<p>The date when the batch was produced can be entered into this field. In some</p>
<p>industries, this field is also used as the date the material was tested or retested.</p>
<p>If a material is found to be still in <strong>tolerance</strong> after the shelf-life date has expired,</p>
<p>the material can be retested, and the date of the retest is entered into this field, in</p>
<p>addition to a new Shelf Life Exp. Date. Check with your clients to see how they</p>
<p>need to use this field.</p>
<p>The default for the status is Released; however, the user has the option to set the</p>
<p>status as Incomplete or Locked. The Incomplete status can be used when not all</p>
<p>characteristic values are known at the time of data entry. A Locked status may be</p>
<p>required by the user if the batch characteristics are incorrect or if the batch is to</p>
<p>be held back because of the batch results being outside of tolerances. Figure 8.4</p>
<p>shows the status options available to the user.</p>
<p>A Swiss manufacturer of specialty additives had implemented SAP ERP as part of</p>
<p>an enterprise-wide migration a number of years ago. The manufacturer offered a</p>
<p>limited number of standard products, and the majority of its business was in the</p>
<p>manufacture  of  custom  additives  that  were  commissioned  by  customers.  Over</p>
<p>time, the R&D team, along with marketing, concluded that these custom requests</p>
<p>were narrowing to the point where the company could market a few products and</p>
<p>produce those with a variety of specifications that would fall within the tolerances</p>
<p>demanded by these custom requests. Each batch of product was tested for a vari-</p>
<p>ety of chemical and physical properties. The results of the tests were entered into</p>
<p>a number of characteristics that were allocated to the batch. The batch-determi-</p>
<p>nation process in the sales function could find specific batches based on customer</p>
<p>requirements.</p>
<p>Customers had the ability to call and place orders, which has since been replaced</p>
<p>by an online ordering system, to see if a batch of product was available. If a cus-</p>
<p>tomer found a batch that was within the required tolerances, then the product</p>
<p>could be shipped immediately, thus saving days or weeks for the customer.</p>`
        },
        {
            id: "day21-c3",
            title: "Blocking Invoices",
            description: `<h3>Blocking Invoices</h3>
<p>© 2013 by Galileo Press Inc., Boston (MA)Standard <strong>Three-Way Match</strong></p>
<p>In SAP ERP, it is now possible to prepay vendors within the <strong>Invoice Verification</strong> function.</p>
<p>This can be used to prepay highly favored vendors. The function enables payment after issue</p>
<p>of the invoice and full exploitation of the date of required pay ment and existing cash dis-</p>
<p>counts, by posting the vendor liabilities, taxes, and cash discounts in Financial Accounting</p>
<p>in advance. The system executes the payment of the invoice regardless of the relevant goods</p>
<p>receipt and the outcome of the <strong>Invoice Verification</strong> check.</p>
<p>A new report (RMMR1MDC) is available within <strong>Invoice Verification</strong>, with which you can</p>
<p>automatically settle planned delivery costs. To invoke the report, use Transaction MRDC or</p>
<p>the navigation path, SAP Menu • Logistics • Materials Man agement • Logistics Invoice</p>
<p>Verification • Automatic Settlement • Automatic Delivery Cost Settlement.</p>
<p>Most companies will still use the traditional <strong>three-way match</strong> to process invoices</p>
<p>and pay vendors. However, as more efficiencies are being sought in the supply</p>
<p>chain in an effort to reduce costs, other techniques are being introduced. The next</p>
<p>section discusses the use of one of those processes, Evaluated Receipt Settlement</p>
<p>(ERS).</p>
<p>The ERS indicator can be found on the Vendor Master record, Transaction MK02</p>
<p>or MK03, as shown in Figure 24.4. The ERS indicator on the vendor file is passed</p>
<p>through to the PO by way of the purchase informa tion record or the vendor file.</p>
<p>It is possible to remove the ERS indicator in the PO if normal <strong>Invoice Verification</strong></p>
<p>is required.</p>
<p>The ERS process can be run on a schedule or on an ad-hoc basis. The ERS Transac-</p>
<p>tion MRRL can be found by the navigation path, SAP Menu • Logistics • Mate-</p>
<p>rials Management • Logistics <strong>Invoice Verification</strong> • Automatic Settle ment •</p>
<p>Evaluated Receipt Settlement.</p>`
        },
        {
            id: "day21-c4",
            title: "Releasing Invoices (MRBR)",
            description: `<h3>Releasing Invoices (MRBR)</h3>
<p>To release the invoices automatically, use Transaction <strong>MRBR</strong>, which is shown in</p>
<p>Figure 24.15. The transaction can be found using the nav igation path, SAP Menu •</p>
<p>Logistics • Materials Management • Logistics <strong>Invoice Verification</strong> • Further</p>
<p>Processing • Release Blocked Invoices.</p>
<p>Figure 24.15  Selection Screen for Transaction <strong>MRBR</strong>: Releasing Invoices Manually</p>
<p>© 2013 by Galileo Press Inc., Boston (MA)Business Examples – <strong>Invoice Verification</strong></p>
<p>If the AP department decides that it wants to review all invoices before release,</p>
<p>then Transaction <strong>MRBR</strong> allows the user to flag that the release of the invoices will</p>
<p>be made manually. In this case, the program will display all of the relevant blocked</p>
<p>invoices for the selection criteria entered.</p>
<p>Figure 24.16  Releasing Blocked Invoices Identified by Transaction <strong>MRBR</strong></p>
<p>24.7  Business Examples – <strong>Invoice Verification</strong></p>`
        }
    ]
};
