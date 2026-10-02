document.getElementById("year").textContent = new Date().getFullYear();

const form = document.getElementById("enquiryForm");
form.addEventListener("submit", function(e){
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const message = document.getElementById("message").value.trim();
  const text = `Hi MexiChino,%0A%0A*New Website Enquiry*%0AName: ${encodeURIComponent(name)}%0APhone: ${encodeURIComponent(phone)}%0AMessage: ${encodeURIComponent(message)}`;
  window.open(`https://wa.me/?text=${text}`, "_blank");
});

document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener("click",()=>{
    document.querySelector(".nav")?.classList.remove("open");
  });
});
