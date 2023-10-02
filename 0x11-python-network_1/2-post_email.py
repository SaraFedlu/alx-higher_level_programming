#!/usr/bin/python3
"""
A Python script that takes in a URL and an email,
sends a POST request to the URL and
displays the body of the response.
"""
import urllib.request
import urllib.parse
import sys
if __name__ == "__main__":
    value = {"email": sys.argv[2]}
    data = urllib.parse.urlencode(value).encode("ascii")
    req = urllib.request.Request(sys.argv[1], data)
    with urllib.request.urlopen(req) as res:
        print(res.read().decode("utf-8"))
