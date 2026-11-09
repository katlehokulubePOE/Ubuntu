# Ubuntu Urban Wear

## Project overview

Ubuntu Urban Wear is a proposed South African streetwear and contemporary fashion brand. This student project demonstrates how a small retail organisation can present its brand, product concepts and contact information through a structured, responsive website.

The website is inspired by the idea of Ubuntu—community, connection and belonging. Its intended audience includes South African students, young professionals and digitally active consumers aged approximately 18–35.

> **Project status:** Educational demonstration only. Product names, prices and designs are illustrative. The site does not process orders or payments, send emails, or store form submissions.

## Part 3: Enhancing functionality and SEO

This version builds on the existing Part 1 website and applies the Part 3 focus areas from WP1:

- A shared external CSS stylesheet is linked from every HTML page.
- A consistent base style, typography hierarchy, colour palette, spacing and reset are applied throughout.
- CSS Grid and Flexbox organise page layouts and product cards.
- Responsive breakpoints adapt the layout and navigation for desktop, tablet and mobile screens.
- Relative units, `clamp()`, flexible containers and responsive product layouts help the site adapt to different viewport sizes.
- Product artwork scales within its container; the logo uses a responsive image rule.
- Keyboard focus indicators, a skip link, semantic HTML and reduced-motion support improve accessibility.
- JavaScript powers the rotating homepage banner, mobile navigation, live product search, product sorting, product image lightbox, URL-based product preselection and client-side form validation.
- The homepage embeds the supplied YouTube Shorts video using its standard privacy-enhanced embed URL.
- The Contact page includes an OpenStreetMap embed at country level; no physical store address was supplied, so the website does not claim an invented shop location.
- Product images open in an accessible lightbox with Escape/backdrop/close controls.
- Enquiry and contact forms use HTML validation constraints and JavaScript feedback. They remain demonstration forms: no backend or email recipient has been supplied, so data is not transmitted. The brief's email/AJAX submission requirement still needs a real recipient and a secure form endpoint to be configured.

### Design system

- **Primary colours:** charcoal/black, warm white and gold.
- **Typography:** Space Grotesk for display headings and DM Sans for body text, with Arial/sans-serif fallbacks.
- **Layout:** centred maximum-width container, CSS Grid for multi-column content and Flexbox for navigation and flexible groups.
- **Responsive breakpoints:** 900px (compact desktop/tablet), 700px (mobile navigation and single-column layouts), and 380px (small phones).

External Google Fonts are used when an internet connection is available. System fallbacks keep the website readable when the fonts cannot load.

## Website goals and objectives

- Establish a recognisable online identity for the proposed brand.
- Explain the organisation's story, mission, vision and target audience.
- Present sample products and illustrative prices.
- Give visitors a clear path to submit product enquiries or general messages.
- Provide a consistent experience on desktop, tablet and mobile.

## Pages and sitemap

1. `index.html` — homepage, brand introduction and featured products.
2. `about.html` — brand story, mission, vision, values and intended audience.
3. `products.html` — product concept cards, prices and client-side product search.
4. `enquiry.html` — product/service enquiry form with client-side validation.
5. `contact.html` — general contact/feedback form with client-side validation.

Navigation links are shared across all five pages.

## Key features

- Responsive sticky header and mobile navigation toggle.
- Active-page indication in the navigation.
- Black, white and gold brand styling.
- Locally stored product model photographs, clickable image lightbox and responsive image presentation.
- Product search on the Shop page.
- Product enquiry links that preselect the relevant product in the enquiry form.
- Required-field and browser-based form validation with visible status feedback.
- Accessibility features including semantic landmarks, labels, keyboard focus states, skip link and reduced-motion preference.
- Page titles and meta descriptions for basic on-page SEO.

## Technologies

- HTML5
- CSS3 (Grid, Flexbox, custom properties, media queries)
- JavaScript (DOM interaction and client-side validation)
- Git/GitHub for version control (repository URL to be added by the student)

## Project file structure

