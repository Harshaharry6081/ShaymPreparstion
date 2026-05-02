export const day25Content = {
    day: 25,
    phase: 4,
    title: "Integration with Other Modules (SD & PP)",
    concepts: [
        {
            id: "day25-c1",
            title: "MM-SD: Third-Party Order Processing",
            description: `<h3>MM-SD: Third-Party Order Processing</h3>
<p>Akash Agrawal</p>
<p>Customizing Materials Management Processes in SAP ERP Operations</p>
<p>2010, 395 pp.</p>
<p>978-1-59229-280-6</p>
<p>© 2012 by Galileo Press Inc., Boston (MA)</p>
<p>3rd edition 2011, 1st reprint 2012</p>
<p>1.1  Materials Management as a Part of SAP ERP   ...............................   35</p>
<p>SAP History   ....................................................................   35</p>
<p>Core SAP ERP Functionality   ............................................   36</p>
<p>Business Suite Functionality   ...........................................   37</p>
<p>1.2  Materials Management as Part of Logistics   ..................................   38</p>
<p>1.2.1  Definition of Logistics and Supply Chain   .........................   38</p>
<p>1.2.2  Management of the Supply Chain  ...................................   38</p>
<p>SAP and Logistics   ...........................................................   38</p>
<p>1.2.3</p>
<p>1.3  MM Integration    .........................................................................   39</p>
<p>The Material Flow of the Supply Chain   ...........................   40</p>
<p>1.3.1</p>
<p>The Information Flow of the Supply Chain   ......................   40</p>
<p>1.3.2</p>
<p>1.3.3</p>
<p>The Financial Flow of the Supply Chain   ..........................   41</p>
<p>Summary   ....................................................................................   42</p>
<p>2.4  Storage Locations   .......................................................................   51</p>
<p>2.4.1  What Is a Storage Location?   ...........................................   51</p>
<p>2.4.2  Defining a Storage Location   ...........................................   52</p>
<p>2.4.3  Automatic Creation of Storage Locations   ........................   53</p>
<p>2.5  Warehouse and Storage Types   .....................................................   55</p>
<p>2.5.1  Assign a Warehouse to a Plant and Storage Location   ......   56</p>
<p>Storage Type   ..................................................................   56</p>
<p>2.5.2</p>
<p>Storage Sections and Storage Bins   ..................................   57</p>
<p>2.5.3</p>
<p>2.6  Purchasing Organization   .............................................................   57</p>
<p>2.6.1  What Is a Purchasing Organization?   ................................   58</p>
<p>2.6.2  Types of Purchasing Organizations   ..................................   58</p>
<p>2.6.3  Create a Purchasing Organization   ...................................   59</p>
<p>2.6.4  Purchasing Groups   .........................................................   60</p>
<p>2.7  Business Examples — Organizational Structure   ............................   61</p>
<p>Client Structure   ..............................................................   61</p>
<p>2.7.1</p>
<p>Plants   .............................................................................   61</p>
<p>2.7.2</p>
<p>Storage Locations   ...........................................................   62</p>
<p>2.7.3</p>
<p>2.7.4  Warehouse Management   ...............................................   63</p>
<p>Purchasing Organization   .................................................   64</p>
<p>2.7.5</p>
<p>2.8  Summary   ....................................................................................   64</p>
<p>3.3.1</p>
<p>3.3.2  Purchasing Information Record for a Non-Stock</p>
<p>5.2  Plant Data/Storage Location   .......................................................   144</p>
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
<p>5.5.2  <strong>MRP</strong> Procedure   ..............................................................   160</p>
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
<div class="hero-tip"><strong>💡 Hero Tip:</strong> The evaluated receipt settlement agreement (identified in Figure 6.10 as Auto-
EvalGRSetmt Del.) is created between the vendor and the purchasing department. 
The agreement allows the purchasing department to send payments for the goods 
received at the time those materials are posted into stock. The vendor will not send 
an invoice for the material sent. This method of ERS, sometimes called a two-way 
match, is designated a best practice by many purchasing experts.</div>`
        },
        {
            id: "day25-c2",
            title: "MM-SD: Stock Transport Orders (STO)",
            description: `<h3>MM-SD: Stock Transport Orders (STO)</h3>
<p>© 2013 by Galileo Press Inc., Boston (MA)Conditions in ESM</p>
<p>© 2013 by Galileo Press Inc., Boston (MA)Procurement of Services</p>
<p>© 2013 by Galileo Press Inc., Boston (MA)Procurement of Services</p>
<p>© 2013 by Galileo Press Inc., Boston (MA)Blanket Purchase Order</p>
<p>© 2013 by Galileo Press Inc., Boston (MA)Business Examples - External Service Management</p>
<p>ESM functionality is used for procurement and execution of services. The process</p>
<p>uses the Service Master record as the repository for information about a service.</p>
<p>The actual task that a company needs to have performed can be made up of a series</p>
<p>of service specifications. For example, if a company needs a package for resale,</p>
<p>the task would include specifications for removing the product from its original</p>
<p>packaging, painting the product, repackaging the product, shrink-wrapping, and</p>
<p>finally applying customer labeling.</p>
<div class="hero-tip"><strong>💡 Hero Tip:</strong> We also share the experiences we’ve gathered in different client situations, as well as
challenges and how to solve them, with concrete examples. In addition, we’ve identi-
fied a need to prepare customers for the digital transformation and to provide them
with the right setup from the strategic, organizational level on down to the technical
and  operational levels. We aim to close the gap  at the  strategic level  by  discussing
concrete best practices and how to apply them.</div>`
        },
        {
            id: "day25-c3",
            title: "MM-PP: MRP & Production Integration",
            description: `<h3>MM-PP: MRP & Production Integration</h3>
<p>It’s a common business requirement to not only store the sales order quantity for</p>
<p>financial analysis but also convert the quantity into the unit of measure (UoM) com-</p>
<p>mon  across  the  product  lines.  Historically,  in  financial  reporting,  only  quantities</p>
<p>such as invoice quantity and delivered quantity are stored. This applies to account-</p>
<p>based CO-PA also, for which quantities from FI are used.</p>
<p>In  costing-based  CO-PA,  you  can  define  additional  value  fields  to  store  additional</p>
<p>quantities and define rules for how to derive such quantities.</p>
<p>Figure 2.14  Customizing Additional Quantity Fields in Table ACDOCA</p>
<p>One  of  the  implementation  scenarios  for  SAP  S/4HANA  Finance  is  the  Central</p>
<p>Finance scenario. For customers that see the benefit of the new functionalities of SAP</p>
<p>S/4HANA  Finance  but  can’t  yet  upgrade  their  legacy  systems  to  SAP  S/4HANA</p>
<p>because they have a hybrid multi-ERP system landscape or because such an upgrade</p>
<p>would  be  too  complex,  costly,  or  time-consuming,  SAP  offers  Central  Finance  as  a</p>
<p>deployment option.</p>
<p>SAP  LT  Replication  Server  collects  data  written  to  databases  in  the  source  systems</p>
<p>and feeds this data into the corresponding Central Finance accounting interface. SAP</p>
<p>LT Replication Server is used for the ongoing replication of data to Central Finance for</p>
<p>both FI and CO postings. For the initial load of data, SAP LT Replication Server is used</p>
<p>to transfer CO postings. The initial load of FI data is managed via Customizing activi-</p>
<h3>ties in the Central Finance system. The Central Finance process is as follows</h3>
<p>manually as part of Customizing or mapped using SAP MDG.</p>
<div class="hero-tip"><strong>💡 Hero Tip:</strong> The implementation for SAP S/4HANA Cloud is much faster due to the standard-
ized process configurations, which include SAP Best Practices for implementation.
Both new and existing SAP ERP customers only need to perform data migration,
which is aided by migration tools and templates for different data objects. Deep
technical skills aren’t needed. For the on-premise implementation—both for the
migration scenario and the new implementation scenario—technical knowledge
and skills are mandatory for the team, because there will be customer-specific sce-
narios and considerable customization. The timelines for the SAP S/4HANA adop-
tion are also longer. Customization underpins our world. Everyone has different techniques and prefer-
ences, and businesses are no different. The very first IT systems were specifically tai-
lored to how businesses operated, at a high cost and risk. Later came out-of-the-box
products to increase success and decrease  costs and risk by using best practices to
encourage  businesses  to  adopt  the  standard  processes  and  use  customization  for
unique business processes.</div>`
        }
    ]
};
