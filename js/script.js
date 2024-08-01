// // Mendapatkan elemen slider dan menyimpan nama-nama gambar
// const slider = document.querySelector(".container-slider img");
// const images = [
//   "assets/image-1.png",
//   "assets/image-2.png",
//   "assets/image-3.png",
//   "assets/image-4.png",
// ];

// let currentImageIndex = 0;
// const slideInterval = 3000; // 3 detik

// // Fungsi untuk mengganti gambar
// function changeImage() {
//   // Update indeks gambar saat ini
//   currentImageIndex = (currentImageIndex + 1) % images.length;
//   // Ganti gambar di slider
//   slider.src = images[currentImageIndex];
// }

// // Mengatur interval untuk mengganti gambar secara otomatis
// setInterval(changeImage, slideInterval);

// document.addEventListener("DOMContentLoaded", function () {
//   const images = [
//     "assets/image-1.png",
//     "assets/image-2.png",
//     "assets/image-3.png",
//     "assets/image-4.png",
//   ];

//   let currentImageIndex = 0;
//   const imageElement = document.querySelector(".container-slider img");

//   function changeImage() {
//     currentImageIndex = (currentImageIndex + 1) % images.length;
//     imageElement.src = images[currentImageIndex];
//   }

//   setInterval(changeImage, 3000); // Ganti gambar setiap 3 detik
// });

// document.addEventListener("DOMContentLoaded", function () {
//   const images = [
//     "assets/image-1.png",
//     "assets/image-2.png",
//     "assets/image-3.png",
//     "assets/image-4.png",
//   ];

//   let currentImageIndex = 0;
//   const imageContainer = document.querySelector(".container-slider");
//   let imageElements = [];

//   // Inisialisasi gambar dan tambahkan ke container
//   images.forEach((src, index) => {
//     const img = document.createElement("img");
//     img.src = src;
//     img.alt = `Slide ${index + 1}`;
//     if (index === 0) img.classList.add("active");
//     imageContainer.appendChild(img);
//     imageElements.push(img);
//   });

//   function changeImage() {
//     imageElements[currentImageIndex].classList.remove("active");
//     currentImageIndex = (currentImageIndex + 1) % images.length;
//     imageElements[currentImageIndex].classList.add("active");
//   }

//   setInterval(changeImage, 3000); // Ganti gambar setiap 3 detik
// });

// document.addEventListener("DOMContentLoaded", function () {
//   // Auto-slide functionality
//   const images = [
//     "assets/image-1.png",
//     "assets/image-2.png",
//     "assets/image-3.png",
//     "assets/image-4.png",
//   ];

//   let currentImageIndex = 0;
//   const imageElement = document.querySelector(".container-slider img");

//   function changeImage() {
//     currentImageIndex = (currentImageIndex + 1) % images.length;
//     imageElement.src = images[currentImageIndex];
//   }

//   setInterval(changeImage, 3000); // Ganti gambar setiap 3 detik

//   // Form validation functionality
//   const form = document.querySelector("form");
//   const nameInput = document.getElementById("name");
//   const emailInput = document.getElementById("email");
//   const interestSelect = document.getElementById("interest");
//   const submitButton = form.querySelector("button");

//   form.addEventListener("submit", function (event) {
//     event.preventDefault(); // Mencegah pengiriman form sebelum validasi
//     let isValid = true;

//     // Validasi Nama
//     if (nameInput.value.trim() === "") {
//       setError(nameInput, "Nama harus diisi.");
//       isValid = false;
//     } else {
//       clearError(nameInput);
//     }

//     // Validasi Email
//     if (!isValidEmail(emailInput.value)) {
//       setError(emailInput, "Email tidak valid.");
//       isValid = false;
//     } else {
//       clearError(emailInput);
//     }

//     // Validasi Interest
//     if (interestSelect.value.trim() === "") {
//       setError(interestSelect, "Silakan pilih minat Anda.");
//       isValid = false;
//     } else {
//       clearError(interestSelect);
//     }

//     if (isValid) {
//       // Jika semua validasi lulus, form dapat dikirim
//       alert("Form berhasil dikirim!");
//       form.submit();
//     }
//   });

//   function setError(element, message) {
//     const errorElement = element.nextElementSibling;
//     element.classList.add("error");
//     if (errorElement) {
//       errorElement.textContent = message;
//       errorElement.style.display = "block";
//     } else {
//       const error = document.createElement("div");
//       error.classList.add("error-message");
//       error.textContent = message;
//       error.style.color = "red";
//       element.insertAdjacentElement("afterend", error);
//     }
//   }

