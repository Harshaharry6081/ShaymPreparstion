export const day20Content = {
    day: 20,
    phase: 3,
    title: "Reservation & Negative Stocks",
    concepts: [
        {
            id: "day20-c1",
            title: "Creating Reservations (MB21)",
            description: `<h3>Creating Reservations (MB21)</h3>
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
<p>20.6.2  Creating a Manual <strong>Reservation</strong>   .......................................   475</p>
<p>20.6.3  MRP and Reservations   ...................................................   476</p>
<p>20.6.4  Reservations Management Program   ...............................   477</p>
<p>20.7  Stock Transfers    ...........................................................................   480</p>
<p>20.7.1  Stock Transfer and Transfer Posting   .................................   480</p>
<p>20.7.2  Transfer Between Storage Locations Using</p>
<p>20.8  Business Examples – Inventory Management   ...............................   486</p>
<p>20.8.1  Physical Inventory   ..........................................................   486</p>
<p>20.8.2  Returns   ..........................................................................   487</p>
<p>20.8.3  Reservations   ...................................................................   487</p>
<p>20.9  Summary   ....................................................................................   488</p>
<p>EE Chapter 20: This chapter offers you an overview of the Inventory Management</p>
<p>functionality.  It  briefly  examines  the  goods  issues,  goods  receipts,  returns,</p>
<p>physical  inventory,  reservations,  and  stock  transfers.  These  items  are  then</p>
<p>examined in greater detail in the following chapters.</p>
<p>The Neg.stocks indicator can be set if there is a requirement to allow stocks of</p>
<p>this material to be in a <strong>negative stock</strong> situation. The <strong>negative stock</strong> occurs when</p>
<p>there is actual physical stock, but that stock has not been receipted into inventory.</p>
<p>If a goods issue is made from inventory, then the stock will go negative until the</p>
<p>missing goods receipt is made. This allows stock to be shipped without waiting for</p>
<p>paperwork to be completed. However, this situation is dependent on the policy</p>
<p>of the company.</p>
<p>This field is the quantity that must be ordered or produced in the case of a storage</p>
<p>location shortage. This process will lead to a stock transfer <strong>reservation</strong> within the</p>
<p>plant when a planning run is carried out, and the replenishment quantity is trans-</p>
<p>ferred from the plant to the storage location.</p>
<p>The requirement urgency can be assigned at item level in purchasing and <strong>reservation</strong> docu-</p>
<p>ments. You can uniquely assign each requirement urgency to a requirement urgency group</p>
<p>in customizing. The system determines the relevant requirement priority or overall priority</p>
<p>of a material requisition from the combination of requirement urgency group and organiza-</p>
<p>tional priority. In the standard SAP software supplied, you define the organizational priority</p>
<p>in customizing via plant/storage location combinations.</p>`
        },
        {
            id: "day20-c2",
            title: "Issuing Against Reservations",
            description: `<h3>Issuing Against Reservations</h3>
<p>Figure 20.11  Detail Line for a <strong>Reservation</strong> Created Using Transaction <strong>MB21</strong></p>
<p>for Movement Type 501</p>
<p>Enter a quantity that is the most accurate at the time the <strong>reservation</strong> is made in</p>
<p>the Req Qty field. This quantity can be fixed by setting an indicator on the item</p>
<p>detail screen.</p>
<p>The movement indicator (Mvt) is defaulted to be always on, allowing a goods</p>
<p>movement to take place for the entered <strong>reservation</strong>. However, if the inventory</p>
<p>user  does  not  want  to  allow  the  goods  movement  to  take  place  until  a  future</p>
<p>period, this indicator can be unchecked, thus disallowing any goods movement.</p>
<p>The Final Issue, or FIs, indicator is automatically set when there has been a goods</p>
<p>movement or a number of goods movements that have fulfilled the <strong>reservation</strong>.</p>
<p>If the inventory user decides that after a partial goods movement the <strong>reservation</strong></p>
<p>cannot or should not be completed, the user can set the FIs indicator.</p>
<p>The deletion indicator (Del) is used when the inventory user has decided that the</p>
<p><strong>reservation</strong> line item is incorrect or no longer needed.</p>
<p>The <strong>reservation</strong> is relevant to MRP, and when MRP is run, the <strong>reservation</strong> appears</p>
<p>on the MRP list for that material.</p>`
        },
        {
            id: "day20-c3",
            title: "Concept of Negative Stocks",
            description: `<h3>Concept of Negative Stocks</h3>
<p>© 2013 by Galileo Press Inc., Boston (MA)The inventory user can change a number of defaults for the <strong>reservation</strong> based on</p>
<p>the plant.</p>
<p>Figure 20.14  Configuration Transaction OMBN That Allows the User to Change the <strong>Reservation</strong></p>
<p>Default Values</p>
<p>If  the  movement  indicator  (Mvt)  is  set,  this  specifies  that  goods  movement  is</p>
<p>allowed for the <strong>reservation</strong> item. If the indicator is not set, then this indicator</p>
<p>needs to be set manually in each <strong>reservation</strong> line item before a goods movement</p>
<p>can take place.</p>
<p>The Days field is used when the movement indicator (Mvt) is not set in configura-</p>
<p>tion. The <strong>reservation</strong>-management program uses this value to set the indicator in</p>
<p>the <strong>reservation</strong> line item, if it has not already manually been set.</p>
<p>If the requirement date of a <strong>reservation</strong> item is farther in the future than the num-</p>
<p>ber of days configured in this field, the goods movement indicator (Mvt) is not</p>
<p>set, and no goods movements are allowed for that item.</p>
<p>The  inventory  user  can  enter  a  value  for  the  retention  period  (Rete),  which  is</p>
<p>the number of days that the <strong>reservation</strong> item resides in the system before being</p>
<p>deleted by the <strong>reservation</strong>-management program.</p>`
        }
    ]
};
