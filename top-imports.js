    const font_awesome = document.createElement("link");
    const font_awesome_js = document.createElement("script");
    const top_red_styles = document.createElement("link");
    const top_menu_js = document.createElement("script");

    font_awesome.setAttribute("rel", "stylesheet" );
    font_awesome.setAttribute("href", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" );

    font_awesome_js.setAttribute("src", "https://gitcdn.link/cdn/rakitind00/testpogest/main/fontawesome.js" );
    font_awesome_js.setAttribute("crossorigin","anonymous");

    top_menu_js.setAttribute("src", "https://gitcdn.link/cdn/rakitind00/testpogest/56d037f4c05a89024785b1a65315d898f3079861/top-menu.js" );
    top_menu_js.setAttribute("crossorigin","anonymous");

    top_red_styles.setAttribute("rel", "stylesheet");
    top_red_styles.setAttribute("href", "https://gitcdn.link/cdn/rakitind00/testpogest/6deaa7b13cca6a584ee423d04dd7210fbb09e5ac/red_top_menu.css");

    document.head.appendChild(font_awesome);
    document.head.appendChild(font_awesome_js);
    document.head.appendChild(top_red_styles);
    document.head.appendChild(top_menu_js);
