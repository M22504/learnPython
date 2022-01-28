In this lesson, we will learn what an array is and how it is useful.

Let's code a list of crew members in variables.
```py
crew_member_0 = "Clay"
crew_member_1 = "George"
crew_member_2 = "Nick"
crew_member_3 = "Alex"
crew_member_4 = "Karl"
crew_member_5 = "Cal"
crew_member_6 = "Alyssa"
crew_member_7 = "Thomas"
crew_member_8 = "Toby"
crew_member_9 = "Wilbur"
```

This isn't a very good way of doing things - we can't loop over the crew members, and we can't do things like removing members easily. And what if instead of 10 crew members, we had 1,000?

An array is a special type of variable which holds many values. We can code our 10 crew members in an array like so:

```py
crew_members = ["Clay", "George", "Nick", "Alex", "Karl", "Cal", "Alyssa", "Thomas", "Toby", "Wilbur"]
```

You can refer to individual elements of an array with their index number:
```py
print("The first crew member is " + crew_members[0])
print("The eighth crew member is " + crew_members[7])
```
Remember that in Python, we start counting from `0`!

We can also modify elements of an array. For most cases, a reference to an array element `crew_members[0]` is just like a reference to a variable `crew_member_0`.
```py
crew_members[5] = "Red"
```

The `for` loop iterates over an array it is given. In other words, it can be used to execute code for each member of the array.

```py
print("The crew members are:")
for i in crew_members:
    print(i)
```
