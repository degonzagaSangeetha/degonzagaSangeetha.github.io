# def compare_versions(version1, version2):
#     # Split the versions by dots
#     v1_parts = list(map(int, version1.split('.')))
#     v2_parts = list(map(int, version2.split('.')))
    
#     # Find the maximum length of both version parts
#     max_length = max(len(v1_parts), len(v2_parts))
    
#     # Extend both parts to the maximum length with zeros
#     v1_parts.extend([0] * (max_length - len(v1_parts)))
#     v2_parts.extend([0] * (max_length - len(v2_parts)))
    
#     # Compare each part
#     for i in range(max_length):
#         if v1_parts[i] < v2_parts[i]:
#             return "Upgrade"
#         elif v1_parts[i] > v2_parts[i]:
#             return "Downgrade"
    
#     # If all parts are equal
#     return "None"

# # Test cases
# print(compare_versions("1.1.3", "0"))  # Downgrade

# roman_num = input("Enter a roman number: ")

# def roman_to_number(s):
   
#     roman_to_number_map = {
#         'I': 1, 'V': 5, 'X': 10, 'L': 50,
#         'C': 100, 'D': 500, 'M': 1000
#     }
#     total = 0
#     prev_value = 0

#     for i in reversed(s):
#         value = roman_to_number_map[i]
#         if value < prev_value:
#             total -= value
#         else:
#             total += value
#         prev_value = value
#     return total


# print(f" {roman_num} is {roman_to_number(roman_num)}")

# l = [0,10,4,2,1]
# def missing_num(l):
#     length = len(l)
    
#     b = [0,1,2,3,4,5,6,7,8,9,10]
#     length1 = len(b)
    
#     count = 0
#     missing = length1 - length
#     return missing
# c = missing_num(l)
# print(c)

# a = input("Enter a word: ")

# def alphabetic_number(i):
#     return ord(i.lower()) - 96

# def string_to_alphabetic_numbers(string):
#     return [alphabetic_number(i) for i in string]

# def reverse_list(list):
#     return list[::-1]


# output = string_to_alphabetic_numbers(a)
# reversed_output = reverse_list(output)

# print("Output:", output)
# print("Reversed Output:", reversed_output)


# num = int(input("Enter a number of lists: "))
# 2a = [int(input("Enter a list number: "))for i in range(num)]

a = [2,2,1,2,1]

def count_jumps(a):
    index = 0
    jumps = 0
    
    while index < len(a):
        jumps += 1
        index += a[index]
        if index >= len(a):
            break
    return jumps - 1  

print("Jumps =", count_jumps(a))