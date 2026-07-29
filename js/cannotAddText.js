const text = document.createElement('p');
//const text = document.createTextNode("Hello");
//const figure = document.createElement('figure')
//const figcaption = document.createElement('figCaption')
//figcaption.textContent = "title here"
text.textContent = `HELLO`
//const commentText = commentInput.value.trim();

async function loadAllPhotos() {

        window.addEventListener('load', () => {
			const loader = document.getElementById('status')
			if (loader) {
				loader.remove() //completely remove element from DOM
			}
		})
      // Base URL and different parameters/identifiers
      const baseUrl = 'https://picsum.photos/seed/';

      const max = 25
      const photoId = [];
      for (let i = 1; i < max; i++) {
        photoId.push(i)
      }
      const photoIds = ['1', '2', '3', '4','5', '6', '7', '8','9', '10', 
        '12', '13', '14', '15', '16', '17', '19', '20', '21', '22', '23', '24', '25']; // Different parameters
      
      const container = document.getElementById('photoAlbum');
      const fragment = document.createDocumentFragment();

      try {
        // Map parameters to fetch requests in parallel
       
        const promises = photoIds.map(id => fetch(`${baseUrl}${id}/150/150`));
        const responses = await Promise.all(promises);

        // Convert all responses to blobs asynchronously
        const blobPromises = responses.map(res => {
          if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
          return res.blob();
        });
        
        const blobs = await Promise.all(blobPromises);
        //fragment.appendChild(text)
         
        // Create image elements and attach to a document fragment
        blobs.forEach((blob, index) => {
          
          const imgURL = URL.createObjectURL(blob);
          
          const img = document.createElement('img');
          img.src = imgURL;
          img.alt = `Photo ${photoIds[index]}`;

          //container.replaceWith(figure)
         
          fragment.appendChild(img);
          fragment.appendChild(text);
          //figure.appendChild(container)
          
          //figure.appendChild(figcaption.textContent)
          
        });
       //document.body.append(container)
        
        // Append to DOM once for performance
        container.appendChild(fragment);
        
         
      } catch (error) {
        console.error('Failed to load photos:', error);
      }
}

loadAllPhotos();
