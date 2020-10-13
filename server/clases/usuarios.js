class Usuarios {
    constructor() {
        this.personas = [];
    }
    agregarPersona(id, nombre, sala) {
        let persona = {
            id,
            nombre,
            sala
        }
        this.personas.push(persona);
        return this.personas;

    }
    getPersona(id) {
        let persona = this.personas.filter(persona => persona.id === id)[0];
        return persona;

    }
    getPersonas() {
        return this.personas;

    }
    getPersonasPorSala(sala) {
        let personasEnSala = this.personas.filter(persona => persona.sala === sala);
        return personasEnSala;
    }
    borrarPersonas(id) {
        let personasBorrada = this.getPersona(id);
        this.personas.filter(persona => {
            return persona.id != id
        });
        return personasBorrada;
    }

}

module.exports = {
    Usuarios
}