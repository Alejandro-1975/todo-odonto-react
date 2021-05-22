export default  [ 
    // hay que crear una lista de las diferentes disciplinas para que el usuario clickee y tome la opcion del curso que es
     // hay que crear una lista con el modalidad del curso que es
     // de estos datos debemos crear filtros de busqueda
    {
      "id": "1",
      "ramaOdontologia": "OPERATORIA DENTAL - ESTÉTICA DENTAL", //DEBE VENIR DE UN LISTADO DE ramas de la odontologia de las cuales se pueden elegir 2 o 3
        "modalidad": "TEORICO", // DEBE VENIR DE UN LISTADO DE MODALIDADES
        "name":"Estetica de  la Sonrisa en pacientes con fluorosis",
        "dictantes": "Pedro Herrera-Marcos Sandunga",
        "detalle" : "Ingrese aquí y encontrará todo lo que necesite en insumos de odontología",
         "imagen" : "http://localhost:3000/images/curso-endodoncia.jpg",
         "fechaRealizacion": "17/02/2022", //una vez pasada esa fecha debe caducar la muestra del mismo, salvo que el usuario ingrese fecha nueva previo aviso del mismo.
         "cargaHoraria": "8 hs",
         "lugar": "Circulo Odontologico Santafesino",
         "temario" : "1- Parametros Esteticos - 2- Metodos",
         "precio": "$10000",
         "formasDePago": "Tarjetas-Link pagos", //crear listado de formas de pago
   },

 { "id": "2",      
   "ramaOdontologia": "ENDODONCIA", //DEBE VENIR DE UN LISTADO DE ramas de la odontologia de las cuales se pueden elegir 2 o 3
            "modalidad": "TEORICO-WORKSHOP", // DEBE VENIR DE UN LISTADO DE MODALIDADES
            "name":"Curso de Post-Grado en endodoncia en elementos multirradiculares",
            "dictantes": "Dra. Paola Lammertyn- Dra. Monica Arca",
            "detalle" : "Curso de Posgrado en Endodoncia en Elementos Multiradiculares. Basado en la transferencia a la práctica clínica de las investigaciones científicas actuales y de los nuevos instrumentos de trabajo.",
            "imagen" : "http://localhost:3000/images/curso-endodoncia.jpg",
            "fechaRealizacion": "19/05/2021", //una vez pasada esa fecha debe caducar la muestra del mismo, salvo que el usuario ingrese fecha nueva previo aviso del mismo.
            "cargaHoraria": "110 hs",
            "duracionSesiones" : "10 meses. 5 sesiones teoricas online. 5 sesiones full práctica",
            "lugar": "Fundación CREO",
            "temario" : "ver temarios",
            "precio": "$10000",
            "formasDePago": "Tarjetas-Link pagos", //crear listado de formas de pago
},
]