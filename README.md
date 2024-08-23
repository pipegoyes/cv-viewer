todos
- use enviorement variables to handle person name
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
