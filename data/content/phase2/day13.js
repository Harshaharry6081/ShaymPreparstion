export const day13Content = {
    day: 13,
    phase: 2,
    title: "Release Strategy in Purchasing",
    concepts: [
        {
            id: "day13-c1",
            title: "Why Do We Need Approvals?",
            description: `
                <h3>Safeguarding the Company's Money</h3>
                <p><strong>Industry Scenario:</strong> An intern in the IT department creates a Purchase Order for 500 top-of-the-line MacBook Pros, totaling $1.5 Million. You cannot allow this PO to be sent to the vendor automatically. It must be reviewed and approved by an IT Manager, and due to the high value, probably the CFO as well.</p>
                <p>In SAP, an approval process is called a <strong>Release Strategy</strong>. Until a purchasing document (PR, PO, Contract) is fully "released", it cannot be printed, emailed, or processed further.</p>
            `
        },
        {
            id: "day13-c2",
            title: "Characteristics and Classes",
            description: `
                <h3>Defining the Rules</h3>
                <p>How does the system know <em>which</em> POs need approval?</p>
                <p>SAP uses a classification system:</p>
                <ul>
                    <li><strong>Characteristics (CT04):</strong> These are the specific fields the system evaluates. For example, you might create a Characteristic for "PO Total Value" (CEKKO-GNETW) and another for "Purchasing Group" (CEKKO-EKGRP).</li>
                    <li><strong>Classes (CL02):</strong> You group these characteristics into a Class (Class Type 032 for Release Strategy). The Class acts as a container for your rules.</li>
                </ul>
            `
        },
        {
            id: "day13-c3",
            title: "Release Groups, Codes, and Indicators",
            description: `
                <h3>Building the Hierarchy</h3>
                <p>Once you define the rules (Characteristics), you build the approval matrix in SPRO configuration.</p>
                <ul>
                    <li><strong>Release Codes:</strong> Represents the person or role doing the approving. (e.g., M1 = Manager, D1 = Director, C1 = CFO).</li>
                    <li><strong>Release Strategies:</strong> The specific sequence of approvals. For a PO over $1 Million, the strategy might be M1 -> D1 -> C1.</li>
                    <li><strong>Release Prerequisites:</strong> You configure the system so C1 cannot approve the PO until D1 has approved it, and D1 cannot approve until M1 has approved.</li>
                    <li><strong>Release Indicator:</strong> The status of the document. Usually 'Blocked' (Cannot be sent) until the final person approves it, at which point it changes to 'Released' (Ready to transmit).</li>
                </ul>
            `
        },
        {
            id: "day13-c4",
            title: "Flexible Workflow (The S/4HANA Way)",
            description: `
                <h3>The Modern Approval Process</h3>
                <p><strong>0 to Hero Tip:</strong> The classic Release Strategy (using Classes and Characteristics) still works in S/4HANA, but SAP heavily pushes a new framework called <strong>Flexible Workflow</strong>.</p>
                <ul>
                    <li>Instead of complex backend SPRO configuration, Flexible Workflow is managed entirely via intuitive Fiori Apps (e.g., "Manage Workflows for Purchase Orders").</li>
                    <li>Business users (not just IT consultants) can easily create and modify approval rules (e.g., "If Company Code is 1000 and Value > 500 EUR, route to Cost Center Manager").</li>
                    <li>Approvers receive notifications directly in their Fiori Launchpad "My Inbox" app, or even via email, where they can click "Approve" directly from their mobile phone.</li>
                </ul>
            `
        }
    ]
};
