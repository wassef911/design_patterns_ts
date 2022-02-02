Factory Method is a creational design pattern that provides an interface for creating objects in a superclass, but allows subclasses to alter the type of objects that will be created.

**Identification:** Factory methods can be recognized by creation methods, which create objects from concrete classes

#### Problem

You don’t know beforehand the exact types and dependencies of the objects your code should work with.

#### Solution

The Factory Method pattern suggests that you replace direct object construction calls (using the new operator) with calls to a special factory method.

![factory](factory.png)
