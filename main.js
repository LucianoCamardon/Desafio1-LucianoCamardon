class ProductManager{
    #products=[];
    #idProduct=0;

    getProducts(){
        return this.#products
    }

    addProducts(title, description, price, thumbnail, code, stock){
      const productWithSameCode = this.#products.find((products) => products.code === code );
      try{
        if(productWithSameCode){throw new Error("Ya existe un producto con ese código")}
        else{
          const newProduct={
            id:++this.#idProduct,
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
        }
          this.#products.push(newProduct);
        }
      
      }catch(error){
        console.error("Error:",error.message)
      }
    }

    getProductById(id) {
        const productById = this.#products.find((products) => products.id === id);
        if (productById) {
          return productById;
        } else {
          throw new Error("No existe ningún objeto con ese ID.");
      } 
    } 

}



const manager=new ProductManager()

console.log(manager.getProducts());
    manager.addProducts("producto prueba","Este es un producto prueba",200,"Sin imagen","abc123",25);
console.log(manager.getProducts());
   manager.addProducts("producto prueba","Este es un producto prueba",200,"Sin imagen","abc123",25);
  //Error intencional codigo repetido
console.log(manager.getProducts());
manager.addProducts("producto prueba 2","Este es un producto prueba 2",200,"Sin imagen 2","aaa000",25);
console.log(manager.getProducts());

console.log(manager.getProductById(2));
