jam = int(input("Durasi parkir(jam bulat: "))
if jam < 1:
    print("Durasi minimal satu jam.")
else:
    jam_tambahan = jam - 1
    tarif_tambahan = jam_tambahan * 2000
    biaya = 3000 + tarif_tambahan
    print(f"jam tambahan: {jam_tambahan}")
    print(f"Biaya parkir: Rp{biaya}")
    
