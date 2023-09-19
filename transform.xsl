<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

  <xsl:template match="/">
    <html>
      <head>
        <title>Canine Details</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous"></link>
      </head>
      <style>
        table,
       th,
       td {
         color: white;
         border: 1px solid black;
         border-color:white;
         margin-left: auto;
         border:1;
         margin-right: auto;
         width: 800px;
         text-align: center;
         font-size: 20px;
       }
       body {
         margin: 40px;
         padding: 40px;
         background-color:rgb(125, 116, 116);
       }
   
       h1 {
         color :white;
         display: flex;
         justify-content: center;
       }
       footer {
        position: fixed;
        bottom: 0;
        width: 100%;
    }
   </style>
      <body>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">WaggingTales</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="index.html">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="feedback.html">FeedBack</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="output.html">Canine Catalog</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <br></br>
        <h1>Canine Details</h1>
        <table>
          <tr>
            <th>Breed</th>
            <th>Color</th>
            <th>Country</th>
          </tr>
          <xsl:for-each select="canines/canine">
            <tr>
              <td><xsl:value-of select="breed"/></td>
              <td><xsl:value-of select="color"/></td>
              <td><xsl:value-of select="country"/></td>
            </tr>
          </xsl:for-each>
        </table>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
    crossorigin="anonymous"></script>
    <footer class="bg-primary-subtle text-center text-lg-start">
        <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
          © 2023 Copyright:
          <a class="text-dark" href="#">Ansh Bhandari</a>
        </div>
      </footer>
      </body>
    </html>
  </xsl:template>
  
</xsl:stylesheet>
