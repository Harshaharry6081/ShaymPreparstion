export const day16Content = {
    day: 16,
    phase: 3,
    title: "Transfer Postings",
    concepts: [
        {
            id: "day16-c1",
            title: "Plant-to-Plant Transfer (1-step vs 2-step)",
            description: `<h3>Plant-to-Plant Transfer (1-step vs 2-step)</h3>
<p>11  Purchasing Overview    ...............................................................   <strong>301</strong></p>
<p>11.1  Purchase Requisition   ...................................................................   <strong>301</strong></p>
<p>11.2  Request for Quotation   ................................................................   302</p>
<p>11.3  Quotation   ...................................................................................   304</p>
<p>11.4  Purchase Order   ...........................................................................   <strong>305</strong></p>
<p>11.5  Source List and Source Determination   .........................................   307</p>
<p>11.5.1  Single Source   .................................................................   307</p>
<p>11.5.2  Multi-Source   ..................................................................   308</p>
<p>11.5.3  Generate a Source List   ....................................................   310</p>
<p>11.5.4  Source Determination   ....................................................   <strong>311</strong></p>
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
<p>11.7.6  Scoring for Automatic and Semi-Automatic Criteria   ........   <strong>321</strong></p>
<p>11.7.7  Evaluation for a Material    ...............................................   322</p>
<p>11.8  Business Examples – Purchasing   ..................................................   322</p>
<p>11.8.1  Purchase Requisitions   .....................................................   323</p>
<p>11.8.2  Source List   .....................................................................   323</p>
<p>11.8.3  Conditions   .....................................................................   324</p>
<p>11.8.4  Vendor Evaluation   ..........................................................   324</p>
<p>11.9  Summary   ....................................................................................   325</p>
<p>20.1  Goods Movements  ......................................................................   463</p>
<p>20.1.1  Stock Overview    .............................................................   464</p>
<p>20.1.2  Material Document    .......................................................   465</p>
<p>20.1.3  Movement Types   ............................................................   466</p>
<p>20.2  Goods Issue   ................................................................................   467</p>
<p>20.3  Goods Receipt   ............................................................................   468</p>
<p>20.4  Physical Inventory   .......................................................................   468</p>
<p>20.5  Returns   .......................................................................................   469</p>
<p>20.5.1  Introduction to Returns   ..................................................   469</p>
<p>20.5.2  Creating a Return   ...........................................................   469</p>
<p>20.5.3  Configuring Reason for Movement   .................................   470</p>
<p>20.5.4  Material Documents   .......................................................   472</p>
<p>20.6  Reservations    ..............................................................................   474</p>
<p>20.6.1  Introduction to Reservations   ..........................................   474</p>
<p>20.6.2  Creating a Manual Reservation   .......................................   475</p>
<p>20.6.3  MRP and Reservations   ...................................................   476</p>
<p>20.6.4  Reservations Management Program   ...............................   477</p>
<p>20.7  Stock Transfers    ...........................................................................   480</p>
<p>20.7.1  Stock Transfer and <strong>Transfer Posting</strong>   .................................   480</p>
<p>20.7.2  Transfer Between Storage Locations Using</p>
<p>20.7.1  Stock Transfer and <strong>Transfer Posting</strong></p>
<p>The user can perform the one-step storage location to storage location transfer</p>
<p>using  Transaction  MB1B,  which  is  found  via  the  navigation  path,  SAP  Menu  •</p>
<p>Logistics • Materials Management • Inventory Management • Goods Move-</p>
<p>ment • <strong>Transfer Posting</strong>.</p>
<p>The Movement Type entered on the initial screen, shown in Figure 20.15, is <strong>311</strong>,</p>
<p>which is the movement type for a one-step move between storage locations. How-</p>
<p>ever, if the material to be moved is a special stock, then the Special Stock indica-</p>
<p>tor needs to be entered as well as the Movement Type.</p>`
        },
        {
            id: "day16-c2",
            title: "Storage Location Transfer",
            description: `<h3>Storage Location Transfer</h3>
<p>Batch Determination, 164</p>
<p>Criteria, <strong>321</strong></p>
<p>Evaluated Receipt Settlement, 213</p>
<p>Model selection, 455</p>
<p>Payment, 198, 203</p>
<p>Purchase Order, 112, 213</p>
<p>Release, 554</p>
<p>Reorder-point planning, 442</p>
<p>Availability check, 135 , 169, 170</p>
<p>Available quantity, 476</p>
<p>Available stock, 434, 443, 445, 447</p>
<p>Average price, 363</p>
<p>Billing address, <strong>305</strong></p>
<p>Bill of exchange, 206</p>
<p>Indicator, 165</p>
<p>Bulk Storage, 151</p>
<p>Indicator, 151</p>
<p>Placement strategy, 151</p>
<p>Bundesgesundheitsamt, 238</p>
<p>Business address, 190</p>
<p>Business Framework Architecture (BFA), 272</p>
<p>Buyer, <strong>305</strong>, 307, 312, 313, 323, 333, 371</p>
<p>Buying group, 304</p>
<p>By-product, 475, 513–515</p>
<p>Commercial Price, 178</p>
<p>Commission Group, 133</p>
<p>Communication field, 192</p>
<p>Company, 46, 47, 58, 59, 64, 70, 79, 80, 157,</p>
<p>178, 189, 190, 193, 194, 196, 204, 218, 239,</p>
<p>284, 302, <strong>309</strong>, 325, 343, 355, 370, 411, 453,</p>
<p>463, 464, 468, 499, 503, 505, 507, 513, 516,</p>
<p>572, 590, 591</p>
<p>Company code, 43, 46–48, 50, 51, 58, 59,</p>
<p>71–73, 86, 178, 199, 480, 546, 553, 560, 566,</p>
<p>Comparison value criteria, 364</p>
<p>Competitive bid, 359</p>
<p>Competitive Products, 94</p>
<p>Component, 171</p>
<p>Material, 585</p>
<p>Scrap, 171</p>
<p>Stock, 171</p>
<p>Contact address, 218</p>
<p>Container requirement, 146</p>
<p>Continuous inventory, 521, 534</p>
<p>Contract, 206, 221, 230, <strong>301</strong>, 302, 304, <strong>309</strong>,</p>
<p><strong>311</strong>, 312, 314, 356, 366, 367, 381, 382, 386–</p>
<p>389, 394, 395, 403, 421</p>
<p>Agreement, 437</p>
<p>Assets, 559</p>
<p>Lot size, 162</p>
<p>Period, 455</p>
<p>Source, <strong>309</strong></p>
<div class="hero-tip"><strong>💡 Hero Tip:</strong> Best-of-breed, 36
Best practice, 204, 213, <strong>301</strong>, 308, 620
Beta factor, 457
Beverages, 94</div>`
        },
        {
            id: "day16-c3",
            title: "Stock Type Transfer (QI \u2192 Unrestricted)",
            description: `<h3>Stock Type Transfer (QI → Unrestricted)</h3>
<p>Quantity Stipulations, 131</p>
<p>Quota arrangement, 115, <strong>311</strong>, 312</p>
<p>Quotation, 304, 313, 314, 345, 347, 348,</p>
<p>361–363, 365–367, 369, 370, 382, 384</p>
<p>Range of values, 590, 591, 607</p>
<p>Rate-based planning, 275</p>
<p>Raw material, 93, 165, <strong>301</strong>, 322, 515, 522,</p>
<p>Real-time reports, 463</p>
<p>Reason code, 350</p>
<p>Reason for movement, 471, 496</p>
<p>Rebate, 225</p>
<p>Scheduling agreement, 116, <strong>309</strong>, 310, 313,</p>
<p>314, 356, 381, 382, 384, 386, 387, 395, 403,</p>
<p>437, 569</p>
<p>Sell by batch, 259</p>
<p>Semi-automatic criteria, <strong>321</strong></p>
<p>Semi-finished, 76</p>
<p>goods, 81, 91</p>
<p>Server, 43</p>
<p>Service, 59, 70, 76, 214, 222, 235, <strong>301</strong>, <strong>305</strong>,</p>
<p>314, 324, 325, 329, 331, 345–347, 363, 380,</p>
<p>381, 386, 387, 411, 412, 417, 421, 425, 427,</p>
<p>429, 537, 555</p>
<p>Shipping Data, 135</p>
<p>Shipping Instructions, 114</p>
<p>Ship-to address, <strong>305</strong></p>
<p>Significance test, 456</p>
<p>Simple algorithm, 197</p>
<p>Simulation, 540</p>
<p>Single account assignment, 379</p>
<p>Single-level</p>`
        },
        {
            id: "day16-c4",
            title: "Material-to-Material Transfer (Mvt 309)",
            description: `<h3>Material-to-Material Transfer (Mvt 309)</h3>
<p>Dangerous goods .................................................. 131</p>
<p>Dashboards ................................................................ 68</p>
<p>Data acquisitions .................................................. 426</p>
<p>Data aging ................................................................ 253</p>
<p>Data collation ......................................................... 200</p>
<p>Data Dictionary (DDIC) ....................................... 339</p>
<p>Data exploration ................................................... 426</p>
<p>Data flow ........................................................ 478, 491</p>
<p>Data footprint ........................................................... 46</p>
<p>Data foundations .................................................. 426</p>
<p>Data harmonization ............................................... 97</p>
<p>Data integration services ................................... 243</p>
<p>Data lake ......................................................... 444–445</p>
<p>Data lifecycle management .............................. 253</p>
<p>Data migration ....................................................... 371</p>
<p>Data migration strategy ..................................... 328</p>
<p>Data model</p>
<p>.............................................................. 203</p>
<p>Data model simplification ................................ 142</p>
<p>Data redundancy ............................... 128, 131, 487</p>
<p>Data replication ..................................................... <strong>305</strong></p>
<p>Data Replication Framework ........................... 416</p>
<p>Data selection ........................................................ 216</p>
<p>Data synchronization ......................................... 409</p>
<p>Data temperature ................................................. 442</p>
<p>Data tiering ............................................................. 442</p>
<p>Data volume ........................................................... 215</p>
<p>................ 365</p>
<p>Data volume management (DVM)</p>
<p>work center ......................................................... 365</p>
<p>Database hint ......................................................... 341</p>
<p>Database layer ........................................................ 248</p>
<p>Database migration option .............................. 365</p>
<p>Database Migration Option (DMO) ............... 335</p>
<p>............. 332</p>
<p>Database Shared Library (DBSL)</p>
<p>..................... 232</p>
<p>Database size .......................................................... 268</p>
<p>Days payable outstanding (DPO)</p>
<p>.......... 395, 485</p>
<p>Days sales outstanding (DSO) .......................... 395</p>
<p>Decentralized SAP EWM .................................... 131</p>
<p>Decision Wizard .................................................... 399</p>
<p>Delivery request (notification) ........................ 131</p>
<p>Delivery schedules ............................................... 117</p>
<p>Dell Boomi ............................................................... 278</p>
<p>Delta shipping ........................................................ 232</p>
<p>Demand-driven MRP .......................................... 116</p>
<p>Deployment path ................................................. <strong>321</strong></p>
<p>Depooling/declustering ..................................... 342</p>
<p>Depreciation posting ............................................. 78</p>
<p>Descriptive reporting .......................................... 426</p>
<p>Design thinking .............................................. 33, 474</p>
<p>Device personalization ...................................... 414</p>
<p>DevOps .................................................. 254, 259, 457</p>
<p>Digital backbone ...................................................... 46</p>
<p>Digital core .................................. 209, 389, 452, 456</p>
<p>Digital strategy ......................................................... 35</p>
<p>Digital transformation ................. 29, 31, 37, 389,</p>
<p>Hadoop .................................................. 243, 428, 445</p>
<p>HANAtization ............................................... 329, 339</p>
<p>Hard close ................................................................. 480</p>
<p>Hardware .................................................................. 213</p>
<p>High availability (HA)</p>
<p>................................ 227, 270</p>
<p>HP Quality Center ................................................. 258</p>
<p>Hub model</p>
<p>............................................................... 416</p>
<p>Human capital management ........................... 406</p>
<p>Hybrid adoption .................................................... 272</p>
<p>Hybrid Application Toolkit ............................... <strong>311</strong></p>
<p>Hybrid cloud ................................................. 263, 274</p>
<p>Hypercare ................................................................. 378</p>
<p>IBM’s Watson Developer Cloud ...................... 313</p>
<p>Idea generation ...................................................... 178</p>
<p>Identity store .......................................................... 246</p>
<p>IDoc ............................................................................ 170</p>
<p>In-app extensibility .......................... 300–<strong>301</strong>, 306</p>
<p>Inbound delivery .................................................. 133</p>
<p>Industry solutions ...................................... 187, 210</p>
<p>InfoCubes .......................................................... 84, 440</p>
<p>InfoProviders .......................................................... 437</p>
<p>Infrastructure ............................................... 215, 269</p>
<p>Infrastructure as a service (IaaS) .... 32, 262, 264</p>
<p>Initial investment ................................................. 273</p>
<p>In-memory columnar storage ............................ 53</p>
<p>Insert updates ........................................................ 217</p>
<p>Inspection process ............................................... 133</p>
<p>Instance number ................................................... 231</p>
<p>Integration-as-a-service ..................................... 407</p>
<p>Intercompany reconciliation ........ 102, 478, 480</p>
<p>Interim modes of operation (IMO) ...... 465, 475</p>
<p>Internal collaboration ............................... 172, 410</p>
<p>Internal Orders ......................................................... 66</p>
<p>International Federation of Robotics (IFR) .... 29</p>
<p>International Financial Reporting Standard 15</p>
<p>Key user approach ................................................ <strong>301</strong></p>
<p>KPI Modeler ............................................................ 431</p>
<p>Lack of visibility .................................................... 161</p>
<p>Landscape transformation ...................... <strong>321</strong>, 371</p>
<p>Learning management ....................................... 404</p>
<p>Legacy system ........................................................ 378</p>
<p>LE-TRA ....................................................................... 135</p>
<p>.................................................... 264</p>
<p>Licensing model</p>
<p>......................................... 486</p>
<p>Line of business (LoB)</p>
<p>solutions ....................................................... 47, 389</p>
<p>Liquidity forecast ..................................................... 65</p>
<p>Liquidity Management ......................................... 81</p>
<p>Live replication mode ......................................... 231</p>
<p>Local ledgers ........................................................... 479</p>
<p>Logical partitioning (LPar)</p>
<p>................................ 267</p>
<p>Logistic service provider .................................... 128</p>
<p>Logistics ....................................................................... 50</p>
<p>Logistics execution .............................................. 137</p>
<p>........ 59, 350</p>
<p>Logistics Information System (LIS)</p>
<p>Logistics invoice verification (LIV)</p>
<p>................ 169</p>
<p>Log-replay ................................................................ 232</p>
<p>Long material number (LAMA) .......................... 58</p>
<p>LSA++ ......................................................................... 440</p>`
        }
    ]
};
