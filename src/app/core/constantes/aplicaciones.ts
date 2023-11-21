import { Aplicaciones } from "../interfaces/aplicaciones";
import { Descripcion } from "../interfaces/descripcion";
// constantes/aplicaciones.ts
export const aplicaciones: string[] = ['WhatsApp', 'Instagram', 'Snapchat', 'Youtube', 'Tik Tok', 'Outlook','Netflix','  Duolingo ','   Youtube', '  Chat Gpt  ','  Amazon Prime ','HBO MAX','PicsArt  ',' Mercado Pago ',' Smart Gym ', 'Gmail',' Google', 'F1 TV', 'X','EA FC 24','Call Of Duty III','Football Manager 24'];

export const APLICACIONES :Aplicaciones[]=[
    {
        id:1,
        nombre:"Whatsapp",
        ruta: 'https://www.whatsapp.com/?lang=es_LA',
        imagen:"data:image/jpeg;base64,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",
        tipo:"Comunicacion",
        link:"whatsapp.com",
        Precio: true ,
        descripcion:[{
            id:1,
            nombre:"Whatsapp",
            imagen:"data:image/jpeg;base64,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",
            tipo:"Comunicacion",
            link:"whatsapp.com",
            descripcion:"",
            

        }
        ],
    },
    {
        id:2,
        nombre:"Snapchat",
        ruta: '',
        imagen:"data:image/png;base64,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",
        tipo:"Fotografía y vídeo",
        link:"https://www.snapchat.com/es/download",
        Precio: true ,
        descripcion:[{
            id:2,
        nombre:"Snapchat",
        imagen:"data:image/png;base64,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",
        tipo:"Fotografía y vídeo",
        link:"https://www.snapchat.com/es/download",
        descripcion:`
        
        **Título:**
        Snapchat: Comparte Momentos Instantáneos
        
        **Descripción:**
        
        ¡Captura el instante y comparte tu vida de formas auténticas con Snapchat! Únete a la comunidad global donde cada Snap es una oportunidad para expresarte, divertirte y conectarte con amigos.
        
        **Funciones Destacadas:**
        
        📸 **Snaps Efímeros:**
        Envía fotos y videos que desaparecen en segundos. Cada momento es único, ¡y así lo son tus Snaps!
        
        👻 **Bitmojis y Filtros Divertidos:**
        Personaliza tus Snaps con Bitmojis y una amplia gama de filtros creativos. ¡Haz que cada mensaje sea único!
        
        🌐 **Historias Compartidas:**
        Comparte tus aventuras diarias en Historias que duran 24 horas. Conéctate con amigos y sigue a tus celebridades favoritas.
        
        👭 **Chat en Tiempo Real:**
        Chatea con amigos con mensajes de texto, fotos y videos. ¡La conversación en tiempo real hace que cada interacción sea más significativa!
        
        🌟 **Descubre Contenido Exclusivo:**
        Explora Discover para ver historias y contenidos exclusivos de tus creadores favoritos, noticias y eventos.
        
        **Privacidad y Seguridad:**
        
        🔒 **Controla Tu Privacidad:**
        Configura quién puede ver tus Snaps y tu Historia. ¡Tu privacidad está en tus manos!
        
        👁‍🗨 **Mapa de Snap:**
        Comparte tu ubicación con amigos cercanos y descubre lo que están haciendo. Siempre tienes el control.
        
        Snapchat es más que una aplicación; es un espacio para expresarte, mantenerte en contacto y explorar el mundo a través de los ojos de tus amigos. ¡Descarga Snapchat hoy y comienza a Snapchatear!
        `
        }],
    },
    {
        id:3,
        nombre:"Instagram",
        ruta: '',
        imagen:"https://img.freepik.com/vector-premium/vinnytsia-ucrania-27-abril-2023-icono-redes-sociales-populares-instagram-diseno-vectorial_545793-1681.jpg",
        tipo:"Fotografía y vídeo",
        link:"",
        Precio: true ,
        descripcion:[{
            id:3,
        nombre:"Instagram",
        imagen:"https://img.freepik.com/vector-premium/vinnytsia-ucrania-27-abril-2023-icono-redes-sociales-populares-instagram-diseno-vectorial_545793-1681.jpg",
        tipo:"Fotografía y vídeo",
        link:"",
        descripcion:""
        }],
    },
    {
        id:4,
        nombre:"Youtube",
        ruta: '',
        imagen:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/YouTube_social_white_squircle.svg/2048px-YouTube_social_white_squircle.svg.png",
        tipo:"Entretenimiento visual",
        link:"",
        Precio: true ,
        descripcion:[{
            id:4,
        nombre:"Youtube",
        imagen:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/YouTube_social_white_squircle.svg/2048px-YouTube_social_white_squircle.svg.png",
        tipo:"Entretenimiento visual",
        link:"",
        
        descripcion:`
        **Título:**
        Snapchat: Comparte Momentos Instantáneos
        
        **Descripción:**
        
        ¡Captura el instante y comparte tu vida de formas auténticas con Snapchat! Únete a la comunidad global donde cada Snap es una oportunidad para expresarte, divertirte y conectarte con amigos.
        
        **Funciones Destacadas:**
        
        📸 **Snaps Efímeros:**
        Envía fotos y videos que desaparecen en segundos. Cada momento es único, ¡y así lo son tus Snaps!
        
        👻 **Bitmojis y Filtros Divertidos:**
        Personaliza tus Snaps con Bitmojis y una amplia gama de filtros creativos. ¡Haz que cada mensaje sea único!
        
        🌐 **Historias Compartidas:**
        Comparte tus aventuras diarias en Historias que duran 24 horas. Conéctate con amigos y sigue a tus celebridades favoritas.
        
        👭 **Chat en Tiempo Real:**
        Chatea con amigos con mensajes de texto, fotos y videos. ¡La conversación en tiempo real hace que cada interacción sea más significativa!
        
        🌟 **Descubre Contenido Exclusivo:**
        Explora Discover para ver historias y contenidos exclusivos de tus creadores favoritos, noticias y eventos.
        
        **Privacidad y Seguridad:**
        
        🔒 **Controla Tu Privacidad:**
        Configura quién puede ver tus Snaps y tu Historia. ¡Tu privacidad está en tus manos!
        
        👁‍🗨 **Mapa de Snap:**
        Comparte tu ubicación con amigos cercanos y descubre lo que están haciendo. Siempre tienes el control.
        
        Snapchat es más que una aplicación; es un espacio para expresarte, mantenerte en contacto y explorar el mundo a través de los ojos de tus amigos. ¡Descarga Snapchat hoy y comienza a Snapchatear!
        `,

        }],
    },
    {
        id:5,
        nombre:"Tik Tok",
        ruta: '',
        imagen:"data:image/png;base64,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",
        tipo:"Entretenimiento visual",
        link:"",
        Precio: true ,
        descripcion:[{
            id:5,
            nombre:"Tik Tok",
            imagen:"data:image/png;base64,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",
            tipo:"Entretenimiento visual",
            link:"",
            descripcion:"",
        }],
    },
    {
        id:6,
        nombre:"Outlook",
        ruta: '',
        imagen:"https://play-lh.googleusercontent.com/AbbckPwXir54znQLkxMunKYPvoSW68gTZWZsx6URWlB-t_kUXZAvQOj8t4gnIncokVM",
        tipo:"Correo Electronico",
        link:"",
        Precio: true ,
        descripcion:[{
            id:6,
            nombre:"Outlook",
            imagen:"https://play-lh.googleusercontent.com/AbbckPwXir54znQLkxMunKYPvoSW68gTZWZsx6URWlB-t_kUXZAvQOj8t4gnIncokVM",
            tipo:"Correo Electronico",
            link:"",
            descripcion:"",
        }],
    },
    {
        id:7,
        nombre:"Duolingo",
        ruta: '',
        imagen:"https://play-lh.googleusercontent.com/YhLarJzcGXMVbd_QTpeiYp6Y9PEM-ZYGq-gDesjf-z4__ddN6TT6v5NWYq7E19hMNvkc",
        tipo:"Educacion",
        link:"",
        Precio: true ,
        descripcion:[{
            id:7,
            nombre:"Duolingo",
            imagen:"https://play-lh.googleusercontent.com/YhLarJzcGXMVbd_QTpeiYp6Y9PEM-ZYGq-gDesjf-z4__ddN6TT6v5NWYq7E19hMNvkc",
            tipo:"Educacion",
            link:"",
            descripcion:"",
        }],
    },
    {
        id:8,
        nombre:"Chat Gpt",
        ruta: '',
        imagen:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/1200px-ChatGPT_logo.svg.png",
        tipo:"Educacion",
        link:"",
        Precio: true ,
        descripcion:[{
            id:8,
            nombre:"Chat Gpt",
            imagen:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/1200px-ChatGPT_logo.svg.png",
            tipo:"Educacion",
            link:"",
            descripcion:"",
        }],
    },
    {
        id:9,
        nombre:"Netflix",ruta: '',
        imagen:"https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456",
        tipo:"Entretenimiento",
        link:"",
        Precio: true ,
        descripcion:[{
            id:9,
            nombre:"Netflix",
            imagen:"https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456",
            tipo:"Entretenimiento",
            link:"",
            descripcion:"",
        }],
    },
    {
        id:10,
        nombre:"Amazon Prime",ruta: '',
        imagen:"https://yt3.googleusercontent.com/pn_3JEt2nFaRA6dY08NzFM2w8A7NtUbaniamEnObxtLX3ZhT9w41KW0W0pjl-RiczGS0rgzZ=s900-c-k-c0x00ffffff-no-rj",
        tipo:"Entretenimiento",
        link:"",
        Precio: true ,
        descripcion:[{
            id:10,
            nombre:"Amazon Prime",
            imagen:"https://yt3.googleusercontent.com/pn_3JEt2nFaRA6dY08NzFM2w8A7NtUbaniamEnObxtLX3ZhT9w41KW0W0pjl-RiczGS0rgzZ=s900-c-k-c0x00ffffff-no-rj",
            tipo:"Entretenimiento",
            link:"",
            descripcion:"",
        }],
    },
    {
        id:11,
        nombre:"HBO MAX",ruta: '',
        imagen:"https://play-lh.googleusercontent.com/1iyX7VdQ7MlM7iotI9XDtTwgiVmqFGzqwz10L67XVoyiTmJVoHX87QtqvcXgUnb0AC8",
        tipo:"Entretenimento",
        link:"",
        Precio: true ,
        descripcion:[{
            id:11,
            nombre:"HBO MAX",
            imagen:"https://play-lh.googleusercontent.com/1iyX7VdQ7MlM7iotI9XDtTwgiVmqFGzqwz10L67XVoyiTmJVoHX87QtqvcXgUnb0AC8",
            tipo:"Entretenimento",
            link:"",
            descripcion:"",
        }],
    },
    {
        id:12,
        nombre:"PicsArt",ruta: '',
        imagen:"https://play-lh.googleusercontent.com/1JMJ518jogwPeaD0pYn2mBu1cRLD0xRi45wNbtTIRvam1_xx-y3KJOjRAx-W9P4Lf0U",
        tipo:"Editor de imagenes",
        link:"",
        Precio: true ,
        descripcion:[{
            id:12,
            nombre:"PicsArt",
            imagen:"https://play-lh.googleusercontent.com/1JMJ518jogwPeaD0pYn2mBu1cRLD0xRi45wNbtTIRvam1_xx-y3KJOjRAx-W9P4Lf0U",
            tipo:"Editor de imagenes",
            link:"",
            descripcion:"",
        }],
    },
    {
        id:13,
        nombre:"Mercado Pago",ruta: '',
        imagen:"https://mpago.co/assets/images/logomp.png",
        tipo:"Finanzas",
        link:"",
        Precio: true ,
        descripcion:[{
            id:13,
        nombre:"Mercado Pago",
        imagen:"https://mpago.co/assets/images/logomp.png",
        tipo:"Finanzas",
        link:"",
        
            descripcion:"",
        }],
    },
    {
        id:15,
        nombre:"Smart Gym",ruta: '',
        imagen:"https://www.appgefahren.de/wp-content/uploads/2023/06/SmartGym-Icon.jpeg",
        tipo:"Entrenamiento",
        link:"",
        Precio: false ,
        descripcion:[{
            
        id:15,
        nombre:"Smart Gym",
        imagen:"https://www.appgefahren.de/wp-content/uploads/2023/06/SmartGym-Icon.jpeg",
        tipo:"Entrenamiento",
        link:"",
        descripcion:"",

        }],
    },
    {
        id:16,
        nombre:"Gmail",ruta: '',
        imagen:"https://static.vecteezy.com/system/resources/previews/013/948/544/non_2x/gmail-logo-on-transparent-white-background-free-vector.jpg",
        tipo:"Comunicacion",
        link:"",
        Precio: true ,
        descripcion:[{
            id:16,
            nombre:"Gmail",
            imagen:"https://static.vecteezy.com/system/resources/previews/013/948/544/non_2x/gmail-logo-on-transparent-white-background-free-vector.jpg",
            tipo:"Comunicacion",
            link:"",
            descripcion:"",
        }
        ],
    },
    {
        id:17,
        nombre:"Google",ruta: '',
        imagen:"https://pbs.twimg.com/profile_images/1599827064282140672/MSxVR5u6_400x400.jpg",
        tipo:"Buscador",
        link:"",
        Precio: true ,
        descripcion:[{
            id:17,
        nombre:"Google",
        imagen:"https://pbs.twimg.com/profile_images/1599827064282140672/MSxVR5u6_400x400.jpg",
        tipo:"Buscador",
        link:"",
       
            descripcion:"",
        }],
    },
    {
        id:18,
        nombre:"X",ruta: '',
        imagen:"https://phantom-marca-mx.unidadeditorial.es/004bc1b3400e4dbcfb0ef463b8a614e3/resize/828/f/jpg/mx/assets/multimedia/imagenes/2023/07/23/16901448445410.jpg",
        tipo:"Comunicacion",
        link:"",
        Precio: true ,
        descripcion:[{
            id:18,
            nombre:"X",
            imagen:"https://phantom-marca-mx.unidadeditorial.es/004bc1b3400e4dbcfb0ef463b8a614e3/resize/828/f/jpg/mx/assets/multimedia/imagenes/2023/07/23/16901448445410.jpg",
            tipo:"Comunicacion",
            link:"",
            descripcion:"",
        }],
    },
    {
        id:19,
        nombre:"F1 TV",ruta: '',
        imagen:"https://cdn-7.motorsport.com/images/amp/68eyZ1B0/s3/f1-f1-logo-2017-f1-logo-6693340.jpg",
        tipo:"Entretenimiento",
        link:"",
        Precio: false ,
        descripcion:[{
            id:19,
        nombre:"F1 TV",
        imagen:"https://cdn-7.motorsport.com/images/amp/68eyZ1B0/s3/f1-f1-logo-2017-f1-logo-6693340.jpg",
        tipo:"Entretenimiento",
        link:"",
            descripcion:"",
        }],
    },
    {
        id:20,
        nombre:"EA FC 24",ruta: '',
        imagen:"https://i2-prod.mirror.co.uk/incoming/article30405878.ece/ALTERNATES/s1200c/0_preorder.jpg",
        tipo:"Arcade",
        link:"",
        Precio: false ,
        descripcion:[{
            id:20,
            nombre:"EA FC 24",
            imagen:"https://i2-prod.mirror.co.uk/incoming/article30405878.ece/ALTERNATES/s1200c/0_preorder.jpg",
            tipo:"Arcade",
            link:"",

            descripcion:"",
        }],
    },
    {
        id:21,
        nombre:"Call Of Duty III",ruta: '',
        imagen:"https://image.api.playstation.com/vulcan/img/cfn/11307CjjUZ9rA_whmJUghJsG9Hl1-rmnOUTk3-nccj01ZpYMCHrJ8k8kzBrVyp-p-iCPej73TEJAs88ZBeiZ1uirtj0fsa16.png",
        tipo:"Arcade",
        link:"",
        Precio: true ,
        descripcion:[{
            
            id:21,
            nombre:"Call Of Duty III",
            imagen:"https://image.api.playstation.com/vulcan/img/cfn/11307CjjUZ9rA_whmJUghJsG9Hl1-rmnOUTk3-nccj01ZpYMCHrJ8k8kzBrVyp-p-iCPej73TEJAs88ZBeiZ1uirtj0fsa16.png",
            tipo:"Arcade",
            link:"",
            descripcion:"",
        }],
    },
    {
        id:22,
        nombre:"Football Manager 24",
        ruta: '',
        imagen:"https://cdn.footballmanager.com/site/2023-09/FM24%20UCL%20Key%20Art%201%20Variations_Opengraph_8.jpg",
        tipo:"Arcade",
        link:"",
        Precio: true ,
        descripcion:[{
            id:22,
            nombre:"Football Manager 24",
            imagen:"https://cdn.footballmanager.com/site/2023-09/FM24%20UCL%20Key%20Art%201%20Variations_Opengraph_8.jpg",
            tipo:"Arcade",
            link:"",
            descripcion:"",
        }],
        
    },
]