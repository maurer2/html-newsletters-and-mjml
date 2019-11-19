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

## Tools
  * CSS-Inliner (Premailer, PutsMail, MailChimp Inliner)
  * Sending tools (MailGun, SendGrid)

---

## Testing
  * Litmus Email
  * Email on Acid