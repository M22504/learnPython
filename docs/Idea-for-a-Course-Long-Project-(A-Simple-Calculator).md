This is really nice and traditional innit

### So Chapter 1: print, input and comments

Tell them you want to first build a calculator that does addition only
Very simple: All they need to do is print the title: "Addition Calculator"
```py
print("Addition Calculator")
```

Tell them they need to get the two numbers to add together from the user too. Get them thinking about using input to do this


### Chapter 2: Operations

Show them that mathematical operations are easy to do in Python. Get them thinking about using the addition operator


### Chapter 3: Variables and Assignments

Show that variables are a useful tool to store and manipulate values
Get them to code the following:

```py
print("Addition Calculator")
num_1 = input("Enter number 1: ")
num_2 = input("Enter number 2: ")
result = num_1 + num_2
print(result)
```

This does not work properly. Tell them you'll take an aside to explain why.


### Chapter 4: Types

Show that functions take in only certain types and return only certain types. Show them Python typecasting and where it goes wrong. Show them the concat operation too.

Get them to code the following (with some ✨aesthetic improvements✨):

```py
print("Addition Calculator")
num_1 = int(input("Enter number 1: "))
num_2 = int(input("Enter number 2: "))
result = num_1 + num_2
print("The answer is " + str(result))
```

### Chapter 5: Conditionals

Now, we wish to extend this to the four arithmetic operations: addition, subtraction, multiplication and division.
The user not only needs to specify the two numbers but also what type of operation they want to carry out.
But how do you do this? We will have to code four different lines for the four different operations, but we only want the relevant line to run!

```py
#Python runs all the lines in order. The final value of result will always be num_1 divided by num_2, since it replaces the previous values in the last line
result = num_1 + num_2
result = num_1 - num_2
result = num_1 * num_2
result = num_1 / num_2
```

This is where **if statements** come in.

The structure of an if statement goes:
```py
if(condition):
    #These lines will only execute if condition is True
```

So now we can write our calculator program:
```py
print("All-Purpose Calculator")
num_1 = int(input("Enter number 1: "))
num_2 = int(input("Enter number 2: "))
operation = input("Enter operation (+,-,*,/): ")
if(operation == "+"):
    result = num_1 + num_2
if(operation == "-"):
    result = num_1 - num_2
if(operation == "*"):
    result = num_1 * num_2
if(operation == "/"):
    result = num_1 / num_2
print("The answer is " + str(result))
```

This works! But we can simplify it with the **else statement** :
```py
if(condition):
    #These lines will only run if condition is True
else:
    #These lines will only run if condition is False
```

Since the only four options are +, -, * or /, we need not check in the last if statement if `operation == "/"` . We can just assume it is "/", since there are no other options.

```py
print("All-Purpose Calculator")
num_1 = int(input("Enter number 1: "))
num_2 = int(input("Enter number 2: "))
operation = input("Enter operation (+,-,*,/): ")
if(operation == "+"):
    result = num_1 + num_2
if(operation == "-"):
    result = num_1 - num_2
if(operation == "*"):
    result = num_1 * num_2
else:
    result = num_1 / num_2
print("The answer is " + str(result))
```

This works! But we can simplify it with the **else statement** :
```py
if(condition):
    #These lines will only run if condition is True
else:
    #These lines will only run if condition is False
```

At this juncture, get them to test the four different operations. There should be an error when using + or -. Ask them if they know why it is not working.

Tell them the reason. How to fix? elif!

```py
if(condition_1):
    #These lines will only run if condition is True
elif(condition_2):
    #These lines will only run if condition_1 is False and condition_2 is True
else:
    #These lines will only run if condition is False
```

With elif,
```py
print("All-Purpose Calculator")
num_1 = int(input("Enter number 1: "))
num_2 = int(input("Enter number 2: "))
operation = input("Enter operation (+,-,*,/): ")
if(operation == "+"):
    result = num_1 + num_2
elif(operation == "-"):
    result = num_1 - num_2
elif(operation == "*"):
    result = num_1 * num_2
else:
    result = num_1 / num_2
print("The answer is " + str(result))
```

### Chapter 6: Loops

Tell them the aim is to add the square root operation to the calculator. First, square root only accepts one argument. So get them to use existing knowledge to add this consideration.

```py
print("All-Purpose Calculator")
operation = input("Enter operation (+,-,*,/,sqrt): ")
if(operation == "sqrt"):
    num_1 = int(input("Enter number: "))
    #result = ...
else:
    num_1 = int(input("Enter number 1: "))
    num_2 = int(input("Enter number 2: "))
    if(operation == "+"):
        result = num_1 + num_2
    elif(operation == "-"):
        result = num_1 - num_2
    elif(operation == "*"):
        result = num_1 * num_2
    else:
        result = num_1 / num_2
print("The answer is " + str(result))
```

