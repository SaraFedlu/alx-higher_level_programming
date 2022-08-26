#!/usr/bin/python3
def add(a, b):
    s = str(a) + str(b)
    for i in range(len(s)):
        if ord(s[i]) < 48 and ord(s[i]) != 45 or ord(s[i]) > 57:
            return
    else:
        return a + b
