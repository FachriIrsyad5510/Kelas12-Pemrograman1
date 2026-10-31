nim = input("NIM: ")
nama = input("Nama: ")
prodi = input("Prodi: ")

menit = int(input("Durasi (menit): "))
meter = int(input("Jarak (meter): "))

print(f"Mahasiswa: {nama} (NIM {nim}) Prodi {prodi}")

if menit < 0:
    print("Durasi tidak boleh negatif.")
else:
    jam = menit // 60
    sisa_menit = menit % 60
    total_detik = menit * 60
    print(f"Durasi: {jam} jam {sisa_menit} menit")
    print(f"Total detik: {total_detik}")
    print("Rekonstruksi durasi:", jam * 60 + sisa_menit)

if meter < 0:
    print("Jarak tidak boleh negatif.")
else:
    km = meter // 1000
    sisa_meter = meter % 1000
    print(f"Jarak: {km} km {sisa_meter} m")
    print("Rekonstruksi jarak:", km * 1000 + sisa_meter)