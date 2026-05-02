export const day2Content = {
    day: 2,
    phase: 1,
    title: "Enterprise Structure in MM",
    concepts: [
        {
            id: "day2-c1",
            title: "Company Code, Plant & Storage Location",
            description: `<h3>Company Code, Plant & Storage Location</h3>
<p>2.1  Client Structure   ...........................................................................   43</p>
<p>2.1.1  What Is a Client?   ............................................................   43</p>
<p>2.1.2</p>
<p>Creating the Client Landscape   ........................................   44</p>
<p>2.1.3  Defining a Client   ............................................................   45</p>
<p>Correction and Transport System (CTS)   ...........................   45</p>
<p>2.1.4</p>
<p>2.2  <strong>Company Code</strong>   ...........................................................................   46</p>
<p>2.2.1  What Is a Company?   ......................................................   46</p>
<p>2.2.2  Creating a <strong>Company Code</strong>   ..............................................   47</p>
<p>2.2.3  Assigning a <strong>Company Code</strong>   ............................................   48</p>
<p>2.3  Plants    ........................................................................................   48</p>
<p>2.3.1  What Is a <strong>Plant</strong>?   .............................................................   48</p>
<p>2.3.2  Prerequisites for a <strong>Plant</strong>   ..................................................   48</p>
<p>2.3.3  Defining a <strong>Plant</strong>   .............................................................   49</p>
<p>2.3.4  Valuation Level   ..............................................................   50</p>
<p>2.3.5  Assigning a <strong>Plant</strong>   ............................................................   51</p>
<p>2.4  Storage Locations   .......................................................................   51</p>
<p>2.4.1  What Is a <strong>Storage Location</strong>?   ...........................................   51</p>
<p>2.4.2  Defining a <strong>Storage Location</strong>   ...........................................   52</p>
<p>2.4.3  Automatic Creation of Storage Locations   ........................   53</p>
<p>2.5  Warehouse and Storage Types   .....................................................   55</p>
<p>2.5.1  Assign a Warehouse to a <strong>Plant</strong> and <strong>Storage Location</strong>   ......   56</p>
<p>Storage Type   ..................................................................   56</p>
<p>2.5.2</p>
<p>Storage Sections and Storage Bins   ..................................   57</p>
<p>2.5.3</p>
<p>2.6  <strong>Purchasing Organization</strong>   .............................................................   57</p>
<p>2.6.1  What Is a <strong>Purchasing Organization</strong>?   ................................   58</p>
<p>2.6.2  Types of Purchasing Organizations   ..................................   58</p>
<p>2.6.3  Create a <strong>Purchasing Organization</strong>   ...................................   59</p>
<p>2.6.4  Purchasing Groups   .........................................................   60</p>
<p>2.7  Business Examples — Organizational Structure   ............................   61</p>
<p>Client Structure   ..............................................................   61</p>
<p>2.7.1</p>
<p>Plants   .............................................................................   61</p>
<p>2.7.2</p>
<p>Storage Locations   ...........................................................   62</p>
<p>2.7.3</p>
<p>2.7.4  Warehouse Management   ...............................................   63</p>
<p><strong>Purchasing Organization</strong>   .................................................   64</p>
<p>2.7.5</p>
<p>2.8  Summary   ....................................................................................   64</p>
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
<p>4.9.3  General <strong>Plant</strong> Parameters   ...............................................   136</p>
<p>4.10  Business Examples – Material Master Data   ..................................   137</p>
<p>4.10.1  Material Type   .................................................................   137</p>
<p>4.10.2  Classification Data   ..........................................................   138</p>
<p>4.10.3  Purchasing Data   .............................................................   139</p>
<p>4.10.4  Sales Data   ......................................................................   139</p>
<p>4.11  Summary   ....................................................................................   140</p>
<p>5.2  <strong>Plant</strong> Data/<strong>Storage Location</strong>   .......................................................   144</p>
<p>5.2.1  General Data   ..................................................................   144</p>
<p>Shelf Life Data   ................................................................   147</p>
<p>5.2.2</p>
<p>5.3  Warehouse Management Data   ....................................................   149</p>
<p>5.3.1  General Data   ..................................................................   149</p>
<p>Storage Strategies   ...........................................................   150</p>
<p>5.3.2</p>
<p>5.3.3  Palletization Data   ...........................................................   153</p>
<p>Storage Bin Stock   ...........................................................   154</p>
<p>5.3.4</p>
<p>5.4  Quality Management Data   ..........................................................   155</p>
<p>5.4.1  General Data   ..................................................................   155</p>
<p>5.4.2  Procurement Data   ..........................................................   157</p>
<p>5.5  Material Requirements Planning Data   .........................................   158</p>
<p>5.5.1  General Data   ..................................................................   159</p>
<p>5.5.2  MRP Procedure   ..............................................................   160</p>
<p>5.5.3</p>
<p>Lot Size Data    .................................................................   161</p>
<p>5.5.4  Procurement   ..................................................................   164</p>
<p>5.5.5  Net Requirements Calculations   .......................................   165</p>
<p>5.5.6</p>
<p>Forecast Requirements   ...................................................   167</p>
<p>5.5.7  Planning   .........................................................................   168</p>
<p>5.5.8  Availability Check   ...........................................................   169</p>
<p>5.5.9  Bill of Materials Explosion/Dependent Requirements   .....   171</p>
<p>5.5.10  Discontinued Parts   .........................................................   172</p>
<p>5.5.11  Repetitive Manufacturing/Assembly/Deployment</p>
<p>Strategy   ..........................................................................   172</p>
<p>5.5.12  <strong>Storage Location</strong> MRP   ....................................................   174</p>
<p>5.6  Accounting Data   .........................................................................   175</p>
<p>5.6.1  General Data   ..................................................................   175</p>
<p>5.6.2  Current Valuation   ...........................................................   176</p>
<p>5.6.3  Determination of Lowest Value   ......................................   178</p>
<p>LIFO Data   ......................................................................   179</p>
<p>5.6.4</p>
<p>5.7  Costing Data   ...............................................................................   180</p>
<p>5.7.1  General Data   ..................................................................   180</p>
<p>5.7.2  Quantity Structure Data   .................................................   181</p>
<p>Standard Cost Estimate   ..................................................   182</p>
<p>5.7.3</p>
<p>Planned Prices   ................................................................   183</p>
<p>5.7.4</p>
<p>5.8  Business Examples – Material Master Data   ..................................   183</p>
<p>5.8.1</p>
<p><strong>Plant</strong> and <strong>Storage Location</strong> Data   ....................................   184</p>
<p>5.8.2  Warehouse Data  .............................................................   184</p>
<p>5.8.3  Quality Management Data   .............................................   185</p>
<p>Purchasing General Data   .............................................................   221</p>
<p>Create a Purchasing Information Record   .........................   221</p>
<p>7.1.1</p>
<p>Create a Purchasing Information Record with</p>
<p>7.1.2</p>
<p>Material Number  ............................................................   223</p>
<p>Create a Purchasing Information Record without a</p>
<p>Material Number  ............................................................   224</p>
<p>7.1.4  General Data Screen   .......................................................   224</p>
<p>7.2  <strong>Purchasing Organization</strong> Data   .....................................................   226</p>
<p>Conditions   .....................................................................   227</p>
<p>Text Screen   .....................................................................   230</p>
<p>Statistical Data   ...............................................................   232</p>`
        },
        {
            id: "day2-c2",
            title: "Purchasing Organisation (Centralised vs Decentralised)",
            description: `<h3>Purchasing Organisation (Centralised vs Decentralised)</h3>
<p>Production resources/tools (PRTs) are purchased and used by the <strong>plant</strong> maintenance</p>
<p>department. This material type is assigned to items used in the maintenance of <strong>plant</strong></p>
<p>equipment, such as test machines, drill bits, or calibrating tools. The material type</p>
<p>for PRTs does not contain sales information because the PRTs are not  purchased to</p>
<p>sell. In addition, PRTs are only managed on a quantity basis.</p>
<p>Maintenance assembly is not an individual object but a set of logical elements</p>
<p>to separate technical objects into clearly defined units for <strong>plant</strong> maintenance For</p>
<p>example, a car can be a technical object, and the engine, transmission, axles, and</p>
<p>so on are the maintenance assemblies. An IBAU material type contains basic data</p>
<p>and classification data.</p>
<p>The non-valuated material type is similar to the NLAG (non-stock material) except</p>
<p>that the non-valuated material is held by quantity and not by value. Examples of</p>
<p>this are often seen in <strong>plant</strong> maintenance, where materials are extremely important</p>
<p>to the <strong>plant</strong> equipment but of little or no other value. Therefore, the <strong>plant</strong> mainte-</p>
<p>nance department will monitor inventory to allow for planned purchases.</p>
<p>After a new material type is configured, the valuation areas defined for that mate-</p>
<p>rial type can also be configured. The valuation area is the level at which material</p>
<p>is valuated. The valuation area can be defined as being at the <strong>plant</strong> level or the</p>
<p><strong>company code</strong> level. A number of valuation areas can be defined for a material</p>
<p>type, as shown in Figure 4.2.</p>
<p>Figure 4.4 shows that the data entry user can enter the <strong>Plant</strong>, Stor. Location,</p>
<p>Sales Org., Distr. Channel, Warehouse No., and Storage Type. In the Profiles</p>
<p>section, the other two fields are MRP profile for material requirements planning</p>
<p>(MRP) and Forecast prof. for forecasting.</p>`
        },
        {
            id: "day2-c3",
            title: "Purchasing Groups",
            description: `<h3>Purchasing Groups</h3>
<p>On the entry screen of Transaction MK01, it is possible to use another vendor/</p>
<p><strong>purchasing organization</strong> as a template for the new vendor. This is useful when</p>
<p>entering the same vendor for a number of purchasing organizations because it</p>
<p>saves having to make unnecessary entries. This will also reduce the level of data-</p>
<p>entry errors.</p>
<p>After the planned changes have been specified for the Vendor Master records, you</p>
<p>can view all of the planned changes. Transaction MK14, shown in Figure 10.7,</p>
<p>allows the purchasing user to enter a range of variables, such as Vendor, Purch.</p>
<p>Organization, Vendor Subrange, <strong>Plant</strong>, and so on to view the planned changes</p>
<p>made  to  vendors.  The  resulting  report  shows  the  vendors  that  have  planned</p>
<p>changes pending and the changes that have been made.</p>
<p>On the initial data-entry screen, the purchasing user can enter the vendor number</p>
<p>and the <strong>purchasing organization</strong>. Figure 10.10 shows the next screen where the</p>
<p>user can determine how the deletion should proceed.</p>
<p>Using the Selected <strong>purchasing organization</strong> flag will just delete the vendor data</p>
<p>for selected purchasing organizations. This type of data is usually deleted because</p>
<p>the vendor is not authorized to sell to a certain <strong>purchasing organization</strong> or cannot</p>
<p>sell to a certain organization for strategic or competitive reasons.</p>
<p>Setting this indicator prevents the information in the general data area from being</p>
<p>deleted. This block will ensure that at least the general data for the vendor is not</p>
<p>deleted, although the <strong>purchasing organization</strong> data for the vendor is deleted.</p>
<p>Transaction MKVZ allows the purchasing user to display the vendors for a given</p>
<p>selection criteria. As Figure 10.13 shows, the selection can be made by Vendor,</p>
<p><strong>Purchasing organization</strong>, Search term, and Account group.</p>`
        },
        {
            id: "day2-c4",
            title: "Assigning Organisational Units",
            description: `<h3>Assigning Organisational Units</h3>
<p>The <strong>company code</strong> transfer is functionally the same as a <strong>plant</strong>-to-<strong>plant</strong> transfer.</p>
<p>Material is moved between different plants. The differences are that the plants</p>
<p>belong to different company codes. Additional account documents are produced</p>
<p>for either a one-step or two-step procedure.</p>
<p>An accounting document is created for each of the <strong>plant</strong> movements. In addition,</p>
<p>an accounting document is created for the stock posting in the company clearing</p>
<p>accounts.</p>
<p>Stock transfers are common in companies where material often has to be moved</p>
<p>from a manufacturing <strong>plant</strong> to a central distribution warehouse and then to smaller</p>
<p>regional sites. The frequency is then increased when it is the company policy to</p>
<p>move material from site to site when necessary.</p>
<p>Inventory Management offers the user a number of processes for the variety of</p>
<p>goods movements that are required within the <strong>plant</strong>. By efficiently using these</p>
<p>processes, companies can compress order-to-delivery time, decrease costs, reduce</p>
<p>inventory, and improve customer service.</p>
<p>When  a  business  performs  a  physical  inventory,  it  is  counting  material  that  is</p>
<p>located at a location, whether that is a physical <strong>plant</strong>, a third-party warehouse, or</p>
<p>a customer’s site. A physical inventory does not have to involve every material but</p>
<p>can refer to a subset of the company’s current stock.</p>
<p>An Austrian beverage company owned and operated a bottling <strong>plant</strong> in Poland.</p>
<p>The staff at the Polish <strong>plant</strong> performed a count of items in the warehouse each Fri-</p>
<p>day after second shift for years before being purchased by new owners and before</p>
<p>SAP ERP was implemented. The count would show minor discrepancies but noth-</p>
<p>ing significant. After the <strong>plant</strong> was acquired, it stocked more brands than before</p>
<p>and some that had never been sold in Poland.</p>`
        }
    ]
};
