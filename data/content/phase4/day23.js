export const day23Content = {
    day: 23,
    phase: 4,
    title: "Automatic Account Determination \u2013 Part 1",
    concepts: [
        {
            id: "day23-c1",
            title: "Goal of OBYC",
            description: `<h3>Goal of OBYC</h3>
<p>Service Master Record   ................................................................   411</p>
<p>16.1.1  Activity Number   ...........................................................   412</p>
<p>16.1.2</p>
<p>Service Category   ...........................................................   412</p>
<p>16.1.3  Material/Service Group   .................................................   413</p>
<p>16.1.4</p>
<p>Tax Indicator   ................................................................   413</p>
<p>16.1.5  <strong>Valuation Class</strong>   .............................................................   413</p>
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
<p>The Acct assignment grp can be selected to group together materials that have</p>
<p>similar accounting requirements. For example, you can select a group for service</p>
<p>revenues or a group for trading goods revenues. This field is used in sales bill-</p>
<p>ing documents. This field can be found in Table TVKM. The account assignment</p>
<p>groups can be defined in configuration steps. The navigation path is IMG • Sales</p>
<p>and Distribution • Basic Functions • Account Assignment/Costing • Revenue</p>
<p><strong>Account Determination</strong> • Check Master Data Relevant for Account Assign-</p>
<p>ment • Materials: Account Assignment Groups.</p>
<p>The <strong>Valuation Class</strong> field is a mechanism to assign a material to the GL accounts.</p>
<p>These GL accounts are updated when material movements occur that are relevant to</p>
<p>accounting. The <strong>valuation class</strong> is assigned to a material type, via configuration.</p>
<p>The <strong>valuation class</strong> can be configured in Transaction OMSK or via the navigation</p>
<p>path, IMG  • Materials Management  • Valuation and Account Assignment  •</p>
<p><strong>Account Determination</strong> • <strong>Account Determination</strong> without Wizard • Define</p>
<p><strong>Valuation Class</strong>.</p>`
        },
        {
            id: "day23-c2",
            title: "Valuation Class",
            description: `<h3>Valuation Class</h3>
<p>The accounting department has the option of entering a different <strong>valuation class</strong></p>
<p>for sales-order stock in the VC: Sales order stk field.</p>
<p>As with the <strong>valuation class</strong> for sales-order stock, the accounting department can</p>
<p>enter a different <strong>valuation class</strong> for project stock in the Proj. stk val. class field.</p>
<p>The <strong>Valuation class</strong> for the Service Master is the same field that is used in the</p>
<p>Material Master. Using the <strong>valuation class</strong>, the system can find the GL accounts</p>
<p>that are associated with the service’s financial postings.</p>
<p>The selection screen, shown in Figure 25.10, allows the user to enter a range of</p>
<p>Material, Plant, Material Type, or <strong>Valuation Class</strong>.</p>`
        },
        {
            id: "day23-c3",
            title: "Transaction Event Keys (BSX, WRX, GBB)",
            description: `<h3>Transaction Event Keys (BSX, WRX, GBB)</h3>
<p>The  selection  screen,  shown  in  Figure  25.13,  allows  the  user  to  enter  a  range</p>
<p>of coverage. The values in the coverage for the lowest value determination can</p>
<p>include Material, Plant, Valuation Type, Material Type, <strong>Valuation Class</strong>, and</p>
<p>Material Group. In this example, the coverage has been limited to Plant 3000.</p>
<p>EE The material must be assigned to a <strong>valuation class</strong>.</p>
<p>Figure 26.3  Material Ledger Indicator and <strong>Valuation Class</strong> in the Accounting Screen of the</p>
<p>Material Master Record</p>
<p><strong>Account Determination</strong></p>
<p>function that determines automatically the</p>
<p>accounts in Financial Accounting to which the</p>
<p>amount(s) in question should be posted for</p>
<p>the user during any posting transaction.</p>`
        }
    ]
};
