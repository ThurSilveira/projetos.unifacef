public class Carro {
    // variavel / instancias
    public String marca, modelo;
    public float velocidade;
    public boolean motor;

    // metodos da classe
    // metodo construtor - constroi objeto
    // inicializa as variaveis
    public Carro(String marca, String modelo){ // metodo construtor é o mesmo nome da classe
        // marca e o valor do usuario
        // this.marca e o valor do objeto
        this.marca = marca;
        this.modelo = modelo;
        this.velocidade = 0;
        this.motor = false;
    }

    public void ligar(){
        if (!this.motor){
            this.motor = true;
            System.out.println("Carro Ligado");
        }
    }

    public void desligar(){
        if (this.motor){
            this.motor = false;
            this.velocidade = 0;
            System.out.println("Carro Desligado");
        }
    }

    public void acelerar(float x){
        if (this.motor){
            this.velocidade += x;
            System.out.println("Velocidade atual: " + this.velocidade);
        }
        else{
            System.out.println("Motor desligado");
        }
    }

    public void frear(float x){
        if (this.motor && (this.velocidade - x) >= 0 ){
            this.velocidade -= x;
            System.out.println("Velocidade atual: " + this.velocidade);
        }
        else{
            System.out.println("Motor desligado");
        }
    }

    // converte um objeto em String
    public String toString(){
        return "Marca: " + this.marca
                + ", Modelo: " + this.modelo
                + ", Vel: " + this.velocidade
                + ", Motor: " + (this.motor ? "ligado" : "desligado");
    }
}