# Chat with Scientific Document

## Introduction
Welcome to the Chat with Scientific Document repository! This innovative web application allows users to upload scientific documents and ask queries related to them. Leveraging advanced natural language processing techniques, our website provides accurate and insightful answers, enhancing your research and learning experience.

## Getting Started

### Prerequisites
Before running the application, ensure you have the following installed:
- Python 3.8 or higher
- Flask
- 
### Installation
To get the application running on your local machine, follow these steps:

1. **Download the Repository**
   - Navigate to the [Chat with Scientific Document GitHub page](https://github.com/Krishnapopat/ChatwithScientificdocument).
   - Click on the `Code` button and download the ZIP file of the repository.
   - Unzip the file on your local machine.

### Running the Application
With the prerequisites installed and the repository set up, you can now run the application:

1. **Set Flask Application Variable**
   - In your terminal, set the Flask application to `app.py`. The command varies depending on your operating system:
     - On Unix/macOS:
       ```bash
       export FLASK_APP=app.py
       ```
     - On Windows CMD:
       ```cmd
       set FLASK_APP=app.py
       ```
     - On Windows PowerShell:
       ```powershell
       $env:FLASK_APP = "app.py"
       ```

2. **Start the Flask Application**
   - Run the following command:
     ```bash
     flask run
     ```
   - This command starts a local web server. Once the server is running, Flask will provide a URL, typically `http://127.0.0.1:5000/`, which you can visit using your web browser.

### Using the Application
- **Upload Documents**: On the homepage, use the upload feature to select and upload your scientific document(s).
- **Ask Queries**: After uploading, enter your queries related to the document in the provided text box.
- **Receive Answers**: Submit your query to receive an answer based on the content of your uploaded document.

## Support
If you encounter any issues or have questions, please file an issue on the GitHub repository issue tracker.

## License
This project is licensed under the MIT License - see the `LICENSE` file for details.

---

Thank you for using Chat with Scientific Document!
