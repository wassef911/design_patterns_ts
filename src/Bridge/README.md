Bridge is a structural design pattern that divides business logic or huge class into separate class hierarchies that can be developed independently.

**Identification:** Bridge can be recognized by a clear distinction between some controlling entity and several different platforms that it relies on.

#### Problem

Trying to extend the shape classes in two independent dimensions: by form and by color. That’s a very common issue with class inheritance.

#### Solution

The Bridge pattern attempts to solve this problem by switching from inheritance to the object composition.
