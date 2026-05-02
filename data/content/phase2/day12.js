export const day12Content = {
    day: 12,
    phase: 2,
    title: "Special Procurement: Consignment",
    concepts: [
        {
            id: "day12-c1",
            title: "The Consignment Concept",
            description: `
                <h3>Vendor Managed Inventory</h3>
                <p><strong>Industry Scenario:</strong> A hospital needs a constant supply of specialized surgical gloves. They don't want to tie up millions of dollars in capital buying them upfront, but they also can't afford to run out. The vendor agrees to store the gloves in a closet inside the hospital. The vendor owns the gloves until a nurse actually opens a box to use them. Only then does the hospital owe the vendor money.</p>
                <p>This is Consignment.</p>
                <ul>
                    <li>You store the vendor's goods on your premises.</li>
                    <li>The inventory is legally owned by the vendor (Vendor Consignment Stock).</li>
                    <li>No accounting document is generated when you receive the goods into your warehouse.</li>
                </ul>
            `
        },
        {
            id: "day12-c2",
            title: "Consignment Info Record & PO (Item Category K)",
            description: `
                <h3>Setting up the Agreement</h3>
                <p>Because you aren't paying for the goods upon receipt, the Purchase Order (Item Category <strong>K</strong>) does not have a price field. The net price will be zero.</p>
                <p>So how does SAP know what to pay the vendor when you finally use the goods?</p>
                <p>The system relies 100% on the <strong>Consignment Purchasing Info Record</strong>. You must create an Info Record with the 'Consignment' category and maintain the agreed-upon price there. When you consume the goods, SAP looks at the Info Record valid on the date of consumption to determine the liability.</p>
            `
        },
        {
            id: "day12-c3",
            title: "Goods Receipt for Consignment",
            description: `
                <h3>Taking Custody, Not Ownership</h3>
                <p>When the truck arrives, you perform a standard Goods Receipt (MIGO) against the Consignment PO.</p>
                <ul>
                    <li>The Movement Type is <strong>101 K</strong>.</li>
                    <li>The stock quantity in your plant increases, but it is classified specifically as "Vendor Consignment Stock".</li>
                    <li><strong>No Financial Document is posted.</strong> Your company's inventory value on the balance sheet does not increase because you don't own it.</li>
                </ul>
            `
        },
        {
            id: "day12-c4",
            title: "Consignment Settlement (MRKO)",
            description: `
                <h3>Paying the Piper</h3>
                <p>When the production line or hospital ward actually uses the material, you perform a Goods Issue (e.g., Movement Type 201 K for cost center consumption).</p>
                <ul>
                    <li><strong>This</strong> is the moment legal ownership transfers, and a financial liability is created.</li>
                    <li>Unlike standard procurement, the vendor <strong>does not send you an invoice</strong> for consignment consumption.</li>
                    <li>Instead, you use T-Code <strong>MRKO</strong> (Consignment and Pipeline Settlement). This transaction reads all the consumptions you've made, looks at the Info Record price, automatically generates the accounts payable documents, and effectively "self-bills" to pay the vendor.</li>
                </ul>
            `
        }
    ]
};
