public class SmartHomeTest {
    public static void main(String[] args) {
        System.out.println("TESTE DA FECHADURA ELETRÔNICA\n");

        FechaduraEletronica fechadura = new FechaduraEletronica("1234");
        System.out.println("Estado inicial: " + fechadura);

        System.out.println("\nTentando ligar sem autenticação");
        fechadura.ligar();

        System.out.println("\nAutenticando com senha correta");
        fechadura.validarAcesso("1234");

        System.out.println("\nligando (destrancando)");
        fechadura.ligar();

        System.out.println("\nDesligando (trancando)");
        fechadura.desligar();

        System.out.println("\nTentando autenticar com senha errada");
        fechadura.validarAcesso("4321");

        System.out.println("\nEstado final: " + fechadura);

        System.out.println("\n\nTESTE DO TERMOSTATO SMART\n");

        TermostatoSmart termostato = new TermostatoSmart();
        System.out.println("Estado inicial: " + termostato);

        System.out.println("\nTentando ler temperatura desligado");
        termostato.lerTemperatura();

        System.out.println("\nLigando o termostato");
        termostato.ligar();

        System.out.println("\nLendo temperatura (2x)");
        termostato.lerTemperatura();
        termostato.lerTemperatura();

        System.out.println("\nDesligando o termostato");
        termostato.desligar();

        System.out.println("\nTentando ler novamente");
        termostato.lerTemperatura();

        System.out.println("\nEstado final: " + termostato);
    }
}