#!/usr/bin/python3
def print_matrix_integer(matrix=[[]]):
    for i in matrix:
        for e in range(len(i)):
            print('{:d}'.format(i[e]), end='')
            if e + 1 < len(i):
                print(' ', end='')
        print('')
