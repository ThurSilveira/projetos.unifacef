public class SmartTv {

    private String marca, modelo;
    private int volume;
    private int setVolume;
    private boolean conectadoInternet;

    public SmartTv(){
        this.marca = "";
        this.modelo = "";
        this.conectadoInternet = false;
    }

    public SmartTv (String marca, String modelo, int volume){
        this.setMarca(marca);
        this.setModelo(modelo);
        this.setVolume(volume);
        this.conectadoInternet = false;

    }

    // setters e getters
    public void setVolume(int volume){
        if (volume >= 0 && volume <= 100){
            this.volume = volume;
        }
        else System.out.println("\nVolume Invalido");
    }

    public int getVolume(){
        return this.volume;
    }

    public void setMarca(String setMarca){
        char aux = setMarca.charAt(0);
        boolean resp = Character.isUpperCase(aux);  // primeira letra maiuscula
        if (resp){
            this.marca = setMarca;
        }
        else{
            System.out.println("\nMarca invalida");
        }
    }

    public String getMarca(){
        return this.marca;
    }

    public void setModelo(String setModelo){
        if (setModelo != null && setModelo.length() <= 30){
            this.modelo = setModelo;
        }
        else System.out.println("\nModelo Invalido");
    }

    public String getModelo(){
        return this.modelo;
    }

    public void abrirYoutube(){
        if (this.conectarInternet()){
            System.out.printf("\nAbrindo Youtube");
        }
        else{
            System.out.printf("\nSem Internet");
        }
    }

    // so pode ser usado nesta classe
    private boolean conectarInternet(){
        int random = (int) (Math.random() * 10);
        if (random < 5){
            this.conectadoInternet = true;
            return true;
        }
        else{
            this.conectadoInternet = false;
            return false;
        }
    }

    public void setAumentarVolume (int x){
        this.setVolume(this.volume + x);
    }

    public void setDiminuirVolume (int x){
        this.setVolume(this.volume - x);
    }

    @Override
    public String toString(){
        return "\nMarca: " + marca +
                "\nModelo: " + modelo +
                "\nVolume: " + volume +
                "\nInternet: " + conectadoInternet;
    }
}