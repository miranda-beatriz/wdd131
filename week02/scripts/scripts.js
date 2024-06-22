document.addEventListener('DOMContentLoaded', () => {
    const inputElement = document.querySelector('#favchap');
    const buttonElement = document.querySelector('#button');
    const listElement = document.querySelector('#list');

    buttonElement.addEventListener('click', function () {
        // Check if the input value is not blank
        const chapterTitle = inputElement.value.trim();

        if (chapterTitle !== '') {
            // Create a new list item (li) element
            const li = document.createElement('li');
            li.textContent = chapterTitle;

            // Create a delete button for the list item
            const deleteButton = document.createElement('button');
            deleteButton.textContent = '❌';

            // Add click event listener to the delete button
            deleteButton.addEventListener('click', function () {
                listElement.removeChild(li);
                inputElement.focus(); // Set focus back to the input field
            });

            // Append the delete button to the list item
            li.appendChild(deleteButton);

            // Append the new list item to the chapter list
            listElement.appendChild(li);

            // Clear the input value
            inputElement.value = '';
        } else {
            // Input is blank, alert the user and set focus back to the input field
            alert('Input cannot be blank!');
            inputElement.focus(); // Set focus back to the input field
        }

        // Set focus back to the input field regardless of the condition
        inputElement.focus();
    });
});
