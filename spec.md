# Specification

## Summary
**Goal:** Replace the coach photo in the AboutCoach page with a new uploaded image of Coach Yash Bhardwaj.

**Planned changes:**
- Add the new coach photo as `coach-yash-bhardwaj-v2.dim_800x800.jpg` in the public assets folder
- Update `AboutCoach.tsx` to reference the new image instead of the old coach photo
- Apply explicit width, height, and `object-fit: cover` styling to the image element
- Remove all references to the old `coach-yash-bhardwaj.dim_800x800.jpg` image

**User-visible outcome:** The About Coach section displays the new photo of Coach Yash Bhardwaj (young man in a black fleece jacket holding a blue and yellow volleyball) in place of the old coach image.
