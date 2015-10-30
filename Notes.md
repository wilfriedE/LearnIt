___development notes___
Next milestones:
1)	Implement Delete for Lesson and Lesson Version
		Lesson Delete
			Admins only can delete a Lesson
				When a lesson is deleted it puts it into a deadlock state not actually deleted.
				Redirect to 404 if it's in deadlock state
		Lesson Versions Delete
			Admins, Moderators and Version Creator (contributor) can delete
				Delete actually deletes the Lesson version permenantly.
				(To be worked out further later.)
	
2)  Implement the voting feature for Lesson and Lesson Versions
		Allow voting for all users only
		Add algorithm for Lession Version votes so that when treshold reached it sets vote to zero and becomes the main lesson version for the Main Lesson

3)  Implement courses 
		Creation and Edit
		Admin interface for courses
		Add voting to courses
		Courses cards

#dataActionable
defines data attributes to easily enable dynamic actions with elements.
data fields:
	data-actionable: "This is the name of the data actionable element"
	data-action: "This is the name of the action type postable, getable, collectible etc..."
	data-postable: "This specifies the type of post to perform for the postable action."
	data-getable: "This specifies the type of get to perform for the gettable action."
	data-collectible: "This specifies the type of collectible it is."
	data-url: "This is the url to send the ajax requests to, for either get or post etc..."
	data-value: "This field represents the value of the actionable element"
	data-collectors: "This specifies the name of the parent collectors for a data collectible"
	data-collectibles: "This specifies the name of the collectibles for a parent collector"
	data-collected: "This tells wether the collectible has been collected or not"
	data-success: "This contains a message to put in notifications when actions were performed sucsesfully."
	data-error: "This contains a message to put in notifications when actions were not performed sucsesfully or failed."
	data-comfirm: "This is to specify a message to ask permission from a user before performing action."
	data-after-effect: "This is a name for a set of possible after effects."


*_old_details_*
#Some development notes.
Create a model for Course which has various lessons
	Has a name, and lessons array of course
	Has a contributors array with user keys
Create a model for Track which has various courses
	Has a name, and courses array of course ///HAHAHA PUN
	Has a contributors array with user keys
	Tracks can be created by any user but can only be approved by thos with moderator permissions. Same goes for a Course.
	For creating Courses and Tracks, have modal that displays searchable lessons or Courses that can just be added with a plus button that adds to an array of contents to be added to either a new course or a Track. Render them as cards.
Add an finishedlessons array to user's model
Add an enrolledcourses array to user's model
	For this when the user finishes all the lessons for the course which would be checked everytime he finishes a lesson; the course's key would be added to the finished courses array and removed from the enrolledcourses
Add a finishedcourses array to user's model
Create a cards for Users with something like this http://bootsnipp.com/snippets/featured/event-list
Create a cards for Courses with something like above with a button below it that has a dropdown for lessons within as well as the quizes if the lesson has a quiz.

Change from Coyright 2015 to Creative Commons talk with Remy about details and stuff.
*_old_details_END*

___development notes___END



___lesson data field format___

########## Version 0.0 #########
##Base Form:

data = {
	"version": "0.0",
	--(other structures in here)--
	"source" : "None",
	"original_string": "None",
}

data.version: data field format version. This will help in the future when the data field changes.

data.source:  data source. For example youtube, vimeo etc...

data.original_string:  data original content on creation. This is the original value entered during creation of the lesson such as the youtube link or vimeo link.

##'youtube-video' type structure
data = {
	"version": "0.0",
	"video_id": "dvShgNdY_GE",
	"source" : "youtube",
	"original_string": "https://www.youtube.com/watch?v=dvShgNdY_GE",
}

data.video_id: the youtube video id.

##'vimeo-video' type structure
data = {
	"version": "0.0",
	"video_id": "1548957",
	"source" : "vimeo",
	"original_string": "https://vimeo.com/1548957",
}

data.video_id: the vimeo video id.

##other source...

___lesson data field format___END



___apis/models/controllers structure notes___

api should return primarily json
any html data that needs to be handled by the application should be send by the controlers

___apis/models/controllers structure___END



___development ideas___

During lesson version creation process, check if it already has a lesson or vote.
If not create a vote instead of creating during form submission. This would help with preventing duplication.

Also figure out how to create indexes for the Appengine Document search api

*handling lessons (previous lessons, next lessons)  
	Courses has a lessons property that is just a one element containing a linkedlist of lessons.
*handling courses (previous courses, next courses)
	Tracks also has a linkedlist of courses
------Lesson-version, Question, etc... data object Structure-----
	This is a basic setup for the data object for a lesson

	lesson-version.data = {
	'fields':[service_type','image_url','video_url','video_id',]
	'service_type': 'youtube or vimeo',
	'image_url': 'urlhere',
	'video_url': 'urlhere',
	...
	}

	answer_choice.data = {
	'fields':['image_url','missing-words-phrase','missing-words','video_id',]
	'missing-words-phrase': 'Hello {{word1}}, this is a {{word2}} phrase',
	'missing-words': ['word1 is this', 'word2 is this'],
	'text': 'textvaluehere',
	...
	}	note that the missing words phrase could be empty with only one word missing or more.
	In this case the missing-words array has the missing word or words to verified.

	achievement.data =  {
	'fields':['image_url','name',]
	'image_url': 'link to image of badge',
	'name': 'PneuMatic Master e.i',
	...
	}

==The Quiz Engine
Calculating Quiz Achievement and points assignments for User.
Have an Javascript array that stores the keys of the questions gotten correct. If the number of questions gotten right is greater than or equal to the minimum answers of the quiz then add the quizes's points to the user's points and if it has an achievement, add it to the user's achievements. Do all of this unless this quiz is in the user's finished quizes array. 

For each question have a verify controller that checks if the user's submmitted answer is correct. It only evaluates, it doesn't store anything. This controller receives the question key, the user's selected answer key and a parameter called user_answer. Have a case statement to evaluate the answer depending on the question type. If it's a fill in the blank type question, then the answer key is used to find the missing words from the answer choice's data attribute. This is used to compare to the user's user_answer parameter which is striped and programmatically evaluated efficiently. At the end a response is javascript answer is sent back wich stores the the question's key into an array variable if it's correct. It also let's the user know wether he or she got the question right.


When a contributor deletes a lesson version, create an Suggestion for deleting lesson as well. This would be displayed to all the moderators who would then decide on deletion. During a lesson's deletion process delete everything that is related to it. And make sure to remove it from a course that has it. 

==Lesson fields
is_a field onn Lessons and Lesson Versions tells what kind of lesson it is.
Possible types:
	-Video
	-Embeddables (Slides, other video types, pdf, audio)
	-Image (data string needs number of images and an array of image links or sources)
	-Audio (datatype would allow for cover image, and link to audio source)
	-Live (These would be streams probably embeds.)
		~Because this would display on live events page it should have button to mark end. When pressed it should change it from a live to another type.
		
The json string for these fields depending on which will have details about name and such which may be required. 

.data-deletable are classes for elements that when cliked can delete stuff using ajax

___development ideas___END



___notes for contributors___
The defined ajax request methods are all Promified.

___notes for contributors___END