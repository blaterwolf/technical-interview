number = int(input('Enter number: '))
initial = 0
temp = 0
fibonacci = []

fibonacci.append(initial)
temp = initial + number
for x in range(10):
    fibonacci.append(temp)
    temp = initial + number
    initial = number
    number = temp

print("The fibonnaci sequence for this is: ", fibonacci)
