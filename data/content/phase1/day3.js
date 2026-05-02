export const day3Content = {
    day: 3,
    phase: 1,
    title: "Material Master Data",
    concepts: [
        {
            id: "day3-c1",
            title: "Material Types & Industry Sectors",
            description: `<h3>Material Types & Industry Sectors</h3>
<p>3.1  <strong>Material Master</strong>   ..........................................................................   65</p>
<p>3.1.1  <strong>Material Master</strong> Overview   ..............................................   65</p>
<p>3.1.2  <strong>Material Master</strong> Tables   ...................................................   65</p>
<p>3.1.3  Material Numbering   .......................................................   66</p>
<p>3.1.4  Material <strong>Number Range</strong>   .................................................   68</p>
<p>3.1.5  <strong>Material Type</strong>   .................................................................   69</p>
<p>3.2  Vendor Master   ............................................................................   70</p>
<p>3.2.1  Definition of a Vendor   ....................................................   70</p>
<p>3.2.2  Vendor Master in SAP   ....................................................   70</p>
<p>3.2.3  Vendor Account Groups   .................................................   71</p>
<p>3.2.4  Vendor <strong>Number Range</strong>   ...................................................   74</p>
<p>3.3  Purchasing Information Data   .......................................................   76</p>
<p>Purchasing Information Record  .......................................   76</p>
<p>3.3.3  Purchasing Information Record Numbering   ....................   76</p>
<p>3.3.4  Purchasing Information Record-Screen Layout   ................   77</p>
<p>3.4  Batch Management Data   ............................................................   79</p>
<p>3.4.1  What Is a Batch?   ............................................................   79</p>
<p>3.4.2  Batch Level   ....................................................................   79</p>
<p>3.4.3  Changing the Batch Level   ...............................................   80</p>
<p>3.4.4  Batch-Status Management   .............................................   80</p>
<p>3.4.5</p>
<p>Initial Batch Status   .........................................................   81</p>
<p>3.4.6  Batch-Number Assignment   .............................................   81</p>
<p>3.5  Serial Number Data   ....................................................................   82</p>
<p>3.5.1  What Is a Serial Number?   ...............................................   82</p>
<p>Serial Number Profile   .....................................................   82</p>
<p>3.5.2</p>
<p>Serializing Procedures   .....................................................   83</p>
<p>3.5.3</p>
<p>3.6  Business Examples – Master Data in Materials Management   .......   85</p>
<p>3.6.1  <strong>Material Master</strong> Data   .....................................................   85</p>
<p>3.6.2  Vendor Master Data   .......................................................   85</p>
<p>3.6.3  Purchasing Data   .............................................................   86</p>
<p>3.6.4  Batch Management   ........................................................   87</p>
<p>Serial Numbers   ...............................................................   87</p>
<p>3.6.5</p>
<p>3.7  Summary   ....................................................................................   88</p>
<p>4  <strong>Material Master</strong> Data – Part 1   ..................................................   89</p>
<p>4.1</p>
<p><strong>Industry Sector</strong>   ...........................................................................   89</p>
<p>4.2  <strong>Material Type</strong>   ..............................................................................   90</p>
<p>4.2.1</p>
<p>Standard Material Types   .................................................   90</p>
<p>4.2.2  Configuring Material Types   .............................................   94</p>
<p>4.2.3  Changing a <strong>Material Type</strong>   ...............................................   96</p>
<p>4.3  Basic Data   ...................................................................................   97</p>
<p>4.3.1  Creating a <strong>Material Master</strong> Record – Immediately   ..........   97</p>
<p>4.3.2  Creating a <strong>Material Master</strong> Record – Schedule   ................   98</p>
<p>4.3.3  Creating a <strong>Material Master</strong> Record – Special   ...................   98</p>
<p>4.3.4  Organizational Levels   .....................................................   99</p>
<p>4.3.5  Basic Data Screen   ...........................................................   101</p>
<p>4.4  Classification Data   ......................................................................   107</p>
<p>4.4.1  Class Type   ......................................................................   107</p>
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
<p>4.10  Business Examples – <strong>Material Master</strong> Data   ..................................   137</p>
<p>4.10.1  <strong>Material Type</strong>   .................................................................   137</p>
<p>4.10.2  Classification Data   ..........................................................   138</p>
<p>4.10.3  Purchasing Data   .............................................................   139</p>
<p>4.10.4  Sales Data   ......................................................................   139</p>
<p>4.11  Summary   ....................................................................................   140</p>
<p>5  <strong>Material Master</strong> Data – Part 2   ..................................................   141</p>`
        },
        {
            id: "day3-c2",
            title: "Number Ranges",
            description: `<h3>Number Ranges</h3>
<p>The following fields are not displayed in Figure 4.6 but can be displayed depend-</p>
<p>ing on how the screen layout is configured. Each of your client’s <strong>Material Master</strong></p>
<p>screens may appear slightly different.</p>
<p>The DG indicator profile can be configured in SAP EHS Management using the</p>
<p>navigation path, IMG • Environmental Health and Safety • Dangerous Goods</p>
<p>Management • Dangerous Goods Checks • Common Settings • Specify Indica-</p>
<p>tor Profiles for <strong>Material Master</strong>.</p>
<p>The  Document  Type,  Document  Version,  Page  Number,  Document  Chapter</p>
<p>Page Format, and Number of Sheets fields are all used if there is a design docu-</p>
<p>ment that is not controlled under the SAP Document Management System (DMS).</p>
<p>If there is a design document that the users need to add to the <strong>Material Master</strong>,</p>
<p>then these are the fields that need to be entered.</p>
<p>Figure 4.9  Class Types Accessible from the <strong>Material Master</strong> Data Entry Screen</p>
<p>The Purchasing data screen, shown in Figure 4.11, is displayed when the material</p>
<p>being entered is assigned to a <strong>material type</strong> that allows purchasing. For example, it</p>
<p>is normal to have a Purchasing data screen for trading goods (HAWA), raw materi-</p>
<p>als (ROH), and PRT (FHMI). Some of the fields shown have already been described</p>
<p>in other <strong>Material Master</strong> screens.</p>
<p>Figure 4.11  Purchasing Data Screen of the <strong>Material Master</strong> Creation Transaction</p>`
        },
        {
            id: "day3-c3",
            title: "Key Views (Basic Data, Purchasing, MRP, Accounting)",
            description: `<h3>Key Views (Basic Data, Purchasing, MRP, Accounting)</h3>
<p>The <strong>Material Master</strong> change transaction is the tool to perform the change, but</p>
<p>check with your client to make sure there are no policies in place regarding Mate-</p>
<p>rial Master changes.</p>
<p>The most common way a <strong>Material Master</strong> is changed is via Transaction MM02 or</p>
<p>the navigation path, SAP Menu • Logistics • Materials Management • Material</p>
<p>Master • Material • Change • Immediately.</p>
<p>Figure 9.2  Menu Path for Finding the Log of Changes Made to a <strong>Material Master</strong> Record</p>
<p>9.2.2  Change a <strong>Material Master</strong> Record – Schedule</p>
<p>© 2013 by Galileo Press Inc., Boston (MA)Changing a <strong>Material Master</strong> Record</p>
<p>used to put the change into effect at the right time. The transaction for this process</p>
<p>is MM12 and can be found via the navigation path, SAP Menu • Logistics • Mate-</p>
<p>rials Management • <strong>Material Master</strong> • Material • Change • Schedule.</p>`
        },
        {
            id: "day3-c4",
            title: "Extending Material Master",
            description: `<h3>Extending Material Master</h3>
<p>EE The <strong>material type</strong> must allow the material’s valuation to be updated.</p>
<p>The <strong>material type</strong> can be checked to see if the material valuation can be updated by</p>
<p>viewing the configuration transaction shown in Figure 26.2, which can be found</p>
<p>via the navigation path, IMG  • Logistics - General  • <strong>Material Master</strong>  • Basic</p>
<p>Settings • Material Types • Define Attributes of Material Types.</p>
<p>Figure 26.2  Quantity and Value Updating Indicators on <strong>Material Type</strong> Configuration</p>
<p>Transaction MM01 is used to add the accounting details for each material. The</p>
<p><strong>Material Master</strong> record contains the flag that determines whether a material is</p>
<p>relevant for the material ledger. The ML act. flag is on the accounting screen and</p>
<p>should be set for the material ledger, as shown in Figure 26.3. After this is set, data</p>
<p>is collected about this material for the material ledger.</p>
<p>Figure 26.3  Material Ledger Indicator and Valuation Class in the Accounting Screen of the</p>
<p><strong>Material Master</strong> Record</p>
<p>This section examined the material ledger data from the <strong>Material Master</strong> record</p>
<p>and the valuation-relevant transactions collected in the material ledger. The next</p>
<p>section reviews the different types of material price determination, including sin-</p>
<p>gle-level, multi-level, and transaction-based material price determination.</p>
<div class="hero-tip"><strong>💡 Hero Tip:</strong> The key point of simplification which must be evaluated by clients is the previous
functionality  for  freight  shipment  costing  that  was  delivered  through  the  LE-TRA
component,  which  is  not  the  target  architecture  within  SAP  S/4HANA.  Instead,
freight cost settlement functionality within SAP Transportation Management is the
solution of choice and will be available as an extended separately licensed solution
embedded within SAP S/4HANA. However, this integration isn’t delivered currently
for optimized bulk oil shipments and is on the roadmap for future innovation.</div>`
        }
    ]
};
