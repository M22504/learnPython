A loop is used for executing code multiple times. There are two commonly-used loop types in Python: the `while` and `for` loops.

The `while` loop repeats the code inside it as long as a certain condition is satisfied. Once that condition stops being satisfied, the program continues.
```py
import time
timer = 0
while timer < 10:
    print("Elapsed time: " + timer + "/10s")
    timer += 1
    time.sleep(1)
print(Timer over)
```