```text
ubuntu_urban_wear/
├── index.html
├── about.html
├── products.html
├── enquiry.html
├── contact.html
├── css/
│   └── style.css
├── javascript/
│   └── script.js
├── documents/
│   ├── README.md
│   ├── robots.txt
│   └── sitemap.xml
├── robots.txt          (crawler entry point)
├── sitemap.xml         (crawler entry point)
└── images/
    └── logo.png
```

## How to run

1. Extract the ZIP folder.
2. Open `index.html` in a modern browser.
3. Use the navigation to visit the five pages.
4. Test the Shop search, product enquiry links and both forms.
5. For a more realistic test, run the folder through a local development server (for example, Visual Studio Code Live Server).

No build tools or package installation are required.

## Responsive testing checklist

Use browser Developer Tools and check at least these viewport widths:

- Desktop: 1440px and 1024px
- Tablet: 768px
- Mobile: 390px and 320px

Check that:
- The navigation remains visible and usable, or changes to the mobile menu.
- Product cards and value cards reflow without horizontal overflow.
- Headings and buttons remain readable and do not overlap.
- Forms can be completed using a keyboard and display validation feedback.
- Images and the logo remain within their containers.

**Submission evidence:** Capture screenshots of the actual website at desktop, tablet and mobile sizes and add them to this README or the repository before submission. Screenshots should be captured from the browser after testing; they are not fabricated by this project.

## Current limitations

- The product list, prices and clothing visuals are illustrative.
- There is no database, inventory management, customer login, checkout or payment gateway.
- Official business contact details and social media profile URLs have not been supplied, so they are not invented.
- The sitemap and robots file are starter files; update the sitemap URLs after the website is published to its final domain.


### Part 3 — CSS styling and responsive design
- Reworked the base stylesheet with shared CSS variables, a consistent colour palette, typography, spacing and interactive states.
- Added desktop layouts using CSS Grid and Flexbox and responsive rules for tablet, mobile and narrow mobile screens.
- Improved header navigation, active-page styling, buttons, product cards, forms, footer and content hierarchy.
- Added a dedicated mobile menu state with an accessible expanded/collapsed indicator.
- Added semantic landmarks, a skip link, visible keyboard focus styles and reduced-motion support.
- Expanded the original one-page prototype into five linked HTML pages: Home, Our Story, Shop, Enquiries and Contact.
- Added a client-side product search and product-specific enquiry links.
- Added basic client-side form validation and clear demo-only status messages.
- Updated page titles, descriptions, sitemap, robots file and project documentation.


### Shared rotating banner and logo

The rotating three-slide fashion banner is displayed on all five pages. Banner photos are stored in `images/` and referenced with relative paths. The supplied `images/logo.png` is a transparent PNG; the banner logo styling keeps its background transparent.


### Banner placement update
The rotating fashion banner appears on `index.html` only. Other pages retain their normal page content and shared navigation.


## Product model photography
The Shop page now uses locally stored branded model images for the Ubuntu Graphic Tee, Urban Hoodie, and Signature Cap. These images are stored in `images/` as `ubuntu-graphic-tee.jpg`, `urban-hoodie.jpg`, and `signature-cap.jpg`. Product imagery is illustrative for this student project.


## SEO improvements

- Page-specific titles and meta descriptions have been added for all five pages.
- Open Graph and Twitter sharing metadata has been added.
- The homepage includes basic Organization structured data.
- Images have descriptive alt text and product images use lazy loading where appropriate.
- `robots.txt` allows crawling; `sitemap.xml` is a deployment template. Replace `https://YOUR-REAL-DOMAIN.example` with the actual live domain and add the matching Sitemap URL to `robots.txt` before submitting the sitemap to search engines.
- Add canonical URLs and absolute social-image URLs after the final public domain is known.
- SEO cannot guarantee rankings or indexing. Performance, accessibility, useful content, real product details, backlinks and a live domain also matter.


## Part 3 functionality and SEO checklist

