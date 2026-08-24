"""Remove the black box background from the WRAPTASTIC logo via edge flood-fill."""
import numpy as np
from collections import deque
from PIL import Image

SRC = "/app/frontend/public/assets/logo.png"
OUT = "/app/frontend/public/assets/logo-transparent.png"

img = Image.open(SRC).convert("RGBA")
a = np.array(img)
h, w = a.shape[:2]
rgb = a[:, :, :3].astype(int)
lum = rgb.sum(axis=2)

# dark pixels (near-black background) - the red outline (~200,30,20 sum~250) stays
dark = lum < 90

visited = np.zeros((h, w), dtype=bool)
q = deque()
for x in range(w):
    for y in (0, h - 1):
        if dark[y, x] and not visited[y, x]:
            visited[y, x] = True
            q.append((y, x))
for y in range(h):
    for x in (0, w - 1):
        if dark[y, x] and not visited[y, x]:
            visited[y, x] = True
            q.append((y, x))

while q:
    y, x = q.popleft()
    for dy, dx in ((1, 0), (-1, 0), (0, 1), (0, -1)):
        ny, nx = y + dy, x + dx
        if 0 <= ny < h and 0 <= nx < w and dark[ny, nx] and not visited[ny, nx]:
            visited[ny, nx] = True
            q.append((ny, nx))

a[:, :, 3] = np.where(visited, 0, 255)

# soften edges: pixels adjacent to transparent get partial alpha based on luminance
alpha = a[:, :, 3].astype(float)
trans = alpha == 0
neighbor_trans = np.zeros((h, w), dtype=bool)
neighbor_trans[1:, :] |= trans[:-1, :]
neighbor_trans[:-1, :] |= trans[1:, :]
neighbor_trans[:, 1:] |= trans[:, :-1]
neighbor_trans[:, :-1] |= trans[:, 1:]
edge = neighbor_trans & ~trans & (lum < 200)
alpha[edge] = np.clip(lum[edge] / 200 * 255, 60, 255)
a[:, :, 3] = alpha.astype(np.uint8)

out = Image.fromarray(a)
bbox = out.getbbox()
out = out.crop(bbox)
out.save(OUT)
print("saved", OUT, out.size)
