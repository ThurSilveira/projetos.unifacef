import java.util.ArrayList;

public class TestaNot {
    public static void main(String[] args){
        ArrayList<Notifications> canais = new ArrayList<>();

        canais.add(new Email("Carlos", "Welcome", "Bem-Vindo"));
        canais.add(new Sms("Mariane", "Volta vida", "(16) 99120-3090"));
        canais.add(new WhatsApp("Araki ", " Alerta severo de chuva na regiao"));

        for(Notifications mensagem: canais){
            mensagem.enviar();
        }
    }
}