//   function clearError(element) {
//     element.classList.remove("error");
//     const errorElement = element.nextElementSibling;
//     if (errorElement && errorElement.classList.contains("error-message")) {
//       errorElement.style.display = "none";
//     }
//   }

//   function isValidEmail(email) {
//     // Regular expression untuk validasi email
//     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailPattern.test(email);
//   }
// });

// document.addEventListener("DOMContentLoaded", () => {
//   const form = document.getElementById("contact-form");

//   form.addEventListener("submit", (event) => {
//     event.preventDefault(); // Menghindari pengiriman form

//     const name = document.getElementById("name");
//     const email = document.getElementById("email");
//     const interest = document.getElementById("interest");

//     let valid = true;

//     // Validasi nama
//     if (name.value.trim() === "") {
//       setError(name, "Name is required.");
//       valid = false;
//     } else {
//       clearError(name);
//     }

//     // Validasi email
//     if (!validateEmail(email.value.trim())) {
//       setError(email, "Invalid email address.");
//       valid = false;
//     } else {
//       clearError(email);
//     }

//     // Validasi minat
//     if (interest.value === "") {
//       setError(interest, "Interest is required.");
//       valid = false;
//     } else {
//       clearError(interest);
//     }

//     if (valid) {
//       // Jika semua validasi lulus, form dapat dikirim
//       alert("Form successfully submitted!");
//       form.submit();
//     }
//   });

//   function setError(element, message) {
//     let errorElement = element.nextElementSibling;
//     if (!errorElement || !errorElement.classList.contains("error-message")) {
//       errorElement = document.createElement("div");
//       errorElement.classList.add("error-message");
//       element.parentNode.insertBefore(errorElement, element.nextSibling);
//     }
//     element.classList.add("error");
//     errorElement.textContent = message;
//     errorElement.style.display = "block";
//   }

//   function clearError(element) {
//     element.classList.remove("error");
//     const errorElement = element.nextElementSibling;
//     if (errorElement && errorElement.classList.contains("error-message")) {
//       errorElement.style.display = "none";
//     }
//   }

//   function validateEmail(email) {
//     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailPattern.test(email);
//   }
// });

// document.addEventListener("DOMContentLoaded", () => {
//   const form = document.getElementById("contact-form");

//   form.addEventListener("submit", (event) => {
//     event.preventDefault(); // Menghindari pengiriman form

//     const name = document.getElementById("name");
//     const email = document.getElementById("email");
//     const interest = document.getElementById("interest");

//     let valid = true;

//     // Validasi nama
//     if (name.value.trim() === "") {
//       setError(name, "Nama tidak boleh kosong.");
//       valid = false;
//     } else {
//       clearError(name);
//     }

//     // Validasi email
//     if (!validateEmail(email.value.trim())) {
//       setError(email, "Email tidak valid.");
//       valid = false;
//     } else {
//       clearError(email);
//     }

//     // Validasi minat
//     if (interest.value === "") {
//       setError(interest, "Interest tidak boleh kosong.");
//       valid = false;
//     } else {
//       clearError(interest);
//     }

//     if (valid) {
//       // Jika semua validasi lulus, form dapat dikirim
//       alert("Form successfully submitted!");
//       form.submit();
//     }
//   });

//   function setError(element, message) {
//     let errorElement = document.getElementById(`${element.id}-error`);
//     if (!errorElement) {
//       // Membuat elemen error jika belum ada
//       errorElement = document.createElement("div");
//       errorElement.id = `${element.id}-error`;
//       errorElement.classList.add("error");
//       element.parentNode.insertBefore(errorElement, element.nextSibling);
//     }
//     errorElement.textContent = message;
//     errorElement.style.display = "block";
//   }

//   function clearError(element) {
//     const errorElement = document.getElementById(`${element.id}-error`);
//     if (errorElement) {
//       errorElement.style.display = "none";
//     }
//   }

//   function validateEmail(email) {
//     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailPattern.test(email);
//   }
// });

// document.addEventListener("DOMContentLoaded", () => {
//   // Auto-slide functionality
//   const images = [
//     "assets/image-1.png",
//     "assets/image-2.png",
//     "assets/image-3.png",
//     "assets/image-4.png",
//   ];

