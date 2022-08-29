#!/usr/bin/python3
def multiple_returns(sentence):
    if len(sentence.replace(' ', '')) == 0:
        return (0, 'None')
    else:
        for i in sentence:
            if i != ' ':
                break
        return (len(sentence), i)
