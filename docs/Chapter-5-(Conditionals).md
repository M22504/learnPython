## Ignore this, I will come back to this later

With the tools you have, you should be able to write programs like a simple addition calculator:

```py
print("Addition Calculator")
num_1 = int(input("Enter number 1: "))
num_2 = int(input("Enter number 2: "))
result = num_1 + num_2
print("The answer is " + str(result))
```

Notice that every line of code will run sequentially. No line will be skipped during execution.

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