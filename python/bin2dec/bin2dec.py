# Using normal multiplication logic
def bin2dec_v1(_bin):
  decimal = 0

  count = 0
  for b in _bin[::-1]:
    decimal += int(b)*(2**count)
    count += 1
  
  return decimal

# Using the same logic but with list comprehension
def bin2dec_v2(_bin):
  return sum([2**i for i in range(len(_bin)) if int(_bin[::-1][i]) == 1])

if __name__ == "__main__":
  raw_binary = input('Digite um número binário: ')
  print(bin2dec_v1(raw_binary))
  print(bin2dec_v2(raw_binary))