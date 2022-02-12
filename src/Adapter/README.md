Adapter is a structural design pattern that allows objects with incompatible interfaces to collaborate.

**Identification:**

Adapter is recognizable by a constructor which takes an instance of a different abstract/interface type.

#### Problem

Imagine that you’re creating a stock market monitoring app. The app downloads the stock data from multiple sources in XML format and then displays nice-looking charts and diagrams for the user.

At some point, you decide to improve the app by integrating a smart 3rd-party analytics library. But there’s a catch: the analytics library only works with data in JSON format.

#### Solution

You can create an adapter. This is a special object that converts the interface of one object so that another object can understand it.
