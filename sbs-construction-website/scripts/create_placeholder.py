from pathlib import Path
from PIL import Image, ImageDraw

path = Path(__file__).resolve().parent.parent / "public" / "img" / "placeholder.jpg"
path.parent.mkdir(parents=True, exist_ok=True)

img = Image.new("RGB", (800, 600), color=(45, 45, 45))
draw = ImageDraw.Draw(img)
draw.rectangle([200, 150, 600, 450], outline=(249, 115, 22), width=4)
cx, cy = 400, 300
draw.ellipse([cx - 60, cy - 60, cx + 60, cy + 60], outline=(249, 115, 22), width=3)
draw.line([cx - 80, cy, cx + 80, cy], fill=(249, 115, 22), width=2)
draw.line([cx, cy - 80, cx, cy + 80], fill=(249, 115, 22), width=2)
img.save(path, "JPEG", quality=90)
print("Placeholder created")
