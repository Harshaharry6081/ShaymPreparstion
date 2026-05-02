# -*- coding: utf-8 -*-
"""
generate_content_from_pdfs.py
─────────────────────────────────────────────────────────────────────────────
Reads the two SAP PDF textbooks in the project root, extracts text per topic,
and writes rich HTML-styled JS content modules for every day (1-30).

Usage (from project root):
    pip install pdfminer.six
    python scripts/generate_content_from_pdfs.py
─────────────────────────────────────────────────────────────────────────────
"""

import os
import re
import json
import textwrap

try:
    from pdfminer.high_level import extract_text
    PDF_AVAILABLE = True
except ImportError:
    PDF_AVAILABLE = False
    print("⚠  pdfminer.six not installed — run:  pip install pdfminer.six")
    print("   Generating enhanced skeleton content instead.\n")

# ─── File paths ───────────────────────────────────────────────────────────────
SCRIPT_DIR   = os.path.dirname(os.path.abspath(__file__))
PROJECT_ROOT = os.path.dirname(SCRIPT_DIR)

MM_PDF   = os.path.join(PROJECT_ROOT,
    "materials-management-with-sap-erp-functionality-and-technical-"
    "configuration-3nbsped-1592293581-9781592293582_compress.pdf")
S4_PDF   = os.path.join(PROJECT_ROOT,
    "sap-s-4hana-an-introduction-2nd-edition-9781493215980-1493215981"
    "-9781493215997-149321599x_compress.pdf")

CONTENT_ROOT = os.path.join(PROJECT_ROOT, "data", "content")
MAP_FILE     = os.path.join(PROJECT_ROOT, "data", "topic-day-map.json")

