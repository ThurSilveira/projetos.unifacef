public final class ArCondicionado {

    private String marca;
    private String modelo;
    private int temperatura;
    private boolean ligado;
    private boolean compressor;

    public ArCondicionado(){
        this.marca = "Generico";
        this.modelo = "Standard";
        this.temperatura = 24;
        this.ligado = false;
    }

    public ArCondicionado(String marca, String modelo, int temperatura){
        this.setMarca(marca);
        this.modelo = modelo;
        this.setTemperatura(temperatura);
    }

    public void ligar(){
        if (!verificarCompressor()){
            ligado = false;
            System.out.println("Falha no compressor");
            return;
        }
        ligado = true;
    }

    public void desligar(){
        ligado = false;
    }

    public void setTemperatura(int t){
        if (t < 16 || t > 30){
            System.out.println("Temperatura fora da faixa");
            return;
        }
        this.temperatura = t;
    }

    public int getTemperatura(){
        return temperatura;
    }

    public void setModelo(String m){
        this.modelo = m;
    }

    public String getModelo(){
        return this.modelo;
    }

    public void setMarca(String m){
        if (m != null && m.length() >= 3){
            this.marca = m;
        }
        else System.out.println("\nMarca Invalido");
    }

    public String getMarca(){
        return this.marca;
    }

    private boolean verificarCompressor(){
        int numero = (int)(Math.random() * 10);
        compressor = numero > 2;
        return compressor;
    }

    public void ativarModoTurbo(){
        if (ligado && this.verificarCompressor()){
            setTemperatura(16);
        }
    }

    @Override
    public String toString(){
        return "\nMarca: " + marca +
                "\nModelo: " + modelo +
                "\nTemperatura: " + temperatura +
                "\nLigado: " + ligado;
    }
}
