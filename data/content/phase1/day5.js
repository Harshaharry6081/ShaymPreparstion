export const day5Content = {
    day: 5,
    phase: 1,
    title: "Purchasing Info Record & Source List",
    concepts: [
        {
            id: "day5-concept1",
            title: "Purpose of the Purchasing Info Record",
            description: `
                <h3>The Bridge Between Material and Vendor</h3>
                <p><strong>Industry Scenario:</strong> You buy "Steel Grade A" from "Vendor X" for $100/ton, but you also buy it from "Vendor Y" for $105/ton. The Material Master doesn't hold price data for specific vendors. The Vendor Master doesn't hold price data for specific materials. Where does this pricing logic live?</p>
                <p><strong>The Purchasing Info Record (PIR):</strong></p>
                <ul>
                    <li>The PIR is the core master data record that links a specific Material to a specific Vendor.</li>
                    <li>It acts as the primary source of truth for pricing when a Purchase Order is automatically generated.</li>
                    <li>It stores vendor-specific data for a material, such as:
                        <ul>
                            <li><strong>Current and future prices</strong> (Pricing Conditions).</li>
                            <li><strong>Planned Delivery Time</strong> (Vendor X might take 5 days, Vendor Y might take 10 days).</li>
                            <li><strong>Minimum Order Quantity (MOQ).</strong></li>
                            <li><strong>Vendor Material Number</strong> (If your material is "1001" but the vendor calls it "ST-55").</li>
                        </ul>
                    </li>
                </ul>
            `
        },
        {
            id: "day5-concept2",
            title: "Info Record Categories",
            description: `
                <h3>Different Types of Procurement</h3>
                <p>When creating an Info Record (T-Code <strong>ME11</strong>), you must specify the Info Category. This determines how the system treats the pricing and inventory.</p>
                <ol>
                    <li><strong>Standard:</strong> Normal purchasing. The vendor delivers the material, you take ownership upon receipt, and you pay them.</li>
                    <li><strong>Subcontracting:</strong> You provide raw components to the vendor, they assemble the finished product, and you pay them for the <em>service</em> of assembly. The info record holds the price of the assembly service.</li>
                    <li><strong>Consignment:</strong> The vendor places their stock in your warehouse. You do not own it and you do not pay for it yet. You only pay for it when you actually <em>consume</em> it. The info record holds the price agreed upon at the time of consumption.</li>
                    <li><strong>Pipeline:</strong> Materials that flow through pipes (Oil, Water, Electricity). There is no "Goods Receipt". You record consumption via meters and pay based on the info record price.</li>
                </ol>
            `
        },
        {
            id: "day5-concept3",
            title: "Source List Concept and Creation",
            description: `
                <h3>Controlling the Vendor Options</h3>
                <p><strong>Industry Scenario:</strong> You have Info Records for "Steel Grade A" with Vendor X, Y, and Z. However, Vendor Z recently failed a quality inspection, and you want to ensure the system <em>never</em> automatically generates a PO for Vendor Z for this material until they fix their issues.</p>
                <p><strong>The Source List (T-Code ME01):</strong></p>
                <ul>
                    <li>The Source List is a list of all valid (and invalid) sources of supply for a material in a specific plant over a specific time period.</li>
                    <li><strong>Fixed Source:</strong> You can check the "Fixed" indicator for Vendor X. When MRP runs and generates a Requisition, it will automatically assign Vendor X as the preferred supplier.</li>
                    <li><strong>Blocked Source:</strong> You can check the "Blocked" indicator for Vendor Z. The system will prevent any buyer from creating a PO for Vendor Z for this material.</li>
                    <li><strong>0 to Hero Tip:</strong> A Source List is optional by default. To force buyers to use it, you must check the "Source List Requirement" box in the Material Master (Purchasing view) or configure it at the Plant level in SPRO.</li>
                </ul>
            `
        },
        {
            id: "day5-concept4",
            title: "Quota Arrangements (Advanced Sourcing)",
            description: `
                <h3>Splitting the Pie</h3>
                <p><strong>Industry Scenario:</strong> To mitigate risk, management dictates that you must buy 60% of your steel from Vendor X (because they are cheap) and 40% from Vendor Y (as a backup supplier, even though they are slightly more expensive).</p>
                <p><strong>Quota Arrangement (T-Code MEQ1):</strong></p>
                <ul>
                    <li>A Source List can only set <em>one</em> Fixed Vendor. If you need to split volumes dynamically, you use a Quota Arrangement.</li>
                    <li>You assign a "Quota" (e.g., 6 and 4, representing 60% and 40%).</li>
                    <li>When MRP runs and generates Purchase Requisitions over time, it utilizes a mathematical formula (Quota Rating = Quota Allocated / Quota) to automatically assign the vendor with the lowest rating for the next requisition, ensuring the 60/40 split is maintained over the year.</li>
                    <li><strong>Sourcing Hierarchy:</strong> When SAP determines a source, it checks in this strict order: 1. Quota Arrangement -> 2. Source List -> 3. Outline Agreement -> 4. Info Record.</li>
                </ul>
            `
        }
    ]
};
