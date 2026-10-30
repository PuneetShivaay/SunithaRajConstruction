# Images

All image URLs are managed in one place: **`content/images.ts`**.

Right now they point to **temporary Unsplash stock photos**. To use a real photo:

1. Put the file here, e.g. `public/images/projects/stp.jpg` (JPG/WebP, ~2000px wide, < 500 KB).
2. In `content/images.ts`, change that entry to the local path: `stp: "/images/projects/stp.jpg"`.

Suggested structure:

```
hero/        hero-1.jpg  hero-2.jpg  hero-3.jpg
services/    construction.jpg  interiors.jpg  electrical.jpg  waterproofing.jpg
projects/    residential-house.jpg  pmgsy-road.jpg  terrace-garden.jpg  shopping-mall.jpg
             roof.jpg  stp.jpg  bathroom.jpg  wtp.jpg
clients/     logo files (then set `logo` in content/company.ts)
```

If an image fails to load, the `Media` component shows a branded placeholder instead.
