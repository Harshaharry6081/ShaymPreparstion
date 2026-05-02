export const day17Content = {
    day: 17,
    phase: 3,
    title: "Physical Inventory",
    concepts: [
        {
            id: "day17-c1",
            title: "Physical Inventory Process Flow",
            description: `<h3>Physical Inventory Process Flow</h3>
<p>20.1  Goods Movements  ......................................................................   463</p>
<p>20.1.1  Stock Overview    .............................................................   464</p>
<p>20.1.2  Material Document    .......................................................   465</p>
<p>20.1.3  Movement Types   ............................................................   466</p>
<p>20.2  Goods Issue   ................................................................................   467</p>
<p>20.3  Goods Receipt   ............................................................................   468</p>
<p>20.4  <strong>Physical Inventory</strong>   .......................................................................   468</p>
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
<p>20.7.2  Transfer Between Storage Locations Using</p>
<p>20.8  Business Examples – Inventory Management   ...............................   486</p>
<p>20.8.1  <strong>Physical Inventory</strong>   ..........................................................   486</p>
<p>20.8.2  Returns   ..........................................................................   487</p>
<p>20.8.3  Reservations   ...................................................................   487</p>
<p>20.9  Summary   ....................................................................................   488</p>
<p>23  <strong>Physical Inventory</strong>   ....................................................................   521</p>
<p>23.1  <strong>Physical Inventory</strong> Preparation   ....................................................   521</p>
<p>23.1.1  Preparations for a <strong>Physical Inventory</strong> Count   ....................   522</p>
<p>23.1.2  Creating the <strong>Physical Inventory</strong> Count Document   ...........   522</p>
<p>23.1.3  Printing the <strong>Physical Inventory</strong> Count Document   ............   524</p>
<p>23.2  Counting and Recounts   ...............................................................   526</p>
<p>23.2.1  Entering the Count   .........................................................   526</p>
<p>23.2.2  Difference List   ................................................................   527</p>
<p>23.2.3  Missing Material    ...........................................................   529</p>
<p>23.2.4  Recounts   ........................................................................   529</p>
<p>23.3  <strong>Physical Inventory</strong> Posting  ...........................................................   530</p>
<p>23.3.1  Posting the Count Document   .........................................   530</p>
<p>23.3.2  Posting a Count Without a Document   ............................   532</p>
<p>23.3.3  Accounting of Inventory Differences   ...............................   533</p>
<p>23.4  Business Examples – <strong>Physical Inventory</strong>   .......................................   534</p>
<p>23.4.1  <strong>Physical Inventory</strong> Preparation   .......................................   534</p>
<p>23.4.2  <strong>Physical Inventory</strong> Posting   ..............................................   535</p>
<p>23.5  Summary   ....................................................................................   536</p>
<p>EE Chapter 23: This chapter examines the function of the <strong>physical inventory</strong>. This</p>
<p>process is still a staple in most companies, and this chapter reviews how the</p>
<p><strong>physical inventory</strong> process can be completed in SAP ERP.</p>
<p>Enables SN to be assigned in Goods Receipt, Goods Issue, Stock</p>
<p>Transfers, Stock Transport Orders, and <strong>Physical Inventory</strong></p>`
        },
        {
            id: "day17-c2",
            title: "Creating Document (MI01) & Entering Count (MI04)",
            description: `<h3>Creating Document (MI01) & Entering Count (MI04)</h3>
<p>Transaction OMBS is used to create and change the reason for movement and can</p>
<p>be accessed via the navigation path, IMG • Materials Management • Inventory</p>
<p>Management and <strong>Physical Inventory</strong> • Movement Types • Record Reason for</p>
<p>Goods Movements.</p>
<p>To  change  the  number  of  retention  days  for  the  reservation-management  pro-</p>
<p>gram, changes need to be made in configuration. Transaction OMBN allows the</p>
<p>user to change the retention days for the calculation, as shown in Figure 20.14.</p>
<p>This transaction can be found via the navigation path, IMG • Materials Manage-</p>
<p>ment • Inventory Management and <strong>Physical Inventory</strong> • Reservation • Define</p>
<p>Default Values.</p>
<p>When  a  business  performs  a  physical  inventory,  it  is  counting  material  that  is</p>
<p>located at a location, whether that is a physical plant, a third-party warehouse, or</p>
<p>a customer’s site. A <strong>physical inventory</strong> does not have to involve every material but</p>
<p>can refer to a subset of the company’s current stock.</p>
<p>The error was quickly found by the warehouse shift manager who understood</p>
<p>the issue with the new products. The counter had been counting the boxes in the</p>
<p>warehouse and assuming the box contained 12 bottles. In fact, the three prod-</p>
<p>ucts were sold in boxes of 9, not 12, so the count would always be off by a third.</p>
<p>After the counter recounted with correct calculation, the <strong>physical inventory</strong> was</p>
<p>correct.</p>
<p>Chapter 23 examines the <strong>physical inventory</strong> functionality. The regular counting</p>
<p>of inventory, either by <strong>physical inventory</strong> or by <strong>cycle counting</strong>, has become a key</p>
<p>element  in  helping  companies  ensure  their  inventory  records  are  accurate  and</p>
<p>current.</p>
<p>Performing a <strong>physical inventory</strong> entails counting what is currently in stock in the</p>
<p>plant or storage location, comparing that count to what the SAP ERP inventory</p>
<p>system says is in stock, and making any necessary adjustments to get the counts</p>
<p>to match the physical warehouse counts.</p>`
        },
        {
            id: "day17-c3",
            title: "Posting Differences (MI07)",
            description: `<h3>Posting Differences (MI07)</h3>
<p>The selection can be entered to decide which count documents should be printed;</p>
<p>for example, Figure 23.3 shows the selection by Planned Count Date, Plant,</p>
<p>Storage Location, or <strong>Physical Inventory</strong> Document numbers. After the selec-</p>
<p>tion has been determined, the count documents can be printed.</p>
<p>© 2013 by Galileo Press Inc., Boston (MA)<strong>Physical Inventory</strong> Preparation</p>
<p>Figure 23.4 is an example of a printed <strong>physical inventory</strong> count sheet. The physical</p>
<p>count document is given to the person who will count the materials in the physical</p>
<p>area of the plant described on the document. Figure 23.4 shows that the material</p>
<p>to be counted is in plant 1000, storage location 0001. The line items on the count</p>
<p>document show the materials to be counted, and the person performing the count</p>
<p>will write the amount they counted on the document.</p>
<p>Figure 23.4  Example of a Printed <strong>Physical Inventory</strong> Count Sheet</p>
<p>After the <strong>physical inventory</strong> count sheets are printed, they can be distributed to</p>
<p>the personnel allocated for the counting process, and the count can begin.</p>
<p>With more emphasis on accuracy of material counts, many companies now only</p>
<p>use highly trained employees to count materials accurately. Companies with the</p>
<p>high inventory accuracy believe that giving employees direct responsibility for</p>
<p>counting  inventory  and  resolving  discrepancies  will  significantly  improve  the</p>
<p><strong>physical inventory</strong> process.</p>`
        },
        {
            id: "day17-c4",
            title: "Cycle Counting (ABC Indicator)",
            description: `<h3>Cycle Counting (ABC Indicator)</h3>
<p>Figure 23.10  Configuration of Reason Codes for <strong>Physical Inventory</strong> Goods Movements</p>
<p>If a count is made without a physical count document, the count can be entered</p>
<p>directly into a transaction and then be immediately posted, as shown in Figure</p>
<p>23.11.  In  this  screen,  the  required  basic  information  has  been  entered  to  post</p>
<p>a count’s Count date, Plant, and Storage Location. Transaction MI10 can be</p>
<p>accessed though the navigation path, SAP Menu  • Logistics  • Materials Man-</p>
<p>agement • <strong>Physical Inventory</strong> • Difference • Enter w/o Document Reference.</p>
<p>© 2013 by Galileo Press Inc., Boston (MA)<strong>Physical Inventory</strong> Posting</p>
<p>If the counted quantity is smaller than the book inventory, the stock account is</p>
<p>credited with the value of the inventory difference. The accounting entry is posted</p>
<p>to the expense from <strong>physical inventory</strong> account.</p>
<p>Subsequently, if the counted quantity is greater than the inventory balance, the</p>
<p>stock account is debited with the value of the inventory difference. The accounting</p>
<p>entry is posted to the income from <strong>physical inventory</strong> account.</p>
<p>23.4  Business Examples – <strong>Physical Inventory</strong></p>`
        }
    ]
};