We will not use math.sqrt!! That function is for soulless plebs like fifth year CS students.
We will go the old fashioned way: the Babylonian method.

For the unfamiliar, to approximate the sqrt of n,
1. Pick a random positive number a from 0 to n exclusive. (I like n / 2)
2. Let b = n / a
3. If abs(b-a) > EPSILON, let a be the arithmetic mean of a and b (geometric mean also can but like... ew) and repeat steps 2-3
4. This converges surprisingly quickly

This is also a good time to introduce them to the concept of EPSILONs.

Using for loops, they should be able to code a rudimentary version which uses a fixed number of iterations.

```py
print("All-Purpose Calculator")
operation = input("Enter operation (+,-,*,/,sqrt): ")
if(operation == "sqrt"):
    num_1 = int(input("Enter number: "))
    a = num_1 / 2
    b = num_1 / a
    for i in range(10):
        a = (a + b) / 2
        b = num_1 / a
    print("The answer is " + str(a))
else:
    num_1 = int(input("Enter number 1: "))
    num_2 = int(input("Enter number 2: "))
    if(operation == "+"):
        result = num_1 + num_2
    elif(operation == "-"):
        result = num_1 - num_2
    elif(operation == "*"):
        result = num_1 * num_2
    else:
        result = num_1 / num_2
print("The answer is " + str(result))
```

For the sake of ✨knowledge✨, we wanna show the process as it is happening. Show them that i is a variable in and of itself and get them to print the result at each iteration.

```py
print("All-Purpose Calculator")
operation = input("Enter operation (+,-,*,/,sqrt): ")
if(operation == "sqrt"):
    num_1 = int(input("Enter number: "))
    a = num_1 / 2
    b = num_1 / a
    for i in range(10):
        print("Iteration " + str(i) + ": a = " + str(a) + ", b = " + str(b))
        a = (a + b) / 2
        b = num_1 / a
    print("The answer is " + str(a))
else:
    num_1 = int(input("Enter number 1: "))
    num_2 = int(input("Enter number 2: "))
    if(operation == "+"):
        result = num_1 + num_2
    elif(operation == "-"):
        result = num_1 - num_2
    elif(operation == "*"):
        result = num_1 * num_2
    else:
        result = num_1 / num_2
print("The answer is " + str(result))
```

Gasp! Why does it start from 0?? Teach them zero-index.

```py
print("All-Purpose Calculator")
operation = input("Enter operation (+,-,*,/,sqrt): ")
if(operation == "sqrt"):
    num_1 = int(input("Enter number: "))
    a = num_1 / 2
    b = num_1 / a
    for i in range(10):
        print("Iteration " + str(i + 1) + ": a = " + str(a) + ", b = " + str(b))
        a = (a + b) / 2
        b = num_1 / a
    print("The answer is " + str(a))
else:
    num_1 = int(input("Enter number 1: "))
    num_2 = int(input("Enter number 2: "))
    if(operation == "+"):
        result = num_1 + num_2
    elif(operation == "-"):
        result = num_1 - num_2
    elif(operation == "*"):
        result = num_1 * num_2
    else:
        result = num_1 / num_2
print("The answer is " + str(result))
```

We have no guarantee that the 10 iterations will be enough. Now teach them while loops and EPSILONs.
Point out that a seems to always be larger than b. So a - b > EPSILON is enough.

```py
EPSILON = 0.05

print("All-Purpose Calculator")
operation = input("Enter operation (+,-,*,/,sqrt): ")
if(operation == "sqrt"):
    num_1 = int(input("Enter number: "))
    a = num_1 / 2
    b = num_1 / a
    while(a-b > EPSILON):
        print("Iteration " + str(i + 1) + ": a = " + str(a) + ", b = " + str(b))
        a = (a + b) / 2
        b = num_1 / a
    print("The answer is " + str(a))
else:
    num_1 = int(input("Enter number 1: "))
    num_2 = int(input("Enter number 2: "))
    if(operation == "+"):
        result = num_1 + num_2
    elif(operation == "-"):
        result = num_1 - num_2
    elif(operation == "*"):
        result = num_1 * num_2
    else:
        result = num_1 / num_2
print("The answer is " + str(result))
```

### Chapter 7: Functions
Let's add some more operations! What about absolute?
Teach them how to build functions

```py
EPSILON = 0.05

def custom_abs(n):
    if(n >= 0):
        return n
    else:
        return -n

print("All-Purpose Calculator")
operation = input("Enter operation (+,-,*,/,sqrt,abs): ")
if(operation == "sqrt"):
    num_1 = int(input("Enter number: "))
    a = num_1 / 2
    b = num_1 / a
    while(a-b > EPSILON):
        print("Iteration " + str(i + 1) + ": a = " + str(a) + ", b = " + str(b))
        a = (a + b) / 2
        b = num_1 / a
    print("The answer is " + str(a))
elif(operation == "abs"):
    num_1 = int(input("Enter number: "))
    result = custom_abs(num_1)
    print("The answer is " + str(result))
else:
    num_1 = int(input("Enter number 1: "))
    num_2 = int(input("Enter number 2: "))
    if(operation == "+"):
        result = num_1 + num_2
    elif(operation == "-"):
        result = num_1 - num_2
    elif(operation == "*"):
        result = num_1 * num_2
    else:
        result = num_1 / num_2
print("The answer is " + str(result))
```

