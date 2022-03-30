var app = new Vue(
    {
        el:'#root',
        data: {
            content: 'Hello World!',
            //essendo un array lo posso richiamare con 'classi' = le prendo tutte 
            //oppure classi[0] e prendo solo il primo..ecc
            classi: ['color-red','color-blu'],
            numero: 1
        },
        methods: {
            saluta : function() {
                // let test = this.content
                if (this.content == 'Hello World!') {
                    this.content = 'ciao due'
                }        
                //return test
                return this.content
            }
        } 
    }
);