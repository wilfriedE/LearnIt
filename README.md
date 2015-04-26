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
    $ ./run.py -s

To test it visit `http://localhost:8080/` in your browser.

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

To watch for changes of your `*.less` & `*.coffee` files and compile them
automatically to `*.css` & `*.js` execute in another bash:

    $ ./run.py -w

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

For a complete list of commands:

    $ ./run.py -h

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

Gulp is used only for watching for changes and live reloading the page.
Install [Gulp][] as a global package:

    $ npm install -g gulp

and then from the root execute with no arguments:

    $ gulp

Deploying on Google App Engine
------------------------------

Before deploying make sure that the `app.yaml` and `config.py` are up to date
and you ran the `run.py` script to minify all the static files:

    $ ./run.py -m
    $ appcfg.py update main

GOALS and Objectives :
---------------------
- Build the best learning learning platform for the FIRST community.
- Make the platform as collaborative a community central as possible.
- Make the project modular and understanstable so anyone can contribute.
- *become a contributor and introduce your goals...

All Contributions are welcome. 