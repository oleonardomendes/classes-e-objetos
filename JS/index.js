// Definindo a classe Heroi
class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    atacar() {
      let ataque;
      switch (this.tipo.toLowerCase()) {
        case "mago":
          ataque = "magia";
          break;
        case "guerreiro":
          ataque = "espada";
          break;
        case "monge":
          ataque = "artes marciais";
          break;
        case "ninja":
          ataque = "shuriken";
          break;
        default:
          ataque = "um ataque desconhecido";
          break;
      }
      console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
  }
  
  // Criando instâncias da classe Heroi
  let mago = new Heroi("Gandalf", 150, "mago");
  let guerreiro = new Heroi("Arthur", 35, "guerreiro");
  let monge = new Heroi("Shaolin", 40, "monge");
  let ninja = new Heroi("Naruto", 17, "ninja");
  
  // Chamando o método atacar para cada herói
  mago.atacar();        // "O mago atacou usando magia"
  guerreiro.atacar();   // "O guerreiro atacou usando espada"
  monge.atacar();       // "O monge atacou usando artes marciais"
  ninja.atacar();       // "O ninja atacou usando shuriken"
  