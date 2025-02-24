todos
- change redirect to another technic to keep the domain (goyes.de)

Bugs 
- projects without name show 'null'
- fix https://goyes.de

features
- change language in a menu bar
- new component technologies

## Versions
- How to increase version? 
    Following command increase version of package.json and create a commit with a tag
    npm version patch -m "Upgrade app to %s"


## Deployment
- Build artifacts
    ng build 
- Deploy with swa CLI (prod)
    swa deploy .\dist\cv-viewer\browser\ --env production

## Localization
Ng Serve does not support multiple locale, in case of testing a german functionality, please delete the english one ( See angular.json (build-> options -> localize) )
 Ex. "localize": ["de"]

 ## Localization - New texts ? update locale files
 - Extract messages 
    ng extract-i18n --output-path src/locale
 - Duplicate file and update values, alternative pick up the relevant changes and update the locale file
