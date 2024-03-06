var result ;

function typeAnswer(){
    var options = {
        strings: ["Your long paragraph goes here. You can split it  into multiple parts, each representing a line or a sentence, to have better control over the typing effect. Make sure to adjust the strings array accordingly to match your contenu can split it  into multiple parts, each representing a line or a sentence, to have better control over the typing effect. Make sure to adjust the strings array accordingly to match your contenu can split it  into multiple parts, each representing a line or a sentence, to have better control over the typing effect. Make sure to adjust the strings array accordingly to match your contenu can split it  into multiple parts, each representing a line or a sentence, to have better control over the typing effect. Make sure to adjust the strings array accordingly to match your contenu can split it  into multiple parts, each representing a line or a sentence, to have better control over the typing effect. Make sure to adjust the strings array accordingly to match your contenu can split it  into multiple parts, each representing a line or a sentence, to have better control over the typing effect. Make sure to adjust the strings array accordingly to match your contenu can split it  into multiple parts, each representing a line or a sentence, to have better control over the typing effect. Make sure to adjust the strings array accordingly to match your contenu can split it  into multiple parts, each representing a line or a sentence, to have better control over the typing effect. Make sure to adjust the strings array accordingly to match your content's structure."], // Example, replace with your actual paragraph
        typeSpeed: 25, // Adjust typing speed as needed
        showCursor: false, // Set to false if you don't want the cursor to be shown at the end
        cursorChar: '|', // Cursor character
        onComplete: function(self) { 
            // This function is called when typing is complete
            // If you need to do something when typing is complete, do it here
        },
    };

    // Initialize Typed.js
    var typed = new Typed('#chatbox', options);
}

// Function for submitting a question
function submitQuestion() {
    const question = document.getElementById('hero-field').value; // Ensure this ID matches your question input
    fetch('/ask', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question: question }),
    })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            // Assuming you have an element to display the answer
            document.getElementById('chatbox').textContent = data.answer;
            result = data.answer;
            // typeAnswer();
        })
        .catch((error) => {
            console.error('Error:', error);
            document.getElementById('chatbox').textContent = 'Failed to get an answer. Please try again.';
        });
}

// Function for document upload
// Function for document upload
function uploadDocument() {
    const input = document.getElementById('document');
    const data = new FormData();
    
    // Append each file to the FormData object
    for (const file of input.files) {
        data.append('document', file);
    }

    fetch('/upload', {
        method: 'POST',
        body: data,
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        input.value = ''; // Clear the input field
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}

function checkFile() {
    var input = document.getElementById('document');
    var fileNamesDiv = document.getElementById('fileNames');
    fileNamesDiv.innerHTML = ''; // Clear previous content

    if (input.files.length > 0) {
        var fileNames = [];

        for (var i = 0; i < input.files.length; i++) {
            fileNames.push(input.files[i].name);
        }

        // Join the file names and display them
        fileNamesDiv.textContent = fileNames.join(', ');

        // Optionally, you can add additional styling or formatting to the file names here
        // For example, to display each file name on a new line, you could do:
        // fileNamesDiv.innerHTML = fileNames.join('<br>');
        uploadDocument(); // Call the uploadDocument function to handle the file upload
    } else {
        fileNamesDiv.textContent = ''; // Display default message or leave empty
    }
}


document.getElementById('toggleButton').addEventListener('click', function () {
    document.getElementById('welcome-text').style.display = 'none';
    document.getElementById('cards-container').style.display = 'none';
    document.getElementById('chatbox').classList.remove("hidden");
});

function copyCardContent(cardIndex) {
    var cards = document.getElementsByClassName('card');
    var content = cards[cardIndex - 1].getElementsByTagName('p')[0].innerText;
    document.getElementById('hero-field').value = content;
}