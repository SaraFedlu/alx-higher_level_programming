#!/usr/bin/python3
import random
number = random.randint(-10000, 10000)
n = abs(number) % 10
s = "Last digit of {} is {} and is {}"
if n > 5:
   print(s.format(number, n, "greater than 5"))
elif n == 0:
   print(s.format(number, n, 0))
else:
   print(s.format(number, n, "less than 6 and not 0"))
