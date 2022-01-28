## Agenda
1) What is a function?  
	1.1) Concept of Functions  
	1.2) Defining a Function  
	1.3) Calling a Function  
2) Functions as Objects


## What is a Function?

### Concept of Functions
A function a block of code that can be "Called", or run, by other pieces of code. While this may not at first seem very useful, it enables Code Reuse, which is the practice of writing as little unnecessary code as possible to achieve a given outcome.

For example, instead of writing out code to say "Hello World!", we can instead define a function named say_hello_world, and call it every time we want to say "Hello World!".

### Defining a Function
Functions are defined by the keyword def, as below:

`def say_hello_world():`

Note the round brackets (parentheses). These will be important later. Now, for the rest of the code.

```
def say_hello_world():
	print("Hello World!")
```

Now, let's use a more serious example.

Say that you want to write a piece of code to do some math, and have to work with geometry. As you may have learned in Primary School, the Pythagorean Theorem is very useful when trying solve mathematics concerning triangles. Problem is, it's a bit of a hassle to type out. Let's fix that, shall we?

`def pythagoras(x, y):`

Notice the (x, y) above. Here, x and y are what are known as parameters, or arguments, which can be thought of as the inputs to the function. In Python, functions can accept almost anything as parameters, though most functions only work for parameters of specific types. In our case, our function will only work if x and y are both some kind of number. Now, for the code.

```
def pythagoras(x, y):
	h = (x*x + y*y) ** 0.5
	return h
```

The "return" keyword specifies what the function chooses to output. However, the "return" keyworld also works as a sort of stop sign, in that it runs after everything in the same line, and stops any lines after it from running. Let's use that information to streamline things.

(Note that raising something to the power of one half is mathematically equiviant to taking its square root instead.)

```
def pythagoras(x, y):
	return (x*x + y*y) ** 0.5
```

### Calling a Function
Once a function has been defined, it must naturally be called where needed. This is generally done by typing in the function's name, along with any parameters in parentheses. For example:

```
print(pythagoras(3, 4))
#this prints "5"
```

Function calls can also be used to assign values to variables.

```
hypotenuse = pythagoras(3, 4)
print(hypotenuse)
#this prints "5"
```

A function that returns multiple variables at once returns them in the form of a list, which is frequently "unpacked", or turned into individual variables, immediately. When calling a function, make sure to include the parentheses, or you'll get a strange output that we'll discuss later.

```
def return_two_values(x, y):
	return x + 1, y - 1

print(return_two_variables(2, 5))
#this prints "(2, 5)"

x1, y1 = return_two_values(2, 5)
print(x1)
#this prints 3
print(y1)
#this prints 4
```

## Functions as Objects
This following section is somewhat advanced reading, and will be skimmed over in class.

Previously, it was mentioned that functions can take just about anything as parameters. This includes other functions. To pass a function as a parameter, simply do something along the lines of the following. The exact functions don't matter that much, this is just an example.

```
def polynomial(x):
	return (x+1)*(x-1)*x

def explore_polynomial(poly_func):
	epsilon = 0.0001
	x = 5 #arbitrary values for demonstration
	y = 5 
	while abs(y) > epsilon:
		y = poly_func(x)
		grad = (poly_func(x + epsilon)-poly_func(x - epsilon))/(2*epsilon)
		offset = -y/grad
		x = x + offset
		print(y)
	print("\n") #actually prints 2 new lines
	return x
	
print(explore_polynomial(polynomial))
#returns the following

120
35.180542127086106
10.167302591532751
2.8333968080604004
0.7134911212948255
0.13199367113508667
0.009667028706160917
6.832732941427076e-05


1.000000001750586
```

As you can see here, what's happening is that we're passing the function name "polynomial" as a parameter, and in the function we are calling that same function name. Note that when passing the polynomial function into explore_polynomial, we do not include any parentheses or parameters for the polynomial function itself. That is because the inclusion of parentheses would result in a call to the function itself, and the result of that call would then be passed into explore_polynomial, rather than the polynomial function.

This leads to a bigger topic, which may explain why you might have come across some strange behaviour when calling functions. For example, neclecting to include the parentheses when printing the explore_polynomial nets you the following:

```
print(explore_polynomial)
<function explore_polynomial at 0x7fe4866d1e50>
```

Notice the strange series of numbers and characters in the message?
Those characters and numbers refer to something called the "Memory Address" of the function explore_polynomial. The Memory Address refers to where in your computer's physical RAM stick the object in question, the function in this case, is loaded. If your numbers and characters are different, that's normal. At our current "level" of programming, we have no control over what objects go to what memory addresses, so you don't have to worry about the specifics of them.

Why does this matter to you then? Because this explains a lot of strange behaviour. It explains why the following code works the way it does, for example.

```
list1 = [1,2,3,4]
list2 = list1

print(list1)
#prints "[1, 2, 3, 4]"
print(list2)
#also prints "[1, 2, 3, 4]"

print(list1[1])
#prints "2"

list1[1] = 3
list1[3] = 7

print(list1)
#prints "[1, 3, 3, 7]"
print(list2)
#...also prints "[1, 3, 3, 7]"?

```

Now that we know about memory addresses, the problem here makes sense. When we tell the computer that list2 = list1, it's not actually duplicating \[1, 2, 3, 4\]. Instead, it's assigning the Memory Address of that particular list, \[1, 2, 3, 4\], that is already assigned to list1, to list 2. And when we tell the computer to change the value of some elements of that particular list \[1, 2, 3, 4\], both list1 and list2 reflect the change, because they're two different variable names that both refer to the same memory address.