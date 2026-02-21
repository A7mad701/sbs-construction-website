from pathlib import Path

PROJECT_ROOT = Path(__file__).resolve().parent.parent
PRODUCTS_IMG = PROJECT_ROOT / "public" / "img" / "products"
PLACEHOLDER = "/img/placeholder.jpg"

def get_product_images(slug: str) -> list[str]:
    slug_dir = PRODUCTS_IMG / slug
    if not slug_dir.exists():
        return [PLACEHOLDER]
    images = sorted(slug_dir.glob("image-*.*"))
    if not images:
        return [PLACEHOLDER]
    return [f"/img/products/{slug}/{img.name}" for img in images]
