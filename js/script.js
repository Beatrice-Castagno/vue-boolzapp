var app = new Vue (
  {
    el: "#app",
    data: {
    avatarUtente: "img/avatar_io.jpg",
    nomeUtente: "Beatrice Castagno",
    contacts: [
        {
            name: 'Michele',
            avatar: '_1',
            visible: true,
            colore: "white",
            messages: [{
                date: '10/01/2020 15:30:55',
                message: 'Hai portato a spasso il cane?',
                status: 'sent'
            },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'Ricordati di dargli da mangiare',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 16:15:22',
                    message: 'Tutto fatto!',
                    status: 'received'
                }
            ],
        },
        {
            name: 'Fabio',
            avatar: '_2',
            visible: true,
            colore: "white",
            messages: [{
                date: '20/03/2020 16:30:00',
                message: 'Ciao come stai?',
                status: 'sent'
            },
                {
                    date: '20/03/2020 16:30:55',
                    message: 'Bene grazie! Stasera ci vediamo?',
                    status: 'received'
                },
                {
                    date: '20/03/2020 16:35:00',
                    message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                    status: 'sent'
                }
            ],
        },
        {
            name: 'Samuele',
            avatar: '_3',
            visible: true,
            colore: "white",
            messages: [{
                date: '28/03/2020 10:10:40',
                message: 'La Marianna va in campagna',
                status: 'received'
            },
                {
                    date: '28/03/2020 10:20:10',
                    message: 'Sicuro di non aver sbagliato chat?',
                    status: 'sent'
                },
                {
                    date: '28/03/2020 16:15:22',
                    message: 'Ah scusa!',
                    status: 'received'
                }
            ],
        },
        {
            name: 'Luisa',
            avatar: '_4',
            visible: true,
            colore: "white",
            messages: [{
                date: '10/01/2020 15:30:55',
                message: 'Lo sai che ha aperto una nuova pizzeria?',
                status: 'sent'
            },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'Si, ma preferirei andare al cinema',
                    status: 'received'
                }
            ],
        },
    ],
    chatVisualizzata: {},
    nuovoMessaggio: "",
  },
    methods: {
      viewConversation: function (element) {
       this.chatVisualizzata = element;
     },

      getContact: function() {
        return this.contacts[0];
      },

      cambiaColore: function (element) {
        this.contacts.forEach((item, i) => {
          item.colore = 'white';
        });
        element.colore = 'lightgrey';
      },


      sentMsg: function () {
       if (this.nuovoMessaggio !== "") {
         this.chatVisualizzata.messages.push({
           date: dayjs().format("DD/MM/YYYY HH:mm:ss"),
           message: this.nuovoMessaggio,
           status: 'sent'
         });
         this.nuovoMessaggio = "";

        const messages = this.chatVisualizzata.messages;

         setTimeout(function(){
             messages.push({
               date: dayjs().format("DD/MM/YYYY HH:mm:ss"),
               message: "Ok",
               status: 'received'
             });
         }, 2000);
       }
     }

    },

    created: function () {
      this.chatVisualizzata = this.getContact();
    }
  },
);
