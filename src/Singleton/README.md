Singleton is a creational design pattern that lets you ensure that a class has only one instance, while providing a global access point to this instance.

**Identification:** Singleton can be recognized by a static creation method, which returns the same cached object.

#### Problem

- Ensure that a class has just a single instance.

- Provide a global access point to that instance.

#### Solution

- Make the default constructor private, to prevent other objects from using "new" operator with the Singleton class.

- Create a static creation method that acts as a constructor. Under the hood, this method calls the private constructor to create an object and saves it in a static field. All following calls to this method return the cached object.
