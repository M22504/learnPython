## What are modules
Modules are .py files containing useful snippets of code that are put inside functions. We are allowed to call those functions to perform complicated tasks that we do not have to program out ourselves. Other people have already done the legwork in making the functions, simplified their use, and shared it with us using modules.

## What are packages
Packages are a collection of modules, often grouping together modules under a common purpose, for example one package might be created for images, and one module inside could group together displaying an image, while another module could handle making alterations to the image.

![](https://python-course.eu/images/python-tutorial/packages_300w.webp)

You are also able to create your own packages, although that is not covered in these notes, there will be links to supplementary materials at the end if you are interested.

## The Math Module
The Math module is part of the python standard library, and contains many commonly used mathematical functions. These are some of the categories of functions that the Math module provides us access to.
> math — Mathematical functions
> > Number-theoretic and representation functions \
> > Power and logarithmic functions \
> > Trigonometric functions \
> > Angular conversion \
> > Hyperbolic functions \
> > Special functions \
> > Constants

## Importing the Math module
Importing is how we gain access to all the functions defined inside a module. \
We can import the Math module with the following simple line of code. By convention, import statements are placed at the top of your program.\
`import math`

What are some useful functions of the math library?
```py
>>> import math
>>> math.pi
3.141592653589793
>>> math.ceil(1.5)
2
>>> math.floor(1.5)
1
>>> math.sqrt(64)
8.0
```

Lets break down the above lines of code.
```py
>>> import math
```
We imported the math module for our use.

```py
>>> math.pi
3.141592653589793
```
This returns the float value of the first few digits of the mathematical value of π (`pi`), to which is of course `3.141592653589793`.

```py
>>> math.ceil(1.5)
2
```
The `math.ceil` function will take in a float as input, and rounds a number UP to the nearest integer, in this case rounding up `1.5` would return `2`.

```py
>>> math.floor(1.5)
1
```
The math.floor function will take in a float as input, and rounds a number DOWN to the nearest integer, in this case rounding down `1.5` would return `1`.

```py
>>> math.sqrt(64)
8
```
The `math.sqrt` function will take in a number as input, and returns the square root, in this case the square root of `64` is `8`.

## Importing the Random module
Now we will import the random module, allowing us to obtain random numbers without having to write our own random functions.
```py
>>> import random
>>> random.seed(1337)
>>> random.random()
0.6177528569514706
>>> random.randrange(10, 20)
18
>>> random.choice([1,2,3,4,5])
3
>>> random.seed(1337)
>>> random.random()
0.6177528569514706
>>> random.randrange(10, 20)
18
>>> random.choice([1,2,3,4,5])
3
```
What's happening here?
```py
>>> random.random
0.6177528569514706
```
This generates a float value between 0 and 1.
```py
>>> random.randrange(10, 20)
18
```
The `randrange` function will generate a randomly selected integer between any two numbers, but excluding the last number. In this case, it will generate a number between 10 and 20, but not including 20.
```py
>>> random.choice([1,2,3,4,5])
3
```
The `choice` function will choose a random element from a non empty sequence, in this case, it chose the number 3 from the sequence. \
But, those numbers are repeating and random numbers should not repeat right? Actually, using the `random.seed()` function, we have *seeded* the random number generator. The act of seeding, initializes the program with that specific number, generating random numbers based on the seed. Passing in the same seed, going through the same steps, will result in the same random numbers being generated.

## Importing the Antigravity Module
Now try importing the "antigravity" module like we did for the above modules. Did anything interesting happen? 
<details> 
<summary>Click to expand for the answer</summary>

If it opened up to this XKCD comic, it worked! \
![](https://imgs.xkcd.com/comics/python.png) \
It's actually a fun easter egg, explained [here](http://python-history.blogspot.com/2010/06/import-antigravity.html).

</details>


## Conclusion and Extra Readings
There are many packages available for our use, and you have learnt how to import them. Here is a list of the [python standard libraries](https://docs.python.org/3/library/) we can import.

Additionally, if you are interested, you can read up on how to [create your own package](https://packaging.python.org/en/latest/tutorials/packaging-projects/).
