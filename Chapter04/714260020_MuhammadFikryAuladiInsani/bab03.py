celsius = (float("Suhu Celsius: ")) 
fahrenheit = celsius * 9 / 5 + 32 
kelvin = celsius + 273.15 
print(f"Fahrenheit: {fahrenheit:.2f}") 
print(f"Kelvin: {kelvin:.2f}") 
print("Tipe input setelah konversi:", type(celsius).__name__) 