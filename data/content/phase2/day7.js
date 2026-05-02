export const day7Content = {
    day: 7,
    phase: 2,
    title: "Request for Quotation (RFQ)",
    concepts: [
        {
            id: "day7-c1",
            title: "The Bidding Process",
            description: `
                <h3>Inviting Vendors to Pitch</h3>
                <p><strong>Industry Scenario:</strong> An engineer creates a PR for a new, highly specialized piece of machinery. The purchasing department does not have an Info Record or a Contract for this item because it's a first-time purchase. They need to figure out who can provide it, how much it will cost, and how fast they can deliver.</p>
                <p>The RFQ (Request for Quotation) is an external document sent to multiple vendors asking them to submit pricing and terms for the items requested in the PR.</p>
            `
        },
        {
            id: "day7-c2",
            title: "Creating RFQ from PR (ME41)",
            description: `
                <h3>Referencing is Key</h3>
                <p>While you <em>can</em> create an RFQ from scratch, in a robust industrial environment, you almost always create it <strong>with reference</strong> to a Purchase Requisition.</p>
                <ul>
                    <li><strong>Why Reference?</strong> It copies all the technical specifications, quantities, and delivery dates from the engineer's PR directly into the RFQ. This eliminates manual data entry errors.</li>
                    <li><strong>The Process:</strong> You create one master RFQ document, and then you enter the Vendor Codes of the 3 or 4 suppliers you want to invite. The system generates 3 or 4 separate RFQ numbers, one for each vendor.</li>
                </ul>
            `
        },
        {
            id: "day7-c3",
            title: "Maintaining Quotations (ME47)",
            description: `
                <h3>Receiving the Bids</h3>
                <p>Once the vendors reply with their proposals (via email, portal, or EDI), the buyer must enter their responses into SAP.</p>
                <ul>
                    <li>Using T-Code <strong>ME47</strong>, the buyer enters the RFQ number corresponding to that vendor.</li>
                    <li>They input the <strong>Gross Price</strong>, any <strong>Discounts</strong> (e.g., 5% off if paid in 10 days), and Freight costs.</li>
                    <li>They also update the promised delivery date if it differs from what was requested.</li>
                </ul>
            `
        },
        {
            id: "day7-c4",
            title: "Price Comparison & Rejection (ME49)",
            description: `
                <h3>Analyzing the Data</h3>
                <p>This is where SAP does the heavy lifting.</p>
                <ul>
                    <li>T-Code <strong>ME49</strong> generates a Price Comparison List. It takes all the quotations for a specific PR and ranks them.</li>
                    <li><strong>0 to Hero Tip:</strong> The ranking isn't just based on the gross price. SAP calculates the <strong>Effective Price</strong>, factoring in all discounts, surcharges, and freight costs entered in ME47. Vendor A might have a cheaper base price, but Vendor B might be cheaper overall due to free shipping.</li>
                    <li><strong>Next Steps:</strong> The buyer selects the winning quotation. For the losing vendors, the buyer generates a <strong>Rejection Letter</strong> in the system to notify them. The winning quotation is then saved as a Purchasing Info Record or converted directly into a Purchase Order.</li>
                </ul>
            `
        }
    ]
};
