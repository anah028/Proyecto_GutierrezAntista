/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.portfolio.ag.Interface;

import com.portfolio.ag.Entity.Persona;
import java.util.List;

/**
 *
 * @author anilu
 */
public interface IPersonaService {
    //traer una personas//
    public List <Persona> getPersona();
    
    //Guardar un objeto de tipo persona//
    public void savePersona(Persona persona);
    
    //Eliminar un objeto pero lo buscamos por ID//
    public void deletePersona(Long id);
    
    //Buscar una persona por id//
    public Persona findPersona(Long id);
    
}
