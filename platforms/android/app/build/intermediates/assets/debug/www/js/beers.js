class Beer {
    constructor(brand, name, info, img) {
        this.brand = brand;
        this.name = name;
        this.info = info;
        this.img = img;
    }

    getObject() {
        let beer = document.createElement('div');
        beer.setAttribute('class', 'beer');

        let beer_brand = document.createElement('div');
        beer_brand.setAttribute('class', 'beer_brand');
        beer_brand.innerText = this.brand;

        let beer_name = document.createElement('div');
        beer_name.setAttribute('class', 'beer_name');
        beer_name.innerText = this.name;

        //let beer_info = document.createElement('div');
        //beer_info.setAttribute('class', 'beer_info');
        //beer_info.innerText = this.info;

        let beer_image = document.createElement('img');
        beer_image.setAttribute('class', 'beer_image');
        beer_image.setAttribute('src', 'res/beers/' + this.img);

        beer.appendChild(beer_brand);
        beer.appendChild(beer_name);
        //beer.appendChild(beer_info);
        beer.appendChild(beer_image);
        return beer;
    }
}
