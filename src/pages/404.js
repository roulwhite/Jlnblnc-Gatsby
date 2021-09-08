import React from "react";
import Layout from "components/Layout";

const NotFoundPage = () => (
    <Layout>
      <script async defer src="https://static.cdn.prismic.io/prismic.js?new=true&repo=jlnblnc"></script>
        <h1>
            PAGE INCONNUE
        </h1>
        <p>
            Oupsie, il semblerait que cette page n'existe pas. Le mieux, c'est de retourner à <a href="../">l'accueil</a>, n'est-ce pas ?
        </p>
    </Layout>
)

export default NotFoundPage;
