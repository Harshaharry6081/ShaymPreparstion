export const day4Content = {
    day: 4,
    phase: 1,
    title: "Business Partner (Vendor Master)",
    concepts: [
        {
            id: "day4-c1",
            title: "S/4HANA Shift: Vendor to Business Partner",
            description: `<h3>S/4HANA Shift: Vendor to Business Partner</h3>
<p>3.1  Material Master   ..........................................................................   65</p>
<p>3.1.1  Material Master Overview   ..............................................   65</p>
<p>3.1.2  Material Master Tables   ...................................................   65</p>
<p>3.1.3  Material Numbering   .......................................................   66</p>
<p>3.1.4  Material Number Range   .................................................   68</p>
<p>3.1.5  Material Type   .................................................................   69</p>
<p>3.2  <strong>Vendor Master</strong>   ............................................................................   70</p>
<p>3.2.1  Definition of a Vendor   ....................................................   70</p>
<p>3.2.2  <strong>Vendor Master</strong> in SAP   ....................................................   70</p>
<p>3.2.3  Vendor Account Groups   .................................................   71</p>
<p>3.2.4  Vendor Number Range   ...................................................   74</p>
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
<p>3.6.1  Material Master Data   .....................................................   85</p>
<p>3.6.2  <strong>Vendor Master</strong> Data   .......................................................   85</p>
<p>3.6.3  Purchasing Data   .............................................................   86</p>
<p>3.6.4  Batch Management   ........................................................   87</p>
<p>Serial Numbers   ...............................................................   87</p>
<p>3.6.5</p>
<p>3.7  Summary   ....................................................................................   88</p>
<p>6  <strong>Vendor Master</strong> Data   .................................................................   189</p>
<p>6.1  General Data   ..............................................................................   189</p>
<p>Address Screen   ...............................................................   190</p>
<p>Control Screen   ...............................................................   192</p>
<p>Payment Transactions   .....................................................   196</p>
<p>6.2  Accounting Information   ..............................................................   199</p>
<p>6.2.1  Accounting Information    ................................................   199</p>
<p>6.2.2  Payment Transactions   .....................................................   203</p>
<p>6.2.3  Correspondence Screen   ..................................................   206</p>
<p>6.3  Purchasing Data    .........................................................................   209</p>
<p>6.3.1  Conditions   .....................................................................   209</p>
<p>Sales Data   ......................................................................   211</p>
<p>6.3.2</p>
<p>6.3.3  Control Data   ..................................................................   212</p>
<p>6.3.4  Default Data Material   .....................................................   215</p>
<p>6.3.5</p>
<p>Service Data   ...................................................................   216</p>
<p>6.3.6  Partner Functions   ...........................................................   217</p>
<p>6.4  Business Examples – <strong>Vendor Master</strong> Data   ...................................   218</p>
<p>6.4.1  General Data   ..................................................................   218</p>
<p>6.4.2  Purchasing Data   .............................................................   219</p>
<p>6.5  Summary   ....................................................................................   220</p>
<p>10  <strong>Vendor Master</strong> Record    .............................................................   281</p>
<p>10.1  Creating the <strong>Vendor Master</strong> Record   ............................................   281</p>
<p>10.2  Changing the <strong>Vendor Master</strong> Record   ...........................................   285</p>
<p>10.2.1  Change <strong>Vendor Master</strong> Record – Current   ........................   285</p>
<p>10.2.2  Change <strong>Vendor Master</strong> Record – Planned   .......................   286</p>
<p>10.2.3  Display Planned Changes to <strong>Vendor Master</strong> Records   ......   287</p>
<p>10.2.4  Activate Planned Changes   ..............................................   287</p>
<p>10.2.5  Change Vendor <strong>Account Group</strong>   ......................................   288</p>
<p>10.3  Deleting <strong>Vendor Master</strong> Record    .................................................   289</p>
<p>10.3.1  Flag a <strong>Vendor Master</strong> Record for Deletion   ......................   289</p>
<p>10.3.2  Deleting Vendor Records via Archiving   ...........................   290</p>
<p>10.4  Display <strong>Vendor Master</strong> Record   ....................................................   291</p>
<p>10.4.1  Display <strong>Vendor Master</strong> Record – Current    .......................   291</p>
<p>10.4.2  Display <strong>Vendor Master</strong> Record – Per Key Date   ...............   291</p>
<p>10.4.3  Display Vendors – Purchasing List   ...................................   292</p>
<p>10.5  Blocking Vendors   ........................................................................   292</p>
<p>10.5.1  Block a Vendor – Purchasing    .........................................   292</p>
<p>10.6  One-Time Vendor   .......................................................................   294</p>`
        },
        {
            id: "day4-c2",
            title: "BP Roles (General, FI Vendor, Supplier)",
            description: `<h3>BP Roles (General, FI Vendor, Supplier)</h3>
<p>The partner functions are assigned to the vendor account groups. For example, the</p>
<p>vendor <strong>account group</strong> 0001 may have different partner functions from the vendor</p>
<p><strong>account group</strong> LIEF.</p>
<p>The partner function can be defined in configuration via the navigation path, IMG •</p>
<p>Materials Management • Purchasing • <strong>Vendor Master</strong> • Vendor Hierarchy •</p>
<p>Define Partner Determination.</p>
<p>6.4  Business Examples – <strong>Vendor Master</strong> Data</p>
<p>This chapter shows that the <strong>Vendor Master</strong> is a collection of data that describes</p>
<p>the vendor’s relationship with the company. Just as the Material Master record</p>
<p>isn’t complete until all relevant departments have entered their data, the Vendor</p>
<p>Master isn’t complete until both the accounting and purchasing departments have</p>
<p>entered their information.</p>
<p>When vendor information is loaded in SAP ERP, there are a number of areas that</p>
<p>need to be entered that are equally important. The general data reflects informa-</p>
<p>tion such as name, address, tax data, and bank details. Specific accounting data,</p>
<p>such as payment transactions and dunning, can be entered separately. The third</p>
<p>area of the <strong>Vendor Master</strong> is the purchasing data where incoterms and partner</p>
<p>information are entered.</p>
<p>When a company decides to load the <strong>Vendor Master</strong> into SAP, there are a number</p>
<p>of ways this can be done. If a company has a small number of vendors, the infor-</p>
<p>mation can be manually loaded into SAP. It’s normal for SAP to require more data</p>
<p>than legacy systems, and there is usually a team to review the existing data and</p>
<p>add to it where necessary. For companies with large numbers of suppliers, the task</p>`
        },
        {
            id: "day4-c3",
            title: "Account Groups & Number Ranges",
            description: `<h3>Account Groups & Number Ranges</h3>
<p>Figure 10.17  Detailed Data for the Vendor <strong>Account Group</strong></p>
<p>Entering a <strong>Vendor Master</strong> record requires general data to be supplemented with</p>
<p>accounting-specific data and purchasing-specific data. The <strong>Vendor Master</strong> record</p>
<p>is especially relevant to a purchasing organization. When creating the vendor, the</p>
<p>purchasing user is entering data associated with the vendor that is relevant only</p>
<p>to the single purchasing organization.</p>
<p>The addition or changes to a <strong>Vendor Master</strong> can be made immediately or planned</p>
<p>for release in the future.</p>
<p>10.8.1  Creating and Changing a <strong>Vendor Master</strong> Record</p>
<p>© 2013 by Galileo Press Inc., Boston (MA)Business Examples – <strong>Vendor Master</strong></p>
<p>A German automotive parts manufacturer had been using SAP ERP for more than a</p>
<p>decade and had never deleted or archived any materials or vendors. The company’s</p>
<p>auditors recommended a review of the <strong>Vendor Master</strong> file to delete duplicated</p>`
        },
        {
            id: "day4-c4",
            title: "Creating a Vendor via T-Code BP",
            description: `<h3>Creating a Vendor via T-Code BP</h3>
<p>In the future, we expect that logistics planning functionality will be integrated with</p>
<p>SAP BPC, which will make an integrated, enterprise-wide planning cycle possible. In</p>
<p>addition to planning, SAP BPC supports real-time consolidation as well, as depicted</p>
<p>in Figure 2.11. Real time in this context means that it has the ability to consume SAP</p>
<p>S/4HANA data without data replication (both transaction data and master data).</p>
<p>Figure 2.11  SAP BPC and Real-Time Consolidation</p>
<p>In addition, we expect some further improvements in the SAP S/4HANA core. In gen-</p>
<p>eral, more SAP Fiori apps will be delivered to support the various FI job roles. We also</p>
<p>expect SAP to provide more enhanced financial planning functionalities and to build</p>
<p>extensions for SAP BPC for SAP S/4HANA Finance, to allow for real-time consolida-</p>
<p>tion and to enhance the predictive and simulation capabilities in the FI domain.</p>
<p>Improved collaboration through stan-</p>
<p>dard integration with SAP IBP.</p>
<p>In the classic version of SAP EWM, core interfaces are needed to transfer business</p>
<p>partners (customers/vendors) to SAP EWM, and these will be mapped to business</p>
<p>partner objects in SAP EWM. SAP EWM uses different numbering, and due to dif-</p>
<p>ferences in data objects, different address check routines need to be set up in SAP</p>
<p>ERP  and  in  SAP  EWM.  With  SAP  EWM  embedded  in  SAP  S/4HANA,  there  will  be</p>
<p>only be one business object (i.e., <strong>business partner</strong>), which will be used for both cus-</p>
<p>tomers and vendors across different lines of business (LOBs) in SAP S/4HANA.</p>
<p>Like business partners, in SAP EWM embedded in SAP S/4HANA, there’s no need to</p>
<p>transfer master data from the SAP ERP system to SAP EWM; instead, all the rele-</p>
<p>vant  data  (e.g.,  various  SAP  APO  tables)  will  be  read  through  Core  Data  Services</p>
<p>(CDS) views and used for SAP EWM. SAP EWM embedded in SAP S/4HANA also pro-</p>
<p>vides the additional benefit of support for 40-digit material masters.</p>`
        }
    ]
};
