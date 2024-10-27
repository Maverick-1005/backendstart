require('dotenv').config()
const express = require('express')
const app = express()

// may be ye port dusre ke device mein free naa ho
const port = 60000

const myGithubData = {
  "login": "Maverick-1005",
  "id": 144513262,
  "node_id": "U_kgDOCJ0Y7g",
  "avatar_url": "https://avatars.githubusercontent.com/u/144513262?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Maverick-1005",
  "html_url": "https://github.com/Maverick-1005",
  "followers_url": "https://api.github.com/users/Maverick-1005/followers",
  "following_url": "https://api.github.com/users/Maverick-1005/following{/other_user}",
  "gists_url": "https://api.github.com/users/Maverick-1005/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Maverick-1005/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Maverick-1005/subscriptions",
  "organizations_url": "https://api.github.com/users/Maverick-1005/orgs",
  "repos_url": "https://api.github.com/users/Maverick-1005/repos",
  "events_url": "https://api.github.com/users/Maverick-1005/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Maverick-1005/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Ansh Mishra",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 6,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2023-09-09T05:32:54Z",
  "updated_at": "2024-10-27T07:28:44Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter' , (req,res) => {
     res.send("hello from twitter")
})
app.get('/login' , (req,res) => {
    res.send("<h1>please login</h1>")
})
app.get('/youtube' , (req,res) => {
    res.send("<h1> heheh </h1>")
})
app.get('/github' , (req,res) => {
    res.json(myGithubData)
})

// HOT RELOADING 
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})