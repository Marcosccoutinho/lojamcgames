
  const items = [
    {
      id:0,
      nome:'playstation 4 ',
      img: 'ps4-slim-500g.jpeg',
      quantidade:0
    },
    {
      id:1,
      nome:'xbox one ',
      img: 'xbox-one-fat-500g.jpeg',
      quantidade:0
    },
    {
      id:2,
      nome:'xbox one s ',
      img: 'xbox-one-s.jpeg',
      quantidade:0
    },
    {
      id:3,
      nome:'nintendo',
      img: 'nintendo-switch.jpeg',
      quantidade:0
    },
    {
      id:4,
      nome:'kit teclado mouse e fone',
      img: 'kit-teclado-mouse-fone.jpeg',
      quantidade:0
    },
  ]

  inicializarLoja = () => {
    var containerProdutos = document.getElementById('produtos');
    items.map((val)=> {
      containerProdutos.innerHTML += `
      
      <div class="produto-single">
      <img src= "`+val.img+`"/>
      <p>`+val.nome+`</p>
      <a key=`+val.id+`"href="">Adicionar ao carrinho!</a>









      </div>
      
      
      
      
      
                                `//Este código em JavaScript está usando o método map 
                             //uma chamada de matriz items. O método mapé usado para percorrer cada elemento
                            // de uma matriz e retornar uma nova matriz com os resultados da função de retorno
                           // de chamada aplicada a cada elemento.
                          // No código fornecido, a função de retorno de chamada é (val) => {console.log(val.nome);}, que imprime o valor da propriedade nomede cada elemento na matriz. Portanto, o código irá iterar sobre cada elemento da matriz itemse imprimir o valor da propriedade nomede cada elemento.
    })
  }
  inicializarLoja();