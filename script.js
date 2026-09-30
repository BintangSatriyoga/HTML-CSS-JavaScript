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

    // Kunci Input Tahap 1
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

