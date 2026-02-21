import fitz
import os
import re
from pathlib import Path

PROJECT_ROOT = Path(__file__).resolve().parent.parent
PDF_SOURCES = [
    PROJECT_ROOT.parent / "Construction Equipment Catalogue.pdf",
    PROJECT_ROOT.parent / "Wolth Brochure 1.1.pdf",
]
OUTPUT_BASE = PROJECT_ROOT / "public" / "img" / "products"
PLACEHOLDER_PATH = PROJECT_ROOT / "public" / "img" / "placeholder.jpg"

PRODUCT_PATTERNS = [
    (r"RBC-?90[- ]?D", "pc-rbc-90-d"),
    (r"RBC-?120[- ]?D", "pc-rbc-120-d"),
    (r"RBC-?60[- ]?G", "pc-rbc-60-g"),
    (r"RBC-?90[- ]?G", "pc-rbc-90-g"),
    (r"RBC-?120[- ]?G", "pc-rbc-120-g"),
    (r"RBR-?80[- ]?2", "tr-rbr-80-2"),
    (r"RBR-?80\b", "tr-rbr-80"),
    (r"GQ-?42", "bc-gq42"),
    (r"GQ-?46", "bc-gq46"),
    (r"GQ-?50", "bc-gq50"),
    (r"GW-?46", "bb-gw46"),
    (r"GW-?50", "bb-gw50"),
    (r"CM-?200", "cm-200"),
    (r"RBCT-?3", "cc-rbct-3"),
    (r"RBCT-?2", "cc-rbct-2"),
    (r"HX-?26", "rm-hx26"),
    (r"HX-?36", "rm-hx36"),
    (r"VR-?650D", "vr-650d"),
    (r"VR-?600", "vr-600"),
    (r"6m.*[Ll]ight|[Ll]ight.*6m", "lt-6m"),
    (r"YDG-?3700", "gen-ydg3700"),
    (r"RBT-?36A", "ct-rbt36a"),
    (r"RB-?60\b", "ct-rb60"),
    (r"ZNA-?20", "cv-zna20"),
    (r"RBV", "cv-rbv"),
    (r"ZPC-?25", "vs-zpc25"),
    (r"MRT-?SS-?16|SS-?16", "sl-mrt-ss16"),
    (r"MRI-?SS-?20|SS-?20", "sl-mrt-ss20"),
    (r"MRT-?SS-?6|SS-?6", "sl-mrt-ss6"),
    (r"MRT-?SS-?8|SS-?8", "sl-mrt-ss8"),
    (r"MRT-?SS-?10|SS-?10", "sl-mrt-ss10"),
    (r"MRTZB-?28", "bl-mrtzb-28"),
    (r"MRT-?QB-?10|QB-?10", "bl-mrt-qb10"),
    (r"MRT-?QB-?20|QB-?20", "bl-mrt-qb20"),
    (r"MRT-?QBJ-?14|QBJ-?14", "bl-mrt-qbj14"),
    (r"MRT-?FB-?6|FB-?6", "fb-mrt-fb6"),
    (r"MRT-?VA-?10-?100|VA-?10-?100", "va-mrt-va10-100"),
    (r"MRT-?VA-?16-?320|VA-?16-?320", "va-mrt-va16-320"),
    (r"MRT-?SC-?4|SC-?4", "sc-mrt-sc4"),
    (r"MRT-?SC-?8|SC-?8", "sc-mrt-sc8"),
    (r"MRT-?MB-?10|MB-?10", "mb-mrt-mb10"),
    (r"MRT-?SS-?4|SS-?4", "sl-mrt-ss4"),
]


def get_page_product_slugs(page_text: str) -> list[str]:
    slugs = []
    for pattern, slug in PRODUCT_PATTERNS:
        if re.search(pattern, page_text, re.IGNORECASE):
            slugs.append(slug)
    return slugs


def main():
    OUTPUT_BASE.mkdir(parents=True, exist_ok=True)
    all_images: dict[str, list[tuple[int, bytes, str]]] = {}

    for pdf_path in PDF_SOURCES:
        if not pdf_path.exists():
            print(f"Skipping (not found): {pdf_path.name}")
            continue
        print(f"Processing: {pdf_path.name}")
        doc = fitz.open(pdf_path)
        for page_num in range(len(doc)):
            page = doc[page_num]
            text = page.get_text()
            slugs = get_page_product_slugs(text)
            slug = slugs[0] if slugs else "_unmapped"
            images = page.get_images(full=True)
            for xref in [img[0] for img in images]:
                try:
                    base_image = doc.extract_image(xref)
                    image_bytes = base_image["image"]
                    ext = base_image["ext"]
                    if ext.lower() in ("jpeg", "jpg", "png", "webp"):
                        ext = "jpg" if ext in ("jpeg", "jpg") else ext
                        if slug not in all_images:
                            all_images[slug] = []
                        all_images[slug].append((image_bytes, ext))
                except Exception:
                    pass
        doc.close()

    unmapped = all_images.pop("_unmapped", [])
    for slug, img_list in all_images.items():
        slug_dir = OUTPUT_BASE / slug
        slug_dir.mkdir(parents=True, exist_ok=True)
        for i, (data, ext) in enumerate(img_list, 1):
            out_path = slug_dir / f"image-{i}.{ext}"
            out_path.write_bytes(data)
            print(f"  Saved: {slug}/image-{i}.{ext}")

    if unmapped:
        unmapped_dir = OUTPUT_BASE / "_extracted"
        unmapped_dir.mkdir(parents=True, exist_ok=True)
        for i, (data, ext) in enumerate(unmapped[:50], 1):
            out_path = unmapped_dir / f"image-{i}.{ext}"
            out_path.write_bytes(data)
        print(f"  Saved {min(len(unmapped), 50)} unmapped images to _extracted/")

    print("Done.")


if __name__ == "__main__":
    main()
