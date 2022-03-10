Builder is a creational design pattern that lets you construct complex objects step by step.
It allows you to produce diffrenet types and representations of an object using the same construction code.

**Identification:** 
A class which has a single creation method and several methods to configure the resulting object.

#### Problem
Imagine a complex object that requires laborious, step-by-step initialization of many fields and nested objects.

#### Solution

Extract the object construction code out of its own class and move it to separate objects called builders.