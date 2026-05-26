package dc.unifacef.bd.controller;
import dc.unifacef.bd.model.Produto;
import dc.unifacef.bd.service.ProdutoService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/produtos")
public class ProdutoController {// este classe vai usar o ProdutoService explorando a injeção de dependencia pelo construtor
    ProdutoService service;
    public ProdutoController(ProdutoService service) {
        this.service = service;
    }

    @GetMapping
    public ResponseEntity<List<Produto>> listar(){
        List<Produto> resposta = service.listar();
        if (!resposta.isEmpty()){
            return ResponseEntity.ok(resposta); // 200
        }
        return ResponseEntity.noContent().build(); // 204
    }

    @GetMapping("/{id}")
    public ResponseEntity<Optional<Produto>> buscarPorId(@PathVariable Long id){
        Optional<Produto> resposta = service.buscarPorId(id);
        if (!resposta.isPresent()){
            return ResponseEntity.ok(resposta); // 200
        }
        return ResponseEntity.notFound().build(); // 404
    }
}
