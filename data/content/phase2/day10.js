export const day10Content = {
    day: 10,
    phase: 2,
    title: "Outline Agreements: Scheduling Agreements",
    concepts: [
        {
            id: "day10-c1",
            title: "Concept of Scheduling Agreement (ME31L)",
            description: `
                <h3>Just-In-Time Procurement</h3>
                <p><strong>Industry Scenario:</strong> An automotive assembly line needs 500 car seats delivered every single morning at 8:00 AM. Creating a new Purchase Order every day for 500 seats is an administrative nightmare and creates too much paperwork.</p>
                <p>The solution is a <strong>Scheduling Agreement (SA)</strong>.</p>
                <ul>
                    <li>Like a Contract, an SA is a long-term outline agreement with a vendor.</li>
                    <li><strong>Unlike</strong> a Contract, an SA <em>does</em> contain specific delivery schedules.</li>
                    <li>You do <strong>not</strong> create Release Orders (POs) against an SA. The SA itself serves as the binding order, and the schedule lines tell the vendor exactly when to ship.</li>
                </ul>
            `
        },
        {
            id: "day10-c2",
            title: "Creating Delivery Schedules (ME38)",
            description: `
                <h3>Telling the Vendor When to Ship</h3>
                <p>Once the SA header is created (ME31L), you use T-Code <strong>ME38</strong> to maintain the Schedule Lines.</p>
                <ul>
                    <li>A Schedule Line specifies a Date (or Time) and a Quantity.</li>
                    <li>Example: Line 1: Jan 5th, Qty 500. Line 2: Jan 6th, Qty 500.</li>
                    <li><strong>0 to Hero Tip (MRP Integration):</strong> You rarely type schedule lines manually in ME38. Instead, you configure the system so that the MRP run automatically generates the schedule lines based on the production plan. This enables true automated, Just-In-Time (JIT) manufacturing.</li>
                </ul>
            `
        },
        {
            id: "day10-c3",
            title: "Difference between Contract and Scheduling Agreement",
            description: `
                <h3>Interview Hot Topic</h3>
                <p>You will almost certainly be asked this in an interview.</p>
                <table style="width:100%; border-collapse: collapse; margin-top: 1rem; color: #CBD5E1;">
                    <tr style="border-bottom: 1px solid var(--border-color); color: var(--sap-blue);">
                        <th style="padding: 10px; text-align: left;">Feature</th>
                        <th style="padding: 10px; text-align: left;">Contract</th>
                        <th style="padding: 10px; text-align: left;">Scheduling Agreement</th>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--border-color);">
                        <td style="padding: 10px;">Contains Delivery Dates?</td>
                        <td style="padding: 10px;">No</td>
                        <td style="padding: 10px;">Yes (in Schedule Lines)</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--border-color);">
                        <td style="padding: 10px;">Requires a PO to execute?</td>
                        <td style="padding: 10px;">Yes (Release Order)</td>
                        <td style="padding: 10px;">No</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--border-color);">
                        <td style="padding: 10px;">Volume of Paperwork</td>
                        <td style="padding: 10px;">High (Many POs)</td>
                        <td style="padding: 10px;">Low (One SA, many schedule updates)</td>
                    </tr>
                </table>
            `
        }
    ]
};