//   let currentImageIndex = 0;
//   const imageElement = document.querySelector(".container-slider img");

//   function changeImage() {
//     currentImageIndex = (currentImageIndex + 1) % images.length;
//     imageElement.src = images[currentImageIndex];
//   }

//   setInterval(changeImage, 3000); // Ganti gambar setiap 3 detik

//   // Form validation
//   const form = document.getElementById("contact-form");

//   form.addEventListener("submit", (event) => {
//     event.preventDefault(); // Menghindari pengiriman form

//     const name = document.getElementById("name");
//     const email = document.getElementById("email");
//     const interest = document.getElementById("interest");

//     let valid = true;

//     // Validasi nama
//     if (name.value.trim() === "") {
//       setError(name, "Nama tidak boleh kosong.");
//       valid = false;
//     } else {
//       clearError(name);
//     }

//     // Validasi email
//     if (!validateEmail(email.value.trim())) {
//       setError(email, "Email tidak valid.");
//       valid = false;
//     } else {
//       clearError(email);
//     }

//     // Validasi minat
//     if (interest.value === "") {
//       setError(interest, "Minat tidak boleh kosong.");
//       valid = false;
//     } else {
//       clearError(interest);
//     }

//     if (valid) {
//       // Jika semua validasi lulus, form dapat dikirim
//       alert("Form berhasil dikirim!");
//       form.submit();
//     }
//   });

//   function setError(element, message) {
//     let errorElement = element.nextElementSibling;
//     if (!errorElement || !errorElement.classList.contains("error-message")) {
//       errorElement = document.createElement("div");
//       errorElement.classList.add("error-message", "error");
//       element.parentNode.insertBefore(errorElement, element.nextSibling);
//     }
//     element.classList.add("error");
//     errorElement.textContent = message;
//     errorElement.style.display = "block";
//   }

//   function clearError(element) {
//     element.classList.remove("error");
//     const errorElement = element.nextElementSibling;
//     if (errorElement && errorElement.classList.contains("error-message")) {
//       errorElement.style.display = "none";
//     }
//   }

//   function validateEmail(email) {
//     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailPattern.test(email);
//   }
// });

document.addEventListener("DOMContentLoaded", () => {
  // Auto-slide functionality
  const images = [
    "assets/image-1.png",
    "assets/image-2.png",
    "assets/image-3.png",
    "assets/image-4.png",
  ];

  let currentImageIndex = 0;
  const imageElement = document.querySelector(".container-slider img");

  function changeImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    imageElement.src = images[currentImageIndex];
  }

  setInterval(changeImage, 3000); // Ganti gambar setiap 3 detik

  const hamburgerMenu = document.getElementById("hamburger-menu");
  const sidebar = document.getElementById("sidebar");

  hamburgerMenu.addEventListener("click", function () {
    sidebar.classList.toggle("active");
    hamburgerMenu.classList.toggle("active");
  });

  // Form validation
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Menghindari pengiriman form

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const interest = document.getElementById("interest");

    let valid = true;

    // Validasi nama
    if (name.value.trim() === "") {
      setError(name, "Nama tidak boleh kosong.");
      valid = false;
    } else {
      clearError(name);
    }

    // Validasi email
    if (!validateEmail(email.value.trim())) {
      setError(email, "Email tidak valid.");
      valid = false;
    } else {
      clearError(email);
    }

    // Validasi minat
    if (interest.value === "") {
      setError(interest, "Minat tidak boleh kosong.");
      valid = false;
    } else {
      clearError(interest);
    }

    if (valid) {
      // Jika semua validasi lulus, form dapat dikirim
      alert("Form berhasil dikirim!");
      form.submit();
    }
  });

  function setError(element, message) {
    let errorElement = element.nextElementSibling;
    if (!errorElement || !errorElement.classList.contains("error-message")) {
      errorElement = document.createElement("div");
      errorElement.classList.add("error-message", "error");
      element.parentNode.insertBefore(errorElement, element.nextSibling);
    }
    element.classList.add("error");
    errorElement.textContent = message;
    errorElement.style.display = "block";
  }

  function clearError(element) {
    element.classList.remove("error");
    const errorElement = element.nextElementSibling;
    if (errorElement && errorElement.classList.contains("error-message")) {
      errorElement.style.display = "none";
    }
  }

  function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }
});
