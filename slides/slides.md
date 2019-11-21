# HTML Newsletter and MJML

---

## Milestones

  * Outlook 2007 switches to Word Rendering engine
  * GMail allows embedded CSS in late 2016

---

## Classic layout techniques

  * Use deeply nested tables for all layouting
  * Avoid using CSS (especially margin and padding)
  * Avoid empty table cells by adding &nbsp;
  * Use font tags for font styling
  * Use html attributes like width, align and valign et.c for positioning
  * Don't use body tag for styling e.g. background color
  * Use br or or spacer.gifs with width and height values for fine tuning layouts

---

## Modern layout techniques
  * Still use layout tables
  * Use inline CSS for general styling and embedded styles for responsive stuff
  * Avoid html-attributes like cellpadding or cellspacing
  * Avoid horizontal padding and width on the same element
  * Use conditional commands like `<!--[if mso]>` to target Outlook

---

## Responsiveness
  * Making layout tables responsive

---

## Common Email clients

---

### Outlook (Standalone)
  * Since Outlook 2007 Word is used as render engine
  * Engine hasn't been updated since then
  * No support for background images
  * Support for margin, padding, width and height spotty (due to broken box model implementation)
  * No media queries or other modern CSS-features
  * Outlook for Mac uses Webkit

---

### Outlook.com
  * Didn't support CSS margins for a while
  * Background images don't repeat
  * Links need to be prefixed with protocol (HTTP/HTTPS)
  * Media queries support was supposed to be introduced in 2019
  * Can be targeted in CSS via `[owa] .test {}`

---

### Gmail
  * Major differences between browser-based Gmail, Android app and Gmail app for non-Google accounts
  * Messages larger than 1024kb are clipped
  * Support of embedded styles in the head since late 2016
  * No support for style-element in the body
  * Gmail ignores style-elements larger than 8192 characters
  * Gmail removes style-elements that contain any error
  * Numbers and URLS are automatically converted to links

---

### Mail (Apple)
  * Very good support due to Webkit rendering engine
  * Dark mode is not applied to HTML emails automatically
  * Media queries can be used to add support for dark mode `@media (prefers-color-scheme: dark)`
  * Numbers and URLS are automatically converted to links (can be suppressed)

---

### Statistics

  * 4 of 5 used email clients are either from Apple or Google (Apple Mail and Gmail)
  * Standalone Outlook much more popular than Outlook.com
  * https://www.kevinmandeville.com/blog/email-client-market-share-trends-2018

---

## Tools

---

### CSS-Inliner
  * Convert embedded styles into inline styles
  * Usually applied before deployment
  * Circumvent issues with lack of support of embedded and external styles
  * Popular tools: Premailer, PutsMail, MailChimp Inliner

---

### Sending tools
  * Can be used to send the unmodified html source code to email addresses
  * Usually require email verification to avoid abuse
  * Some services provide APIs for automated testing
  * Popular tools: MailGun, SendGrid

---

### Testing
  * Litmus Email
  * Email on Acid

---

### AMP for Email
