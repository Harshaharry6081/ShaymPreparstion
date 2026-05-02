export const day4Content = {
    day: 4,
    phase: 1,
    title: "Business Partner (Vendor Master)",
    concepts: [
        {
            id: "day4-concept1",
            title: "The S/4HANA Shift: Vendor to Business Partner (BP)",
            description: `
                <h3>The Biggest Change in Master Data</h3>
                <p><strong>Industry Scenario:</strong> In legacy SAP ECC, if a company (e.g., Dell) was both your Vendor (you buy laptops from them) and your Customer (you sell software to them), you had to create two completely separate records: a Vendor Master (XK01) and a Customer Master (XD01). This led to massive data redundancy and out-of-sync addresses.</p>
                <p><strong>The S/4HANA Solution - Customer/Vendor Integration (CVI):</strong></p>
                <ul>
                    <li>In SAP S/4HANA, the old transaction codes (XK01, MK01, XD01) are obsolete. If you type them, the system redirects you to transaction <strong>BP</strong>.</li>
                    <li><strong>Business Partner (BP)</strong> is now the single point of entry. A BP is any entity you interact with (Person, Organization, or Group).</li>
                    <li>You create the BP once (General Data: Name, Address), and then you "extend" that BP into specific <strong>Roles</strong> depending on how you interact with them.</li>
                </ul>
            `
        },
        {
            id: "day4-concept2",
            title: "BP Roles (General, FI Vendor, Supplier)",
            description: `
                <h3>Roles Define the Relationship</h3>
                <p>A single Business Partner can have multiple roles simultaneously. This is how S/4HANA organizes department-specific data.</p>
                <ul>
                    <li><strong>General Role (000000):</strong> This is created first. It contains data valid across the entire client, such as Company Name, Address, Communication Details (Email/Phone), and Bank Details.</li>
                    <li><strong>FI Vendor Role (FLVN00):</strong> Maintained by the Finance department. It is valid at the <strong>Company Code</strong> level. It contains the Reconciliation Account (linking the vendor to the General Ledger) and payment terms.</li>
                    <li><strong>Supplier / Purchasing Role (FLVN01):</strong> Maintained by the Procurement department. It is valid at the <strong>Purchasing Organization</strong> level. It contains the Purchasing Group, Order Currency, and PO-specific tolerances.</li>
                </ul>
                <p><strong>0 to Hero Tip:</strong> An interview favorite! If you create a BP but forget to extend it to the Supplier role (FLVN01), the MM user will get an error when trying to create a Purchase Order: "Vendor not created for purchasing organization."</p>
            `
        },
        {
            id: "day4-concept3",
            title: "Account Groups and Number Ranges",
            description: `
                <h3>Categorizing Your Partners</h3>
                <p><strong>Industry Scenario:</strong> A massive corporation works with Domestic Suppliers, International Suppliers, and One-Time Suppliers (for minor, one-off purchases). You need to classify them to control data entry and numbering.</p>
                <p><strong>BP Groupings & Vendor Account Groups:</strong></p>
                <ul>
                    <li><strong>Account Group:</strong> This is a legacy ECC concept that still exists under the hood in S/4HANA. It determines the number range and field selection (which fields are required vs optional). For example, a One-Time Vendor account group will make the address fields optional in the master data, but required when creating the actual Purchase Order.</li>
                    <li><strong>BP Grouping:</strong> This is the S/4HANA equivalent. Every BP is assigned to a Grouping when created.</li>
                    <li><strong>The Magic of CVI:</strong> Through configuration (Customer/Vendor Integration), the BP Grouping is mapped to the Vendor Account Group. When you create a BP in the "Domestic Supplier" grouping, the system automatically creates the underlying Vendor record in the mapped "Domestic" Account Group.</li>
                </ul>
            `
        },
        {
            id: "day4-concept4",
            title: "Creating a Vendor via T-Code BP",
            description: `
                <h3>Hands-On Implementation</h3>
                <p><strong>The End-to-End Creation Process:</strong></p>
                <ol>
                    <li>Execute T-Code <strong>BP</strong>.</li>
                    <li>Click <strong>Create Organization</strong>.</li>
                    <li>Select the <strong>BP Grouping</strong> (this determines the number range).</li>
                    <li>The default role is <strong>000000 (General)</strong>. Enter the Name, Address, and Language. Save the BP. The system generates the BP Number.</li>
                    <li>Switch the role dropdown to <strong>FLVN00 (FI Vendor)</strong>. Click the "Company Code" button at the top. Enter your Company Code. Enter the Reconciliation Account. Save.</li>
                    <li>Switch the role dropdown to <strong>FLVN01 (Supplier)</strong>. Click the "Purchasing" button at the top. Enter your Purchasing Organization. Enter Order Currency and Purchasing Group. Save.</li>
                </ol>
                <p><strong>0 to Hero Check:</strong> You have now successfully created a fully functional Supplier ready for procurement and invoicing in S/4HANA!</p>
            `
        }
    ]
};