- [x] Interactive JavaScript: rotating banner, mobile navigation, live product filtering, product sorting and URL-based product selection.
- [x] Dynamic image gallery/lightbox for product photos.
- [x] CSS transitions and reduced-motion handling.
- [x] External services: privacy-enhanced YouTube embed and OpenStreetMap embed.
- [x] Distinct page titles and meta descriptions; semantic heading hierarchy; descriptive image alt text; internal links; responsive/mobile-friendly layout.
- [x] `robots.txt` and `sitemap.xml` templates are present.
- [x] Forms include appropriate input types, required fields, minimum lengths, browser validation and JavaScript error/success feedback.
- [ ] Configure actual form delivery (email recipient and secure serverless/backend endpoint) before claiming submissions are sent.
- [ ] Replace placeholder sitemap domain and use absolute canonical/social URLs after publishing to the final domain.
- [ ] Deploy to a free hosting platform such as GitHub Pages or Netlify, submit the live URL and repository link.
- [ ] Test in real browsers and capture actual desktop/tablet/mobile screenshots for submission.
- [ ] Record commits and push changes to the GitHub repository. This ZIP cannot create or push to a private repository on your behalf.

### Part 3 — Enhancing functionality and SEO 
- Added an accessible image lightbox to product images on the homepage and Shop page, including keyboard Escape handling and focus return.
- Added client-side product sorting by price and name while retaining live search.
- Added a privacy-enhanced YouTube embed on the homepage and an OpenStreetMap country-level embed on the Contact page.
- Expanded JavaScript comments and updated this README with the Part 3 functionality, SEO and deployment checklist.
- Retained distinct page titles/descriptions, image alt text, internal links, `robots.txt` and sitemap template.
- Kept both forms clearly labelled as demos because no official recipient email or backend endpoint was provided.


## Social media links

The shared footer on all five pages includes accessible icons and links for Facebook, X, Instagram, TikTok and YouTube. At present, each link points to the platform's official homepage because the brand's actual profile URLs were not supplied. Before launch, replace these links in each HTML page with the official Ubuntu Urban Wear profile URLs. Do not advertise platform homepages as brand accounts.


## Part 3 compliance review (21 October 2026)

This checklist is based on the Part 3 instructions in the supplied brief.

### Functionality
- [x] JavaScript interactive homepage carousel with manual controls, timed rotation, pause on hover/focus, and reduced-motion handling.
- [x] Responsive mobile navigation with accessible state attributes.
- [x] Product search and sorting (featured order, price ascending/descending, and name A–Z).
- [x] Product image lightbox with close button, backdrop close, Escape handling through the native dialog, and focus return.
- [x] Product enquiry links preselect the matching item in the enquiry form.
- [x] Client-side form validation and visible feedback for both separate forms.
- [x] External content: privacy-enhanced YouTube embed and OpenStreetMap embed.
- [ ] **ACTION REQUIRED — real form delivery:** Part 3 specifies that the Contact form message must be compiled into an email that the visitor can send to the recipient stated in code, and that the enquiry should be processed with a relevant response. No official recipient email, form service, or backend endpoint was provided. The forms therefore remain clearly labelled demos and do not claim to send or store personal information. Before submission, configure an approved recipient and secure endpoint (or implement a mailto workflow with the real recipient), test delivery, and update the form copy and this checklist truthfully. Do not publish a placeholder email.
- [ ] **ACTION REQUIRED — AJAX:** If the lecturer expects AJAX specifically, connect the forms to a real endpoint and implement asynchronous submission/error handling. A static HTML-only deployment cannot securely process or store form submissions on its own.

