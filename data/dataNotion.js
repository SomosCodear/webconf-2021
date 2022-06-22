import {Client} from '@notionhq/client';

const notion = new Client({
    auth:process.env.NOTION_SECRET,
});

export const datosFormPostulante = (data)=>{
    if(data){
        return {
        title:data.speakerName,
        body:data.extra,
        fechaPostulacion:(new Date().toLocaleDateString("sv")).toString(),
        email: data.speakerEmail,
        mayorEdad: data.speakerIsAdult,
        lugarResidencia: data.speakerCity
      }
    }
};
export const datosFormPropuesta = (data, idPostulante)=>{
    if(data && idPostulante){
        return {
            title:data.talkTitle,
            body:data.talkSummary,
            tipoCharla: data.talkLength,
            descripcionCorta: data.talkTweet,
            idPostulante: idPostulante
      }
    }
};

export const guardarPropuesta = async (data) => {
    try {
    
        const response = await notion.pages.create({
            parent: { database_id: process.env.DATABASE_PROPUESTA_ID },
            properties: {
                Title: {
                    title: [
                        {
                            type: "text",
                            text: {
                                content: data.title
                            }
                        }
                    ]
                },
                Body: {
                    rich_text: [
                        {
                            type: "text",
                            text: {
                                content: data.body
                            }
                        }
                    ]
                },
                "Tipo de charla": {
                    select: {
                        name: data.tipoCharla
                    }
                },
                "Descripción corta": {
                    rich_text: [
                        {
                            type: "text",
                            text: {
                                content: data.descripcionCorta
                            }
                        }
                    ]
                },
                "Postulante":{
                    relation: [
                        {
                            id: data.idPostulante
                        }
                    ]
                }
            }
        })
    
        return response
    } catch (error) {
        return false
    }
}

export const guardarPostulante = async (data) => {
    try {
        const response = await notion.pages.create({
            parent: { database_id: process.env.DATABASE_POSTULANTES_ID },
            properties: {
                Title: {
                    title: [
                        {
                            type: "text",
                            text: {
                                content: data.title
                            }
                        }
                    ]
                },
                Body: {
                    rich_text: [
                        {
                            type: "text",
                            text: {
                                content: data.body
                            }
                        }
                    ]
                },
                "Fecha de postulación": {
                    date: {
                        start: data.fechaPostulacion
                    }
                },
                Email: {
                    email: data.email
                },
                "¿Mayor de edad?":{
                    checkbox: data.mayorEdad
                },
                "Lugar de residencia":{
                    "multi_select": [
                        {
                          name: data.lugarResidencia
                        },
                      ]
                }
            }
        })
    
        return response
    } catch (error) {
        return false
    }
}

export const guardarBSNotion = async (data) =>{
    try {
        const dataPostulanteForm = datosFormPostulante(data);
        const existeMail = await verificarEmail(dataPostulanteForm.email);
        let idPostulante = null;
        if(!existeMail){
            const saveDataPostulante = await guardarPostulante(dataPostulanteForm)
            idPostulante = saveDataPostulante?.id;
        }else{
            idPostulante = existeMail;
        }
        const dataPropuestaForm = datosFormPropuesta(data, idPostulante);
        await guardarPropuesta(dataPropuestaForm);
        return true
    } catch (error) {
        return false
    }
}

export const verificarEmail = async (email) =>{
    try {
        const response = await notion.databases.query({
            database_id: process.env.DATABASE_POSTULANTES_ID ,
            filter:{
                property: "Email",
                email: {
                    equals: email
                }
            }
          })
        if( response.results.length !== 0 ){
            return response.results[0].id
        }else{
            return false
        }
    } catch (error) {
        return false
    }
}