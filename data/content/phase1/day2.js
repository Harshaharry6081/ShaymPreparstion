export const day2Content = {
    day: 2,
    phase: 1,
    title: "Enterprise Structure in MM",
    concepts: [
        {
            id: "day2-concept1",
            title: "Defining Company Code, Plant, Storage Location",
            description: `
                <h3>The Backbone of SAP MM</h3>
                <p>The enterprise structure represents the physical and logical structure of your business in the SAP system. It is the foundation upon which all transactions are built.</p>
                <ul>
                    <li><strong>Client:</strong> The highest hierarchical level. Represents a corporate group. Data entered at the client level is valid for all company codes.</li>
                    <li><strong>Company Code:</strong> The smallest organizational unit for which a complete, self-contained set of accounts can be drawn up for external reporting (Balance Sheet, P&L). You must have at least one company code.</li>
                    <li><strong>Plant:</strong> A manufacturing facility, warehouse, or distribution center. It is where materials are produced, stored, or distributed. A plant must be assigned to exactly one company code.</li>
                    <li><strong>Storage Location:</strong> A physical or logical subdivision of a plant where stock is actually kept. A plant can have multiple storage locations (e.g., Raw Materials, Finished Goods, Quality Inspection).</li>
                </ul>
            `
        },
        {
            id: "day2-concept2",
            title: "Purchasing Organization (Centralized vs Decentralized)",
            description: `
                <h3>Structuring Your Procurement</h3>
                <p>The Purchasing Organization is the unit legally responsible for negotiating purchasing conditions with vendors and procuring materials/services.</p>
                <p>There are three main ways to set it up:</p>
                <ol>
                    <li><strong>Plant-Specific (Decentralized):</strong> One purchasing org is responsible for exactly one plant. Good for plants in different countries with local sourcing needs.</li>
                    <li><strong>Cross-Plant (Centralized at Company Level):</strong> One purchasing org procures for multiple plants within a single company code. Standardizes procurement for a company.</li>
                    <li><strong>Cross-Company (Centralized at Corporate Level):</strong> One purchasing org procures for multiple plants across different company codes. Maximizes negotiating power for corporate-wide contracts.</li>
                </ol>
            `
        },
        {
            id: "day2-concept3",
            title: "Purchasing Groups",
            description: `
                <h3>The Buyers</h3>
                <p>A Purchasing Group represents an individual buyer or a group of buyers.</p>
                <ul>
                    <li>They are responsible for the day-to-day procurement activities (creating POs, managing vendor relationships).</li>
                    <li>They are the primary contact point for vendors.</li>
                    <li><strong>Important Note:</strong> Unlike Purchasing Organizations, Purchasing Groups are <em>not</em> assigned to any other organizational unit (like Company Code or Plant) in configuration. They act independently across the system.</li>
                </ul>
            `
        },
        {
            id: "day2-concept4",
            title: "Assigning Organizational Units",
            description: `
                <h3>Tying It All Together</h3>
                <p>Creating the units isn't enough; you must link them together in the configuration (SPRO).</p>
                <p><strong>Key Assignments:</strong></p>
                <ul>
                    <li>Assign Plant to Company Code.</li>
                    <li>Assign Purchasing Organization to Company Code (optional, used for cross-plant within a company).</li>
                    <li>Assign Purchasing Organization to Plant.</li>
                    <li>Assign Standard Purchasing Organization to Plant (used for special procurement like pipeline or consignment).</li>
                </ul>
                <p><strong>Action Item:</strong> Draw an enterprise structure diagram for a hypothetical company with 1 HQ (Company Code), 2 Factories (Plants), and 1 Centralized Purchasing Org.</p>
            `
        }
    ]
};