### SEO and technical checks
- [x] Unique page titles and meta descriptions across all five HTML pages.
- [x] Heading hierarchy, descriptive image alt text, clean local page filenames, and internal navigation links.
- [x] `robots.txt` and `sitemap.xml` templates included.
- [x] Responsive CSS breakpoints, Grid/Flexbox layouts, reduced-motion support, and visible keyboard focus.
- [ ] **ACTION REQUIRED — deployment SEO:** Replace the placeholder domain in `sitemap.xml` and the sitemap comment in `robots.txt` with the final public URL. Add canonical URLs and absolute social image URLs once the live domain is known.
- [ ] **ACTION REQUIRED — final QA and screenshots:** Test on target browsers/devices, capture genuine desktop/tablet/mobile screenshots, and record any issues fixed. Automated browser screenshots could not be captured in this environment, so do not treat the ZIP as containing screenshot evidence.
- [ ] **ACTION REQUIRED — repository and deployment:** Create/push the private GitHub repository as instructed by the module, commit changes with descriptive messages, and deploy to Netlify, GitHub Pages, or another permitted free host. Add the real repository and deployment URLs here and submit them on the LMS.
- [ ] **ACTION REQUIRED — student submission details:** Add student name, student number, subject/module code, group (if applicable), approved proposal reference, and lecturer feedback/Part 2 corrections. These were not provided in the uploaded materials.

### Screenshot evidence
Screenshot evidence capture images are provided within the Screenshot Evidence folder within the documents folder.

###  Part 3 review
- 2026-10-21: Audited the website files against the supplied Part 3 instructions. Added the missing product sorting interaction to match the Shop page's existing sorting control.
- 2026-10-21: Added the product-image lightbox interaction and styling, including a close control, backdrop closing, native dialog keyboard behavior, and focus return.
- 2026-10-21: Added a Part 3 compliance checklist that distinguishes implemented features from submission-critical tasks requiring a real email recipient, form endpoint, final deployment domain, repository link, and student details.
- 2026-10-21: Attempted automated viewport screenshots, but the environment blocked browser navigation; screenshots remain an explicit submission task.



## Submission details to complete
- Student name: Katleho Kulube
- Student number: ST10507503
- Subject/module code: DISD1
- Group: 1
- Private GitHub repository URL: **[ADD AFTER PUSHING]**
- Live deployment URL: **[ADD AFTER DEPLOYMENT]**
- Official form recipient / configured endpoint: ST10507503@rcconnect.ac.za


## Part 3 compliance checklist

### JavaScript functionality
- [x] Interactive homepage carousel with manual controls, automatic rotation, and reduced-motion handling.
- [x] Responsive mobile navigation with accessible expanded/collapsed state.
- [x] Dynamic client-side product filtering and sorting by price or name.
- [x] Product-image lightbox with close button, backdrop click, Escape/dialog support and focus return.
- [x] Product-specific enquiry links preselect the product on the Enquiries page.
- [x] HTML constraint validation plus JavaScript validation feedback on both forms.
- [x] Forms now avoid false success messages. After a real recipient is configured, they prepare a prefilled email in the visitor's mail application; the visitor must press Send.

### SEO and performance
- [x] Unique page titles and meta descriptions are present across the five pages.
- [x] Semantic heading hierarchy, descriptive image alt text, internal links and mobile-responsive layouts.
- [x] Open Graph metadata for social sharing and a basic JSON-LD WebSite description.
- [x] `robots.txt` and a five-page `sitemap.xml` template are included.
- [x] Product images use local assets; below-the-fold product images use lazy loading.
- [ ] **Before publishing:** replace `YOUR-REAL-DOMAIN.example` in `sitemap.xml` with the actual public HTTPS domain and add the resulting absolute sitemap URL to `robots.txt`.
- [ ] **Off-page SEO:** backlinks, social promotion and local SEO require real external profiles/listings and outreach; these cannot be completed by editing a ZIP alone.
- [ ] **Security and hosting:** configure HTTPS and host-level security headers on the selected deployment platform. Static HTML cannot enforce all server security headers.
- [ ] **Page-speed verification:** run Lighthouse/PageSpeed Insights on the deployed URL and act on its measured results.


### GitHub and deployment


