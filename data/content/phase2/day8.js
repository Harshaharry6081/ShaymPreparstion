export const day8Content = {
    day: 8,
    phase: 2,
    title: "Purchase Order (PO) - Basics",
    concepts: [
        {
            id: "day8-c1",
            title: "Structure of a PO",
            description: `
                <h3>The Legal Contract</h3>
                <p>The Purchase Order (ME21N) is a formal, legally binding request to a vendor to supply specific materials or services under stated conditions.</p>
                <p>A PO is divided into three sections:</p>
                <ul>
                    <li><strong>Header:</strong> Information valid for the entire document. (e.g., Vendor, Document Date, Purchasing Organization, Payment Terms, Company Code).</li>
                    <li><strong>Item Overview:</strong> The list of what you are buying. (e.g., Material Number, Short Text, Quantity, Delivery Date, Plant).</li>
                    <li><strong>Item Details:</strong> Highly specific configurations for a single line item. (e.g., Delivery Tolerances, Account Assignment details, Pricing Conditions, Taxes).</li>
                </ul>
            `
        },
        {
            id: "day8-c2",
            title: "Creating PO with Reference",
            description: `
                <h3>The Golden Rule of Procurement</h3>
                <p><strong>0 to Hero Tip:</strong> In a mature SAP environment, a buyer should almost never type a PO manually from scratch. Manual entry leads to price discrepancies and invoice blocks.</p>
                <p>POs should be created by <strong>referencing</strong> preceding documents:</p>
                <ul>
                    <li><strong>Ref to PR:</strong> Adopts the requested material and quantity. The system then searches for a valid Info Record to pull the price.</li>
                    <li><strong>Ref to RFQ (Quotation):</strong> Pulls the exact price and terms the vendor agreed to during the bidding process.</li>
                    <li><strong>Ref to Contract:</strong> Pulls the negotiated contract price.</li>
                </ul>
                <p>In ME21N, you use the "Document Overview On" button on the left panel to find PRs/Contracts and drag-and-drop them into the shopping cart icon to adopt the data.</p>
            `
        },
        {
            id: "day8-c3",
            title: "PO Document Types",
            description: `
                <h3>Controlling the Process</h3>
                <p>Just like PRs, POs have Document Types that govern their behavior.</p>
                <ul>
                    <li><strong>NB (Standard PO):</strong> Used for normal external procurement.</li>
                    <li><strong>UB (Stock Transport Order):</strong> Used when a Plant orders material from another Plant within the same Company Code. It is an internal PO, so there is no Vendor, just a "Supplying Plant".</li>
                    <li><strong>FO (Framework Order):</strong> Used for procuring low-value, repetitive consumables (e.g., electricity, janitorial services) over a long period. It features an extended validity period and a value limit, replacing the need to create a PO every month.</li>
                </ul>
            `
        },
        {
            id: "day8-c4",
            title: "Conditions and Pricing in PO",
            description: `
                <h3>How SAP Calculates Cost</h3>
                <p>SAP uses a powerful framework called the <strong>Condition Technique</strong> to calculate the final price of a PO line item.</p>
                <ul>
                    <li><strong>PB00 (Gross Price):</strong> The base price of the material (pulled from the Info Record or entered manually).</li>
                    <li><strong>FRA1 (Freight):</strong> An absolute or percentage surcharge added to the price.</li>
                    <li><strong>RA01 (Discount):</strong> A percentage deduction from the price.</li>
                    <li><strong>NAVS (Non-Deductible Tax):</strong> Tax added to the total.</li>
                </ul>
                <p>The system evaluates all these Condition Types defined in the Pricing Procedure to calculate the <strong>Net Price</strong> and <strong>Effective Value</strong>.</p>
            `
        }
    ]
};
