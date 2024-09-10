my_list = []
my_list.append(10)
my_list.append(20)
my_list.append(30)
my_list.append(40)
my_list.insert(1, 15)  # Inserts 15 at index 1
my_list.extend([50, 60, 70])
my_list.pop()  # Removes the last element
my_list.sort()
index_of_30 = my_list.index(30)
print(index_of_30)