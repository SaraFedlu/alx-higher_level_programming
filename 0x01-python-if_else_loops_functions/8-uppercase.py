#!/usr/bin/python3
def uppercase(str):
    s = ''
    for i in range(len(str)):
        if ord(str[i]) > 96 and ord(str[i]) < 123:
            s = s + chr(ord(str[i]) - 32)
        else:
            s = s + str[i]
    print('{}'.format(s))
