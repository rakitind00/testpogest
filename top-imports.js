    const font_awesome = document.createElement("link");
    const font_awesome_js = document.createElement("script");
    const top_red_styles = document.createElement("link");
    const top_menu_js = document.createElement("script");

    font_awesome.setAttribute("rel", "stylesheet" );
    font_awesome.setAttribute("href", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" );

    font_awesome_js.setAttribute("src", "https://gitcdn.link/cdn/rakitind00/testpogest/main/fontawesome.js" );
    font_awesome_js.setAttribute("crossorigin","anonymous");

    top_menu_js.setAttribute("src", "https://cdn.jsdelivr.net/gh/rakitind00/testpogest@main/top-menu.js" );
    top_menu_js.setAttribute("crossorigin","anonymous");

    top_red_styles.setAttribute("rel", "stylesheet");
    top_red_styles.setAttribute("href", "https://gitcdn.link/cdn/rakitind00/testpogest/d8e63727a69ec51b433282f7a656a30932dd3716/red_top_menu.css");

    document.head.appendChild(font_awesome);
    document.head.appendChild(font_awesome_js);
    document.head.appendChild(top_red_styles);
    document.head.appendChild(top_menu_js);
