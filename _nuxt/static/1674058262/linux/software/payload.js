__NUXT_JSONP__("/linux/software", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T){return {data:[{document:{slug:"software",description:"This wiki is meant to be the extended documentation for both end users and developers, so it is separated in those two categories.",title:"Software and package management",position:22,category:"Linux Concepts",toc:[{id:F,depth:y,text:G},{id:H,depth:y,text:I},{id:z,depth:t,text:A},{id:J,depth:t,text:B},{id:K,depth:t,text:L},{id:M,depth:y,text:N},{id:O,depth:t,text:P},{id:Q,depth:t,text:R}],body:{type:"root",children:[{type:b,tag:e,props:{},children:[{type:a,value:"There are many different ways to install software on Linux."}]},{type:a,value:c},{type:b,tag:C,props:{id:F},children:[{type:b,tag:j,props:{ariaHidden:k,href:"#the-system-package-manager",tabIndex:l},children:[{type:b,tag:d,props:{className:[m,n]},children:[]}]},{type:a,value:G}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Most software is installed using the system package manager. There are many different package managers, and each one has its own unique features and benefits, such as:"}]},{type:a,value:c},{type:b,tag:S,props:{},children:[{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"APT (Used by Debian, Ubuntu, and many other Linux distributions)"}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"Pacman (Used by Arch Linux)"}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"Yum (Used by older versions of Fedora and Red Hat)"}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"DNF (Used by Fedora)"}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"XBPS (Used by Void Linux)"}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"Portage (Used by Gentoo, and Chrome OS)"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Ultramarine Linux is based on Fedora, and thus uses the DNF package manager."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"To install an RPM package from the Ultramarine and Fedora repositories, use the "},{type:b,tag:h,props:{},children:[{type:a,value:"dnf"}]},{type:a,value:D}]},{type:a,value:c},{type:b,tag:o,props:{className:[p]},children:[{type:b,tag:q,props:{className:[r,s]},children:[{type:b,tag:h,props:{},children:[{type:b,tag:d,props:{className:[f,i]},children:[{type:a,value:u}]},{type:a,value:E},{type:b,tag:d,props:{className:[f,i]},children:[{type:a,value:w}]},{type:a,value:" steam "},{type:b,tag:d,props:{className:[f,x]},children:[{type:a,value:"# Install Steam"}]},{type:a,value:c}]}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"You can also install groups of packages, like full desktop environments or a suite of tools for music production, using the "},{type:b,tag:h,props:{},children:[{type:a,value:"dnf groupinstall"}]},{type:a,value:D}]},{type:a,value:c},{type:b,tag:o,props:{className:[p]},children:[{type:b,tag:q,props:{className:[r,s]},children:[{type:b,tag:h,props:{},children:[{type:b,tag:d,props:{className:[f,i]},children:[{type:a,value:u}]},{type:a,value:" dnf groupinstall "},{type:b,tag:d,props:{className:[f,"string"]},children:[{type:a,value:"\"Audio Production\""}]},{type:a,value:" "},{type:b,tag:d,props:{className:[f,x]},children:[{type:a,value:"# installs multiple packages at once, in this case a suite of music\u002Faudio production tools"}]},{type:a,value:c}]}]}]},{type:a,value:c},{type:b,tag:C,props:{id:H},children:[{type:b,tag:j,props:{ariaHidden:k,href:"#other-package-managers",tabIndex:l},children:[{type:b,tag:d,props:{className:[m,n]},children:[]}]},{type:a,value:I}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"You can also install software using other package managers."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"There are many different user-only package managers, such as:"}]},{type:a,value:c},{type:b,tag:S,props:{},children:[{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:B}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:A}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"Steam (For games)"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:v,props:{id:z},children:[{type:b,tag:j,props:{ariaHidden:k,href:"#flatpak",tabIndex:l},children:[{type:b,tag:d,props:{className:[m,n]},children:[]}]},{type:a,value:A}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Flatpak is supported out of the box in Ultramarine Linux. To install a Flatpak app, open GNOME Software or AppCenter, or use the "},{type:b,tag:h,props:{},children:[{type:a,value:z}]},{type:a,value:D}]},{type:a,value:c},{type:b,tag:v,props:{id:J},children:[{type:b,tag:j,props:{ariaHidden:k,href:"#snap",tabIndex:l},children:[{type:b,tag:d,props:{className:[m,n]},children:[]}]},{type:a,value:B}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Snap is a package manager made by Canonical for Ubuntu. It was created to make deploying serverside services easier, and it is also used for GUI applications."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"To get started, install Snap."}]},{type:a,value:c},{type:b,tag:o,props:{className:[p]},children:[{type:b,tag:q,props:{className:[r,s]},children:[{type:b,tag:h,props:{},children:[{type:b,tag:d,props:{className:[f,i]},children:[{type:a,value:u}]},{type:a,value:E},{type:b,tag:d,props:{className:[f,i]},children:[{type:a,value:w}]},{type:a,value:" snapd "},{type:b,tag:d,props:{className:[f,x]},children:[{type:a,value:"# Install Snap"}]},{type:a,value:c}]}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Then, open the Snap store and search for the app you want to install."}]},{type:a,value:c},{type:b,tag:o,props:{className:[p]},children:[{type:b,tag:q,props:{className:[r,s]},children:[{type:b,tag:h,props:{},children:[{type:b,tag:d,props:{className:[f,x]},children:[{type:a,value:"# Install VLC media player"}]},{type:a,value:c},{type:b,tag:d,props:{className:[f,i]},children:[{type:a,value:u}]},{type:a,value:" snap "},{type:b,tag:d,props:{className:[f,i]},children:[{type:a,value:w}]},{type:a,value:" vlc\n"}]}]}]},{type:a,value:c},{type:b,tag:v,props:{id:K},children:[{type:b,tag:j,props:{ariaHidden:k,href:"#steam",tabIndex:l},children:[{type:b,tag:d,props:{className:[m,n]},children:[]}]},{type:a,value:L}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"To install a game on Steam, first install Steam."}]},{type:a,value:c},{type:b,tag:o,props:{className:[p]},children:[{type:b,tag:q,props:{className:[r,s]},children:[{type:b,tag:h,props:{},children:[{type:b,tag:d,props:{className:[f,i]},children:[{type:a,value:u}]},{type:a,value:E},{type:b,tag:d,props:{className:[f,i]},children:[{type:a,value:w}]},{type:a,value:" steam\n"}]}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Then, open the Steam store and search for the game you want to install."}]},{type:a,value:c},{type:b,tag:C,props:{id:M},children:[{type:b,tag:j,props:{ariaHidden:k,href:"#other-installation-methods",tabIndex:l},children:[{type:b,tag:d,props:{className:[m,n]},children:[]}]},{type:a,value:N}]},{type:a,value:c},{type:b,tag:v,props:{id:O},children:[{type:b,tag:j,props:{ariaHidden:k,href:"#appimages",tabIndex:l},children:[{type:b,tag:d,props:{className:[m,n]},children:[]}]},{type:a,value:P}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"AppImages are self-contained binaries that are packaged with their own dependencies. To use an AppImage, simply download it, and then execute it by double-clicking it or using the command line."}]},{type:a,value:c},{type:b,tag:o,props:{className:[p]},children:[{type:b,tag:q,props:{className:[r,s]},children:[{type:b,tag:h,props:{},children:[{type:a,value:".\u002FbalenaEtcher.AppImage\n"}]}]}]},{type:a,value:c},{type:b,tag:v,props:{id:Q},children:[{type:b,tag:j,props:{ariaHidden:k,href:"#install-from-source",tabIndex:l},children:[{type:b,tag:d,props:{className:[m,n]},children:[]}]},{type:a,value:R}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Sometimes, software is not available in a package, and you need to build it from source."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"To do this, follow the developer's instructions and build the software yourself."}]}]},dir:"\u002Fen\u002Flinux",path:"\u002Fen\u002Flinux\u002Fsoftware",extension:".md",createdAt:T,updatedAt:T,to:"\u002Flinux\u002Fsoftware"},prev:{title:"Permissions",path:"\u002Fen\u002Flinux\u002Fpermissions",to:"\u002Flinux\u002Fpermissions"},next:{title:"The Shell",path:"\u002Fen\u002Flinux\u002Fshell",to:"\u002Flinux\u002Fshell"}}],fetch:{},mutations:[]}}("text","element","\n","span","p","token","li","code","function","a","true",-1,"icon","icon-link","div","nuxt-content-highlight","pre","language-bash","line-numbers",3,"sudo","h3","install","comment",2,"flatpak","Flatpak","Snap","h2"," command."," dnf ","the-system-package-manager","The system package manager","other-package-managers","Other package managers","snap","steam","Steam","other-installation-methods","Other installation methods","appimages","AppImages","install-from-source","Install from source","ul","2023-01-18T16:10:09.713Z")));