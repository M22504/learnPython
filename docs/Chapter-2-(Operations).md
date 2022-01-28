## Some Math

Coding requires math, and that calls for some **arithmetic operators**.

| Operator         | Function       | Example                                     |
|------------------|----------------|---------------------------------------------|
| <code>+</code>   | Addition       | <code>>>> 1 + 1</code><br/><code>2</code>   |
| <code>-</code>   | Subtraction    | <code>>>> 2 - 3</code><br/><code>-1</code>  |
| <code>*</code>   | Multiplication | <code>>>> 5 * 7</code><br/><code>35</code>  |
| <code>/</code>   | Division       | <code>>>> 9 / 6</code><br/><code>1.5</code> |
| <code>//</code>  | Floor division | <code>>>> 9 // 6</code><br/><code>1</code>  |
| <code>%</code>   | Modulus        | <code>>>> 9 % 6</code><br/><code>3</code>   |
| <code>**</code>  | Exponentiation | <code>>>> 5 ** 2</code><br/><code>25</code> |

> Remember _**never**_ to use <code>^</code> for exponents! It is a bitwise operator with a totally different function. It may not always throw an error, which means that you may unknowingly end up with a wrong output!

Seems simple enough? Yes!

But wait... what _is_ floor division and modulus?

### Division, but not quite

9 ÷ 6 = 1 R 3
<br>Floor division: 9 // 6 = 1
<br>Modulus: 9 % 6 = 3 (This is read as 9 modulo/mod 6 equals 3.)

Nowww it makes sense. Floor division returns the **quotient**, while modulus returns the **remainder**.

But what happens if you have multiple operations in one line?

## BODMAS, or PEMDAS

BODMAS/PEMDAS represents the order of mathematical operations, which is exactly the same as in math.

In descending order of priority, we have:

1. B/P: Brackets/Parentheses (<code>()</code>)
2. O/E: Orders/Exponents (<code>**</code>)
3. D & M: Division & Multiplication (<code>/</code>, <code>//</code>, <code>%</code>, <code>*</code>)
4. A & S: Addition & Subtraction (<code>+</code>, <code>-</code>)

All of this is the same as in math!

For example...

```py
>>> 3 * 5 ** 2
75
>>> (3 * 5) ** 2
225
>>> 3 + 4 - 2 ** 3
-1
```

Simple enough? Try out some trickier exercises, and check your answers by typing them out in IDLE.

```py
>>> 25 // 6 - 4 // 2 * 3 / 2

>>> 123 // 4 ** 2 - 3 / 2 ** (4 * 7 - 30)

```

And that's it! Remember your arithmetic operators and their orders, and you're set for most of the math that you will
encounter when coding with Python.