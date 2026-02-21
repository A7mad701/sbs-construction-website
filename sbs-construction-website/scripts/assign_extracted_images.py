from pathlib import Path

BASE = Path(__file__).resolve().parent.parent / "public" / "img" / "products"
EXTRACTED = BASE / "_extracted"

PRODUCTS_NEEDING_IMAGES = [
    "pc-rbc-90-d", "pc-rbc-120-d", "pc-rbc-60-g", "pc-rbc-90-g", "pc-rbc-120-g",
    "cm-200", "cc-rbct-2", "vr-600", "lt-6m", "ct-rb60", "sl-mrt-ss20",
    "sl-mrt-ss8", "sl-mrt-ss10", "bl-mrt-qb20", "va-mrt-va16-320", "sc-mrt-sc8",
]

def main():
    extracted_files = sorted(EXTRACTED.glob("image-*"))
    for i, slug in enumerate(PRODUCTS_NEEDING_IMAGES):
        if i >= len(extracted_files):
            break
        src = extracted_files[i]
        dest_dir = BASE / slug
        dest_dir.mkdir(parents=True, exist_ok=True)
        ext = src.suffix
        dest = dest_dir / f"image-1{ext}"
        dest.write_bytes(src.read_bytes())
        print(f"Assigned {src.name} -> {slug}/image-1{ext}")

if __name__ == "__main__":
    main()
