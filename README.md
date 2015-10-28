neurodata.io
======

Public-facing website for neurodata.

Written in meteor. To install,

```
curl https://install.meteor.com | sh
git clone git@github.com:openconnectome/ocp.me ocp.me
cd ocp.me
meteor --port 3000
```

# To Update the Site:

- Build a new distribution (a packaged version of the app). From the project directory:
  
  ```
  meteor build dist
  ```
  
- Commit the distribution to the repo and push:

  ```
  git add dist
  git commit -am "dist"
  git push origin master
  ```
  
- ssh into brainapps and run:
 
  ```
  /home/jordan/roll_site.sh
  ```

- Rejoice