### Chapter 8: Arrays

Show them the multiple uses of arrays!
1. Simplifying the switch cases
2. Calculator memory
3. Average function

1. 
```py
EPSILON = 0.05
single_ops = ["sqrt","abs"]

def custom_abs(n):
    if(n >= 0):
        return n
    else:
        return -n

print("All-Purpose Calculator")
operation = input("Enter operation (+,-,*,/,sqrt,abs): ")
if(operation in single_ops):
    if(operation == "sqrt"):
        num_1 = int(input("Enter number: "))
        a = num_1 / 2
        b = num_1 / a
        while(a-b > EPSILON):
            print("Iteration " + str(i + 1) + ": a = " + str(a) + ", b = " + str(b))
            a = (a + b) / 2
            b = num_1 / a
        print("The answer is " + str(a))
    else:
        num_1 = int(input("Enter number: "))
        result = custom_abs(num_1)
        print("The answer is " + str(result))
else:
    num_1 = int(input("Enter number 1: "))
    num_2 = int(input("Enter number 2: "))
    if(operation == "+"):
        result = num_1 + num_2
    elif(operation == "-"):
        result = num_1 - num_2
    elif(operation == "*"):
        result = num_1 * num_2
    else:
        result = num_1 / num_2
print("The answer is " + str(result))
```

1+2.
```py
EPSILON = 0.05
single_ops = ["sqrt","abs"]
history = []

def custom_abs(n):
    if(n >= 0):
        return n
    else:
        return -n

print("All-Purpose Calculator")
operation = input("Enter operation (+,-,*,/,sqrt,abs): ")
if(operation in single_ops):
    num_1 = int(input("Enter number: "))
    if(operation == "sqrt"):
        a = num_1 / 2
        b = num_1 / a
        while(a-b > EPSILON):
            print("Iteration " + str(i + 1) + ": a = " + str(a) + ", b = " + str(b))
            a = (a + b) / 2
            b = num_1 / a
        print("The answer is " + str(a))
    else:
        result = custom_abs(num_1)
        print("The answer is " + str(result))
elif('h' in operation):
    if(len(operation) > 1):
        index = int(operation[1:])
        if(index <= len(history):
            print("The answer is " + str(history[index-1]))
    else:
        print(history)
else:
    num_1 = int(input("Enter number 1: "))
    num_2 = int(input("Enter number 2: "))
    if(operation == "+"):
        result = num_1 + num_2
    elif(operation == "-"):
        result = num_1 - num_2
    elif(operation == "*"):
        result = num_1 * num_2
    else:
        result = num_1 / num_2
history.append(result)
print("The answer is " + str(result))
```

1+2+3.
```py
EPSILON = 0.05
single_ops = ["sqrt","abs"]
history = []

def custom_abs(n):
    if(n >= 0):
        return n
    else:
        return -n

print("All-Purpose Calculator")
operation = input("Enter operation (+,-,*,/,sqrt,abs): ")
result = ''
if(operation in single_ops):
    num_1 = int(input("Enter number: "))
    if(operation == "sqrt"):
        a = num_1 / 2
        b = num_1 / a
        while(a-b > EPSILON):
            print("Iteration " + str(i + 1) + ": a = " + str(a) + ", b = " + str(b))
            a = (a + b) / 2
            b = num_1 / a
        print("The answer is " + str(a))
    else:
        result = custom_abs(num_1)
        print("The answer is " + str(result))
elif(operation == 'average'):
    numbers = []
    key = ''
    while (key != 'q'):
        key = input("Type number (q to finish): ")
        if(key != 'q'):
            numbers.append(int(key))
    result = sum(numbers) / len(numbers)
    print("The answer is " + str(result))
elif('h' in operation):
    if(len(operation) > 1):
        index = int(operation[1:])
        if(index <= len(history):
            print("The answer is " + str(history[index-1]))
    else:
        print(history)
else:
    num_1 = int(input("Enter number 1: "))
    num_2 = int(input("Enter number 2: "))
    if(operation == "+"):
        result = num_1 + num_2
    elif(operation == "-"):
        result = num_1 - num_2
    elif(operation == "*"):
        result = num_1 * num_2
    else:
        result = num_1 / num_2

history.append(result)
print("The answer is " + str(result))
```

Error handling:

Get them to see all the places where errors can occur.

<ol><li>Operation may not be correct</li><li>Entered value may not be number</li><li>sqrt may not converge (eg negative numbers)</li></ol>