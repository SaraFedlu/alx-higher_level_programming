#!/usr/bin/python
def fizzbuzz():
   s = ''
   for i in range(1, 101):
      if i % 3 == 0 and i % 5 == 0:
         s = s + 'FizzBuzz '
      elif i % 3 == 0:
         s = s + 'Fizz '
      elif i % 5 == 0:
         s = s + 'Buzz '
      else:
         s = s + str(i) + ' '
   print(s, end = '')
