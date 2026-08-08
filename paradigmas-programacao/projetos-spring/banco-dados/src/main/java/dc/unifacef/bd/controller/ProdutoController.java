package dc.unifacef.bd.controller;

import dc.unifacef.bd.model.Produto;
import dc.unifacef.bd.service.ProdutoService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/produtos")
public class ProdutoController {
    private final ProdutoService service;

    public ProdutoController(ProdutoService service) {
        this.service = service;
    }

    @GetMapping
    public ResponseEntity<List<Produto>> listar() {
        List<Produto> resposta = service.listar();
        return resposta.isEmpty()
                ? ResponseEntity.noContent().build()
                : ResponseEntity.ok(resposta);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Produto> buscarPorId(@PathVariable Long id) {
        return service.buscarPorId(id)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Produto> salvar(@RequestBody Produto produto){
        Produto novo = service.salvar(produto);
        URI uri = URI.create("/produtos/" + novo.getId());
        return ResponseEntity.created(uri).body(novo);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> remover(@PathVariable long id){
        if (service.remover(id)){
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }

    @PatchMapping("/{id}")
    public ResponseEntity<Produto> atualizar(@PathVariable Long id, @RequestBody Produto atual){
        Produto resposta = service.atualizar(id, atual);
        if (resposta == null){
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(resposta);
    }
}
