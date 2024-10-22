const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

//   Modal open function
const openModal = () => {
  console.log("Modal is Open");
  modal.classList.add("active");
  overlay.classList.add("overlayactive");
};

// Modal close function
const closeModal = () => {
  modal.classList.remove("active");
  overlay.classList.remove("overlayactive");
};

/*echo "# ProfileShare" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/Asif9990/ProfileShare.git
git push -u origin main*/
