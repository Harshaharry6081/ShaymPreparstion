export const day1Content = {
    day: 1,
    phase: 1,
    title: "Introduction to SAP S/4HANA & Fiori",
    concepts: [
        {
            id: "day1-concept1",
            title: "Evolution of SAP (R/3 to S/4HANA)",
            description: `
                <h3>The Journey from R/3 to S/4HANA</h3>
                <p>SAP has evolved significantly over the decades. Understanding this evolution is crucial for grasping why S/4HANA operates the way it does.</p>
                <ul>
                    <li><strong>SAP R/2 (1979):</strong> Mainframe-based architecture.</li>
                    <li><strong>SAP R/3 (1992):</strong> Introduced the three-tier client-server architecture (Database, Application, Presentation). This was a massive leap forward.</li>
                    <li><strong>SAP ERP / ECC (2004):</strong> Built on NetWeaver, enabling web integration. Used traditional relational databases (Oracle, SQL Server).</li>
                    <li><strong>SAP S/4HANA (2015):</strong> The latest generation. "S" stands for Simple, "4" for 4th generation, and "HANA" for High-Performance Analytic Appliance. It is built <em>exclusively</em> on the SAP HANA database.</li>
                </ul>
                <p><strong>Key Takeaway:</strong> S/4HANA is not just an upgrade; it's a completely rewritten suite designed to take advantage of in-memory computing, drastically reducing data footprint and processing times.</p>
            `
        },
        {
            id: "day1-concept2",
            title: "What is HANA database (In-memory computing)",
            description: `
                <h3>The Power of SAP HANA</h3>
                <p>Traditional databases store data on slow hard drives. When an application needs data, it fetches it from the disk into RAM, processes it, and writes it back.</p>
                <p><strong>SAP HANA changes this paradigm:</strong></p>
                <ul>
                    <li><strong>In-Memory Database:</strong> Data is stored entirely in RAM. This makes reading and writing exponentially faster.</li>
                    <li><strong>Columnar Storage:</strong> Traditional DBs use row-based storage. HANA uses column-based storage. This is highly optimized for read-heavy operations and analytics because you only load the columns you need.</li>
                    <li><strong>Data Compression:</strong> Columnar storage allows for massive data compression.</li>
                    <li><strong>OLTP and OLAP together:</strong> Historically, companies had separate systems for transactional processing (OLTP - like ECC) and analytical processing (OLAP - like BW). HANA handles both in a single system in real-time.</li>
                </ul>
            `
        },
        {
            id: "day1-concept3",
            title: "Introduction to Fiori Launchpad & Apps",
            description: `
                <h3>Fiori: The Modern SAP User Experience</h3>
                <p>S/4HANA replaces the clunky SAP GUI with SAP Fiori, a role-based, responsive, and intuitive web interface.</p>
                <p>There are three main types of Fiori Apps:</p>
                <ol>
                    <li><strong>Transactional Apps:</strong> Used for task-based operations like creating a Purchase Order (PO) or approving a Requisition. (Runs on any DB, but optimized for HANA).</li>
                    <li><strong>Analytical Apps:</strong> Provide role-based, real-time insights and dashboards into business operations. (Requires HANA DB).</li>
                    <li><strong>Factsheet Apps:</strong> Used to search and explore business objects and their contextual navigation (e.g., searching for a specific Vendor and seeing all related POs and invoices). (Requires HANA DB).</li>
                </ol>
            `
        },
        {
            id: "day1-concept4",
            title: "Navigation and Basic Settings",
            description: `
                <h3>Mastering the Fiori Launchpad</h3>
                <p>The Launchpad is the entry point for all apps.</p>
                <ul>
                    <li><strong>Tiles:</strong> Each app is represented by a tile on the home screen.</li>
                    <li><strong>Groups and Catalogs:</strong> Tiles are organized into Groups on your home page. Catalogs contain all the apps assigned to your role.</li>
                    <li><strong>Personalization:</strong> Users can edit their home page, add/remove tiles from their catalog, and group them as they see fit.</li>
                    <li><strong>Search:</strong> The Enterprise Search bar at the top allows you to search across all business objects (Materials, Vendors, Documents) instantly.</li>
                </ul>
                <p><strong>Action Item:</strong> Spend 15 minutes navigating a demo Fiori Launchpad. Try to personalize your home page and use the Enterprise Search.</p>
            `
        }
    ]
};
