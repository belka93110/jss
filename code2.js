class vehicule {

 constructor() {
   this.name ="vehicule";
	}


}

class velo extends vehicule {

  contructor () {
       super()
        this.name - "velo"
  this.roues = 2;
  this.portes = 0;
  this.selle = 1;
  this.pedales = 2;
}; 

class luxe extends velo {
  constructor(name)
             this.name = "luxe"
             this.pneu = 18 
	          this.color = gold 
  }

}

const test_velo = () => {

   console.log("test.velo");

     let monvelo = new luxe ("luxe velo");
}