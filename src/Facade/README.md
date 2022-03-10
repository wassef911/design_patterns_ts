Facade is a structural design pattern that provides a simplified interface to a library, a framework, or any other complex set of classes.

**Identification:** Facade can be recognized in a class that has a simple interface, but delegates most of the work to other classes. Usually, facades manage the full life cycle of objects they use.

#### Problem

Make use if sophisticated library, you'd need to init all the objects, keep track of their deps and execute methods in the correct order, thus, having a tightly coupled implementation...

#### Solution

Having a facade to integrate your app with a sophisticated library that has dozens of features, instead of using the library directly.