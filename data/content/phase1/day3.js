export const day3Content = {
    day: 3,
    phase: 1,
    title: "Material Master Data",
    concepts: [
        {
            id: "day3-concept1",
            title: "Material Types and Industry Sectors",
            description: `
                <h3>The DNA of a Material</h3>
                <p><strong>Industry Scenario:</strong> A manufacturing plant buys steel (Raw Material), processes it, and sells car doors (Finished Product). The system needs to treat these items differently. You don't sell raw materials, and you don't buy finished products.</p>
                <p><strong>Material Type (MTART):</strong> This controls the entire behavior of the material in SAP. It dictates what views are available, the number assignment, and how it's valuated.</p>
                <ul>
                    <li><strong>ROH (Raw Materials):</strong> Procured externally. No sales view. Valuated at moving average price usually.</li>
                    <li><strong>HALB (Semi-Finished Goods):</strong> Manufactured in-house. Stored temporarily. Has MRP and work scheduling views.</li>
                    <li><strong>FERT (Finished Goods):</strong> Manufactured in-house. Sold to customers. Has Sales views. Usually valuated at standard price.</li>
                    <li><strong>HAWA (Trading Goods):</strong> Bought and sold without modification. Has both Purchasing and Sales views.</li>
                    <li><strong>DIEN (Services):</strong> Intangible. No inventory/storage views.</li>
                </ul>
                <p><strong>Industry Sector (MBRSH):</strong> Defines the branch of industry (e.g., Mechanical Engineering, Retail, Chemical). It determines which screens and fields are displayed when creating a material.</p>
            `
        },
        {
            id: "day3-concept2",
            title: "Number Ranges",
            description: `
                <h3>How Materials are Identified</h3>
                <p><strong>Industry Scenario:</strong> Your warehouse workers need to scan barcodes. Do you want them scanning "RAW-STEEL-10MM" (External/Alphanumeric) or "10004562" (Internal/Numeric)?</p>
                <p>Number ranges are assigned to Material Types.</p>
                <ul>
                    <li><strong>Internal Number Assignment:</strong> The SAP system automatically assigns the next available sequential number. It is purely numeric. (Best practice to avoid human error and duplicate naming conventions).</li>
                    <li><strong>External Number Assignment:</strong> The user manually types the material number. It can be alphanumeric. (Useful if the company has a strict legacy coding system they refuse to abandon, e.g., "PMP-100-XYZ").</li>
                </ul>
                <p><strong>S/4HANA Hero Tip:</strong> In classic ECC, material numbers were limited to 18 characters. In S/4HANA, you can activate the <strong>Extended Material Number</strong> feature, allowing up to 40 characters! This is huge for industries like automotive or aerospace.</p>
            `
        },
        {
            id: "day3-concept3",
            title: "Key Views (Basic Data, Purchasing, MRP, Accounting)",
            description: `
                <h3>Cross-Functional Master Data</h3>
                <p>A single material is used by Procurement, Warehouse, Production, and Finance. The Material Master is divided into "Views" specific to those departments.</p>
                <ul>
                    <li><strong>Basic Data 1 & 2:</strong> General data valid across the entire company (Client level). E.g., Material Description, Base Unit of Measure (EA, KG), Gross/Net Weight.</li>
                    <li><strong>Purchasing View:</strong> Valid at the Plant level. Contains Purchasing Group (who buys it), Order Unit (e.g., you stock in EA, but buy in Pallets), and Under/Overdelivery Tolerances.</li>
                    <li><strong>MRP 1, 2, 3, 4:</strong> Valid at the Plant level. Absolutely critical for automated planning. Dictates how the system calculates shortages and generates Purchase Requisitions. Key fields: MRP Type (PD, VB), Lot Size, Planned Delivery Time.</li>
                    <li><strong>Accounting 1 & 2:</strong> Valid at the Plant level. Links MM to FI. Key fields: Valuation Class (determines which G/L account gets hit during goods receipt) and Price Control (Standard vs Moving Average).</li>
                </ul>
            `
        },
        {
            id: "day3-concept4",
            title: "Extending Material Master",
            description: `
                <h3>Rolling out Materials to New Locations</h3>
                <p><strong>Industry Scenario:</strong> You create "Steel Grade A" in the New York Plant. Next month, the Texas Plant also needs to buy and store "Steel Grade A". Do you create a new material number? <strong>No.</strong></p>
                <p>You must <strong>extend</strong> the existing material to the new organizational unit. Creating duplicate materials destroys reporting and inventory visibility.</p>
                <p><strong>How to Extend:</strong> Use transaction <strong>MM01</strong> (Create Material). Enter the <em>existing</em> material number, select the views you want to extend, and specify the <em>new</em> Plant/Storage Location. SAP will copy the Basic Data and ask you to fill in the Plant-specific data for Texas.</p>
                <p><strong>S/4HANA Hero Tip:</strong> In S/4HANA, the Fiori App "Manage Product Master Data" simplifies this process significantly compared to the old SAP GUI MM01 screen, allowing mass extensions via spreadsheet uploads.</p>
            `
        }
    ]
};
