console.log('script loaded');

const editButton = document.querySelector('.edit-button');
const updateForm = document.querySelector('.update-form');

editButton.addEventListener('click', () => {
    console.log('button click');
    updateForm.style.display = "block";
})