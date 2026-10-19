panjang = float(input("Panjang (m): "))
lebar = float(input("Lebar (m): "))
if panjang <= 0 or lebar <= 0:
    print("Sisi harus lebih positif.")
else: 
    luas = panjang * lebar
    print(f"Luas = {luas:.2f} m2")