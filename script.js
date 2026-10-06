// Variable Global Penyimpanan Data Form
let dataForm = {
    nama: '',
    jumlah: 0,
    pilihanList: [],
    pilihanTerpilih: '',
    email: ''
};

// Memproses Input Nama & Jumlah Pilihan
function prosesStep1() {
    const namaInput = document.getElementById('inputNama').value.trim();
    const jmlInput = document.getElementById('inputJml').value.trim();

    // Error Trapping atau Validasi Input
    if (namaInput === '') {
        alert('Error: Nama tidak boleh kosong!');
        return;
    }
    if (jmlInput === '' || isNaN(jmlInput) || parseInt(jmlInput) <= 0) {
        alert('Error: Jumlah pilihan harus berupa angka bulat positif!');
        return;
    }

    dataForm.nama = namaInput;
    dataForm.jumlah = parseInt(jmlInput);

    // Input Tahap 1
    document.getElementById('inputNama').disabled = true;
    document.getElementById('inputJml').disabled = true;

    const dynamicInputs = document.getElementById('dynamicInputs');
    dynamicInputs.innerHTML = '';

    for (let i = 1; i <= dataForm.jumlah; i++) {
        const group = document.createElement('div');
        group.className = 'form-group';
        group.innerHTML = `
            <label for="pilihan${i}">Pilihan ${i} :</label>
            <input type="text" id="pilihan${i}" class="input-pilihan" placeholder="Teks Pilihan ${i}">
        `;
        dynamicInputs.appendChild(group);
    }

    document.getElementById('step2').classList.remove('hidden');
}

// Memproses Input Teks Pilihan
function prosesStep2() {
    const inputElements = document.querySelectorAll('.input-pilihan');
    let tempPilihan = [];

    // Error Trapping : Jika ada pilihan yang kosong
    for (let i = 0; i < inputElements.length; i++) {
        const val = inputElements[i].value.trim();
        if (val === '') {
            alert(`Error: Teks Pilihan ${i + 1} belum diisi!`);
            return;
        }
        tempPilihan.push(val);
    }

    dataForm.pilihanList = tempPilihan;

    // Input Tahap 2
    inputElements.forEach(input => input.disabled = true);

    // Generate Radio Button Tahap 3
    const radioContainer = document.getElementById('radioContainer');
    radioContainer.innerHTML = '';

    dataForm.pilihanList.forEach((teks, index) => {
        const item = document.createElement('div');
        item.className = 'radio-item';
        item.innerHTML = `
            <input type="radio" id="radio_${index}" name="pilihanRadio" value="${teks}" ${index === 0 ? 'checked' : ''}>
            <label for="radio_${index}">${teks}</label>
        `;
        radioContainer.appendChild(item);
    });

    // Tampilkan Tahap 3
    document.getElementById('step3').classList.remove('hidden');
}

// Memproses Radio Button Terpilih
function prosesStep3() {
    const radioSelected = document.querySelector('input[name="pilihanRadio"]:checked');

    if (!radioSelected) {
        alert('Error: Silakan pilih salah satu opsi!');
        return;
    }

    dataForm.pilihanTerpilih = radioSelected.value;

    // Radio Button
    const radios = document.querySelectorAll('input[name="pilihanRadio"]');
    radios.forEach(radio => radio.disabled = true);

    // Tampilkan Tahap 4
    document.getElementById('step4').classList.remove('hidden');
}



