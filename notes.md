# Development Notes

>Developers get paid to deliver value, not lines of code
&mdash; A pragmatic developer 

## Jargon 

_"Single Responsibility Principle"_

Do one thing really well. Only one reason to change.

## Deployment

- extract configuration into environment variables.
- setup Continuous Deployment tfrom GitHub to Heroku.
    - connect heroku to GitHub
        - create application
        - on `Deploy Tab` select GitHub, answer yes to security prompt
    - commit and push to GitHub and the api gets updated on Heroku.
    - add a "start" script to `package.json` > `"start" : "node index.js"`
    -make the Port dynamic

## Switching Remotes 

-`git remote -set-url origin url to new empty repository on GitHub`
-`git remote -v` to see where your remotes point