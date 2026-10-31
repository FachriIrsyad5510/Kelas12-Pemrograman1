jarak_km = float(input("Jarak (km): ")) 
waktu_menit = float(input("Waktu (menit): ")) 
if jarak_km < 0 or waktu_menit <= 0: 
    print("Jarak minimal nol dan waktu harus positif.") 
else:
    waktu_jam = waktu_menit / 60 
    kecepatan = jarak_km / waktu_jam 
    print(f"Waktu: {waktu_jam:.2f} jam")
    print(f"Kecepatan rata-rata: {kecepatan:.2f} km/jam") 