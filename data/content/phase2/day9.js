export const day9Content = {
    day: 9,
    phase: 2,
    title: "Outline Agreements: Contracts",
    concepts: [
        {
            id: "day9-c1",
            title: "Value Contracts vs Quantity Contracts",
            description: `
                <h3>Long-Term Supplier Relationships</h3>
                <p><strong>Industry Scenario:</strong> A company knows it will need a massive amount of steel over the next year, but they don't know exactly when they will need it or how much they will need each month. To lock in a favorable price, they sign an Outline Agreement.</p>
                <p>A Contract (T-Code <strong>ME31K</strong>) is a long-term agreement that does <strong>not</strong> contain delivery dates. It only establishes the price and the overall limit.</p>
                <ul>
                    <li><strong>Quantity Contract (MK):</strong> The agreement is fulfilled when a specific quantity is reached (e.g., "We will buy 10,000 tons of steel at $100/ton over 12 months").</li>
                    <li><strong>Value Contract (WK):</strong> The agreement is fulfilled when a specific total financial value is reached (e.g., "We will buy $50,000 worth of office supplies from Staples over 12 months, and because of this volume, we get a 20% discount on their catalog").</li>
                </ul>
            `
        },
        {
            id: "day9-c2",
            title: "Creating a Contract (ME31K)",
            description: `
                <h3>Setting up the Agreement</h3>
                <p>When creating the contract in ME31K, you must enter:</p>
                <ul>
                    <li><strong>Validity Period:</strong> The start and end dates (e.g., Jan 1 to Dec 31).</li>
                    <li><strong>Target Quantity/Value:</strong> The ceiling of the agreement.</li>
                    <li><strong>Conditions:</strong> The deeply discounted price you negotiated.</li>
                </ul>
                <p><strong>0 to Hero Tip:</strong> Contracts can be <strong>Centrally Agreed</strong>. This means you create the contract at the Purchasing Organization level, but you leave the Plant field blank. This allows <em>any</em> plant assigned to that Purchasing Org to issue Release Orders against this single corporate contract, maximizing the volume discount.</p>
            `
        },
        {
            id: "day9-c3",
            title: "Release Orders (Call-offs)",
            description: `
                <h3>Executing the Purchase</h3>
                <p>You cannot receive goods against a Contract. A contract has no delivery dates.</p>
                <p>To actually get the goods, you must create a <strong>Release Order (Call-off)</strong>.</p>
                <ul>
                    <li>A Release Order is simply a standard Purchase Order (ME21N) created <em>with reference</em> to the Contract.</li>
                    <li>When you reference the contract, SAP automatically copies the negotiated price.</li>
                    <li>You manually enter the specific quantity you need <em>right now</em> and the specific delivery date you need it by.</li>
                    <li>The system automatically updates the "Release Documentation" in the contract, deducting the PO quantity from the total Target Quantity to track consumption.</li>
                </ul>
            `
        },
        {
            id: "day9-c4",
            title: "Monitoring Contracts",
            description: `
                <h3>Keeping Track of Commitments</h3>
                <p>Buyers must monitor contracts to ensure they don't expire before the volume is consumed, or to ensure they don't exceed the target value unexpectedly.</p>
                <ul>
                    <li><strong>ME3M / ME3L:</strong> Standard reports to list contracts by Material or Vendor.</li>
                    <li><strong>S/4HANA Hero Tip:</strong> S/4HANA introduces embedded analytics. The Fiori app <strong>"Monitor Purchase Contracts"</strong> provides real-time, graphical dashboards showing contract consumption rates, alerting buyers to contracts that are 90% consumed or about to expire in 30 days, allowing them to proactively renegotiate.</li>
                </ul>
            `
        }
    ]
};
