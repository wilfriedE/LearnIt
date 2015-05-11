FIRSTMastery
============

A centralized training resource for the [FIRST](http://www.usfirst.org/) Robotics community.

FIRSTMastery is built on top of gae-init.

**gae-init** is the easiest way to kick start new applications on Google
App Engine using Flask, Bootstrap and tons of other cool features.

Read more about **gae-init** here [https://github.com/gae-init/gae-init](https://github.com/gae-init/gae-init).

Running the Development Environment
-----------------------------------

    $ cd /path/to/project-name
    $ gulp

To test it visit `http://localhost:8080/` in your browser.

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

For a complete list of commands:

    $ gulp help


Initializing or Resetting the project
------------------------------------

    $ cd /path/to/project-name
    $ npm install
    $ gulp

If something goes wrong you can always do:

    $ gulp reset
    $ npm install
    $ gulp

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

To install [Gulp][] as a global package:

    $ npm install -g gulp

Deploying on Google App Engine
------------------------------

    $ gulp deploy

Before deploying make sure that the `main/app.yaml` and `gulp/config.coffee`
are up to date.

GOALS and Objectives :
---------------------
- Build the best learning platform for the FIRST community.
- Make the platform as collaborative and community central as possible.
- Make the project modular and understanstable so anyone can contribute.
- *become a contributor and introduce your goals...

All Contributions are welcome. 
