package dc.unifacef.ExemploMemoria.clientes.service;

import dc.unifacef.ExemploMemoria.clientes.model.Cliente;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ClienteService {

    private final List<Cliente> clientes = new ArrayList<>();
    private long nextId = 1;

    public List<Cliente> listar() {
        return new ArrayList<>(clientes);
    }

    public Cliente criar(Cliente c) {
        c.setId(nextId++);
        clientes.add(c);
        return c;
    }

    public Cliente buscarPorId(Long id) {
        return clientes.stream()
                .filter(cliente -> cliente.getId().equals(id))
                .findFirst()
                .orElse(null);
    }

    public boolean remover(Long id) {
        return clientes.removeIf(cliente -> cliente.getId().equals(id));
    }

    public Cliente atualizar(Long id, Cliente novo) {
        Cliente existente = buscarPorId(id);
        if (existente == null) {
            return null;
        }
        existente.setNome(novo.getNome());
        existente.setEmail(novo.getEmail());
        existente.setIdade(novo.getIdade());
        return existente;
    }
}
