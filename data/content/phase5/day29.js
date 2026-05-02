export const day29Content = {
    day: 29,
    phase: 5,
    title: "Mock Interview \u2013 Scenario Based",
    concepts: [
        {
            id: "day29-c1",
            title: "Scenario: Emergency Purchase without Material Master",
            description: `<h3>Scenario: Emergency Purchase without Material Master</h3>
<p>7.3  Business Examples – Purchasing Information Data   .......................   233</p>
<p>Standard Purchasing Information Record    .......................   233</p>
<p>7.3.1</p>
<p>7.3.2</p>
<p><strong>Subcontracting</strong> Purchasing Information Record  ...............   234</p>
<p>Summary   ....................................................................................   235</p>
<p>If an SAP customer does not have a single enterprisewide purchasing function, it</p>
<p>may have purchasing centralized for each company. This may be appropriate for</p>
<p>customers with companies in various countries; in which case, an enterprise pur-</p>
<p>chasing department may not be possible. In this <strong>scenario</strong>, the purchasing organi-</p>
<p>zation is created and assigned for each company code. Even with this <strong>scenario</strong>, a</p>
<p>purchasing organization may cover several companies. For example, a purchasing</p>
<p>organization for Latvia may be assigned as the purchasing organization for the</p>
<p>companies based in the countries of Latvia, Lithuania, and Estonia.</p>
<p>In an enterprise that has companies with large autonomous plants; the purchasing</p>
<p>decisions may be made at a local level. The SAP customer may decide that assign-</p>
<p>ing one purchasing organization to one company is not appropriate, and it would</p>
<p>be a better business decision to assign a purchasing organization at the plant. This</p>
<p><strong>scenario</strong> has an advantage when the vendors are at a local level, and few vendors</p>
<p>supply materials or services to more than one plant.</p>
<p>The Special procurement field is configured to describe a procurement <strong>scenario</strong>.</p>
<p>The key can determine the procurement type, procurement from another plant,</p>
<p>and BOM characteristics. The configuration of the Special procurement field can</p>
<p>be found via the navigation path, IMG • Production • Material Requirements</p>
<p>Planning • Master Data • Define Special Procurement Type.</p>
<p>So, if product was returned to the facility for any reason, such as rejected by the</p>
<p>customer or if the truck broke down and had to be towed back to the plant, the</p>
<p>returned product would be valuated at a different amount. This meant that there</p>
<p>would be split valuation; some batches of material that had been returned would</p>
<p>be valued at a higher amount, while other batches that had never left the facility</p>
<p>would be valued at a lower amount. While some ERP vendors don’t have the capa-</p>
<p>bilities to deal with this <strong>scenario</strong>, split valuation can be dealt with within Material</p>
<p>Master records in SAP ERP.</p>
<p><strong>Subcontracting</strong> Purchasing Information Record</p>`
        },
        {
            id: "day29-c2",
            title: "Scenario: Vendor Overcharges",
            description: `<h3>Scenario: Vendor Overcharges</h3>
<p>(cid:2) More predictive analytics for improved decision making</p>
<p>(cid:2) New scenarios for demand-driven intercompany and stock</p>
<p>(cid:2) Simulation and forecasting capabilities</p>
<p>(cid:2)</p>
<p>(cid:2) New scenarios for IoT</p>
<p>(cid:2) Enhanced analytics</p>
<p>(cid:2) Expanded warehouse automation</p>
<p>(cid:2) Extended e-commerce capabilities</p>
<p>In SAP S/4HANA, sales and distribution rebates will be replaced by the condition con-</p>
<p>tract  settlement  process,  followed  by  the  settlement  management  process.  This</p>
<p>means that all existing rebate agreements can only be processed up until the end of</p>
<p>validity date and then closed by a final agreement. Customers with SAP CRM Trade</p>
<p>Promotion Management (TPM) who want to integrate their existing SAP CRM TPM</p>
<p>scenarios with SAP S/4HANA will have to use SD rebate processing, which has been</p>
<p>optimized for the database footprint. Consider the following key differences between</p>
<h3>condition contract settlement and the SD rebate agreement functionality</h3>
<p>(cid:2) It’s  a  flexible  and  state-of-the-art  solution  for  settlement  scenarios.  Users  can</p>
<p>determine business volume sources based on flexible and definable criteria that</p>
<p>can be configured in customizing.</p>
<p>(cid:2) It’s designed for high performance (with SAP HANA).</p>
<p>(cid:2) It  enables  new  and  innovative  rebate  scenarios  to  be  set  up  thanks  to  its  open</p>
<p>With SAP S/4HANA, SAP offers rich SAP CRM functionality in the core with seamless</p>
<p>integration and low TCO, with the end goals of optimizing the processes in the back</p>
<p>office (SAP S/4HANA) and simplifying the processes in the frontend with SAP Hybris.</p>
<p>Figure 5.12 illustrates how the traditional <strong>scenario</strong> is changed by this new production</p>
<p>direction.</p>
<div class="hero-tip"><strong>💡 Hero Tip:</strong> The implementation for SAP S/4HANA Cloud is much faster due to the standard-
ized process configurations, which include SAP Best Practices for implementation.
Both new and existing SAP ERP customers only need to perform data migration,
which is aided by migration tools and templates for different data objects. Deep
technical skills aren’t needed. For the on-premise implementation—both for the
migration <strong>scenario</strong> and the new implementation <strong>scenario</strong>—technical knowledge
and skills are mandatory for the team, because there will be customer-specific sce-
narios and considerable customization. The timelines for the SAP S/4HANA adop-
tion are also longer.</div>`
        },
        {
            id: "day29-c3",
            title: "Scenario: Subcontracting Stock Discrepancy",
            description: `<h3>Scenario: Subcontracting Stock Discrepancy</h3>
<p>A new implementation is one of the three options provided by SAP to move to SAP</p>
<p>S/4HANA. This <strong>scenario</strong> is valid for both existing SAP customers and new SAP cus-</p>
<p>tomers. This <strong>scenario</strong> requires the implementation of a new SAP S/4HANA system</p>
<p>with an initial data load.</p>
<p>As you learned in Chapter 10, there are two deployment options for new implemen-</p>
<p>tations: SAP S/4HANA or SAP S/4HANA Cloud. In this section, we’ll look only at on-</p>
<p>premise SAP S/4HANA for new implementations. We’ll start with a brief look at the</p>
<p>Business <strong>Scenario</strong> Recommendations (BSR) report, SAP S/4HANA Value Advisor, and</p>
<p>SAP  S/4HANA  Transformation  Navigator  before  providing  some  tips  for  getting</p>
<p>started, performing sizing, and implementation.</p>
<p>13.1.1    Business <strong>Scenario</strong> Recommendations</p>
<p>To understand the business benefits that are available when moving from an exist-</p>
<p>ing SAP system, you can leverage SAP’s BSR report. This detailed report output pro-</p>
<p>vides a set of recommendations for new simplified business scenarios as part of SAP</p>
<p>S/4HANA, including benefits associated with the SAP Fiori UX. It also provides recom-</p>
<p>mendations for how to benefit from the SAP HANA in-memory platform to speed up</p>
<p>your business transactions (see Figure 13.2).</p>
<p>Figure 13.2  Sample Output from SAP Business <strong>Scenario</strong> Recommendations Report</p>
<p>Plan the scope of the migration effort and identify key business scenarios.</p>
<div class="hero-tip"><strong>💡 Hero Tip:</strong> The level of adoption of the SAP Activate framework will vary for each transforma-
tion  <strong>scenario</strong>.  You  may  choose  to  use  only  the  methodology  with  templates  and
accelerators if you’re performing a system conversion, whereas you can use the full
suite, including SAP Best Practices, model company, and guided configuration, for a
new  implementation.  This  is  also  true  for  the  deployment  <strong>scenario</strong>  you  decide  to
consider, be it SAP S/4HANA Cloud or on-premise SAP S/4HANA. SAP Activate provides SAP Best Practices for industries by leveraging the existing SAP
RDSs  for  SAP  S/4HANA.  SAP  is  building  multiple  country  localizations  as  a  priority,
but it will continue to enhance LOB scenarios and industry best practices on top of
the existing SAP S/4HANA baseline.</div>`
        }
    ]
};