# ─── Curriculum map ──────────────────────────────────────────────────────────
CURRICULUM = [
    # (day, phase, title,  [keywords for extraction], [concept titles])
    (1,  1, "Introduction to SAP S/4HANA & Fiori",
     ["S/4HANA", "HANA", "Fiori", "in-memory", "R/3"],
     ["Evolution from R/3 to S/4HANA",
      "HANA In-Memory Computing",
      "Fiori Launchpad & App Types",
      "Navigation & Personalisation"]),

    (2,  1, "Enterprise Structure in MM",
     ["Company Code", "Plant", "Storage Location", "Purchasing Organization", "Purchasing Group"],
     ["Company Code, Plant & Storage Location",
      "Purchasing Organisation (Centralised vs Decentralised)",
      "Purchasing Groups",
      "Assigning Organisational Units"]),

    (3,  1, "Material Master Data",
     ["Material Type", "Industry Sector", "Material Master", "number range", "extend"],
     ["Material Types & Industry Sectors",
      "Number Ranges",
      "Key Views (Basic Data, Purchasing, MRP, Accounting)",
      "Extending Material Master"]),

    (4,  1, "Business Partner (Vendor Master)",
     ["Business Partner", "BP", "Vendor Master", "CVI", "Account Group", "FLVN"],
     ["S/4HANA Shift: Vendor to Business Partner",
      "BP Roles (General, FI Vendor, Supplier)",
      "Account Groups & Number Ranges",
      "Creating a Vendor via T-Code BP"]),

    (5,  1, "Purchasing Info Record & Source List",
     ["Info Record", "Source List", "Quota Arrangement", "ME11", "ME01", "MEQ1"],
     ["Purpose of the Purchasing Info Record",
      "Info Record Categories (Standard, Subcontracting, Consignment)",
      "Source List & ME01",
      "Quota Arrangements"]),

    (6,  2, "Purchase Requisition (PR)",
     ["Purchase Requisition", "PR", "ME51N", "Account Assignment", "Item Category"],
     ["Direct vs Indirect Procurement",
      "Creating PR (ME51N) & Document Types",
      "Account Assignment Category",
      "Item Categories"]),

    (7,  2, "Request for Quotation (RFQ)",
     ["RFQ", "Quotation", "ME41", "ME47", "ME49", "Price Comparison"],
     ["The Bidding Process",
      "Creating RFQ from PR (ME41)",
      "Maintaining Quotations (ME47)",
      "Price Comparison & Rejection (ME49)"]),

    (8,  2, "Purchase Order (PO) – Basics",
     ["Purchase Order", "PO", "ME21N", "Document Type", "Pricing Condition", "condition technique"],
     ["Structure of a Purchase Order",
      "Creating PO with Reference",
      "PO Document Types (NB, UB, FO)",
      "Conditions & Pricing"]),

    (9,  2, "Outline Agreements: Contracts",
     ["Contract", "ME31K", "Release Order", "Value Contract", "Quantity Contract"],
     ["Value Contracts vs Quantity Contracts",
      "Creating a Contract (ME31K)",
      "Release Orders (Call-offs)",
      "Monitoring Contracts"]),

    (10, 2, "Outline Agreements: Scheduling Agreements",
     ["Scheduling Agreement", "ME31L", "ME38", "Schedule Line", "JIT"],
     ["Concept of Scheduling Agreements",
      "Creating Delivery Schedules (ME38)",
      "SA vs Contract Comparison"]),

    (11, 2, "Special Procurement: Subcontracting",
     ["Subcontracting", "Bill of Materials", "BOM", "ME2O", "541", "CS01"],
     ["Subcontracting Process Flow",
      "Bill of Materials (BOM) Basics",
      "Subcontracting PO & Item Category L",
      "Providing Components (ME2O, Mvt 541)"]),

    (12, 2, "Special Procurement: Consignment",
     ["Consignment", "MRKO", "101 K", "Info Record", "settlement"],
     ["The Consignment Concept",
      "Consignment Info Record & PO (Item Cat K)",
      "Goods Receipt for Consignment",
      "Consignment Settlement (MRKO)"]),

    (13, 2, "Release Strategy in Purchasing",
     ["Release Strategy", "Release Code", "Flexible Workflow", "Characteristic", "Class", "CL02", "CT04"],
     ["Why Approvals Matter",
      "Characteristics & Classes",
      "Release Groups, Codes & Indicators",
      "Flexible Workflow (S/4HANA)"]),

    (14, 3, "Goods Receipt (GR)",
     ["Goods Receipt", "MIGO", "Movement Type 101", "Stock Type", "GR/IR", "accounting"],
     ["MIGO Transaction Overview",
      "GR against PO (Movement Type 101)",
      "Stock Types (Unrestricted, QI, Blocked)",
      "Accounting Entries During GR"]),

    (15, 3, "Goods Issue (GI)",
     ["Goods Issue", "201", "261", "scrapping", "reversal", "cancellation"],
     ["GI to Cost Center (Mvt 201)",
      "GI to Production Order (Mvt 261)",
      "Scrapping (Mvt 551)",
      "Reversal of Goods Movements"]),

    (16, 3, "Transfer Postings",
     ["Transfer Posting", "301", "303", "305", "311", "321", "309"],
     ["Plant-to-Plant Transfer (1-step vs 2-step)",
      "Storage Location Transfer",
      "Stock Type Transfer (QI → Unrestricted)",
      "Material-to-Material Transfer (Mvt 309)"]),

    (17, 3, "Physical Inventory",
     ["Physical Inventory", "MI01", "MI04", "MI07", "cycle counting", "ABC"],
     ["Physical Inventory Process Flow",
      "Creating Document (MI01) & Entering Count (MI04)",
      "Posting Differences (MI07)",
      "Cycle Counting (ABC Indicator)"]),

    (18, 3, "Material Valuation & Split Valuation",
     ["Valuation", "Standard Price", "Moving Average", "Split Valuation", "Valuation Category"],
     ["Standard Price vs Moving Average Price",
      "Valuation Areas",
      "Split Valuation Concept",
      "Configuring Split Valuation"]),

    (19, 3, "Batch Management",
     ["Batch Management", "Batch", "MSC1N", "Shelf Life", "SLED", "Batch Determination"],
     ["What is a Batch?",
      "Batch Classification (MSC1N)",
      "Batch Determination",
      "Shelf-Life Expiration Date (SLED)"]),

    (20, 3, "Reservation & Negative Stocks",
     ["Reservation", "MB21", "Negative Stock"],
     ["Creating Reservations (MB21)",
      "Issuing Against Reservations",
      "Concept of Negative Stocks"]),

    (21, 4, "Logistics Invoice Verification (LIV)",
     ["Invoice Verification", "MIRO", "Three-Way Match", "Tolerance", "Payment Block", "MRBR"],
     ["MIRO Transaction Overview",
      "Tolerances in Invoice Verification",
      "Blocking Invoices",
      "Releasing Invoices (MRBR)"]),

    (22, 4, "Credit Memos & Subsequent Debits/Credits",
     ["Credit Memo", "Subsequent Debit", "Subsequent Credit", "Return to Vendor"],
     ["Credit Memos vs Invoices",
      "Subsequent Debits",
      "Subsequent Credits"]),

    (23, 4, "Automatic Account Determination – Part 1",
     ["Account Determination", "OBYC", "Valuation Class", "Transaction Event Key", "TEK"],
     ["Goal of OBYC",
      "Valuation Class",
      "Transaction Event Keys (BSX, WRX, GBB)"]),

    (24, 4, "Automatic Account Determination – Part 2",
     ["OBYC", "Account Modifier", "GBB", "troubleshoot", "Chart of Accounts"],
     ["Configuring OBYC",
      "Account Modifiers",
      "Troubleshooting Account Determination"]),

    (25, 4, "Integration with Other Modules (SD & PP)",
     ["Third-Party", "Stock Transport Order", "STO", "MRP", "Production Order", "Outbound Delivery"],
     ["MM-SD: Third-Party Order Processing",
      "MM-SD: Stock Transport Orders (STO)",
      "MM-PP: MRP & Production Integration"]),

    (26, 5, "S/4HANA Innovations in MM",
     ["S/4HANA", "MATDOC", "Material Ledger", "CDS", "Fiori", "simplification"],
     ["CDS Views & Simplified Data Model",
      "Material Ledger is Mandatory",
      "Business Partner Mandate",
      "Fiori: The New UX"]),

    (27, 5, "MRP & MRP Live",
     ["MRP", "MRP Live", "MD01N", "MD01", "MRP Dispatcher", "Planned Order"],
     ["Classic MRP Overview",
      "MRP Live (MD01N)",
      "MRP Dispatcher"]),

    (28, 5, "Reporting & Analytics in S/4HANA",
     ["Embedded Analytics", "Fiori Overview Page", "ALV", "CDS", "Analytical App"],
     ["Classic ALV vs Fiori Overview Pages",
      "Embedded Analytics",
      "Key Fiori Analytical Apps for MM"]),

    (29, 5, "Mock Interview – Scenario Based",
     ["emergency purchase", "overcharge", "subcontracting", "scenario"],
     ["Scenario: Emergency Purchase without Material Master",
      "Scenario: Vendor Overcharges",
      "Scenario: Subcontracting Stock Discrepancy"]),

    (30, 5, "Final Review & Resume Polish",
     ["resume", "keywords", "interview"],
     ["Structuring Your SAP Resume",
      "ATS Keywords to Include",
      "The 'Tell Me About Yourself' Pitch",
      "Final Encouragement"]),
]

