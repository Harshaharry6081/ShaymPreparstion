export const day6Content = {
    day: 6,
    phase: 2,
    title: "Purchase Requisition (PR)",
    concepts: [
        {
            id: "day6-c1",
            title: "Direct vs Indirect Procurement",
            description: `
                <h3>Understanding What We Buy</h3>
                <p><strong>Industry Scenario:</strong> A car manufacturer buys engines (Direct) and office printer paper (Indirect).</p>
                <ul>
                    <li><strong>Direct Procurement (Stock Material):</strong> Materials that go directly into the final product. They are tracked in inventory, valuated, and usually planned automatically by MRP. They require a Material Master record.</li>
                    <li><strong>Indirect Procurement (Consumables):</strong> Materials or services not part of the final product (e.g., office supplies, laptop repairs). They are often expensed immediately to a Cost Center or Project. They do not necessarily need a Material Master record; you can create a PR using just a short text description.</li>
                </ul>
            `
        },
        {
            id: "day6-c2",
            title: "Creating PR (ME51N) & Document Types",
            description: `
                <h3>The Internal Request</h3>
                <p>A Purchase Requisition (PR) is an internal document. It is a request from a department to the purchasing department to procure a certain quantity of a material or service by a certain date. It is <strong>never</strong> sent to a vendor.</p>
                <p><strong>Document Types (NB vs Custom):</strong></p>
                <ul>
                    <li><strong>NB (Standard):</strong> The default SAP document type for PRs.</li>
                    <li><strong>0 to Hero Configuration:</strong> In real projects, you almost never use 'NB'. You copy 'NB' to 'ZNB' (Custom). Why? Because different document types can have different number ranges, field selection keys (e.g., making the "Tracking Number" field mandatory for ZNB but optional for NB), and different release (approval) strategies.</li>
                </ul>
            `
        },
        {
            id: "day6-c3",
            title: "Account Assignment Category",
            description: `
                <h3>Who Pays for It?</h3>
                <p>If you are buying an Indirect Material (no inventory tracking), the system needs to know which department's budget to hit.</p>
                <p>The <strong>Account Assignment Category</strong> dictates this:</p>
                <ul>
                    <li><strong>K (Cost Center):</strong> Used for general department expenses (e.g., IT Dept buys monitors). You must enter a G/L Account and a Cost Center.</li>
                    <li><strong>P (Project):</strong> Used for capital expenditures tracked via a WBS Element.</li>
                    <li><strong>A (Asset):</strong> Used when buying a fixed asset (e.g., a forklift) that will be depreciated over time.</li>
                    <li><strong>F (Order):</strong> Used when charging to an internal maintenance or production order.</li>
                </ul>
            `
        },
        {
            id: "day6-c4",
            title: "Item Categories",
            description: `
                <h3>How is it Procured?</h3>
                <p>The Item Category tells the system the nature of the procurement process for that specific line item.</p>
                <ul>
                    <li><strong>Standard (Blank):</strong> Normal purchase to stock or consumption.</li>
                    <li><strong>K (Consignment):</strong> Buying consignment stock. (No value is posted at GR).</li>
                    <li><strong>L (Subcontracting):</strong> You will need to provide components to the vendor. The system will prompt you for a Bill of Materials.</li>
                    <li><strong>D (Service):</strong> You are buying a service, not a physical good. Changes the screen to allow entry of Service Master details instead of Material numbers.</li>
                </ul>
            `
        }
    ]
};
