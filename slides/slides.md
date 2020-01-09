# HTML Newsletter and MJML

---

## Why is creating HTML newsletters so weird?

* Multitude of render engines
* Varying degree of capabilities
* Rarely updated for new requirements
* Webmailer remove a lot of styles

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

### Frameworks & Templates
  * MJML
  * Foundation for Emails 2 (formerly Zurb Ink)
  * Cerberus
  * Blueprints by Mailchimp (outdated)

---

### Testing
  * Litmus Email
  * Email on Acid

---

### Testing
  * Litmus Email
  * Email on Acid

---

## MJML

---

### Basics
  * Open source framework for HTML Emails
  * Uses `Mailjet Markup Language` DSL
  * Tries to simplify and abstract HTML Email authoring
  * Provides quality of live improvements like watch tasks and linter
  * Comes with common modules/components like columns, hero images, social-sharing etc.
  * Supports creation of custom components
  * Supports responsive email

---

### Technical stuff
  * Current version 4 is a complete rewrite in vanillaJS
  * Version 3 was based on a heavily modified version of React
  * Syntax plugins for common editors like VSCode
  * Is supported by module bundlers like Webpack and task runners like Gulp 
  * Can be integrated in a React app
  * Can be run standalone via npx
  * CLI plugin

---

### Advantages
  * Abstracts most of the cross browser issues
  * Gives errors about incorrect usage at compile time
  * Allows splitting up into partials/components
  * MJML DSL is fairly close to HTML
  * Mobile first
  * 

---

### Disadvantages
  * Parameterized generation requires additonal template language
  * Imposes certain restrictions/limitation on email design (max 4 columns etc.)
  * Outdated guides and tips that reference MJMl version 3 can be confusing
  * No way to configure browser support

---

### Hello MJML (source)
```
<mjml>
  <mj-body background-color="red">
    <mj-section>
      <mj-column>
        <mj-text>
          Hello MJML
        </mj-text>
      </mj-column>
    </mj-section>
  </mj-body>
</mjml>
```

### Hello MJML (compiled output)
  * https://mjml.io/try-it-live/ByWRcxkTB

---

### Building blocks - Body
```
<mj-body>
  ...
</mj-body>
```

* Acts similar to body-element in HTML
* Sets background color and max-width of email
* Used to be called container in MJML 3

---

### Building blocks - Section
```
<mj-section>
  ...
</mj-section>
```

* Similar to rows in grid systems like Bootstrap or Foundation
* Cannot contain sections themselves
* Multiple sibling sections are okay

---

### Building blocks - Column
```
<mj-column>
  ..
</mj-column>
```

* Similar to columns in grid systems like Bootstrap or Foundation
* Must be a direct child of a section
* Cannot contain other columns or sections
* Multiple sibling columns are okay
* Fill up row by default, e.g. 1 column 100% width, 2 columns 50% width etc.
* Columns become stacked on small viewports

---

### Creating a grid layout
```
...
  <mj-section>
    <mj-column>
      Full-width column
    </mj-column>
  </mj-section>
  <mj-section>
    <mj-column>
      Column 50%
    </mj-column>
    <mj-column>
      Column 50%
    </mj-column>
  </mj-section>
```

---

### Styling elements - Inline styles
```
<mj-text color="red" font-size="16px">
  Cat
</mj-text>
```
* Not reusable 
* Override global styles
* Make changes more difficult

---

### Styling elements - Global styles
```
<mj-attributes>
  <mj-class name="font-size-base" font-size="20px" />
  <mj-class name="color-primary" color="red" />
</mj-attributes>

<mj-text mj-class="font-size-base color-primary">
  Cat
</mj-text>
```

* Reusable 
* Easily changeable
* Get inlined during compilation

---

### Parameterize MJML templates

* Use template engine like handlebars, twig etc.
* Generate mjml via template engine and then compile to html
* Personalisation happens in step 1

