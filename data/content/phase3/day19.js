export const day19Content = {
    day: 19,
    phase: 3,
    title: "Batch Management",
    concepts: [
        {
            id: "day19-c1",
            title: "What is a Batch?",
            description: `<h3>What is a Batch?</h3>
<p>3.3.3  Purchasing Information Record Numbering   ....................   76</p>
<p>3.3.4  Purchasing Information Record-Screen Layout   ................   77</p>
<p>3.4  <strong><strong>Batch</strong> Management</strong> Data   ............................................................   79</p>
<p>3.4.1  What Is a <strong>Batch</strong>?   ............................................................   79</p>
<p>3.4.2  <strong>Batch</strong> Level   ....................................................................   79</p>
<p>3.4.3  Changing the <strong>Batch</strong> Level   ...............................................   80</p>
<p>3.4.4  <strong>Batch</strong>-Status Management   .............................................   80</p>
<p>3.4.5</p>
<p>Initial <strong>Batch</strong> Status   .........................................................   81</p>
<p>3.4.6  <strong>Batch</strong>-Number Assignment   .............................................   81</p>
<p>3.5  Serial Number Data   ....................................................................   82</p>
<p>3.5.1  What Is a Serial Number?   ...............................................   82</p>
<p>Serial Number Profile   .....................................................   82</p>
<p>3.5.2</p>
<p>Serializing Procedures   .....................................................   83</p>
<p>3.5.3</p>
<p>3.6  Business Examples – Master Data in Materials Management   .......   85</p>
<p>3.6.1  Material Master Data   .....................................................   85</p>
<p>3.6.2  Vendor Master Data   .......................................................   85</p>
<p>3.6.3  Purchasing Data   .............................................................   86</p>
<p>3.6.4  <strong><strong>Batch</strong> Management</strong>   ........................................................   87</p>
<p>Serial Numbers   ...............................................................   87</p>
<p>3.6.5</p>
<p>3.7  Summary   ....................................................................................   88</p>
<p>5.2  Plant Data/Storage Location   .......................................................   144</p>
<p>5.2.1  General Data   ..................................................................   144</p>
<p><strong>Shelf Life</strong> Data   ................................................................   147</p>
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
<p>8  <strong><strong>Batch</strong> Management</strong> Data   .........................................................   237</p>
<p>8.1  <strong><strong>Batch</strong> Management</strong> Overview   .....................................................   237</p>
<p><strong>Batch</strong> Definition   .............................................................   237</p>
<p>Pharmaceutical Industry   .................................................   238</p>
<p>8.2  <strong>Batch</strong> Master Record   ..................................................................   239</p>
<p>8.2.1  Creating a <strong>Batch</strong>    ............................................................   239</p>
<p>8.2.2  Changing a <strong>Batch</strong>   ...........................................................   245</p>
<p>8.2.3  Deleting a <strong>Batch</strong>   .............................................................   246</p>
<p>8.3  <strong>Batch</strong> Determination    ..................................................................   248</p>
<p>8.3.1  <strong>Batch</strong> Determination Condition Tables   ...........................   248</p>
<p>8.3.2  <strong>Batch</strong> Determination Access Sequences   ..........................   249</p>
<p>8.3.3  <strong>Batch</strong> Strategy Types   ......................................................   249</p>
<p>8.3.4  <strong>Batch</strong> Search Procedure   ..................................................   251</p>
<p>8.4  <strong>Batch</strong> Information Cockpit   ..........................................................   252</p>
<p>8.4.1  <strong>Batch</strong> Information Cockpit Overview   ..............................   252</p>
<p>8.4.2  BIC Standard Configuration   ............................................   253</p>
<p>8.4.3  BIC User-Defined Configuration  ......................................   255</p>
<p>8.5  Business Examples – <strong><strong>Batch</strong> Management</strong> Data   ............................   257</p>
<p>8.5.1  <strong><strong>Batch</strong> Management</strong> Record   ............................................   257</p>
<p>8.5.2  <strong>Batch</strong> Determination   ......................................................   258</p>
<p>8.6  Summary   ....................................................................................   258</p>
<p>EE Chapter 3: In this chapter, you can examine the master data that is found in the</p>
<p>MM  functionality.  The  Material  Master,  Vendor  Master,  <strong>Batch</strong>  Management,</p>
<p>serial records, and the purchasing information records are described in detail.</p>
<p>The chapter describes how this data is created and used by showing configura-</p>
<p>tion steps and examples.</p>
<p>EE Chapter 8: This chapter examines the data related to <strong><strong>Batch</strong> Management</strong>. This</p>
<p>includes the <strong>batch</strong> record for a material and how that <strong>batch</strong> can be selected by</p>
<p>using the <strong>batch</strong> determination functionality.</p>`
        },
        {
            id: "day19-c2",
            title: "Batch Classification (MSC1N)",
            description: `<h3>Batch Classification (MSC1N)</h3>
<p>Certain material can be defined in SAP as being <strong>batch</strong> managed. A <strong>batch</strong> is a quan-</p>
<p>tity of material that represents a homogeneous unit that has unique specifications.</p>
<p>The <strong>batch</strong> of material may refer to a quantity of chemical that is produced in one</p>
<p>process or a quantity of bottles of water that were filled on a certain filling line</p>
<p>from a specific tank. There are many ways in which a <strong>batch</strong> can be defined. In SAP,</p>
<p>the <strong>batch</strong> is used to identify units of material as they move through the system.</p>
<p>The <strong>batch</strong> can have specific characteristics that enable it to be identified and used</p>
<p>within the Material Management (MM) functionality. This chapter describes the</p>
<p>processes in creating and changing a <strong>batch</strong> and the process of <strong>batch</strong> determination.</p>
<p>The first section gives an overview of the <strong>batch</strong> and how it is used in industry.</p>
<p>The definition of a <strong>batch</strong> differs among companies, industries, and countries. For</p>
<p>example, in the pharmaceutical industry, strict guidelines and regulations deter-</p>
<p>mine what a <strong>batch</strong> is. These regulations on batches and <strong>batch</strong> control include the</p>
<p>ANSI/ISA-88 standard and the Food and Drug Administration (FDA) 21 CFR Part</p>
<p>11 specifications in the United States.</p>
<p>Although there is no one exact definition of a <strong>batch</strong>, the following definition from</p>
<h3>ExxonMobil Aviation Lubricants may help</h3>
<p>A <strong>batch</strong> is the specific quantity of a material produced in a single manufacturing</p>
<p>process, i.e., under the same conditions, thus featuring identical properties. Each</p>
<p><strong>batch</strong> of material is given a <strong>batch</strong> number. Each <strong>batch</strong> of a material is tested with</p>
<p>regard to relevant characteristics to ensure it meets the values or within the range</p>
<p>for those characteristics.</p>
<p>A second definition of a <strong>batch</strong> is from the Marathon Oil Company, which signifi-</p>
<h3>cantly differs from other definitions</h3>
<p>A <strong>batch</strong> is a shipment of a single product that is handled through the pipeline</p>
<p>without mixing with preceding or following shipments.</p>`
        },
        {
            id: "day19-c3",
            title: "Batch Determination",
            description: `<h3>Batch Determination</h3>
<p>8.3.1  <strong>Batch</strong> Determination Condition Tables</p>
<p>The <strong>batch</strong> determination condition table consists of a number of fields that are</p>
<p>selected and records that are created to assign values to those fields. A condition</p>
<p>table can be created for each of the four areas that use <strong>batch</strong> determination.</p>
<p>The condition tables can be created in the IMG using the navigation path, IMG •</p>
<p>Logistics - General  • <strong><strong>Batch</strong> Management</strong>  • <strong>Batch</strong> Determination and <strong>Batch</strong></p>
<p>Check • Condition Tables.</p>
<p>© 2013 by Galileo Press Inc., Boston (MA)<strong>Batch</strong> Determination</p>
<p>8.3.2  <strong>Batch</strong> Determination Access Sequences</p>
<p>For  each  <strong>batch</strong>  strategy  type,  there  is  a  <strong>batch</strong>  determination  access  sequence.</p>
<p>This allows the <strong>batch</strong> strategy type to access the condition tables in the correct</p>
<p>sequence. The access sequences for the five areas, shown in the previous section,</p>
<p>can be configured using the navigation path, IMG • Logistics - General • <strong>Batch</strong></p>
<p>Management • <strong>Batch</strong> Determination and <strong>Batch</strong> Check • Access Sequences.</p>`
        },
        {
            id: "day19-c4",
            title: "Shelf-Life Expiration Date (SLED)",
            description: `<h3>Shelf-Life Expiration Date (SLED)</h3>
<p>The classification system in SAP ERP fits the definition just described because it</p>
<p>is a structured framework primarily used for searching objects based on a series</p>
<p>of characteristics that describe the object. The object can be a material, vendor,</p>
<p><strong>batch</strong>, and so on.</p>
<p>The SAP ERP classification is a structured framework primarily used for the search-</p>
<p>ing of objects based on a series of characteristics that describe the object. It is</p>
<p>possible to classify a wide range of objects including materials, vendors, batches,</p>
<p>and so on.</p>
<p>Characteristics describe an object, and the characteristic can have values or a range</p>
<p>of values that are valid for each characteristic. Classes are groupings of charac-</p>
<p>teristics that are used to describe a particular type of object such as a material or</p>
<p><strong>batch</strong>.</p>
<p>A German chemical company produced a number of finished products that were</p>
<p>very similar in chemical composition, but each had a specific range of properties</p>
<p>that were important to their customers. Although each product did have a unique</p>
<p>specification, the individual batches that were manufactured were slightly differ-</p>
<p>ent. Despite this, each <strong>batch</strong> available to the customer was within the product</p>
<p>tolerances.</p>
<p>The sales staff sold items to the customers based on the finished product speci-</p>
<p>fications, and this was a problem for a number of customers. The requirements</p>
<p>by some customers were more specific than the general information accessible to</p>
<p>the sales staff. Some customers preferred to purchase batches of finished product</p>
<p>that had a certain chemical property, but the sales staff could only call the quality</p>
<p>department and ask them to review the chemical properties of each <strong>batch</strong> to see if</p>
<p>any satisfied the customer. Not only was this frustrating for the customer but also</p>
<p>a waste of resources for the sales and quality departments.</p>
<p>The company decided to use the classification system to create the characteristics</p>
<p>required by the customers. Each test carried out by the quality department was</p>
<p>created as a characteristic in SAP ERP and a class was created that contained these</p>
<p>tests. The class was assigned to the relevant batches of the finished product and</p>
<p>values assigned to the characteristics based on the quality tests.</p>`
        }
    ]
};
