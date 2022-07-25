Proxy is a sctructural design pattern that lets you provide a placeholder for another object, it controls access to the original object allowing
to perform intructions before or after the request gets to the original object.

**Identification:** Proxies can be recognized by an object that delegates all of the real work to some other object. Each proxy method should, in the end, refer to a service object.

#### Problem

- A massive object that consumes a vast amount of system resources.

#### Solution

- Create a new proxy class with the same interface as an original service object.

- After receiving a request from a client, the proxy creates a real service object and delegates all the work to it.
