/* ============================================================
   Simple Telegram Chat Widget  (one-way: user -> your Telegram)
   ------------------------------------------------------------
   Wired to the SalmaFX eBooks Telegram bot.
   Add this line to your pages (before </body>):
        <script src="chat-widget.js"></script>
   Works on GitHub Pages, no backend needed.
   ============================================================ */

(function () {
  // ---- YOUR SETTINGS (same bot as the site) -------------------------
  var TG_TOKEN  = "8965184177:AAFM9n86nDP_yOIAJOBHwTt5Ncvgh8ghzVQ";
  var TG_CHAT   = "-5578337872";
  var SITE_NAME = "MT5 eBooks";   // shows in the Telegram message
  var LANG      = "en";           // "en" or "ar"
  // --------------------------------------------------------------------

  var isAr = LANG === "ar";

  var T = {
    title:  isAr ? "تحدث معنا"          : "Chat with us",
    name:   isAr ? "اسمك"               : "Your name",
    msg:    isAr ? "اكتب رسالتك…"       : "Type your message…",
    send:   isAr ? "إرسال"              : "Send",
    done:   isAr ? "تم إرسال رسالتك!"   : "Message sent!",
    sub:    isAr ? "سنعود إليك قريباً."  : "We'll get back to you soon.",
    again:  isAr ? "إرسال رسالة أخرى"   : "Send another",
    empty:  isAr ? "الرجاء كتابة رسالة." : "Please type a message.",
    fail:   isAr ? "تعذّر الإرسال، حاول مرة أخرى." : "Couldn't send, please try again."
  };

  var ACCENT = "#0b84ff";
  var dir = isAr ? "rtl" : "ltr";
  var side = isAr ? "left" : "right";

  var css = document.createElement("style");
  css.textContent =
    "#tgw-btn{position:fixed;bottom:20px;" + side + ":20px;width:56px;height:56px;border-radius:50%;background:" + ACCENT + ";display:flex;align-items:center;justify-content:center;cursor:pointer;box-shadow:0 4px 12px rgba(0,0,0,.25);z-index:99999;font-size:26px;color:#fff;font-family:sans-serif}" +
    "#tgw-panel{position:fixed;bottom:88px;" + side + ":20px;width:300px;max-width:90vw;background:#fff;border-radius:14px;box-shadow:0 8px 28px rgba(0,0,0,.18);overflow:hidden;z-index:99999;display:none;direction:" + dir + ";font-family:sans-serif}" +
    "#tgw-head{background:" + ACCENT + ";color:#fff;padding:14px 16px;display:flex;align-items:center;justify-content:space-between;font-size:15px;font-weight:600}" +
    "#tgw-head span{cursor:pointer}" +
    "#tgw-body{padding:16px}" +
    "#tgw-body input,#tgw-body textarea{width:100%;box-sizing:border-box;border:1px solid #ddd;border-radius:8px;padding:10px;font-size:14px;margin-bottom:10px;font-family:inherit;direction:" + dir + "}" +
    "#tgw-body textarea{resize:none}" +
    "#tgw-body button{width:100%;background:" + ACCENT + ";color:#fff;border:none;border-radius:8px;padding:11px;font-size:15px;font-weight:600;cursor:pointer}" +
    "#tgw-done{display:none;text-align:center;padding:8px 0}" +
    "#tgw-done .ok{font-size:40px;color:#2e9e5b}" +
    "#tgw-done p{margin:8px 0 4px;font-size:15px;font-weight:600}" +
    "#tgw-done small{color:#666;font-size:13px}";
  document.head.appendChild(css);

  var wrap = document.createElement("div");
  wrap.innerHTML =
    '<div id="tgw-btn">&#128172;</div>' +
    '<div id="tgw-panel">' +
      '<div id="tgw-head">' + T.title + '<span id="tgw-close">&times;</span></div>' +
      '<div id="tgw-body">' +
        '<div id="tgw-form">' +
          '<input id="tgw-name" type="text" placeholder="' + T.name + '">' +
          '<textarea id="tgw-msg" rows="3" placeholder="' + T.msg + '"></textarea>' +
          '<button id="tgw-send">' + T.send + '</button>' +
        '</div>' +
        '<div id="tgw-done">' +
          '<div class="ok">&#10003;</div>' +
          '<p>' + T.done + '</p><small>' + T.sub + '</small><br>' +
          '<button id="tgw-again">' + T.again + '</button>' +
        '</div>' +
      '</div>' +
    '</div>';
  document.body.appendChild(wrap);

  var btn   = document.getElementById("tgw-btn");
  var panel = document.getElementById("tgw-panel");
  var form  = document.getElementById("tgw-form");
  var done  = document.getElementById("tgw-done");

  function toggle() {
    var open = panel.style.display === "none" || !panel.style.display;
    panel.style.display = open ? "block" : "none";
    btn.innerHTML = open ? "&times;" : "&#128172;";
  }
  btn.onclick = toggle;
  document.getElementById("tgw-close").onclick = toggle;

  document.getElementById("tgw-again").onclick = function () {
    document.getElementById("tgw-name").value = "";
    document.getElementById("tgw-msg").value = "";
    done.style.display = "none";
    form.style.display = "block";
  };

  document.getElementById("tgw-send").onclick = function () {
    var sendBtn = document.getElementById("tgw-send");
    var name = document.getElementById("tgw-name").value.trim();
    var msg  = document.getElementById("tgw-msg").value.trim();
    if (!msg) { alert(T.empty); return; }

    sendBtn.disabled = true; sendBtn.textContent = "...";

    var text =
      "\uD83D\uDCAC New message from " + SITE_NAME + "\n\n" +
      "\uD83D\uDC64 " + (name || "(no name)") + "\n" +
      "\uD83D\uDCDD " + msg;

    fetch("https://api.telegram.org/bot" + TG_TOKEN + "/sendMessage", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: TG_CHAT, text: text })
    })
    .then(function (r) { return r.json(); })
    .then(function (d) {
      if (d.ok) { form.style.display = "none"; done.style.display = "block"; }
      else { sendBtn.disabled = false; sendBtn.textContent = T.send; alert(T.fail); }
    })
    .catch(function () { sendBtn.disabled = false; sendBtn.textContent = T.send; alert(T.fail); });
  };
})();
