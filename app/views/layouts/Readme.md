Layouts Structure
=================

By default application.html.erb is used unless another layout is specified in the controller.

In application.html.erb is the helper ``yield_hierarchically(controller.class.name)``. It takes in the name of the controller class.

It returns hierarchically the valid sub layout if there is one under the layouts folder.

A sub layout should contain the  ``yield`` because it would be ignored in the parent layout.

In this case, application.html.erb is the parent layout and anything returned by yield_hierarchically is the sub layout.

#### ``yield_hierarchically``
Returns a string which is the name of the sub layout. If the sub layout is available it renders the sub layout otherwise it just does the same old ``yield``.

### e.i
1)  ``Moderate::ModerationsController``<br/>
Possible Sub layout:
  + ``_moderate.html.erb``
  + ``_moderate_moderations.html.erb``

2) ``LesonsController`` <br/>
Possible Sub layout:
  + ``_lessons.html.erb``

It's only one because there is no namespace.

All the layouts should be kept in the app/views/layouts folder.
