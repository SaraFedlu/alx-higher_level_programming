#!/usr/bin/python3
from sys import argv
def args():
    if len(argv) == 1:
        print("{} arguments.".format(0))
    elif len(argv) == 2:
        print("1 argument:\n1: {}".format(argv[1]))
    else:
        print("{} arguments:".format(len(argv) - 1))
        for i in range(1, len(argv)):
            print("{}: {}".format(i, argv[i]))
if __name__ == "__main__":
    args()