# ─── Helpers ─────────────────────────────────────────────────────────────────

def clean_text(text: str) -> str:
    """Remove page headers / footers and normalise whitespace."""
    # Remove lines that are purely numeric (page numbers)
    lines = [l for l in text.split('\n') if not re.match(r'^\s*\d+\s*$', l)]
    text  = '\n'.join(lines)
    # Collapse excessive blank lines
    text  = re.sub(r'\n{3,}', '\n\n', text)
    return text.strip()


def extract_paragraphs_for_keywords(full_text: str, keywords: list) -> list:
    """Return paragraphs (≥ 40 chars) that contain any of the keywords."""
    paragraphs = full_text.split('\n\n')
    found = []
    for para in paragraphs:
        para = para.strip()
        if len(para) < 40:
            continue
        for kw in keywords:
            if kw.lower() in para.lower():
                found.append(para)
                break
    return found


def wrap_html(paragraphs: list, concept_title: str, keywords: list) -> str:
    """Convert plain-text paragraphs to rich HTML."""
    if not paragraphs:
        return f"<p>Study material for <strong>{concept_title}</strong> is drawn from the SAP textbooks. Review the relevant chapters and note key definitions, configuration steps, and transaction codes.</p>"

    html_parts = []
    for para in paragraphs[:6]:          # cap at 6 paragraphs per concept
        para = para.strip()

        # Bold keywords in the paragraph
        for kw in keywords:
            para = re.sub(rf'\b({re.escape(kw)})\b', r'<strong>\1</strong>', para, flags=re.IGNORECASE)

        # Detect bullet-like lines (starting with -, *, •)
        bullet_lines = [l.strip() for l in para.split('\n') if re.match(r'^[-*•]', l.strip())]
        regular_lines = [l.strip() for l in para.split('\n') if not re.match(r'^[-*•]', l.strip()) and l.strip()]

        if bullet_lines:
            body = '<p>' + ' '.join(regular_lines) + '</p>' if regular_lines else ''
            items = ''.join(f'<li>{re.sub(r"^[-*•]\\s*", "", l)}</li>' for l in bullet_lines)
            html_parts.append(body + f'<ul>{items}</ul>')
        else:
            # Detect header lines (all-caps or ends with ':')
            lines = para.split('\n')
            result = []
            for line in lines:
                line = line.strip()
                if not line:
                    continue
                if line.endswith(':') and len(line) < 80:
                    result.append(f'<h3>{line.rstrip(":")}</h3>')
                else:
                    result.append(f'<p>{line}</p>')
            html_parts.append('\n'.join(result))

    return '\n'.join(html_parts)


