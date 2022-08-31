#!/usr/bin/python3
def best_score(a_dictionary):
    if a_dictionary:
        best = max([a_dictionary[i] for i in a_dictionary])
        for i in a_dictionary:
            if a_dictionary[i] == best:
                return i
