// Download Bug
function download(url) {
    var a = $("<a style='display:none' id='js-downloder'>")
        .attr("href", url)
        .attr("download", "test.png")
        .appendTo("body");

    a[0].click();

    a.remove();
}

function saveCapture(element) {
    html2canvas(element).then(function (canvas) {
        download(canvas.toDataURL("image/png"));
    })
}

$('#btnDownload').click(function () {
    var element = document.querySelector("#capture");
    saveCapture(element)
})


// var $btn = document.getElementById('btnScreenShot');
// $btn.addEventListener('mousedown', onScreenShotClick);

//function download(canvas, filename) {
//    // create an "off-screen" anchor tag
//    const a = document.createElement('a');
//
//    // the key here is to set the download attribute of the a tag
//    a.download = filename;
//
//    // convert canvas content to data-uri for link. When download
//    // attribute is set the content pointed to by link will be
//    // pushed as "download" in HTML5 capable browsers
//    a.href = canvas.toDataURL("image/png;base64");
//
//    a.style.display = 'none';
//    document.body.appendChild(a);
//    a.click();
//    document.body.removeChild(a);
//}

// function onScreenShotClick(event) {
//     const element = document.querySelector("#capture");

//     html2canvas(element).then((canvas) => {
//         download(canvas, 'screenshot');
//     });
// }

let im1 = "./image (2).png";
var value = localStorage.getItem('myValue');
const usR = document.querySelector("#userName");
usR.innerHTML = value
console.log("value : ", value);
//console.log(im1);
window.onload = function () {
    var value = localStorage.getItem('myValue');
    console.log("value : ", value);

    var output = document.getElementById('userName');
    // output.innerHTML = value;
    const ShowImage = document.querySelector('#ShowImage');
    const imgUrl = window.localStorage.getItem("imgUrl");
    console.log("imgUrl : ", imgUrl);
    if (imgUrl) {
        const img = document.createElement('img');
        img.src = imgUrl;
        ShowImage.classList.add('img_upload');
        //img.width = "100%"
        ShowImage.appendChild(img);
    }
};

// function downloadAsPDF() {
//     const doc = new jsPDF();

//     // Get the HTML content to be converted to PDF
//     const htmlContent = document.documentElement.outerHTML;

//     // Convert HTML to PDF
//     doc.html(htmlContent, {
//         callback: function (pdf) {
//             // Save the PDF file
//             pdf.save('downloaded.pdf');
//         }
//     });
// }
function autoClick() {
    $("#download").click();
}

$(document).ready(function () {
    var element = $("#htmlContent");

    $("#download").on('click', function () {

        html2canvas(element, {
            allowTaint: true,
            useCORS: true,
            onrendered: function (canvas) {
                var imageData = canvas.toDataURL("image/jpg");
                var newData = imageData.replace(/^data:image\/jpg/, "data:application/octet-stream");
                //console.log("imageData", imageData);
                //console.log("newData", newData);
                localStorage.setItem('newData', newData);
                $("#download").attr("download", "image.jpg").attr("href", newData);
            }
        });

    });
});


document.querySelector('.twitter').addEventListener('click', function () {
    // Get the div element
    const divElement = document.getElementById('capture');

    html2canvas(divElement)
        .then((canvas) => {
            // Convert the canvas to a data URL
            const dataUrl = canvas.toDataURL('image/png');

            uploadToCloudinary(dataUrl)
                .then((imageUrl) => {
                    // Call the function to share the hosted image URL on Twitter
                    shareOnTwitter(imageUrl);
                    //whatsaapOnTwitter(imageUrl);
                })
                .catch((error) => {
                    console.error(
                        'Error occurred while uploading image to Cloudinary:',
                        error
                    );
                });
        })
        .catch((error) => {
            console.error('Error occurred while converting div to image:', error);
        });
});

// Function to share the image on Twitter
function shareOnTwitter(imageDataUrl) {
    // Prepare the tweet text
    const tweetText = 'I just got certified by the Election Commission of India for successfully completing the National Voter Awareness quiz contest:';

    // Encode the tweet text and image data URL
    const encodedText = encodeURIComponent(tweetText);
    const encodedImage = encodeURIComponent(imageDataUrl);

    // Construct the tweet URL with the encoded text and image
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedImage}`;

    // Open a new window or redirect to the tweet URL
    window.open(tweetUrl);
}


document.querySelector('.whatsaap').addEventListener('click', function () {
    // Get the div element
    const divElement = document.getElementById('capture');

    html2canvas(divElement)
        .then((canvas) => {
            // Convert the canvas to a data URL
            const dataUrl = canvas.toDataURL('image/png');

            uploadToCloudinary(dataUrl)
                .then((imageUrl) => {
                    // Call the function to share the hosted image URL on Twitter
                    //shareOnTwitter(imageUrl);
                    whatsaapOnTwitter(imageUrl);
                })
                .catch((error) => {
                    console.error(
                        'Error occurred while uploading image to Cloudinary:',
                        error
                    );
                });
        })
        .catch((error) => {
            console.error('Error occurred while converting div to image:', error);
        });
});


// Function to share the image on Whatsaap
function whatsaapOnTwitter(imageDataUrl) {
    // Prepare the tweet text
    const tweetText = 'I just got certified by the Election Commission of India for successfully completing the National Voter Awareness quiz contest:';

    // Encode the tweet text and image data URL
    const encodedText = encodeURIComponent(tweetText);
    const encodedImage = encodeURIComponent(imageDataUrl);

    // Construct the tweet URL with the encoded text and image
    const WhatsaapUrl = `https://wa.me/?text=${encodedText} ${encodedImage}`;

    // Open a new window or redirect to the tweet URL
    window.open(WhatsaapUrl);
}


function uploadToCloudinary(imageDataUrl) {
    const cloudName = 'dshwm9mwq'; // Replace with your Cloudinary cloud name
    const uploadPreset = 'ml_default'; // Replace with your Cloudinary upload preset

    return new Promise((resolve, reject) => {
        const formData = new FormData();
        formData.append('file', imageDataUrl);
        formData.append('upload_preset', uploadPreset);

        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    const response = JSON.parse(xhr.responseText);
                    resolve(response.secure_url);
                } else {
                    reject(new Error('Failed to upload image to Cloudinary.'));
                }
            }
        };
        xhr.open(
            'POST',
            `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`
        );
        xhr.send(formData);
    });
}