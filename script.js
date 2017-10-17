var conn, keep_button;

function send_note() {
    var note = document.getElementById("note");
    var date = new Date();
    var msg = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + " " + note.value;
    conn.send(msg);
    note.value = "";
}

function receive_note(msg) {
    var oldnotes = document.getElementById("oldnotes");
    oldnotes.innerHTML = "<p>" + msg.data + "</p>" + oldnotes.innerHTML;
}

function open_submission() {
    keep_button.disabled = false;
}

document.addEventListener("DOMContentLoaded", function() {
	// TODO: Better definition of socketUrl
	var socketUrl = '';
    keep_button = document.getElementById("keep");
    keep_button.addEventListener("click", send_note);
    keep_button.disabled = true;
    conn = new WebSocket(socketUrl);
    conn.onmessage = receive_note;
    conn.onopen = open_submission;
});
