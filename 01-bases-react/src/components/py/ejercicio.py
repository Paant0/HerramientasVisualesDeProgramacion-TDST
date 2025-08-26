def factorial(n):
    fact = 1
    for x in range (1,n+1,1):
        fact *= x  

    print("factorial de ",n, "es =",fact)
factorial(5)
