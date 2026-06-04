source visual truth path: https://organic-volunteers-929064.framer.app/
implementation screenshot path: qa/framer-compare/
viewport: desktop 1280x900 and mobile 390x844
state: home page, first service accordion open
full-view comparison evidence: Chrome DevTools Protocol screenshots and live DOM/computed layout metrics for source and local production build
focused region comparison evidence: source assets and media copied locally; hero/header/video/project/services metrics compared numerically

Findings
- No P0/P1/P2 issues remain from the measured Framer clone pass.
- Desktop frame matches the Framer source: body background #f7f7f7, 89px header, 156x39 logo at x=30/y=25, 64px H1 at x=30/y=138 with 850x384 box, 300x180 showreel at x=935/y=573, MP4 video at y=860 with 738px height, 578x385 intro image, and 593x395 project images.
- Mobile frame matches the Framer source at 390px for the first viewport: H1 x=15/y=121/w=360/h=403, 42px/50.4px type, 360x216 showreel immediately below the H1, and no horizontal overflow.
- Subpage H1s now match the Framer source at y=190 with 64px/76.8px Inter. About first image matches x=30/y=591/h=700; Projects first image matches x=30/y=562/w=593/h=395; Services first image matches x=381/y=549/h=559.
- The previous static Pexels feature image was removed because the Framer source uses a real MP4 showreel section.

Patches made
- Re-scraped the Framer publish and copied the real logo, arrow assets, and MP4 media into the standalone app.
- Updated global tokens to Framer's background and Inter typography treatment.
- Rebuilt the home page metrics around the Framer desktop layout: 1265px frame, 30px gutters, 1205px inner content, Framer button scale, 64/76.8 hero type, 54px section headings, 16px body copy, and 400px CTA marquee imagery.
- Added Framer-like motion: showreel thumbnail fade rotation, CTA image marquee, hover scale on pills, service accordion height/opacity transition, and project image hover zoom.
- Updated shared nav/footer chrome to use the real Humaneframes logo image and Framer-sized header/buttons.
- Corrected subpage hero typography/spacing, mobile home hero order, services page image mapping, and the Brand Design service image placement against the Framer route.
- Preserved the user's request to hide the y-axis scrollbar while keeping page scroll functional.

Required fidelity surfaces
- Fonts and typography: Inter is used globally; desktop measured H1 matches the source at 600 64px / 76.8px.
- Spacing and layout rhythm: source desktop component positions are numerically matched for header, hero, video, about image, and project grid.
- Colors and visual tokens: background #f7f7f7, black foreground, muted #4f4f4f, red #fd2400/#fa2837, white cards, and black pills match the Framer tokens.
- Image/video asset fidelity: Framer logo, arrows, MP4, and current-site image assets are self-hosted locally; no iframe or hotlink dependency is used in the app.
- Copy and content: home hero, about, stats, services, project grid, CTA, and footer copy match the Framer publish content captured from the source.

Known intentional difference
- The Framer source shows a browser scrollbar at desktop; the local app hides the y-axis scrollbar per user request while keeping normal scrolling.

final result: passed