## Part 3 — functionality and SEO 
- Added JSON-LD WebSite metadata to each page without inventing a physical address or business contact details.
- Updated the sitemap and crawler instructions as deployment templates, clearly marking the real-domain replacement required before publishing.
- Reworked form submission feedback so the site no longer claims that data was submitted when no server exists; forms validate and prepare a prefilled email draft after a real recipient is configured.
- Documented which Part 3 requirements are implemented in the static project and which require a real email recipient, server endpoint, GitHub account, deployment, or off-page activity.


## Updated folder organisation

- `css/style.css` is the single shared stylesheet linked by all five HTML pages.
- `javascript/script.js` is the shared deferred JavaScript file linked by all five HTML pages.
- `documents/` contains the project README and reference copies of the crawler files.
- Root-level `robots.txt` and `sitemap.xml` are retained because crawlers conventionally request these files from the site root.
- `images/` contains the logo, favicons, product photographs and branded campaign/model images.

## Deployment and SEO configuration

Before publishing, replace `https://YOUR-REAL-DOMAIN.example/` in the root `sitemap.xml` with the final canonical HTTPS domain. Add the matching absolute sitemap URL to the root `robots.txt`. The files in `documents/` are reference copies; crawlers use the root-level files. Do not submit the placeholder sitemap to search engines.



## Local date and time updater

Every page displays a live date and time in the website footer. The updater is
implemented in the local `javascript/script.js` file and styled in
`css/style.css`. It uses the visitor's device clock, locale and time zone via
the browser's built-in `Date` and `Intl.DateTimeFormat` APIs. It does not load
external scripts, call an external time API, or require an internet connection.


## References

- OpenAI (2026) Ubuntu Urban Wear brand logo. AI-generated image created using ChatGPT, 21 October 2026
- Banner Model 1 -OpenAI buntu Urban Wear fashion campaign – male and female models, image 1. AI-generated image using ChatGPT, 21 October 2026.
- Banner Model 2	OpenAI (2026) Ubuntu Urban Wear fashion campaign – male and female models, image 2. AI-generated image using ChatGPT, 2 November 2026.
- Banner Model 3	OpenAI (2026) Ubuntu Urban Wear fashion campaign – male and female models, image 3. AI-generated image using ChatGPT, 2 November 2026.
- Signature Cap	OpenAI (2026) Ubuntu Urban Wear branded signature cap. AI-generated image using ChatGPT, 2 November 2026.
- Graphic T-shirt	OpenAI (2026) Ubuntu Urban Wear branded graphic T-shirt. AI-generated image using ChatGPT, 2 November 2026.
- Urban Hoodie	OpenAI (2026) Ubuntu Urban Wear branded urban hoodie. AI-generated image using ChatGPT, 2 November 2026.
- MDN Web Docs. *CSS media queries*. https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries
- MDN Web Docs. *CSS Grid Layout*. https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout
- MDN Web Docs. *Using HTML form validation*. https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation
- MDN Web Docs. *HTML forms: validation*. https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation
- MDN Web Docs. *Using the dialog role*. https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/dialog_role
- OpenStreetMap. *Copyright and license*. https://www.openstreetmap.org/copyright
- YouTube. *Embed videos and playlists*. https://support.google.com/youtube/answer/171780
- Google Search Central. *SEO Starter Guide*. https://developers.google.com/search/docs/fundamentals/seo-starter-guide
- Mozilla Developer Network (MDN) (n.d.) *HTML forms: Working with user data*. Available at: https://developer.mozilla.org/en-US/docs/Learn/Forms (Accessed: 21 October 2026).
- Mozilla Developer Network (MDN) (n.d.) *CSS media queries*. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries (Accessed: 21 October 2026).
- Mozilla Developer Network (MDN) (n.d.) *HTML dialog element*. Available at: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog (Accessed: 21 October 2026).
- OpenStreetMap contributors (n.d.) *OpenStreetMap*. Available at: https://www.openstreetmap.org/ (Accessed: 21 October 2026).
- YouTube (n.d.) *YouTube embedded players and player parameters*. Available at: https://developers.google.com/youtube/player_parameters (Accessed: 21 October 2026).


