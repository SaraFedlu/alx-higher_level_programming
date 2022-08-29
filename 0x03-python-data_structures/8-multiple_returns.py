#!/usr/bin/python3
def multiple_returns(sentence):
    if len(sentence) == 0:
        return (0, 'none')
    else:
        for i in sentence:
            if i != ' ':
                break
        return (len(sentence), i)
