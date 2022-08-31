#!/usr/bin/python3
def multiply_by_2(a_dictionary):
    new = {}
    [new.setdefault(i, []) for i in a_dictionary]
    for i in new:
        new[i] = 2 * a_dictionary[i]
    return new
