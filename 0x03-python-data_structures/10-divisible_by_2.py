#!/usr/bin/python3
def divisible_by_2(my_list=[]):
    l = []
    for i in range(len(my_list)):
        if my_list[i] % 2 == 0:
            l += [True]
        else:
            l += [False]
    return l
