#!/usr/bin/python3
def max_integer(my_list=[]):
    if my_list:
        my_list.sort(reverse=1)
        return my_list[0]
