/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.portfolio.ag.Security.Service;

import com.portfolio.ag.Security.Entity.Usuario;
import com.portfolio.ag.Security.Repository.IUsuarioRepository;
import jakarta.transaction.Transactional;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class UsuarioService {
      @Autowired
      IUsuarioRepository iusuarioRepository;
      
      public Optional<Usuario> getByNombreUsuario(String nombreUsuario){
          return iusuarioRepository.findByNombreUsuario(nombreUsuario);
      }
      
      public boolean existisByNombreUsuario(String nombreUsuario){
          return iusuarioRepository.existsByNombreUsuario(nombreUsuario);
      }
      
       public boolean existisByEmail(String email){
          return iusuarioRepository.existsByEmail(email);
      }
       
       public void save(Usuario usuario){
           iusuarioRepository.save(usuario);
       }
}
