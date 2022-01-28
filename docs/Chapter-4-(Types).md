## The types of Types

| Type                  | Name           | Description                                                                                  | Example                                                       |
|-----------------------|----------------|----------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| <code>int</code>      | Integer        | Whole numbers                                                                                | <code>1</code>, <code>-4</code>                               |
| <code>float</code>    | Floating point | Numbers with a decimal point                                                                 | <code>0.202</code>, <code>1.0</code>                          |
| <code>bool</code>     | Boolean        | A logical value of either <code>True</code> or <code>False</code> only                       | <code>True</code>, <code>False</code>                         |
| <code>str</code>      | String         | An ordered sequence of characters                                                            | <code>"Hello!"</code>, <code>"θοθ"</code>, <code>"312"</code> |
| <code>NoneType</code> | None, or null  | A null value, which is different from <code>0</code>, <code>""</code>, or <code>False</code> | <code>None</code>                                             |

...and many more...

But these four types are the most common ones that you will meet.

> Python is a **dynamically typed** (or untyped) language (as opposed to statically typed ones), which means that variables do not have a pre-set type, and can change types throughout the code. This also means that the coder does not need to define the type upon instantiating it. In other words, something like <code>int a = 1</code> is not just unnecessary in Python; it throws an error!
> 
> ```py
> >>> a = 1
> >>> type(a)
> <class 'int'>
> >>> a = True
> >>> type(a)
> <class 'bool'>
> ```

### <code>int</code> and <code>float</code>

These types should be quite familiar as you have seen them in earlier sections.

```py
>>> a = 1
>>> type(a)
<class 'int'>
>>> a += 0.1
>>> a
1.1
>>> type(a)
<class 'float'>
```

In the above example, you can see that when variables are instantiated as whole numbers, their assigned type is <code>int</code>. However, once operations (e.g. addition, multiplication) with variables of type <code>float</code> are performed on them, the original variable becomes a <code>float</code> too.

However, do note that all divisions result in a <code>float</code> output.

```py
>>> type(4 / 2)
<class 'float'>
```

### <code>bool</code>

This section should be the most logical. The only possible <code>bool</code> values are <code>True</code> and <code>False</code>!

> Note that <code>True</code> and <code>False</code> must be capitalised!

There are still some things to introduce, though, and these are the **boolean operators** <code>and</code>, <code>or</code>, and <code>not</code>.

| <code>a</code>     | <code>b</code>     | <code>a and b</code> | <code>a or b</code> |
|--------------------|--------------------|----------------------|---------------------|
| <code>True</code>  | <code>True</code>  | <code>True</code>    | <code>True</code>   |
| <code>True</code>  | <code>False</code> | <code>False</code>   | <code>True</code>   |
| <code>False</code> | <code>True</code>  | <code>False</code>   | <code>True</code>   |
| <code>False</code> | <code>False</code> | <code>False</code>   | <code>False</code>  |

As for <code>not</code> we have:

```py
>>> not True
False
>>> not False
True
```

Boolean operators also follow similar left-to-right, parenthetical logic to arithmetic operators.

```py
>>> not True and True
False
>>> not False or (True and False)
True
```

### <code>str</code>

Strings are a sequence of characters, which can include digits and non-Latin characters. To define a string, put whatever you want to say between double (or single, just be consistent) quotes, like this: <code>"whatever you want to say"</code>.

> Types are important!
> ```py
> >>> a = "3"
> >>> b = 3
> >>> type(a)
> <class 'str'>
> >>> type(b)
> <class 'int'>
> >>> a + b
> Traceback (most recent call last):
>   File "<pyshell#8>", line 1, in <module>
>     a + b
> TypeError: can only concatenate str (not "int") to str
> ```
> See that we cannot add "3" with 3, as "3" is not of type <code>int</code>; it is a <code>str</code>.

#### String processing

##### Concatenation

Concatenation is when you take one string and smoosh it with another one, using the <code>+</code> operator. You may also use <code>print(..., ...)</code>. By separating the variables with a comma, they will be printed, separated by a space. This does not only work for strings, but variables of other types too. However, concatenation using <code>+</code> only works on strings.

```py
>>> "a" + "b"
'ab'
>>> print("a", True, "b", 1)
a True b 1
>>> print("a" + True + "b" + 1)
Traceback (most recent call last):
  File "<pyshell#9>", line 1, in <module>
    print("a" + True + "b" + 1)
TypeError: can only concatenate str (not "bool") to str
```

Other than "adding" strings, you can also "multiply" them!

```py
>>> "a" * 10
'aaaaaaaaaa'
```

##### Indexing and Slicing

Strings are essentially an ordered list of characters, and each character can be given an **index**, which helps to identify its relative position in the string.

Let's say we have the String <code>"python"</code>.

| p   | y   | t   | h   | o   | n   |
|-----|-----|-----|-----|-----|-----|
| 0   | 1   | 2   | 3   | 4   | 5   |
| -6  | -5  | -4  | -3  | -2  | -1  |

