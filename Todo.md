* Add docstrings to classes and functions
  *Backend Branch (Models and Controllers)
  *APIs Branch 
* APIs Branch
  * Move some of the logics from the controllers to apis
* Backend Branch
  * Establish better relationship amongst Models
  * Make sure deleted entities are handled properly
  * Make routes for frontend consistent
  * Controllers should focus primarily on handling rendering and api should handle data post, delete, get and put requests.
* Frontend Branch
  * Better address the message on the welcome page
  * Make the Hamburger menu a little more discoverable
  * Content creation should have have multiple steps
  	1. Content Information
  	2. Allow selection of content type, which only includes a list of supported types e.i youtube, vimeo, embedable etc...
  	3. After creation do an ajax check for succesful submission and redirect the user to the new material they have contributed.
  	4. Topics for lessons would be searchable (ajax call to api)
  	5. Lessons for Tracks would be searchable (ajax call to api)
  	6. The lesson page should be simple and straigt forward. (T.B.D)
* Proper authorization and permissions
  *Make sure users are where they are suppose to be
  *Only mods and creators of contents can modify content
*Other goals
  * Get more people to understand the project
  * Get others onboard