- What is typescript?
A version of javascript that is safer.
Able to know the intended output.

- How is it different than compiled languages?
It is an extension (superset) of javascript. It has additional syntax (called syntactic sugar). It does not build a machine code file (binary).

- What is type-saftey?
Is the method to declare the type of the parameter or variable and to catch it at transpile/compilation time NOT in interpretation (runtime)

- What is the difference in `tsc` and `npx ts-node`?
`tsc` transpiles a ts file to a js file and then the js file will be run separately (i.e. by node)
`npx ts-node` is a command that will transpile and run the ts file without creating a new js file. (It is a node package)