```py
>>> p = "python"
>>> len(p)
6
>>> p[0]
'p'
>>> p[4]
'o'
>>> p[-4]
't'
```

What we have just done is access the characters by their positive and negative index numbers, as shown by the table. The first character has the index 0 (this is because of zero indexing, something used extensively in coding), while the last character may be accessed with 5 or -1 (which may be more useful). To get the length of a string, use <code>len()</code>.

What if we want to access a bunch of characters, not just one?

```py
>>> p[1:3]
'yt'
>>> p[:3]
'pyt'
>>> p[:-4]
'py'
>>> p[:-1]
'pytho'
>>> p[:]
'python'
>>> p[2:]
'thon'
```

<code>[x:y]</code> denotes a slice, which returns the characters starting from x (inclusive) to the character right before y (exclusive). This may seem counterintuitive, but that's how coding is. You will see more of this inclusive lower bound and exclusive upper bound convention in loops, when you use <code>range()</code>. Also, when the lower or upper bound is not written (e.g. <code>[:-1]</code> or <code>[2:]</code>), we assume that the string starts/ends right from the start/end.

Wait! There's more...

```py
>>> p[:4:2]
'pt'
>>> p[:-1:3]
'ph'
```

There are three arguments for slicing, written like this: <code>[start:stop:step]</code>. Step tells you that the string slicing will occur every "step"-th character. For example, for <code>p[:4:2]</code>, we extract the 0th letter, skip the 1st letter, get the 2nd letter, and once again skip the 3rd letter, thus obtaining <code>"pt"</code> (<code>"p[y]t[h]"</code>). You will see these three arguments when using <code>range()</code> too. 

### <code>NoneType</code>

There is only one object that corresponds to this type: <code>None</code>! It is the value of empty variables, or the return value of [functions](https://github.com/M22504/coding-workshop/wiki/Chapter-6-(Functions)) that don't return anything. Nothing much.

### Type Casting

Type casting converts the variable data type into another data type. There are two types of type casting: implicit and explicit.

#### Implicit

Implicit type casting occurs when Python automatically converts the data type by inferring what the user wants.

```py
>>> a = 1
>>> type(a)
<class 'int'>
>>> a += 0.1
>>> a
1.1
>>> type(a)
<class 'float'>
```

This example was shown earlier. See that the <code>type(a)</code> was automatically converted to <code>float</code> after another <code>float</code> 0.1 was added to it.

#### Explicit

Explicit type casting is performed by typing out certain functions to convert the type. Common type casting functions include: <code>int()</code>, <code>float()</code>, and <code>str()</code>.

Wait... but since we already have implicit type casting, why would we ever need to explicitly convert the type?

Here's why:

```py
>>> a = "3"
>>> b = 2
>>> a + b
Traceback (most recent call last):
  File "<pyshell#3>", line 1, in <module>
    a + b
TypeError: can only concatenate str (not "int") to str
>>> a + str(b)                                                                                                                  
'32'
>>> int(a) + b
5
```

We cannot add a variable of type <code>str</code> with another of type <code>int</code>. However, by explicitly casting the type, we get either <code>"32"</code> (this is known as [string concatenation](https://www.w3schools.com/python/gloss_python_string_concatenation.asp), where additional strings are stuck onto the end of the previous one), or <code>5</code> (which is simply the addition of two variables of type <code>int</code>).

> Beware of invalid (or seemingly invalid) type casting.
> 
> For example:
> ```py
> >>> int("1.1")
> Traceback (most recent call last):
> File "<pyshell#2>", line 1, in <module>
> int("1.1")
> ValueError: invalid literal for int() with base 10: '1.1'
> >>> int(True)
> 1
> >>> int(False)
> 0
> ```
> In Python, <code>True</code> has an integer value of 1, while <code>False</code> has an integer value of 0. This may be useful when integrating booleans with arithmetic operations.

#### A bit more on <code>int()</code> and <code>float()</code>

```py
>>> float(1)
1.0
>>> int(1.1)
1
>>> int(1.999)
1
>>> int(-1.1)
-1
>>> int(-1.999)
-1
>>> int("1")
1
>>> int("1.1")
Traceback (most recent call last):
  File "<pyshell#2>", line 1, in <module>
    int("1.1")
ValueError: invalid literal for int() with base 10: '1.1'
>>> float("1.1")
1.1
```

<code>float()</code>, when performed on an integer, simply converts it to a number with a decimal point. On the other hand, though, when <code>int()</code> is done on a float, converts its type to <code>int</code>, by ignoring everything after the decimal point. It is not the same as rounding up, down, or off! Nonetheless, it can still be useful sometimes.

Also, you can convert variables of type <code>str</code> to type <code>int</code> or <code>float</code>. However <code>int("1.1")</code> throws an error, so usually when dealing with numeric strings, use <code>float()</code>.