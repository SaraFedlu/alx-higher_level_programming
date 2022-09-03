#!/usr/bin/python3
def weight_average(my_list=[]):
    if my_list:
        sum, num = 0, 0
        for i in my_list:
            sum += i[0] * i[1]
            num += i[1]
        return sum / num
    else:
        return 0
