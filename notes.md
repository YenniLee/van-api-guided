<<<<<<< HEAD
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
=======
MIDDLEWARE NOTES 

## Quote 
"Whenever I have to **think** to understand what the code is doing, I ask myself if I can **refactor** the code to make that understanding more immediately apparent" - Martin Fowler 

##Jargon 
_"Refactoring"_

## Middleware 

There are two types 
- normal 
- error handling 

Can come from different sources: 
- built-in: included with express
- third party: need to be installed separately 
- custom: we write it!

We can use it: 
- globally: it runs on every request to any endpoint
- locally: only applies to specified endpoints 

Middleware can: 
- inspect the `request` and `response` objects
- make changes to the  `request` and response `objects`
- move the `request` or `repsonse` object to the _next- middleware in the queue 
- stop the request and send back a response to the client

**order matters!**
>>>>>>> 38560e61beef2596b4e6325957e01435dbccb484
