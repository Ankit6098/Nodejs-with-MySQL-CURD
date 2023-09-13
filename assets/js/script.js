console.log('script loaded');

const editButton = document.querySelectorAll('.edit-button');
const updateForm = document.querySelectorAll('.update-form');

for (let i = 0; i < editButton.length; i++) {
    editButton[i].addEventListener('click', () => {
        console.log('button click');
        updateForm[i].style.display = "block";
    })
}