export const curriculumData = [
    // Phase 1: Foundation
    { day: 1, phase: 1, title: "Introduction to SAP S/4HANA & Fiori", conceptIds: ["day1-concept1", "day1-concept2", "day1-concept3", "day1-concept4"] },
    { day: 2, phase: 1, title: "Enterprise Structure in MM", conceptIds: ["day2-concept1", "day2-concept2", "day2-concept3", "day2-concept4"] },
    { day: 3, phase: 1, title: "Material Master Data", conceptIds: ["day3-concept1", "day3-concept2", "day3-concept3", "day3-concept4"] },
    { day: 4, phase: 1, title: "Business Partner (Vendor Master)", conceptIds: ["day4-concept1", "day4-concept2", "day4-concept3", "day4-concept4"] },
    { day: 5, phase: 1, title: "Purchasing Info Record & Source List", conceptIds: ["day5-concept1", "day5-concept2", "day5-concept3", "day5-concept4"] },

    // Phase 2: Core Purchasing (Mocked conceptIds for architecture proof)
    { day: 6, phase: 2, title: "Purchase Requisition (PR)", conceptIds: ["day6-c1", "day6-c2", "day6-c3", "day6-c4"] },
    { day: 7, phase: 2, title: "Request for Quotation (RFQ)", conceptIds: ["day7-c1", "day7-c2", "day7-c3", "day7-c4"] },
    { day: 8, phase: 2, title: "Purchase Order (PO) - Basics", conceptIds: ["day8-c1", "day8-c2", "day8-c3", "day8-c4"] },
    { day: 9, phase: 2, title: "Outline Agreements: Contracts", conceptIds: ["day9-c1", "day9-c2", "day9-c3", "day9-c4"] },
    { day: 10, phase: 2, title: "Outline Agreements: Scheduling Agreements", conceptIds: ["day10-c1", "day10-c2", "day10-c3"] },
    { day: 11, phase: 2, title: "Special Procurement: Subcontracting", conceptIds: ["day11-c1", "day11-c2", "day11-c3", "day11-c4"] },
    { day: 12, phase: 2, title: "Special Procurement: Consignment", conceptIds: ["day12-c1", "day12-c2", "day12-c3", "day12-c4"] },
    { day: 13, phase: 2, title: "Release Strategy in Purchasing", conceptIds: ["day13-c1", "day13-c2", "day13-c3", "day13-c4"] },

    // Phase 3: Inventory Management
    { day: 14, phase: 3, title: "Goods Receipt (GR)", conceptIds: ["day14-c1", "day14-c2", "day14-c3", "day14-c4"] },
    { day: 15, phase: 3, title: "Goods Issue (GI)", conceptIds: ["day15-c1", "day15-c2", "day15-c3", "day15-c4"] },
    { day: 16, phase: 3, title: "Transfer Postings", conceptIds: ["day16-c1", "day16-c2", "day16-c3", "day16-c4"] },
    { day: 17, phase: 3, title: "Physical Inventory", conceptIds: ["day17-c1", "day17-c2", "day17-c3", "day17-c4"] },
    { day: 18, phase: 3, title: "Material Valuation & Split Valuation", conceptIds: ["day18-c1", "day18-c2", "day18-c3", "day18-c4"] },
    { day: 19, phase: 3, title: "Batch Management", conceptIds: ["day19-c1", "day19-c2", "day19-c3", "day19-c4"] },
    { day: 20, phase: 3, title: "Reservation & Negative Stocks", conceptIds: ["day20-c1", "day20-c2", "day20-c3"] },

    // Phase 4: LIV & Integration
    { day: 21, phase: 4, title: "Logistics Invoice Verification (LIV)", conceptIds: ["day21-c1", "day21-c2", "day21-c3", "day21-c4"] },
    { day: 22, phase: 4, title: "Credit Memos & Subsequent Debits/Credits", conceptIds: ["day22-c1", "day22-c2", "day22-c3"] },
    { day: 23, phase: 4, title: "Automatic Account Determination - Part 1", conceptIds: ["day23-c1", "day23-c2", "day23-c3"] },
    { day: 24, phase: 4, title: "Automatic Account Determination - Part 2", conceptIds: ["day24-c1", "day24-c2", "day24-c3"] },
    { day: 25, phase: 4, title: "Integration with other modules (SD & PP)", conceptIds: ["day25-c1", "day25-c2"] },

    // Phase 5: Advanced S/4HANA Features & Interview Prep
    { day: 26, phase: 5, title: "S/4HANA Innovations in MM", conceptIds: ["day26-c1", "day26-c2", "day26-c3", "day26-c4"] },
    { day: 27, phase: 5, title: "MRP & MRP Live", conceptIds: ["day27-c1", "day27-c2", "day27-c3", "day27-c4"] },
    { day: 28, phase: 5, title: "Reporting & Analytics in S/4HANA", conceptIds: ["day28-c1", "day28-c2", "day28-c3"] },
    { day: 29, phase: 5, title: "Mock Interview - Scenario Based", conceptIds: ["day29-c1", "day29-c2", "day29-c3", "day29-c4"] },
    { day: 30, phase: 5, title: "Final Review & Resume Polish", conceptIds: ["day30-c1", "day30-c2", "day30-c3"] }
];

export const phaseNames = {
    1: "Phase 1: Foundation",
    2: "Phase 2: Core Purchasing",
    3: "Phase 3: Inventory Mgmt",
    4: "Phase 4: LIV & Integration",
    5: "Phase 5: Advanced & Prep"
};
