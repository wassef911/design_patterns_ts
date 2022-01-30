Prototype is a creational design pattern that lets you copy existing objects without making your code dependent on their classes.

#### Problem

Copying an object “from the outside” isn’t always possible.

#### Solution

cell division, the original cell acts as a prototype and takes an active role in creating the copy.

Instead of instantiating a subclass that matches some configuration, the client can simply look for an appropriate prototype and clone it.
