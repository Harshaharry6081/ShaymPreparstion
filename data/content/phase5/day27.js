export const day27Content = {
    day: 27,
    phase: 5,
    title: "MRP & MRP Live",
    concepts: [
        {
            id: "day27-c1",
            title: "Classic MRP Overview",
            description: `<h3>Classic MRP Overview</h3>
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
<p>5.5.2  <strong>MRP</strong> Procedure   ..............................................................   160</p>
<p>5.5.3</p>
<p>Lot Size Data    .................................................................   161</p>
<p>5.5.4  Procurement   ..................................................................   164</p>
<p>5.5.5  Net Requirements Calculations   .......................................   165</p>
<p>5.5.6</p>
<p>Forecast Requirements   ...................................................   167</p>
<p>5.5.7  Planning   .........................................................................   168</p>
<p>5.5.8  Availability Check   ...........................................................   169</p>
<p>5.5.9  Bill of Materials Explosion/Dependent Requirements   .....   171</p>
<p>5.5.10  Discontinued Parts   .........................................................   172</p>
<p>5.5.11  Repetitive Manufacturing/Assembly/Deployment</p>
<p>Strategy   ..........................................................................   172</p>
<p>5.5.12  Storage Location <strong>MRP</strong>   ....................................................   174</p>
<p>5.6  Accounting Data   .........................................................................   175</p>
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
<p>17.1  Master Data in CBP   ....................................................................   429</p>
<p>17.1.1  Material Master Record   ..................................................   429</p>
<p>17.1.2  Planning Calendar   ..........................................................   430</p>
<p>17.2  Planning Process   .........................................................................   432</p>
<p>17.2.1  Planning at the Plant Level   .............................................   432</p>
<p>17.2.2  Planning at the Storage Location Level   ...........................   432</p>
<p>17.3  Planning Evaluation   ....................................................................   434</p>
<p>17.3.1  <strong>MRP</strong> List   ........................................................................   434</p>
<p>17.3.2  Stock/Requirements List    ................................................   435</p>
<p>17.4  Procurement Proposal    ................................................................   436</p>
<p>17.4.1  Purchase Requisitions   .....................................................   437</p>
<p>17.4.2  Schedule Lines   ...............................................................   437</p>
<p>17.4.3  Planned Orders   ..............................................................   437</p>
<p>17.5  Business Examples – Consumption-Based Planning   .....................   437</p>
<p>17.5.1  Planning Process   ............................................................   437</p>
<p>17.5.2  Planning Evaluation   ........................................................   438</p>
<p>17.6  Summary   ....................................................................................   439</p>
<p>20.1  Goods Movements  ......................................................................   463</p>
<p>20.1.1  Stock Overview    .............................................................   464</p>
<p>20.1.2  Material Document    .......................................................   465</p>
<p>20.1.3  Movement Types   ............................................................   466</p>
<p>20.2  Goods Issue   ................................................................................   467</p>
<p>20.3  Goods Receipt   ............................................................................   468</p>
<p>20.4  Physical Inventory   .......................................................................   468</p>
<p>20.5  Returns   .......................................................................................   469</p>
<p>20.5.1  Introduction to Returns   ..................................................   469</p>
<p>20.5.2  Creating a Return   ...........................................................   469</p>
<p>20.5.3  Configuring Reason for Movement   .................................   470</p>
<p>20.5.4  Material Documents   .......................................................   472</p>
<p>20.6  Reservations    ..............................................................................   474</p>
<p>20.6.1  Introduction to Reservations   ..........................................   474</p>
<p>20.6.2  Creating a Manual Reservation   .......................................   475</p>
<p>20.6.3  <strong>MRP</strong> and Reservations   ...................................................   476</p>
<p>20.6.4  Reservations Management Program   ...............................   477</p>
<p>20.7  Stock Transfers    ...........................................................................   480</p>
<p>20.7.1  Stock Transfer and Transfer Posting   .................................   480</p>
<p>20.7.2  Transfer Between Storage Locations Using</p>
<p>EE Chapter 17: This is where we review the functionality of consumption-based</p>
<p>planning. The chapter reviews the master data required and the planning pro-</p>
<p>cess involved. The planning evaluation, using the <strong>MRP</strong> (material requirements</p>
<p>planning) list, is also discussed.</p>
<p>EE Chapter 18: In this chapter, we discuss the three elements of material require-</p>
<p>ments planning (<strong>MRP</strong>). This will be more familiar to those with a production</p>
<p>planning  background.  The  chapter  reviews  reorder  point  planning,  forecast-</p>
<p>based planning, and time-phased planning.</p>`
        },
        {
            id: "day27-c2",
            title: "MRP Live (MD01N)",
            description: `<h3>MRP Live (MD01N)</h3>
<p>Material Master records are changed to allow revised data to be entered, such as</p>
<p>changing  the  purchasing  group  on  the  purchasing  screen,  or  revising  the  <strong>MRP</strong></p>
<p>controller on the <strong>MRP</strong> screen. Changes to master records are important to ensure</p>
<p>they are as accurate as possible.</p>
<p>This transaction allows the material user to release changes made to a material or a</p>
<p>group of materials based on when the changes were made. For example, if a group</p>
<p>of materials was changed because it received a new <strong>MRP</strong> controller number, then</p>
<p>this transaction allows the material user to release the scheduled changes up to a</p>
<p>certain date. Users can run this activation in test mode so that the actual changes</p>
<p>do not take place as shown in Figure 9.6.</p>
<p>The Production Version Overview dialog box can be reached through the <strong>MRP</strong>,</p>
<p>Work Scheduling, or Costing screens. Figure 9.12 shows the Production Ver-</p>
<p>sion Overview dialog box via the <strong>MRP</strong> screen. The various fields in the Produc-</p>
<p>tion Version Overview dialog box are described next.</p>
<p>The revision level can be entered into the Material Master from the <strong>MRP</strong> screens.</p>
<p>There is an icon below the Plant field that opens a dialog box as shown in Figure</p>
<p>9.14. The dialog box requires the production user to enter an engineering Change</p>
<p>Number and a Revision Level number.</p>
<p>The source list can be used in the <strong>MRP</strong> process to determine the vendor for requi-</p>
<p>sitions and instigating schedule lines from scheduling agreements. The indicator in</p>
<p>this screen allows the planning department to determine how this source vendor</p>
<h3>influences <strong>MRP</strong></h3>
<p>The other selection fields are similar to those that can be created in Transaction</p>
<p>ME01, including validity dates and <strong>MRP</strong> relevance. There is also an option to</p>
<p>delete all existing source list records or allow them to remain. Finally, there is</p>
<p>a Test Run indicator to allow the purchasing user to run the program without</p>
<p>actually creating the source lists. We advise running this program with the indi-</p>
<p>cator  set  to  a  Test  Run  because  changes  in  the  selection  parameters  are  often</p>
<p>required.</p>`
        },
        {
            id: "day27-c3",
            title: "MRP Dispatcher",
            description: `<h3>MRP Dispatcher</h3>
<p>Reqmt Date in Figure 20.11 is the date of the planned movement. This cannot be</p>
<p>a date in the past and should be as accurate as possible, as this date is relevant to</p>
<p><strong>MRP</strong>.</p>
<p>The reservation is relevant to <strong>MRP</strong>, and when <strong>MRP</strong> is run, the reservation appears</p>
<p>on the <strong>MRP</strong> list for that material.</p>
<p>Transaction MD05 can be used to view the <strong>MRP</strong> list for a material. The transaction</p>
<p>can also be found using the navigation path, SAP Menu • Logistics • Materials</p>
<p>Management • Material Requirements Planning • <strong>MRP</strong> • Evaluations • <strong>MRP</strong></p>
<p>List – Material.</p>
<p>Figure 20.12  <strong>MRP</strong> List for a Material, Which Includes the Manual Reservations</p>
<p>The production order requires materials that are identified in the bill of materi-</p>
<p>als (BOM) to complete production of finished goods. The <strong>MRP</strong> process plans the</p>
<p>order and ensures the correct materials are available, and the MM process supplies</p>
<p>material to the order through a goods issue. Apart from the planned issue of mate-</p>
<p>rial to a production order, the material can be issued to a production order by an</p>
<p>unplanned issue and also by a process known as backflushing.</p>
<p>Backflushing occurs when either the material, production work center or routing</p>
<p>has been flagged as relevant for backflushing, and this designation is copied to the</p>
<p>production order, shown in Figure 21.5. The material can be flagged for backflush-</p>
<p>ing by setting an indicator on the Material Master record. The Backflush indicator</p>
<p>can be found in the <strong>MRP</strong> area of the Material Master record.</p>`
        }
    ]
};
