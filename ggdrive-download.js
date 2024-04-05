let jspdf = document.createElement("script");
jspdf.onload = () => {
    let pdf = new jsPDF();
    let images = document.getElementsByTagName("img");
    for (let i in images) {
        let img = images[i];
        if (!/^blob:/.test(img.src)) continue;
        let cvs = document.createElement('canvas');
        let ctx = cvs.getContext('2d');
        cvs.width = img.width*1.25;
        cvs.height = img.height*1.25;
        ctx.drawImage(img, 0, 0);
        let imgData = cvs.toDataURL("image/jpeg", 1.0);
        pdf.addImage(imgData, 'JPEG', 0, 0);
        pdf.addPage();
    }
    pdf.save(document.title.split('.pdf - ')[0]+".pdf");
};
jspdf.src = 'https://gdrive.vip/wp-content/uploads/2020/jspdf.debug.js';
document.body.appendChild(jspdf);
