const Koa = require('koa')
const app = new Koa();
app.use(ctx =>{

    ctx.body = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <script src="https://unpkg.com/css-doodle@0.28.1/css-doodle.min.js"></script>
        <style>
            :root{ 
                --customUnit:100%; 
                --bgColor:#0a0c27;
            }
            @suppress(display:flex){
                html,body{
                    display:flex;
                    align-items:center;
                    justify-content:center;
                }
            }
            html,body{
                width:var(--customUnit);
                height:var(--customUnit);
                background:var(--bgColor);
                
            }
          
        </style>
    </head>
    <body>
        <css-doodle>
            :doodle{@grid:1 x 10px/61.8vmax;}
            @place-cell:center;
            @size:calc(@index()*10%);
            border-width:calc(@index()*1vmin);
            border-style:dashed;
            border-color:hsla(calc(20*@index()),70%,68%,calc(3/@index()*.8));
            border-radius:50%;
            --d:@rand(20s,40s);
            --rf:@rand(360deg);
            --rt:calc(var(--rt)+@pick(1turn,-1turn));
            animation:spin var(--d) linear infinite;
            @keyframes spin{
                from{
                    transform:rotate(var(--rf));
                }
                to{
                    transform:rotate(var(--rt));
                }
            }
        </css-doodle>
        <div id="app"></div>
        <script src="./bundle.js"></script>
    </body>
    </html>`
})

app.listen(3000,()=>{
    console.log('启动了')
})