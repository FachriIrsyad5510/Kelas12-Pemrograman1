const profileDefaults = {
    name: 'Jesar Dian Muhammad',
    role: 'Pelajar · Calon Web Developer',
    location: 'Indonesia',
    birthday: '',
    email: 'jesardianmuhammad@gmail.com',
    instagram: 'jesardm_',
    about: 'Saya sedang belajar membangun hal-hal menarik di dunia web. Halaman ini adalah ruang kecil untuk berbagi cerita, informasi, dan hal yang sedang saya tekuni.',
    skills: ['HTML', 'CSS', 'JavaScript', 'UI Design'],
    photo: 'assets/profile.jpg'
};

const profileStorageKey = 'ruang-pribadi-profile';
const themeStorageKey = 'ruang-pribadi-theme';
const feedback = document.getElementById('contact-feedback');
const profileForm = document.getElementById('profile-form');
const profileDialog = document.getElementById('profile-dialog');
const photoInput = document.getElementById('form-photo');
const removePhotoButton = document.getElementById('remove-photo');
let profile = { ...profileDefaults };
let selectedPhoto = '';

function renderAvatar(photo = profile.photo) {
    const avatar = document.getElementById('avatar-initials');
    if (!avatar) return;

    avatar.replaceChildren();
    if (photo) {
        const image = document.createElement('img');
        image.className = 'avatar-photo';
        image.src = photo;
        image.alt = '';
        avatar.append(image);
    } else {
        const initials = profile.name
            .trim()
            .split(/\s+/)
            .filter(Boolean)
            .slice(0, 2)
            .map((part) => part[0].toLocaleUpperCase('id-ID'))
            .join('');
        avatar.textContent = initials || 'JD';
    }

    if (removePhotoButton) removePhotoButton.hidden = !photo;
}

async function preparePhoto(file) {
    const acceptedTypes = ['image/jpeg', 'image/png', 'image/webp'];
    if (!acceptedTypes.includes(file.type)) {
        throw new Error('Gunakan foto JPG, PNG, atau WebP.');
    }
    if (file.size > 8 * 1024 * 1024) {
        throw new Error('Ukuran foto maksimal 8 MB.');
    }

    let bitmap;
    try {
        bitmap = await createImageBitmap(file);
    } catch (error) {
        throw new Error('Foto tidak dapat dibuka. Coba pilih file gambar lain.', { cause: error });
    }
    const scale = Math.min(1, 640 / Math.max(bitmap.width, bitmap.height));
    const canvas = document.createElement('canvas');
    canvas.width = Math.round(bitmap.width * scale);
    canvas.height = Math.round(bitmap.height * scale);
    const context = canvas.getContext('2d');
    if (!context) {
        bitmap.close();
        throw new Error('Foto tidak dapat diproses di browser ini.');
    }

    context.fillStyle = '#ffffff';
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.drawImage(bitmap, 0, 0, canvas.width, canvas.height);
    bitmap.close();
    return canvas.toDataURL('image/jpeg', 0.82);
}

function showFeedback(message) {
    if (feedback) feedback.textContent = message;
}

function loadProfile() {
    try {
        const savedProfile = localStorage.getItem(profileStorageKey);
        if (!savedProfile) return;

        const parsedProfile = JSON.parse(savedProfile);
        if (!parsedProfile || typeof parsedProfile !== 'object' || Array.isArray(parsedProfile)) {
            throw new Error('Format data profil tidak valid.');
        }

        profile = {
            ...profileDefaults,
            ...Object.fromEntries(
                Object.entries(parsedProfile).filter(([, value]) => typeof value === 'string')
            ),
            skills: Array.isArray(parsedProfile.skills)
                ? parsedProfile.skills.filter((skill) => typeof skill === 'string').slice(0, 8)
                : profileDefaults.skills,
            photo: typeof parsedProfile.photo === 'string'
                && (parsedProfile.photo.startsWith('data:image/jpeg;base64,') || parsedProfile.photo === profileDefaults.photo)
                ? parsedProfile.photo
                : profileDefaults.photo,
            instagram: typeof parsedProfile.instagram === 'string'
                && /^@?[A-Za-z0-9._]{1,30}$/.test(parsedProfile.instagram)
                ? parsedProfile.instagram.replace(/^@/, '')
                : ''
        };
    } catch (error) {
        showFeedback('Data tersimpan tidak dapat dibaca. Profil contoh tetap ditampilkan.');
        console.error('Gagal memuat data profil:', error);
    }
}

