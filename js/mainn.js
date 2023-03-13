function switchNightMode() {
  document.querySelector("body").insertAdjacentHTML("beforeend", '<div class="Cuteen_DarkSky"><div class="Cuteen_DarkPlanet"></div></div>'),
  setTimeout((function() {
      document.querySelector("body").classList.contains("DarkMode") ? (document.querySelector("body").classList.remove("DarkMode"),
      localStorage.setItem("isDark", "0"),
      document.getElementById("modeicon").setAttribute("xlink:href", "#icon-moon")) : (document.querySelector("body").classList.add("DarkMode"),
      localStorage.setItem("isDark", "1"),
      document.getElementById("modeicon").setAttribute("xlink:href", "#icon-sun")),
      setTimeout((function() {
          document.getElementsByClassName("Cuteen_DarkSky")[0].style.transition = "opacity 3s",
          document.getElementsByClassName("Cuteen_DarkSky")[0].style.opacity = "0",
          setTimeout((function() {
              document.getElementsByClassName("Cuteen_DarkSky")[0].remove()
          }
          ), 1e3)
      }
      ), 2e3)
  }
  ));
  "light" === ("dark" === document.documentElement.getAttribute("data-theme") ? "dark" : "light") ? (activateDarkMode(),
  saveToLocal.set("theme", "dark", 2),
  void 0 !== GLOBAL_CONFIG.Snackbar && btf.snackbarShow(GLOBAL_CONFIG.Snackbar.day_to_night),
  document.getElementById("modeicon").setAttribute("xlink:href", "#icon-sun")) : (activateLightMode(),
  saveToLocal.set("theme", "light", 2),
  document.querySelector("body").classList.add("DarkMode"),
  document.getElementById("modeicon").setAttribute("xlink:href", "#icon-moon")),
  "function" == typeof utterancesTheme && utterancesTheme(),
  "object" == typeof FB && window.loadFBComment(),
  window.DISQUS && document.getElementById("disqus_thread").children.length && setTimeout((()=>window.disqusReset()), 200)
}

window.onscroll = percent;

// 页面百分比
function percent() {
  let a = document.documentElement.scrollTop || window.pageYOffset, // 卷去高度
      b = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight) - document.documentElement.clientHeight, // 整个网页高度
      result = Math.round(a / b * 100), // 计算百分比
      btn = document.querySelector("#percent"); // 获取按钮
  //滚动条高度+视窗高度 = 可见区域底部高度
  var visibleBottom = window.scrollY + document.documentElement.clientHeight;
  // 获取位置监测容器，此处采用评论区
  var eventlistner = document.getElementById('post-tools') || document.getElementById('footer');
  var centerY = eventlistner.offsetTop + (eventlistner.offsetHeight / 2);
  if ((centerY < visibleBottom) || (result > 90)) {
      document.querySelector("#nav-totop").classList.add("long");
      btn.innerHTML = "返回顶部";
  } else {
      document.querySelector("#nav-totop").classList.remove("long");
      if (result >= 0) {
          btn.innerHTML = result;
      }
}
}

function topPostScroll() {
  if (document.getElementById("recent-post-top")) {
      let e = document.getElementById("recent-post-top");
      e.addEventListener("mousewheel", (function(t) {
              let o = -t.wheelDelta / 2;
              e.scrollLeft += o,
              document.body.clientWidth < 1300 && t.preventDefault()
          }
      ), !1)
  }
}



document.getElementById("page-name").innerText = document.title.split(" | 钧言")[0];