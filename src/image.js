class Image {

	constructor(imageURL, caption){
		this.imageURL = imageURL
		this.caption = caption
	}

	render(){
		return `<div class="card">
            <div class="card-image">
              <img src="${this.imageURL}" width=100%>
              <span class="card-title"></span>
            </div>
            <div class="card-content">
              <h4 align="center">${this.caption}</h4>
            </div>
          </div>`
	}

}