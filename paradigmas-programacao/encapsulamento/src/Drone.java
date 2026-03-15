public class Drone {

    private String codigo;
    private float altura;
    private int bateria;
    private boolean emVoo;

    public Drone(String codigo, float altura, int bateria){
        this.setCodigo(codigo);
        this.setBateria(bateria);
        this.altura = altura;
        this.emVoo = false;
    }

    public void setCodigo(String c){
        if (c != null && c.length() >= 3){
            codigo = c;
        }
    }
    public String getCodigo(){return codigo;}

    public void setAltura(float a){
        if (!emVoo){
            System.out.println("Drone não esta em voo!");
            return;
        }
        if (a < 0 || a > 120){
            System.out.println("Altura incoerente com a regulamentação");
            return;
        }
        this.altura = a;
    }
    public float getAltura(){return altura;}

    public void setBateria(int b){
        if (b < 0 || b > 100){
            System.out.println("Valor invalido");
            return;
        }
        this.bateria = b;
    }
    public int getBateria(){return bateria;}

    public boolean isEmVoo(){
        return emVoo;
    }

    public void decolar(){
        if (emVoo){
            System.out.println("Drone já está em voo");
            return;
        }
        if (bateria <= 20){
            System.out.println("Bateria fraca");
            return;
        }
        if (testarMotores()){
            emVoo = true;
            altura = 2;
        }
    }

    private boolean testarMotores(){
        System.out.println("Testando hélices...");
        System.out.println("Calibrando GPS...");
        int numero = (int)(Math.random() * 100);
        return numero < 8;
    }

    public void subir(float x){
        setAltura(altura + x);
    }

    public void descer(float x){
        setAltura(altura - x);
    }

    public void pousar(){
        if (!emVoo){
            System.out.println("Drone já está no solo");
            return;
        }
        altura = 0;
        emVoo = false;
    }

    @Override
    public String toString(){
        return "\nCodigo: " + codigo +
                "\nAltura: " + altura +
                "\nBateria: " + bateria +
                "\nEm voo: " + emVoo;
    }
}
