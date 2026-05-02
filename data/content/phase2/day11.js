export const day11Content = {
    day: 11,
    phase: 2,
    title: "Special Procurement: Subcontracting",
    concepts: [
        {
            id: "day11-c1",
            title: "Subcontracting Process Flow",
            description: `
                <h3>Paying for Assembly, Not the Materials</h3>
                <p><strong>Industry Scenario:</strong> An electronics company buys microchips, motherboards, and screens. They don't have the factory capacity to assemble the laptops themselves. They hire a 3rd party vendor to assemble the parts into a finished laptop. The company still owns the parts throughout the process.</p>
                <p><strong>The End-to-End Flow:</strong></p>
                <ol>
                    <li>Create a Subcontracting Purchase Order (Item Category 'L').</li>
                    <li>Issue the raw components to the Vendor's stock.</li>
                    <li>The Vendor performs the assembly.</li>
                    <li>You receive the Finished Good back into your warehouse.</li>
                    <li>You pay the vendor's invoice for the <em>service</em> of assembly.</li>
                </ol>
            `
        },
        {
            id: "day11-c2",
            title: "BOM (Bill of Materials) Basics",
            description: `
                <h3>The Recipe</h3>
                <p>To tell SAP what components make up the finished good, you need a Bill of Materials (T-Code <strong>CS01</strong>).</p>
                <ul>
                    <li>The BOM lists the components and their quantities required to produce 1 unit of the finished product.</li>
                    <li>When you create a Subcontracting PO for 100 Laptops, SAP automatically explodes the BOM and determines that it needs to send 100 screens and 100 motherboards to the vendor.</li>
                </ul>
            `
        },
        {
            id: "day11-c3",
            title: "Subcontracting PO and Item Category 'L'",
            description: `
                <h3>Executing the PO</h3>
                <p>In ME21N, enter the material number of the <strong>Finished Good</strong>.</p>
                <p>Crucially, you must enter <strong>Item Category 'L'</strong> (Subcontracting).</p>
                <p>This tells SAP: "I am ordering this laptop, but I am supplying the parts." If you look at the 'Material Data' tab at the item level, you can click 'Components' to see the exact items SAP pulled from the BOM that you need to send to the vendor.</p>
            `
        },
        {
            id: "day11-c4",
            title: "Providing Components to Vendor (ME2O)",
            description: `
                <h3>Moving the Stock</h3>
                <p>You must physically ship the components to the vendor.</p>
                <ul>
                    <li>In SAP GUI, you can use T-Code <strong>ME2O</strong> (SC Stock Monitoring for Vendor) to see what components need to be sent based on open Subcontracting POs.</li>
                    <li>You execute a Goods Issue (Movement Type <strong>541</strong>).</li>
                    <li><strong>0 to Hero Tip:</strong> Movement Type 541 does <em>not</em> create an accounting document. Why? Because the materials haven't been consumed yet; they just moved from your warehouse to the vendor's warehouse. The value is still on your company's balance sheet under "Stock provided to vendor". The consumption (accounting hit) happens during the final Goods Receipt (Movement Type 101/543).</li>
                </ul>
            `
        }
    ]
};
