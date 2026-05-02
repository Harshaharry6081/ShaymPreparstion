export const day7Content = {
    day: 7,
    phase: 2,
    title: "Request for Quotation (RFQ)",
    concepts: [
        {
            id: "day7-c1",
            title: "The Bidding Process",
            description: `<h3>The Bidding Process</h3>
<p>11.1  Purchase Requisition   ...................................................................   301</p>
<p>11.2  Request for <strong>Quotation</strong>   ................................................................   302</p>
<p>11.3  <strong>Quotation</strong>   ...................................................................................   304</p>
<p>11.4  Purchase Order   ...........................................................................   305</p>
<p>11.5  Source List and Source Determination   .........................................   307</p>
<p>11.5.1  Single Source   .................................................................   307</p>
<p>11.5.2  Multi-Source   ..................................................................   308</p>
<p>11.5.3  Generate a Source List   ....................................................   310</p>
<p>11.5.4  Source Determination   ....................................................   311</p>
<p>11.6  Conditions in Purchasing   .............................................................   312</p>
<p>11.6.1  Condition Processing   ......................................................   312</p>
<p>11.6.2  Pricing Conditions   ..........................................................   313</p>
<p>11.6.3  Taxes   ..............................................................................   314</p>
<p>11.6.4  Delivery Costs   ................................................................   314</p>
<p>11.7  Vendor Evaluation   ......................................................................   314</p>
<p>11.7.1  Vendor Evaluation Overview   ..........................................   315</p>
<p>11.7.2  Vendor Evaluation Criteria   ..............................................   315</p>
<p>11.7.3  Vendor Evaluation Weighting   .........................................   318</p>
<p>11.7.4  Points Scoring for Criteria   ...............................................   318</p>
<p>11.7.5  Maintain Vendor Evaluation   ...........................................   320</p>
<p>11.7.6  Scoring for Automatic and Semi-Automatic Criteria   ........   321</p>
<p>11.7.7  Evaluation for a Material    ...............................................   322</p>
<p>11.8  Business Examples – Purchasing   ..................................................   322</p>
<p>11.8.1  Purchase Requisitions   .....................................................   323</p>
<p>11.8.2  Source List   .....................................................................   323</p>
<p>11.8.3  Conditions   .....................................................................   324</p>
<p>11.8.4  Vendor Evaluation   ..........................................................   324</p>
<p>11.9  Summary   ....................................................................................   325</p>
<p>13  Request for <strong>Quotation</strong>   ..............................................................   343</p>
<p>13.1  Creating a Request for <strong>Quotation</strong>   ................................................   343</p>
<p>13.1.1  <strong>RFQ</strong> Type   .......................................................................   343</p>
<p>13.1.2  <strong>RFQ</strong> Date   .......................................................................   345</p>
<p>13.1.3  <strong>Quotation</strong> Deadline   .......................................................   345</p>
<p>13.1.4  <strong>RFQ</strong> Document Number  .................................................   345</p>
<p>13.1.5  Organizational Data   .......................................................   345</p>
<p>13.1.6  Default Data for Items   ....................................................   345</p>
<p>13.1.7  Collective Number   .........................................................   347</p>
<p>13.1.8  Validity Start/Validity End   ..............................................   347</p>
<p>13.1.9  Apply By   ........................................................................   347</p>
<p>13.1.10  Binding Period   ...............................................................   348</p>
<p>13.1.11  Reference Data  ...............................................................   348</p>
<p>13.1.12  <strong>RFQ</strong> Item Detail   .............................................................   348</p>
<p>13.1.13  <strong>RFQ</strong> Delivery Schedule   ...................................................   348</p>
<p>13.1.14  Additional Data   ..............................................................   349</p>
<p>13.1.15  Vendor Selection   ............................................................   351</p>
<p>13.2  Changing a Request for <strong>Quotation</strong>   ..............................................   352</p>
<p>13.3  Releasing an <strong>RFQ</strong>   ........................................................................   354</p>
<p>13.3.1  Release Code/Release Group/Release Strategy   ................   355</p>
<p>13.3.2  Set Release/Cancel Release   .............................................   355</p>
<p>13.3.3  Release Prerequisite Fulfilled   ..........................................   355</p>
<p>13.3.4  List with Items   ...............................................................   356</p>
<p>13.3.5  Scope of List   ..................................................................   356</p>
<p>13.3.6  Purchasing Document Category   ......................................   356</p>
<p>13.3.7  Other Selection Criteria   ..................................................   356</p>
<p>13.4  Issuing a Request for <strong>Quotation</strong> to a Vendor   ...............................   356</p>
<p>13.5  Business Examples – Request for <strong>Quotation</strong>   ................................   358</p>
<p>13.5.1  Creating and Changing a Request for <strong>Quotation</strong>   .............   358</p>
<p>13.5.2  Releasing a Request for <strong>Quotation</strong>   .................................   359</p>
<p>13.6  Summary   ....................................................................................   359</p>
<p>14  <strong>Quotation</strong>   .................................................................................   361</p>
<p>14.1  Entering a <strong>Quotation</strong>   ..................................................................   361</p>
<p>14.2  Comparing Quotations   ................................................................   363</p>
<p>14.2.1  <strong>Price Comparison</strong> Factor in Quotations   ..........................   363</p>
<p>14.2.2  Other Qualitative Factors in Quotations   .........................   365</p>
<p>14.3  Rejecting Quotations   ..................................................................   366</p>
<p>14.3.1  Flagging the <strong>Quotation</strong> as Rejected   ................................   367</p>
<p>14.3.2  Printing the <strong>Quotation</strong> Rejection    ...................................   367</p>
<p>14.3.3  Advising Unsuccessful Bidders   ........................................   368</p>
<p>14.4  Business Examples – Quotations   .................................................   368</p>
<p>14.4.1  Comparing Quotations   ...................................................   369</p>
<p>14.4.2  Rejecting Quotations   ......................................................   369</p>
<p>14.5  Summary   ....................................................................................   370</p>`
        },
        {
            id: "day7-c2",
            title: "Creating RFQ from PR (ME41)",
            description: `<h3>Creating RFQ from PR (ME41)</h3>
<p>The purchasing user can enter information that is pertinent to items that are to</p>
<p>be included in the <strong>RFQ</strong>. The fields that can be defaulted include Item Category,</p>
<p>Delivery Date, Plant, Storage Location, Material Group, and Req. Tracking</p>
<p>Number. These fields are described in this section.</p>
<p>The Material Group can be used in lieu of a material number or service (if these</p>
<p>are not known). The material group is assigned to each material when it is cre-</p>
<p>ated. This configured field groups together materials of similar characteristics. For</p>
<p>example, if material group 017789 represented HD DVD players, then this mate-</p>
<p>rial group could be entered in the <strong>RFQ</strong> if the actual material was not known at the</p>
<p>time, but the <strong>RFQ</strong> was for an HD DVD player.</p>
<p>This tracking number can be traced back to the original requisition if the RTN</p>
<p>was entered at that level. The person entering the <strong>RFQ</strong> can use the Req. Tracking</p>
<p>Number field to uniquely identify specific POs.</p>
<p>The header details for the <strong>RFQ</strong> can be seen in Figure 13.3 and are described next.</p>
<p>The data entered in the initial screen are defaulted through, and further informa-</p>
<p>tion can be added in the administrative fields.</p>
<p>© 2013 by Galileo Press Inc., Boston (MA)Creating a Request for <strong>Quotation</strong></p>
<p>Companies that send out RFQs for a collective bid can use the collective number</p>
<p>(Coll. no.). For example, if a client is creating a new product, there may be doz-</p>
<p>ens of new materials that it needs to use, as well as new services. To collectively</p>
<p>identify the many RFQs, the client may use a collective number to ensure that the</p>
<p>individual RFQs are tied to the single project. The collective number can be used</p>
<p>to search purposes. It is easier to find RFQs that have a collective number than</p>
<p>individually. Transaction ME4S allows the display of RFQs by collective number.</p>`
        },
        {
            id: "day7-c3",
            title: "Maintaining Quotations (ME47)",
            description: `<h3>Maintaining Quotations (ME47)</h3>
<p>After the selection criterion has been entered, and the transaction is executed, the</p>
<p>results for the selection criteria are shown if any RFQs are found.</p>
<p>From the results, shown in Figure 13.14, the appropriate <strong>RFQ</strong> can be selected,</p>
<p>and printed or transmitted. The resulting <strong>RFQ</strong> printout can be modified to reflect</p>
<p>your client’s requirement either by using ABAP, SAPscript, or a tool such as Adobe</p>
<p>Form Designer.</p>
<p>13.5  Business Examples – Request for <strong>Quotation</strong></p>
<p>A purchasing department issues RFQs for a number of reasons. A material may</p>
<p>have  been  requisitioned  that  has  not  been  purchased  before,  and  the  purchas-</p>
<p>ing  department  will  need  to  find  a  supplier  who  can  offer  the  best  price  and</p>
<p>conditions.  Sometimes  a  material  has  not  been  purchased  for  some  time,  and</p>
<p>the last vendor who supplied the material may not be able to fulfill the request.</p>
<p>There are also other reasons why RFQs are issued, such as vendor bankruptcy or</p>
<p>decertification.</p>
<p>13.5.1  Creating and Changing a Request for <strong>Quotation</strong></p>
<p>The <strong>RFQ</strong> can be created for a single item or multiple items. When a company is</p>
<p>looking to single-source a number of materials, then the <strong>RFQ</strong> can contain a large</p>
<p>number of products.</p>`
        },
        {
            id: "day7-c4",
            title: "Price Comparison & Rejection (ME49)",
            description: `<h3>Price Comparison & Rejection (ME49)</h3>
<p>EE Minority and women-owned businesses (US): Some clients may have a prefer-</p>
<p>ence to give minority-owned or women-owned businesses certain contracts or</p>
<p>POs. If the <strong>RFQ</strong> falls into an area where the client has indicated a preference for</p>
<p>this type of vendor, then this may have more weight in the award decision than</p>
<p>the price.</p>
<p>EE Warranty and return process: The warranty period of an item or the return</p>
<p>policy offered by the bidder may be very important to the purchaser. For exam-</p>
<p>ple, if the <strong>RFQ</strong> is for PCs, the purchaser may be more inclined to accept a bidder</p>
<p>with a higher price per unit if the warranty is two years, than to select a bidder</p>
<p>offering a six-month warranty. The same is true for the return policy. The easier</p>
<p>the return procedure, the more attractive a bid from a supplier becomes.</p>
<p>EE Creative pricing: Often a bidder may not offer the best price in response to an</p>
<p><strong>RFQ</strong>  but  may  offer  a  creative  pricing  schedule.  Purchasing  departments  are</p>
<p>often looking for ways of reducing cost outlay and welcome vendors who can</p>
<p>offer the company ways of purchasing material with delayed payments or pay-</p>
<p>ments on performance.</p>
<p>This section has looked at how quotations are compared when they are received</p>
<p>from the vendor. The next section will look at the process of rejecting the quota-</p>
<p>tions from vendors that have not been selected.</p>
<p>After the purchasing department has compared the quotations from the bidders,</p>
<p>as shown in the previous section, they will then inform the vendors whose quo-</p>
<p>tations  were  rejected.  In  the  system,  the  quotations  also  need  to  be  flagged  as</p>
<p>rejected.</p>
<p>© 2013 by Galileo Press Inc., Boston (MA)Rejecting Quotations</p>`
        }
    ]
};
