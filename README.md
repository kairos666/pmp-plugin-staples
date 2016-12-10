# pmp-plugin-staples
Pimp My Page plugin - contains staple helpers (recommended for pmp-engine)

## JS Helpers

- **helpers.staple.baseInjects()** inject main CSS/JS to the page  

- **helpers.staple.htmlPartial(htmlPartialPath)** get HTML partial content (string)  
 required param *htmlPath* path to the HTML partial  

- **helpers.staple.injectStylesheet(stylesheetPath, selector)** inject CSS stylesheet to the page  
 optional param *stylesheetPath* path to the CSS file string  
 optional param *selector* jQuery like selector string  
 if no params, it will append the base stylesheet to the end of &lt;head&gt; tag

- **helpers.staple.injectScript(scriptPath, selector)** inject JS script to the page  
 optional param *scriptPath* path to the JS file string  
 optional param *selector* jQuery like selector string  
 if no params, it will append the base script to the end of &lt;body&gt; tag

## HTML Helpers

### random text tag
generate &lt;p&gt; tag(s) with lorem ipsum text as content
```html
<!-- default | paragraph varying in length-->
<lorem-text></lorem-text>
<lorem-text></lorem-text>
<lorem-text></lorem-text>
<!-- 3 paragraphs -->
<lorem-text count="3"></lorem-text>
<!-- 1 word -->
<lorem-text count="1" units="words"></lorem-text>
<!-- 2 sentences -->
<lorem-text count="2" units="sentences"></lorem-text>
```
### random image tag
generate an &lt;img&gt; tag with a random image file as source
```html
<!-- default | random image 200x200 -->
<lorem-image></lorem-image>
<lorem-image></lorem-image>
<lorem-image></lorem-image>
<!-- random image 800x200 -->
<lorem-image data-img-width="800"></lorem-image>
<!-- random image 200x600 -->
<lorem-image data-img-height="600"></lorem-image>
<!-- random image 800x600 -->
<lorem-image data-img-width="800" data-img-height="600"></lorem-image>
<!-- random image with alt description -->
<lorem-image alt="my custom alt"></lorem-image>
```
