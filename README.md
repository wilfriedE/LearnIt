LearnIt
=======

LearnIt helps you organize your learning resources tutorials/lessons/talks in one place.

### Why?

* If you are a teacher with a bunch of online resources to provide to your students. You can setup your own LearnIt instance with resources  for them to go over.

* Do you need to create a website to teach a specific topic? You can use LearnIt as your own online course system.

* Do you just want to gather a bunch of tutorials for your group? You can use LearnIt to help you organize them.

### Goals
* LearnIt aims to provide a multitude of ways to enhance how to learn. We will be adding new ways to view learning materials in the future. Right now we have support for Markdown Text, Youtube Videos and Vimeo videos but in future version more mediums would be provided. Feel free to let us know if you have any cool ways you think we can make the learning experience better.
* We hope to make it easy to setup your own online course.
* We want to make it easy for your community to a provide materials and updates.
* Let us know if you have anything in mind you'd like LearnIt to do.

## Example Projects:
* Demo: (https://learnit-demo.herokuapp.com/)
* Coming soon...

Contributing
-----------------------------------
#### Requirements
* Ruby
* Node.js
* Postgresql

#### Local setup
* Copy .env.example to .env and fill env variables
* Run ```rake db:setup```
* Run ```rake db:migrate```
* Run ```rake db:seed``` to create admin user and default pages.
* Start server
```bash
$ rails s
```

Then visit `http://localhost:3000/` in your browser.

* Admin credentials
```bash
email: admin@example.com
password: admin1234
```


---
[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/wilfriedE/LearnIt/tree/heroku)

Have questions? Submit an [issue](https://github.com/wilfriedE/LearnIt/issues/new).

All Contributions are welcome.
