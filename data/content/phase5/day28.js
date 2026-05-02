export const day28Content = {
    day: 28,
    phase: 5,
    title: "Reporting & Analytics in S/4HANA",
    concepts: [
        {
            id: "day28-c1",
            title: "Classic ALV vs Fiori Overview Pages",
            description: `<h3>Classic ALV vs Fiori Overview Pages</h3>
<p>An aircraft spare parts company based in Florida implemented SAP ERP to replace</p>
<p>a custom-built sales and inventory solution. The legacy system was customized</p>
<p>heavily to facilitate the way the company identified and sold its products. The</p>
<p>legacy business process began with used and salvaged aircraft parts arriving at the</p>
<p>facility where they were identified and entered into the system. Each part was</p>
<p>identified by a number of attributes that were used by the sales staff to help cus-</p>
<p>tomers select the correct part.</p>
<p><strong>Embedded Analytics</strong> ............................................................................................ 430</p>
<p>(<strong>CDs</strong>, DVDs, cameras) (internet router)</p><ul><li>• Digital products</li><li>• Digital infrastructure</li></ul>
<p>To identify currently available SAP Fiori apps, you can browse the SAP Fiori apps ref-</p>
<p>erence library (see Figure 1.6) at https://fioriappslibrary.hana.ondemand.com/sap/fix/</p>
<p>externalViewer/#.</p>
<p>If you want a recommendation based on your system usage, you can select this as an</p>
<p>option  within  the  library.  A  detailed  guide  on  running  an  SAP  Fiori  relevance  and</p>
<p>readiness  analysis  is  available  at  https://fioriappslibrary.hana.ondemand.com/sap/</p>
<p>fix/externalViewer/docu/Relevance_and_Readiness_Document.pdf.</p>
<p>Data Services (<strong>CDS</strong>) views, both on-the-fly calculations and  compatibility with cus-</p>`
        },
        {
            id: "day28-c2",
            title: "Embedded Analytics",
            description: `<h3>Embedded Analytics</h3>
<p>With the SAP HANA platform supporting both OLAP and OLTP data, SAP S/4HANA</p>
<p>provides  advanced  analytical  capabilities  that  weren’t  possible  with  traditional</p>
<p>SAP ERP. SAP S/4HANA can perform real-time analytics on transactional data at</p>
<p>the  time  of  the  data  entry  itself.  This  is  powered  by  the  high  speed  of  the  SAP</p>
<p>HANA database, which uses the VDMs through <strong>CDS</strong> views on the required data for</p>
<p>its analysis. Primarily, operational reporting can be used with this setup.</p>
<p>Other means of analysis are also available to SAP S/4HANA, depending on the sce-</p>
<p>nario and availability of the tools. For example, SAP S/4HANA has built-in hybrid</p>
<p>transactional  and  analytical  applications,  such  as  SAP  Smart  Business  Cockpits,</p>
<p>multidimensional reports and analytical SAP Fiori apps, and <strong>embedded analytics</strong>,</p>
<p>which  include  the  Query  Browser  and  Query  Designer  tools.  For  other  types  of</p>
<p>enterprise-wide analytics, SAP S/4HANA supports SAP BW and SAP BW/4HANA</p>
<p>for data extraction.</p>
<p>(cid:2) Business components</p>
<p>The SAP roadmap now includes adding the industry solutions back into this core.</p>
<p>Already  in  SAP  S/4HANA  1511,  several  industry  solutions  became  part  of  the  SAP</p>
<p>S/4HANA core (e.g., Consumer Products, Mill Products, Utilities, etc.). In SAP S/4HANA</p>
<p>1610, most functions of the industry solutions for Retail and for Oil & Gas are also</p>
<p>included. With version 1709, more functions for these industries are included, along</p>
<p>with  several  SAP  Fiori  apps  and  <strong>CDS</strong>  views.  Also,  completely  new  functionality  for</p>
<p>agricultural contract management is now included in the core.</p>
<p>The user provisioning for the SAP HANA database will be carried out manually. As</p>
<p>for the SAP Fiori apps (<strong>analytical app</strong> and fact sheets app), users may need access</p>
<p>(privileges) in the SAP HANA database,  depending on the configuration require-</p>
<p>ments of the specific SAP Fiori apps.</p>
<p>considerations in terms of using <strong>CDS</strong> views or generating <strong>CDS</strong> views using the Busi-</p>
<p>It’s important to understand how gaps in functionality in SAP S/4HANA Cloud can be</p>
<p>fulfilled through the extensibility options. The latest version (1708) has an Extensibil-</p>
<p>ity  Cockpit  to  easily  manage  the  in-app  extensibility  (forms,  fields,  business  logic)</p>
<p>and maintain the inventory of these changes. The SAP Business Hub API provides a</p>
<p>detailed understanding of the interface development and available APIs for connect-</p>
<p>ing to other cloud solutions like SAP Ariba, SAP Fieldglass, SAP SuccessFactors, Con-</p>
<p>cur, SAP Hybris, and so on. SAP Cloud Platform is available to create new apps and to</p>
<p>provide side-by-side extensibility. Finally, a Custom <strong>CDS</strong> Views app provides already-</p>
<p>designed <strong>CDS</strong> views to create ad hoc reports and interface with other SAP and third-</p>
<p>party solutions.</p>`
        },
        {
            id: "day28-c3",
            title: "Key Fiori Analytical Apps for MM",
            description: `<h3>Key Fiori Analytical Apps for MM</h3>
<p>Figure 16.3  <strong>Embedded Analytics</strong> Tool Overview</p>
<p>This type of reporting is again accessible through SAP Fiori apps, has the ABAP Web</p>
<p>Dynpro application as its backend, and exposes analytical <strong>CDS</strong> views. These reports</p>
<p>are very similar to the analytical SAP Fiori apps both in terms of look and feel and in</p>
<p>their use of configurable key figures and dimensions.</p>
<p>SAP Smart Business applications can display the business KPIs calculated based on</p>
<p>the transactional data in your SAP S/4HANA system. The KPI Modeler is used to con-</p>
<p>figure  these  KPIs,  and  you  can  create  the  tiles  in  the  SAP  Fiori  launchpad,  which</p>
<p>shows the analytical SAP Fiori apps for a KPI. A KPI is the first entity that needs to be</p>
<p>created, and the data source of that KPI is the SAP HANA view or the corresponding</p>
<p>OData service. A few analytical apps support drilling down to the next set of visualiza-</p>
<p>tions.</p>
<p>Figure 16.4 shows how an app has been configured and which <strong>CDS</strong> view it uses in the</p>
<p>KPI Modeler.</p>
<p>Figure 16.4  <strong>Embedded Analytics</strong> Reporting Example</p>
<p>This tool displays the results of a query based on <strong>CDS</strong> views. As shown in Figure 16.5,</p>
<p>it is available through an SAP Fiori app. The Query Browser displays the available <strong>CDS</strong></p>
<p>views, and the user can choose to display and execute any of the <strong>CDS</strong> views, once they</p>
<p>are configured.</p>`
        }
    ]
};
