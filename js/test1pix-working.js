/*****************************************************************
    Asynchronous Photo Album
    Student Starter Code

    Complete each TODO.

    Requirements:
    ✔ Use async/await
    ✔ Use fetch()
    ✔ Use try/catch
    ✔ Display only the first 25 photos
******************************************************************/
// *********************************************
// TODO #1
// Select the status element
const status = document.getElementById('status')

// TODO #2
// Select the photo album container
// *********************************************
const container = document.getElementById('photoAlbum')

const imageUrl = "https://picsum.photos/seed/1/150/150";
// *********************************************
// TODO #3
// Create an async function named loadPhotos()
// *********************************************
async function loadPhotos() {
    try {
        // *********************************************
        // TODO #4
        // Fetch the first 25 photos from:
        // https://jsonplaceholder.typicode.com/photos?_limit=25
        // *********************************************
        // TODO #5
        // Verify that the response was successful.
        // If not, throw an Error.
        // *********************************************
        // *********************************************
        // TODO #6
        // Convert the response into JSON.
        // *********************************************
        // *********************************************
        // TODO #7 - tested working
        // Remove the loading message.
		// BD: on the index.html, the loading message looks like
		//     <div id="status">Loading photos...</div>
        // *********************************************
		window.addEventListener('load', () => {
			const loader = document.getElementById('status')
			if (loader) {
				loader.remove() //completely remove element from DOM
			}
		})
        // *********************************************
        // TODO #8
        // Display the photos.
        // *********************************************
	 
	// Fetch the raw data from the image URL
	fetch(imageUrl)
    	.then(response => response.blob()) // Convert response to a binary Blob
    	.then(blob => {
        const imgElement = document.createElement("img");
        
        // Generate a local object URL for the binary image data
        imgElement.src = URL.createObjectURL(blob); 
        imgElement.alt = "Fetched photo";
        
        container.appendChild(imgElement);
    })
    .catch(error => console.error("Error fetching the image:", error));
	
    } catch(error) {
        //console.error(event)
	console.error('Fetch error: ', error.message)
   
        // *********************************************
        // TODO #9
        // Display a friendly error message.
        // *********************************************
    }
}

loadPhotos()
//BD : testing without async/await - works!
//BD : load only one image
function test1pix() {
		// 1. Define the image URL
        const imageUrl = "https://picsum.photos/seed/1/150/150";

        // 2. Target the container element in index.html
        const container = document.getElementById("photoAlbum");

        // 3. Create a new img element
        const imgElement = document.createElement("img");

        // 4. Set properties (Source and Alt text)
        imgElement.src = imageUrl;
        imgElement.alt = "Dynamically loaded photo";

        // 5. Append (paste) the image element into the container
        container.appendChild(imgElement);

}
//test1pix()

//Testing Fetch..then..catch with Async function - works
//BD : load only one image
async function testFetch() {
const imageUrl = "https://picsum.photos/seed/1/150/150";
const container = document.getElementById("photoAlbum");

// Fetch the raw data from the image URL
fetch(imageUrl)
    .then(response => response.blob()) // Convert response to a binary Blob
    .then(blob => {
        const imgElement = document.createElement("img");
        
        // Generate a local object URL for the binary image data
        imgElement.src = URL.createObjectURL(blob); 
        imgElement.alt = "Fetched photo";
        
        container.appendChild(imgElement);
    })
    .catch(error => console.error("Error fetching the image:", error));
}
//testFetch()


 
