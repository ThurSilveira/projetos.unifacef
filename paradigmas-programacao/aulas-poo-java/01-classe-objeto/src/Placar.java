public class Placar {

    public String nomeTimeCasa;
    public String nomeTimeVisitante;
    public int pontosCasa;
    public int pontosVisitante;
    public int periodoQuarto;

    public Placar(String nomeTimeCasa, String nomeTimeVisitante){
        this.nomeTimeCasa = nomeTimeCasa;
        this.nomeTimeVisitante = nomeTimeVisitante;
        this.pontosCasa = 0;
        this.pontosVisitante = 0;
        this.periodoQuarto = 1;
    }

    public void registrarPonto(String time, int tipo){
        if (tipo < 1 || tipo > 3){
            System.out.println("Ponto invalido!");
            return;
        }
        if (time.equalsIgnoreCase("casa")){
            this.pontosCasa += tipo;
        }
        else if (time.equalsIgnoreCase("visitante")){
            this.pontosVisitante += tipo;
        }
    }

    public void proximoQuarto(){
        if (this.periodoQuarto == 4){
            System.out.println("O jogo acabou!");
            return;
        }
        this.periodoQuarto++;
    }

    @Override
    public String toString(){
        return nomeTimeCasa + " " + pontosCasa + " x " +
                pontosVisitante + " " + nomeTimeVisitante +
                "\nPeríodo: " + periodoQuarto;
    }
}
