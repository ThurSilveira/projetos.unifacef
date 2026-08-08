package dc.unifacef.ExemploMemoria.controller;

import dc.unifacef.ExemploMemoria.model.Produto;
import dc.unifacef.ExemploMemoria.service.ProdutoService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.ArrayList;

@RestController
@RequestMapping("/produtos")
public class ProdutoController {
    private final ProdutoService service;

    public ProdutoController(ProdutoService service) {
        this.service = service;
    }

    @GetMapping
    public ResponseEntity<ArrayList<Produto>> listar() {
        return ResponseEntity.ok(service.listar());
    }

    @PostMapping
    public ResponseEntity<Produto> criar(@RequestBody Produto produto) {
        Produto novo = service.criar(produto);
        URI uri = URI.create("/produtos/" + novo.getId());
        return ResponseEntity.created(uri).body(novo);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> remover(@PathVariable Long id) {
        return service.remover(id)
                ? ResponseEntity.noContent().build()
                : ResponseEntity.notFound().build();
    }

    @PatchMapping("/{id}")
    public ResponseEntity<Produto> atualizar(@PathVariable Long id, @RequestBody Produto novo) {
        Produto resposta = service.atualizar(id, novo);
        return (resposta != null) ? ResponseEntity.ok(resposta) : ResponseEntity.notFound().build();
    }
}
