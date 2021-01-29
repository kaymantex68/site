module.exports = (props) => {
    
    
    return `
    < !DOCTYPE HTML >
        <html>
            <head>
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
                    <title>Пример веб-страницы</title>
     </head>
                <body>
                    
                    <h1>${props[0].model}</h1>
                    <img src="__dirname/../../client/public/img_products/Atis/AD-750FHD S-Black/1.jpg"/>
                    <!-- Комментарий -->
      <p>Первый абзац.</p>
                    <p>Второй абзац.</p>
                </body>
    </html>
    `
}