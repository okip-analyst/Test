function checkData() {
    let text = document.getElementById("inputMsisdn").value.trim();
    if (!text) {
        alert("Silakan masukkan nomor MSISDN terlebih dahulu!");
        return;
    }

    // Memecah baris teks / data yang dipaste dari Excel
    let msisdnList = text.split(/\r?\n/).filter(item => item.trim() !== "");
    
    let totalInput = msisdnList.length;
    
    // Tampilkan hasil sederhana
    let resultArea = document.getElementById("resultArea");
    let outputCount = document.getElementById("outputCount");
    
    resultArea.classList.remove("hidden");
    outputCount.innerText = `Berhasil memproses ${totalInput} nomor MSISDN.`;
}

function clearData() {
    document.getElementById("inputMsisdn").value = "";
    document.getElementById("resultArea").classList.add("hidden");
}