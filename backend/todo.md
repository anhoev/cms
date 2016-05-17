## roadmap:
* drag drop type to change the container page (OK)
* $watch for change of containers(OK)
* cache for jade (OK)
* site structure (OK)
* make template (OK)
* create page from template (OK)
* element setting 
* content repair (processing...)
* error handle
* pageFormatter
* publish/ version
* css (border for dnd)
* relation type (select2 with search)
* type strict
* session (OK)
* category (processing...)
* controller (50%)
* jsdoc
* validate
* remove getPath
* resolvePath(path,{options:{type}})
* baseViewPath
* html template (base on angular template)
* a button to change fast a element in page
* admin ui(process... ,query group)
* array type for formly (processing...)
* direct edit relation (popover) (OK)
* relations show in admin/direct edit (OK)
* cascade delete (in container page and another Model)
* css problem when the page has a nav too
* two layer category (one in database)
* extract category in file (OK)
* refresh Form/Model...
* list of existed element (OK) 
* new concept for lazy loading
* add info:{title} to Types (OK)
* info for cms-container 
* detailPage (map id to url)
* use route for restify
* create example for button (OK)
* inline dnd
* use ng-node-compile for filter
* render production(OK)
    * injectable render
* require
    * injectable, plugin...
* collapsible panel
* up/down image
* change app -> cms
* default site
* make page from template
* transfer fn/serverFn (OK)
* a same DATA for backend and frontend
* list (OK)
* wrapper (processing...)
* create cms-editable directive for server-rendering
* create a ref edit for element (example edit dog in cat element)
* demo bootstrap
* demo webshop
* multi formatter
* use class/get/set for lazy loading
* test serverFn , fn by lazy loading
* inject directive for angular 
* move all logic to data component
* convert formatter to directive for reusing
* refresh element in control panel
* file upload / link resolve (OK)
* url type : choose , upload ,resolve (Processing...)
* auto gen container file ,default template-page
* types list : group ,filter*
* edit in list
    * context menu
    * empty list
* rewrite serverFn
* use promise in data
* communication between app
    * handler
    * case : text change when click button
    * use code mirror for fn
* use fn to auto config data (show this fns in popup-editor)
* tab change
* cms-lab:
    * create Model from webview or app
    * create template with dnd

* change bs.select to select2
* right click for editing element

* form :
    * button ADD : to add new field
    * button ADD : to add any new field
    * Choice btn
    * color picker support for changing hex -> rgba
    
* inline image/file
* static property for Model: 
    * true : use for render-component like tab, button...
    * false : use for normal database like product, customer ...

* use direct formatter
* move $find -> fn 
* use id in stack layout
* use angular 2 to rewrite the container.js
* init 
* custom template
* use webpack to compile plugin
* fix problem by create new page
* hint for shortcut (for code editor)
* show nav on form (cms-element-edit)
* create a wizard panel : inline
* parentKey
    * choose nested layout
    * add child + key
    
* use wrapper-list with angular-template
* wrapper with input

* continuously form , show children form like nested layout to parent-form

## make template: 

    {path,name}

### container page:

#### Structure:
    {path, containers: [{name,elements: [{path*,type,ref}]}], template*:{name}}
#### Empty:
    {path}

### pageFormatter:
```javascript
[{path,name}]
```
## css

### border for dnd

### plugins 

### routers :
+ restify
+ app

### wrapper :
- formatter
- fn, serverFn
- resolve template
    + prepare data
- cms-wrapper
- read only name
- make cms-wrapper directive for ng-compiler
