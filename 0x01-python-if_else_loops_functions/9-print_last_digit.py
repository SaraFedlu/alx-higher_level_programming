#!/usr/bin/python
def print_last_digit(number):
   n = str(number)
   for i in range(len(n)):
      if ord(n[i]) < 48 and ord(n[i]) != 45 or ord(n[i]) > 57:
         return
      s = n[i]
   print('{}'.format(s), end = '')
   return s
