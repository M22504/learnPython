# What are Exceptions?

Through the past nine chapters, you likely have encountered cases where you code abruptly terminates because something went wrong. A logical error that causes this is termed as an exception, and generally there are a few types that are common. When an exception occurs, we call it _throwing_ an exception. Generally, exceptions have the following format when they are thrown:

```py
Traceback (most recent call last):
  File "(filename)", line X, in <module>
    (the line that caused the exception)
(exception name): (exception description)
```

If you attempt to reproduce the example exceptions in the shell to get an understanding of how they work, do not worry if the first three lines do not match: The last line of the exception is the most important for understanding what exactly went wrong.

## SyntaxErrors
You may have encountered SyntaxErrors as you went through the previous chapters. If you did encounter one, you would notice that it doesn't match the format of a thrown exception described above: that would be because SyntaxErrors are not exceptions at all. Unlike exceptions, which are thrown when logic in the program does not add up, SyntaxErrors are thrown because the code itself does not make sense -- it is incomprehensible to the computer. This usually occurs due to typos, and these must be fixed before the program runs at all. Some examples of SyntaxErrors are shown below:

```py
>>> def a()
SyntaxError: expected ':'
>>> print("Hello World"]
SyntaxError: closing parenthesis ']' does not match opening parenthesis '('
>>> def a():
    print("a")
     print("b")
SyntaxError: unexpected indent
```

## Types of Exceptions
There are many kinds of exceptions in Python. Here, we will be going through the types that are more commonly run into.

### NameError

NameErrors occur when a term that is used, whether a variable or function, is not defined when it is trying to be used. This can arise from a few reasons. The easiest to resolve is simply that you misspelled the name of the variable, as in the example below:
```py
>>> var1 = 5
>>> vat1
Traceback (most recent call last):
  File "<pyshell#27>", line 1, in <module>
    vat1
NameError: name 'vat1' is not defined. Did you mean: 'var1'?
```
Python is generally kind enough to try and catch typos for you, as shown above. If this is not the case, then you should check your variable scope -- perhaps you are trying to reference a local variable from a global context, such as in the following case. If you encounter such an issue, consider returning the value that you have defined within the function scope to access it in the global scope, if it is required. 
```
>>> def a():
    b = 5
    return b
>>> b
Traceback (most recent call last):
  File "<pyshell#25>", line 1, in <module>
    b
NameError: name 'b' is not defined
```

### TypeError

TypeErrors result when something is attempted but the input is of the wrong type, for example as shown below:
```py
>>> "1" + 1
Traceback (most recent call last):
  File "<pyshell#2>", line 1, in <module>
    "1" + 1
TypeError: can only concatenate str (not "int") to str
```
The solution to TypeErrors is generally to use typecasting, if the operation is intentional. 
```py
>>> int("1") + 1
2
```

### ValueError

ValueErrors, meanwhile, occur if the input is of the correct type, but uses an unsupported value for the operation. For example, typecasting a string that does not contain an integer to int:
```py
>>> int("a")
Traceback (most recent call last):
  File "<pyshell#0>", line 1, in <module>
    int("a")
ValueError: invalid literal for int() with base 10: 'a'
>>> int("2.0")
Traceback (most recent call last):
  File "<pyshell#5>", line 1, in <module>
    int("2.0")
ValueError: invalid literal for int() with base 10: '2.0'
```

Another example would be trying to take the square root of a negative number.
```py
>>> import math
>>> math.sqrt(-1)
Traceback (most recent call last):
  File "<pyshell#7>", line 1, in <module>
    math.sqrt(-1)
ValueError: math domain error
```

### IndexError

IndexErrors occur when an invalid index is used. This occurs when dealing with strings or lists, such as below:
```py
>>> str1 = "abc"
>>> str1[3]
Traceback (most recent call last):
  File "<pyshell#14>", line 1, in <module>
    str1[3]
IndexError: string index out of range
>>> list1 = [1, 2, 3]
>>> list1[3]
Traceback (most recent call last):
  File "<pyshell#14>", line 1, in <module>
    list1[3]
IndexError: list index out of range
```

This commonly occurs in an "off-by-one error", where loops iterate one more time than they should, causing the attempted access of an entry one past the last location. It can also be a result of one-indexing the positions instead of zero-indexing as the language does. An example of an off-by-one error is in the following snippet:
```py
>>> list2 = [1, 2, 3, 4, 5, 6]
>>> list3 = [1, 2, 3, 4, 5, 6]
>>> for i in range(7):
    print (list2[i] + list3[i])
    
2
4
6
8
10
12
Traceback (most recent call last):
  File "<pyshell#19>", line 2, in <module>
    print (list2[i] + list3[i])
IndexError: list index out of range
```
Remember that the range() function is inclusive of the lower bound and exclusive of the upper bound! For safety, if you want to iterate as many times as the list has entries, the usage of `range(len(list))` is recommended.

### RuntimeError

RuntimeErrors are generic errors -- they are caused when the exception does not fall into any of the defined categories. A string will be displayed that describes the error.

### ZeroDivisionError

ZeroDivisionErrors, as the name suggests, occur when there is an attempted division by zero.
```py
>>> 1 / 0
Traceback (most recent call last):
  File "<pyshell#20>", line 1, in <module>
    1 / 0
ZeroDivisionError: division by zero
```

## Exception Handling with try-except-else-finally

Python, like most programming languages, has an in-built way of catching thrown exceptions and handling them within the code. This allows for the program to gracefully handle the error, instead of unceremoniously terminating. 

**DISCLAIMER:** Do NOT use this as a way to bypass exceptions! Most exceptions that are thrown can be avoided simply by modifying the code to not throw them. Using try-except to bypass such exceptions is bad style that will slow down execution. Instead, try-except should only be used to catch errors that cannot be predicted, such as errors from user input.

### The syntax and program flow of try-except-else-finally

The syntax of exception handling contains up to four blocks. In the following section, we will slowly add the blocks, starting from the most fundamental components and slowly adding the remaining two.

### try-except 

The most basic form of exception handling uses try-except. 