def is_tip(text: str) -> bool:
    triggers = ['tip:', 'note:', 'best practice', 'hero tip', 'important:', 'key point']
    return any(t in text.lower() for t in triggers)


def build_concept_description(raw_paragraphs: list, concept_title: str, keywords: list) -> str:
    """Build the full description HTML for one concept."""
    tip_paras = [p for p in raw_paragraphs if is_tip(p)]
    body_paras = [p for p in raw_paragraphs if not is_tip(p)]

    html = f'<h3>{concept_title}</h3>\n'
    html += wrap_html(body_paras, concept_title, keywords)

    if tip_paras:
        tip_html = ' '.join(tip_paras[:2])
        for kw in keywords:
            tip_html = re.sub(rf'\b({re.escape(kw)})\b', r'<strong>\1</strong>', tip_html, flags=re.IGNORECASE)
        html += f'\n<div class="hero-tip"><strong>💡 Hero Tip:</strong> {tip_html}</div>'

    return html


def concept_id(day: int, idx: int) -> str:
    return f"day{day}-c{idx + 1}"


def build_js_module(day: int, phase: int, title: str,
                    concept_titles: list, descriptions: list) -> str:
    concepts_js = []
    for i, (ct, desc) in enumerate(zip(concept_titles, descriptions)):
        desc_escaped = desc.replace('`', '\\`').replace('${', '\\${')
        concepts_js.append(
            f'        {{\n'
            f'            id: "{concept_id(day, i)}",\n'
            f'            title: {json.dumps(ct)},\n'
            f'            description: `{desc_escaped}`\n'
            f'        }}'
        )

    concepts_block = ',\n'.join(concepts_js)
    return (
        f'export const day{day}Content = {{\n'
        f'    day: {day},\n'
        f'    phase: {phase},\n'
        f'    title: {json.dumps(title)},\n'
        f'    concepts: [\n{concepts_block}\n    ]\n'
        f'}};\n'
    )


# ─── Main ─────────────────────────────────────────────────────────────────────

def main():
    # Extract PDF text (or use empty string if pdfminer not available)
    mm_text = s4_text = ""

    if PDF_AVAILABLE:
        print("[PDF] Extracting text from MM PDF...")
        try:
            mm_text = clean_text(extract_text(MM_PDF))
            print(f"    OK  {len(mm_text):,} characters extracted.")
        except Exception as e:
            print(f"    FAIL  {e}")

        print("[PDF] Extracting text from S/4HANA PDF...")
        try:
            s4_text = clean_text(extract_text(S4_PDF))
            print(f"    OK  {len(s4_text):,} characters extracted.")
        except Exception as e:
            print(f"    FAIL  {e}")

    combined = mm_text + "\n\n" + s4_text

    topic_day_map = {}
    generated_files = []

    for (day, phase, title, keywords, concept_titles) in CURRICULUM:
        print(f"\n[Day {day:02d}] {title}")

        all_paras = extract_paragraphs_for_keywords(combined, keywords) if combined.strip() else []
        print(f"    Found {len(all_paras)} matching paragraphs.")


        # Distribute paragraphs across concepts
        n = len(concept_titles)
        chunk_size = max(1, len(all_paras) // n) if all_paras else 0
        descriptions = []

        for i, ct in enumerate(concept_titles):
            chunk = all_paras[i * chunk_size: (i + 1) * chunk_size] if all_paras else []
            desc  = build_concept_description(chunk, ct, keywords)
            descriptions.append(desc)

        # Write JS module
        phase_dir = os.path.join(CONTENT_ROOT, f"phase{phase}")
        os.makedirs(phase_dir, exist_ok=True)
        out_path = os.path.join(phase_dir, f"day{day}.js")

        js_content = build_js_module(day, phase, title, concept_titles, descriptions)

        with open(out_path, 'w', encoding='utf-8') as f:
            f.write(js_content)

        print(f"    Written -> {out_path}")
        generated_files.append(out_path)

        topic_day_map[f"day{day}"] = {
            "title": title, "keywords": keywords, "phase": phase
        }

    # Save topic-day map
    with open(MAP_FILE, 'w', encoding='utf-8') as f:
        json.dump(topic_day_map, f, indent=2)
    print(f"\nTopic-day map saved -> {MAP_FILE}")
    print(f"\nDone! {len(generated_files)} files generated.\n")


if __name__ == "__main__":
    main()
