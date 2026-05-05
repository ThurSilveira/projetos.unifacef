package dc.unifacef.ExemploMemoria.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController // classe responsavel por controlar requisição
@RequestMapping("/produto")
public class ProdutoController {

    // Requisição pelo verbo GET
    @GetMapping
    public String mensagem(){
        return "Hello Produtos";
    }
}
