menit = int(input("Durasi (menit): ")) 
if menit < 0: 
    print("Durasi tidak boleh negatif.") 
else: 
    jam = menit // 60 
    sisa = menit % 60 
    detik = menit * 60 
    print(f"Durasi: {jam} jam {sisa} menit") 
    print(f"Total detik: {detik}") 
    print("Rekonstruksi:", jam * 60 + sisa) 