function renderSkills(skills) {
    const skillsList = document.getElementById('skills-list');
    if (!skillsList) return;

    skillsList.replaceChildren();
    skills.forEach((skill, index) => {
        const chip = document.createElement('span');
        const number = document.createElement('span');
        chip.className = 'skill-chip';
        number.textContent = String(index + 1).padStart(2, '0');
        chip.append(number, document.createTextNode(` ${skill}`));
        skillsList.append(chip);
    });
}

function renderProfile() {
    const textContent = {
        'profile-name': profile.name || profileDefaults.name,
        'profile-role': profile.role || 'Pelajar',
        'profile-location': profile.location || 'Belum diisi',
        'profile-about': profile.about || 'Belum ada cerita yang ditambahkan.',
        'detail-location': profile.location || 'Belum diisi',
        'detail-birthday': profile.birthday || 'Belum diisi',
        'detail-email': profile.email || 'Belum diisi'
    };

    Object.entries(textContent).forEach(([id, value]) => {
        const element = document.getElementById(id);
        if (element) element.textContent = value;
    });
    const contactButton = document.getElementById('btn-kontak');
    if (contactButton) {
        const email = profile.email.trim();
        contactButton.href = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
            ? `mailto:${email}`
            : '#detail';
    }
    const instagramLink = document.getElementById('instagram-link');
    const instagramHandle = document.getElementById('instagram-handle');
    if (instagramLink && instagramHandle) {
        const username = profile.instagram.trim().replace(/^@/, '');
        const hasValidUsername = /^[A-Za-z0-9._]{1,30}$/.test(username);
        instagramLink.hidden = !hasValidUsername;
        if (hasValidUsername) {
            instagramLink.href = `https://www.instagram.com/${encodeURIComponent(username)}/`;
            instagramHandle.textContent = `@${username}`;
        }
    }
    renderAvatar();
    renderSkills(profile.skills);
}

function openEditor() {
    if (!profileDialog || !profileForm) return;
    selectedPhoto = profile.photo;
    if (photoInput) photoInput.value = '';
    renderAvatar(selectedPhoto);
    profileForm.elements.name.value = profile.name;
    profileForm.elements.role.value = profile.role;
    profileForm.elements.location.value = profile.location;
    profileForm.elements.birthday.value = profile.birthday;
    profileForm.elements.email.value = profile.email;
    profileForm.elements.instagram.value = profile.instagram ? `@${profile.instagram}` : '';
    profileForm.elements.about.value = profile.about;
    profileForm.elements.skills.value = profile.skills.join(', ');
    profileDialog.showModal();
}

photoInput?.addEventListener('change', async () => {
    const file = photoInput.files?.[0];
    if (!file) return;

    try {
        selectedPhoto = await preparePhoto(file);
        renderAvatar(selectedPhoto);
        showFeedback('Pratinjau foto siap. Tekan Simpan perubahan untuk menyimpan.');
    } catch (error) {
        showFeedback(error instanceof Error ? error.message : 'Foto tidak dapat diproses.');
        console.error('Gagal memproses foto profil:', error);
        photoInput.value = '';
    }
});

removePhotoButton?.addEventListener('click', () => {
    selectedPhoto = '';
    if (photoInput) photoInput.value = '';
    renderAvatar();
});

loadProfile();
renderProfile();

const currentYear = document.getElementById('current-year');
if (currentYear) currentYear.textContent = String(new Date().getFullYear());

const contactButton = document.getElementById('btn-kontak');
const contactMessage = document.getElementById('pesan-kontak');
if (contactButton && !contactButton.matches('a') && contactMessage) {
    contactButton.addEventListener('click', () => {
        const isHidden = contactMessage.classList.toggle('hidden');
        contactButton.textContent = isHidden ? 'Hubungi Saya' : 'Tutup Pesan';
    });
} else if (contactButton?.matches('a')) {
    contactButton.addEventListener('click', (event) => {
        if (!profile.email) {
            event.preventDefault();
            showFeedback('Tambahkan alamat email melalui Edit Profil terlebih dahulu.');
            openEditor();
            profileForm?.elements.email.focus();
            return;
        }
    });
}

