#!/usr/bin/python3
def print_last_digit(number):
    n = str(number)
    for i in range(len(n)):
        s = n[i]
    print('{}'.format(s), end='')
    return s
