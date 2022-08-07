    const menu = document.createElement("div");
    menu.setAttribute("id", "head_menu");
    document.getElementById("masthead").appendChild(menu);
    document.getElementById("masthead").setAttribute("style",  "padding-top: 35px" ) ;
    document.getElementById("guide-content").setAttribute("style",  "padding-top: 35px" ) ;

    const actions_container = document.createElement("div");
    actions_container.setAttribute("id", "actions_container");

    const back_btn = document.createElement("button");
    back_btn.setAttribute("id", "back_btn");
    const back_icon =  document.createElement("i");
    back_icon.setAttribute("id", "back_icon");
    back_icon.setAttribute("class", "fa fa-angle-double-left" );
    back_btn.appendChild(back_icon);
    actions_container.appendChild(back_btn);

    const reload_btn = document.createElement("button");
    reload_btn.setAttribute("id", "reload_btn");
    const reload_icon =  document.createElement("i");
    reload_icon.setAttribute("class", "fas fa-spinner" );
    reload_icon.setAttribute("id", "reload_icon");
    reload_btn.appendChild(reload_icon);
    actions_container.appendChild(reload_btn);

    const forward_btn = document.createElement("button");
    forward_btn.setAttribute("id", "forward_btn");
    const forward_icon =  document.createElement("i");
    forward_icon.setAttribute("class", "fa fa-angle-double-right" );
    forward_icon.setAttribute("id", "forward_icon");
    forward_btn.appendChild(forward_icon);
    actions_container.appendChild(forward_btn);

    menu.appendChild(actions_container);

    back_btn.addEventListener('click', function(){
      back_btn.setAttribute("class","back_clicked");
      setTimeout(() => {
        back_btn.removeAttribute("class");
        history.back();
      }, 500);
    });

    reload_btn.addEventListener('click', function(){
      reload_btn.setAttribute("class","reload_clicked");
      setTimeout(() => {
        reload_btn.removeAttribute("class");
      }, 1000);

      setTimeout(() => {
       history.go(0);
      }, 1500);

    });

    forward_btn.addEventListener('click', function(){
      forward_btn.setAttribute("class","forward_clicked");
      setTimeout(() => {
        forward_btn.removeAttribute("class");
        history.forward();
      }, 500);
    });
