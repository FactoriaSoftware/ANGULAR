export class Solicitud {
    // Modelo de solicitud
    constructor(
    public    nombreEst2:  String,
    public    codigoEst2:  String,  
    public    identificacionEst2:  String,  
    public    programaEst2:  String,  
    public    correoEst2:  String,

    public    nombreEst3:  String,
    public    codigoEst3:  String,  
    public    identificacionEst3:  String,  
    public    programaEst3:  String,  
    public    correoEst3:  String,      
     
    public    titulo_proyecto:  String,
    public    linea_investigacion:  String,
    public    director_proyecto:  String,
    public    formulacion_problema:  String,
    public    alcance_limitaciones:  String,
    public    metodologia:  String,

    public    tutor?: String,

    
    public    anteproyecto?:  String,
    public    estado_anteproyecto?:String,
    public    notaAnteproyecto?:String,

    public    proyecto?:  String,
    public    estado_proyecto?:String,
    public    notaProyecto?:String,

    public    documento_final?:  String,
    public    estado_documento_final?:  String,
    public    notaDocumentoFinal?:  String,


    public    notas?:  String,
    public    estado?:  String
    
        ) {}
  }
  