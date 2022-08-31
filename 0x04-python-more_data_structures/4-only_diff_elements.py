#!/usr/bin/python3
def only_diff_elements(set_1, set_2):
    unique1 = [x for x in set_1 if x not in set_2]
    unique2 = [x for x in set_2 if x not in set_1]
    return unique1 + unique2
