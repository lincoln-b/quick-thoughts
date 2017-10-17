var conn, keep_button;

function send_note() {
    var note = document.getElementById("note");
    conn.send(note.value);
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
    keep_button = document.getElementById("keep");
    keep_button.addEventListener("click", send_note);
    keep_button.disabled = true;
    conn = new WebSocket("ws://vps124502.vps.ovh.ca:8080");
    conn.onmessage = receive_note;
    conn.onopen = open_submission;
});