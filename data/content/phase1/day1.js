export const day1Content = {
    day: 1,
    phase: 1,
    title: "Introduction to SAP S/4HANA & Fiori",
    concepts: [
        {
            id: "day1-c1",
            title: "Evolution from R/3 to S/4HANA",
            description: `<h3>Evolution from R/3 to S/4HANA</h3>
<p>Welcome to the third edition of Materials Management with SAP ERP: Functionality</p>
<p>and Technical Configuration. The first edition was published in 2006 and was based</p>
<p>on the SAP <strong>R/3</strong> Release 4.7. The second edition was published in 2008 and incor-</p>
<p>porated the new functionality of ECC 6.0. Both editions of the book were favorably</p>
<p>received and have led to this updated third edition.</p>
<p>In 1979, SAP released its mainframe product called R/2. Materials Management</p>
<p>(then called RM) was a core module of this release. R/2 was the successor to SAP’s</p>
<p>first software release, RM/1, which was a Materials Management software suite.</p>
<p>SAP dominated the German market, and in the 1980s, SAP developed a broader</p>
<p>market in the rest of Europe. In 1992, SAP developed the client/server applica-</p>
<p>tion we all know now as <strong>R/3</strong>. This allowed SAP to bring the software to the U.S.</p>
<p>market, and within a few years, SAP became the gold standard for ERP (enterprise</p>
<p>resource planning) software.</p>
<p>In Release 4.7 Enterprise of SAP <strong>R/3</strong>, the company introduced the concept of the</p>
<p>Enterprise Core. This included all of the <strong>R/3</strong> 4.6 functionality and some limited</p>
<p>functional enhancements and developments to the existing 4.6 functionality. SAP</p>
<p>announced  that  going  forward,  all  legal  changes  and  support  packs,  including</p>
<p>stabilization and performance enhancements, would be applied at the Enterprise</p>
<p>Core level.</p>
<p>In June of 2004, SAP introduced the successor to 4.7 Enterprise called mySAP</p>
<p>ERP 2004, also known as the Enterprise Central Component or ECC 5.0, which is</p>
<p>the next level of SAP <strong>R/3</strong> evolution. This new software suite included four core</p>
<p>functional areas: mySAP ERP Financials (FI, CO); mySAP ERP Human Capital Man-</p>
<p>agement (HCM); mySAP ERP Corporate Services, which includes QM and Environ-</p>
<p>mental Health and Safety (EH&S); and mySAP ERP Operations (PP, WM, MM).</p>
<p>Transport Request</p>
<p>A method of organi-</p>
<p>zing changes to an <strong>R/3</strong> system. The transport</p>
<p>request records changes made to the system</p>
<p>and controls what is transported to other sy-</p>
<p>stems in the landscape, for example, develop-</p>
<p>ment to quality then to production.</p>
<p>A  native  of  London,  England,  Martin  Murray  joined  the</p>
<p>computer industry upon his graduation from Middlesex Uni-</p>
<p>versity in 1986. In 1991, he began working with SAP R/2 in</p>
<p>the Materials Management area for a London-based multi-</p>
<p>national beverage company, and, in 1994, he moved to the</p>
<p>United States to work as an SAP <strong>R/3</strong> consultant. Since then,</p>
<p>he has been implementing the Materials Management (MM)</p>
<p>and Warehouse Management (WM) functionality in projects</p>
<p>throughout the world. He is employed by IBM Global Busi-</p>
<p>ness Services.</p>`
        },
        {
            id: "day1-c2",
            title: "HANA In-Memory Computing",
            description: `<h3>HANA In-Memory Computing</h3>
<p>With SAP EWM embedded in SAP <strong>S/4HANA</strong>, the inspection process is as follows:</p>
<p>2. Based on the inspection rules setup, using the quality management functionalities</p>
<p>in SAP <strong>S/4HANA</strong>, the system determines whether it’s relevant for the inspection</p>
<p>process.</p>
<p>4. The inspection is executed and details are recorded in SAP <strong>S/4HANA</strong>.</p>
<p>In the first release of SAP EWM embedded in SAP <strong>S/4HANA</strong>, the quality inspection</p>
<p>process comes with a basic scope. Several processes have still not been included yet</p>
<p>in SAP <strong>S/4HANA</strong> release 1709.</p>
<p>With release 1610, SAP EWM embedded in SAP <strong>S/4HANA</strong> offers massive simplifica-</p>
<p>tions through reduction of redundant data and through leaner processes and fewer</p>
<p>business documents. In addition, specific functionalities within the classic SAP EWM</p>
<p>have been disabled or replaced to meet SAP <strong>S/4HANA</strong> guidelines and vision. The fol-</p>
<h3>lowing functionalities have been disabled/replaced</h3>
<p>The decision not to include FOM in SAP EWM embedded in SAP <strong>S/4HANA</strong> arose</p>
<p>mainly because SAP TM offers enhanced functionalities and has been made avail-</p>
<p>able as an embedded functionality within SAP <strong>S/4HANA</strong>. SAP TM is also offered as</p>
<p>a sidecar solution. We will describe embedded SAP Transportation Management in</p>
<p>more detail in the next section.</p>
<div class="hero-tip"><strong>💡 Hero Tip:</strong> SAP <strong>S/4HANA</strong> seeks in the future to address all these issues by simplifying processes
for collecting, registering, and checking invoices; verifying them against preconfig-
ured business rules; and handling exceptions with SAP solutions for invoice and pay-
ables  management. However,  this  is  currently  an  area  in  which  little  is  delivered
within the SAP <strong>S/4HANA</strong> core that can be considered best practices. The current pro-
cesses  focus  on  the  standard  Logistics  Invoice  Verification  (LIV)  processes,  in  con-
junction  with  SAP  <strong>Fiori</strong>-enabled  invoice  approvals.  The  SAP  roadmap  will  start  to
incorporate the open-text Vendor Invoice Management (VIM) functionality, but it’s
currently unclear to what extent—that is, whether this will include optical character
recognition (OCR) and exception handling and how it will integrate with invoice han-
dling in the Ariba Network. The key point of simplification which must be evaluated by clients is the previous
functionality  for  freight  shipment  costing  that  was  delivered  through  the  LE-TRA
component,  which  is  not  the  target  architecture  within  SAP  <strong>S/4HANA</strong>.  Instead,
freight cost settlement functionality within SAP Transportation Management is the
solution of choice and will be available as an extended separately licensed solution
embedded within SAP <strong>S/4HANA</strong>. However, this integration isn’t delivered currently
for optimized bulk oil shipments and is on the roadmap for future innovation.</div>`
        },
        {
            id: "day1-c3",
            title: "Fiori Launchpad & App Types",
            description: `<h3>Fiori Launchpad & App Types</h3>
<p>– SAP <strong>HANA</strong> can’t execute backup on a smaller than database-level scale. Thus,</p>
<p>it’s  not  possible  to  backup  data  sets  separately  for  each  of  the  applications</p>
<p>deployed. If data restoration is required, both data sets must be recovered to the</p>
<p>same point.</p>
<p>In this option, multiple SIDs are on a single SAP <strong>HANA</strong> hardware unit, as shown in</p>
<p>Figure  9.18.  Per  SAP  Note  1681092,  this  deployment  is  supported  for  production</p>
<p>systems only for a single host or scale-up scenario. It does support nonproductive</p>
<p>systems, such as development, test, and so on, in both single-node and scale-out</p>
<p>scenarios  (as  mentioned  earlier,  the  scale-out  scenario  isn’t  supported  for  SAP</p>
<p><strong>S/4HANA</strong>).</p>
<p>This feature has been available in SAP <strong>HANA</strong> since SPS 09 and allows multiple, iso-</p>
<p>lated instances of the application to be hosted in a single SAP <strong>HANA</strong> system. In this</p>
<p>scenario,  there  is  a  central  database  used  for  system  administration  and  one  or</p>
<p>The administration layer for the central database or system database contains the</p>
<p>landscape  topology  information,  system-wide  parameter  settings,  and  resource</p>
<p>management for all tenant databases, including CPU and memory, as well as own-</p>
<p>ing the complete backup of all databases. Although MDC supports the tenant data-</p>
<p>bases being spread across multiple nodes in a scale-out scenario (refer to Section</p>
<p>9.2.3), current constraints make it possible for SAP <strong>S/4HANA</strong> to be deployed only in</p>
<p>a single node in an MDC system. The key relevant SAP Notes for this feature are</p>
<p>SAP Notes 2096000 and 2104291.</p>
<p>Furthermore,  the  potential  impact  on  performance  of  applications  on  each  other</p>
<p>needs to be taken into consideration while planning. Plans for proper stress and vol-</p>
<p>ume testing need to be made before going live to monitor performance in each of</p>
<p>these scenarios. For an MCOS scenario, SAP recommends using the resource manage-</p>
<p>ment features of SAP <strong>HANA</strong>, such as parameters controlling memory limits, influenc-</p>
<p>ing CPU utilization, and so on.</p>
<p>With SAP <strong>HANA</strong> 2.0, MDC has become the only standard and only operation mode</p>
<p>(see SAP Note 2423367), so you can’t use a single-container system. For a new installa-</p>
<p>tion or an upgrade, the multicontainer mode will have one default tenant database</p>
<p>(for an upgrade, this tenant database corresponds to the single container of the ear-</p>
<p>lier version).</p>
<div class="hero-tip"><strong>💡 Hero Tip:</strong> The implementation for SAP <strong>S/4HANA</strong> Cloud is much faster due to the standard-
ized process configurations, which include SAP Best Practices for implementation.
Both new and existing SAP ERP customers only need to perform data migration,
which is aided by migration tools and templates for different data objects. Deep
technical skills aren’t needed. For the on-premise implementation—both for the
migration scenario and the new implementation scenario—technical knowledge
and skills are mandatory for the team, because there will be customer-specific sce-
narios and considerable customization. The timelines for the SAP <strong>S/4HANA</strong> adop-
tion are also longer. SaaS is not a new concept: It has been proven, adopted, and successful over the past
decade. SAP <strong>S/4HANA</strong> Cloud offers all the benefits of an SaaS offering, like low TCO, no
hassle keeping up with upgrades, and limited liability. The highest value SAP <strong>S/4HANA</strong>
brings is access to best practices and the agility that comes with its connection to the
ecosystem around the SAP <strong>S/4HANA</strong> digital core. The SAP <strong>S/4HANA</strong> system contains
core  functionality  like  record-to-report,  order-to-cash,  and  requisition-to-pay,  but  it
also  incorporates  the  latest  innovations,  like  machine  learning.  The  SAP  <strong>Fiori</strong>  UX  is
designed  to  make  changes  easy  for  users  who’ve  been  working  with  SAP  GUI  for
decades.</div>`
        },
        {
            id: "day1-c4",
            title: "Navigation & Personalisation",
            description: `<h3>Navigation & Personalisation</h3>
<p>In  addition,  there  are  different  installation  requirements  depending  on  the  SAP</p>
<p><strong>S/4HANA</strong> version that you want to convert to.</p>
<p>On-premise  deployment  of  SAP  <strong>S/4HANA</strong>  includes  the  component  ST-A/PI.  If  this</p>
<p>component  isn’t  installed  in  your  SAP  environment,  you’ll  need  to  use  the  add-on</p>
<p>installation tool. If these add-ons are available, you need to make sure they are up-to-</p>
<p>date. Use Report RTCCTOOL, per SAP Note 69455, to ensure that the newest versions</p>
<p>of add-ons ST-PI and ST-A/PI are implemented.</p>
<p>13.3.3    SAP <strong>S/4HANA</strong> Functional Restrictions</p>
<p>Prior  to  moving  to  on-premise  SAP  <strong>S/4HANA</strong>,  it’s  important  to  understand  the</p>
<p>impact of the new SAP <strong>S/4HANA</strong> solution on your existing processes and to check if</p>
<p>it’s possible to convert based on the functionalities within your existing SAP system.</p>
<p>The list of restrictions linked to moving to SAP <strong>S/4HANA</strong> continuously changes with</p>
<p>the release of additional FPSs.</p>
<p>For SAP <strong>S/4HANA</strong> 1610, see SAP Note 2333141 (SAP <strong>S/4HANA</strong> 1610: Restriction Note).</p>
<p>In the following subsections, we’ll explore the limitations of SAP <strong>S/4HANA</strong> in indus-</p>
<p>try-specific  functionality,  finance,  and  logistics.  We’ll  close  the  section  with  a  brief</p>
<p>overview of some of the technical limitations.</p>
<div class="hero-tip"><strong>💡 Hero Tip:</strong> For a greenfield implementation, this is a good opportunity to start again by leverag-
ing SAP Best Practices and standard functionality. SAP Activate supports these activ-
ities (more information on SAP Activate is available in Chapter 14). Any custom code
that is still required can be leveraged from the legacy system and adapted on the fly
to be incorporated into the new SAP <strong>S/4HANA</strong> system. As mentioned in Section 13.4, it’s important to maintain low data volumes via data
archiving or by removing unnecessary data that may not require archiving. This is
valid prior to moving to SAP <strong>S/4HANA</strong>, but should also be considered as part of your
best practices throughout the application lifecycle management (ALM) of your SAP
and IT landscapes.</div>`
        }
    ]
};
