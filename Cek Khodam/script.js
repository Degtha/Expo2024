const khodams = [
    ,'Kosong',
    'Ban Tubles',
    'Decul',
    'Rx King',
    'CBR Lecet',
    'Kuda Jantan',
    'Buah Naga',
    'Singa Senyum',
    'Naga Guling',
    'Macan Tersenyum',
    'Elang Ganteng',
    'Kuda Bersemangat',
    'Kelinci Gemas',
    'Tikus Imut',
    'Gajah Gembira',
    'Kucing Menggemaskan',
    'Anjing Setia',
    'Katak Ceria',
    'Kura-Kura Tangguh',
];

function cekKodam (){
    const randomIndex = Math.floor(Math.random () * khodams.length)
    const randomKodam = khodams[randomIndex] 
    const nama = document.getElementById('nama').value.trim()

    if (nama == '')
    {
        alert('isi nama anda')
        document.getElementById('hasil').innerHTML = ``;
        return
    }

    const hasil = document.getElementById('hasil')
    document.getElementById('hasil').innerHTML = `<p>Khodam yang bersemayam dalam diri ${nama} adalah ${randomKodam}</p>`;

    const masukkanNama = document.getElementById('nama')
    masukkanNama.value = ''

    
}
document.getElementById('kodam').addEventListener('submit', function (e) {
    e.preventDefault(); 

    cekKodam()
})

        