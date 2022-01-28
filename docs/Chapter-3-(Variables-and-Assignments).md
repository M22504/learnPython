Let's go back to maths. In algebra, _x_ is used as a representation of a number. If I let x = 33241, it follows that 3 _x_ = 99723, _x_ + 1 = 33242, without me needing to write the original number again. Since the value of _x_ can vary, we call it a **variable**.

Most languages (including Python) have variables at their core. In Python, you can imagine the variable as a labelled box storing a value. You can replace the value in the box at any time. For the example of x = 3, you can visualize it like so:

![](https://github.com/M22504/coding-workshop/blob/master/wiki/WhatsApp%20Image%202022-01-10%20at%208.03.06%20PM.jpeg)

Variables consist of two important parts: the name and the value.

## Variable Name

Unlike in maths:
* Variable names must be unique (there are minor exceptions)
* Variable names can be more than a letter. "score", "camel_1" and "x" are all valid variable names
* Variable names CANNOT start with a number or symbol. "123_o" and "$" are not allowed
* Variable names CANNOT be special names used in Python. For example, since `print()` is a Python function, "print" is not a valid name. However, "print_1" and other names that do not match exactly are allowed
* Variables are case sensitive. That is, "variable_x" is different from "Variable_x" which is in turn also different from "variable_X".

Conventionally,
* Variables are written with short, meaningful names
* Variables are named with lowercase letters, using underscores in place of spaces 


## Variable Value

Unlike in maths:
* Variables need not represent numbers. You can store other things in variables, like letters/words (known as strings) (Chapter 4), functions (Chapter 7), or lists (Chapter 8)


To define a variable with name "var_1" and value of 2.5, <br />
```py
var_1 = 2.5
```
This is called **variable assignment**, since we are assigning a value to a variable. The equals sign is know as an **assignment operator**. It is an operator, just like the mathematical operators in Chapter 2.

Now, we can check the value of the variables var_1:<br />
```py
print(var_1)
2.5
```

We can reassign the value of var_1 to an integer: <br />
```py
var_1 = 5
print(var_1)
5
```

We can also define a variable using an existing variable:
```py
var_2 = var_1
print(var_2)
5

var_3 = var_1 * var_2 + 10
print(var_3)
35
```

We can even change a variable using itself:
```py
var_1 = 12 - var_1
print(var_1)
7
```

There are other assignment operators which act as shortcuts for these cases:
<table>
<tr>
<th>Statement</th><th>Equivalent Statement (using Assignment Operators)</th>
</tr>
<tr>
<td>var = var + 1</td><td>var += 1</td>
</tr>
<tr>
<td>var = var - 1</td><td>var -= 1</td>
</tr>
<tr>
<td>var = var * 10</td><td>var *= 10</td>
</tr>
<tr>
<td>var = var / 15</td><td>var /= 15</td>
</tr>
<tr>
<td>var = var % 2</td><td>var %= 2</td>
</tr>
</table>
