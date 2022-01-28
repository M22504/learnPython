Let's make a program which prints a list of items.

```py
crew_members = ["Clay", "George", "Nick", "Alex", "Karl"]
print("The crew members are:")
print(crew_members[0])
print(crew_members[1])
print(crew_members[2])
print(crew_members[3])
print(crew_members[4])
```

This program works... but it's tedious to write a line for every list entry. 

A **loop** is a way to perform lines of code multiple times. Let's take a look at an example of a loop.

```py
crew_members = ["Clay", "George", "Nick", "Alex", "Karl"]
print("The crew members are:")
for i in crew_members:
    print(i)
```

The `for` loop executes code inside it once for each element of the list it is given. In the example, for each name in the list, it will print it. And if the list becomes longer...
```py
crew_members = ["Clay", "George", "Nick", "Alex", "Karl", "Cal", "Alyssa", "Thomas", "Toby", "Wilbur"]
```
the loop can handle it with no problem.

Nested loops: Prime number sieve of Big E