const copyEmailButton = document.getElementById('copy-email');
if (copyEmailButton) {
    copyEmailButton.addEventListener('click', async () => {
        if (!profile.email) {
            showFeedback('Tambahkan alamat email melalui Edit Profil terlebih dahulu.');
            return;
        }

        try {
            await navigator.clipboard.writeText(profile.email);
            showFeedback('Alamat email berhasil disalin.');
        } catch (error) {
            showFeedback('Email tidak bisa disalin. Coba buka halaman melalui browser yang aman.');
            console.error('Gagal menyalin alamat email:', error);
        }
    });
}

document.getElementById('edit-profile')?.addEventListener('click', openEditor);
document.getElementById('edit-profile-inline')?.addEventListener('click', openEditor);
document.getElementById('close-dialog')?.addEventListener('click', () => profileDialog?.close());
profileDialog?.addEventListener('click', (event) => {
    if (event.target === profileDialog) profileDialog.close();
});

profileForm?.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(profileForm);
    const nextProfile = {
        name: String(formData.get('name') || '').trim(),
        role: String(formData.get('role') || '').trim(),
        location: String(formData.get('location') || '').trim(),
        birthday: String(formData.get('birthday') || '').trim(),
        email: String(formData.get('email') || '').trim(),
        instagram: String(formData.get('instagram') || '').trim().replace(/^@/, ''),
        about: String(formData.get('about') || '').trim(),
        skills: String(formData.get('skills') || '')
            .split(',')
            .map((skill) => skill.trim())
            .filter(Boolean)
            .slice(0, 8),
        photo: selectedPhoto
    };

    if (nextProfile.instagram && !/^[A-Za-z0-9._]{1,30}$/.test(nextProfile.instagram)) {
        profileForm.elements.instagram.setCustomValidity('Masukkan nama pengguna Instagram yang valid.');
        profileForm.elements.instagram.reportValidity();
        return;
    }

    try {
        localStorage.setItem(profileStorageKey, JSON.stringify(nextProfile));
        profile = nextProfile;
        renderProfile();
        profileDialog.close();
        showFeedback('Profil berhasil diperbarui.');
    } catch (error) {
        renderAvatar(profile.photo);
        showFeedback('Profil belum tersimpan. Periksa pengaturan penyimpanan browser.');
        console.error('Gagal menyimpan data profil:', error);
    }
});

document.getElementById('reset-profile')?.addEventListener('click', () => {
    try {
        localStorage.removeItem(profileStorageKey);
        profile = { ...profileDefaults };
        renderProfile();
        profileDialog.close();
        showFeedback('Profil contoh berhasil dikembalikan.');
    } catch (error) {
        showFeedback('Profil contoh tidak dapat dipulihkan dari penyimpanan browser.');
        console.error('Gagal mengembalikan profil contoh:', error);
    }
});

const themeToggle = document.getElementById('theme-toggle');
if (themeToggle) {
    try {
        if (localStorage.getItem(themeStorageKey) === 'dark') document.body.classList.add('dark-theme');
    } catch (error) {
        showFeedback('Preferensi tema tidak dapat dimuat.');
        console.error('Gagal memuat preferensi tema:', error);
    }

    themeToggle.addEventListener('click', () => {
        const isDark = document.body.classList.toggle('dark-theme');
        themeToggle.setAttribute('aria-label', isDark ? 'Aktifkan mode terang' : 'Aktifkan mode gelap');
        themeToggle.querySelector('span').textContent = isDark ? '☀' : '☾';

        try {
            localStorage.setItem(themeStorageKey, isDark ? 'dark' : 'light');
        } catch (error) {
            showFeedback('Tema berubah, tetapi preferensinya tidak dapat disimpan.');
            console.error('Gagal menyimpan preferensi tema:', error);
        }
    });

    if (document.body.classList.contains('dark-theme')) {
        themeToggle.setAttribute('aria-label', 'Aktifkan mode terang');
        themeToggle.querySelector('span').textContent = '☀';
    }
}
