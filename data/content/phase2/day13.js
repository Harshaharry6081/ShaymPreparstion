export const day13Content = {
    day: 13,
    phase: 2,
    title: "Release Strategy in Purchasing",
    concepts: [
        {
            id: "day13-c1",
            title: "Why Approvals Matter",
            description: `<h3>Why Approvals Matter</h3>
<p>4.1</p>
<p>Industry Sector   ...........................................................................   89</p>
<p>4.2  Material Type   ..............................................................................   90</p>
<p>4.2.1</p>
<p>Standard Material Types   .................................................   90</p>
<p>4.2.2  Configuring Material Types   .............................................   94</p>
<p>4.2.3  Changing a Material Type   ...............................................   96</p>
<p>4.3  Basic Data   ...................................................................................   97</p>
<p>4.3.1  Creating a Material Master Record – Immediately   ..........   97</p>
<p>4.3.2  Creating a Material Master Record – Schedule   ................   98</p>
<p>4.3.3  Creating a Material Master Record – Special   ...................   98</p>
<p>4.3.4  Organizational Levels   .....................................................   99</p>
<p>4.3.5  Basic Data Screen   ...........................................................   101</p>
<p>4.4  Classification Data   ......................................................................   107</p>
<p>4.4.1  <strong>Class</strong> Type   ......................................................................   107</p>
<p>4.4.2  Classes    ..........................................................................   108</p>
<p>4.4.3  Characteristics    ...............................................................   108</p>
<p>4.5  Purchasing Data   ..........................................................................   109</p>
<p>4.5.1  General Data   ..................................................................   110</p>
<p>4.5.2  Purchasing Value Key   .....................................................   112</p>
<p>4.5.3  Other Data/Manufacturer Data   ......................................   114</p>
<p>4.5.4  Manufacturer Parts   .........................................................   116</p>
<p>Foreign Trade Data   .........................................................   117</p>
<p>4.5.5</p>
<p>4.5.6  Origin/EU Market Organization/Preferences    ..................   118</p>
<p>Legal Control  ..................................................................   119</p>
<p>4.5.7</p>
<p>4.6  Forecasting Data   .........................................................................   120</p>
<p>4.6.1  General Data   ..................................................................   121</p>
<p>4.6.2  Number of Periods Required    .........................................   122</p>
<p>4.6.3  Control Data   ..................................................................   123</p>
<p>4.7  Work Scheduling Data   ................................................................   124</p>
<p>4.7.1  General Data   ..................................................................   125</p>
<p>Tolerance Data   ...............................................................   126</p>
<p>4.7.2</p>
<p>In-House Production Time in Days   .................................   127</p>
<p>4.7.3</p>
<p>4.8  Sales Organizational Data   ...........................................................   128</p>
<p>4.8.1  General Data    .................................................................   129</p>
<p>4.8.2  Tax Data   .........................................................................   130</p>
<p>4.8.3  Quantity Stipulations   .....................................................   131</p>
<p>4.8.4  Grouping Items   ..............................................................   132</p>
<p>4.8.5  Material Groups   .............................................................   133</p>
<p>4.8.6  Product Attributes   ..........................................................   134</p>
<p>4.9  Sales General Data   ......................................................................   134</p>
<p>4.9.1  General Data    .................................................................   135</p>
<p>4.9.2</p>
<p>Shipping Data   ................................................................   135</p>
<p>4.9.3  General Plant Parameters   ...............................................   136</p>
<p>4.10  Business Examples – Material Master Data   ..................................   137</p>
<p>4.10.1  Material Type   .................................................................   137</p>
<p>4.10.2  Classification Data   ..........................................................   138</p>
<p>4.10.3  Purchasing Data   .............................................................   139</p>
<p>4.10.4  Sales Data   ......................................................................   139</p>
<p>4.11  Summary   ....................................................................................   140</p>
<p>13.1.13  RFQ Delivery Schedule   ...................................................   348</p>
<p>13.1.14  Additional Data   ..............................................................   349</p>
<p>13.1.15  Vendor Selection   ............................................................   351</p>
<p>13.2  Changing a Request for Quotation   ..............................................   352</p>
<p>13.3  Releasing an RFQ   ........................................................................   354</p>
<p>13.3.1  <strong>Release Code</strong>/Release Group/<strong>Release Strategy</strong>   ................   355</p>
<p>13.3.2  Set Release/Cancel Release   .............................................   355</p>
<p>13.3.3  Release Prerequisite Fulfilled   ..........................................   355</p>
<p>13.3.4  List with Items   ...............................................................   356</p>
<p>13.3.5  Scope of List   ..................................................................   356</p>
<p>13.3.6  Purchasing Document Category   ......................................   356</p>
<p>13.3.7  Other Selection Criteria   ..................................................   356</p>
<p>13.4  Issuing a Request for Quotation to a Vendor   ...............................   356</p>
<p>13.5  Business Examples – Request for Quotation   ................................   358</p>
<p>13.5.1  Creating and Changing a Request for Quotation   .............   358</p>
<p>13.5.2  Releasing a Request for Quotation   .................................   359</p>
<p>13.6  Summary   ....................................................................................   359</p>
<p>15.11  Reporting   ...................................................................................   402</p>
<p>15.11.1  Reporting Overview   .....................................................   402</p>
<p>15.12  Release Procedures   .....................................................................   403</p>
<p>15.12.1</p>
<p>Introduction to Release Procedures   ..............................   403</p>
<p>15.12.2  Release with Classification for a Purchase Requisition   ...   403</p>
<p>15.13  Business Examples – Purchase Orders   ..........................................   407</p>
<p>15.13.1  Blocking a Purchase Order    ...........................................   407</p>
<p>15.13.2  Outline Purchase Agreement    .......................................   407</p>
<p>15.13.3  Scheduling Agreement    ................................................   408</p>
<p>15.13.4  Contracts    .....................................................................   408</p>
<p>15.13.5  Releasing a Purchase Order   ..........................................   409</p>
<p>15.14  Summary   ....................................................................................   409</p>
<p>Service Master Record   ................................................................   411</p>
<p>16.1.1  Activity Number   ...........................................................   412</p>
<p>16.1.2</p>
<p>Service Category   ...........................................................   412</p>
<p>16.1.3  Material/Service Group   .................................................   413</p>
<p>16.1.4</p>
<p>Tax Indicator   ................................................................   413</p>
<p>16.1.5  Valuation <strong>Class</strong>   .............................................................   413</p>
<p>16.1.6</p>
<p>Formula   ........................................................................   413</p>
<p>16.1.7  Graphic   ........................................................................   415</p>
<p>Standard Service Catalog (SSC)   ....................................................   415</p>
<p>16.2.1  Overview   ......................................................................   415</p>
<p>16.2.2  Creating a SSC Entry   .....................................................   415</p>
<p>16.3  Conditions in ESM   ......................................................................   417</p>
<p>Total Price Condition   ....................................................   417</p>
<p>16.4  Procurement of Services   ..............................................................   419</p>
<p>16.4.1  Using a Purchase Order   ................................................   419</p>
<p>Entry of Services   .........................................................................   422</p>
<p>Service Entry Sheet   .......................................................   422</p>
<p>16.5.1</p>
<p>16.6  Blanket Purchase Order   ..............................................................   423</p>
<p>16.6.1  Creating a Blanket Purchase Order   ................................   423</p>
<p>16.7  Business Examples – External Service Management   .....................   425</p>
<p>Service Master Record   ..................................................   425</p>
<p>16.7.1</p>
<p>16.7.2  Procurement of Services   ...............................................   426</p>
<p>16.7.3  Blanket Purchase Order   ................................................   426</p>
<p>Summary   ....................................................................................   427</p>
<p>27  Classification System   ................................................................   589</p>`
        },
        {
            id: "day13-c2",
            title: "Characteristics & Classes",
            description: `<h3>Characteristics & Classes</h3>
<p>The external documents, such as the PO and the RFQ, can only be released at the</p>
<p>header level and can only be released by the classification method.</p>
<p>15.12.2  Release with Classification for a Purchase Requisition</p>
<p>For the release with classification, the characteristics and appropriate classes need</p>
<p>to be defined in the classification system. Remember that a <strong>class</strong> should be created</p>
<p>for each purchasing document.</p>
<p>The  configuration  for  releasing  a  purchase  requisition  without  classification  is</p>
<p>already  predefined  in  SAP  ERP.  The  release  with  classification  within  the  IMG</p>
<p>must be configured.</p>
<p>The configuration for releasing purchase requisitions is found in the IMG using</p>
<p>the path, IMG • Materials Management • Purchasing • Purchase Requi sition •</p>
<p>Release Procedure • Procedure with Classification • Set Up Procedure with</p>
<p>Classification.</p>
<p>Each <strong>characteristic</strong> represents a release condition. Characteristics can be set up</p>
<p>that describe the conditions that need to be satisfied for a <strong>release strategy</strong> to be</p>
<p>assigned.</p>`
        },
        {
            id: "day13-c3",
            title: "Release Groups, Codes & Indicators",
            description: `<h3>Release Groups, Codes & Indicators</h3>
<p>Figure 27.10  Partial Object List for the <strong>Class</strong> Type</p>
<p>To create a new <strong>class</strong> type, the user selects the object, which is linked to the <strong>class</strong></p>
<p>type. The user then clicks on <strong>class</strong> types in the dialog structure to display current</p>
<p><strong>class</strong> types for that object, as shown in Figure 27.11.</p>
<p>Figure 27.11  <strong>Class</strong> Types Currently Assigned to the Object</p>
<p>A new <strong>class</strong> type can be created for this object by selecting Edit • New Entries</p>
<p>or by using the [F5] function key. A screen appears, as shown in Figure 27.12, for</p>
<p>the new <strong>class</strong> type information to be entered. The new <strong>class</strong> type (Ty.) should be</p>
<p>a three-character value. The normal protocol is that a new <strong>class</strong> type begins with</p>
<p>the number 9. However, check with your client’s data governance group for any</p>
<p>policies relevant for classification. A <strong>Class</strong> type description should be added for</p>
<p>the new <strong>class</strong> type also.</p>
<p>Figure 27.12  New <strong>Class</strong>-Type Entry Screen</p>
<p>This section described the use and configuration of the <strong>class</strong> type. The next section</p>
<p>examines the <strong>class</strong> hierarchies that can be created in classification.</p>`
        },
        {
            id: "day13-c4",
            title: "Flexible Workflow (S/4HANA)",
            description: `<h3>Flexible Workflow (S/4HANA)</h3>
<p>Area, 560, 566, 572</p>
<p>Category, 176</p>
<p><strong>Class</strong>, 176, 413, 569, 579</p>
<p>Method, 567, 568, 573, 574, 575</p>
<p>Classification: LCC QA76.9.D3 B3935 2018 | DDC 005.74--dc23</p>
<p>IaaS is an enterprise <strong>class</strong>-optimized infrastructure built using open standards.</p>
<p>Businesses are leveraging IaaS (e.g., IBM SoftLayer) to get up and running in a</p>
<p>matter of hours without significant capital expense.</p>
<p>In the digital era, being mobile-first and providing a first-<strong>class</strong> UX are essential tech-</p>
<p>nology components. The chief value of mobility for CMOs is having a readily avail-</p>
<p>able, personal channel available for customers. However, they also need to provide</p>
<p>The current SAP ERP system serves as a classical system of record storing your trans-</p>
<p>actional data. The business user goes through different transactions for transparency</p>
<p>into demand shortages, analyzes various reports, adds intelligence to the informa-</p>
<p>tion,  and  then  either  prioritizes  production  or  transfers  goods  from  one  plant  to</p>
<p>another to avoid shortages. With SAP S/4HANA, the business user gets away from the</p>
<p>traditional system of record and leverages the core capabilities of the platform, such</p>
<p>as  IoT  or  business  network  connectivity,  to  obtain  more  detailed  information  and</p>
<p>advanced analytical options that help him do his work more effectively.</p>
<h3>Figure 1.12 illustrates the classic inventory management process flow</h3>
<div class="hero-tip"><strong>💡 Hero Tip:</strong> The  SAP Best  Practices Explorer helps create  faster  time to  value  via  best practices
business processes that are robust and adhere to regulations and compliance. These
are available for the entire scope of the solution and are classified in groups such as
finance,  application  platform  and  infrastructure,  asset  management,  database  and
data management, and so on. The full list is available in the content library. Detailed
flow diagrams and test scripts are available for each process to help reduce the effort
of documentation and aid consistency in testing.</div>`
        }
    ]
};
