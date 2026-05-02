export const day24Content = {
    day: 24,
    phase: 4,
    title: "Automatic Account Determination \u2013 Part 2",
    concepts: [
        {
            id: "day24-c1",
            title: "Configuring OBYC",
            description: `<h3>Configuring OBYC</h3>
<p>SAP defines a company and a company code separately. SAP defines a company</p>
<p>as the smallest organizational unit for which legal financial statements can be pre-</p>
<p>pared. A company can contain one or more company codes, but they must use the</p>
<p>same <strong>chart of accounts</strong> and the same fiscal-year breakdown.</p>
<p>For  example,  when  a  customer  is  deciding  on  its  organizational  structure,  the</p>
<p>customer can use one or many company codes. Thus, if a U.S. company has com-</p>
<p>ponents of its organization in Canada and in Mexico, it may decide that it should</p>
<p>use three company codes. The company-code currencies can be different for each</p>
<p>component, but they would be required to use the same <strong>chart of accounts</strong>.</p>
<p><strong>Chart of Accounts</strong></p>
<p>Consists of a group of</p>
<p>GL accounts. For each GL account, the chart of</p>
<p>accounts contains the account number, name,</p>
<p>and any technical information.</p>`
        },
        {
            id: "day24-c2",
            title: "Account Modifiers",
            description: `<h3>Account Modifiers</h3>
<p>GL Account — General Ledger Account</p>
<p>A six-digit code that records value movements</p>
<p>in a company code and represents the GL</p>
<p>account items in a <strong>chart of accounts</strong>.</p>
<p><strong>Chart of accounts</strong>, 47</p>
<p>Check-cashing time, 204</p>
<p>Check digits, 197</p>
<p>Checking account, 197</p>
<p>Chemical, 88</p>
<p>Chemical industry, 79, 90</p>
<p>Class, 242, 250, 403, 404, 590, 595–598,</p>
<p>601–604, 606, 618</p>
<p>Hierarchy, 601</p>
<p>Name, 606</p>
<p>Structure, 600</p>
<p>Type, 108, 109, 242, 404, 590, 596–600,</p>
<p>606, 618</p>
<p>A concept that can help determine what information needs to be managed is what we</p>
<p>call the coding block. A coding block is what you use to document all reporting require-</p>
<p>ments for an organization. It serves as the basis for setting up the design of the Univer-</p>
<p>sal  Journal  in  SAP  S/4HANA  Finance.  A  coding  block  consists  of  business  measures,</p>
<p>represented by rows, and business dimensions, represented by columns, as shown in</p>
<p>Figure 2.4. Measures are normally represented by the <strong>chart of accounts</strong> in your SAP sys-</p>
<p>tem, and the dimensions are represented by posting details such as material, customer,</p>
<p>channel,  and  so  on.  It’s  essential  to  understand  that  not  all  measures  need  to  be</p>
<p>recorded; for example, gross profit is a measure that is calculated based on the revenue</p>
<p>and cost of goods sold (COGS) elements. The same applies for the measures as well. Not</p>
<p>all dimensionality is required in the initial recording. Some dimensions can be derived</p>
<p>based on the recorded elements later (e.g., by an allocation).</p>`
        },
        {
            id: "day24-c3",
            title: "Troubleshooting Account Determination",
            description: `<h3>Troubleshooting Account Determination</h3>
<p>Measures are split into measures to be recorded and measures to be calculated. Mea-</p>
<p>sures to be recorded are normally represented by the <strong>chart of accounts</strong> in SAP. Mea-</p>
<p>sures to be calculated are a computation of the measures that are recorded (e.g., gross</p>
<p>profit).</p>
<p>landscape (e.g., common central <strong>chart of accounts</strong>, single central controlling area,</p>
<p>SAP  S/4HANA  can  support  today’s  key  challenges  in  sales.  Its  capabilities  offer  an</p>
<p>internal sales representative a comprehensive overview of the current order fulfill-</p>
<p>ment situation. Real-time data and on-the-fly analytics can be used for <strong>troubleshoot</strong>-</p>
<p>ing and decision-making purposes.</p>`
        }
    ]
};
