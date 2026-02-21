import urllib.request
from pathlib import Path

IMAGES = [
    ("excavator-1.jpg", "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=85"),
    ("crane-lifting.jpg", "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1920&q=85"),
    ("construction-workers.jpg", "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920&q=85"),
    ("industrial-machinery.jpg", "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1920&q=85"),
    ("sustainable-building.jpg", "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&q=85"),
    ("heavy-equipment.jpg", "https://images.unsplash.com/photo-1592595896551-12b371d546d5?w=1920&q=85"),
    ("excavator-2.jpg", "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=1920&q=85"),
    ("building-site.jpg", "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1920&q=85"),
    ("construction-crane.jpg", "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920&q=85"),
    ("modern-construction.jpg", "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920&q=85"),
]

HERO_DIR = Path(__file__).resolve().parent.parent / "public" / "img" / "hero"

def main():
    HERO_DIR.mkdir(parents=True, exist_ok=True)
    for filename, url in IMAGES:
        path = HERO_DIR / filename
        if path.exists():
            print(f"Skip (exists): {filename}")
            continue
        try:
            with urllib.request.urlopen(urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})) as r:
                path.write_bytes(r.read())
            print(f"Downloaded: {filename}")
        except Exception as e:
            print(f"Error {filename}: {e}")

if __name__ == "__main__":
    main()
