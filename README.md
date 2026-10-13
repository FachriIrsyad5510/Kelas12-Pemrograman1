# Kelas12-Pemrograman1
Ini adalah repository untuk Matkul Pemrograman I kelas 12 (B) 

# git scm
Download git-scm dari https://git-scm.com/downloads <br>
Download VsCode <br>
Download Xampp

## Memasukan SSH Key
Klik dulu profil github, Klik Setting, pilih SSH and GPG keys
<img width="1841" height="819" alt="image" src="https://github.com/user-attachments/assets/8756fd13-3421-43e5-b17f-f7346c0bd5d2" />

## Generate RSA Key
Just One time for first instalation of git scm, 
```sh
ssh-keygen -t rsa -b 4096 -C "emailkamu@gmail.com"
```

## Set config global
Just One time for first instalation of git scm, 

```sh
$ git config --global user.name "usernamekamu"
$ git config --global user.email emailkamu@gmail.com
```
## Get SSH Key 
to get ssh key in your computer, and put in your github or gitlab ssh key setting.

```sh
cat ~/.ssh/id_rsa.pub
```
if there is no key appears, plese generate the key also set global config of git in next section and please add the public key to your github profile.

