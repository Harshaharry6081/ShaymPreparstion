export const day14Content = {
    day: 14,
    phase: 3,
    title: "Goods Receipt (GR)",
    concepts: [
        {
            id: "day14-c1",
            title: "MIGO Transaction Overview",
            description: `<h3>MIGO Transaction Overview</h3>
<p>Faisal Mahboob</p>
<p>Integration of Materials Management with Financial <strong>Accounting</strong> in SAP</p>
<p>2010, 429 pp.</p>
<p>978-1-59229-377-7</p>
<p>If you are using or need to get up to speed on Materials Management in SAP ERP,</p>
<p>this is your must-have resource. In this third edition of our best-selling book, Martin</p>
<p>Murray will help you navigate these vast, sometimes overwhelming waters by offer-</p>
<p>ing a practical and straightforward guide to the ins and outs of Materials Manage-</p>
<p>ment. This book focuses on everything from <strong>goods receipt</strong> and invoice verification</p>
<p>to balance sheet valuation and the material ledger.</p>
<p>Strategy   ..........................................................................   172</p>
<p>5.5.12  Storage Location MRP   ....................................................   174</p>
<p>5.6  <strong>Accounting</strong> Data   .........................................................................   175</p>
<p>5.6.1  General Data   ..................................................................   175</p>
<p>5.6.2  Current Valuation   ...........................................................   176</p>
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
<p>5.8.4  Material Requirements Planning Data   ............................   185</p>
<p>5.8.5  <strong>Accounting</strong> Data   ............................................................   186</p>
<p>5.9  Summary   ....................................................................................   187</p>
<p>6.1  General Data   ..............................................................................   189</p>
<p>Address Screen   ...............................................................   190</p>
<p>Control Screen   ...............................................................   192</p>
<p>Payment Transactions   .....................................................   196</p>
<p>6.2  <strong>Accounting</strong> Information   ..............................................................   199</p>
<p>6.2.1  <strong>Accounting</strong> Information    ................................................   199</p>
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
<p>20.1  Goods Movements  ......................................................................   463</p>
<p>20.1.1  Stock Overview    .............................................................   464</p>
<p>20.1.2  Material Document    .......................................................   465</p>
<p>20.1.3  Movement Types   ............................................................   466</p>
<p>20.2  Goods Issue   ................................................................................   467</p>
<p>20.3  <strong>Goods Receipt</strong>   ............................................................................   468</p>
<p>20.4  Physical Inventory   .......................................................................   468</p>
<p>20.5  Returns   .......................................................................................   469</p>
<p>20.5.1  Introduction to Returns   ..................................................   469</p>
<p>20.5.2  Creating a Return   ...........................................................   469</p>
<p>20.5.3  Configuring Reason for Movement   .................................   470</p>
<p>20.5.4  Material Documents   .......................................................   472</p>
<p>20.6  Reservations    ..............................................................................   474</p>
<p>20.6.1  Introduction to Reservations   ..........................................   474</p>
<p>20.6.2  Creating a Manual Reservation   .......................................   475</p>
<p>20.6.3  MRP and Reservations   ...................................................   476</p>
<p>20.6.4  Reservations Management Program   ...............................   477</p>
<p>20.7  Stock Transfers    ...........................................................................   480</p>
<p>20.7.1  Stock Transfer and Transfer Posting   .................................   480</p>
<p>20.7.2  Transfer Between Storage Locations Using</p>`
        },
        {
            id: "day14-c2",
            title: "GR against PO (Movement Type 101)",
            description: `<h3>GR against PO (Movement Type 101)</h3>
<p>© 2013 by Galileo Press Inc., Boston (MA)<strong>Accounting</strong> Information</p>
<p>The screen shown in Figure 6.6 allows the <strong>accounting</strong> user to add vendor informa-</p>
<p>tion on the automatic payment transaction, such as Payment methods, Alternat.</p>
<p>payee, and House Bank, and payment data, such as Payt Terms and Tolerance</p>
<p>group.</p>
<p>The  Payt  Terms  on  the  Vendor  Master  record  are  entered  by  the  <strong>accounting</strong></p>
<p>department and are configured if the payment terms are not found on the system.</p>
<p>The payment terms can be configured via the navigation path, IMG • Financial</p>
<p><strong>Accounting</strong> • Accounts Receivable and Accounts Payable • Business Transac-</p>
<p>tions • Incoming Invoices/Credit Memos • Maintain Terms of Payment.</p>
<p>The Tolerance group can be configured in Transaction OBA3 or via the naviga-</p>
<p>tion path, IMG • Financial <strong>Accounting</strong> • Accounts Receivable and Accounts</p>
<p>Payable • Business Transactions • Open Item Clearing • Clearing Differences •</p>
<p>Define Tolerances for Customers/Vendors.</p>
<p>This indicator should be set if the <strong>accounting</strong> department wants the system to</p>
<p>check for double or duplicate invoices when they are entered.</p>
<p>© 2013 by Galileo Press Inc., Boston (MA)<strong>Accounting</strong> Information</p>`
        },
        {
            id: "day14-c3",
            title: "Stock Types (Unrestricted, QI, Blocked)",
            description: `<h3>Stock Types (Unrestricted, QI, Blocked)</h3>
<p>Transaction MIGO_GI can also be used to goods issue material for sampling. Fig-</p>
<p>ure 21.9 shows the goods issue to sampling using Transaction MIGO_GI. In this</p>
<p>example, the material and a quantity of 60 pieces have been entered to be issued</p>
<p>to sampling.</p>
<p>Figure 21.9  Goods Issue of Material to Sampling Using Transaction MIGO_GI</p>
<p>When  a  goods  issue  is  posted,  for  example,  to  a  production  order,  the  system</p>
<p>produces <strong>accounting</strong> and material documents, updates tables, and triggers events</p>
<p>in other components. This section shows the events that occur when a posting is</p>
<p>made: creating material and <strong>accounting</strong> documents, printing the goods issue slip,</p>
<p>changing stock levels, and changing the G/L account.</p>
<p>The <strong>accounting</strong> document is created in parallel with the material document during</p>
<p>the posting of the goods issue. The <strong>accounting</strong> document describes the financial</p>
<p>movements associated with the material issue, and it can be accessed from the</p>
<p>material document Transaction MB03.</p>
<p>As part of the goods issue process, the <strong>accounting</strong> software posts updates to the</p>
<p>GL material accounts. When the goods issue posts, the material is valuated at the</p>
<p>This section examines how to make a good issue reversal by canceling a mate-</p>
<p>rial  document.  Figure  21.10  shows  the  cancellation  of  Material  Document</p>
<p>4900035551. By canceling the material document, there is no requirement for a</p>
<p>movement type to be entered. This goods issue reversal method uses Transaction</p>
<p>MIGO_GI. The material document is entered, and the Cancellation option should</p>
<p>be selected.</p>`
        },
        {
            id: "day14-c4",
            title: "Accounting Entries During GR",
            description: `<h3>Accounting Entries During GR</h3>
<p>After the message log has been cleared, there is nothing to prevent the invoice</p>
<p>items from being posted. When the posting is complete, the informa tion is passed</p>
<p>through to the payment process in Financial <strong>Accounting</strong> in SAP ERP Financials.</p>
<p>The payment process updates GL accounts relevant to the posted document.</p>
<p>In SAP ERP, it is now possible to prepay vendors within the Invoice Verification function.</p>
<p>This can be used to prepay highly favored vendors. The function enables payment after issue</p>
<p>of the invoice and full exploitation of the date of required pay ment and existing cash dis-</p>
<p>counts, by posting the vendor liabilities, taxes, and cash discounts in Financial <strong>Accounting</strong></p>
<p>in advance. The system executes the payment of the invoice regardless of the relevant goods</p>
<p>receipt and the outcome of the Invoice Verification check.</p>
<p>To  execute  the  payment  program,  you  use  Transaction  F110  in  the  Financial</p>
<p><strong>Accounting</strong> component via the navigation path, SAP Menu • <strong>Accounting</strong> • Finan-</p>
<p>cial <strong>Accounting</strong> • Accounts Payable • Periodic Processing • Payments.</p>
<p>Evaluated Receipt Settlement (ERS) is the process whereby the <strong>goods receipt</strong> and</p>
<p>the PO are matched and posted without any invoice, in other words, a two-way</p>
<p>match.  The  vendor  does  not  send  an  invoice  for  materials  that  are  defined  for</p>
<p>evaluated settlement. This process is not stand ard for most companies because</p>
<p>the evaluated-receipt process requires a sig nificant level of cooperation and trust</p>
<p>between customer and vendor. How ever, this method is of particular benefit to</p>
<p>companies that purchase materials between different parts of the organization.</p>
<p>The evaluated-receipt process reduces the need for sending and matching invoices</p>
<p>between depart ments.</p>
<p>The AP department of any company will want the invoice matching to be exact</p>
<p>with no variances. However, in the real world, vari ances do occur. When there is</p>
<p>a variance, among the PO, <strong>goods receipt</strong>, and invoice, the system can allow a vari-</p>
<p>ance tolerance to be config ured.</p>
<p>The different types of tolerances are called tolerance keys, and these are pre defined</p>
<p>in SAP ERP. Each tolerance key describes a variance between the invoice and the</p>
<p><strong>goods receipt</strong> or PO. The tolerance limits are assigned to each tolerance key. Each</p>
<p>tolerance key can be defined for each separate plant. The tolerance limits can vary</p>
<p>for each plant for the same tolerance key.</p>`
        }
    ]
};
