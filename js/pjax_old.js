// 对所有链接跳转事件绑定pjax容器container
$(document).pjax('a[target!=_blank]', '#container', {fragment:'#container', timeout:8000})

$(document).on('pjax:complete', function() {
    Fluid.boot.registerEvents();

    Fluid.boot.refresh()
    
    document.querySelectorAll("script[data-pjax], .pjax-reload script").forEach(function (e) {
        var id = e.id || "";
        var src = e.src || "";
        var code = e.text || e.textContent || e.innerHTML || "";
        var parent = e.parentNode;
        var script = document.createElement("script");

        parent.removeChild(e);

        if (id !== "") {
            script.id = e.id;
        }

        if (src !== "") {
            script.src = src;
            script.async = false;
        }

        if (code !== "") {
            script.appendChild(document.createTextNode(code));
        }

        parent.appendChild(script);
    });

    // document.querySelectorAll("script").forEach(function (e) {
    //     var id = e.id || "";
    //     var src = e.src || "";
    //     var code = e.text || e.textContent || e.innerHTML || "";
    //     var parent = e.parentNode;

    //     list = ["https://lib.baomitu.com/tocbot/4.20.1/tocbot.min.js", "https://cdn.staticfile.org/waline/2.15.5/waline.min.js"]
        
    //     list.forEach(function (url){
    //         if (src === url) {
    //             console.log(src);
    //             console.log(parent);
    //             console.log(e);
    //             parent.removeChild(e);
    //         }
    //     });
    // });



    // lazyload

    // leancloud
})
