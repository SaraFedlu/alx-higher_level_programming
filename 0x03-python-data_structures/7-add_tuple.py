#!/usr/bin/python3
def add_tuple(tuple_a=(), tuple_b=()):
    if len(tuple_a) > len(tuple_b):
        tuple_b += (0, 0)
    elif len(tuple_a) < len(tuple_b):
        tuple_a += (0, 0)

    x = tuple_a[0] + tuple_b[0]
    y = tuple_a[1] + tuple_b[1]
    z = x, y
    return z
